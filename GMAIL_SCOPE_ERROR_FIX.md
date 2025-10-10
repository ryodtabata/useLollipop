# Gmail API Scope Error - Troubleshooting Guide

## Error: 412 Gmail_API: Request had insufficient authentication scopes

This error occurs when EmailJS doesn't have proper permissions to send emails through Gmail.

## Quick Fixes (Try in Order):

### Fix 1: Re-authenticate Gmail in EmailJS
1. Go to EmailJS Dashboard → Email Services
2. Find your Gmail service
3. Click "Disconnect" 
4. Click "Add New Service" → Gmail
5. When Google asks for permissions, make sure to:
   ✅ Allow "Read, compose, send, and permanently delete all your email"
   ✅ Allow "See, edit, create, and change email settings"
   ✅ Allow all requested scopes

### Fix 2: Use SMTP Instead of OAuth (Recommended)
1. In EmailJS, delete Gmail OAuth service
2. Add "Custom SMTP" service instead:
   - Host: smtp.gmail.com
   - Port: 587
   - Security: STARTTLS
   - Username: ryotabata10@gmail.com
   - Password: [App Password - see below]

### Fix 3: Generate Gmail App Password
1. Enable 2-Factor Authentication on Gmail first
2. Go to: Google Account → Security → 2-Step Verification
3. Scroll down → App Passwords
4. Generate password for "Mail" app
5. Use this password in EmailJS SMTP settings

### Fix 4: Alternative - Use Different Email Provider
Instead of Gmail, try:
- **Outlook/Hotmail** (often easier OAuth)
- **Yahoo Mail** 
- **Custom SMTP** from your domain host

## Test Your Setup:
After fixing, test with a simple template:
```
Subject: Test Email
Body: Hello from {{from_name}}! Email: {{from_email}}
```

## If Still Not Working:
Consider these alternatives:
1. **Formspree** - formspree.io (easier setup)
2. **Netlify Forms** - if deploying to Netlify
3. **Simple Backend** - Node.js + Nodemailer

## EmailJS Alternative Services:
- service_outlook (Outlook/Hotmail)
- service_yahoo (Yahoo Mail)  
- service_custom (Custom SMTP)

The SMTP approach is usually more reliable than OAuth for EmailJS!