<script>
  import Nav from '../components/Nav.svelte'
  export let segment
</script>

<header>
  <h1 class="headline">monstaKilla</h1>
  <Nav {segment} />
</header>

<div class="main-wrap">
  <slot />
</div>

<!-- <Footer /> -->
<style lang="scss">
  .headline {
    max-width: 340px;
    margin: 0 auto;
    padding: 0 4px;
    font-size: 1.5rem;
    font-weight: bold;
  }
</style>
