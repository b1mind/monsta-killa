<script>
  const minAtk = 4
  const strongAtk = 7
  const playerStr = 10
  let healStr = 14
  let playerHp = 100
  let monsterStr = 11
  let monsterHp = 100
  let strongAttacks = 3
  let heals = 1
  let msg = 'Make your move'
  let round = 0

  //> Function junction whats the malfunction
  function reset() {
    playerHp = 100
    monsterHp = 100
    strongAttacks = 3
    heals = 1
    healStr = 14
    round = 0
    monsterStr = 11
  }

  function monsterAtk(node) {
    const monsterAtkDmg = Math.ceil(Math.random() * monsterStr)
    playerHp -= monsterAtkDmg
    console.log(monsterAtkDmg)
    endTurn()
  }

  function playerAtk(node, atkType) {
    let playerAtkDmg = Math.ceil(Math.random() * playerStr)
    playerAtkDmg < minAtk ? (playerAtkDmg += minAtk) : playerAtkDmg
    console.log(node.target)

    if (atkType === 'strong') {
      if (strongAttacks === 0) {
        return (msg = 'No strong Attacks left')
      } else {
        ;(playerAtkDmg += strongAtk), strongAttacks--
      }
    }

    monsterHp -= playerAtkDmg
    console.log(playerAtkDmg)
    monsterAtk(node)
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
      return reset()
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
    console.log(healPwr)
    monsterAtk()
  }
</script>

<!-- //> content is king -->
<!-- //Todo remake old design and bring in -->
<main>
  <h2 class="headline">Monster Hunter</h2>
  <p>{msg}</p>
  <h3>Round: {round}</h3>

  <!-- //Todo figure best way to animate bars and health nums -->
  <h2>Monster</h2>
  <div class="progress-bar">
    <h3>{monsterHp}hp</h3>
    <span style="width: {monsterHp}%" />
  </div>
  <!-- //?other way then animate with gsap? 
    <progress id="monsterHp" max="100" value={monsterHp} /> 
  -->
  <br />
  <h2>Player</h2>
  <div class="progress-bar">
    <h3>{playerHp}hp</h3>
    <span style="width: {playerHp}%" />
  </div>
  <br />

  <button on:click={playerAtk}>Attack</button>
  <button on:click={() => playerAtk('strong')}>Fire {strongAttacks}</button>
  <button on:click={healPlayer}>Heal {heals}</button>
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
    span {
      width: 100%;
      height: 100%;
      display: inline-block;
      background: skyblue;
      transition: width 0.5s ease-out;
    }
    h3 {
      position: absolute;
      left: 45%;
      margin: 0;
      padding: 5px 0;
      color: white;
      z-index: 99;
    }
  }

  .headline {
    color: skyblue;
  }
</style>
