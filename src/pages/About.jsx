import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionDivider from '../components/SectionDivider';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
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
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-60 h-60 bg-primary-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
              About <span className="text-primary-500 dark:text-primary-400">Me</span>
            </h2>
            <div className="h-1 w-20 bg-primary-500 dark:bg-primary-400 rounded-full"></div>
          </motion.div>          <div className="grid md:grid-cols-6 gap-10 items-center lg:items-start">
            <motion.div variants={itemVariants} className="md:col-span-4 space-y-6 relative">
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                I am a highly self-driven and results-oriented .NET Developer with strong system design understanding and 9+ years of experience delivering high-performing, user-centric applications. My expertise is in Blazor UI development, scalable API design, and cloud-native architectures, with a solid background in .NET Core, C#, Razor Components, MS Azure, Azure DevOps, EF Core, NUnit, and agile frameworks.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                I excel at onboarding new teams, mentoring developers, and integrating software vision with execution. Throughout my career at organizations like SEH Computer Systems, HF Energy, and EVRAZ North America, I've contributed to enterprise-level insurance applications, inventory management systems, and industrial automation solutions.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                Known for proactive communication and an ownership mindset, I bridge gaps between stakeholders, teams, and technology to deliver continuous value. My goal is to leverage my technical expertise and leadership abilities to create impactful software solutions that solve real-world problems.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-4"
              >
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                  <span className="text-primary-500 dark:text-primary-400 font-medium">Collaboration</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                  <span className="text-primary-500 dark:text-primary-400 font-medium">Problem Solving</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                  <span className="text-primary-500 dark:text-primary-400 font-medium">Leadership</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                  <span className="text-primary-500 dark:text-primary-400 font-medium">Agile Methodology</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                  <span className="text-primary-500 dark:text-primary-400 font-medium">Technical Mentorship</span>
                </div>
              </motion.div>
            </motion.div>            <motion.div
              variants={itemVariants}
              className="md:col-span-2 relative w-full h-full mx-auto"
            >              {/* Profile Image */}              <div className="relative w-full max-w-[220px] aspect-square mx-auto mb-8">
                <motion.div 
                  className="rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src="/assets/images/profile2.png" 
                    alt="Damilare Oyedele" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full shadow-inner"></div>
                </motion.div>
                {/* Decorative element */}
                <motion.div 
                  className="absolute -bottom-3 -right-3 w-8 h-8 bg-primary-500/50 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                ></motion.div>
                <motion.div 
                  className="absolute -top-3 -left-3 w-6 h-6 bg-primary-400/50 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                ></motion.div>
              </div>
                <div className="relative z-10 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                  <span className="inline-block w-6 h-6 mr-2 bg-primary-500/20 rounded-full"></span>
                  Education & Certification
                </h3>
                
                <div className="space-y-5">
                  <div className="border-l-2 border-primary-500/30 pl-4">
                    <h4 className="font-medium text-primary-500 dark:text-primary-400">Walden University</h4>
                    <p className="text-gray-700 dark:text-gray-300">Masters in Information Technology (2017)</p>
                  </div>
                  
                  <div className="border-l-2 border-primary-500/30 pl-4">
                    <h4 className="font-medium text-primary-500 dark:text-primary-400">Olabisi Onabanjo University</h4>
                    <p className="text-gray-700 dark:text-gray-300">BSc. Electrical/Electronic Engineering (2009)</p>
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="font-medium text-primary-500 dark:text-primary-400 mb-2">Certifications</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 mr-2 bg-primary-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Certified Scrum Master (CSM)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 mr-2 bg-primary-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Professional Scrum Master (PSM1)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 mr-2 bg-primary-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">Microsoft Azure Fundamentals AZ-900</span>
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 mr-2 bg-primary-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">MCTS, SQL SERVER Development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-6 -left-6 w-full h-full bg-primary-500/10 rounded-lg -z-10"></div>
            </motion.div>          </div>
        </motion.div>
      </div>
      
      {/* Section divider */}
      <div className="relative w-full mt-10">
        <SectionDivider variant="curve" />
      </div>
    </section>
  );
};

export default About;
