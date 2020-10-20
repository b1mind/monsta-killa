<script>
  import { battleLogs } from '../components/stores/gameStore'
</script>

<div class="logWrap">
  {#each $battleLogs as battleLog}
    {battleLog.event}

    {battleLog.atk}
    <br />
  {:else}
    <p>Game Logs</p>
  {/each}
</div>

<style lang="scss">
  .logWrap {
    height: 125px;
    padding: 0.75em 0 0 1em;
    grid-row: 1 / span 2;
    font-size: small;
    text-align: left;
    background: var(--clr-dark);
    box-shadow: var(--shadow-inner);
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0.5em;
    }
  }
</style>
