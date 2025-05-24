import { createRouter, createWebHistory } from 'vue-router'
import Landingpage from '../views/Landingpage.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landingpage
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ],
})

export default router
