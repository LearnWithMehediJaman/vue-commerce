import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Products from '../views/Products.vue';
import Contact from '../views/Contact.vue';
import TermsOfService from '@/views/TermsOfService.vue';
import PrivacyPolicy from '@/views/PrivacyPolicy.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Cart from '@/views/Cart.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },   
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: TermsOfService
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'rgister',
      component: Register
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})

export default router
