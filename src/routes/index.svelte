<script>
  const minAtk = 4
  const strongAtk = 7
  const healStr = 14
  const playerStr = 10
  let playerHp = 100
  let monsterStr = 11
  let monsterHp = 100
  let strongAttacks = 3
  let heals = 1
  let msg = 'Make your move'
  let round = 0

  function reset() {
    playerHp = 100
    monsterHp = 100
    strongAttacks = 3
    heals = 1
    round = 0
    monsterStr = 11
    msg = 'Try again'
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
        ;(playerAtkDmg += strongAtk), strongAttacks--
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
      msg = 'Monster Ate Player'
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

<main>
  <h2 class="headline">Monster Hunter</h2>
  <p>{msg}</p>
  <h3>Round: {round}</h3>

  <label for="monsterHp"> {monsterHp}hp Monster </label>
  <progress id="monsterHp" max="100" value={monsterHp} />
  <br />

  <label for="playerHp">{playerHp}hp Player</label>
  <progress id="playerHp" max="100" value={playerHp} />
  <br />

  <button on:click={playerAtk}>Attack</button>
  <button on:click={() => playerAtk('strong')}>Fire {strongAttacks}</button>
  <button on:click={healPlayer}>Heal {heals}</button>
</main>

<style>
  main {
    max-width: 340px;
    margin: 0 auto;
    font-family: sans-serif;
    text-align: center;
  }

  progress {
    height: 30px;
  }

  .headline {
    color: skyblue;
  }
</style>
