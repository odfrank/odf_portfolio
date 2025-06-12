import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
    const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    // Track scroll position for header styling
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-xl font-bold flex items-center space-x-2">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 text-transparent bg-clip-text">
                DO
              </span>
              <span className={`ml-2 transition-colors duration-300 ${scrolled ? 'text-gray-900 dark:text-white' : 'text-gray-800 dark:text-gray-100'}`}>
                Damilare Oyedele
              </span>
            </a>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link px-4 py-2 rounded-md transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary-600 dark:text-primary-400 font-semibold bg-primary-50 dark:bg-primary-900/20'
                    : `${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-gray-800 dark:text-gray-200'}`
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          {/* Theme toggle and mobile menu */}
          <div className="flex items-center space-x-4">            {/* Theme toggle button */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                scrolled 
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200' 
                  : 'bg-white/10 text-gray-800 dark:text-gray-200'
              } hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-md ${
                scrolled 
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200' 
                  : 'bg-white/10 text-gray-800 dark:text-gray-200'
              } hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-b-lg shadow-lg"
            >
              <div className="py-2 space-y-1 px-2">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 rounded-md ${
                      activeSection === item.href.substring(1)
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    } transition-colors`}
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
