import 'reset-css/reset.css'
import 'highlight.js/styles/atom-one-light.css'
import './main.scss'

import './vendor/ga'

import Navigo from 'navigo'

const home = {
  content: require('./pages/home.md'),
  title: 'Hi, I\'m Christian!'
}

const pages = [
  home,
  {
    content: require('./pages/choosing-redux.md'),
    path: 'choosing-redux',
    title: 'Choosing Redux'
  },
  {
    content: require('./pages/currying-javascript.md'),
    path: 'currying-javascript',
    title: 'Currying JavaScript 🍛'
  }
]

const baseTitle = 'brummefar.dk'
const router = new Navigo(undefined, true, '#!')
const main = document.getElementsByTagName('main')

const getTitle = pageTitle => `${pageTitle} ~ ${baseTitle}`

router
  .on({
    ':page': (params) => {
      const page = pages.find(page => page.path === params.page)

      if (page) {
        main[0].innerHTML = page.content
        document.title = getTitle(page.title)
      } else {
        router.navigate('')
      }
    },
    '*': () => {
      main[0].innerHTML = home.content
      document.title = getTitle(home.title)
    }
  })
  .resolve()

router
  .notFound(() => router.navigate(''))
