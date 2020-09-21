<script>
  import GameBoard from '../components/GameBoard.svelte'
  import Logs from '../components/Logs.svelte'
  import Difficulty from '../components/Difficulty.svelte'
  import { msg } from '../components/stores/gameStore'

  let onBoard = true
  function playGame() {
    onBoard = false
  }
</script>

<main>
  <h1 class="headline">Monsta Killa</h1>
  <p>{$msg}</p>

  {#if onBoard}
    <Difficulty />
    <button on:click={playGame}>Play!</button>
  {:else}
    <GameBoard />
    <Logs />
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
