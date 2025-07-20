/**
 * API Service for Bill Bot integration
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
const API_VERSION = import.meta.env.VITE_API_VERSION || 'v1';

class ApiService {
  constructor() {
    this.baseURL = `${API_BASE_URL}/api/${API_VERSION}`;
    this.token = null;
    this.refreshTimer = null;
  }

  /**
   * Set authentication token
   */
  setToken(token) {
    this.token = token;
    // Set up auto-refresh before expiration
    this.setupTokenRefresh();
  }

  /**
   * Clear authentication
   */
  clearAuth() {
    this.token = null;
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }
  }

  /**
   * Setup token refresh timer
   */
  setupTokenRefresh() {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
    }
    // Refresh token 2 minutes before expiration (15min - 2min = 13min)
    this.refreshTimer = setTimeout(() => {
      this.refreshToken();
    }, 13 * 60 * 1000);
  }

  /**
   * Make authenticated API request
   */
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
        credentials: 'include',
      });

      if (response.status === 401) {
        // Token expired, try to refresh
        await this.refreshToken();
        // Retry request with new token
        headers['Authorization'] = `Bearer ${this.token}`;
        const retryResponse = await fetch(url, {
          ...options,
          headers,
          credentials: 'include',
        });
        return await this.handleResponse(retryResponse);
      }

      return await this.handleResponse(response);
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  /**
   * Handle API response
   */
  async handleResponse(response) {
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.detail || data.message || 'API request failed');
    }
    
    return data;
  }

  /**
   * Create authentication token
   */
  async createToken(messengerId) {
    const response = await this.request('/auth/token', {
      method: 'POST',
      body: JSON.stringify({ messenger_id: messengerId }),
    });
    
    this.setToken(response.token);
    return response;
  }

  /**
   * Refresh authentication token
   */
  async refreshToken() {
    try {
      const response = await this.request('/auth/refresh', {
        method: 'POST',
      });
      
      this.setToken(response.token);
      return response;
    } catch (error) {
      console.error('Token refresh failed:', error);
      this.clearAuth();
      throw error;
    }
  }

  /**
   * Get onboarding status
   */
  async getOnboardingStatus() {
    return await this.request('/onboarding/status');
  }

  /**
   * Complete onboarding
   */
  async completeOnboarding(data) {
    return await this.request('/onboarding/complete', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Get transactions
   */
  async getTransactions(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return await this.request(`/transactions${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * Create transaction
   */
  async createTransaction(data) {
    return await this.request('/transactions', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Update transaction
   */
  async updateTransaction(id, data) {
    return await this.request(`/transactions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  /**
   * Delete transaction
   */
  async deleteTransaction(id) {
    return await this.request(`/transactions/${id}`, {
      method: 'DELETE',
    });
  }

  /**
   * Get wallets
   */
  async getWallets() {
    return await this.request('/wallets');
  }

  /**
   * Create wallet
   */
  async createWallet(data) {
    return await this.request('/wallets', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Get budgets
   */
  async getBudgets() {
    return await this.request('/budgets');
  }

  /**
   * Create budget
   */
  async createBudget(data) {
    return await this.request('/budgets', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Get analytics summary
   */
  async getAnalyticsSummary(period = 'month') {
    return await this.request(`/analytics/summary?period=${period}`);
  }

  /**
   * Search transactions
   */
  async searchTransactions(query) {
    return await this.request('/search/transactions', {
      method: 'POST',
      body: JSON.stringify({ query }),
    });
  }
}

// Export singleton instance
export default new ApiService();