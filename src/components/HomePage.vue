<template>
  <div>
    <!-- Header -->
    <header class="header">
      <div class="container">
        <div class="nav">
          <div class="logo">
            <span class="logo-text">Bill Bot</span>
          </div>
          <div class="nav-links">
            <button @click="startUsing" class="btn-primary">เริ่มใช้งาน</button>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            ผู้ช่วยจัดการค่าใช้จ่าย<br>
            ที่เข้าใจภาษาไทย
          </h1>
          <p class="hero-subtitle">
            แค่พิมพ์ "กาแฟ 85" ใน Messenger เราจัดการให้ทั้งหมด<br>
            ไม่ต้องกรอกฟอร์ม ไม่ต้องจำหมวดหมู่
          </p>
          <div class="hero-actions">
            <button @click="startUsing" class="btn-primary btn-large">
              ลองใช้ฟรี
            </button>
            <button @click="scrollToDemo" class="btn-secondary btn-large">
              ดูตัวอย่าง
            </button>
          </div>
        </div>
        
        <div class="hero-demo">
          <div class="chat-window">
            <div class="chat-header">
              <div class="chat-title">Bill Bot</div>
            </div>
            <div class="chat-messages">
              <div class="message bot">
                สวัสดีครับ! ลองบอกผมว่าคุณซื้ออะไรมาบ้าง
              </div>
              <div class="message user">กาแฟ 85 บาท</div>
              <div class="message bot">
                บันทึกค่ากาแฟ 85 บาท เรียบร้อย<br>
                คงเหลือ: 1,415 บาท
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">ทำงานอย่างไร</h2>
        <div class="features-grid">
          <div class="feature">
            <h3>แชทธรรมดา</h3>
            <p>พิมพ์ง่ายๆ เช่น "กาแฟ 85" หรือ "ข้าวกล่อง 120" ไม่ต้องเลือกหมวดหมู่</p>
          </div>
          <div class="feature">
            <h3>เข้าใจภาษาไทย</h3>
            <p>AI ที่เข้าใจภาษาไทย พิมพ์ผิดก็ได้ แยกแยะหมวดหมู่อัตโนมัติ</p>
          </div>
          <div class="feature">
            <h3>จัดการหลายกระเป๋า</h3>
            <p>เงินสด บัญชีธนาคาร บัตรเครดิต ในที่เดียว</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Advanced Features Section -->
    <section class="advanced-features">
      <div class="container">
        <h2 class="section-title">ฟีเจอร์ขั้นสูง</h2>
        <div class="advanced-features-grid">
          <div class="advanced-feature">
            <div class="feature-icon">📊</div>
            <h3>จัดการงบประมาณ</h3>
            <p>ตั้งงบรายเดือน รับแจ้งเตือนเมื่อใกล้เกินงบ เช่น "ตั้งงบอาหารเดือนละ 5000"</p>
            <div class="feature-example">
              <span class="example-text">ตัวอย่าง: "ตั้งงบอาหารเดือนละ 5000"</span>
            </div>
          </div>
          <div class="advanced-feature">
            <div class="feature-icon">🔍</div>
            <h3>ค้นหารายจ่าย</h3>
            <p>ถามหาเงินที่ใช้ไปเมื่อวาน สัปดาห์ที่แล้ว หรือช่วงเวลาใดก็ได้</p>
            <div class="feature-example">
              <span class="example-text">ตัวอย่าง: "หาเมื่อวานซื้ออะไร"</span>
            </div>
          </div>
          <div class="advanced-feature coming-soon">
            <div class="feature-icon">📄</div>
            <h3>อัปโหลดใบเสร็จ</h3>
            <p>ส่งรูปใบเสร็จหรือไฟล์ PDF ระบบจะอ่านและบันทึกให้อัตโนมัติ</p>
            <div class="feature-example">
              <span class="example-text">รองรับ: รูปภาพ, PDF, CSV</span>
            </div>
            <div class="coming-soon-badge">เร็วๆนี้</div>
          </div>
          <div class="advanced-feature coming-soon">
            <div class="feature-icon">💳</div>
            <h3>ตรวจสอบบัตรเครดิต</h3>
            <p>อัปโหลดใบแจ้งยอดบัตรเครดิต ระบบจะตรวจสอบกับรายจ่ายที่มีอยู่</p>
            <div class="feature-example">
              <span class="example-text">ตรวจสอบรายการที่ขาดหาย</span>
            </div>
            <div class="coming-soon-badge">เร็วๆนี้</div>
          </div>
          <div class="advanced-feature">
            <div class="feature-icon">📈</div>
            <h3>รายงานสรุป</h3>
            <p>ดูสรุปรายจ่ายรายเดือน แยกตามหมวดหมู่ พร้อมกราฟและสถิติ</p>
            <div class="feature-example">
              <span class="example-text">ตัวอย่าง: "ดูรายจ่ายเดือนนี้"</span>
            </div>
          </div>
          <div class="advanced-feature">
            <div class="feature-icon">🤖</div>
            <h3>AI ช่วยเหลือ</h3>
            <p>ถามคำถามเกี่ยวกับการเงิน เช่น "ประหยัดเงินยังไง" หรือ "งบประมาณควรเป็นเท่าไหร่"</p>
            <div class="feature-example">
              <span class="example-text">คำแนะนำส่วนบุคคล</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Demo -->
    <section id="demo" class="demo-section">
      <div class="container">
        <h2 class="section-title">ลองใช้ดู</h2>
        <div class="demo-container">
          <div class="chat-demo" ref="demoChat">
            <div class="demo-messages" ref="chatMessages">
              <div class="demo-message bot" style="float: left; text-align: left; margin-right: 20%; margin-left: 0; background: #ffffff; color: #374151; border-radius: 18px 18px 18px 4px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); border: 1px solid #e5e7eb; max-width: 60%; min-width: fit-content; padding: 10px 14px; display: inline-block; width: auto;">
                ลองพิมพ์บอกผมว่าคุณซื้ออะไรมาบ้าง
              </div>
            </div>
            <div class="demo-examples">
              <button @click="sendDemoMessage('กาแฟ 85 บาท')" class="demo-btn">
                กาแฟ 85 บาท
              </button>
              <button @click="sendDemoMessage('ข้าวกล่อง 2 กล่อง 120')" class="demo-btn">
                ข้าวกล่อง 2 กล่อง 120
              </button>
              <button @click="sendDemoMessage('เติมน้ำมัน 1000')" class="demo-btn">
                เติมน้ำมัน 1000
              </button>
              <button @click="sendDemoMessage('ตั้งงบอาหารเดือนละ 5000')" class="demo-btn">
                ตั้งงบอาหาร
              </button>
              <button @click="sendDemoMessage('ดูรายจ่ายเดือนนี้')" class="demo-btn">
                ดูรายจ่าย
              </button>
              <button @click="sendDemoMessage('หาเมื่อวานซื้ออะไร')" class="demo-btn">
                ค้นหารายจ่าย
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>พร้อมจัดการค่าใช้จ่ายอย่างง่ายดาย?</h2>
          <p>เริ่มใช้งาน Bill Bot ฟรีผ่าน Facebook Messenger</p>
          <button @click="startUsing" class="btn-primary btn-large">
            เริ่มใช้งานเลย
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      demoMessages: [
        {
          user: 'กาแฟ 85 บาท',
          bot: 'บันทึกค่ากาแฟ 85 บาท เรียบร้อย!<br>คงเหลือ: 1,415 บาท'
        },
        {
          user: 'ข้าวกล่อง 2 กล่อง 120',
          bot: 'บันทึกค่าอาหาร 120 บาท เรียบร้อย!<br>คงเหลือ: 1,295 บาท'
        },
        {
          user: 'เติมน้ำมัน 1000',
          bot: 'บันทึกค่าน้ำมัน 1,000 บาท เรียบร้อย!<br>คงเหลือ: 295 บาท'
        },
        {
          user: 'ตั้งงบอาหารเดือนละ 5000',
          bot: 'ตั้งงบอาหารเดือนละ 5,000 บาท เรียบร้อย!<br>📊 งบอาหาร: 0/5,000 บาท (0%)'
        },
        {
          user: 'ดูรายจ่ายเดือนนี้',
          bot: '📊 รายจ่ายเดือนนี้<br>• อาหาร: 1,205 บาท<br>• ค่าน้ำมัน: 1,000 บาท<br>• อื่นๆ: 85 บาท<br>รวม: 2,290 บาท'
        },
        {
          user: 'หาเมื่อวานซื้ออะไร',
          bot: '🔍 เมื่อวานคุณซื้อ:<br>• กาแฟ 85 บาท<br>• ข้าวกล่อง 120 บาท<br>รวม: 205 บาท'
        }
      ]
    }
  },
  methods: {
    startUsing() {
      // Open Facebook Messenger page in a new tab
      window.open('https://www.facebook.com/profile.php?id=61577264963553', '_blank');
    },
    
    scrollToDemo() {
      document.getElementById('demo').scrollIntoView({ 
        behavior: 'smooth' 
      });
    },
    
    async sendDemoMessage(userMessage) {
      const chatMessages = this.$refs.chatMessages;
      
      // Add user message with animation
      const userDiv = document.createElement('div');
      userDiv.className = 'demo-message user';
      userDiv.textContent = userMessage;
      userDiv.style.opacity = '0';
      userDiv.style.transform = 'translateY(20px)';
      userDiv.style.float = 'right';
      userDiv.style.textAlign = 'right';
      userDiv.style.marginLeft = '20%';
      userDiv.style.marginRight = '0';
      userDiv.style.marginLeft = 'auto';
      userDiv.style.marginRight = '0';
      userDiv.style.background = 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)';
      userDiv.style.color = 'white';
      userDiv.style.borderRadius = '18px 18px 4px 18px';
      userDiv.style.boxShadow = '0 2px 8px rgba(59, 130, 246, 0.2)';
      userDiv.style.maxWidth = '60%';
      userDiv.style.minWidth = 'fit-content';
      userDiv.style.padding = '10px 14px';
      userDiv.style.marginBottom = '12px';
      userDiv.style.display = 'inline-block';
      userDiv.style.clear = 'both';
      userDiv.style.wordWrap = 'break-word';
      userDiv.style.fontSize = '14px';
      userDiv.style.lineHeight = '1.4';
      userDiv.style.width = 'auto';
      chatMessages.appendChild(userDiv);
      
      // Animate user message in
      setTimeout(() => {
        userDiv.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        userDiv.style.opacity = '1';
        userDiv.style.transform = 'translateY(0)';
      }, 50);
      
      // Add clearfix
      const clearDiv1 = document.createElement('div');
      clearDiv1.style.clear = 'both';
      clearDiv1.style.height = '8px';
      chatMessages.appendChild(clearDiv1);
      
      // Show typing indicator
      const typingDiv = document.createElement('div');
      typingDiv.className = 'typing-indicator';
      typingDiv.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
      typingDiv.style.opacity = '0';
      typingDiv.style.transform = 'translateY(20px)';
      typingDiv.style.float = 'left';
      typingDiv.style.marginRight = '20%';
      typingDiv.style.marginLeft = '0';
      typingDiv.style.maxWidth = '60%';
      typingDiv.style.minWidth = 'fit-content';
      typingDiv.style.display = 'inline-block';
      typingDiv.style.width = 'auto';
      chatMessages.appendChild(typingDiv);
      
      // Animate typing indicator in
      setTimeout(() => {
        typingDiv.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        typingDiv.style.opacity = '1';
        typingDiv.style.transform = 'translateY(0)';
      }, 100);
      
      // Wait and show bot response
      setTimeout(() => {
        // Remove typing indicator
        typingDiv.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        typingDiv.style.opacity = '0';
        typingDiv.style.transform = 'translateY(-10px)';
        setTimeout(() => {
          if (typingDiv.parentNode) {
            typingDiv.parentNode.removeChild(typingDiv);
          }
        }, 300);
        
        const demoMessage = this.demoMessages.find(msg => msg.user === userMessage);
        if (demoMessage) {
          const botDiv = document.createElement('div');
          botDiv.className = 'demo-message bot';
          botDiv.innerHTML = demoMessage.bot;
          botDiv.style.opacity = '0';
          botDiv.style.transform = 'translateY(20px)';
          botDiv.style.float = 'left';
          botDiv.style.textAlign = 'left';
          botDiv.style.marginRight = '20%';
          botDiv.style.marginLeft = '0';
          botDiv.style.background = '#ffffff';
          botDiv.style.color = '#374151';
          botDiv.style.borderRadius = '18px 18px 18px 4px';
          botDiv.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
          botDiv.style.border = '1px solid #e5e7eb';
          botDiv.style.maxWidth = '60%';
          botDiv.style.minWidth = 'fit-content';
          botDiv.style.padding = '10px 14px';
          botDiv.style.marginBottom = '12px';
          botDiv.style.display = 'inline-block';
          botDiv.style.clear = 'both';
          botDiv.style.wordWrap = 'break-word';
          botDiv.style.fontSize = '14px';
          botDiv.style.lineHeight = '1.4';
          botDiv.style.width = 'auto';
          chatMessages.appendChild(botDiv);
          
          // Animate bot message in
          setTimeout(() => {
            botDiv.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            botDiv.style.opacity = '1';
            botDiv.style.transform = 'translateY(0)';
          }, 100);
          
          // Add clearfix
          const clearDiv2 = document.createElement('div');
          clearDiv2.style.clear = 'both';
          clearDiv2.style.height = '8px';
          chatMessages.appendChild(clearDiv2);
        }
      }, 1200);
      
      // Scroll to bottom
      setTimeout(() => {
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 1400);
    }
  }
}
</script>

<style scoped>
/* Claude-inspired clean design */
* {
  box-sizing: border-box;
}

/* Global styles */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Header */
.header {
  padding: 16px 0;
  border-bottom: 1px solid #e5e7eb;
  background: white;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
}

/* Hero Section */
.hero {
  padding: 80px 0;
  background: white;
}

.hero-content {
  text-align: center;
  margin-bottom: 80px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1.1;
  margin-bottom: 24px;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 40px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 60px;
}

/* Hero Demo */
.hero-demo {
  display: flex;
  justify-content: center;
}

.chat-window {
  width: 100%;
  max-width: 500px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.chat-header {
  padding: 16px 20px;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}

.chat-title {
  font-weight: 600;
  color: #1f2937;
}

.chat-messages {
  padding: 20px;
  min-height: 200px;
  overflow: hidden;
}

.message {
  padding: 12px 16px;
  border-radius: 18px;
  max-width: 85%;
  margin-bottom: 8px;
  display: block;
  clear: both;
}

.message.bot {
  background: #f3f4f6;
  color: #374151;
  float: left;
  border-radius: 18px 18px 18px 4px;
}

.message.user {
  background: #3b82f6;
  color: white;
  float: right;
  text-align: right;
  border-radius: 18px 18px 4px 18px;
}

/* Features Section */
.features {
  padding: 80px 0;
  background: #f9fafb;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
  margin-bottom: 60px;
  letter-spacing: -0.02em;
  opacity: 0;
  transform: translateY(20px);
  animation: titleSlideIn 0.8s ease-out 0.2s forwards;
}

@keyframes titleSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.feature {
  text-align: center;
}

.feature h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 12px;
}

.feature p {
  color: #6b7280;
  line-height: 1.6;
}

/* Advanced Features Section */
.advanced-features {
  padding: 80px 0;
  background: white;
}

.advanced-features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.advanced-feature {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.advanced-feature::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.advanced-feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
}

.advanced-feature:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  display: block;
}

.advanced-feature h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 15px;
}

.advanced-feature p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 20px;
}

.feature-example {
  background: #f3f4f6;
  border-radius: 8px;
  padding: 12px;
  border-left: 3px solid #3b82f6;
}

.example-text {
  font-size: 0.875rem;
  color: #374151;
  font-weight: 500;
}

/* Coming Soon Features */
.advanced-feature.coming-soon {
  opacity: 0.7;
  position: relative;
}

.advanced-feature.coming-soon:hover {
  transform: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-color: #e5e7eb;
}

.advanced-feature.coming-soon::before {
  display: none;
}

.coming-soon-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 4px rgba(245, 158, 11, 0.3);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

/* Demo Section */
.demo-section {
  padding: 80px 0;
  background: white;
  position: relative;
}

.demo-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, rgba(147, 51, 234, 0.02) 100%);
  pointer-events: none;
}

.demo-container {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.chat-demo {
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  overflow: hidden;
  background: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideInUp 0.6s ease-out, float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.chat-demo:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.demo-messages {
  padding: 24px;
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
  background: linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%);
  position: relative;
  z-index: 0;
  display: block;
}

.demo-messages::after {
  content: '';
  display: block;
  clear: both;
  height: 0;
}

.demo-messages::-webkit-scrollbar {
  width: 6px;
}

.demo-messages::-webkit-scrollbar-track {
  background: transparent;
}

.demo-messages::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

.demo-message {
  padding: 10px 14px !important;
  max-width: 60% !important;
  min-width: fit-content !important;
  margin-bottom: 12px !important;
  display: inline-block !important;
  clear: both !important;
  border: none !important;
  font-size: 14px !important;
  line-height: 1.4 !important;
  word-wrap: break-word !important;
  width: auto !important;
  opacity: 0;
  transform: translateY(10px);
  animation: messageSlideIn 0.4s ease-out forwards;
  background: transparent !important;
}

@keyframes messageSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.demo-messages .demo-message.bot {
  background: #ffffff !important;
  color: #374151 !important;
  float: left !important;
  border-radius: 18px 18px 18px 4px !important;
  margin-right: 20% !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08) !important;
  border: 1px solid #e5e7eb !important;
  animation-delay: 0.1s;
  position: relative !important;
  z-index: 1 !important;
  backdrop-filter: blur(10px) !important;
}

.demo-messages .demo-message.user {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%) !important;
  color: white !important;
  float: right !important;
  text-align: right !important;
  border-radius: 18px 18px 4px 18px !important;
  margin-left: auto !important;
  margin-right: 0 !important;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2) !important;
  animation-delay: 0.2s;
  position: relative !important;
  z-index: 1 !important;
  backdrop-filter: blur(10px) !important;
}

/* Ensure message backgrounds are visible */
.chat-demo .demo-messages .demo-message.bot {
  background-color: #ffffff !important;
  background-image: none !important;
}

.chat-demo .demo-messages .demo-message.user {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%) !important;
  background-color: #3b82f6 !important;
  margin-left: auto !important;
  margin-right: 0 !important;
  float: right !important;
}

.demo-examples {
  padding: 24px;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  position: relative;
}

.demo-examples::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #e5e7eb 50%, transparent 100%);
}

.demo-btn {
  padding: 12px 20px;
  border: 2px solid #e5e7eb;
  border-radius: 25px;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  color: #374151;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  transform: scale(1);
  animation: buttonPulse 2s ease-in-out infinite;
}

@keyframes buttonPulse {
  0%, 100% {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  50% {
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
  }
}

.demo-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s ease;
}

.demo-btn:hover {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border-color: #3b82f6;
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

.demo-btn:hover::before {
  left: 100%;
}

.demo-btn:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

/* Add typing indicator animation */
.typing-indicator {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 16px;
  background: #ffffff;
  border-radius: 18px 18px 18px 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  float: left;
  margin-right: 20%;
  animation: typingPulse 1.5s ease-in-out infinite;
}

.typing-dot {
  width: 6px;
  height: 6px;
  background: #9ca3af;
  border-radius: 50%;
  animation: typingBounce 1.4s ease-in-out infinite both;
}

.typing-dot:nth-child(1) { animation-delay: -0.32s; }
.typing-dot:nth-child(2) { animation-delay: -0.16s; }

@keyframes typingBounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

@keyframes typingPulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

/* Add ripple effect to buttons */
.demo-btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease;
}

.demo-btn:active::after {
  width: 200px;
  height: 200px;
}

/* CTA Section */
.cta {
  padding: 80px 0;
  background: #f9fafb;
  text-align: center;
}

.cta-content h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 16px;
}

.cta-content p {
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 32px;
}

/* Buttons */
.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: transparent;
  color: #6b7280;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background: #f9fafb;
  color: #374151;
}

.btn-large {
  padding: 16px 32px;
  font-size: 18px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .advanced-features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .advanced-feature {
    padding: 20px;
  }
  
  .demo-examples {
    flex-direction: column;
    align-items: center;
  }
  
  .demo-messages {
    padding: 16px;
    min-height: 150px;
  }
  
  .demo-message {
    max-width: 90% !important;
    font-size: 13px !important;
  }
  
  .container {
    padding: 0 16px;
  }
}

/* Utility classes */
.clearfix {
  clear: both;
  height: 8px;
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

/* Clean typography */
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  line-height: 1.2;
}

p {
  margin: 0;
  line-height: 1.6;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #374151;
}
</style>