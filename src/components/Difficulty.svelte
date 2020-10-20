<script>
  import {
    mode,
    isOnBoard,
    difficulty,
    savedScore,
    round,
  } from '../components/stores/gameStore'

  function setMode(e) {
    mode.set(e.currentTarget.value)
  }

  function playGame() {
    $isOnBoard = false
    $savedScore = JSON.parse(localStorage.getItem($difficulty.name))
  }
</script>

<footer class="wrap">
  {#if $isOnBoard}
    <button on:click={playGame}>Enter</button>

    <div class="difficulty">
      <label>
        <input type="radio" on:change={setMode} name="gameMode" value="0" />
        Easy
      </label>

      <label>
        <input
          type="radio"
          on:change={setMode}
          name="gameMode"
          value="1"
          checked
        />
        Normal
      </label>

      <label>
        <input type="radio" on:change={setMode} name="gameMode" value="2" />
        Hard
      </label>
    </div>
  {:else}
    <button disabled class="diffName">{$difficulty.name}</button>

    <div class="rounds">
      Best:
      {$savedScore === null ? 0 : $savedScore}
      Round:
      {$round}
    </div>
  {/if}
</footer>

<style lang="scss">
  .difficulty {
    padding: 6px 50px 6px 0;
    background: var(--clr-dark);
    border-radius: 5px;
    box-shadow: var(--shadow-inner);
  }

  .rounds {
    @extend .difficulty;
    background: var(--clr);
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px 1rem;
    color: var(--clr-white);
    font-weight: bolder;
    background: var(--clr);
    border: none;
    border-radius: 5px;
    box-shadow: var(--shadow-outer);
  }

  .diffName {
    @extend button;
    left: 0;
    right: auto;
    cursor: default;
  }

  footer {
    position: relative;
    margin: 10px 0.5rem 0 0.5rem;
  }
</style>
