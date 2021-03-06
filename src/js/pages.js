const links = [
  {
    path: '/wrote',
    title: 'Wrote'
  },
  {
    path: '/wrote/choosing-redux',
    title: 'Choosing Redux'
  },
  {
    path: '/wrote/currying-javascript',
    title: 'Currying JavaScript'
  },
  {
    path: '/wrote/hashes-and-salts',
    title: 'Hashes and Salts'
  },
  {
    path: '/wrote/immutable-javascript',
    title: 'Immutable JavaScript'
  },
  {
    path: '/wrote/git-and-how-we-commit',
    title: 'Git (and how we Commit)'
  }
]

export const articles = [
  {
    date: '6 March 2017',
    getContent: () => import('../pages/choosing-redux.md'),
    link: links[1],
    links: [links[0]]
  },
  {
    date: '27 March 2017',
    getContent: () => import('../pages/currying-javascript.md'),
    link: links[2],
    links: [links[0]]
  },
  {
    date: '1 April 2017',
    getContent: () => import('../pages/hashes-and-salts.md'),
    link: links[3],
    links: [links[0]]
  },
  {
    date: '17 April 2017',
    getContent: () => import('../pages/immutable-javascript.md'),
    link: links[4],
    links: [links[0]]
  },
  {
    date: '7 January 2018',
    getContent: () => import('../pages/git-and-how-we-commit.md'),
    link: links[5],
    links: [links[0]]
  }
]

export const wrote = {
  getContent: () => import('../pages/wrote.md'),
  link: links[0],
  links: [links[1], links[2], links[3], links[4], links[5]]
}

export const home = {
  getContent: () => import('../pages/home.md'),
  link: {
    path: '/',
    title: "Hi, I'm Christian!"
  },
  links: [links[0]]
}
