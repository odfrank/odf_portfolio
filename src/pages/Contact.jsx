import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Mail, 
  Send, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone, 
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Loader2,
  User,
  MessageSquare,
  HelpCircle,
  Package
} from 'lucide-react';
import { contactConfig, validationRules } from '../config/contact';
import { useFormSubmit } from '../hooks/useFormSubmit';
import SectionDivider from '../components/SectionDivider';

const ContactSection = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset,
    watch
  } = useForm();
  
  const { isSubmitting, submitStatus, submitForm, resetStatus } = useFormSubmit();
  
  // Watch form values for character count
  const messageValue = watch('message', '');

  const onSubmit = async (data) => {
    const result = await submitForm(data);
    if (result.success) {
      reset(); // Reset form on successful submission
    }
  };

  // Reset status when user starts typing again
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        resetStatus();
      }, 5000); // Auto-clear status after 5 seconds
      
      return () => clearTimeout(timer);
    }
  }, [submitStatus, resetStatus]);
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: contactConfig.email,
      href: `mailto:${contactConfig.email}`,
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Professional Profile',
      href: contactConfig.linkedin,
      color: 'text-blue-700 dark:text-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Code Repository',
      href: contactConfig.github,
      color: 'text-gray-800 dark:text-gray-300'
    },
    {
      icon: HelpCircle,
      label: 'StackOverflow',
      value: 'Q&A Contributions',
      href: contactConfig.stackoverflow,
      color: 'text-orange-600 dark:text-orange-400'
    },
    {
      icon: Package,
      label: 'Docker Hub',
      value: 'Container Registry',
      href: contactConfig.dockerhub,
      color: 'text-blue-500 dark:text-blue-300'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: contactConfig.location,
      href: null,
      color: 'text-green-600 dark:text-green-400'
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 bg-gray-50 dark:bg-gray-900"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl mb-6"
          >
            <Mail className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </motion.div>
          
          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Let's Work Together
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            {contactConfig.availability.message}. 
            I'd love to hear about your project and discuss how we can bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Send me a message
            </motion.h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <label 
                  htmlFor="name" 
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  <User className="inline w-4 h-4 mr-1" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', validationRules.name)}
                  className={`w-full px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="Enter your full name"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="name-error"
                    className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.name.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <label 
                  htmlFor="email" 
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  <Mail className="inline w-4 h-4 mr-1" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', validationRules.email)}
                  className={`w-full px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="your.email@example.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="email-error"
                    className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.email.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <label 
                  htmlFor="message" 
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  <MessageSquare className="inline w-4 h-4 mr-1" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register('message', validationRules.message)}
                  className={`w-full px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="Tell me about your project, ideas, or how I can help you..."
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : 'message-count'}
                />
                
                {/* Character count */}
                <div className="mt-2 flex justify-between items-center">
                  {errors.message ? (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      id="message-error"
                      className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.message.message}
                    </motion.p>
                  ) : (
                    <div></div>
                  )}
                  <span 
                    id="message-count"
                    className={`text-sm ${
                      messageValue?.length > 900 
                        ? 'text-red-500' 
                        : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {messageValue?.length || 0}/1000
                  </span>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="pt-4"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-primary-600 hover:bg-primary-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg text-green-700 dark:text-green-400 flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Thank you! Your message has been sent successfully. I'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-lg text-red-700 dark:text-red-400 flex items-center gap-2"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>Sorry, there was an error sending your message. Please try again or contact me directly.</span>
                  </motion.div>
                )}
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Get in touch
              </motion.h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  >
                    {method.href ? (
                      <motion.a
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : '_self'}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 group"
                      >
                        <div className={`p-3 rounded-full bg-white dark:bg-gray-800 ${method.color} shadow-md`}>
                          <method.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white">{method.label}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{method.value}</p>
                        </div>
                        {method.href.startsWith('http') && (
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors duration-200" />
                        )}
                      </motion.a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                        <div className={`p-3 rounded-full bg-white dark:bg-gray-800 ${method.color} shadow-md`}>
                          <method.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white">{method.label}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{method.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl shadow-lg p-8 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold">{contactConfig.availability.status}</h3>
              </div>
              <p className="text-primary-100 leading-relaxed">
                I'm always interested in discussing new opportunities, exciting projects, 
                and potential collaborations. Whether you're looking for a senior developer 
                for your team or need help bringing your ideas to life, let's talk!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Section Divider */}
      <SectionDivider />
    </section>
  );
};

export default ContactSection;
