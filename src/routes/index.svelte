<script>
  import { slide } from 'svelte/transition'

  const minAtk = 4
  const strongAtk = 7
  const playerStr = 10

  //todo make a object for gameOptions+reset?
  let healStr = 14
  let playerHp = 100
  let monsterStr = 11
  let monsterHp = 100
  let strongAttacks = 3
  let heals = 1
  let msg = `Make your move`
  let round = 0
  let endGame = false

  //> Function junction whats the malfunction
  function reset() {
    endGame = false
    playerHp = 100
    monsterHp = 100
    strongAttacks = 3
    heals = 1
    healStr = 14
    round = 0
    monsterStr = 11
  }

  function monsterAtk() {
    const monsterAtkDmg = Math.ceil(Math.random() * monsterStr)
    playerHp -= monsterAtkDmg
    console.log(monsterAtkDmg)
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
    console.log(playerAtkDmg)
    monsterAtk()
  }

  function endTurn() {
    if (monsterHp <= 0) {
      msg = 'Player Wins'
      endRound(false)
    } else if (playerHp <= 0) {
      msg = 'Monster Ate Player, Try Again'
      endRound(true)
    } else {
      msg = 'Make your move'
    }
  }

  function endRound(end) {
    if (end) {
      return (endGame = true)
    } else {
      round++
      playerHp = 100
      monsterHp = 100
      strongAttacks++
      if (round % 5 === 0) {
        heals++
        monsterStr++
        strongAttacks += 2
        healStr += 10
      }
    }
  }

  function healPlayer() {
    const healPwr = Math.ceil(Math.random() * 10 + healStr)
    if (heals <= 0) return (msg = 'You are out of heals')
    playerHp += healPwr
    heals--
    monsterAtk()
  }
</script>

<!-- //> content is king -->
<main>
  <h1 class="headline">Monster Hunter</h1>
  <p>{msg}</p>
  <h3>Round: {round}</h3>

  <!-- //Todo figure best way to animate bars and health nums -->
  <h3>Monster</h3>
  <div class="progress-bar">
    <h3>{monsterHp} ♥</h3>
    <span style="width: {monsterHp}%" />
  </div>
  <br />

  <!-- //?other way then animate with gsap? 
    <progress id="monsterHp" max="100" value={monsterHp} /> 
  -->

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
      <button on:click={playerAtk}>Attack</button>
      <button on:click={() => playerAtk('strong')}>Fire {strongAttacks}</button>
      <button on:click={healPlayer}>Heal {heals}</button>
    </div>
  {/if}

  <!-- kill the king -->
</main>

<style lang="scss">
  //> make it look good

  main {
    max-width: 340px;
    margin: 0 auto;
    font-family: sans-serif;
    text-align: center;
  }

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
      z-index: -0;
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

  .headline {
    color: skyblue;
  }
</style>
