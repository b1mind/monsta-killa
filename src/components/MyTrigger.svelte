<script>
  import { afterUpdate, onMount } from 'svelte'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  let target
  let st

  //set default props for trigger
  export let stClass = 'triggered'
  export let tween = { autoAlpha: 0, x: '+=100', stagger: 0.3 }
  export let tweenType = 'from'
  export let stOptions = {
    start: 'center center',
    end: 'bottom top',
    toggleActions: 'play none none reverse',
  }
  export let tl = false

  function MakeTrigger() {
    let animation
    !tl
      ? (animation = gsap[tweenType](target.children, { ...tween }))
      : (animation = tl)
    st = ScrollTrigger.create({
      trigger: target,
      animation: animation,
      ...stOptions,
    })
  }

  //housekeeping, keeping it svelter
  onMount(() => {
    MakeTrigger()
    // tl ? setTimeLine() : false
    return () => {
      st.kill()
      /* if (!tl) return
      const targets = tl.getChildren()
      tl.kill()
      for (let i = 0; i < targets.length; i++) {
        if (targets[i].targets().length) {
          gsap.set(targets[i].targets(), { clearProps: 'all' })
        }
      } */
    }
  })

  afterUpdate(() => {
    //Todo would like this to control when its added or leaves
    // ScrollTrigger.refresh()
    // console.log(`component trigger added all refreshed`)
  })
</script>

<div class={stClass} bind:this={target} {tl} {tweenType} {tween} {...stOptions}>
  <slot />
</div>

<style type="text/scss">
  .triggered {
    padding: 2rem;
    background: salmon;
    overflow: hidden;
    @media (min-width: 400px) {
      background: yellow;
    }
  }

  .test {
    background: cadetblue;
  }

  .active {
    background: red;
  }
</style>
