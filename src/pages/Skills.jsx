import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionDivider from '../components/SectionDivider';

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const skillCategories = [
    {
      title: "Frontend",
      description: "Creating responsive, interactive user interfaces",
      color: "from-blue-500 to-indigo-600",
      skills: [
        { name: "React", icon: "/assets/images/icons/react.svg", level: 90 },
        { name: "JavaScript", icon: "/assets/images/icons/javascript.svg", level: 95 },
        { name: "TypeScript", icon: "/assets/images/icons/typescript.svg", level: 85 },
        { name: "HTML/CSS", icon: "/assets/images/icons/html5.svg", level: 90 },
        { name: "Blazor", icon: "/assets/images/icons/csharp.svg", level: 90 },
        { name: "Responsive Design", icon: "/assets/images/icons/responsive.svg", level: 85 }
      ]
    },
    {
      title: "Backend",
      description: "Building robust server-side applications and APIs",
      color: "from-green-500 to-emerald-600",
      skills: [
        { name: "C#", icon: "/assets/images/icons/csharp.svg", level: 95 },
        { name: "ASP.NET Core", icon: "/assets/images/icons/aspnet.svg", level: 90 },
        { name: "SQL Server", icon: "/assets/images/icons/sql.svg", level: 85 },
        { name: "RESTful APIs", icon: "/assets/images/icons/api.svg", level: 95 },
        { name: "Entity Framework", icon: "/assets/images/icons/csharp.svg", level: 85 },
        { name: "Node.js", icon: "/assets/images/icons/nodejs-original.svg", level: 75 }
      ]
    },
    {
      title: "DevOps",
      description: "Streamlining development, testing and deployment",
      color: "from-orange-500 to-amber-600",
      skills: [
        { name: "Azure", icon: "/assets/images/icons/azure.svg", level: 85 },
        { name: "Docker", icon: "/assets/images/icons/docker.svg", level: 80 },
        { name: "CI/CD", icon: "/assets/images/icons/devops.svg", level: 85 },
        { name: "Git", icon: "/assets/images/icons/git.svg", level: 90 },
        { name: "YAML", icon: "/assets/images/icons/yaml.svg", level: 85 },
        { name: "Agile/Scrum", icon: "/assets/images/icons/devops.svg", level: 90 }
      ]
    }
  ];
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(0,0,0,0.2) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(0,0,0,0.2) 2%, transparent 0%)',
          backgroundSize: '100px 100px' 
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Technical <span className="text-primary-500 dark:text-primary-400">Skills</span>
            </h2>
            <div className="h-1 w-20 bg-primary-500 dark:bg-primary-400 rounded-full mx-auto"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My expertise spans across multiple domains, from building intuitive user interfaces 
              to designing scalable backend systems and implementing efficient deployment pipelines.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (              <motion.div
                key={category.title}
                variants={itemVariants}
                className="relative group"
                whileHover={{ translateY: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 overflow-hidden">
                  {/* Header with gradient */}
                  <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${category.color}`}></div>
                  
                  <h3 className="text-2xl font-bold mb-2 mt-2 text-gray-900 dark:text-gray-100">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {category.description}
                  </p>
                    <div className="space-y-6">
                    {category.skills.map((skill, index) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-6 h-6 mr-3 relative">
                              {skill.icon && (
                                <img 
                                  src={skill.icon} 
                                  alt={skill.name} 
                                  className="w-full h-full object-contain"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                              )}
                            </div>
                            <span className="font-medium text-gray-800 dark:text-gray-200">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: inView ? `${skill.level}%` : 0 }}
                            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-primary-500/20 to-primary-400/10 rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}          </div>
        </motion.div>
      </div>
      
      {/* Section divider */}
      <div className="relative w-full mt-10">
        <SectionDivider variant="triangle" />
      </div>
    </section>
  );
};

export default Skills;
