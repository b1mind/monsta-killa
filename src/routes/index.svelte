<script>
  import GameBoard from '../components/GameBoard.svelte'
  import Logs from '../components/Logs.svelte'
  import { msg, mode } from '../components/stores/gameStore'

  let onBoard = true

  function setMode(e) {
    mode.set(e.currentTarget.value)
  }

  function playGame() {
    onBoard = false
  }
</script>

<main>
  <h1 class="headline">Monsta Killa</h1>
  <p>{$msg}</p>

  {#if onBoard}
    <div class="difficulty">
      <label>
        <input type="radio" on:change={setMode} name="gameMode" value="0" /> Easy
      </label>
      <label>
        <input
          type="radio"
          on:change={setMode}
          name="gameMode"
          value="1"
          checked
        /> Normal
      </label>
      <label>
        <input type="radio" on:change={setMode} name="gameMode" value="2" /> Hard
      </label>
    </div>

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
