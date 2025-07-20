/**
 * Authentication Service for Messenger Webview
 */

import api from './api';

class AuthService {
  constructor() {
    this.isAuthenticated = false;
    this.user = null;
    this.sessionTimeout = null;
    this.sessionDuration = import.meta.env.VITE_SESSION_TIMEOUT || 900000; // 15 minutes
  }

  /**
   * Initialize authentication from URL parameters
   */
  async initFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const messengerId = urlParams.get('messenger_id');

    if (token) {
      // Token provided in URL
      api.setToken(token);
      this.isAuthenticated = true;
      this.startSessionTimer();
      return true;
    } else if (messengerId) {
      // Messenger ID provided, need to create token
      try {
        await api.createToken(messengerId);
        this.isAuthenticated = true;
        this.startSessionTimer();
        return true;
      } catch (error) {
        console.error('Failed to create token:', error);
        return false;
      }
    }

    // Check if we have a stored token
    const storedToken = sessionStorage.getItem('webview_token');
    if (storedToken) {
      api.setToken(storedToken);
      try {
        // Verify token is still valid
        await api.refreshToken();
        this.isAuthenticated = true;
        this.startSessionTimer();
        return true;
      } catch (error) {
        sessionStorage.removeItem('webview_token');
        return false;
      }
    }

    return false;
  }

  /**
   * Start session timeout timer
   */
  startSessionTimer() {
    this.clearSessionTimer();
    
    // Show warning 2 minutes before timeout
    const warningTime = this.sessionDuration - 120000; // 13 minutes
    
    setTimeout(() => {
      this.showSessionWarning();
    }, warningTime);

    // Auto logout on timeout
    this.sessionTimeout = setTimeout(() => {
      this.logout('Session expired');
    }, this.sessionDuration);
  }

  /**
   * Clear session timer
   */
  clearSessionTimer() {
    if (this.sessionTimeout) {
      clearTimeout(this.sessionTimeout);
      this.sessionTimeout = null;
    }
  }

  /**
   * Show session expiry warning
   */
  showSessionWarning() {
    if (window.MessengerExtensions) {
      // Use Messenger toast if available
      window.MessengerExtensions.showToast({
        message: 'Your session will expire in 2 minutes',
        duration: 5000
      });
    } else {
      // Fallback to custom notification
      const event = new CustomEvent('session-warning', {
        detail: { message: 'Your session will expire in 2 minutes' }
      });
      window.dispatchEvent(event);
    }
  }

  /**
   * Refresh session (user activity)
   */
  refreshSession() {
    this.startSessionTimer();
    api.refreshToken().catch(error => {
      console.error('Failed to refresh token:', error);
    });
  }

  /**
   * Logout user
   */
  logout(reason = 'User logged out') {
    this.isAuthenticated = false;
    this.user = null;
    this.clearSessionTimer();
    api.clearAuth();
    sessionStorage.removeItem('webview_token');
    
    // Close webview if in Messenger
    if (window.MessengerExtensions) {
      window.MessengerExtensions.requestCloseBrowser(
        function success() {
          console.log('Webview closed');
        },
        function error(err) {
          console.error('Failed to close webview:', err);
          window.close();
        }
      );
    } else {
      // Redirect to landing page or close window
      window.close();
    }
  }

  /**
   * Check if user is authenticated
   */
  isUserAuthenticated() {
    return this.isAuthenticated;
  }

  /**
   * Get current user info
   */
  async getCurrentUser() {
    if (!this.isAuthenticated) {
      throw new Error('Not authenticated');
    }

    if (!this.user) {
      // Fetch user info from onboarding status
      const status = await api.getOnboardingStatus();
      this.user = status.user_data;
    }

    return this.user;
  }

  /**
   * Setup activity tracking for session refresh
   */
  setupActivityTracking() {
    const events = ['click', 'scroll', 'keypress', 'touchstart'];
    let lastActivity = Date.now();
    
    const handleActivity = () => {
      const now = Date.now();
      // Refresh session if more than 1 minute since last activity
      if (now - lastActivity > 60000) {
        this.refreshSession();
      }
      lastActivity = now;
    };

    events.forEach(event => {
      document.addEventListener(event, handleActivity, { passive: true });
    });
  }
}

// Export singleton instance
export default new AuthService();