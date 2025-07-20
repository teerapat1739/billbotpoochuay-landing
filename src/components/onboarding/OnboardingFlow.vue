<template>
  <div class="onboarding-container">
    <transition name="fade" mode="out-in">
      <!-- Welcome Step -->
      <div v-if="currentStep === 'welcome'" key="welcome" class="onboarding-step">
        <div class="step-content">
          <div class="icon-wrapper">
            <span class="icon">🎉</span>
          </div>
          <h1 class="title">{{ messages.title }}</h1>
          <p class="subtitle">{{ messages.subtitle }}</p>
          
          <div class="content-list">
            <div v-for="(item, index) in messages.content" :key="index" class="content-item">
              {{ item }}
            </div>
          </div>

          <div class="input-group">
            <input
              v-model="userName"
              type="text"
              :placeholder="messages.input_placeholder"
              class="name-input"
              @keyup.enter="completeWelcome"
              maxlength="50"
            />
          </div>

          <button 
            @click="completeWelcome" 
            :disabled="!userName.trim()"
            class="primary-button"
          >
            {{ messages.action }}
          </button>
        </div>
      </div>

      <!-- Setup Wallet Step -->
      <div v-else-if="currentStep === 'setup_wallet'" key="wallet" class="onboarding-step">
        <div class="step-content">
          <div class="icon-wrapper">
            <span class="icon">💰</span>
          </div>
          <h1 class="title">{{ messages.title }}</h1>
          <p class="subtitle">{{ messages.subtitle }}</p>

          <div class="wallet-options">
            <div 
              v-for="option in messages.options" 
              :key="option.type"
              @click="selectedWalletType = option.type"
              :class="['wallet-option', { selected: selectedWalletType === option.type }]"
            >
              <span class="wallet-icon">{{ option.icon }}</span>
              <div class="wallet-details">
                <h3>{{ option.label }}</h3>
                <p>{{ option.description }}</p>
              </div>
            </div>
          </div>

          <div class="input-group">
            <label>ชื่อกระเป๋าเงิน</label>
            <input
              v-model="walletName"
              type="text"
              placeholder="เช่น เงินสดส่วนตัว"
              class="wallet-input"
              maxlength="100"
            />
          </div>

          <div class="input-group">
            <label>ยอดเงินเริ่มต้น (ไม่บังคับ)</label>
            <input
              v-model.number="initialBalance"
              type="number"
              placeholder="0"
              class="balance-input"
              min="0"
              step="0.01"
            />
          </div>

          <button 
            @click="createWallet" 
            :disabled="!selectedWalletType || !walletName.trim()"
            class="primary-button"
          >
            {{ messages.action }}
          </button>
        </div>
      </div>

      <!-- First Transaction Step -->
      <div v-else-if="currentStep === 'first_transaction'" key="transaction" class="onboarding-step">
        <div class="step-content">
          <div class="icon-wrapper">
            <span class="icon">📝</span>
          </div>
          <h1 class="title">{{ messages.title }}</h1>
          <p class="subtitle">{{ messages.subtitle }}</p>

          <div class="example-list">
            <div v-for="(example, index) in messages.content" :key="index" class="example-item">
              {{ example }}
            </div>
          </div>

          <div class="tips-section">
            <div v-for="(tip, index) in messages.tips" :key="index" class="tip-item">
              {{ tip }}
            </div>
          </div>

          <div class="input-group">
            <textarea
              v-model="transactionText"
              placeholder="พิมพ์รายจ่ายของคุณที่นี่..."
              class="transaction-input"
              rows="3"
              @keyup.enter.ctrl="recordTransaction"
            ></textarea>
          </div>

          <button 
            @click="recordTransaction" 
            :disabled="!transactionText.trim() || isProcessing"
            class="primary-button"
          >
            {{ isProcessing ? 'กำลังบันทึก...' : messages.action }}
          </button>

          <button @click="skipStep" class="skip-button">
            ข้ามขั้นตอนนี้
          </button>
        </div>
      </div>

      <!-- Explore Features Step -->
      <div v-else-if="currentStep === 'explore_features'" key="features" class="onboarding-step">
        <div class="step-content">
          <div class="icon-wrapper">
            <span class="icon">🚀</span>
          </div>
          <h1 class="title">{{ messages.title }}</h1>
          <p class="subtitle">{{ messages.subtitle }}</p>

          <div class="features-grid">
            <div 
              v-for="feature in messages.features" 
              :key="feature.title"
              class="feature-card"
              @click="exploreFeature(feature)"
            >
              <span class="feature-icon">{{ feature.icon }}</span>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
              <span class="feature-action">{{ feature.action }} →</span>
            </div>
          </div>

          <button @click="completeOnboarding" class="primary-button">
            {{ messages.action }}
          </button>
        </div>
      </div>
    </transition>

    <!-- Progress indicator -->
    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
      </div>
      <div class="progress-steps">
        <div 
          v-for="(step, index) in steps" 
          :key="step"
          :class="['step-dot', { 
            active: currentStepIndex === index,
            completed: currentStepIndex > index 
          }]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import api from '@/services/api';
import { useOnboardingStore } from '@/stores/onboarding';
import { useRouter } from 'vue-router';

export default {
  name: 'OnboardingFlow',
  setup() {
    const router = useRouter();
    const onboardingStore = useOnboardingStore();
    
    // Reactive data
    const currentStep = ref('welcome');
    const userName = ref('');
    const selectedWalletType = ref('cash');
    const walletName = ref('');
    const initialBalance = ref(0);
    const transactionText = ref('');
    const isProcessing = ref(false);
    
    // Steps configuration
    const steps = ['welcome', 'setup_wallet', 'first_transaction', 'explore_features'];
    const currentStepIndex = computed(() => steps.indexOf(currentStep.value));
    const progress = computed(() => ((currentStepIndex.value + 1) / steps.length) * 100);
    
    // Get messages for current step
    const messages = computed(() => 
      onboardingStore.getStepMessages(currentStep.value)
    );
    
    // Step completion handlers
    const completeWelcome = async () => {
      if (!userName.value.trim()) return;
      
      await onboardingStore.completeStep('welcome', {
        display_name: userName.value,
        preferred_language: 'th'
      });
      
      currentStep.value = 'setup_wallet';
    };
    
    const createWallet = async () => {
      if (!selectedWalletType.value || !walletName.value.trim()) return;
      
      await onboardingStore.completeStep('setup_wallet', {
        wallet_type: selectedWalletType.value,
        wallet_name: walletName.value,
        initial_balance: initialBalance.value || 0
      });
      
      currentStep.value = 'first_transaction';
    };
    
    const recordTransaction = async () => {
      if (!transactionText.value.trim() || isProcessing.value) return;
      
      isProcessing.value = true;
      try {
        // Send to chat API to process natural language
        await api.createTransaction({
          description: transactionText.value,
          amount: 0, // Will be parsed by AI
          category: 'other',
          type: 'expense'
        });
        
        await onboardingStore.completeStep('first_transaction');
        currentStep.value = 'explore_features';
      } catch (error) {
        console.error('Failed to record transaction:', error);
      } finally {
        isProcessing.value = false;
      }
    };
    
    const skipStep = () => {
      currentStep.value = 'explore_features';
    };
    
    const exploreFeature = (feature) => {
      // Navigate to feature page
      const routes = {
        'วิเคราะห์การใช้จ่าย': '/analytics',
        'ตั้งงบประมาณ': '/budgets',
        'จัดการหลายกระเป๋า': '/wallets',
        'ค้นหาอัจฉริยะ': '/search'
      };
      
      const route = routes[feature.title];
      if (route) {
        router.push(route);
      }
    };
    
    const completeOnboarding = async () => {
      await onboardingStore.completeStep('explore_features');
      await api.completeOnboarding({
        user_name: userName.value,
        preferred_language: 'th',
        default_wallet_name: walletName.value,
        initial_balance: initialBalance.value
      });
      
      // Navigate to main app
      router.push('/dashboard');
    };
    
    // Initialize onboarding status
    onMounted(async () => {
      const status = await onboardingStore.fetchStatus();
      if (status.current_step && status.current_step !== 'completed') {
        currentStep.value = status.current_step;
      }
      
      // Pre-fill user name if available
      if (status.user_data?.display_name) {
        userName.value = status.user_data.display_name;
      }
    });
    
    return {
      currentStep,
      currentStepIndex,
      progress,
      steps,
      messages,
      userName,
      selectedWalletType,
      walletName,
      initialBalance,
      transactionText,
      isProcessing,
      completeWelcome,
      createWallet,
      recordTransaction,
      skipStep,
      exploreFeature,
      completeOnboarding
    };
  }
};
</script>

<style scoped>
.onboarding-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.onboarding-step {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-content {
  background: white;
  border-radius: 20px;
  padding: 40px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.icon-wrapper {
  text-align: center;
  margin-bottom: 20px;
}

.icon {
  font-size: 60px;
  display: inline-block;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  color: #2d3748;
}

.subtitle {
  font-size: 16px;
  text-align: center;
  color: #718096;
  margin-bottom: 30px;
}

.content-list {
  margin-bottom: 30px;
}

.content-item {
  padding: 8px 0;
  color: #4a5568;
  line-height: 1.6;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  font-size: 14px;
  color: #4a5568;
  margin-bottom: 8px;
}

.name-input,
.wallet-input,
.balance-input,
.transaction-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s;
}

.name-input:focus,
.wallet-input:focus,
.balance-input:focus,
.transaction-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.primary-button {
  width: 100%;
  padding: 14px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.primary-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.primary-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.skip-button {
  width: 100%;
  padding: 12px;
  background: transparent;
  color: #718096;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  transition: color 0.3s;
}

.skip-button:hover {
  color: #4a5568;
}

/* Wallet Options */
.wallet-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.wallet-option {
  display: flex;
  align-items: center;
  padding: 16px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
}

.wallet-option:hover {
  border-color: #cbd5e0;
  background: #f7fafc;
}

.wallet-option.selected {
  border-color: #667eea;
  background: #ebf4ff;
}

.wallet-icon {
  font-size: 32px;
  margin-right: 16px;
}

.wallet-details h3 {
  font-size: 16px;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 4px;
}

.wallet-details p {
  font-size: 14px;
  color: #718096;
}

/* Examples and Tips */
.example-list {
  background: #f7fafc;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 20px;
}

.example-item {
  padding: 4px 0;
  color: #4a5568;
  font-family: monospace;
}

.tips-section {
  margin-bottom: 24px;
}

.tip-item {
  padding: 8px 0;
  color: #718096;
  font-size: 14px;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 30px;
}

.feature-card {
  padding: 20px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
}

.feature-card:hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 24px;
  display: block;
  margin-bottom: 8px;
}

.feature-card h3 {
  font-size: 14px;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 4px;
}

.feature-card p {
  font-size: 12px;
  color: #718096;
  margin-bottom: 8px;
}

.feature-action {
  font-size: 12px;
  color: #667eea;
  font-weight: 600;
}

/* Progress */
.progress-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
}

.progress-bar {
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 12px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  transition: width 0.5s ease;
}

.progress-steps {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.step-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e2e8f0;
  transition: all 0.3s;
}

.step-dot.active {
  background: #667eea;
  transform: scale(1.3);
}

.step-dot.completed {
  background: #764ba2;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Responsive */
@media (max-width: 640px) {
  .step-content {
    padding: 24px;
  }
  
  .title {
    font-size: 24px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>