'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Layout, Database, Smartphone } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Parallax3D from './Parallax3D';
import ParallaxBackground from './ParallaxBackground';
import { useParallax } from '@/contexts/ParallaxContext';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const { parallaxEnabled } = useParallax();

  const projects = [
    {
      id: 1,
      title: 'Rockdale Wreaths',
      description:
        'A production-grade online store for a seasonal wreath USA based brand with order management, payments, and shipping integration. I built the platform from scratch and implemented payment (Authorize.Net) and shipping (UPS) APIs with full backend automation.',
      technologies: ['Nextjs', 'Node.js', 'Prisma', 'Auth.Net', 'Ups', 'PlanetSacle', 'Emailjs', 'Konva', 'MySql', 'Typescript'],
      categories: ['fullstack', 'frontend', 'backend'],
      github: '',
      live: 'https://www.rockdalewreaths.com/',
      image: '',
      featured: true,
    },
    {
      id: 2,
      title: 'IMS – PRAL',
      description:
        'An internal inventory system built for a Pakistan Revenue Automation (Pvt.) an institution which directly comes under FBR to track and manage equipment and assets. I designed and developed the complete application, ensuring efficient data handling and smooth workflows.',
      technologies: ['React.js', 'Node.js', 'Material UI', 'MongoDB', 'Express'],
      categories: ['frontend', 'fullstack'],
      github: '',
      live: '',
      image: '',
      featured: true,
    },
    {
      id: 3,
      title: 'SGN – Remote Quran LMS',
      description:
        'A remote learning platform with live video classes, secure payments, and role-based access for students and teachers. I led full-stack development, integrating Jitsi video calls, real-time chat, scheduling, notifications, and user authentication.',
      technologies: ['React', 'Node.js', 'Chart.js', 'WebRTC', 'JitsiMeet', 'Firebase', 'MongoDB', 'Material UI'],
      categories: ['fullstack', 'frontend', 'backend'],
      github: '',
      live: '',
      image: '',
      featured: true,
    },
    {
      id: 4,
      title: 'Asaan Kharidari – AR Experience',
      description:
        "Pakistan's first augmented reality based shopping platform that lets users preview products in their environment before buying. I developed both the admin panel and Android app, and led the project to win 1st place at my university expo.",
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Java', 'GoogleSceneform', 'ArCore', 'AndroidStudio', 'Chartjs', 'Chatbot', 'ML'],
      categories: ['fullstack', 'frontend', 'mobile'],
      github: '',
      live: '',
      image: '',
      featured: true,
    },
    {
      id: 5,
      title: 'Konomo – Headless eCommerce Store',
      description:
        'A modern eCommerce platform with dynamic product management through a headless CMS. I developed the responsive frontend and collaborated closely with the backend team to integrate content workflows.',
      technologies: ['React', 'Node', 'CMS', 'Strapi'],
      categories: ['frontend', 'fullstack'],
      github: '',
      live: 'https://knomo.com/',
      image: '',
      featured: false,
    },
    {
      id: 6,
      title: 'Vieux – Flood Prediction System',
      description:
        'A system that forecasts flooding using stream data and water levels, with real-time visualization. I worked as a developer on core functionalities including map integration, data display, and interactive components.',
      technologies: ['React', 'Node.js', 'Chartjs', 'GoogleMaps'],
      categories: ['frontend', 'fullstack'],
      github: '',
      live: 'https://www.vieuxinc.com/',
      image: '',
      featured: false,
    },
    {
      id: 7,
      title: 'Samama Maintenance System',
      description:
        'A web platform to manage rental operations and maintenance tasks for a mixed-use plaza with shops and apartments. I led the project from scratch, designing its architecture and core features before leaving the company mid-development.',
      technologies: ['React', 'Node.js', 'Chart.js', 'Firebase', 'MongoDB', 'Material UI'],
      categories: ['fullstack', 'frontend', 'backend'],
      github: '',
      live: '',
      image: '',
      featured: false,
    },
    {
      id: 8,
      title: 'DFW Restaurant Week',
      description:
        'A high-traffic restaurant discovery platform for one of the largest annual dining events in Dallas–Fort Worth. I enhanced the user experience by developing advanced restaurant filters and integrating Google Maps for location-based search, enabling users to refine choices by cuisine, pricing, and location while visualizing them on an interactive map.',
      technologies: ['Next', 'GraphQl', 'GoogleMaps', 'Wordpress', 'Typescript', 'Bootstrap'],
      categories: ['frontend', 'fullstack'],
      github: '',
      live: 'https://www.dfwrestaurantweek.com/',
      image: '',
      featured: true,
    },
    {
      id: 9,
      title: 'WD Enterprises – Management Tool',
      description:
        'A web-based system for managing inventory and maintenance of a hardware and sanitary store. I developed the entire MERN stack application, enabling the store to track stock levels, handle repair logs, and manage product categories efficiently.',
      technologies: ['React', 'Charts.js', 'Node', 'Express', 'Typescript', 'JWT'],
      categories: ['fullstack', 'frontend', 'backend'],
      github: '',
      live: '',
      image: '',
      featured: false,
    },
  ];

  const categories = [
    { key: 'all', label: 'All Projects', icon: Eye },
    { key: 'frontend', label: 'Frontend', icon: Layout },
    { key: 'backend', label: 'Backend', icon: Database },
    { key: 'fullstack', label: 'Full Stack', icon: Github },
    { key: 'mobile', label: 'Mobile', icon: Smartphone },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.categories.includes(filter));

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black via-[#0b0b0b] to-[#141414] relative overflow-hidden">
      {/* 3D Parallax Background */}
      <ParallaxBackground />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <Parallax3D enabled={parallaxEnabled} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-4">
              My Projects
            </h2>
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-transparent via-netflix-red to-transparent mx-auto rounded-full"
            />
          </motion.div>
          
          
        </Parallax3D>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 bg-netflix-gray/50 rounded-full py-2 px-3 backdrop-blur-sm border border-netflix-gray">
            {categories.map((category) => {
              const IconComp = category.icon;
              return (
                <motion.button
                  key={category.key}
                  onClick={() => setFilter(category.key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-7 py-3 rounded-full font-medium text-sm flex items-center space-x-2 transition-all duration-200 transform ${
                    filter === category.key
                      ? 'bg-gradient-to-r from-red-500 to-red-700 text-white shadow-lg shadow-red-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-netflix-red/20'
                  }`}
                >
                  <IconComp size={16} />
                  <span>{category.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project, index) => (
            <Parallax3D key={project.id} enabled={parallaxEnabled} className="w-full">
              <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -15, 
                rotateY: 5, 
                rotateX: -5,
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(229, 9, 20, 0.3)',
              }}
              className="bg-gradient-to-br from-netflix-gray/80 to-black/80 rounded-2xl overflow-hidden backdrop-blur-sm border border-netflix-gray hover:border-netflix-red/50 transition-all duration-300 group h-full flex flex-col transform-gpu perspective-1000"
            >
              {/* Project Image or Icon */}
              <motion.div 
                className="relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover" 
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-netflix-red/15 to-netflix-red-dark/10 flex items-center justify-center">
                    <Eye size={48} className="text-white/60" />
                  </div>
                )}

                {/* Hover Overlay */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* GitHub Icon */}
                  <a
                    href={project.github || '#'}
                    target={project.github ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition ${
                      project.github
                        ? 'bg-white/10 hover:bg-netflix-red text-white'
                        : 'bg-gray-600 cursor-not-allowed text-gray-300'
                    }`}
                    data-cursor="special"
                  >
                    <Github size={24} />
                  </a>
                  {/* Live Demo Icon */}
                  <a
                    href={project.live || '#'}
                    target={project.live ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition ${
                      project.live
                        ? 'bg-white/10 hover:bg-netflix-red text-white'
                        : 'bg-gray-600 cursor-not-allowed text-gray-300'
                    }`}
                    data-cursor="special"
                  >
                    <ExternalLink size={24} />
                  </a>
                </motion.div>

                {/* Featured Badge */}
                {project.featured && (
                  <motion.div 
                    className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-netflix-red to-netflix-red-dark text-white text-xs font-semibold rounded-full shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    Featured
                  </motion.div>
                )}
              </motion.div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-netflix-red transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed flex-1">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        boxShadow: '0 4px 12px rgba(229, 9, 20, 0.4)',
                      }}
                      className="px-3 py-1 text-xs rounded-full bg-netflix-red/15 text-netflix-red border border-netflix-red/30 cursor-pointer transition-all duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.github || '#'}
                    className={`flex-1 py-2 px-4 rounded-lg text-center font-medium text-sm ${
                      project.github
                        ? 'bg-netflix-gray hover:bg-netflix-gray/80 text-white'
                        : 'bg-gray-600 cursor-not-allowed text-gray-300'
                    }`}
                    target={project.github ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    data-cursor="special"
                  >
                    Code
                  </a>
                  <a
                    href={project.live || '#'}
                    className={`flex-1 py-2 px-4 rounded-lg text-center font-medium text-sm ${
                      project.live
                        ? 'bg-netflix-red hover:bg-netflix-red-dark text-white'
                        : 'bg-gray-600 cursor-not-allowed text-gray-300'
                    }`}
                    target={project.live ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    data-cursor="special"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
              </motion.div>
            </Parallax3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
