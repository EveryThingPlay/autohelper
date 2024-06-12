import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue'),
    },
    {
      path: '/cars',
      name: 'cars',
      component: () => import('../views/MyCars.vue'),
    },
    {
      path: '/car/:id',
      name: 'car-id',
      component: () => import('../views/CarView.vue'),
    }
  ]
})

export default router
