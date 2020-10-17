<script>
  export let name
  export let health
  export let atk
  export let atkId
  export let atkType = ''

  $: hpBarColor =
    health >= 50 ? '--clr-green' : health > 25 ? '--clr-orange' : '--clr-red'
</script>

<div class="health-bar">
  <div>{name}</div>

  <div class="progress-bar">
    <h3>
      ♥
      {health}
      <div id={atkId} class="atk {atkType}">{atk}</div>
    </h3>

    <span style="width: {health}%; background: var({hpBarColor});" />
  </div>

  <br />
</div>

<style lang="scss">
  .progress-bar {
    position: relative;
    height: 30px;
    background: var(--clr-secondary);
    border-radius: 5px;
    box-shadow: var(--shadow-outer);
    overflow: hidden;

    span {
      position: absolute;
      left: 0;
      height: 100%;
      transition: width 0.5s ease-out;
      z-index: 0;
    }

    h3 {
      position: relative;
      margin: 0;
      padding: 5px 0;
      display: inline-block;
      color: white;
      font-weight: 700;
      z-index: 99;
    }

    .atk {
      @extend h3;
      position: absolute;
      top: -3px;
      right: -20px;
      width: 2rem;
      color: var(--clr-red);
      text-shadow: -1px 1px 1.25px black;
      &-heal {
        @extend .atk;
        color: var(--clr-green);
      }
    }
  }
</style>
