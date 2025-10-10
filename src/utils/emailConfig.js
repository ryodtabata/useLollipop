// EmailJS Configuration
// To set this up:
// 1. Go to https://www.emailjs.com/
// 2. Sign up for a free account
// 3. Create an email service (Gmail, Outlook, etc.)
// 4. Create email templates
// 5. Get your service ID, template IDs, and public key
// 6. Replace the placeholders below

export const emailConfig = {
  // Your EmailJS service ID
  serviceId: 'service_dv2hyq4',

  // Template IDs for different forms
  templates: {
    getStarted: 'template_5ell024',
    consultation: 'template_1oumubt',
  },

  // Your EmailJS public key
  publicKey: 'HArRrtZRtn01huX0r',
};

// Example template for Get Started form:
/*
Subject: New Project Inquiry - {{subject}}

Hello Ryo,

You have received a new project inquiry from your Lollipop Digital Solutions website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

PROJECT DESCRIPTION:
{{project_description}}

Full Message:
{{message}}

Please respond to this inquiry within 24 hours to maintain your professional reputation.

Best regards,
Your Website Contact Form
*/

// Example template for Free Consultation form:
/*
Subject: Free Consultation Request - {{subject}}

Hello,

You have received a new consultation request:

Name: {{from_name}}
Email: {{from_email}}

Project Description:
{{message}}

Please reach out to schedule their free consultation.

Best regards,
Lollipop Digital Solutions Website
*/
