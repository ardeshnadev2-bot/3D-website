import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Code, Cpu, Database, Cloud } from 'lucide-react';

const services = [
  { title: 'AI/ML Development', desc: 'Cutting-edge artificial intelligence solutions.', icon: <Cpu className="w-8 h-8 text-neonCyan" /> },
  { title: 'Web & App Development', desc: 'Next-gen reactive web and mobile apps.', icon: <Code className="w-8 h-8 text-neonPurple" /> },
  { title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and hosting.', icon: <Cloud className="w-8 h-8 text-neonBlue" /> },
  { title: 'Data Analytics', desc: 'Big data processing and insights generation.', icon: <Database className="w-8 h-8 text-white" /> },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-darkBg text-white relative overflow-hidden">
      <Navbar />
      <main className="pt-32 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Our Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Empowering businesses with state-of-the-art technology solutions tailored to your specific needs.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 flex flex-col items-center text-center cursor-pointer group"
            >
              <div className="mb-4 p-4 rounded-full bg-white/5 group-hover:scale-110 transition-transform">
                {svc.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{svc.title}</h3>
              <p className="text-gray-400">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Services;
