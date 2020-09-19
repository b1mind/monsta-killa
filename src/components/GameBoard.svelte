<script>
  import { slide } from 'svelte/transition'

  const minAtk = 4
  const strongAtk = 7
  const playerStr = 10

  const diff = {
    1: {
      name: 'easy',
      healStr: 16,
      monsterStr: 9,
      heals: 2,
    },
    2: {
      name: 'normal',
      healStr: 14,
      monsterStr: 11,
      heals: 1,
    },
    3: {
      name: 'hard',
      healStr: 16,
      monsterStr: 14,
      heals: 0,
    },
  }

  export let gameMode
  /*   let monsterStr
  let healStr
  let heals */
  let playerHp = 100
  let monsterHp = 100
  let strongAttacks = 3
  let msg = `Attack to start!`
  let round = 0
  let endGame = false
  let highScore = 0
  let keyCode
  let battleLogs = []

  let { healStr, monsterStr, heals } = diff[gameMode]
  /*   function initStart(mode) {
    ;({ healStr, monsterStr, heals } = diff[mode])
  } */

  //todo make a chance to change mode
  function reset() {
    highScore = round >= highScore ? round : highScore
    endGame = false
    battleLogs = []
    playerHp = 100
    monsterHp = 100
    strongAttacks = 3
    round = 0
    msg = 'Try harder! Attack!'
    ;({ healStr, monsterStr, heals } = diff[gameMode])
  }

  function writeLog(e, atk, hp) {
    let logEvent = {
      event: e,
      atk: atk,
      hp: hp,
    }
    battleLogs = [logEvent, ...battleLogs]
  }

  function monsterAtk() {
    const monsterAtkDmg = Math.ceil(Math.random() * monsterStr)
    playerHp -= monsterAtkDmg
    writeLog('monster attacks', monsterAtkDmg, playerHp)
    endTurn()
  }

  function playerAtk(atkType) {
    let playerAtkDmg = Math.ceil(Math.random() * playerStr)
    playerAtkDmg < minAtk ? (playerAtkDmg += minAtk) : playerAtkDmg

    if (atkType === 'strong') {
      if (strongAttacks === 0) {
        return (msg = 'No strong Attacks left')
      } else {
        playerAtkDmg += strongAtk
        strongAttacks--
      }
    }

    monsterHp -= playerAtkDmg
    writeLog('player attacks', playerAtkDmg, monsterHp)
    monsterAtk()
  }

  function healPlayer() {
    const healPwr = Math.ceil(Math.random() * 10 + healStr)
    if (heals <= 0) return (msg = 'You are out of heals')
    playerHp += healPwr
    heals--
    writeLog('player heals', healPwr, playerHp)
    monsterAtk()
  }

  //todo add animations to buttons and key press?
  function handleKeyDown(event) {
    keyCode = event.keyCode

    if (endGame === true) {
      keyCode === 82 ? reset() : false
      return
    }

    if (keyCode == 74) {
      playerAtk()
    } else if (keyCode === 75) {
      playerAtk('strong')
    } else if (keyCode === 72) {
      healPlayer()
    }
  }

  function endTurn() {
    if (monsterHp <= 0) {
      msg = `Player Wins Round ${round}`
      battleLogs = []
      endRound(false)
    } else if (playerHp <= 0) {
      msg = `Monster Ate Player, Try Again`
      endRound(true)
    } else {
      msg = `Make your next move`
      console.log(battleLogs)
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

  // initStart(gameMode)
</script>

<svelte:window on:keydown={handleKeyDown} />

<div id="gameBoard" gameMode>
  <h3>{diff[gameMode].name}</h3>
  <p>{msg}</p>
  <h2>Round: {round} Best: {highScore}</h2>
  <h3>Monster</h3>
  <div class="progress-bar">
    <h3>{monsterHp} ♥</h3>
    <span style="width: {monsterHp}%" />
  </div>
  <br />

  <h3>Player</h3>
  <div class="progress-bar">
    <h3>{playerHp} ♥</h3>
    <span style="width: {playerHp}%" />
  </div>
  <br />

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

  {#each battleLogs as battleLog}
    <p>{battleLog.event} | {battleLog.atk}</p>
  {/each}
</div>

<style lang="scss">
  //todo make me look better

  .progress-bar {
    position: relative;
    height: 30px;
    background: #2d3647;
    border-radius: 5px;
    overflow: hidden;

    span {
      position: absolute;
      left: 0;
      height: 100%;
      background: skyblue;
      transition: width 0.5s ease-out;
      z-index: 0;
    }

    h3 {
      position: relative;
      margin: 0;
      padding: 5px 0;
      display: inline-block;
      color: white;
      font-weight: 700;
      z-index: 99;
    }
  }
</style>
