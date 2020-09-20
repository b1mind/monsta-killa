<script>
  import GameBoard from '../components/GameBoard.svelte'
  import { aMsg, aMode } from '../components/stores/gameStore'

  let onBoard = true

  function setMode(e) {
    aMode.set(e.currentTarget.value)
  }

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
        <input type="radio" on:change={setMode} name="gameMode" value="1" /> Easy
      </label>
      <label>
        <input
          type="radio"
          on:change={setMode}
          name="gameMode"
          value="2"
          checked
        /> Normal
      </label>
      <label>
        <input type="radio" on:change={setMode} name="gameMode" value="3" /> Hard
      </label>
    </div>

    <button on:click={playGame}>Play!</button>
  {:else}
    <GameBoard />
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
