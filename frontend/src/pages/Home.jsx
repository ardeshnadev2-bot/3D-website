import React from 'react';
import { motion } from 'framer-motion';
import ThreeBackground from '../components/ThreeBackground';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-darkBg text-white overflow-hidden relative">
      <ThreeBackground />
      <Navbar />
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Building the <span className="text-gradient">Future</span>
            <br /> with AI & Technology
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            We are a futuristic IT startup specializing in AI, Cloud, and next-gen Web Development. Transforming ideas into reality.
          </p>
          
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 rounded-full bg-neonPurple hover:bg-neonBlue text-white font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(157,0,255,0.4)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)]">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-full border border-white/20 glass hover:bg-white/10 font-semibold transition-all duration-300">
              Contact Us
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
