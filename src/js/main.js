import 'reset-css/reset.css'
import 'highlight.js/styles/atom-one-light.css'
import '../main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Parser } from 'html-to-react'

import { articles, home, wrote } from './pages'

const router = require('page')
const parser = new Parser()

const baseTitle = 'brummefar.dk'
const main = document.getElementsByTagName('main')[0]
const menu = document.getElementsByTagName('nav')[0]

const menuLink = link => <li key={link.path}><a href={link.path}>{link.title}</a></li>
const getTitle = pageTitle => `${pageTitle} ~ ${baseTitle}`

const Menu = props => (
  <ul>
    {props.page.links && props.page.links.map(menuLink)}
  </ul>
)

const Main = props => (
  <div>
    {props.page.date && <div className='date'>{props.page.date}</div>}
    <div>{parser.parse(props.page.content)}</div>
  </div>
)

const setPage = page => {
  document.title = getTitle(page.link.title)
  ReactDOM.render(<Menu page={page} />, menu)
  page.getContent()
    .then(content =>
      ReactDOM.render(<Main page={Object.assign({}, page, { content })} />, main))
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
