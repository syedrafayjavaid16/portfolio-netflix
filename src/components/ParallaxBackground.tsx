'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxBackground = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden">
      {/* Deepest layer - Slowest movement */}
      <motion.div
        style={{ y: y4 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-netflix-red/3 to-netflix-red-dark/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-netflix-red-dark/2 to-netflix-red/2 rounded-full blur-3xl" />
      </motion.div>

      {/* Third layer */}
      <motion.div
        style={{ y: y3 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-netflix-red/4 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-transparent to-netflix-red-dark/4 rounded-full blur-2xl" />
      </motion.div>

      {/* Second layer */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-netflix-red/5 to-netflix-red-light/5 rounded-full blur-xl" />
        <div className="absolute top-1/4 right-1/4 w-56 h-56 bg-gradient-to-r from-netflix-red-light/3 to-netflix-red/3 rounded-full blur-xl" />
      </motion.div>

      {/* Front layer - Fastest movement */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/6 left-1/6 w-32 h-32 bg-gradient-to-r from-netflix-red/6 to-transparent rounded-full blur-lg" />
        <div className="absolute bottom-1/6 right-1/6 w-40 h-40 bg-gradient-to-r from-transparent to-netflix-red-dark/6 rounded-full blur-lg" />
      </motion.div>

      {/* Floating particles with parallax */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-1/3 w-2 h-2 bg-netflix-red/40 rounded-full"
        />
        <motion.div
          animate={{
            y: [10, -10, 10],
            x: [5, -5, 5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-netflix-red-light/50 rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default ParallaxBackground;
