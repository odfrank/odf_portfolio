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
        </motion.div>        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}          <motion.div
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
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Send a Message
            </motion.h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  <User className="inline w-4 h-4 mr-1" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', validationRules.name)}
                  className={`w-full px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 ${
                    errors.name
                      ? 'border-red-500 dark:border-red-400'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="Your full name"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
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
                transition={{ delay: 0.85, duration: 0.5 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  <Mail className="inline w-4 h-4 mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', validationRules.email)}
                  className={`w-full px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 ${
                    errors.email
                      ? 'border-red-500 dark:border-red-400'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
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
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', validationRules.message)}
                  className={`w-full px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-y ${
                    errors.message
                      ? 'border-red-500 dark:border-red-400'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="Tell me about your project or just say hello! I'd love to hear from you."
                  disabled={isSubmitting}
                />
                <div className="flex justify-between items-center mt-2">
                  {errors.message ? (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-red-500 text-sm flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.message.message}
                    </motion.p>
                  ) : (
                    <div />
                  )}
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {messageValue?.length || 0}/1000
                  </span>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.95, duration: 0.5 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4"
                  >
                    {submitStatus === 'success' && (
                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="text-green-700 dark:text-green-300 font-medium">
                          Message sent successfully! I'll get back to you soon.
                        </span>
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                        <span className="text-red-700 dark:text-red-300 font-medium">
                          Failed to send message. Please try again or contact me directly.
                        </span>
                      </div>
                    )}
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
          </motion.div>
        </div>

        {/* Availability Status - Full Width Below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl shadow-lg p-8 text-white"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <h3 className="text-xl font-bold">{contactConfig.availability.status}</h3>
          </div>
          <p className="text-primary-100 leading-relaxed text-center max-w-4xl mx-auto">
            I'm always interested in discussing new opportunities, exciting projects, 
            and potential collaborations. Whether you're looking for a senior developer 
            for your team or need help bringing your ideas to life, let's talk!
          </p>
        </motion.div>
      </div>

      {/* Section Divider */}
      <SectionDivider />
    </section>
  );
};

export default ContactSection;
