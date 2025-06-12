import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Filter, Github, ExternalLink } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import SectionDivider from '../components/SectionDivider';
import { projects, projectsByCategory, getFeaturedProjects } from '../data/projects';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [displayedProjects, setDisplayedProjects] = useState(projects);

  const filterCategories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'featured', label: 'Featured', count: getFeaturedProjects().length },
    { id: 'enterprise', label: 'Enterprise', count: projectsByCategory.enterprise.length },
    { id: 'fullStack', label: 'Full Stack', count: projectsByCategory.fullStack.length },
    { id: 'backend', label: 'Backend', count: projectsByCategory.backend.length }
  ];

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    
    switch (filterId) {
      case 'featured':
        setDisplayedProjects(getFeaturedProjects());
        break;
      case 'enterprise':
        setDisplayedProjects(projectsByCategory.enterprise);
        break;
      case 'fullStack':
        setDisplayedProjects(projectsByCategory.fullStack);
        break;
      case 'backend':
        setDisplayedProjects(projectsByCategory.backend);
        break;
      default:
        setDisplayedProjects(projects);
    }
  };

  return (
    <section 
      id="portfolio" 
      className="py-20 bg-white dark:bg-gray-800"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl mb-6"
          >
            <Briefcase className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </motion.div>
          
          <motion.h2
            id="portfolio-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A showcase of enterprise applications, full-stack solutions, and innovative projects I've built using modern technologies and best practices
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filterCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleFilterChange(category.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
                activeFilter === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300'
              }`}
            >
              <Filter size={16} />
              <span>{category.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeFilter === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={`${activeFilter}-${project.id}`}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {displayedProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different filter category.
            </p>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Projects Completed', value: projects.length },
            { label: 'Technologies Used', value: '20+' },
            { label: 'Years Experience', value: '9+' },
            { label: 'Industries Served', value: '8+' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-gray-600 dark:text-gray-400 mb-6"
          >
            Interested in collaborating on a project or learning more about my work?
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <ExternalLink size={20} />
              Get In Touch
            </motion.a>
            <motion.a
              href="https://github.com/odfrank"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Github size={20} />
              View All Projects
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <SectionDivider />
    </section>
  );
};

export default PortfolioSection;
