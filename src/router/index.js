import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import PrivacyPolicy from '../components/PrivacyPolicy.vue'
import UserDataDeletion from '../components/UserDataDeletion.vue'
import TermsOfService from '../components/TermsOfService.vue'
import OnboardingFlow from '../components/onboarding/OnboardingFlow.vue'
import SettingsPage from '../components/settings/SettingsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    component: OnboardingFlow
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
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router 