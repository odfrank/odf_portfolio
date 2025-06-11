import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    { name: 'React', icon: '⚛️', position: { top: '15%', right: '15%' } },
    { name: 'Node.js', icon: '🟢', position: { top: '25%', left: '20%' } },
    { name: 'TypeScript', icon: 'TS', position: { bottom: '30%', right: '10%' } },
    { name: 'JavaScript', icon: 'JS', position: { top: '45%', left: '15%' } },
    { name: 'Git', icon: '🔧', position: { bottom: '25%', left: '25%' } },
    { name: 'CSS3', icon: '🎨', position: { top: '35%', right: '25%' } }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="absolute flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-full border border-white/20 dark:border-gray-700/50"
          style={tech.position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{ 
            delay: index * 0.2,
            duration: 0.8,
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-lg md:text-xl font-bold text-primary-600 dark:text-primary-400">
            {tech.icon}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;
