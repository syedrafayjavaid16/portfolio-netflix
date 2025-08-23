'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, ExternalLink, Award, BookOpen, Star, Target, Sparkles, ArrowRight, Trophy } from 'lucide-react';
import Parallax3D from './Parallax3D';
import ParallaxBackground from './ParallaxBackground';
import { useParallax } from '@/contexts/ParallaxContext';

const Education = () => {
  const { parallaxEnabled } = useParallax();
  const education = [
    {
      id: 1,
      degree: 'Master of Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      duration: '2021 - 2023',
      gpa: '3.9/4.0',
      description: 'Specialized in Artificial Intelligence and Machine Learning with focus on deep learning algorithms and computer vision applications.',
      courses: ['Advanced Machine Learning', 'Computer Vision', 'Natural Language Processing', 'Distributed Systems', 'Software Engineering'],
      achievements: [
        'Graduated with Distinction (Top 5% of class)',
        'Research Assistant in Computer Vision Lab',
        'Published 2 papers in top-tier conferences',
        'Teaching Assistant for CS229 Machine Learning'
      ],
      icon: GraduationCap,
      color: 'netflix-red',
      honors: ['Dean\'s List', 'Research Excellence Award', 'Teaching Excellence Award']
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      duration: '2017 - 2021',
      gpa: '3.8/4.0',
      description: 'Comprehensive computer science education with strong foundation in algorithms, data structures, and software development principles.',
      courses: ['Data Structures & Algorithms', 'Computer Architecture', 'Database Systems', 'Operating Systems', 'Software Engineering'],
      achievements: [
        'Summa Cum Laude Graduate',
        'President of Computer Science Club',
        'Led team to 1st place in Hackathon',
        'Internship at Google and Microsoft'
      ],
      icon: BookOpen,
      color: 'netflix-red-dark',
      honors: ['Honors Program', 'Academic Excellence Award', 'Leadership Award']
    },
    {
      id: 3,
      degree: 'High School Diploma',
      institution: 'St. Xavier\'s High School',
      location: 'Mumbai, India',
      duration: '2015 - 2017',
      gpa: '95%',
      description: 'Strong foundation in mathematics and sciences with focus on computer programming and problem-solving skills.',
      courses: ['Advanced Mathematics', 'Physics', 'Computer Science', 'English Literature', 'Economics'],
      achievements: [
        'Valedictorian of graduating class',
        'National Science Olympiad Winner',
        'School Debate Team Captain',
        'Community Service Leadership Award'
      ],
      icon: Trophy,
      color: 'netflix-red-light',
      honors: ['Principal\'s Award', 'Academic Excellence', 'Community Service Award']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
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
    hidden: { y: 100, opacity: 0, scale: 0.9, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
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

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const,
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
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

  return (
    <section
      id="education"
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
                  Educational Journey
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
                My academic journey from high school to graduate studies, 
                building a strong foundation in computer science and technology.
              </motion.p>
            </motion.div>
          </Parallax3D>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-netflix-red via-netflix-red-light to-transparent">
              <motion.div
                variants={timelineVariants}
                className="w-full h-full bg-gradient-to-b from-netflix-red via-netflix-red-light to-transparent origin-top"
              />
            </div>
            
            <div className="space-y-12">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
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
                          scale: [1, 1.8, 1],
                          opacity: [0.6, 0, 0.6],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 bg-netflix-red rounded-full"
                      />
                      <motion.div
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.3, 0, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                        className="absolute inset-0 bg-netflix-red-light rounded-full"
                      />
                    </motion.div>
                  </div>

                  {/* Education Card */}
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
                            <div className="flex items-center gap-3">
                              <motion.div
                                whileHover={{ 
                                  rotate: 360,
                                  scale: 1.05,
                                  boxShadow: '0 0 15px rgba(229, 9, 20, 0.4)',
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="w-12 h-12 rounded-lg bg-gradient-to-br from-netflix-red/25 to-netflix-red-dark/25 border border-netflix-red/40 flex items-center justify-center relative overflow-hidden"
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
                                <edu.icon size={24} className="text-netflix-red relative z-10" />
                              </motion.div>
                              <div>
                                <h3 className="text-xl font-bold text-white mb-1">
                                  {edu.degree}
                                </h3>
                                <div className="flex items-center gap-3 text-gray-400 text-xs">
                                  <div className="flex items-center gap-1">
                                    <BookOpen size={12} />
                                    <span>{edu.institution}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin size={12} />
                                    <span>{edu.location}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Calendar size={12} />
                                    <span>{edu.duration}</span>
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
                                GPA: {edu.gpa}
                              </motion.div>
                            </motion.div>
                          </div>

                          {/* Description */}
                          <motion.p
                            variants={floatingVariants}
                            className="text-gray-300 leading-relaxed mb-4 text-sm"
                          >
                            {edu.description}
                          </motion.p>

                          {/* Honors */}
                          <motion.div
                            variants={floatingVariants}
                            className="mb-4"
                          >
                            <h4 className="text-xs font-semibold text-white flex items-center gap-2 mb-2">
                              <Trophy size={14} className="text-netflix-red" />
                              Honors & Awards
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {edu.honors.map((honor, honorIndex) => (
                                <motion.span
                                  key={honorIndex}
                                  initial={{ x: -30, opacity: 0 }}
                                  whileInView={{ x: 0, opacity: 1 }}
                                  viewport={{ amount: 0.3 }}
                                  transition={{ delay: honorIndex * 0.1, duration: 0.5 }}
                                  whileHover={{ scale: 1.05, y: -2, rotateY: 8 }}
                                  className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-netflix-red/15 to-netflix-red-dark/15 text-netflix-red rounded-full border border-netflix-red/30 cursor-pointer"
                                >
                                  {honor}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>

                          {/* Key Courses */}
                          <motion.div
                            variants={floatingVariants}
                            className="mb-4"
                          >
                            <h4 className="text-xs font-semibold text-white flex items-center gap-2 mb-2">
                              <Target size={14} className="text-netflix-red" />
                              Key Courses
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                              {edu.courses.map((course, courseIndex) => (
                                <motion.div
                                  key={courseIndex}
                                  custom={courseIndex}
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
                                    {course}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>

                          {/* Achievements */}
                          <motion.div
                            variants={floatingVariants}
                          >
                            <h4 className="text-xs font-semibold text-white flex items-center gap-2 mb-2">
                              <Award size={14} className="text-netflix-red" />
                              Notable Achievements
                            </h4>
                            <ul className="space-y-1.5">
                              {edu.achievements.map((achievement, achievementIndex) => (
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

          
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
