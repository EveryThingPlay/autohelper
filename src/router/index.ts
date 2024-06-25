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
      path: '/auth/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue'),
    },
    {
      path: '/auth/signup',
      name: 'signup',
      component: () => import('../views/auth/SignupView.vue'),
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
    },
    {
      path: '/car/:id/mileage',
      name: 'car-id-mileage',
      component: () => import('../views/CarMileage.vue'),
    },
    {
      path: '/carlist',
      name: 'car-list',
      component: () => import('../views/MyCarsEmpty.vue'),
    },
    {
      path: '/cars/add',
      name: 'AddCars',
      component: () => import('../views/AddCar.vue'),
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: () => import('../views/InvoiceView.vue')
    }
  ]
})

export default router
