import { writable, derived } from 'svelte/store'

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

export const msg = writable(`Welcome, please pick a difficulty`)
export const mode = writable(1)
export const savedScore = writable(0)
export const round = writable(0)
export const isOnBoard = writable(true)
export const difficulty = derived(mode, ($mode) => diff[$mode])

//todo make battleLogs derived > set.logs
export const battleLogs = writable([])
