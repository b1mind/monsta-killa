<script>
  import GameBoard from '../components/GameBoard.svelte'
  import Logs from '../components/Logs.svelte'
  import Difficulty from '../components/Difficulty.svelte'
  import { msg } from '../components/stores/gameStore'

  let isOnBoard = true
  function playGame() {
    isOnBoard = false
  }
</script>

<main>
  <div class="msg">{$msg}</div>

  {#if isOnBoard}
    <Difficulty />
    <button on:click={playGame}>Play!</button>
  {:else}
    <GameBoard />
    <Logs />
  {/if}
</main>

<style lang="scss">
  main {
    text-align: center;
  }

  .msg {
    margin: 0.5rem 1rem;
    padding: 0.5rem 0;
    color: var(--clr-white);
    font-weight: bold;
    border-radius: 5px;
    box-shadow: var(--shadow-inner);
  }
</style>
