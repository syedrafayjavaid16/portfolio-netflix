'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-netflix-black to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-netflix-red/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-netflix-red-dark/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 pt-8 px-6">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-gray-300 hover:text-netflix-red transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Terms of Service
            </h1>
            <div className="w-24 h-1 bg-netflix-red mx-auto rounded-full mb-4" />
            <p className="text-gray-300 text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using this portfolio website, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on this portfolio website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">3. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                                 If you have any questions about these Terms of Service, please contact me at{' '}
                 <a href="mailto:syedrafayjavaid2025@gmail.com" className="text-netflix-red hover:text-netflix-red-light transition-colors">
                   syedrafayjavaid2025@gmail.com
                 </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
