<script>
  import { battleLogs } from '../components/stores/gameStore'
</script>

{#each $battleLogs as battleLog}
  <p>{battleLog.event} | {battleLog.atk}</p>
{/each}
