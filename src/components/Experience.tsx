'use client';

import { motion } from 'framer-motion';
import { MapPin, Building, ExternalLink, Award, Code2, Rocket, Target, ArrowRight, Star, Sparkles } from 'lucide-react';
import Parallax3D from './Parallax3D';
import ParallaxBackground from './ParallaxBackground';
import { useParallax } from '@/contexts/ParallaxContext';

const Experience = () => {
  const { parallaxEnabled } = useParallax();
  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'Remote',
      duration: 'Jan 2023 - Present',
      description: 'Leading development of enterprise-scale web applications using React.js, Node.js, and MongoDB. Mentoring junior developers and collaborating with cross-functional teams.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'TypeScript', 'AWS'],
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Led a team of 5 developers on 3 major projects',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ],
      icon: Building,
      color: 'netflix-red'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'InnovateStart',
      location: 'New York, NY',
      duration: 'Mar 2022 - Dec 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Worked closely with design and QA teams to deliver high-quality solutions.',
      technologies: ['React.js', 'Express.js', 'PostgreSQL', 'Docker', 'Git'],
      achievements: [
        'Delivered 8 client projects on time and within budget',
        'Improved code quality by implementing unit testing',
        'Enhanced user experience leading to 25% increase in engagement'
      ],
      icon: Code2,
      color: 'netflix-red-dark'
    },
    {
      id: 3,
      title: 'Junior Developer',
      company: 'Digital Dynamics',
      location: 'San Francisco, CA',
      duration: 'Jun 2021 - Feb 2022',
      description: 'Started my journey as a junior developer, learning modern web development practices and contributing to various projects.',
      technologies: ['JavaScript', 'HTML/CSS', 'React.js', 'Node.js', 'MongoDB'],
      achievements: [
        'Completed 15+ small to medium projects',
        'Learned modern development workflows and tools',
        'Contributed to open-source projects'
      ],
      icon: Rocket,
      color: 'netflix-red-light'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const floatingVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const courseVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  const achievementVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const,
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-black via-netflix-black to-black relative overflow-hidden"
    >
      {/* 3D Parallax Background */}
      <ParallaxBackground />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Beautiful Section Header */}
                     <Parallax3D enabled={parallaxEnabled} className="text-center mb-16">
            <motion.div variants={headerVariants}>
              <motion.div
                variants={floatingVariants}
                className="relative inline-block"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4">
                  Professional Experience
                </h2>
                {/* Animated underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="h-1 bg-gradient-to-r from-transparent via-netflix-red to-transparent mx-auto rounded-full"
                />
              </motion.div>
              
              <motion.p
                variants={floatingVariants}
                className="text-gray-400 mt-4 max-w-2xl mx-auto text-base leading-relaxed"
              >
                My journey in software development, from junior developer to senior roles, 
                working with diverse technologies and delivering impactful solutions.
              </motion.p>
            </motion.div>
          </Parallax3D>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-netflix-red via-netflix-red-light to-transparent">
              <motion.div
                variants={timelineVariants}
                className="w-full h-full bg-gradient-to-b from-netflix-red via-netflix-red-light to-transparent origin-top"
              />
            </div>
            
            <div className="space-y-12">
              {experiences.map((experience) => (
                <motion.div
                  key={experience.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 z-30">
                    <motion.div
                      variants={dotVariants}
                      className="w-full h-full bg-netflix-red rounded-full border-2 border-black shadow-lg relative"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 bg-netflix-red rounded-full"
                      />
                    </motion.div>
                  </div>

                  {/* Experience Card */}
                  <div className="relative ml-16">
                                         <Parallax3D enabled={parallaxEnabled} className="w-full">
                      <motion.div
                        whileHover={{
                          scale: 1.01,
                          y: -4,
                          rotateY: 1,
                          boxShadow: '0 15px 30px rgba(229, 9, 20, 0.2), 0 0 60px rgba(229, 9, 20, 0.1)',
                        }}
                        transition={{
                          duration: 0.2,
                          ease: "easeOut",
                        }}
                        className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-900/95 to-gray-800/95 border border-gray-700/50 hover:border-netflix-red/60 backdrop-blur-sm transition-all duration-300"
                      >
                        {/* Card Background Glow */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 bg-gradient-to-r from-netflix-red/8 via-transparent to-netflix-red/8"
                        />

                        {/* Sparkle Effects */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.6 }}
                          className="absolute inset-0"
                        >
                          <motion.div
                            animate={{
                              rotate: [0, 360],
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 15,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute top-3 right-3 w-5 h-5 text-netflix-red/40"
                          >
                            <Sparkles size={20} />
                          </motion.div>
                          <motion.div
                            animate={{
                              rotate: [360, 0],
                              scale: [1, 0.8, 1],
                            }}
                            transition={{
                              duration: 12,
                              repeat: Infinity,
                              ease: "linear",
                              delay: 2,
                            }}
                            className="absolute bottom-3 left-3 w-3 h-3 text-netflix-red-light/30"
                          >
                            <Star size={12} />
                          </motion.div>
                        </motion.div>

                        <div className="p-6 relative z-10">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-4">
                              <motion.div
                                whileHover={{ 
                                  rotate: 360,
                                  scale: 1.05,
                                  boxShadow: '0 0 15px rgba(229, 9, 20, 0.4)',
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="w-14 h-14 rounded-lg bg-gradient-to-br from-netflix-red/25 to-netflix-red-dark/25 border border-netflix-red/40 flex items-center justify-center relative overflow-hidden"
                              >
                                <motion.div
                                  animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.2, 0.5, 0.2],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                  className="absolute inset-0 bg-netflix-red/20 rounded-lg"
                                />
                                <experience.icon size={28} className="text-netflix-red relative z-10" />
                              </motion.div>
                              <div>
                                <h3 className="text-xl font-bold text-white mb-1">
                                  {experience.title}
                                </h3>
                                <div className="flex items-center gap-4 text-gray-400 text-sm">
                                  <div className="flex items-center gap-1">
                                    <Building size={14} />
                                    <span>{experience.company}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin size={14} />
                                    <span>{experience.location}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <motion.div
                              whileHover={{ scale: 1.05, rotate: 3 }}
                              className="text-right"
                            >
                              <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-netflix-red/20 to-netflix-red-dark/20 text-netflix-red rounded-full border border-netflix-red/40"
                              >
                                {experience.duration}
                              </motion.div>
                            </motion.div>
                          </div>

                          {/* Description */}
                          <motion.p
                            variants={floatingVariants}
                            className="text-gray-300 leading-relaxed mb-4 text-sm"
                          >
                            {experience.description}
                          </motion.p>

                          {/* Technologies */}
                          <motion.div
                            variants={floatingVariants}
                            className="mb-4"
                          >
                            <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-2">
                              <Target size={16} className="text-netflix-red" />
                              Technologies Used
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                              {experience.technologies.map((tech, techIndex) => (
                                <motion.div
                                  key={techIndex}
                                  custom={techIndex}
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{ amount: 0.3 }}
                                  variants={courseVariants}
                                  whileHover={{ x: 6, scale: 1.01 }}
                                  className="flex items-center gap-2 text-gray-300 text-xs group cursor-pointer"
                                >
                                  <motion.div
                                    whileHover={{ scale: 1.3, rotate: 180 }}
                                    className="w-1 h-1 bg-netflix-red rounded-full flex-shrink-0"
                                  />
                                  <span className="group-hover:text-white transition-colors duration-200">
                                    {tech}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>

                          {/* Achievements */}
                          <motion.div
                            variants={floatingVariants}
                          >
                            <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-2">
                              <Award size={16} className="text-netflix-red" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-1.5">
                              {experience.achievements.map((achievement, achievementIndex) => (
                                <motion.li
                                  key={achievementIndex}
                                  custom={achievementIndex}
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{ amount: 0.3 }}
                                  variants={achievementVariants}
                                  whileHover={{ x: 8, color: '#ffffff' }}
                                  className="text-gray-300 flex items-start gap-2 group cursor-pointer text-xs"
                                >
                                  <motion.div
                                    whileHover={{ scale: 1.8, rotate: 360 }}
                                    className="w-1.5 h-1.5 bg-netflix-red rounded-full mt-1.5 flex-shrink-0 group-hover:bg-netflix-red-light transition-colors"
                                  />
                                  <span className="group-hover:text-white transition-colors duration-200">
                                    {achievement}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        </div>
                      </motion.div>
                    </Parallax3D>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

                     {/* Call to Action */}
           <motion.div
             variants={headerVariants}
             className="text-center mt-16"
           >
             <motion.a
               href="/RESUME - RAFAY JAVAID.pdf"
               whileHover={{
                 scale: 1.02,
                 boxShadow: '0 0 20px rgba(229, 9, 20, 0.3)',
                 y: -2,
               }}
               whileTap={{ scale: 0.98 }}
               className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-netflix-red to-netflix-red-dark border border-netflix-red text-white font-semibold rounded-full hover:from-netflix-red-dark hover:to-netflix-red transition-all duration-300 shadow-lg backdrop-blur-sm relative overflow-hidden group text-base"
               target="_blank"
               rel="noopener noreferrer"
             >
               <ExternalLink size={20} />
               <span>View Full Resume</span>
               <motion.div
                 animate={{ x: [0, 5, 0] }}
                 transition={{ duration: 1.5, repeat: Infinity }}
                 className="group-hover:translate-x-1 transition-transform duration-200"
               >
                 <ArrowRight size={16} />
               </motion.div>
             </motion.a>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
