import 'reset-css/reset.css'
import 'highlight.js/styles/atom-one-light.css'
import './main.scss'

import './vendor/ga'

import Navigo from 'navigo'

const home = {
  content: require('./pages/home.md')
}

const pages = [
  home,
  {
    content: require('./pages/choosing-redux.md'),
    path: 'choosing-redux'
  },
  {
    content: require('./pages/currying-javascript.md'),
    path: 'currying-javascript'
  }
]

const router = new Navigo(undefined, true, '#!')
const main = document.getElementsByTagName('main')

router
  .on({
    ':page': (params) => {
      const page = pages.find(page => page.path === params.page)

      if (page) {
        main[0].innerHTML = page.content
      } else {
        router.navigate('')
      }
    },
    '*': () => {
      main[0].innerHTML = home.content
    }
  })
  .resolve()

router
  .notFound(() => router.navigate(''))
