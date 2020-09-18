import { writable } from 'svelte/store'

//todo make store for game settings/logs
const ExampleStore = writable([
  {
    id: 1,
    question: 'Svelte or React?',
    answerA: 'Svelte',
    answerB: 'React',
    votesA: 29,
    votesB: 20,
  },
])

export default ExampleStore
