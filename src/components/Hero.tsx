'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [trailParticles, setTrailParticles] = useState<Array<{ id: number; x: number; y: number; opacity: number }>>([]);


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

                       {/* Elegant Light Particles */}
            <motion.div
              animate={{
                y: [-15, 15, -15],
                x: [-10, 10, -10],
                scale: [0.8, 1.2, 0.8],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-1/3 left-1/4 w-1 h-1 bg-netflix-red rounded-full"
            />

            <motion.div
              animate={{
                y: [15, -15, 15],
                x: [10, -10, 10],
                scale: [1.2, 0.8, 1.2],
                opacity: [0.08, 0.25, 0.08],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}
              className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-netflix-red rounded-full"
            />

            <motion.div
              animate={{
                y: [-12, 12, -12],
                x: [-8, 8, -8],
                scale: [0.9, 1.1, 0.9],
                opacity: [0.12, 0.28, 0.12],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 4,
              }}
              className="absolute bottom-1/3 left-1/3 w-0.75 h-0.75 bg-netflix-red rounded-full"
            />

            {/* Subtle Light Rays */}
            <motion.div
              animate={{
                rotate: [0, 180, 360],
                opacity: [0.02, 0.08, 0.02],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96"
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(229,9,20,0.03), transparent, transparent)',
              }}
            />

            {/* Gentle Wave Patterns */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
                opacity: [0.03, 0.06, 0.03],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(229,9,20,0.02)_0%,_transparent_50%)]"
            />

            {/* Floating Light Orbs */}
            <motion.div
              animate={{
                y: [-20, 20, -20],
                x: [-15, 15, -15],
                scale: [0.6, 1.4, 0.6],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute top-1/4 right-1/4 w-8 h-8 bg-gradient-to-br from-netflix-red/8 to-transparent rounded-full blur-sm"
            />

            <motion.div
              animate={{
                y: [20, -20, 20],
                x: [15, -15, 15],
                scale: [1.4, 0.6, 1.4],
                opacity: [0.04, 0.12, 0.04],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 6,
              }}
              className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-gradient-to-br from-netflix-red/6 to-transparent rounded-full blur-sm"
            />

            {/* Subtle Grid Lines */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
                opacity: [0.02, 0.05, 0.02],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(229,9,20,0.02)_1px,_transparent_1px),_linear-gradient(180deg,_rgba(229,9,20,0.02)_1px,_transparent_1px)] bg-[size:100px_100px]"
            />

            {/* Gentle Corner Glows */}
            <motion.div
              animate={{
                opacity: [0.03, 0.08, 0.03],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-netflix-red/5 to-transparent rounded-br-full"
            />

            <motion.div
              animate={{
                opacity: [0.03, 0.08, 0.03],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}
              className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-netflix-red/5 to-transparent rounded-bl-full"
            />

            <motion.div
              animate={{
                opacity: [0.03, 0.08, 0.03],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 4,
              }}
              className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-netflix-red/5 to-transparent rounded-tr-full"
            />

            <motion.div
              animate={{
                opacity: [0.03, 0.08, 0.03],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 6,
              }}
              className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-netflix-red/5 to-transparent rounded-tl-full"
            />

            {/* Floating Light Streaks */}
            <motion.div
              animate={{
                y: [-30, 30, -30],
                opacity: [0, 0.1, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-1/3 left-1/6 w-px h-16 bg-gradient-to-b from-transparent via-netflix-red/8 to-transparent"
            />

            <motion.div
              animate={{
                y: [30, -30, 30],
                opacity: [0, 0.08, 0],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 3,
              }}
              className="absolute bottom-1/3 right-1/6 w-px h-12 bg-gradient-to-t from-transparent via-netflix-red/6 to-transparent"
            />

            {/* Subtle Pulse Rings */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.02, 0.06, 0.02],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-netflix-red/8 rounded-full"
            />

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.015, 0.045, 0.015],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-netflix-red/6 rounded-full"
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

          {/* Additional Floating Particles */}
          <motion.div
            animate={{
              y: [-25, 25, -25],
              x: [-15, 15, -15],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute top-1/6 left-1/6 w-1.5 h-1.5 bg-netflix-red rounded-full opacity-45"
          />

          <motion.div
            animate={{
              y: [25, -25, 25],
              x: [15, -15, 15],
              scale: [1.2, 0.7, 1.2],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 3,
            }}
            className="absolute top-1/6 right-1/6 w-1 h-1 bg-netflix-red rounded-full opacity-35"
          />

          <motion.div
            animate={{
              y: [-18, 18, -18],
              x: [-8, 8, -8],
              scale: [0.9, 1.4, 0.9],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 5,
            }}
            className="absolute top-2/3 left-1/5 w-2 h-2 bg-netflix-red rounded-full opacity-55"
          />

          <motion.div
            animate={{
              y: [18, -18, 18],
              x: [8, -8, 8],
              scale: [1.3, 0.6, 1.3],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 7,
            }}
            className="absolute top-2/3 right-1/5 w-1 h-1 bg-netflix-red rounded-full opacity-25"
          />

          <motion.div
            animate={{
              y: [-30, 30, -30],
              x: [-12, 12, -12],
              scale: [0.7, 1.5, 0.7],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2.5,
            }}
            className="absolute bottom-1/6 left-2/3 w-1.5 h-1.5 bg-netflix-red rounded-full opacity-40"
          />

          <motion.div
            animate={{
              y: [30, -30, 30],
              x: [12, -12, 12],
              scale: [1.4, 0.5, 1.4],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 4.5,
            }}
            className="absolute bottom-1/6 right-2/3 w-1 h-1 bg-netflix-red rounded-full opacity-30"
          />

          <motion.div
            animate={{
              y: [-22, 22, -22],
              x: [-18, 18, -18],
              scale: [1.1, 0.8, 1.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 6.5,
            }}
            className="absolute top-1/2 left-1/8 w-1.5 h-1.5 bg-netflix-red rounded-full opacity-50"
          />

          <motion.div
            animate={{
              y: [22, -22, 22],
              x: [18, -18, 18],
              scale: [0.6, 1.6, 0.6],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 8.5,
            }}
            className="absolute top-1/2 right-1/8 w-1 h-1 bg-netflix-red rounded-full opacity-35"
          />

          <motion.div
            animate={{
              y: [-28, 28, -28],
              x: [-6, 6, -6],
              scale: [0.9, 1.2, 0.9],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.5,
            }}
            className="absolute bottom-1/3 left-4/5 w-1.5 h-1.5 bg-netflix-red rounded-full opacity-45"
          />

          <motion.div
            animate={{
              y: [28, -28, 28],
              x: [6, -6, 6],
              scale: [1.5, 0.7, 1.5],
            }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 3.5,
            }}
            className="absolute bottom-1/3 right-4/5 w-1 h-1 bg-netflix-red rounded-full opacity-25"
          />

          <motion.div
            animate={{
              y: [-35, 35, -35],
              x: [-20, 20, -20],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{
              duration: 19,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 5.5,
            }}
            className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-netflix-red rounded-full opacity-40"
          />

          <motion.div
            animate={{
              y: [35, -35, 35],
              x: [20, -20, 20],
              scale: [1.3, 0.6, 1.3],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 7.5,
            }}
            className="absolute top-3/4 right-1/3 w-1 h-1 bg-netflix-red rounded-full opacity-30"
          />

          {/* Galaxy-like Particles - Left Side */}
          <motion.div
            animate={{
              y: [-40, 40, -40],
              x: [-25, 25, -25],
              scale: [0.5, 1.8, 0.5],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute top-1/5 left-12 w-1.5 h-1.5 bg-netflix-red rounded-full opacity-50"
          />

          <motion.div
            animate={{
              y: [40, -40, 40],
              x: [-30, 30, -30],
              scale: [1.8, 0.4, 1.8],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2.5,
            }}
            className="absolute top-1/3 left-16 w-1 h-1 bg-netflix-red rounded-full opacity-35"
          />

          <motion.div
            animate={{
              y: [-35, 35, -35],
              x: [-20, 20, -20],
              scale: [0.6, 1.7, 0.6],
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 4.5,
            }}
            className="absolute top-1/2 left-20 w-2 h-2 bg-netflix-red rounded-full opacity-60"
          />

          <motion.div
            animate={{
              y: [45, -45, 45],
              x: [-35, 35, -35],
              scale: [1.6, 0.3, 1.6],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 6.5,
            }}
            className="absolute top-2/3 left-14 w-1 h-1 bg-netflix-red rounded-full opacity-25"
          />

          <motion.div
            animate={{
              y: [-50, 50, -50],
              x: [-15, 15, -15],
              scale: [0.4, 1.9, 0.4],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 8.5,
            }}
            className="absolute top-3/4 left-18 w-1.5 h-1.5 bg-netflix-red rounded-full opacity-45"
          />

          <motion.div
            animate={{
              y: [30, -30, 30],
              x: [-40, 40, -40],
              scale: [1.9, 0.2, 1.9],
            }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 10.5,
            }}
            className="absolute top-1/6 left-10 w-1 h-1 bg-netflix-red rounded-full opacity-20"
          />

          <motion.div
            animate={{
              y: [-55, 55, -55],
              x: [-10, 10, -10],
              scale: [0.3, 2.0, 0.3],
            }}
            transition={{
              duration: 34,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 12.5,
            }}
            className="absolute top-4/5 left-22 w-1.5 h-1.5 bg-netflix-red rounded-full opacity-40"
          />

                     {/* Galaxy-like Particles - Right Side */}
           <motion.div
             animate={{
               y: [-40, 40, -40],
               x: [25, -25, 25],
               scale: [0.5, 1.8, 0.5],
             }}
             transition={{
               duration: 22,
               repeat: Infinity,
               ease: 'easeInOut',
               delay: 1.5,
             }}
             className="absolute top-1/5 right-12 w-1.5 h-1.5 bg-netflix-red rounded-full opacity-50"
           />

           <motion.div
             animate={{
               y: [40, -40, 40],
               x: [30, -30, 30],
               scale: [1.8, 0.4, 1.8],
             }}
             transition={{
               duration: 24,
               repeat: Infinity,
               ease: 'easeInOut',
               delay: 3.5,
             }}
             className="absolute top-1/3 right-16 w-1 h-1 bg-netflix-red rounded-full opacity-35"
           />

           <motion.div
             animate={{
               y: [-35, 35, -35],
               x: [20, -20, 20],
               scale: [0.6, 1.7, 0.6],
             }}
             transition={{
               duration: 26,
               repeat: Infinity,
               ease: 'easeInOut',
               delay: 5.5,
             }}
             className="absolute top-1/2 right-20 w-2 h-2 bg-netflix-red rounded-full opacity-60"
           />

           <motion.div
             animate={{
               y: [45, -45, 45],
               x: [35, -35, 35],
               scale: [1.6, 0.3, 1.6],
             }}
             transition={{
               duration: 28,
               repeat: Infinity,
               ease: 'easeInOut',
               delay: 7.5,
             }}
             className="absolute top-2/3 right-14 w-1 h-1 bg-netflix-red rounded-full opacity-25"
           />

           <motion.div
             animate={{
               y: [-50, 50, -50],
               x: [15, -15, 15],
               scale: [0.4, 1.9, 0.4],
             }}
             transition={{
               duration: 30,
               repeat: Infinity,
               ease: 'easeInOut',
               delay: 9.5,
             }}
             className="absolute top-3/4 right-18 w-1.5 h-1.5 bg-netflix-red rounded-full opacity-45"
           />

           <motion.div
             animate={{
               y: [30, -30, 30],
               x: [40, -40, 40],
               scale: [1.9, 0.2, 1.9],
             }}
             transition={{
               duration: 32,
               repeat: Infinity,
               ease: 'easeInOut',
               delay: 11.5,
             }}
             className="absolute top-1/6 right-10 w-1 h-1 bg-netflix-red rounded-full opacity-20"
           />

           <motion.div
             animate={{
               y: [-55, 55, -55],
               x: [10, -10, 10],
               scale: [0.3, 2.0, 0.3],
             }}
             transition={{
               duration: 34,
               repeat: Infinity,
               ease: 'easeInOut',
               delay: 13.5,
             }}
             className="absolute top-4/5 right-22 w-1.5 h-1.5 bg-netflix-red rounded-full opacity-40"
           />

           {/* Additional Right Side Galaxy Particles */}
           <motion.div
             animate={{
               y: [-38, 38, -38],
               x: [28, -28, 28],
               scale: [0.7, 1.6, 0.7],
             }}
             transition={{
               duration: 23,
               repeat: Infinity,
               ease: 'easeInOut',
               delay: 2.5,
             }}
             className="absolute top-1/4 right-14 w-1.2 h-1.2 bg-netflix-red rounded-full opacity-45"
           />

           <motion.div
             animate={{
               y: [42, -42, 42],
               x: [32, -32, 32],
               scale: [1.7, 0.5, 1.7],
             }}
             transition={{
               duration: 25,
               repeat: Infinity,
               ease: 'easeInOut',
               delay: 4.5,
             }}
             className="absolute top-2/5 right-18 w-0.8 h-0.8 bg-netflix-red rounded-full opacity-30"
           />

           <motion.div
             animate={{
               y: [-33, 33, -33],
               x: [22, -22, 22],
               scale: [0.8, 1.5, 0.8],
             }}
             transition={{
               duration: 27,
               repeat: Infinity,
               ease: 'easeInOut',
               delay: 6.5,
             }}
             className="absolute top-3/5 right-24 w-1.8 h-1.8 bg-netflix-red rounded-full opacity-55"
           />

           <motion.div
             animate={{
               y: [47, -47, 47],
               x: [37, -37, 37],
               scale: [1.5, 0.4, 1.5],
             }}
             transition={{
               duration: 29,
               repeat: Infinity,
               ease: 'easeInOut',
               delay: 8.5,
             }}
             className="absolute top-4/5 right-16 w-0.9 h-0.9 bg-netflix-red rounded-full opacity-35"
           />

           <motion.div
             animate={{
               y: [-52, 52, -52],
               x: [17, -17, 17],
               scale: [0.5, 1.8, 0.5],
             }}
             transition={{
               duration: 31,
               repeat: Infinity,
               ease: 'easeInOut',
               delay: 10.5,
             }}
             className="absolute top-1/7 right-26 w-1.3 h-1.3 bg-netflix-red rounded-full opacity-50"
           />

           <motion.div
             animate={{
               y: [32, -32, 32],
               x: [42, -42, 42],
               scale: [1.8, 0.3, 1.8],
             }}
             transition={{
               duration: 33,
               repeat: Infinity,
               ease: 'easeInOut',
               delay: 12.5,
             }}
             className="absolute top-2/7 right-12 w-0.7 h-0.7 bg-netflix-red rounded-full opacity-25"
           />

           <motion.div
             animate={{
               y: [-57, 57, -57],
               x: [12, -12, 12],
               scale: [0.4, 2.1, 0.4],
             }}
             transition={{
               duration: 35,
               repeat: Infinity,
               ease: 'easeInOut',
               delay: 14.5,
             }}
             className="absolute top-5/6 right-20 w-1.4 h-1.4 bg-netflix-red rounded-full opacity-45"
           />

           <motion.div
             animate={{
               y: [36, -36, 36],
               x: [38, -38, 38],
               scale: [1.9, 0.2, 1.9],
             }}
             transition={{
               duration: 37,
               repeat: Infinity,
               ease: 'easeInOut',
               delay: 16.5,
             }}
             className="absolute top-3/7 right-28 w-0.6 h-0.6 bg-netflix-red rounded-full opacity-20"
           />

           <motion.div
             animate={{
               y: [-44, 44, -44],
               x: [26, -26, 26],
               scale: [0.6, 1.9, 0.6],
             }}
             transition={{
               duration: 39,
               repeat: Infinity,
               ease: 'easeInOut',
               delay: 18.5,
             }}
             className="absolute top-6/7 right-14 w-1.1 h-1.1 bg-netflix-red rounded-full opacity-40"
           />

          {/* Additional Scattered Particles for Galaxy Effect */}
          <motion.div
            animate={{
              y: [-60, 60, -60],
              x: [-5, 5, -5],
              scale: [0.2, 2.1, 0.2],
            }}
            transition={{
              duration: 36,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 14.5,
            }}
            className="absolute top-1/8 left-8 w-1 h-1 bg-netflix-red rounded-full opacity-15"
          />

          <motion.div
            animate={{
              y: [60, -60, 60],
              x: [5, -5, 5],
              scale: [2.1, 0.1, 2.1],
            }}
            transition={{
              duration: 38,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 15.5,
            }}
            className="absolute top-1/8 right-8 w-1 h-1 bg-netflix-red rounded-full opacity-15"
          />

          <motion.div
            animate={{
              y: [-45, 45, -45],
              x: [-45, 45, -45],
              scale: [0.1, 2.2, 0.1],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 16.5,
            }}
            className="absolute top-5/6 left-6 w-1.5 h-1.5 bg-netflix-red rounded-full opacity-30"
          />

          <motion.div
            animate={{
              y: [45, -45, 45],
              x: [45, -45, 45],
              scale: [2.2, 0.1, 2.2],
            }}
            transition={{
              duration: 42,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 17.5,
            }}
            className="absolute top-5/6 right-6 w-1.5 h-1.5 bg-netflix-red rounded-full opacity-30"
          />

                     {/* Animated Light Rays */}
           <motion.div
             animate={{
               rotate: [0, 360],
               opacity: [0.05, 0.15, 0.05],
             }}
             transition={{
               duration: 30,
               repeat: Infinity,
               ease: 'linear',
             }}
             className="absolute inset-0 bg-gradient-to-r from-transparent via-netflix-red/3 to-transparent"
             style={{
               background: 'conic-gradient(from 0deg, transparent, rgba(229,9,20,0.05), transparent, transparent)',
             }}
           />

          {/* Pulsing Circles */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-netflix-red/20 rounded-full"
          />

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-netflix-red/15 rounded-full"
          />

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.15, 0.03],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 4,
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-netflix-red/10 rounded-full"
          />

                     {/* Animated Wave Effect */}
           <motion.div
             animate={{
               backgroundPosition: ['0% 50%', '100% 50%'],
               opacity: [0.05, 0.1, 0.05],
             }}
             transition={{
               duration: 25,
               repeat: Infinity,
               ease: 'linear',
             }}
             className="absolute inset-0 bg-[linear-gradient(90deg,_transparent_0%,_rgba(229,9,20,0.05)_50%,_transparent_100%)] bg-[length:200%_100%]"
           />

                     {/* Corner Glows */}
           <motion.div
             animate={{
               opacity: [0.05, 0.15, 0.05],
               scale: [1, 1.1, 1],
             }}
             transition={{
               duration: 4,
               repeat: Infinity,
               ease: 'easeInOut',
             }}
             className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-netflix-red/10 to-transparent rounded-br-full"
           />

           <motion.div
             animate={{
               opacity: [0.05, 0.15, 0.05],
               scale: [1, 1.1, 1],
             }}
             transition={{
               duration: 4,
               repeat: Infinity,
               ease: 'easeInOut',
               delay: 1,
             }}
             className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-netflix-red/10 to-transparent rounded-bl-full"
           />

           <motion.div
             animate={{
               opacity: [0.05, 0.15, 0.05],
               scale: [1, 1.1, 1],
             }}
             transition={{
               duration: 4,
               repeat: Infinity,
               ease: 'easeInOut',
               delay: 2,
             }}
             className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-netflix-red/10 to-transparent rounded-tr-full"
           />

           <motion.div
             animate={{
               opacity: [0.05, 0.15, 0.05],
               scale: [1, 1.1, 1],
             }}
             transition={{
               duration: 4,
               repeat: Infinity,
               ease: 'easeInOut',
               delay: 3,
             }}
             className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-netflix-red/10 to-transparent rounded-tl-full"
           />
        </div>
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
