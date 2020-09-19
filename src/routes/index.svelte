<script>
  import GameBoard from '../components/GameBoard.svelte'
  import aMsg from '../components/stores/gameStore'

  let onBoard = true
  let gameMode = 2

  function playGame() {
    onBoard = false
  }
</script>

<main>
  <h1 class="headline">Monsta Killa</h1>
  <p>{$aMsg}</p>

  {#if onBoard}
    <div class="difficulty">
      <label>
        <input type="radio" bind:group={gameMode} value={1} /> Easy
      </label>
      <label>
        <input type="radio" bind:group={gameMode} value={2} /> Normal
      </label>
      <label>
        <input type="radio" bind:group={gameMode} value={3} /> Hard
      </label>
    </div>

    <button on:click={playGame}>Play!</button>
  {:else}
    <GameBoard {gameMode} />
  {/if}
</main>

<style lang="scss">
  main {
    max-width: 340px;
    margin: 0 auto;
    font-family: sans-serif;
    text-align: center;
  }

  .headline {
    color: skyblue;
  }
</style>
