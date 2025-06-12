import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import ExperienceItem from '../components/ExperienceItem';
import SectionDivider from '../components/SectionDivider';
import { experiences } from '../data/experiences';

const ExperienceSection = () => {
  return (
    <section 
      id="experience" 
      className="py-20 bg-gray-50 dark:bg-gray-900"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}            className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl mb-6"
          >
            <Briefcase className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </motion.div>
          
          <motion.h2
            id="experience-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Professional Experience
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A journey through my professional growth and the impactful projects I've contributed to
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Background gradient for timeline */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-500/20 to-transparent"></div>
          
          {/* Experience Items */}
          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={`${experience.company}-${experience.duration}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>

          {/* Timeline End Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: experiences.length * 0.1 + 0.5, duration: 0.4 }}
            className="relative pl-8"
          >            <div className="absolute -left-3 w-6 h-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full border-4 border-gray-50 dark:border-gray-900 shadow-lg"></div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: experiences.length * 0.1 + 0.7, duration: 0.5 }}
              className="text-sm font-medium text-primary-600 dark:text-primary-400 pl-2"
            >
              Career Beginning
            </motion.p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-gray-600 dark:text-gray-400 mb-6"
          >
            Interested in discussing opportunities or learning more about my experience?
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Briefcase size={20} />
            Let's Connect
          </motion.a>
        </motion.div>
      </div>

      {/* Section Divider */}
      <SectionDivider />
    </section>
  );
};

export default ExperienceSection;
