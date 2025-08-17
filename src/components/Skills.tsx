'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Icon } from '@iconify/react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      icon: 'mdi:monitor',
      skills: [
        { name: 'JavaScript', level: 95, icon: 'logos:javascript' },
        { name: 'TypeScript', level: 95, icon: 'logos:typescript-icon' },
        { name: 'React.js', level: 95, icon: 'logos:react' },
        { name: 'Next.js', level: 90, icon: 'logos:nextjs-icon' },
        { name: 'Vue.js', level: 85, icon: 'logos:vue' },
        { name: 'Tailwind CSS', level: 92, icon: 'logos:tailwindcss-icon' },
        { name: 'Material UI', level: 88, icon: 'logos:material-ui' },
        { name: 'Bootstrap', level: 85, icon: 'logos:bootstrap' },
        { name: 'WebRTC', level: 80, icon: 'logos:webrtc' },
        { name: 'Jitsi Meet', level: 78, icon: 'simple-icons:jitsi' },
        { name: 'EmailJS', level: 75, icon: 'logos:mailgun' }, 
        { name: 'Cloudinary', level: 80, icon: 'logos:cloudinary' }
      ]
    },
    backend: {
      title: 'Backend',
      icon: 'mdi:server',
      skills: [
        { name: 'Node.js', level: 95, icon: 'logos:nodejs-icon' },
        { name: 'Express.js', level: 92, icon: 'simple-icons:express' },
        { name: 'Java', level: 70, icon: 'logos:java' },
        { name: 'Python', level: 60, icon: 'logos:python' },
        { name: 'TypeScript', level: 90, icon: 'logos:typescript-icon' },
        { name: 'MongoDB', level: 92, icon: 'logos:mongodb' },
        { name: 'SQL', level: 88, icon: 'vscode-icons:file-type-sql' },
        { name: 'Prisma', level: 85, icon: 'logos:prisma' },
        { name: 'Firebase', level: 70, icon: 'logos:firebase' },
        { name: 'GraphQL', level: 50, icon: 'logos:graphql' },
        { name: 'Strapi', level: 30, icon: 'logos:strapi' },
        { name: 'SendGrid', level: 70, icon: 'simple-icons:sendgrid' },
        { name: 'Authorize.Net', level: 75, icon: 'simple-icons:authorizenet' },
        { name: 'UPS API', level: 70, icon: 'simple-icons:ups' },
        { name: 'WebRTC', level: 50, icon: 'logos:webrtc' }
      ]
    },
    tools: {
      title: 'Tools & Others',
      icon: 'mdi:wrench',
      skills: [
        { name: 'Git & GitHub', level: 90, icon: 'logos:github-icon' },
        { name: 'Git Lab', level: 60, icon: 'logos:gitlab-icon' },
        { name: 'Bitbucket', level: 85, icon: 'logos:bitbucket' },
        { name: 'AWS', level: 70, icon: 'logos:aws' },
        { name: 'Figma', level: 30, icon: 'logos:figma' },
        { name: 'Jest', level: 80, icon: 'logos:jest' },
        { name: 'Webpack', level: 80, icon: 'logos:webpack' },
        { name: 'Vercel', level: 90, icon: 'logos:vercel-icon' },
        { name: 'PlanetScale', level: 80, icon: 'simple-icons:planetscale'},
        { name: 'Google Sceneform', level: 50, icon: 'mdi:augmented-reality' },
        { name: 'Jira', level: 88, icon: 'logos:jira' },
        { name: 'Trello', level: 85, icon: 'logos:trello' },
        { name: 'Android Studio', level: 80, icon: 'logos:android-icon' },
        { name: 'Chart.js', level: 85, icon: 'logos:chartjs' },
        { name: 'EmailJS', level: 75, icon: 'logos:mailgun' }
      ],
    },
  };
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.8 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1, ease: "easeOut" as const } 
    },
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
              transition: { duration: 1.5, ease: "easeOut" as const, delay: 0.2 },
    }),
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black via-netflix-black to-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-72 h-72 bg-netflix-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/5 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
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
            <h2 className="text-4xl font-bold text-gradient mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-netflix-red mx-auto rounded-full" />
            <p className="text-base text-gray-300 mt-4 max-w-xl mx-auto">
              A comprehensive overview of my technical skills and expertise across different domains
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="flex bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-md rounded-full p-2 border border-white/10 shadow-lg">
              {Object.entries(skillCategories).map(([key, category]) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 text-sm ${
                    activeCategory === key
                      ? 'bg-gradient-to-r from-red-500 to-red-700 text-white shadow-lg shadow-red-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-red-500/10'
                  }`}
                >
                  <Icon icon={category.icon} width="18" />
                  <span>{category.title}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }} // faster hover & entrance
                whileHover={{
                  scale: 1.08,
                  y: -8,
                  rotateY: 5,
                  boxShadow: '0 12px 30px rgba(229, 9, 20, 0.6)',
                  transition: { duration: 0.2 },
                }}
                className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-red-500/50 transition-all duration-150"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    {/* Fixed icon size wrapper */}
                    <div className="w-6 h-6 flex items-center justify-center">
                      <Icon icon={skill.icon} width="24" height="24" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  </div>
                  <span className="text-gray-400 font-medium text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1 overflow-hidden">
                  <motion.div
                    variants={skillBarVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={skill.level}
                    className="h-full rounded-full bg-gradient-to-r from-red-500 to-red-700"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
