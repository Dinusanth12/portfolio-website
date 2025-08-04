# Contact Form Setup Guide

This guide will help you set up the contact form backend to send emails when someone submits the form on your website.

## Prerequisites

1. A Resend account (free tier available at https://resend.com)
2. A verified domain for sending emails (or use Resend's sandbox domain for testing)

## Setup Steps

### 1. Create a Resend Account

1. Go to https://resend.com and sign up for a free account
2. Verify your email address
3. Go to the API Keys section and create a new API key

### 2. Configure Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Resend API Configuration
RESEND_API_KEY=your_resend_api_key_here

# Email Configuration
CONTACT_EMAIL=your-email@example.com
FROM_EMAIL=noreply@yourdomain.com
```

**Important Notes:**
- Replace `your_resend_api_key_here` with your actual Resend API key
- Replace `your-email@example.com` with the email where you want to receive contact form submissions
- Replace `noreply@yourdomain.com` with your verified domain (or use Resend's sandbox domain for testing)

### 3. Domain Verification (Required for Production)

For production use, you need to verify your domain with Resend:

1. In your Resend dashboard, go to Domains
2. Add your domain (e.g., `yourdomain.com`)
3. Follow the DNS verification steps
4. Once verified, update the `FROM_EMAIL` in your `.env.local` file

### 4. Testing with Sandbox Domain

For testing, you can use Resend's sandbox domain:

1. Use `onboarding@resend.dev` as your `FROM_EMAIL`
2. This allows you to test the functionality without domain verification
3. Note: Sandbox emails are limited and may go to spam

### 5. Test the Contact Form

1. Start your development server: `pnpm dev`
2. Navigate to your contact section
3. Fill out the form and submit
4. Check your email for the received message

## Features

The contact form includes:

- **Form Validation**: All fields are required and email format is validated
- **Loading States**: Shows a spinner while sending
- **Success/Error Messages**: Clear feedback to users
- **Email Template**: Professional HTML email with contact details and message
- **Security**: Input validation and error handling

## Email Template

The email you receive will include:
- Sender's name (first and last)
- Sender's email address
- Subject line
- Message content
- Timestamp
- Professional formatting

## Troubleshooting

### Common Issues:

1. **"Failed to send email" error**
   - Check your Resend API key is correct
   - Verify your domain is properly configured
   - Check the Resend dashboard for any errors

2. **Emails not received**
   - Check your spam folder
   - Verify the `CONTACT_EMAIL` is correct
   - Test with the sandbox domain first

3. **Domain verification issues**
   - Ensure DNS records are properly configured
   - Wait for DNS propagation (can take up to 24 hours)
   - Contact Resend support if needed

## Security Considerations

- The API route includes input validation
- Email format is validated
- Error messages don't expose sensitive information
- Rate limiting can be added for production use

## Next Steps

Once everything is working:

1. Deploy your website
2. Set up environment variables in your hosting platform
3. Consider adding rate limiting for production
4. Monitor email delivery and spam scores 