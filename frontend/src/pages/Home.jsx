import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
            Building <span className="text-gradient">Real-World Software</span>
            <br /> Empowering Freshers
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            We are a leading IT company delivering enterprise-grade projects. Launch your career with our exclusive fresher internship programs.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link to="/services" className="px-8 py-3 rounded-full bg-neonPurple hover:bg-neonBlue text-white font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] inline-block text-center">
              Our Services
            </Link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCv8KlMzl-izHMGpXIq3s33fOJUJ3PmiesAgcJ_9Y5JXA6qg/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full border border-white/20 glass hover:bg-white/10 font-semibold transition-all duration-300">
              Apply for Internship
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
