import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basket',
    name: 'Basket',
    component: () => import(/* webpackChunkName: "about" */ '../views/Basket.vue')
  },
  {
    path: '/mySpace',
    name: 'MySpace',
    component: () => import(/* webpackChunkName: "about" */ '../views/MySpace.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
