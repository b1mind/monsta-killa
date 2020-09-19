import { writable } from 'svelte/store'

let aMsg = 'Welcome, pick your difficulty'

//todo make store for game settings/logs
const { subscribe, set } = writable(aMsg)

export default { subscribe, set }
