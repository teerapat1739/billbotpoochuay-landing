import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import PrivacyPolicy from '../components/PrivacyPolicy.vue'
import UserDataDeletion from '../components/UserDataDeletion.vue'
import TermsOfService from '../components/TermsOfService.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/user-data-deletion',
    name: 'UserDataDeletion',
    component: UserDataDeletion
  },
  {
    path: '/terms-of-service',
    name: 'TermsOfService',
    component: TermsOfService
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router 