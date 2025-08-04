export const contactConfig = {
  // Rate limiting settings
  rateLimit: {
    maxRequests: 3,
    windowMs: 60000, // 1 minute
  },
  
  // Validation settings
  validation: {
    maxNameLength: 50,
    maxSubjectLength: 200,
    maxMessageLength: 2000,
  },
  
  // Email settings
  email: {
    from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
    to: process.env.CONTACT_EMAIL || 'dinusanth.s@gmail.com',
    subjectPrefix: 'Contact Form: ',
  },
  
  // Retry settings
  retry: {
    maxAttempts: 2,
    baseDelay: 1000, // 1 second
  },
  
  // Success/Error messages
  messages: {
    success: "Message sent successfully! I'll get back to you soon.",
    rateLimit: "Too many requests. Please try again later.",
    validation: {
      required: "All fields are required",
      email: "Invalid email format",
      tooLong: "Field is too long",
    },
    server: {
      config: "Email service not configured",
      retry: "Unable to send email at this time. Please try again later.",
      unexpected: "An unexpected error occurred. Please try again later.",
    },
  },
} as const; 