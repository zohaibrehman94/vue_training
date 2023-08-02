import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      
    },
    {
      path : '/',
      name : 'login',
      component : ()=>import('../components/Login.vue')
    },
  ]
})

export default router
