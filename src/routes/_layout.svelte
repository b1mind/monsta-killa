<script>
  import Nav from '../components/Nav.svelte'
  import Footer from '../components/Footer.svelte'
  import Header from '../components/Header.svelte'
  export let segment
</script>

<Header>
  <Nav {segment} />
</Header>

<main>
  <slot />
</main>

<Footer />

<style lang="scss">
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
    overflow: hidden;
  }
</style>
