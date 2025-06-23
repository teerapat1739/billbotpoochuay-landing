<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            เปลี่ยนกองใบเสร็จรกๆ<br>ให้เป็นระเบียบในพริบตา
          </h1>
          <p class="hero-subtitle">
            ให้ "บิลบอท ผู้ช่วย" จัดการเรื่องใบเสร็จและค่าใช้จ่ายที่วุ่นวายแทนคุณ แค่ส่งมาในแชท Facebook Messenger
          </p>
          <div class="hero-buttons">
            <a href="https://m.me/billbotpoochuay" class="btn btn-primary btn-large">
              <i class="fab fa-facebook-messenger"></i>
              ลองใช้เลย ฟรี!
            </a>
            <button @click="scrollToFeatures" class="btn btn-secondary btn-large">
              <i class="fas fa-play"></i>
              ใช้งานยังไง?
            </button>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">10,000+</span>
              <span class="stat-label">ใบเสร็จที่ประมวลผล</span>
            </div>
            <div class="stat">
              <span class="stat-number">99%</span>
              <span class="stat-label">ความแม่นยำ</span>
            </div>
            <div class="stat">
              <span class="stat-number">24/7</span>
              <span class="stat-label">พร้อมใช้งาน</span>
            </div>
          </div>
        </div>
        <div class="hero-image">
          <div class="phone-mockup">
            <img src="/phone-mockup.svg" alt="BillBot ผู้ช่วย on Mobile" class="phone-img">
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="container">
        <h2 class="section-title">ทำไมต้องใช้เรา?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-camera"></i>
            </div>
            <h3>แค่ถ่ายรูปแล้วส่ง</h3>
            <p>เพียงถ่ายรูปใบเสร็จของคุณ แล้วส่งมาให้เราทางแชท Messenger ได้เลย</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-robot"></i>
            </div>
            <h3>AI สุดฉลาด</h3>
            <p>เราใช้ AI ช่วยอ่านและจัดหมวดหมู่ข้อมูลในใบเสร็จให้คุณอัตโนมัติ ไม่ต้องทำเอง</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-chart-bar"></i>
            </div>
            <h3>สรุปรายจ่ายเข้าใจง่าย</h3>
            <p>ดูสรุปค่าใช้จ่ายได้ทุกเมื่อ ช่วยให้คุณวางแผนการเงินได้ดีขึ้น</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="how-it-works">
      <div class="container">
        <h2 class="section-title">ง่ายๆ แค่ 3 ขั้นตอน</h2>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>ถ่ายรูป</h3>
            <p>หยิบมือถือขึ้นมาถ่ายรูปใบเสร็จ จะใบเดียวหรือหลายใบก็ได้</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>ส่งแชท</h3>
            <p>ส่งรูปที่คุณถ่ายมาให้ "บิลบอท ผู้ช่วย" ใน Facebook Messenger</p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>รอรับข้อมูลสรุป</h3>
            <p>แค่นี้ก็เรียบร้อย! รอรับข้อมูลสรุปค่าใช้จ่ายได้เลย</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>มาเริ่มจัดการใบเสร็จกันเลย!</h2>
          <p>มาเป็นส่วนหนึ่งกับเพื่อนๆ หลายพันคนที่ให้เราช่วยจัดการเรื่องใบเสร็จที่น่าปวดหัว</p>
          <a href="https://m.me/billbotpoochuay" class="btn btn-primary btn-large">
            <i class="fab fa-facebook-messenger"></i>
            ลองเลย! ไม่เสียเงิน
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    scrollToFeatures() {
      document.getElementById('features').scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero {
  padding: 120px 0;
  background-color: var(--bg-primary);
  text-align: center;
}

.hero-content {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 24px;
}

.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.hero-subtitle {
  font-size: var(--font-size-2xl);
  color: var(--text-secondary);
  margin-bottom: 32px;
  line-height: 1.4;
  font-weight: 400;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 48px;
}

.btn {
  padding: 12px 24px;
  border-radius: var(--border-radius-xl);
  text-decoration: none;
  font-weight: 600;
  font-size: var(--font-size-base);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary {
  background-color: var(--primary-color);
  color: var(--text-inverse);
}

.btn-primary:hover {
  background-color: var(--primary-dark);
}

.btn-secondary {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border-color: var(--border-color);
}

.btn-secondary:hover {
  background-color: #e8e8ed;
}

.btn-large {
  padding: 20px 40px;
  font-size: var(--font-size-lg);
}

.hero-stats {
  display: flex;
  gap: 48px;
  margin-top: 48px;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: var(--font-size-4xl);
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  font-weight: 500;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.phone-mockup {
  position: relative;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(1deg); }
}

.phone-img {
  width: 320px;
  height: auto;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1));
  border-radius: var(--border-radius-large);
}

/* Features Section */
.features {
  padding: var(--section-padding);
  background: var(--bg-secondary);
  text-align: center;
}

.section-title {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  margin-bottom: 64px;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 48px;
  max-width: 1100px;
  margin: 0 auto;
}

.feature-card {
  background: transparent;
}

.feature-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon i {
  font-size: 2.5rem;
  color: var(--primary-color);
}

.feature-card h3 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.feature-card p {
  color: var(--text-secondary);
  line-height: 1.5;
  font-size: var(--font-size-base);
}

/* How It Works Section */
.how-it-works {
  padding: var(--section-padding);
  background: var(--bg-primary);
  text-align: center;
}

.steps {
  display: flex;
  justify-content: space-around;
  gap: 48px;
  max-width: 1000px;
  margin: 0 auto;
}

.step {
  flex: 1;
}

.step-number {
  width: 56px;
  height: 56px;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.step h3 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.step p {
  color: var(--text-secondary);
  line-height: 1.5;
  font-size: var(--font-size-base);
  max-width: 280px;
  margin: 0 auto;
}

/* CTA Section */
.cta {
  padding: var(--section-padding);
  background-color: var(--bg-secondary);
  text-align: center;
}

.cta-content {
  max-width: 720px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  margin-bottom: 24px;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.cta-content p {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  margin-bottom: 32px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: var(--font-size-4xl);
  }
  .hero-subtitle {
    font-size: var(--font-size-xl);
  }
  .section-title, .cta-content h2 {
    font-size: var(--font-size-3xl);
  }
  .steps {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: var(--font-size-3xl);
  }
  
  .hero-subtitle {
    font-size: var(--font-size-base);
  }
  
  .section-title {
    font-size: var(--font-size-3xl);
  }
  
  .feature-card {
    padding: 32px 24px;
  }
  
  .phone-img {
    width: 220px;
  }
  
  .hero-stats {
    gap: 24px;
  }
  
  .stat-number {
    font-size: var(--font-size-3xl);
  }
  
  .btn {
    padding: 14px 28px;
    font-size: var(--font-size-sm);
  }
  
  .btn-large {
    padding: 16px 32px;
    font-size: var(--font-size-base);
  }
}
</style> 