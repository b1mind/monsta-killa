<script>
  import { slide } from 'svelte/transition'
  import { writable as writeLocal } from 'svelte-persistent-store/dist/local'
  import gsap from 'gsap'
  import { msg, difficulty, battleLogs } from '../components/stores/gameStore'
  import HealthBar from '../components/HealthBar.svelte'
  import GameWindow from './GameWindow.svelte'

  const minAtk = 4
  const strongAtk = 7
  const playerStr = 10

  //? todo make it all one key: object?
  const saveRound = writeLocal($difficulty.name, 0)
  let highScore = JSON.parse(localStorage.getItem($difficulty.name))

  let playerHp = 100
  let monsterHp = 100
  let strongAttacks = 3
  let round = 0
  let endGame = false
  let keyCode
  let { healStr, monsterStr, heals } = $difficulty

  msg.set(`Attack to start!`)

  //todo option to change mode on reset
  function reset() {
    highScore = round >= highScore ? round : highScore
    saveRound.set(highScore)
    endGame = false
    playerHp = 100
    monsterHp = 100
    strongAttacks = 3
    round = 0
    msg.set('Try harder! Attack!')
    ;({ healStr, monsterStr, heals } = $difficulty)
    battleLogs.set([])
  }

  //todo move write logic into store
  function writeLog(e, atk, hp) {
    let logEvent = {
      event: e,
      atk: atk,
      hp: hp,
    }
    battleLogs.set([logEvent, ...$battleLogs])
  }

  function atkAnime(atkId) {
    gsap.fromTo(
      atkId,
      { duration: 1.25, autoAlpha: 0.9, yPercent: 0, xPercent: 0 },
      { autoAlpha: 0, yPercent: -20, xPercent: 15, ease: 'power1.out' } //onComplete: () => monsterAtk()
    )
  }

  function monsterAtk() {
    const monsterAtkDmg = Math.ceil(Math.random() * monsterStr)
    playerHp -= monsterAtkDmg
    writeLog('monster attacks', monsterAtkDmg, playerHp)
    atkAnime('#monsterAtk')
    endTurn()
  }

  function playerAtk(atkType) {
    let playerAtkDmg = Math.ceil(Math.random() * playerStr)
    playerAtkDmg < minAtk ? (playerAtkDmg += minAtk) : playerAtkDmg

    if (atkType === 'strong') {
      if (strongAttacks === 0) {
        msg.set('No strong Attacks left')
        return
      } else {
        playerAtkDmg += strongAtk
        strongAttacks--
      }
    }

    monsterHp -= playerAtkDmg
    writeLog('player attacks', playerAtkDmg, monsterHp)
    atkAnime('#playerAtk')
    monsterAtk()
  }

  function healPlayer() {
    const healPwr = Math.ceil(Math.random() * 10 + healStr)

    if (heals <= 0) return msg.set('You are out of heals')
    playerHp += healPwr
    heals--

    writeLog('player heals', healPwr, playerHp)
    monsterAtk()
  }

  //? todo refactor into switch statement? good use ?
  function handleKeyDown(event) {
    keyCode = event.keyCode

    if (endGame === true) {
      keyCode === 82 ? reset() : msg.set(`press R to reset game`)
      return
    }

    if (keyCode == 74) {
      playerAtk()
    } else if (keyCode === 75) {
      playerAtk('strong')
    } else if (keyCode === 72) {
      healPlayer()
    } else {
      msg.set(`use H heal, J atk, K fire`)
    }
  }

  function endTurn() {
    if (monsterHp <= 0) {
      msg.set(`Player Wins Round ${round}`)
      writeLog('Player Wins Round', round, playerHp)
      endRound(false)
    } else if (playerHp <= 0) {
      msg.set(`Monster Ate Player, Try Again`)
      writeLog($msg, round, playerHp)
      endRound(true)
    } else {
      msg.set(`Make your next move`)
    }
  }

  function endRound(end) {
    if (end) {
      return (endGame = true)
    } else {
      round++
      playerHp = 100
      monsterHp = 100
      strongAttacks >= 9 ? false : strongAttacks++

      if (round % 5 === 0) {
        monsterStr++
        strongAttacks >= 9 ? false : (strongAttacks += 2)
        healStr += 10
      }

      if (round % 10 === 0) {
        heals++
      }
    }
  }

  $: isHeal = !$battleLogs[1]
    ? false
    : $battleLogs[1].event.includes('heal')
    ? 'atk-heal'
    : ''

  $: atkHeal = !$battleLogs[0]
    ? ''
    : isHeal
    ? `+${$battleLogs[1].atk}`
    : `-${$battleLogs[0].atk}`
</script>

<svelte:window on:keydown={handleKeyDown} />

<div id="gameBoard">
  <div>{$difficulty.name} - Round: {round} Best: {highScore}</div>

  <HealthBar
    name="Monster"
    atkId="playerAtk"
    health={monsterHp}
    atk={$battleLogs[1] ? `-${$battleLogs[1].atk}` : ''}
  />

  <GameWindow />

  <HealthBar
    name="Player"
    atkId="monsterAtk"
    atkType={isHeal}
    health={playerHp}
    atk={atkHeal}
  />

  {#if endGame}
    <div class="retry" id="test" transition:slide={{ y: -50 }}>
      <button on:click={reset}>Retry</button>
    </div>
  {:else if !endGame}
    <div class="controls" transition:slide={{ y: -50 }}>
      <button on:click={playerAtk}>Attack </button>
      <button on:click={() => playerAtk('strong')}>Fire {strongAttacks}</button>
      <button on:click={healPlayer}>Heal {heals}</button>
    </div>
  {/if}
</div>

<style lang="scss">
</style>
