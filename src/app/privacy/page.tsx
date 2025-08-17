'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const PrivacyPolicy = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-black via-netflix-black to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-netflix-red/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-netflix-red-dark/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 pt-8 px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-gray-300 hover:text-netflix-red transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Privacy Policy
            </h1>
            <div className="w-24 h-1 bg-netflix-red mx-auto rounded-full mb-4" />
            <p className="text-gray-300 text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                This portfolio website is designed to showcase my work and skills. We collect minimal information:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2 ml-6">
                <li>• Contact form submissions (name, email, subject, message)</li>
                <li>• Basic analytics data (page views, time spent on site)</li>
                <li>• Technical information (browser type, device information)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The information we collect is used for:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2 ml-6">
                <li>• Responding to your contact form submissions</li>
                <li>• Improving the website experience</li>
                <li>• Understanding how visitors interact with the site</li>
                <li>• Professional networking and collaboration opportunities</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">3. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                                 If you have any questions about this Privacy Policy, please contact me at{' '}
                 <a href="mailto:syedrafayjavaid2025@gmail.com" className="text-netflix-red hover:text-netflix-red-light transition-colors">
                   syedrafayjavaid2025@gmail.com
                 </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
