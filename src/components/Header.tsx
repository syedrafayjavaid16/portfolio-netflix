"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Home,
  User,
  Code,
  Briefcase,
  MessageSquare,
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: MessageSquare },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md py-3" : "backdrop-blur-sm py-3"
      }`}
      style={{ borderBottom: "1px solid rgba(229,9,20,0.15)" }}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between relative z-10">
        {/* Profile Picture on Left */}
        <div className="flex items-center shrink-0">
          <Image
            src="/profile.jpg" // Replace with your profile image path
            alt="Profile"
            height={10}
            width={10}
            className="w-10 h-10 rounded-full border-2 border-netflix-red shadow-lg"
            draggable={false}
          />
        </div>

        {/* Centered Nav Links */}
        <div className="absolute left-1/2 -translate-x-1/2 flex">
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setActiveLink(item.name)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative font-semibold flex items-center space-x-2 group cursor-pointer transition-all duration-300 ${
                  activeLink === item.name
                    ? "text-netflix-red drop-shadow-[0_0_12px_rgba(229,9,20,0.9)]"
                    : "text-white hover:text-netflix-red"
                }`}
              >
                <item.icon
                  size={18}
                  className={`transition-colors duration-300 ${
                    activeLink === item.name ? "text-netflix-red" : "text-white"
                  }`}
                />
                <span>{item.name}</span>
                {/* Hover underline */}
                <span className="absolute left-0 bottom-[-5px] w-0 h-[2.5px] bg-netflix-red transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Social Icons Right */}
        <div className="hidden md:flex items-center space-x-5">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{
                scale: 1.25,
                rotate: 360,
                boxShadow: "0px 0px 15px rgba(229, 9, 20, 0.7)",
              }}
              className="text-white hover:text-netflix-red transition-colors duration-300 p-2 rounded-full hover:bg-netflix-red/10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <social.icon size={22} />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-red-500/20 transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </motion.button>
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="py-5 space-y-5 bg-black/90 backdrop-blur-md border-t border-netflix-red/30">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveLink(item.name);
                setIsOpen(false);
              }}
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: isOpen ? 0 : -100,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileTap={{ scale: 0.95 }}
              className={`block font-semibold py-3 px-6 rounded-lg flex items-center space-x-3 transition-all duration-300 ${
                activeLink === item.name
                  ? "text-netflix-red drop-shadow-[0_0_12px_rgba(229,9,20,0.9)]"
                  : "text-white hover:text-netflix-red"
              }`}
            >
              <item.icon
                size={20}
                className={`transition-colors duration-300 ${
                  activeLink === item.name ? "text-netflix-red" : "text-white"
                }`}
              />
              <span>{item.name}</span>
            </motion.a>
          ))}
          <div className="flex space-x-6 px-6 pt-6 border-t border-netflix-red/30 justify-center">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ scale: 0 }}
                animate={{ scale: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-netflix-red transition-colors duration-300 p-3 rounded-full hover:bg-netflix-red/10"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
