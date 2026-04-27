import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Nexus Brain AI', category: 'AI', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop' },
  { title: 'Cyber Finance Web3', category: 'Web', image: 'https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=600&auto=format&fit=crop' },
  { title: 'Holo Mobile App', category: 'Mobile', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop' },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-darkBg text-white relative">
      <Navbar />
      <main className="pt-32 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-16">Portfolio</h1>
        
        <div className="flex justify-center gap-4 mb-12">
          {['All', 'AI', 'Web', 'Mobile'].map((cat) => (
            <button key={cat} className="px-4 py-1 rounded-full border border-white/20 hover:bg-neonPurple hover:border-transparent transition-all">
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card overflow-hidden cursor-pointer relative group"
            >
              <img src={proj.image} alt={proj.title} className="w-full h-64 object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-darkBg to-transparent">
                <span className="text-neonCyan text-sm font-semibold">{proj.category}</span>
                <h3 className="text-2xl font-bold">{proj.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
