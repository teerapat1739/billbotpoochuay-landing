<template>
  <div class="settings-page">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-8">
        <i class="fas fa-cog mr-3"></i>Settings
      </h1>

      <!-- User Information Section -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-xl font-semibold text-gray-700 mb-4">
          <i class="fas fa-user mr-2"></i>User Information
        </h2>
        
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Display Name</label>
            <input
              v-model="userInfo.displayName"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your display name"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Preferred Language</label>
            <select
              v-model="userInfo.preferredLanguage"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="th">ภาษาไทย (Thai)</option>
              <option value="en">English</option>
            </select>
          </div>
          
          <button
            @click="updateUserInfo"
            :disabled="isUpdating"
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            <i class="fas fa-save mr-2"></i>
            {{ isUpdating ? 'Saving...' : 'Save Changes' }}
          </button>
        </div>
      </div>

      <!-- Preferences Section -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-xl font-semibold text-gray-700 mb-4">
          <i class="fas fa-sliders-h mr-2"></i>Preferences
        </h2>
        
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium text-gray-700">Email Notifications</label>
            <input
              v-model="preferences.emailNotifications"
              type="checkbox"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>
          
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium text-gray-700">Push Notifications</label>
            <input
              v-model="preferences.pushNotifications"
              type="checkbox"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>
          
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium text-gray-700">Dark Mode</label>
            <input
              v-model="preferences.darkMode"
              type="checkbox"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <!-- Danger Zone -->
      <div class="bg-red-50 border border-red-200 rounded-lg p-6">
        <h2 class="text-xl font-semibold text-red-700 mb-4">
          <i class="fas fa-exclamation-triangle mr-2"></i>Danger Zone
        </h2>
        
        <div class="space-y-4">
          <div>
            <h3 class="text-lg font-medium text-red-700 mb-2">Reset All Data</h3>
            <p class="text-red-600 mb-4">
              This will permanently delete all your transactions, wallets, budgets, and account information. 
              This action cannot be undone.
            </p>
            
            <button
              @click="showResetConfirmation = true"
              class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              <i class="fas fa-trash-alt mr-2"></i>Reset All Data
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Reset Confirmation Modal -->
    <div
      v-if="showResetConfirmation"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click="showResetConfirmation = false"
    >
      <div
        class="bg-white rounded-lg p-6 max-w-md mx-4"
        @click.stop
      >
        <div class="text-center">
          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <i class="fas fa-exclamation-triangle text-red-600 text-xl"></i>
          </div>
          
          <h3 class="text-lg font-medium text-gray-900 mb-4">
            Are you absolutely sure?
          </h3>
          
          <p class="text-sm text-gray-500 mb-6">
            This action will permanently delete all your data including:
          </p>
          
          <ul class="text-sm text-gray-500 text-left mb-6 space-y-1">
            <li>• All transactions and receipts</li>
            <li>• All wallets and balances</li>
            <li>• All budgets and categories</li>
            <li>• Your account and preferences</li>
          </ul>
          
          <p class="text-sm text-red-600 font-medium mb-6">
            This action cannot be undone!
          </p>
          
          <div class="flex space-x-3">
            <button
              @click="showResetConfirmation = false"
              class="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              @click="confirmReset"
              :disabled="isResetting"
              class="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              {{ isResetting ? 'Deleting...' : 'Yes, Delete Everything' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Success/Error Messages -->
    <div
      v-if="message"
      :class="[
        'fixed top-4 right-4 p-4 rounded-md z-50 transition-all duration-300',
        message.type === 'success' ? 'bg-green-100 border border-green-400 text-green-700' : 'bg-red-100 border border-red-400 text-red-700'
      ]"
    >
      <div class="flex items-center">
        <i :class="['mr-2', message.type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle']"></i>
        <span>{{ message.text }}</span>
        <button @click="message = null" class="ml-4 text-gray-400 hover:text-gray-600">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import apiService from '@/services/api.js'

export default {
  name: 'SettingsPage',
  setup() {
    const userInfo = reactive({
      displayName: '',
      preferredLanguage: 'th'
    })
    
    const preferences = reactive({
      emailNotifications: true,
      pushNotifications: true,
      darkMode: false
    })
    
    const showResetConfirmation = ref(false)
    const isUpdating = ref(false)
    const isResetting = ref(false)
    const message = ref(null)
    
    const showMessage = (text, type = 'success') => {
      message.value = { text, type }
      setTimeout(() => {
        message.value = null
      }, 5000)
    }
    
    const updateUserInfo = async () => {
      try {
        isUpdating.value = true
        
        // Call API to update user info
        await apiService.completeOnboarding({
          user_name: userInfo.displayName,
          preferred_language: userInfo.preferredLanguage
        })
        
        showMessage('Settings updated successfully!')
      } catch (error) {
        console.error('Failed to update user info:', error)
        showMessage('Failed to update settings. Please try again.', 'error')
      } finally {
        isUpdating.value = false
      }
    }
    
    const confirmReset = async () => {
      try {
        isResetting.value = true
        
        // Call API to reset all user data
        await apiService.request('/user/reset', {
          method: 'POST'
        })
        
        showMessage('All data has been deleted successfully!')
        showResetConfirmation.value = false
        
        // Redirect to onboarding or close webview
        setTimeout(() => {
          if (window.MessengerExtensions) {
            window.MessengerExtensions.requestCloseBrowser()
          } else {
            window.location.href = '/app/onboarding'
          }
        }, 2000)
        
      } catch (error) {
        console.error('Failed to reset data:', error)
        showMessage('Failed to reset data. Please try again.', 'error')
      } finally {
        isResetting.value = false
      }
    }
    
    const loadUserData = async () => {
      try {
        // Load user onboarding status to get user info
        const status = await apiService.getOnboardingStatus()
        if (status.user_data) {
          userInfo.displayName = status.user_data.display_name || ''
          // You can extend this to load more user preferences
        }
      } catch (error) {
        console.error('Failed to load user data:', error)
      }
    }
    
    onMounted(() => {
      loadUserData()
    })
    
    return {
      userInfo,
      preferences,
      showResetConfirmation,
      isUpdating,
      isResetting,
      message,
      updateUserInfo,
      confirmReset
    }
  }
}
</script>

<style scoped>
.settings-page {
  min-height: 100vh;
  background-color: #f7fafc;
}

.container {
  max-width: 800px;
}

/* Modal animation */
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}
</style>