<script>
  import Nav from '../components/Nav.svelte'
  export let segment
</script>

<Nav {segment} />

<main>
  <slot />
</main>

<!-- <Footer /> -->
<style lang="scss">
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 0 2rem;
    margin: 0 auto;
    box-sizing: border-box;
    overflow: hidden;
  }
</style>
