'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);


  const titles = useMemo(() => [
    'Full Stack Engineer',
    'Project Manager',
    'React Developer',
    'Node.js Expert',
    'Problem Solver',
  ], []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const typeEffect = () => {
      const current = titles[currentIndex];
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(typeEffect, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, mounted, titles]);  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
              transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  if (!mounted) {
    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-black">
        <div className="text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient mb-6">Syed Rafay Javaid</h1>
          <div className="text-2xl md:text-4xl lg:text-5xl text-white mb-8">Full Stack Engineer</div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pb-28">
    
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(180,0,10,0.1)_0%,_transparent_70%)]"
        />

        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '200% 200%'] }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(120deg,_rgba(255,50,50,0.15)_0%,_transparent_40%,_transparent_60%,_rgba(255,50,50,0.15)_100%)] bg-[length:300%_300%]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
          Hello, I&apos;m
        </motion.h2>

        <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient">
          Syed Rafay Javaid
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-white mb-4 h-10 flex items-center justify-center"
        >
          <span className="typewriter font-light">
            {currentText}
            <span className="text-netflix-red">|</span>
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-300 mb-6 max-w-xl mx-auto leading-relaxed"
        >
          Crafting exceptional digital experiences with cutting-edge technologies.
          Passionate about creating scalable, performant, and beautiful applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(229, 9, 20, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-netflix-red hover:bg-netflix-red-dark text-white font-semibold rounded-full shadow-lg transition-all duration-300 glow-netflix"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(229, 9, 20, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-netflix-red text-netflix-red font-semibold rounded-full hover:bg-netflix-red hover:text-white transition-all duration-300 glow-netflix"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-6 flex flex-col items-center text-gray-400"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <div className="w-10 h-10 rounded-full border-2 border-netflix-red flex items-center justify-center shadow-lg shadow-netflix-red/30">
            <ArrowDown size={20} className="text-netflix-red" />
          </div>
          <span className="text-sm mt-2 font-light tracking-wide">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
