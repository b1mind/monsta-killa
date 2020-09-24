<script>
  import { battleLogs } from '../components/stores/gameStore'
</script>

{#each $battleLogs as battleLog}
  <p>{battleLog.event} | {battleLog.atk}</p>
{:else}
  <p>Game Logs</p>
{/each}

<style lang="scss">
</style>
