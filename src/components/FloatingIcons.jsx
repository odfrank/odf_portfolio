import React from 'react';
import { motion } from 'framer-motion';

const FloatingIcons = () => {
  const skillIcons = [
    { 
      name: 'React', 
      icon: '⚛️', 
      position: { top: '10%', right: '15%' },
      delay: 0.2,
      orbit: { x: [0, 15, 0], y: [0, -15, 0] }
    },
    { 
      name: 'TypeScript', 
      icon: 'TS', 
      position: { top: '25%', right: '25%' },
      delay: 0.5,
      orbit: { x: [0, -15, 0], y: [0, 10, 0] }
    },
    { 
      name: 'C#', 
      icon: 'C#', 
      position: { bottom: '30%', right: '15%' },
      delay: 0.8,
      orbit: { x: [0, 20, 0], y: [0, 20, 0] }
    },
    { 
      name: '.NET', 
      icon: '.NET', 
      position: { bottom: '40%', right: '30%' },
      delay: 1.1,
      orbit: { x: [0, -10, 0], y: [0, -20, 0] }
    },
    { 
      name: 'SQL', 
      icon: 'SQL', 
      position: { bottom: '20%', right: '40%' },
      delay: 1.4,
      orbit: { x: [0, 15, 0], y: [0, -5, 0] }
    },
    { 
      name: 'Azure', 
      icon: 'Az', 
      position: { top: '35%', right: '40%' },
      delay: 1.7,
      orbit: { x: [0, -20, 0], y: [0, -10, 0] }
    },
  ];

  return (
    <div className="absolute right-0 top-0 bottom-0 w-full h-full pointer-events-none">
      {skillIcons.map((skill) => (
        <motion.div
          key={skill.name}
          className="absolute flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gray-800/30 backdrop-blur-sm rounded-full border border-primary-500/50 shadow-lg shadow-primary-500/20"
          style={skill.position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: skill.orbit.x,
            y: skill.orbit.y,
          }}
          transition={{ 
            delay: skill.delay,
            duration: 0.8,
            x: {
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            },
            y: {
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }
          }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-base md:text-xl font-bold text-primary-400">
            {skill.icon}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
