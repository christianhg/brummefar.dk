import 'reset-css/reset.css'
import 'highlight.js/styles/atom-one-light.css'
import '../main.scss'

import { Parser } from 'html-to-react'
import React from 'react'
import DocumentTitle from 'react-document-title'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import { accounts } from './accounts'
import { articles, home, wrote } from './pages'

const parser = new Parser()
const baseTitle = 'brummefar.dk'
const root = document.getElementById('root')
const getTitle = pageTitle => `${pageTitle} ~ ${baseTitle}`

const Account = account => (
  <span key={account.link}>
    <br />
    <a href={account.link} rel='me'>{account.name}/<strong>{account.username}</strong></a>
  </span>
)

const Footer = () => (
  <footer>
    <p>
      &copy; 2017 ~ Christian 'Brummefar' Grøngaard
      {accounts.map(Account)}
    </p>
  </footer>
)

const MenuLink = link => (
  <li key={link.path}>
    <Link to={link.path}>{link.title}</Link>
  </li>
)

const Menu = props => (
  <nav>
    <ul>
      {props.page.links && props.page.links.map(MenuLink)}
    </ul>
  </nav>
)

const Header = props => (
  <header>
    <h1><Link to='/'>{baseTitle}</Link></h1>
    <Menu page={props.page} />
  </header>
)

const Main = props => (
  <main>
    {props.page.date && <div className='date'>{props.page.date}</div>}
    <div>{parser.parse(props.page.content)}</div>
  </main>
)

class Page extends React.Component {
  constructor (props) {
    super()
    this.state = {
      page: Object.assign(props.page, { content: 'Loading...' })
    }
  }

  componentDidMount () {
    this.state.page.getContent()
      .then(content => this.setState(prevState => Object.assign(prevState.page, { content })))
  }

  render () {
    return (
      <DocumentTitle title={getTitle(this.state.page.link.title)}>
        <div>
          <Header page={this.state.page} />
          <Main page={this.state.page} />
        </div>
      </DocumentTitle>
    )
  }
}

const Home = () => (
  <Page page={home} />
)

const Wrote = () => (
  <Page page={wrote} />
)

const Article = ({ match }) => {
  const article = articles
    .find(article => article.link.path === `/wrote/${match.params.article}`)

  return article
    ? <Page page={article} />
    : <Home />
}

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/wrote' component={Wrote} />
        <Route path='/wrote/:article' component={Article} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </div>
  </Router>
)

ReactDOM.render(<Routes />, root)
