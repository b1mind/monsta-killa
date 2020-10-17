const sveltePreprocess = require('svelte-preprocess')

const createPreprocess = () => [
  sveltePreprocess({
    scss: true,
    pug: true,
    postcss: {
      plugins: [
        require('postcss-combine-media-query'),
        require('autoprefixer')({
          grid: 'autoplace',
          overrideBrowserslist: ['> 1%', 'last 2 versions', 'ie >= 11'],
        }),
      ]
    }
  }),
  // you could add other pre processors like mdsvex
]

module.exports = {
  createPreprocess,
  // options for svelte-check extension
  preprocess: createPreprocess(),
}
