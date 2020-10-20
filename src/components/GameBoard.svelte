<script>
  import gsap from 'gsap'
  import {
    msg,
    difficulty,
    battleLogs,
    savedScore,
    round,
  } from '../components/stores/gameStore'
  import HealthBar from '../components/HealthBar.svelte'
  import GameWindow from './GameWindow.svelte'
  import Logs from '../components/Logs.svelte'

  const minAtk = 5
  const strongAtk = 8
  const playerStr = 11

  let highScore = !$savedScore ? 0 : $savedScore
  let playerHp = 100
  let monsterHp = 100
  let strongAttacks = 3
  $round = 0
  let endGame = false
  let keyCode
  let { healStr, monsterStr, heals } = $difficulty

  msg.set(`Attack to start!`)

  //todo option to change mode on reset
  function reset() {
    highScore = $round >= highScore ? $round : highScore
    localStorage.setItem($difficulty.name, highScore)
    endGame = false
    playerHp = 100
    monsterHp = 100
    strongAttacks = 3
    $round = 0
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
      { duration: 1, autoAlpha: 1, y: 0, x: 0 },
      { autoAlpha: 0, y: -5, x: 5, ease: 'power1.out' } //onComplete: () => monsterAtk()
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
      msg.set(`Player Wins Round ${$round}`)
      writeLog('Player Wins Round', $round, playerHp)
      endRound(false)
    } else if (playerHp <= 0) {
      msg.set(`Monster Ate Player, Try Again`)
      writeLog($msg, $round, playerHp)
      endRound(true)
    } else {
      msg.set(`Make your next move`)
    }
  }

  function endRound(end) {
    if (end) {
      return (endGame = true)
    } else {
      $round++
      playerHp = 100
      monsterHp = 100
      strongAttacks >= 9 ? false : strongAttacks++

      if ($round % 5 === 0) {
        monsterStr++
        strongAttacks >= 9 ? false : (strongAttacks += 2)
        healStr += 10
      }

      if ($round % 10 === 0) {
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

<svelte:window on:keydown|preventDefault={handleKeyDown} />

<div id="gameBoard">
  <div class="windowWrap">
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
  </div>

  <div class="controls">
    <Logs />

    {#if endGame}
      <button id="retry" on:click={reset}> Retry </button>
    {:else if !endGame}
      <div class="aWrap">
        <span class="count">{strongAttacks}</span>
        <button
          id="btn-strong"
          disabled={strongAttacks <= 0}
          on:pointerdown={() => playerAtk('strong')}
        >
          F
        </button>
      </div>

      <div class="hWrap">
        <button
          id="btn-heal"
          disabled={heals <= 0}
          on:pointerdown={healPlayer}
        >H</button>
        <span class="count">{heals}</span>
      </div>

      <button id="btn-atk" on:pointerdown={playerAtk}>A</button>
    {/if}
  </div>
</div>

<style lang="scss">
  .windowWrap {
    padding: 1rem;
    background: var(--clr-dark);
    box-shadow: var(--shadow-inner);
  }

  button {
    min-width: 45px;
    min-height: 45px;
    color: var(--clr-light);
    background: var(--clr-secondary);
    border: none;
    border-radius: 50%;
    box-shadow: var(--shadow-outer);
    outline: transparent;
    z-index: 2;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    &:active {
      box-shadow: var(--shadow-inner);
    }
    &:disabled {
      cursor: not-allowed;
    }
  }

  .controls {
    margin-top: 8px;
    padding: 10px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0 10px;
    box-shadow: var(--shadow-inner);
  }

  .aWrap,
  .hWrap {
    display: inline-flex;
    align-items: center;
  }

  .aWrap {
    justify-self: end;
  }

  .count {
    width: 40px;
    height: 40px;
    margin: 0 -5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bolder;
    background: var(--clr-dark);
    border-radius: 50%;
    box-shadow: var(--shadow-inner);
    z-index: 1;
  }

  #btn-atk {
    width: 80px;
    height: 80px;
    grid-column: 3/4;
    grid-row: 1 / span 2;
    align-self: center;
    justify-self: center;
    font-size: 2.5rem;
  }

  #retry {
    @extend #btn-atk;
    width: max-content;
    height: max-content;
    margin-right: 1rem;
    grid-column: 2/4;
    font-size: 1rem;
    border-radius: 5px;
  }
</style>
