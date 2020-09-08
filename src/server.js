import sirv from 'sirv'
import polka from 'polka'
import compression from 'compression'
import * as sapper from '@sapper/server'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

const baseUrl = 'monsta-killa'
// const url = !dev ? baseUrl : '/'
const url = process.argv[1].includes('build') ? baseUrl : '/'

polka() // You can also use Express
  .use(
    url,
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log('error', err)
  })
