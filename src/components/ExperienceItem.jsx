import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceItem = ({ experience, index }) => {
  const { company, role, duration, location, contributions } = experience;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.25, 0, 1]
      }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline Line and Dot */}      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/20 via-primary-500/50 to-transparent"></div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
        className="absolute -left-2 top-1 w-4 h-4 bg-primary-500 rounded-full border-4 border-gray-50 dark:border-gray-900 shadow-lg"
      ></motion.div>

      {/* Experience Card */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700"
      >
        {/* Header */}
        <div className="mb-4">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="text-xl font-bold text-gray-900 dark:text-white mb-1"
          >
            {company}
          </motion.h3>
          
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.4 }}
            className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2"
          >
            {role}
          </motion.h4>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="flex items-center gap-1"
            >              <Calendar size={16} className="text-primary-500" />
              <time dateTime={duration}>{duration}</time>
            </motion.div>
            
            {location && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.6 }}
                className="flex items-center gap-1"
              >
                <MapPin size={16} className="text-primary-500" />
                <span>{location}</span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Contributions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.7 }}
        >
          <ul className="space-y-2" role="list">
            {contributions.map((contribution, contributionIndex) => (
              <motion.li
                key={contributionIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1 + 0.8 + contributionIndex * 0.1,
                  duration: 0.4
                }}
                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
              >
                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="leading-relaxed">{contribution}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceItem;
