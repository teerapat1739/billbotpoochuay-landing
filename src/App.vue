<template>
    <!-- Header -->
    <header class="header">
      <nav class="navbar">
        <div class="nav-brand" @click="$router.push('/')">
          <img src="/billbot-logo-new.svg" alt="BillBot ผู้ช่วย" class="logo">
          <span class="brand-name">BillBot ผู้ช่วย</span>
        </div>
        <div class="nav-links">
          <router-link to="/" class="nav-link">หน้าแรก</router-link>
          <a href="/#features" class="nav-link" @click.prevent="scrollToSection('features')">ทำอะไรได้บ้าง</a>
          <a href="/#how-it-works" class="nav-link" @click.prevent="scrollToSection('how-it-works')">ใช้งานยังไง</a>
          <a href="mailto:support@billbotpoochuay.com" class="nav-link">ติดต่อเรา</a>
          <a href="https://m.me/billbotpoochuay" class="nav-link nav-cta">ลองใช้ฟรี</a>
        </div>
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <i class="fas fa-bars"></i>
        </button>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand-section">
            <div class="footer-brand">
              <img src="/billbot-logo-new.svg" alt="BillBot ผู้ช่วย" class="footer-logo">
              <span class="footer-brand-name">BillBot ผู้ช่วย</span>
            </div>
            <p class="footer-description">
              ให้ "บิลบอท ผู้ช่วย" จัดการเรื่องใบเสร็จและค่าใช้จ่ายที่วุ่นวายแทนคุณ แค่ส่งมาในแชท Facebook Messenger
            </p>
          </div>
          <div class="footer-section">
            <h4>ผลิตภัณฑ์</h4>
            <ul class="footer-links">
              <li><a href="/#features" @click.prevent="scrollToSection('features')">ทำอะไรได้บ้าง</a></li>
              <li><a href="/#how-it-works" @click.prevent="scrollToSection('how-it-works')">ใช้งานยังไง</a></li>
              <li><a href="https://m.me/billbotpoochuay">ลองใช้ฟรี</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>กฎหมาย</h4>
            <div class="footer-links">
              <router-link to="/privacy-policy" class="footer-link">Privacy Policy</router-link>
              <router-link to="/user-data-deletion" class="footer-link">Data Deletion</router-link>
              <router-link to="/terms-of-service" class="footer-link">Terms of Service</router-link>
            </div>
          </div>
          <div class="footer-section">
            <h4>ติดต่อเรา</h4>
            <ul class="footer-links">
              <li><a href="https://m.me/billbotpoochuay">Facebook Messenger</a></li>
              <li><a href="mailto:support@billbotpoochuay.com">support@billbotpoochuay.com</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 BillBot ผู้ช่วย. สงวนลิขสิทธิ์</p>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    scrollToSection(sectionId) {
      if (this.$route.path !== '/') {
        this.$router.push('/').then(() => {
          this.$nextTick(() => {
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
          });
        });
      } else {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
      }
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    }
  }
}
</script>

<style>
/* CSS Variables - Apple-inspired Theme */
:root {
  /* Official Apple Color Palette */
  --primary-color: #0071e3; /* Apple Blue */
  --primary-dark: #0066cc;
  --secondary-color: #f5f5f7; /* Apple Light Gray */
  
  /* Text Colors */
  --text-primary: #1d1d1f; /* Apple Black */
  --text-secondary: #6e6e73; /* Apple Gray */
  --text-tertiary: #a1a1a6;
  --text-inverse: #ffffff;
  
  /* Background Colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f7;
  
  /* Remove Gradients - Not in use */
  
  /* Shadows */
  --shadow-light: 0 1px 3px rgba(0, 0, 0, 0.04);
  --shadow-medium: 0 4px 12px rgba(0, 0, 0, 0.08);
  --shadow-heavy: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  /* Border & Radius */
  --border-color: #d2d2d7;
  --border-radius-medium: 12px;
  --border-radius-large: 18px;
  --border-radius-xl: 24px;
  
  /* Spacing */
  --container-max-width: 1100px;
  --section-padding: 100px 0;
  
  /* Typography */
  --font-size-base: 1.0625rem; /* 17px */
  --font-size-lg: 1.25rem;    /* 20px */
  --font-size-xl: 1.5rem;     /* 24px */
  --font-size-2xl: 1.75rem;   /* 28px */
  --font-size-3xl: 2.5rem;    /* 40px */
  --font-size-4xl: 3rem;      /* 48px */
  --font-size-5xl: 4rem;      /* 64px */
}

/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.5;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  overflow-x: hidden;
  font-weight: 400;
  letter-spacing: -0.01em;
}

/* Improve text rendering - Apple style */
body, button, input, textarea {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 24px;
}

/* Header - Liquid Glass Effect */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--bg-glass);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  max-width: var(--container-max-width);
  margin: 0 auto;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.nav-brand:hover {
  transform: scale(1.02);
}

.logo {
  width: 36px;
  height: 36px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.brand-name {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  gap: 8px;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: var(--font-size-base);
  padding: 12px 16px;
  border-radius: var(--border-radius-medium);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  letter-spacing: -0.01em;
}

.nav-link:hover {
  color: var(--text-primary);
  background: rgba(0, 0, 0, 0.04);
  transform: translateY(-1px);
}

.nav-link.router-link-active {
  color: var(--primary-color);
  background: rgba(0, 122, 255, 0.08);
}

.nav-cta {
  background: var(--primary-color) !important;
  color: var(--text-inverse) !important;
  border-radius: var(--border-radius-xl) !important;
  padding: 12px 24px !important;
  font-weight: 600 !important;
  box-shadow: var(--shadow-light) !important;
}

.nav-cta:hover {
  background: var(--primary-dark) !important;
  transform: translateY(-2px) !important;
  box-shadow: var(--shadow-medium) !important;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: var(--font-size-xl);
  color: var(--text-primary);
  cursor: pointer;
  padding: 8px;
  border-radius: var(--border-radius-small);
  transition: background-color 0.2s ease;
}

.mobile-menu-btn:hover {
  background: rgba(0, 0, 0, 0.04);
}

/* Footer - Apple Style */
.footer {
  background-color: transparent;
  color: var(--text-inverse);
  padding: 80px 0 32px;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100%;
  background-color: var(--text-primary);
  z-index: -1;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
  position: relative;
}

.footer-brand-section {
  display: flex;
  flex-direction: column;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.footer-logo {
  width: 36px;
  height: 36px;
  filter: brightness(0) invert(1);
}

.footer-brand-name {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  letter-spacing: -0.01em;
}

.footer-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  font-size: var(--font-size-base);
}

.footer-section h4 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: var(--font-size-base);
}

.footer-links a:hover {
  color: var(--text-inverse);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 24px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: var(--font-size-sm);
}

/* Responsive Design - Apple Style */

/* Large Desktop (1400px+) */
@media (min-width: 1400px) {
  .nav-links {
    gap: 12px;
  }
}

/* Desktop (1024px - 1399px) */
@media (min-width: 1024px) and (max-width: 1399px) {
  .nav-links {
    gap: 8px;
  }
}

/* Tablet (769px - 1023px) */
@media (min-width: 769px) and (max-width: 1023px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}

/* Mobile (768px and below) */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
}

/* Small Mobile (480px and below) */
@media (max-width: 480px) {
  .navbar {
    padding: 12px 16px;
  }
  
  .brand-name {
    font-size: var(--font-size-lg);
  }
  
  .logo {
    width: 32px;
    height: 32px;
  }
}

/* Font Awesome Icons */
.fas, .fab {
  font-family: "Font Awesome 5 Free", "Font Awesome 5 Brands";
}
</style>
