'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

     const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
     
     try {
       const templateParams = {
         from_name: formData.name,
         from_email: formData.email,
         subject: formData.subject,
         message: formData.message,
         to_email: 'syedrafayjavaid2025@gmail.com',
       };

       const result = await emailjs.send(
         'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
         'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
         templateParams,
         'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
       );

       if (result.status === 200) {
         setFormData({ name: '', email: '', subject: '', message: '' });
         alert('Message sent successfully! I will get back to you soon.');
       } else {
         throw new Error('Failed to send message');
       }
     } catch (error) {
       console.error('Error sending message:', error);
       alert('Failed to send message. Please try again or contact me directly at syedrafayjavaid2025@gmail.com');
     } finally {
       setIsSubmitting(false);
     }
   };

     const contactInfo = [
     {
       icon: Mail,
       label: 'Email',
       value: 'syedrafayjavaid2025@gmail.com',
       href: 'mailto:syedrafayjavaid2025@gmail.com',
       color: 'netflix-red',
     },
     {
       icon: Phone,
       label: 'Phone',
       value: '+92 332 1656505',
       href: 'tel:+923321656505',
       color: 'netflix-red-dark',
     },
     {
       icon: MapPin,
       label: 'Location',
       value: 'Islamabad, Pakistan',
       href: '#',
       color: 'netflix-red-light',
     },
   ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/syedrafayjavaid16', label: 'GitHub', color: 'netflix-red' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/syed-rafay-javaid-36468222b/', label: 'LinkedIn', color: 'netflix-red-dark' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'netflix-red-light' },
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
         <section id="contact" className="py-20 bg-gradient-to-b from-black via-netflix-black to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-netflix-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-netflix-red-dark/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Enhanced Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              variants={itemVariants}
              className="relative inline-block"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-4">
                Get In Touch
              </h2>
              {/* Animated underline */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-transparent via-netflix-red to-transparent mx-auto rounded-full"
              />
            </motion.div>
            
            
            
            <motion.p
              variants={itemVariants}
              className="text-base text-gray-300 mt-4 max-w-xl mx-auto"
            >
              Ready to start your next project? Let&apos;s work together to create something amazing.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Talk</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  I&apos;m always interested in new opportunities and exciting projects. 
                  Whether you have a question, want to collaborate, or just want to say hi, 
                  feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 0 20px rgba(229, 9, 20, 0.4)',
                    }}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-white/10 backdrop-blur-sm transition-all duration-300"
                  >
                    <div className="p-2 rounded-full bg-netflix-gray/80">
                      <info.icon 
                        size={20} 
                        className="text-netflix-red" 
                      />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-medium">{info.label}</p>
                      <p className="text-white font-semibold text-sm">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-800">
                <h4 className="text-base font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: '0 0 20px rgba(229, 9, 20, 0.5)',
                      }}
                                             className="p-3 rounded-full bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-white/10 hover:bg-netflix-red transition-all duration-300 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                                             <social.icon 
                         size={20} 
                         className="text-netflix-red group-hover:text-white transition-colors duration-300" 
                       />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-6 rounded-2xl backdrop-blur-sm border border-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-netflix-red focus:ring-1 focus:ring-netflix-red transition-colors"
                        placeholder="Your Name"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-netflix-red focus:ring-1 focus:ring-netflix-red transition-colors"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                      placeholder="Project Discussion"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 30px rgba(229, 9, 20, 0.5)',
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-4 bg-netflix-red hover:bg-netflix-red-dark text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                                             {isSubmitting ? (
                         <motion.div
                           animate={{ rotate: 360 }}
                           transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                           className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                         />
                       ) : (
                         <>
                           <Send size={20} className="text-white" />
                           <span>Send Message</span>
                         </>
                       )}
                    </motion.button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
