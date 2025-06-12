import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Youtube } from 'lucide-react';

const SocialIcons = () => {
  const socialLinks = [
    { 
      Icon: Linkedin, 
      href: 'https://linkedin.com/in/damilare-francis-oyedele/', 
      label: 'LinkedIn', 
      color: 'hover:text-blue-500 dark:hover:text-blue-400',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    { 
      Icon: Github, 
      href: 'https://github.com/odfrank/', 
      label: 'GitHub', 
      color: 'hover:text-gray-800 dark:hover:text-white',
      bgColor: 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
    },
    { 
      Icon: Youtube, 
      href: 'https://youtube.com/@DamilareOyedele-ODF/', 
      label: 'YouTube', 
      color: 'hover:text-red-600 dark:hover:text-red-400',
      bgColor: 'hover:bg-red-50 dark:hover:bg-red-900/20'
    },
  ];

  const containerVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        delay: 1.2,
        staggerChildren: 0.1
      }
    }
  };

  const iconVariants = {
    initial: { opacity: 0, x: -20, scale: 0.8 },
    animate: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: { 
      scale: 1.15,
      y: -2,
      transition: { duration: 0.2 }
    }
  };  return (
    <motion.div 
      className="hidden lg:flex fixed left-40 top-[30%] -translate-y-1/2 z-40 flex-col space-y-4"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Decorative Line Above */}
      <motion.div 
        className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent mx-auto"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      />

      {/* Social Icons */}
      {socialLinks.map(({ Icon, href, label, color, bgColor }, index) => (
        <motion.a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            flex items-center justify-center w-12 h-12 
            rounded-full 
            bg-white/80 dark:bg-gray-800/80 
            backdrop-blur-sm 
            border border-gray-200/50 dark:border-gray-700/50
            text-gray-600 dark:text-gray-400 
            ${color} ${bgColor}
            shadow-lg hover:shadow-xl 
            transition-all duration-300
            group
          `}
          variants={iconVariants}
          whileHover="hover"
          whileTap={{ scale: 0.9 }}
        >
          <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
        </motion.a>
      ))}

      {/* Decorative Line Below */}
      <motion.div 
        className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent mx-auto"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      />
    </motion.div>
  );
};

export default SocialIcons;
