# EmailJS Setup Guide for Portfolio Contact Form

## Current Implementation

The contact form is now configured with a **fallback approach**:

1. **Primary**: EmailJS (if properly configured)
2. **Fallback**: Mailto link (opens user's email client)

Currently, the form uses the **mailto fallback** which will:

- Open the user's default email client (Outlook, Gmail app, Apple Mail, etc.)
- Pre-populate the email with your address: `connect@oyedeledamilaref.com`
- Include the user's name, email, and message in the email body

## Setting Up EmailJS (Optional - for direct email sending)

If you want emails to be sent directly without opening the user's email client, follow these steps:

### 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Configure Email Service

1. **Add Email Service**:

   - Go to "Email Services" in your EmailJS dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps

2. **Create Email Template**:
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template structure:

```html
Subject: Portfolio Contact from {{from_name}} From: {{from_name}}
({{from_email}}) To: {{to_email}} Message: {{message}} --- This message was sent
from your portfolio contact form.
```

3. **Get Your Credentials**:
   - Service ID: Found in "Email Services" section
   - Template ID: Found in "Email Templates" section
   - Public Key: Found in "Account" > "General" > "Public Key"

### 3. Update Configuration

Update `src/config/contact.js` with your actual EmailJS credentials:

```javascript
emailJs: {
  serviceId: "your_actual_service_id",      // Replace with your service ID
  templateId: "your_actual_template_id",    // Replace with your template ID
  publicKey: "your_actual_public_key",      // Replace with your public key
  toEmail: "connect@oyedeledamilaref.com",  // Your email (already correct)
},
```

### 4. Template Variables

Make sure your EmailJS template includes these variables:

- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{message}}` - User's message
- `{{to_email}}` - Your email address
- `{{subject}}` - Email subject

## How the Current System Works

### With EmailJS Configured

```
User fills form → EmailJS sends email directly → Success message
```

### With Mailto Fallback (Current)

```
User fills form → Opens user's email client → User sends email manually
```

## Benefits of Each Approach

### EmailJS (Direct Sending)

✅ **Pros:**

- Seamless user experience
- Email sent automatically
- No need for user to have email client configured
- You get emails directly in your inbox

❌ **Cons:**

- Requires EmailJS account setup
- Limited free tier (200 emails/month)
- Dependent on third-party service

### Mailto Fallback (Current)

✅ **Pros:**

- No external dependencies
- No setup required
- Works on all devices
- No monthly limits

❌ **Cons:**

- Requires user to have email client configured
- User must manually send the email
- Some users might not complete the process

## Testing the Contact Form

1. **Fill out the contact form** with test data
2. **Click "Send Message"**
3. **Expected behavior**:
   - Form shows "Message ready to send!" success message
   - Your default email client opens with pre-filled email
   - Email is addressed to: `connect@oyedeledamilaref.com`
   - Subject line: "Portfolio Contact from [Name]"
   - Body contains the user's information and message

## Troubleshooting

### Email Client Doesn't Open

- **Cause**: No default email client configured
- **Solution**: User can copy the email address and send manually

### Want Direct Email Sending

- **Solution**: Set up EmailJS following the steps above

### Form Shows Error

- **Check**: Browser console for error messages
- **Verify**: EmailJS credentials are correct (if using EmailJS)

## Security Considerations

✅ **Current setup is secure:**

- No sensitive credentials exposed in frontend
- EmailJS public key is safe to expose
- Mailto links are standard web practice

## Future Enhancements

1. **Add Phone Contact**: Include phone number option
2. **Form Validation**: Add more robust validation
3. **Analytics**: Track form submission success rates
4. **Internationalization**: Support multiple languages
5. **Spam Protection**: Add reCAPTCHA if needed

## Support

If you need help setting up EmailJS or have questions about the contact form, the configuration is ready to switch between methods easily.
