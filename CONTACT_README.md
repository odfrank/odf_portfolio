# Contact Section Documentation

## Overview

The Contact section is a comprehensive, responsive contact form built with React, TailwindCSS, React Hook Form, and Framer Motion. It features advanced form validation, submission handling, beautiful animations, and multiple contact methods.

## 🏗️ Component Structure

### Main Components

- **`Contact.jsx`** - Main contact section with form and contact information
- **`useFormSubmit.js`** - Custom hook for form submission logic
- **`contact.js`** - Configuration file for contact details and validation rules

### File Locations

```
src/
├── pages/Contact.jsx           # Main Contact section
├── hooks/useFormSubmit.js      # Form submission logic
└── config/contact.js          # Contact configuration and validation
```

## 📝 Form Features

### Form Fields

- **Name** - Required, 2-50 characters
- **Email** - Required, valid email format validation
- **Message** - Required, 10-1000 characters with live character count

### Validation Rules

All validation is handled by React Hook Form with custom rules:

```javascript
// In config/contact.js
export const validationRules = {
  name: {
    required: "Name is required",
    minLength: { value: 2, message: "Name must be at least 2 characters" },
    maxLength: { value: 50, message: "Name must be less than 50 characters" },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Please enter a valid email address",
    },
  },
  message: {
    required: "Message is required",
    minLength: { value: 10, message: "Message must be at least 10 characters" },
    maxLength: {
      value: 1000,
      message: "Message must be less than 1000 characters",
    },
  },
};
```

### Form States

- **Idle** - Initial state, ready for input
- **Submitting** - Loading state with spinner
- **Success** - Green success message with auto-clear
- **Error** - Red error message with retry option

## 🚀 Backend Integration

### Formspree Integration (Default)

The form is configured to work with Formspree for easy backend handling:

1. **Sign up** at [Formspree.io](https://formspree.io/)
2. **Create a new form** and get your form ID
3. **Update the endpoint** in `src/config/contact.js`:

```javascript
export const contactConfig = {
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID", // Replace with your form ID
  // ... other config
};
```

### EmailJS Integration (Alternative)

For EmailJS integration:

1. **Install EmailJS**: `npm install emailjs-com`
2. **Configure EmailJS** in `contact.js`:

```javascript
emailJs: {
  serviceId: "your_service_id",
  templateId: "your_template_id",
  publicKey: "your_public_key"
}
```

3. **Switch to EmailJS hook** in `Contact.jsx`:

```javascript
// Replace this line:
import { useFormSubmit } from "../hooks/useFormSubmit";

// With:
import { useEmailJSSubmit as useFormSubmit } from "../hooks/useFormSubmit";
```

### Custom Backend Integration

To integrate with your own backend:

1. **Update the submit function** in `useFormSubmit.js`:

```javascript
const submitForm = async (data) => {
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const response = await fetch("YOUR_API_ENDPOINT", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSubmitStatus("success");
      return { success: true };
    } else {
      throw new Error("Submission failed");
    }
  } catch (error) {
    setSubmitStatus("error");
    return { success: false, error: error.message };
  } finally {
    setIsSubmitting(false);
  }
};
```

## 🎨 Contact Information

### Configurable Contact Methods

Update your contact details in `src/config/contact.js`:

```javascript
export const contactConfig = {
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/your-profile/",
  github: "https://github.com/yourusername",
  portfolio: "https://yourportfolio.com",
  phone: "+1 (555) 123-4567", // Optional
  location: "Your City, Country",

  availability: {
    status: "Open to opportunities",
    message: "Your availability message here",
  },
};
```

### Contact Method Icons

Each contact method includes appropriate Lucide React icons:

- **Email** - Mail icon with mailto: link
- **LinkedIn** - Linkedin icon (external link)
- **GitHub** - Github icon (external link)
- **Location** - MapPin icon (no link)
- **Phone** - Phone icon with tel: link (if provided)

## 🎭 Animation Features

### Scroll-Based Animations

- **Section header** animates in with fade and slide-up
- **Form fields** animate in with staggered timing
- **Contact methods** animate in progressively
- **Status messages** slide in from below

### Interactive Animations

- **Form focus states** with smooth transitions
- **Button hover effects** with scale animations
- **Contact method hover** with slide animations
- **Loading spinner** for submission state

### Animation Customization

Modify animations in `Contact.jsx`:

```javascript
// Adjust form field animation timing
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ delay: 0.7, duration: 0.5 }} // Adjust delay and duration

// Customize button hover effect
whileHover={{ scale: 1.02 }}  // Adjust scale amount
whileTap={{ scale: 0.98 }}    // Adjust tap effect
```

## 🔧 Customization Options

### Adding New Form Fields

To add additional fields (e.g., phone, company, subject):

1. **Add validation rules** in `contact.js`:

```javascript
export const validationRules = {
  // ... existing rules
  phone: {
    pattern: {
      value: /^[\+]?[1-9][\d]{0,15}$/,
      message: "Please enter a valid phone number",
    },
  },
};
```

2. **Add the field** in `Contact.jsx`:

```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.85, duration: 0.5 }}
>
  <label
    htmlFor="phone"
    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
  >
    <Phone className="inline w-4 h-4 mr-1" />
    Phone Number (Optional)
  </label>
  <input
    type="tel"
    id="phone"
    {...register("phone", validationRules.phone)}
    className="w-full px-4 py-3 border rounded-lg..."
    placeholder="+1 (555) 123-4567"
  />
  {/* Error handling */}
</motion.div>
```

### Customizing Contact Methods

Add new contact methods in `Contact.jsx`:

```javascript
const contactMethods = [
  // ... existing methods
  {
    icon: Phone,
    label: "Phone",
    value: contactConfig.phone,
    href: `tel:${contactConfig.phone}`,
    color: "text-purple-600 dark:text-purple-400",
  },
];
```

### Styling Customization

#### Color Scheme

The component uses your existing primary color scheme. To customize:

```javascript
// Primary button
className = "bg-primary-600 hover:bg-primary-700 text-white";

// Focus rings
className = "focus:ring-primary-500 focus:border-transparent";

// Success states
className = "bg-green-100 dark:bg-green-900/30 border-green-500";
```

#### Dark Mode Support

All elements include dark mode variants:

```javascript
// Background colors
className = "bg-white dark:bg-gray-800";

// Text colors
className = "text-gray-900 dark:text-white";

// Border colors
className = "border-gray-300 dark:border-gray-600";
```

## 🎯 Accessibility Features

### Semantic HTML

- Proper `<form>` structure with fieldsets
- Associated `<label>` elements for all inputs
- ARIA attributes for error states and descriptions
- Semantic button elements

### Keyboard Navigation

- Full keyboard accessibility
- Logical tab order through form fields
- Focus indicators on all interactive elements
- Enter key submission

### Screen Reader Support

- Descriptive labels and placeholders
- Error announcements via ARIA
- Status message announcements
- Proper heading hierarchy

### Accessibility Implementation

```javascript
// Input with ARIA support
<input
  {...register("email", validationRules.email)}
  aria-invalid={errors.email ? "true" : "false"}
  aria-describedby={errors.email ? "email-error" : undefined}
/>;

// Error message with proper ID
{
  errors.email && (
    <p id="email-error" className="...">
      {errors.email.message}
    </p>
  );
}
```

## 🚀 Performance Optimization

### Loading States

- Form submission shows loading spinner
- Disabled state prevents multiple submissions
- Auto-clearing status messages (5-second timeout)
- Progressive form field animation

### Form Optimization

- Client-side validation for immediate feedback
- Debounced character counting
- Memory-efficient form state management
- Optimized re-renders with React Hook Form

## 🛠️ Maintenance

### Regular Tasks

1. **Test form submission** regularly
2. **Update contact information** as needed
3. **Monitor form submissions** via your backend service
4. **Check external links** (LinkedIn, GitHub) for validity

### Common Updates

```javascript
// Update availability status
availability: {
  status: "Currently Available", // or "Busy with Projects"
  message: "Updated availability message"
}

// Update contact methods
email: "new.email@example.com",
location: "New City, Country",

// Add new social links
twitter: "https://twitter.com/yourusername",
instagram: "https://instagram.com/yourusername"
```

### Troubleshooting

1. **Form not submitting**: Check Formspree endpoint URL
2. **Validation not working**: Verify React Hook Form installation
3. **Animations not smooth**: Check for performance issues
4. **Dark mode issues**: Verify all dark: classes are applied

## 📊 Analytics Integration

### Tracking Form Interactions

Add analytics tracking to monitor form usage:

```javascript
// Track form submissions
const onSubmit = async (data) => {
  // Analytics tracking
  gtag("event", "form_submit", {
    event_category: "contact",
    event_label: "portfolio_contact_form",
  });

  const result = await submitForm(data);
  // ... rest of submission logic
};

// Track form field interactions
const trackFieldFocus = (fieldName) => {
  gtag("event", "form_field_focus", {
    event_category: "contact",
    event_label: fieldName,
  });
};
```

This Contact section provides a professional, accessible, and user-friendly way for potential clients and employers to reach out, complete with modern UX patterns and robust form handling.
