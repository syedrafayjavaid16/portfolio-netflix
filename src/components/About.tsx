'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import { FiDownload } from 'react-icons/fi';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Parallax3D from './Parallax3D';
import ParallaxBackground from './ParallaxBackground';
import { useParallax } from '@/contexts/ParallaxContext';

// Counter Animation Component
const AnimatedCounter = ({ target, suffix = '+', duration = 2000, shouldAnimate = false, isInitialLoad = false, onComplete }: {
  target: number;
  suffix?: string;
  duration?: number;
  shouldAnimate?: boolean;
  isInitialLoad?: boolean;
  onComplete?: () => void;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (shouldAnimate || isInitialLoad) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * target);
        
        setCount(currentCount);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(target);
          onComplete?.();
        }
      };

      setCount(0);
      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [target, duration, shouldAnimate, isInitialLoad, onComplete]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
};

// Individual Stat Card Component
const StatCard = ({ stat, index, parallaxEnabled }: {
  stat: {
    icon: React.ComponentType<{ size: number; className: string }>;
    label: string;
    value: string;
    numericValue: number;
    color: string;
  };
  index: number;
  parallaxEnabled: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasInitiallyAnimated, setHasInitiallyAnimated] = useState(false);

  const itemVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut" as const, 
      },
    },
  };

  return (
    <Parallax3D enabled={parallaxEnabled} className="w-full">
      <motion.div
        variants={itemVariants}
        whileHover={{
          scale: 1.05,
          rotateY: 5,
          boxShadow: '0 0 30px rgba(229, 9, 20, 0.4)',
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onViewportEnter={() => {
          if (!hasInitiallyAnimated) {
            setHasInitiallyAnimated(true);
          }
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3 }}
        className="text-center p-4 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-netflix-gray hover:border-netflix-red/50 backdrop-blur-sm relative overflow-hidden"
      >
        <motion.div
          whileHover={{ 
            rotate: 360,
            scale: 1.1,
            boxShadow: '0 0 20px rgba(229, 9, 20, 0.6)',
          }}
          transition={{ duration: 0.5 }}
          className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-netflix-red/20 to-netflix-red-dark/20 border border-netflix-red/40 flex items-center justify-center relative z-10"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-netflix-red/15 rounded-full"
          />
          <stat.icon size={24} className="text-netflix-red relative z-10" />
        </motion.div>
        
        <motion.h4
          className="text-2xl font-bold text-white mb-1 relative z-10"
        >
          <AnimatedCounter 
            target={stat.numericValue} 
            suffix="+" 
            duration={1500}
            shouldAnimate={isHovered}
            isInitialLoad={hasInitiallyAnimated}
          />
        </motion.h4>
        <p className="text-gray-400 text-xs font-medium relative z-10">{stat.label}</p>
      </motion.div>
    </Parallax3D>
  );
};

const About = () => {
  const { parallaxEnabled } = useParallax();
  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '30+', numericValue: 30, color: 'netflix-red' },
    { icon: Users, label: 'Happy Clients', value: '15+', numericValue: 15, color: 'netflix-red-dark' },
    { icon: Lightbulb, label: 'Years Experience', value: '3+', numericValue: 3, color: 'netflix-red-light' },
    { icon: Rocket, label: 'Technologies', value: '20+', numericValue: 20, color: 'netflix-red' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut" as const, 
      },
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const floatingVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="about"
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
          {/* Enhanced Section Header */}
          <Parallax3D enabled={parallaxEnabled} className="text-center mb-16">
            <motion.div variants={itemVariants}>
              <motion.div
                variants={floatingVariants}
                className="relative inline-block"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-4">
                  About Me
                </h2>
                {/* Animated underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-1 bg-gradient-to-r from-transparent via-netflix-red to-transparent mx-auto rounded-full"
                />
              </motion.div>
              
              <motion.p
                variants={floatingVariants}
                className="text-gray-400 mt-4 max-w-2xl mx-auto text-base leading-relaxed"
              >
                I&apos;m a passionate full-stack developer with expertise in modern web technologies. 
                I love creating beautiful, functional applications that solve real-world problems.
              </motion.p>
            </motion.div>
          </Parallax3D>

          <motion.div 
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Image/Visual */}
            <Parallax3D enabled={parallaxEnabled} className="relative">
              <motion.div variants={itemVariants}>
              <div className="relative">
                {/* Profile Image */}
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, 5, -5, 0],
                    boxShadow: '0 0 40px rgba(51, 51, 51, 0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-64 h-64 mx-auto bg-gradient-to-br from-netflix-gray/80 to-black/80 rounded-full border-4 border-netflix-gray flex items-center justify-center backdrop-blur-sm overflow-hidden"
                >
                  <Image 
                    src="/profile.png" 
                    alt="Syed Rafay Javaid" 
                    width={256}
                    height={256}
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  variants={floatingVariants}
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-lg backdrop-blur-sm border border-netflix-gray flex items-center justify-center"
                >
                  <Rocket size={20} className="text-netflix-red" />
                </motion.div>

                <motion.div
                  variants={floatingVariants}
                  animate={{
                    y: [10, -10, 10],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                  className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-lg backdrop-blur-sm border border-netflix-gray flex items-center justify-center"
                >
                  <Lightbulb size={20} className="text-netflix-red" />
                </motion.div>
              </div>
              </motion.div>
            </Parallax3D>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Passionate Full Stack Developer
                </h3>
                <div className="space-y-3 text-gray-300 text-base leading-relaxed">
                  <p>
                  I&apos;m a results-driven Full Stack Developer with 3+ years of experience building and deploying scalable web applications
                  using the MERN stack and modern technologies. I&apos;ve led projects for startups and enterprises, managing and mentoring junior 
                  developers, collaborating with design and QA teams, and delivering high-quality solutions with strong backend architecture, 
                  third-party integrations, and cloud deployments from concept to completion
                  </p>
                  <p>
                 Skilled in JavaScript, Python, Java, and frameworks like React.js, Node.js,
                  Angular.js, and Nest.js, I work with databases such as MongoDB, SQL, Prisma, and Firebase to create optimized, reliable, and
                  user-focused applications.
                  </p>
                  <p>
                  Passionate about solving complex problems and crafting impactful digital products, I bring technical depth,
                  strategic thinking, and attention to detail to every project.
                  </p>
                </div>
              </div>

              {/* Download CV Button */}
              <motion.a
                href="/RESUME - RAFAY JAVAID.pdf"
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 30px rgba(229, 9, 20, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-x-1 px-6 py-3 bg-netflix-red border border-netflix-red text-white font-semibold rounded-full hover:bg-netflix-red-dark hover:border-netflix-red/50 transition-all duration-300 shadow-lg backdrop-blur-sm"
                target="_blank"
                rel="noopener noreferrer"
                download="RESUME - RAFAY JAVAID.pdf"
              >
                <FiDownload className="text-lg" />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {stats.map((stat, index) => (
              <StatCard 
                key={stat.label} 
                stat={stat} 
                index={index} 
                parallaxEnabled={parallaxEnabled} 
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
