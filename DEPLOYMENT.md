# Deployment Guide - VegInn

## 🚀 Deploy to Vercel (Recommended)

Your project is ready to deploy! Follow these steps to get your website live on your custom domain.

### Prerequisites
- ✅ Git repository: https://github.com/Joh-Ishimwe/VegInn.git
- ✅ Next.js project configured
- ⏳ Custom domain registered

---

## Step 1: Deploy to Vercel

### Option A: Deploy via GitHub (Recommended)

1. **Go to Vercel**
   - Visit [https://vercel.com](https://vercel.com)
   - Click "Sign Up" or "Login"
   - Choose "Continue with GitHub"

2. **Import Your Repository**
   - Click "Add New..." → "Project"
   - Find and select `Joh-Ishimwe/VegInn`
   - Click "Import"

3. **Configure Project**
   - Project Name: `veginn` (or your preferred name)
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./`
   - Build Command: `pnpm build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `pnpm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - You'll get a URL like: `veginn.vercel.app`

### Option B: Deploy via CLI

```powershell
# Install Vercel CLI
npm i -g vercel

# Navigate to project
cd "c:\Users\Admin\Downloads\veginn"

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

---

## Step 2: Add Your Custom Domain

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Enter your custom domain (e.g., `yourdomain.com`)
   - Click "Add"

2. **Configure DNS Records**

Vercel will show you which DNS records to add. You'll need to add these to your domain registrar:

### For Root Domain (yourdomain.com):
```
Type: A
Name: @
Value: 76.76.21.21
```

### For www Subdomain (www.yourdomain.com):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Or use Vercel Nameservers (Easier):**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

3. **Wait for DNS Propagation**
   - Usually takes 5 minutes to 48 hours
   - Vercel will auto-issue SSL certificate when DNS is ready

---

## Step 3: Enable Automatic Deployments

Once connected, every push to your GitHub repository will automatically deploy:
- Push to `master` branch → Production deployment
- Push to other branches → Preview deployments

```powershell
# Make changes to your code
git add .
git commit -m "Update website"
git push origin master

# Vercel will automatically deploy your changes!
```

---

## Alternative Deployment Options

### Netlify
```powershell
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Cloudflare Pages
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect GitHub repository
3. Build command: `pnpm build`
4. Build output directory: `.next`

---

## Environment Variables

If you need environment variables:

1. In Vercel Dashboard → Settings → Environment Variables
2. Add your variables (e.g., API keys)
3. Redeploy for changes to take effect

---

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Your config has `typescript.ignoreBuildErrors: true` (already set)

### Domain Not Working
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records are correct
- Check domain registrar settings

### Images Not Loading
- Your config has `images.unoptimized: true` (already set)

---

## Quick Commands

```powershell
# Test production build locally
pnpm build
pnpm start

# Check for errors
pnpm lint

# Development mode
pnpm dev
```

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Next.js Docs: https://nextjs.org/docs

---

**Your project is ready! Start with Step 1 above.** 🎉
