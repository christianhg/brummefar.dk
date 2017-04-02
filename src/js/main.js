import 'reset-css/reset.css'
import 'highlight.js/styles/atom-one-light.css'
import '../main.scss'

import * as router from 'page'

import { articles, home, wrote } from './pages'

const baseTitle = 'brummefar.dk'
const main = document.getElementsByTagName('main')
const menu = document.getElementsByTagName('nav')[0].getElementsByTagName('ul')

const getTitle = pageTitle => `${pageTitle} ~ ${baseTitle}`
const setMenu = links => {
  menu[0].innerHTML = links
    .map(link => `<li><a href="${link.path}">${link.title}</a></li>`)
    .join('')
}
const setPage = page => {
  page.getContent()
    .then(content => {
      main[0].innerHTML = content
    })
  document.title = getTitle(page.link.title)
  setMenu(page.links)
}

router('/', () => {
  setPage(home)
})

router('/wrote', () => {
  setPage(wrote)
})

router('/wrote/:article', context => {
  const article = articles.find(article => article.link.path === context.path)

  if (article) {
    setPage(article)
  } else {
    router.redirect('/')
  }
})

router('*', () => {
  router.redirect('/')
})

router()
