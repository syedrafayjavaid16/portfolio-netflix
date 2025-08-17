'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800">
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.1,
          boxShadow: '0 0 20px rgba(255, 0, 64, 0.5)',
        }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 bg-netflix-red hover:bg-netflix-red-dark text-white rounded-full shadow-lg z-50 hover:shadow-xl transition-all duration-300 glow-netflix"
      >
        <ArrowUp size={24} />
      </motion.button>

      <div className="container mx-auto px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold text-gradient cursor-pointer"
              >
                &lt;Portfolio/&gt;
              </motion.div>
              <p className="text-gray-300 leading-relaxed">
                Full Stack Engineer passionate about creating exceptional digital experiences 
                with modern technologies and innovative solutions.
              </p>
              <div className="flex items-center space-x-2 text-gray-300">
                <span>Made with</span>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    color: ['#ff0040', '#00ff88', '#ff0040'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Heart size={20} fill="currentColor" />
                </motion.div>
                <span>and lots of coffee</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      x: 10,
                      color: '#e50914',
                      transition: { duration: 0.2 },
                    }}
                    className="block text-gray-300 hover:text-netflix-red transition-colors duration-300"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-bold text-white">Get In Touch</h3>
              <div className="space-y-3">
                <motion.a
                  href="mailto:your.email@example.com"
                  whileHover={{
                    scale: 1.05,
                    color: '#e50914',
                    transition: { duration: 0.2 },
                  }}
                  className="block text-gray-300 hover:text-netflix-red transition-colors duration-300"
                >
                  your.email@example.com
                </motion.a>
                <motion.a
                  href="tel:+15551234567"
                  whileHover={{
                    scale: 1.05,
                    color: '#e50914',
                    transition: { duration: 0.2 },
                  }}
                  className="block text-gray-300 hover:text-netflix-red transition-colors duration-300"
                >
                  +1 (555) 123-4567
                </motion.a>
                <motion.p
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className="text-gray-300"
                >
                  Your City, Country
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-gray-800 text-center"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p
                whileHover={{ scale: 1.05 }}
                className="text-gray-400"
              >
                © {currentYear} Your Name. All rights reserved.
              </motion.p>
              
              <div className="flex space-x-6">
                {['Privacy Policy', 'Terms of Service'].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{
                      color: '#e50914',
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    className="text-gray-400 hover:text-netflix-red transition-colors duration-300 text-sm"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Animated Signature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8"
            >
              <motion.p
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-sm bg-gradient-to-r from-netflix-red via-netflix-red-light to-netflix-red bg-[length:200%_auto] bg-clip-text text-transparent font-medium"
              >
                Crafted with passion • Powered by innovation
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
