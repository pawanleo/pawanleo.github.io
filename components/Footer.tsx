import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code, Instagram } from 'lucide-react';

const Footer = () => {
  const links = [
    { href: "https://github.com/pawanleo", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/pawan-singh-rathore/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://leetcode.com/u/pawansinghrathore0708/", icon: Code, label: "LeetCode" },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600"
          variants={itemVariants}
        >
          Connect With Me
        </motion.h2>
        <motion.div 
          className="flex justify-center space-x-8"
          variants={containerVariants}
        >
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.2, 
                rotate: 360,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <link.icon size={40} className="text-white hover:text-yellow-300" />
              <span className="sr-only">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
        <motion.p 
          className="mt-8 text-sm opacity-75 text-center"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} Pawan Singh Rathore. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;