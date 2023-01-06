import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About'
import HomeNew from '../views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeNew
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router