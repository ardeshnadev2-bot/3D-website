import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import TiltCard from '../components/3D/TiltCard';

const projects = [
  { id: 1, title: 'NeuralNet Predictor', category: 'AI', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop', desc: 'Predictive modeling engine for financial markets.' },
  { id: 2, title: 'Nexus E-Commerce', category: 'Web', image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop', desc: 'High-performance Next.js storefront.' },
  { id: 3, title: 'CloudSync Pro', category: 'Cloud', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop', desc: 'Enterprise distributed cloud architecture.' },
  { id: 4, title: 'HealthTrack App', category: 'Mobile', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop', desc: 'React Native fitness application.' },
  { id: 5, title: 'VisionAI API', category: 'AI', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop', desc: 'Computer vision endpoint for image recognition.' },
  { id: 6, title: 'CryptoWallet UI', category: 'Mobile', image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=800&auto=format&fit=crop', desc: 'Secure Web3 wallet interface.' },
];

const categories = ['All', 'AI', 'Web', 'Mobile', 'Cloud'];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="w-full pt-20 px-6 md:px-12 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our <span className="text-gradient">Work</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of our most innovative projects across artificial intelligence, web, mobile, and cloud domains.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                filter === cat 
                  ? 'border-primary bg-primary text-white shadow-neon-primary' 
                  : 'border-white/20 glass text-gray-300 hover:border-primary/50 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <TiltCard className="p-0 overflow-hidden group h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent opacity-90"></div>
                    
                    <div className="absolute top-4 right-4 bg-darkBg/80 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/30">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                      <ExternalLink size={20} className="text-gray-500 group-hover:text-accentGlow transition-colors" />
                    </div>
                    <p className="text-gray-400 text-sm">{project.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
