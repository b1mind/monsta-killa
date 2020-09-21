import { writable, derived } from 'svelte/store'

export const aMsg = writable(`Welcome, please pick a difficulty`)

export const aMode = writable(1)

const diff = [
  {
    name: 'easy',
    healStr: 16,
    monsterStr: 9,
    heals: 2,
  },
  {
    name: 'normal',
    healStr: 14,
    monsterStr: 11,
    heals: 1,
  },
  {
    name: 'hard',
    healStr: 16,
    monsterStr: 13,
    heals: 1,
  },
]

export const aDiff = derived(aMode, ($aMode) => diff[$aMode])
