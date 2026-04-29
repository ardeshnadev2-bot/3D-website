import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

import HeroModel from '../components/3D/HeroModel';
import TiltCard from '../components/3D/TiltCard';


const Counter = ({ value, label }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = parseInt(value.substring(0, value.length - 1));
    const duration = 2000;
    const incrementTime = (duration / end);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}{value.replace(/[0-9]/g, '')}
      </div>
      <div className="text-gray-400 text-sm uppercase tracking-widest">{label}</div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 pt-20">
        <div className="w-full md:w-1/2 z-10 text-center md:text-left mt-10 md:mt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
          >
            Building <br/>
            <span className="text-gradient">Intelligent</span> <br/>
            Digital Futures
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
          >
            AI-powered solutions for the next generation. We engineer robust, scalable, and immersive technology.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link to="/contact" className="px-8 py-3 rounded-full bg-primary hover:bg-secondary text-white font-semibold transition-all duration-300 shadow-neon-primary text-center">
              Get Started
            </Link>
            <Link to="/services" className="px-8 py-3 rounded-full border border-white/20 glass hover:bg-white/10 text-white font-semibold transition-all duration-300 text-center">
              Explore Services
            </Link>
          </motion.div>
        </div>
        
        <div className="w-full md:w-1/2 z-0 mt-10 md:mt-0">
          <HeroModel />
        </div>
      </section>

      {/* About Preview / Counters */}
      <section className="py-20 px-6 md:px-12 relative z-10 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          <Counter value="150+" label="Projects Delivered" />
          <Counter value="50+" label="Enterprise Clients" />
          <Counter value="10+" label="Years Experience" />
          <Counter value="24/7" label="Support" />
        </div>
      </section>

    </div>
  );
};

export default Home;
