const ghpages = require('gh-pages')
//You must add your own info and repo name change < > items
ghpages.publish(
  './dist/build/',
  {
    branch: 'master',
    repo: '<your-githubrepo.git>',
    user: {
      name: '<Your-username>',
      email: '<Your-github-emailId>',
    },
  },
  () => {
    console.log('\x1b[1m\x1b[33m Github Pages Deploy Complete! \x1b[0m')
  },
)
