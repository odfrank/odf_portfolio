import React from 'react';
import { motion } from 'framer-motion';

const FloatingIcons = () => {
  const skillIcons = [    { 
      name: 'React', 
      icon: '/assets/images/icons/react.svg', 
      position: { top: '-5%', left: '15%' },
      delay: 0.2,
      orbit: { x: [0, 10, 0], y: [0, -10, 0] },
      bgColor: 'bg-blue-50 dark:bg-blue-900/30'
    },    { 
      name: 'Docker', 
      icon: '/assets/images/icons/docker.svg', 
      position: { top: '25%', right: '-10%' },
      delay: 0.5,
      orbit: { x: [0, -10, 0], y: [0, 5, 0] },
      bgColor: 'bg-blue-50 dark:bg-blue-900/30'
    },    { 
      name: 'Azure', 
      icon: '/assets/images/icons/azure.svg', 
      position: { top: '50%', right: '-10%' },
      delay: 0.7,
      orbit: { x: [0, -8, 0], y: [0, 8, 0] },
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/30'
    },    { 
      name: 'SQL', 
      icon: '/assets/images/icons/sql.svg', 
      position: { top: '90%', right: '25%' },
      delay: 0.9,
      orbit: { x: [0, 8, 0], y: [0, 8, 0] },
      bgColor: 'bg-black-50 dark:bg-white-900/30'
    },    { 
      name: 'DevOps', 
      icon: '/assets/images/icons/devops.svg', 
      position: { top: '94%', left: '32%' },
      delay: 1.1,
      orbit: { x: [0, -8, 0], y: [0, -8, 0] },
      bgColor: 'bg-black-50 dark:bg-white-900/30'
    },    { 
      name: 'TypeScript', 
      icon: '/assets/images/icons/typescript.svg', 
      position: { top: '75%', left: '5%' },
      delay: 1.3,
      orbit: { x: [0, 8, 0], y: [0, -8, 0] },
      bgColor: 'bg-black-50 dark:bg-white-900/30'
    },    { 
      name: 'CSharp', 
      icon: '/assets/images/icons/csharp.svg', 
      position: { top: '45%', left: '-10%' },
      delay: 1.5,
      orbit: { x: [0, 10, 0], y: [0, -5, 0] },
      bgColor: 'bg-purple-50 dark:bg-purple-900/30'
    },    { 
      name: 'AspNet', 
      icon: '/assets/images/icons/aspnet.svg', 
      position: { top: '17.5%', left: '-1%' },
      delay: 1.7,
      orbit: { x: [0, -10, 0], y: [0, -5, 0] },
      bgColor: 'bg-blue-50 dark:bg-white-900/30'
    },    { 
      name: 'API', 
      icon: '/assets/images/icons/api.svg', 
      position: { top: '75%', right: '3%' },
      delay: 1.9,
      orbit: { x: [0, 10, 0], y: [0, 10, 0] },
      bgColor: 'bg-blue-50 dark:bg-white-900/30'
    },    { 
      name: 'YAML', 
      icon: '/assets/images/icons/yaml.svg', 
      position: { top: '2%', left: '80%' },
      delay: 2.1,
      orbit: { x: [0, -8, 0], y: [0, -5, 0] },
      bgColor: 'bg-blue-50 dark:bg-white-900/30'
    },
  ];
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {skillIcons.map((skill) => (
        <motion.div
          key={skill.name}
          className={`absolute flex items-center justify-center w-14 h-14 md:w-20 md:h-20 ${skill.bgColor} backdrop-blur-sm rounded-full border border-white/20 dark:border-white/10 shadow-lg`}
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
          whileHover={{ scale: 1.2, rotate: 10 }}
        >
          <motion.img 
            src={skill.icon} 
            alt={skill.name} 
            className="w-8 h-8 md:w-12 md:h-12 object-contain"
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
