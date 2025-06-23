<template>
  <div class="page-container">
    <div class="content-wrapper">
      <h1>User Data Deletion</h1>
      <p class="last-updated">Last updated: July 24, 2024</p>

      <p>We are committed to protecting your privacy and ensuring you have control over your personal data. This page provides instructions on how to request the deletion of your data from our systems.</p>

      <h2>How to Request Data Deletion</h2>
      <p>To request the deletion of your data associated with the BillBot ผู้ช่วย application, please follow these steps:</p>
      <ol>
        <li>
          <strong>Send an email</strong> to our support team at 
          <a href="mailto:support@billbotpoochuay.com?subject=Data Deletion Request">support@billbotpoochuay.com</a>.
        </li>
        <li>
          Use the subject line: <strong>"Data Deletion Request"</strong>.
        </li>
        <li>
          In the body of the email, please include the following information:
          <ul>
            <li>Your Facebook Messenger User ID, if you know it. This helps us locate your data quickly.</li>
            <li>The name you use on Facebook.</li>
          </ul>
        </li>
      </ol>

      <h2>What Happens Next?</h2>
      <p>Once we receive your request, we will:</p>
      <ol>
        <li>Acknowledge receipt of your request within 48 hours.</li>
        <li>Begin the process of locating and deleting your data from our active databases. This includes your chat history with the bot and any receipt data you have submitted.</li>
        <li>Complete the deletion process within 30 days of your request.</li>
        <li>Send you a final confirmation email once your data has been permanently deleted.</li>
      </ol>
      
      <p>Please note that some anonymous, aggregated data may be retained for statistical purposes, but it will not be linked to any personal identifiers.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about our data deletion process, please do not hesitate to contact us at <a href="mailto:support@billbotpoochuay.com">support@billbotpoochuay.com</a>.</p>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  min-height: 100vh;
  background: var(--bg-secondary);
  padding: 140px 0 80px;
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
  background: var(--bg-glass);
  border-radius: var(--border-radius-large);
  box-shadow: var(--shadow-light);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 48px;
}

h1 {
  font-size: var(--font-size-5xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.last-updated {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  margin-bottom: 32px;
  font-weight: 500;
}

h2 {
  font-size: var(--font-size-3xl);
  font-weight: 600;
  color: var(--text-primary);
  margin: 48px 0 24px 0;
  letter-spacing: -0.01em;
}

p {
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 16px;
  font-weight: 400;
}

ol, ul {
  padding-left: 24px;
  margin-bottom: 24px;
}

li {
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 8px;
  font-weight: 400;
}

a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--primary-dark);
}

strong {
  font-weight: 600;
  color: var(--text-primary);
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-container {
    padding: 120px 0 60px;
  }
  
  .content-wrapper {
    padding: 32px 20px;
    margin: 0 16px;
  }
  
  h1 {
    font-size: var(--font-size-4xl);
  }
  
  h2 {
    font-size: var(--font-size-2xl);
    margin: 32px 0 16px 0;
  }
}

@media (max-width: 480px) {
  .content-wrapper {
    padding: 24px 16px;
    margin: 0 12px;
  }
  
  h1 {
    font-size: var(--font-size-3xl);
  }
  
  h2 {
    font-size: var(--font-size-xl);
  }
}
</style> 