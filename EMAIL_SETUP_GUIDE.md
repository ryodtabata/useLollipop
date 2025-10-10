# EmailJS Setup Guide for Lollipop Digital Solutions

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account using your email
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose Gmail (or your preferred email provider)
4. Connect your Gmail account (ryotabata10@gmail.com)
5. Note down your **Service ID** (something like "service_abc123")

## Step 3: Create Email Templates

### Template 1: Get Started Form

1. Click "Email Templates" → "Create New Template"
2. Name it "Get Started Project Inquiry"
3. Use this template:

```
Subject: New Project Inquiry - {{subject}}

Hello Ryo,

You have received a new project inquiry from your Lollipop Digital Solutions website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Message:
{{message}}

Please respond to this inquiry within 24 hours to maintain your professional reputation.

Best regards,
Your Website Contact Form
```

4. Save and note the **Template ID** (something like "template_xyz789")

### Template 2: Free Consultation Form

1. Create another template named "Free Consultation Request"
2. Use this template:

```
Subject: Free Consultation Request - {{subject}}

Hello Ryo,

You have received a new consultation request from your website:

Name: {{from_name}}
Email: {{from_email}}

Project Description:
{{message}}

This person is requesting a free consultation. Please reach out to them as soon as possible to schedule a meeting.

Best regards,
Your Website Contact Form
```

3. Save and note the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "General"
2. Copy your **Public Key** (something like "user_abcdef123456")

## Step 5: Update Your Configuration

1. Open `/src/utils/emailConfig.js`
2. Replace the placeholder values:

```javascript
export const emailConfig = {
  serviceId: 'your_actual_service_id',
  templates: {
    getStarted: 'your_get_started_template_id',
    consultation: 'your_consultation_template_id',
  },
  publicKey: 'your_actual_public_key',
};
```

## Step 6: Test the Forms

1. Start your development server: `npm start`
2. Navigate to the "Get Started" page
3. Fill out and submit the form
4. Check your email (ryotabata10@gmail.com) for the notification
5. Repeat for the "Free Consultation" page

## Important Notes:

- The free EmailJS plan allows 200 emails per month
- All emails will be sent to ryotabata10@gmail.com as configured
- The confirmation message now stays visible for 10 seconds instead of 2
- If EmailJS fails, the form will still show success to avoid user confusion
- Keep your EmailJS credentials secure and don't share them publicly

## Troubleshooting:

- If emails aren't sending, check your EmailJS dashboard for error logs
- Make sure your Gmail account is properly connected
- Verify all IDs are correctly copied (no extra spaces)
- Check your spam folder for test emails
- Ensure your internet connection is stable when testing

## Alternative (If EmailJS doesn't work):

If you prefer a backend solution, you can:

1. Create a simple Node.js server with Express
2. Use Nodemailer to send emails
3. Deploy it to Heroku, Vercel, or Netlify Functions
4. Update the form submissions to call your API endpoint

The current setup with EmailJS is the simplest solution that requires no backend infrastructure.
