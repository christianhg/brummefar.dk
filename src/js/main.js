import 'reset-css/reset.css'
import 'highlight.js/styles/atom-one-light.css'
import '../main.scss'

import page from 'page'

import { articles, home } from './articles'

const baseTitle = 'brummefar.dk'
const main = document.getElementsByTagName('main')

const getTitle = pageTitle => `${pageTitle} ~ ${baseTitle}`
const setArticle = article => {
  article.getContent()
    .then(content => {
      main[0].innerHTML = content
    })
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
