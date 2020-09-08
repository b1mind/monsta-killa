<script>
  import { createEventDispatcher } from 'svelte'
  import { animate } from '../../gsap.js'

  let dispatch = createEventDispatcher()

  export let items
  export let activeItem
</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li on:click={() => dispatch('tabChange', item)}>
        <div class:active={item === activeItem}>{item}</div>
      </li>
    {/each}
  </ul>
  <div>
    <slot />
  </div>
</div>

<style type="text/scss">
  .tabs {
    margin-bottom: 1em;
  }

  ul {
    padding: 0;
    display: flex;
    justify-content: center;
    list-style: none;
  }

  li {
    margin: 0 1em;
    font-size: 1.5rem;
    color: grey;
    cursor: pointer;
  }

  .active {
    padding-bottom: 0.5em;
    color: purple;
    border-bottom: 2px solid purple;
  }
</style>
