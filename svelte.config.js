const sveltePreprocess = require('svelte-preprocess')

const preprocess = sveltePreprocess({
  javascript: true,
  scss: true,
  pug: true,
  postcss: true,
})

/* let onwarn = (warning, handler) => {
  if (warning == warning.message.includes('Unused CSS selector'))
   return 
  if (warning == 'Unused CSS selector') 
    return
  handler(warning)
} */

const onwarn = (warning, onwarn) => {
  if (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) return true
  if (warning.message == 'Unused CSS selector') return
  return onwarn(warning)
}

module.exports = {
  preprocess: preprocess,
  onwarn,
  // ...other svelte options
}
