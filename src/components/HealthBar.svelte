<script>
  export let name
  export let health
  export let atk
  export let atkId
  export let atkType = ''
</script>

<!-- prettier-ignore -->
<!-- <template lang="pug">
  .health-bar
    h3 {name}
    .progress-bar
      h3 ❤ {health}
        div(
            id="{atkId}"
            class="atk {atkType}"
          ) {atk}
      span(style="width: {health}%")
    br
</template> -->

<div class="health-bar">
  <h3>{name}</h3>
  <div class="progress-bar">
    <h3>
      ♥ {health}
      <div id={atkId} class="atk {atkType}">{atk}</div>
    </h3>
    <span style="width: {health}%" />
  </div>
  <br />
</div>

<style lang="scss">
  .progress-bar {
    position: relative;
    height: 30px;
    background: #2d3647;
    border-radius: 5px;
    overflow: hidden;

    span {
      position: absolute;
      left: 0;
      height: 100%;
      background: skyblue;
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
      color: red;
      text-shadow: -1px 1px 1.25px black;
      &-heal {
        @extend .atk;
        color: greenyellow;
      }
    }
  }
</style>
