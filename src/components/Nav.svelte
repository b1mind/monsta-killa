<script>
  export let segment
</script>

<nav>
  <div aria-current={segment === undefined ? 'page' : undefined}>
    <!-- <li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li> -->
  </div>
</nav>

<style>
</style>
