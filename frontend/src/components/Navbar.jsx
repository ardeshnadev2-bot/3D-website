import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b-0 mx-4 mt-4 px-6 py-4 flex justify-between items-center"
    >
      <Link to="/" className="text-2xl font-bold tracking-wider text-white">
        Nexa<span className="text-primary">Tech</span>
      </Link>
      
      <div className="hidden md:flex gap-6 items-center text-sm font-medium">
        <Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link>
        <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About</Link>
        <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Services</Link>
        <Link to="/portfolio" className="text-gray-300 hover:text-primary transition-colors">Portfolio</Link>
        <Link to="/careers" className="text-gray-300 hover:text-primary transition-colors">Careers</Link>
        <Link to="/blog" className="text-gray-300 hover:text-primary transition-colors">Blog</Link>
        <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link>
        <button className="ml-4 px-6 py-2 rounded-full border border-secondary text-white hover:bg-secondary transition-all duration-300 shadow-neon-secondary">
          Get Started
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
