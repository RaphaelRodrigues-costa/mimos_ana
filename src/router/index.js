import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoguinView from '../views/LoginView.vue'
import ProductView from '../views/ProductView.vue'
import ProfielView from '../views/ProfielView.vue'
import RegistreView from '../views/RegistreView.vue'
import ShoppingCart from '../views/ShoppingCart.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoguinView
  },
  {
    path: '/',
    redirect: '/login', // Redireciona '/' para '/loguin'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registre',
    name: 'registre',
    component: RegistreView
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
  {
    path: '/profiel',
    name: 'profiel',
    component: ProfielView
  },
  {
    path: '/shopping-cart',
    name: 'shopping-cart',
    component: ShoppingCart
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
