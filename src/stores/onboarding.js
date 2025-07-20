import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useOnboardingStore = defineStore('onboarding', () => {
  // State
  const currentStep = ref('welcome')
  const userName = ref('')
  const selectedWallet = ref(null)
  const isCompleted = ref(false)
  const isLoading = ref(false)
  
  // Getters
  const progress = computed(() => {
    const steps = ['welcome', 'setup_wallet', 'first_transaction', 'explore_features']
    const currentIndex = steps.indexOf(currentStep.value)
    return ((currentIndex + 1) / steps.length) * 100
  })

  const canProceed = computed(() => {
    switch (currentStep.value) {
      case 'welcome':
        return userName.value.trim().length > 0
      case 'setup_wallet':
        return selectedWallet.value !== null
      case 'first_transaction':
        return true // Always can proceed from transaction step
      case 'explore_features':
        return true
      default:
        return false
    }
  })

  // Actions
  function setStep(step) {
    currentStep.value = step
  }

  function nextStep() {
    const steps = ['welcome', 'setup_wallet', 'first_transaction', 'explore_features']
    const currentIndex = steps.indexOf(currentStep.value)
    if (currentIndex < steps.length - 1) {
      currentStep.value = steps[currentIndex + 1]
    }
  }

  function previousStep() {
    const steps = ['welcome', 'setup_wallet', 'first_transaction', 'explore_features']
    const currentIndex = steps.indexOf(currentStep.value)
    if (currentIndex > 0) {
      currentStep.value = steps[currentIndex - 1]
    }
  }

  function setUserName(name) {
    userName.value = name
  }

  function setSelectedWallet(wallet) {
    selectedWallet.value = wallet
  }

  function completeOnboarding() {
    isCompleted.value = true
  }

  function reset() {
    currentStep.value = 'welcome'
    userName.value = ''
    selectedWallet.value = null
    isCompleted.value = false
    isLoading.value = false
  }

  return {
    // State
    currentStep,
    userName,
    selectedWallet,
    isCompleted,
    isLoading,
    // Getters
    progress,
    canProceed,
    // Actions
    setStep,
    nextStep,
    previousStep,
    setUserName,
    setSelectedWallet,
    completeOnboarding,
    reset
  }
})