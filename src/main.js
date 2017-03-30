import 'reset-css/reset.css'
import 'highlight.js/styles/atom-one-light.css'
import './main.scss'

import page from 'page'

const home = {
  content: require('./pages/home.md'),
  title: 'Hi, I\'m Christian!'
}

const articles = [
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
const main = document.getElementsByTagName('main')

const getTitle = pageTitle => `${pageTitle} ~ ${baseTitle}`
const setArticle = (article) => {
  main[0].innerHTML = article.content
  document.title = getTitle(article.title)
}

page('/', () => {
  setArticle(home)
})

page('/:article', (context) => {
  const article = articles.find(article => article.path === context.params.article)

  if (article) {
    setArticle(article)
  } else {
    page.redirect('/')
  }
})

page('*', () => {
  page.redirecte('/')
})

page()
