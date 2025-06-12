import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, ArrowUp, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/odfrank',
      label: 'GitHub Profile',
      color: 'hover:text-gray-800 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/damilare-francis-oyedele/',
      label: 'LinkedIn Profile',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      icon: Youtube,
      href: 'https://youtube.com/@DamilareOyedele-ODF', 
      label: 'YouTube Channel',
      color: 'hover:text-red-600 dark:hover:text-red-400'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      role="contentinfo"
      className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Side - Copyright and Attribution */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-2 text-gray-900 dark:text-white font-semibold mb-1">
              <Code className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              <span>© {currentYear} Damilare Oyedele</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
              <span>Designed & built with</span>
              <Heart className="w-3 h-3 text-red-500 animate-pulse" />
              <span>by Damilare Oyedele</span>
            </div>
          </motion.div>

          {/* Center - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                whileHover={{ 
                  scale: 1.2,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`
                  p-3 rounded-full bg-gray-100 dark:bg-gray-700 
                  text-gray-600 dark:text-gray-400 
                  ${social.color}
                  transition-all duration-200 
                  hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-gray-800/50
                  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                  dark:focus:ring-offset-gray-800
                `}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Right Side - Back to Top */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className="
              flex items-center gap-2 px-4 py-2 
              bg-primary-50 dark:bg-primary-900/30 
              text-primary-600 dark:text-primary-400 
              rounded-full border border-primary-200 dark:border-primary-800
              hover:bg-primary-100 dark:hover:bg-primary-900/50
              hover:border-primary-300 dark:hover:border-primary-700
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
              dark:focus:ring-offset-gray-800
              text-sm font-medium
            "
          >
            <ArrowUp className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Top</span>
          </motion.button>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mt-6 mb-4"
        />

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center text-xs text-gray-500 dark:text-gray-500"
        >
          <span>
            Built with React, TailwindCSS & Framer Motion • Open Source
          </span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
