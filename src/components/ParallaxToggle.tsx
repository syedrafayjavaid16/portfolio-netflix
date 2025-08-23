'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';

interface ParallaxToggleProps {
  onToggle: (enabled: boolean) => void;
  enabled: boolean;
}

const ParallaxToggle = ({ onToggle, enabled }: ParallaxToggleProps) => {
  return (
    <motion.button
      onClick={() => onToggle(!enabled)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1,
        scale: 1
      }}
      whileHover={{ 
        scale: 1.05,
        y: -2,
        boxShadow: enabled 
          ? '0 8px 25px rgba(229, 9, 20, 0.4)' 
          : '0 8px 25px rgba(156, 163, 175, 0.3)'
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        duration: 0.3,
        ease: "easeOut"
      }}
      className={`fixed top-24 right-6 z-50 p-2.5 rounded-lg shadow-md backdrop-blur-sm border transition-all duration-300 ${
        enabled
          ? 'bg-gradient-to-r from-netflix-red/15 to-netflix-red-dark/15 border-netflix-red/30 text-netflix-red hover:from-netflix-red/25 hover:to-netflix-red-dark/25'
          : 'bg-gradient-to-r from-gray-800/15 to-gray-700/15 border-gray-600/30 text-gray-400 hover:from-gray-800/25 hover:to-gray-700/25'
      }`}
      title={enabled ? 'Disable 3D Effects' : 'Enable 3D Effects'}
    >
      <motion.div
        animate={{ 
          rotate: enabled ? [0, 360] : 0,
          scale: enabled ? [1, 1.1, 1] : 1
        }}
        transition={{ 
          duration: enabled ? 2 : 0.3,
          repeat: enabled ? Infinity : 0,
          ease: "linear"
        }}
      >
        {enabled ? <Sparkles size={16} /> : <Zap size={16} />}
      </motion.div>
      
      {/* Subtle glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: enabled ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
        className={`absolute inset-0 rounded-xl blur-sm ${
          enabled ? 'bg-netflix-red/30' : 'bg-gray-600/20'
        }`}
      />
    </motion.button>
  );
};

export default ParallaxToggle;
