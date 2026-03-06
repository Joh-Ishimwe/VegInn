# 📧 Contact Form Email Integration Setup Guide

## ✅ Deployment Status
- 🟢 **Code deployed to GitHub**
- 🟢 **Vercel is auto-deploying** (check https://vercel.com/dashboard)
- 🔴 **Email won't work yet** - Need to add API key (see below)

---

## 🚀 NEXT STEPS - Complete in 5 Minutes

⚠️ **Important:** The contact form is live but emails won't send until you add the Resend API key to Vercel.

### Step 1: Create Resend Account
1. Go to https://resend.com/
2. Sign up for a free account (100 emails/day free)
3. Verify your email address

### Step 2: Get API Key
1. Go to https://resend.com/api-keys
2. Click **"Create API Key"**
3. Name it: `VegInn Production`
4. Copy the API key (starts with `re_...`)

### Step 3: Add to Vercel
1. Go to your Vercel dashboard
2. Select your `veginn` project
3. Go to **Settings → Environment Variables**
4. Add new variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_your_api_key_here` (paste your key)
   - **Environment:** Production, Preview, Development (select all)
5. Click **Save**

### Step 4: Redeploy
1. Go to **Deployments** tab
2. Click **"Redeploy"** on the latest deployment
3. Wait 1-2 minutes for deployment

### Step 5: Test It!
1. Go to https://veginn.rw/contact
2. Fill out the form
3. Submit
4. Check `info@veginn.rw` inbox for the email

---

## 🔧 Local Development Setup

### 1. Create `.env.local` file:
```bash
# In your project root
RESEND_API_KEY=re_your_api_key_here
```

### 2. Restart dev server:
```bash
pnpm dev
```

### 3. Test locally:
- Go to http://localhost:3000/contact
- Submit the form
- Email will be sent!

---

## ✉️ Email Configuration

### Default Settings:
- **From:** `VegInn Contact Form <onboarding@resend.dev>`
- **To:** `info@veginn.rw`
- **Reply-To:** Customer's email

### Using Your Own Domain (Optional - Recommended):

1. **Add Domain in Resend:**
   - Go to https://resend.com/domains
   - Click **"Add Domain"**
   - Enter: `veginn.rw`
   - Follow instructions to add DNS records

2. **Update API Route:**
   Edit `app/api/contact/route.ts`:
   ```typescript
   from: 'VegInn Contact <contact@veginn.rw>', // Instead of onboarding@resend.dev
   ```

3. **Benefits:**
   - Professional email address
   - Better deliverability
   - No "sent via Resend" footer

---

## 📋 What's Included

### Features:
- ✅ Form validation (name, email, phone, message)
- ✅ Loading states while submitting
- ✅ Success/error notifications
- ✅ Email sent to `info@veginn.rw`
- ✅ Reply-to set to customer's email
- ✅ Formatted HTML email template
- ✅ Timestamp in Rwanda timezone
- ✅ Prevents spam submissions
- ✅ Mobile responsive

### Email Template Includes:
- Customer name and email
- Phone number (if provided)
- Message content
- Submission timestamp
- Easy reply button

---

## 🧪 Testing

### Test the Contact Form:
1. **Success Test:**
   - Fill all required fields
   - Submit
   - Should see green success message
   - Check email inbox

2. **Validation Test:**
   - Try submitting empty form → Error
   - Try invalid email → Error
   - Try short message (< 10 chars) → Error

3. **Loading State Test:**
   - Submit form
   - Button shows "Sending..." with spinner
   - Form fields disabled during submit

---

## 🔍 Troubleshooting

### Issue: "Failed to send email"
**Solution:**
- Check Resend API key is correct in Vercel environment variables
- Make sure you redeployed after adding the key
- Check Resend dashboard for error logs

### Issue: "Invalid form data"
**Solution:**
- Ensure all required fields are filled
- Email must be valid format
- Message must be at least 10 characters

### Issue: Email not received
**Solution:**
- Check spam folder
- Verify `info@veginn.rw` is correct
- Check Resend dashboard → Emails tab for delivery status
- Verify Resend account is active

### Issue: Rate limit exceeded
**Solution:**
- Free tier: 100 emails/day
- Upgrade to paid plan if needed
- Or use contact@veginn.rw in "from" field with verified domain

---

## 📊 Monitoring

### Check Email Deliverability:
1. Go to https://resend.com/emails
2. See all sent emails
3. Check delivery status
4. View email content

### Resend Free Tier Limits:
- 100 emails per day
- 1 verified domain
- Email logs for 30 days

### Upgrade if needed:
- Pro: $20/mo → 50,000 emails/month
- See: https://resend.com/pricing

---

## 🎨 Customization

### Change Email Recipient:
Edit `app/api/contact/route.ts`:
```typescript
to: ['info@veginn.rw'], // Change to your email
```

### Change Email Subject:
```typescript
subject: `New Contact: ${validatedData.name}`, // Customize
```

### Add More Fields:
1. Update form in `app/contact/page.tsx`
2. Update schema in `app/api/contact/route.ts`
3. Update email template

---

## 🔐 Security

### Already Implemented:
- ✅ Input validation (Zod)
- ✅ Rate limiting (Resend handles this)
- ✅ API route protection
- ✅ XSS prevention
- ✅ CSRF protection (Next.js built-in)

### Additional Recommendations:
- Add reCAPTCHA for spam prevention (optional)
- Rate limit API route per IP (optional)
- Add honeypot field for bot detection

---

## 📚 Resources

- **Resend Docs:** https://resend.com/docs
- **Resend Dashboard:** https://resend.com/overview
- **Support:** https://resend.com/support
- **API Reference:** https://resend.com/docs/api-reference/introduction

---

## ✅ Checklist

Before going live, verify:
- [ ] Resend account created
- [ ] API key added to Vercel
- [ ] Environment variable set
- [ ] Project redeployed
- [ ] Test submission successful
- [ ] Email received at info@veginn.rw
- [ ] Reply-to works correctly
- [ ] Mobile form tested
- [ ] Email template looks good

---

**Your contact form is ready! Customers can now reach you directly through the website.** 🎉

For issues, check Resend dashboard or contact support@resend.com
