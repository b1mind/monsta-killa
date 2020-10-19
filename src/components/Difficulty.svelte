<script>
  import { mode, isOnBoard } from '../components/stores/gameStore'

  function setMode(e) {
    mode.set(e.currentTarget.value)
  }

  function playGame() {
    $isOnBoard = false
  }
</script>

<button on:click={playGame}>Play!</button>
<div class="difficulty">
  <label>
    <input type="radio" on:change={setMode} name="gameMode" value="0" />
    Easy
  </label>

  <label>
    <input type="radio" on:change={setMode} name="gameMode" value="1" checked />
    Normal
  </label>

  <label>
    <input type="radio" on:change={setMode} name="gameMode" value="2" />
    Hard
  </label>
</div>

<style lang="scss">
  .difficulty {
    margin: 10px 0;
  }
</style>
