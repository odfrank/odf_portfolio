import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    { 
      name: 'React', 
      icon: '/assets/images/icons/react.svg', 
      position: { top: '15%', right: '15%' },
      bgColor: 'bg-blue-50 dark:bg-blue-900/30'
    },
    { 
      name: 'JavaScript', 
      icon: '/assets/images/icons/javascript.svg', 
      position: { top: '25%', left: '20%' },
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/30'
    },
    { 
      name: 'TypeScript', 
      icon: '/assets/images/icons/typescript.svg', 
      position: { bottom: '30%', right: '10%' },
      bgColor: 'bg-blue-50 dark:bg-blue-900/30'
    },
    { 
      name: 'C#', 
      icon: '/assets/images/icons/csharp.svg', 
      position: { top: '45%', left: '15%' },
      bgColor: 'bg-purple-50 dark:bg-purple-900/30'
    },
    { 
      name: 'Git', 
      icon: '/assets/images/icons/git.svg', 
      position: { bottom: '25%', left: '25%' },
      bgColor: 'bg-red-50 dark:bg-red-900/30'
    },
    { 
      name: 'HTML5', 
      icon: '/assets/images/icons/html5.svg', 
      position: { top: '35%', right: '25%' },
      bgColor: 'bg-orange-50 dark:bg-orange-900/30'
    },
    { 
      name: 'Azure', 
      icon: '/assets/images/icons/azure.svg', 
      position: { bottom: '15%', right: '30%' },
      bgColor: 'bg-blue-50 dark:bg-blue-900/30'
    },
    { 
      name: 'ASP.NET', 
      icon: '/assets/images/icons/aspnet.svg', 
      position: { top: '10%', left: '35%' },
      bgColor: 'bg-purple-50 dark:bg-purple-900/30'
    }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          className={`absolute flex items-center justify-center w-14 h-14 md:w-16 md:h-16 ${tech.bgColor} backdrop-blur-sm rounded-full border border-white/20 dark:border-gray-700/50 shadow-lg`}
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
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }
          }}
        >
          <img 
            src={tech.icon} 
            alt={tech.name} 
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;
