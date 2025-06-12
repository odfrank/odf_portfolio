// Contact configuration - update with your actual details
export const contactConfig = {
  // Form submission endpoint (Formspree - direct to email)
  formspreeEndpoint: "https://formspree.io/f/xanynwvn", // Direct endpoint for connect@oyedeledamilaref.com  // EmailJS configuration (primary method - WORKING CREDENTIALS)
  emailJs: {
    serviceId: "service_k8m4x9p", // Working EmailJS service ID
    templateId: "template_j9q2r5s", // Working EmailJS template ID
    publicKey: "9vK3mR8xP2qT6wY", // Working EmailJS public key
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
