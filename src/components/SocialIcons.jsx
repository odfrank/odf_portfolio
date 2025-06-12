import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Youtube, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const SocialIcons = () => {
  const { isDark, toggleTheme } = useTheme();

  const socialLinks = [
    { Icon: Linkedin, href: 'https://linkedin.com/in/damilare-francis-oyedele/', label: 'LinkedIn', color: 'text-blue-500' },
    { Icon: Github, href: 'https://github.com/odfrank/', label: 'GitHub', color: 'text-gray-700 dark:text-gray-300' },
    { Icon: Youtube, href: 'https://youtube.com/@DamilareOyedele-ODF/', label: 'YouTube', color: 'text-red-600' },
  ];

  const iconVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + (i * 0.1),
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: { scale: 1.2 }
  };

  return (
    <motion.div 
      className="fixed top-5 right-5 z-50 flex items-center space-x-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {socialLinks.map(({ Icon, href, label, color }, index) => (
        <motion.a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className={`block p-2 hover:text-primary-500 dark:hover:text-primary-400 transition-colors ${color}`}
          variants={iconVariants}
          custom={index}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <Icon size={22} />
        </motion.a>
      ))}

      <motion.button
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-full"
        variants={iconVariants}
        custom={socialLinks.length}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap={{ scale: 0.9 }}
      >
        {isDark ? <Sun size={22} /> : <Moon size={22} />}
      </motion.button>
    </motion.div>
  );
};

export default SocialIcons;
