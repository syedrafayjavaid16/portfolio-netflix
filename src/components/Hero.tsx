'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Parallax3D from './Parallax3D';
import { useParallax } from '@/contexts/ParallaxContext';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [trailParticles, setTrailParticles] = useState<Array<{ id: number; x: number; y: number; opacity: number }>>([]);
  const { parallaxEnabled } = useParallax();

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

  // Mouse trail effect
  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Add new trail particle
      const newParticle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
      };
      
      setTrailParticles(prev => {
        const updated = [...prev, newParticle];
        // Keep only last 15 particles
        return updated.slice(-15);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mounted]);

  // Fade out trail particles
  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setTrailParticles(prev => 
        prev.map(particle => ({
          ...particle,
          opacity: Math.max(0, particle.opacity - 0.02),
        })).filter(particle => particle.opacity > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, [mounted]);

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
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(typeEffect, isDeleting ? 30 : 60);
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(180,0,10,0.05)_0%,_transparent_70%)]"
        />

        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '200% 200%'] }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(120deg,_rgba(255,50,50,0.08)_0%,_transparent_40%,_transparent_60%,_rgba(255,50,50,0.08)_100%)] bg-[length:300%_300%]"
        />

        {/* Dynamic Background Animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          
          {/* Mouse Trail Particles */}
          {trailParticles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: particle.opacity,
              }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'fixed',
                left: particle.x - 4,
                top: particle.y - 4,
                zIndex: 1000,
              }}
              className="w-2 h-2 bg-netflix-red rounded-full pointer-events-none"
            />
          ))}

          {/* Animated Grid Pattern */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(229,9,20,0.05)_1px,_transparent_1px),_linear-gradient(180deg,_rgba(229,9,20,0.05)_1px,_transparent_1px)] bg-[size:50px_50px]"
          />

          {/* Floating Particles */}
          <motion.div
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-netflix-red rounded-full opacity-60"
          />

          <motion.div
            animate={{
              y: [20, -20, 20],
              x: [10, -10, 10],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-netflix-red rounded-full opacity-40"
          />

          <motion.div
            animate={{
              y: [-15, 15, -15],
              x: [-5, 5, -5],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 4,
            }}
            className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-netflix-red rounded-full opacity-50"
          />

          <motion.div
            animate={{
              y: [15, -15, 15],
              x: [5, -5, 5],
              scale: [1.1, 0.9, 1.1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 6,
            }}
            className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-netflix-red rounded-full opacity-30"
          />
        </div>
      </div>

      <Parallax3D enabled={parallaxEnabled} className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
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
              data-cursor="special"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(229, 9, 20, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-netflix-red text-netflix-red font-semibold rounded-full hover:bg-netflix-red hover:text-white transition-all duration-300 glow-netflix"
              data-cursor="special"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </Parallax3D>

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
