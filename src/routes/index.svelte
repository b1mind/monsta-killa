<script>
  import GameBoard from '../components/GameBoard.svelte'
  import Difficulty from '../components/Difficulty.svelte'
  import { msg, isOnBoard } from '../components/stores/gameStore'
</script>

<main>
  <div class="msg">{$msg}</div>

  {#if $isOnBoard}
    <div class="logo" />
  {:else}
    <GameBoard />
  {/if}
  <Difficulty />
</main>

<style lang="scss">
  main {
    max-width: 400px;
    margin: 0 auto;
    font-family: sans-serif;
    text-align: center;
  }

  .msg {
    margin: 0.5rem;
    padding: 0.5rem 0;
    color: var(--clr-white);
    font-weight: bold;
    border-radius: 5px;
    box-shadow: var(--shadow-inner);
  }
</style>
