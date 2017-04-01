export const home = {
  getContent: () => import('../pages/home.md'),
  title: 'Hi, I\'m Christian!'
}

export const articles = [
  home,
  {
    getContent: () => import('../pages/choosing-redux.md'),
    path: 'choosing-redux',
    title: 'Choosing Redux'
  },
  {
    getContent: () => import('../pages/currying-javascript.md'),
    path: 'currying-javascript',
    title: 'Currying JavaScript 🍛'
  },
  {
    getContent: () => import('../pages/hashes-and-salts.md'),
    path: 'hashes-and-salts',
    title: 'Hashes and Salts'
  }
]
