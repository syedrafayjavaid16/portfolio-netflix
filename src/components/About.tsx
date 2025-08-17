'use client';

import { motion } from 'framer-motion';
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import { FiDownload } from 'react-icons/fi';

const About = () => {
  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '30+', color: 'netflix-red' },
    { icon: Users, label: 'Happy Clients', value: '15+', color: 'netflix-red-dark' },
    { icon: Lightbulb, label: 'Years Experience', value: '3+', color: 'netflix-red-light' },
    { icon: Rocket, label: 'Technologies', value: '20+', color: 'netflix-red' },
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
    hidden: { y: 50, opacity: 0 },
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
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-netflix-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-netflix-red-dark/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-netflix-red mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image/Visual */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                {/* Profile Image Placeholder */}
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, 5, -5, 0],
                    boxShadow: '0 0 40px rgba(51, 51, 51, 0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-64 h-64 mx-auto bg-gradient-to-br from-netflix-gray/80 to-black/80 rounded-full border-4 border-netflix-gray flex items-center justify-center backdrop-blur-sm"
                >
                  <Code2 size={80} className="text-white opacity-50" />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
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

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Passionate Full Stack Developer
                </h3>
                <div className="space-y-3 text-gray-300 text-base leading-relaxed">
                  <p>
                  I’m a results-driven Full Stack Developer with 3+ years of experience building and deploying scalable web applications
                  using the MERN stack and modern technologies. I’ve led projects for startups and enterprises, managing and mentoring junior 
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
                href="#"
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 30px rgba(229, 9, 20, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-x-1 px-6 py-3 bg-netflix-red border border-netflix-red text-white font-semibold rounded-full hover:bg-netflix-red-dark hover:border-netflix-red/50 transition-all duration-300 shadow-lg backdrop-blur-sm"
              >
                <FiDownload className="text-lg" />
                Download Resume
              </motion.a>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(229, 9, 20, 0.4)',
                }}
                className="text-center p-4 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-netflix-gray hover:border-netflix-red/50 backdrop-blur-sm"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 mx-auto mb-3 rounded-full bg-netflix-gray/50 flex items-center justify-center"
                >
                  <stat.icon size={24} className="text-netflix-red" />
                </motion.div>
                <motion.h4
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-2xl font-bold text-white mb-1"
                >
                  {stat.value}
                </motion.h4>
                <p className="text-gray-400 text-xs font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
