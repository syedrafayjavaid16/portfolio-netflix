'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();



    return (
    <footer className="bg-gradient-to-b from-black via-netflix-black to-black relative overflow-hidden">
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.1,
          boxShadow: '0 0 30px rgba(229, 9, 20, 0.6)',
        }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-netflix-red to-netflix-red-dark text-white rounded-full shadow-lg z-50 hover:shadow-xl transition-all duration-300 glow-netflix"
      >
        <ArrowUp size={24} />
      </motion.button>

      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-4"
          >
            © {currentYear} Syed Rafay Javaid. All rights reserved.
          </motion.p>
          
          <div className="flex justify-center space-x-6 mb-4">
            <motion.a
              href="/privacy"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                color: '#e50914',
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="text-gray-400 hover:text-netflix-red transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="/terms"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{
                color: '#e50914',
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="text-gray-400 hover:text-netflix-red transition-colors duration-300 text-sm"
            >
              Terms of Service
            </motion.a>
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
