import { writable } from 'svelte/store'

function changeMsg() {
  const { subscribe, set } = writable(`Welcome, please pick a difficulty`)
  return { subscribe, set }
}

function changeMode() {
  const { subscribe, set } = writable(2)
  return { subscribe, set }
}

export const aMsg = changeMsg()
export const aMode = changeMode()
