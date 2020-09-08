import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { afterUpdate, beforeUpdate } from 'svelte'

export function animate(node, { type, ...args }) {
  let method = gsap[type]
  let newAnimate = method(node, args)
  return {
    newAnimate,
    destroy() {
      console.log('do I need destroyed')
    },
  }
}

export function triggerMe(node, { ...args }) {
  let method = ScrollTrigger.create({
    trigger: node,
    animation: gsap.from(node, args),
    start: 'center center',
    toggleActions: 'play none none reverse',
    //markers: true,
  })
  return {
    method,
    // destroy() {
    //   console.log('killed triggerMe')
    //   method.kill()
    // },
  }
}

//todo add destroy methods to the rest of functions?
export function newTrigger(node, { ...args }) {
  let method = ScrollTrigger.create({
    trigger: node,
    animation: gsap.from(node, { duration: 1, opacity: 0, x: 100 }),
    ...args,
    //markers: true,
  })
  return {
    method,
    destroy() {
      // console.log('killed newTrigger')
      // method.kill()
    },
  }
}

export function pinScrub(node, { ...args }) {
  let st = ScrollTrigger.create({
    trigger: node,
    pin: true,
    scrub: true,
    animation: gsap.from(node.children, { ...args }),
    start: 'center center',
    toggleActions: 'play none none reverse',
    //markers: true,
  })
  return {
    st,
    destroy() {
      // console.log('killed newTrigger')
      // st.kill()
    },
  }
}

export const killTimeline = (timeline) => {
  const targets = timeline.getChildren()
  timeline.kill()
  for (let i = 0; i < targets.length; i++) {
    if (targets[i].targets().length) {
      gsap.set(targets[i].targets(), { clearProps: 'all' })
    }
  }
}

export function killTriggers() {
  let allTriggers = ScrollTrigger.getAll()
  console.log(allTriggers)
  allTriggers.forEach((t) => {
    t.kill()
  })
}

//FixMe Refresh triggers - need one function to rule them all
let needRefresh = true
export function refreshTriggers() {
  if (!needRefresh) return
  afterUpdate(() => {
    ScrollTrigger.refresh()
    console.log(`All layout triggers refreshed`)
    needRefresh = false
  })
  needRefresh = true
}
