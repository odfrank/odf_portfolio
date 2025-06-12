// Contact configuration - update with your actual details
export const contactConfig = {
  // Form submission endpoint (Formspree, EmailJS, or custom backend)
  formspreeEndpoint: "https://formspree.io/f/your-form-id", // Replace with your Formspree form ID

  // EmailJS configuration (recommended for this setup)
  emailJs: {
    serviceId: "service_portfolio", // Public service ID for portfolio
    templateId: "template_portfolio", // Public template ID
    publicKey: "portfolio_public_key", // Public key for portfolio
    toEmail: "connect@oyedeledamilaref.com", // Your email where messages will be sent
  },
  // Contact information
  email: "connect@oyedeledamilaref.com",
  linkedin: "https://linkedin.com/in/damilare-francis-oyedele/",
  github: "https://github.com/odfrank",
  portfolio: "https://oyedeledamilaref.com",
  stackoverflow: "https://stackoverflow.com/users/your-user-id", // Replace with your StackOverflow profile
  dockerhub: "https://hub.docker.com/u/odfrank", // Replace with your Docker Hub username

  // Optional additional contact methods
  phone: null, // "+1 (555) 123-4567"
  location: "Edmonton, Canada",

  // Social media links (optional)
  twitter: null,
  instagram: null,

  // Contact availability
  availability: {
    status: "Open to opportunities",
    message:
      "Currently available for freelance projects and full-time opportunities",
  },
};

// Form validation rules
export const validationRules = {
  name: {
    required: "Name is required",
    minLength: {
      value: 2,
      message: "Name must be at least 2 characters",
    },
    maxLength: {
      value: 50,
      message: "Name must be less than 50 characters",
    },
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
    minLength: {
      value: 10,
      message: "Message must be at least 10 characters",
    },
    maxLength: {
      value: 1000,
      message: "Message must be less than 1000 characters",
    },
  },
};
