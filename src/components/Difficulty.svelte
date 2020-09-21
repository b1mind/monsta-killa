<script>
  import { mode } from '../components/stores/gameStore'

  function setMode(e) {
    mode.set(e.currentTarget.value)
  }
</script>

<div class="difficulty">
  <label>
    <input type="radio" on:change={setMode} name="gameMode" value="0" /> Easy
  </label>
  <label>
    <input type="radio" on:change={setMode} name="gameMode" value="1" checked />
    Normal
  </label>
  <label>
    <input type="radio" on:change={setMode} name="gameMode" value="2" /> Hard
  </label>
</div>
