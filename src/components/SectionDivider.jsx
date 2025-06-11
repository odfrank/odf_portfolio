import React from 'react';

const SectionDivider = ({ className = '', variant = 'wave' }) => {
  const renderDivider = () => {
    switch (variant) {
      case 'wave':
        return (
          <div className={`relative h-16 w-full overflow-hidden -mt-1 ${className}`}>
            <svg preserveAspectRatio="none" className="absolute bottom-0 w-full h-full text-gray-50 dark:text-gray-900" viewBox="0 0 1200 120">
              <path 
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-current text-white dark:text-gray-800">
              </path>
            </svg>
          </div>
        );
      case 'curve':
        return (
          <div className={`relative h-16 w-full overflow-hidden -mt-1 ${className}`}>
            <svg preserveAspectRatio="none" className="absolute bottom-0 w-full h-full text-gray-50 dark:text-gray-900" viewBox="0 0 1200 120">
              <path 
                d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" 
                className="fill-current text-white dark:text-gray-800">
              </path>
            </svg>
          </div>
        );
      case 'triangle':
        return (
          <div className={`relative h-16 w-full overflow-hidden -mt-1 ${className}`}>
            <svg preserveAspectRatio="none" className="absolute bottom-0 w-full h-full text-gray-50 dark:text-gray-900" viewBox="0 0 1200 120">
              <path 
                d="M1200 0L0 0 598.97 114.72 1200 0z" 
                className="fill-current text-white dark:text-gray-800">
              </path>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return renderDivider();
};

export default SectionDivider;
