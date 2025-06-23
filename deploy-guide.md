# BillBot Landing Page Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: Netlify (Recommended for beginners)

1. **Build your site** (already done):
   ```bash
   npm run build
   ```

2. **Manual Deploy**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Drag & drop the entire `dist` folder to Netlify
   - Get your URL: `https://your-site-name.netlify.app`

3. **Connect Custom Domain**:
   - In Netlify Dashboard → Domain Settings
   - Add custom domain: `your-domain.com`
   - Follow DNS configuration instructions

### Option 2: Vercel (Great for developers)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

3. **Connect Domain**:
   - Go to [vercel.com](https://vercel.com) dashboard
   - Add domain in project settings

### Option 3: GitHub Pages (Free)

1. **Create GitHub repository**
2. **Push your code**
3. **Enable GitHub Pages** in repository settings
4. **Connect custom domain** in Pages settings

## 🌐 Connecting Your Squarespace Domain

### Step 1: Get Deployment URL
After deploying to Netlify/Vercel, you'll get a URL like:
- Netlify: `https://billbot-abc123.netlify.app`
- Vercel: `https://billbot-xyz789.vercel.app`

### Step 2: Configure DNS in Squarespace

1. **Login to Squarespace**
2. **Go to Settings → Domains**
3. **Click your domain → Advanced DNS**
4. **Add these records**:

#### For Netlify:
```
Type: CNAME
Name: www
Value: your-site-name.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

#### For Vercel:
```
Type: CNAME  
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

### Step 3: Configure in Hosting Platform

#### In Netlify:
1. Go to **Domain Settings**
2. Click **Add custom domain**
3. Enter: `yourdomain.com`
4. Add both `yourdomain.com` and `www.yourdomain.com`
5. Enable **Force HTTPS**

#### In Vercel:
1. Go to **Project Settings → Domains**
2. Add domain: `yourdomain.com`
3. Add redirect: `www.yourdomain.com` → `yourdomain.com`

## 🔧 Automated Deployment (Advanced)

### GitHub Actions for Auto-Deploy

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Netlify
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: netlify/actions/cli@master
        with:
          args: deploy --dir=dist --prod
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 📋 Pre-Deployment Checklist

- [x] ✅ Build completed successfully
- [x] ✅ All images and assets included
- [x] ✅ Favicon and manifest configured
- [x] ✅ Meta tags for SEO
- [x] ✅ Responsive design tested
- [ ] 🔄 Domain purchased and accessible
- [ ] 🔄 Hosting platform chosen
- [ ] 🔄 DNS records configured
- [ ] 🔄 SSL certificate enabled
- [ ] 🔄 Site live and accessible

## 🎯 Quick Start Commands

```bash
# 1. Build for production
npm run build

# 2. Test locally
npm run preview

# 3. Deploy to Netlify (manual)
# → Drag dist folder to netlify.com

# 4. Deploy to Vercel
npx vercel --prod

# 5. Deploy to GitHub Pages
# → Push to GitHub → Enable Pages
```

## 🔍 Testing Your Deployment

After deployment, test these:

1. **Homepage loads** ✅
2. **All sections scroll smoothly** ✅
3. **Mobile responsive** ✅
4. **Images display correctly** ✅
5. **Facebook Messenger links work** ✅
6. **SSL certificate active** (https://)
7. **Domain redirects properly**

## 🆘 Troubleshooting

### Common Issues:

1. **404 errors**: Make sure `dist` folder contains `index.html`
2. **Images not loading**: Check file paths are absolute (`/image.svg`)
3. **Domain not working**: DNS propagation can take 24-48 hours
4. **No HTTPS**: Enable SSL in hosting platform settings

### Support Links:
- [Netlify DNS Guide](https://docs.netlify.com/domains-https/custom-domains/)
- [Vercel Domain Guide](https://vercel.com/docs/concepts/projects/custom-domains)
- [Squarespace DNS Guide](https://support.squarespace.com/hc/en-us/articles/360002101888)

## 🎉 Next Steps After Deployment

1. **Test all functionality**
2. **Set up Google Analytics**
3. **Submit to Google Search Console**
4. **Share on social media**
5. **Monitor performance**

---

**Need help?** Contact: support@billbot.com 