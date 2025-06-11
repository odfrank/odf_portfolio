import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import FloatingIcons from '../components/FloatingIcons';
import SocialIcons from '../components/SocialIcons';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Social Icons */}
      <SocialIcons />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.p 
                variants={itemVariants}
                className="text-primary-500 dark:text-primary-400 font-medium text-lg"
              >
                — Introducing
              </motion.p>
              
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Hello
                <br />
                I'm{' '}
                <span className="text-primary-500 dark:text-primary-400">
                  Damilare
                </span>{' '}
                Oyedele
              </motion.h1>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              I'm a Senior Software Developer with over 5 years of experience 
              building high-quality web applications, enterprise software 
              solutions, and APIs.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="/assets/resume.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </motion.a>
              
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-500 text-primary-500 dark:text-primary-400 dark:border-primary-400 font-semibold rounded-lg hover:bg-primary-500 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-all duration-300 shadow-lg shadow-transparent hover:shadow-primary-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="mr-2" size={20} />
                View Project Demos
              </motion.a>
            </motion.div>
          </motion.div>
            {/* Right Content - Profile Image with Floating Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 flex items-center justify-center"
          >            
            {/* Profile Image with circular background */}            <div className="relative w-full max-w-md mx-auto">              {/* Large circle background */}              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-850 rounded-full -z-10 shadow-inner shadow-primary-500/10"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
              ></motion.div>
                {/* Profile image container */}
              <div className="relative rounded-full overflow-hidden shadow-2xl shadow-primary-500/30 border-4 border-gray-100 dark:border-gray-800 aspect-square w-[92%] mx-auto">
                <motion.img 
                  src="/assets/images/profile.png"
                  alt="Damilare Oyedele"
                  className="w-full h-full object-cover"
                  initial={{ filter: 'blur(10px)' }}
                  animate={{ filter: 'blur(0px)' }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                  {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/120 to-transparent opacity-40"></div>
              </div>
              
              {/* Floating Icons */}
              <FloatingIcons />              {/* Decorative element */}
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-500 rounded-full opacity-50"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              ></motion.div>
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary-400 rounded-full opacity-30"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
        {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent"></div>
    </section>
  );
};

export default Home;
