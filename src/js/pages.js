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
  }
]

export const articles = [
  {
    getContent: () => import('../pages/choosing-redux.md'),
    link: links[1],
    links: [
      links[0]
    ]
  },
  {
    getContent: () => import('../pages/currying-javascript.md'),
    link: links[2],
    links: [
      links[0]
    ]
  },
  {
    getContent: () => import('../pages/hashes-and-salts.md'),
    link: links[3],
    links: [
      links[0]
    ]
  }
]

export const wrote = {
  getContent: () => import('../pages/wrote.md'),
  link: links[0],
  links: [
    links[1],
    links[2],
    links[3]
  ]
}

export const home = {
  getContent: () => import('../pages/home.md'),
  link: {
    path: '/',
    title: 'Hi, I\'m Christian!'
  },
  links: [
    links[0]
  ]
}
