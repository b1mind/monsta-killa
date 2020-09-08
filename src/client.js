import * as sapper from '@sapper/app'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

sapper.start({
  target: document.querySelector('#sapper'),
})
