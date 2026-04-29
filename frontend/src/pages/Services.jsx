import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Cloud, Shield, Code, Smartphone, Database, X, Layout, Settings, Monitor } from 'lucide-react';
import TiltCard from '../components/3D/TiltCard';

const servicesData = [
  { id: 1, icon: <Cpu size={48} />, title: 'AI & Machine Learning', color: 'text-primary', shadow: 'shadow-neon-primary', desc: 'Custom AI models and machine learning algorithms that automate processes, predict trends, and deliver intelligent experiences to your users.' },
  { id: 2, icon: <Cloud size={48} />, title: 'Cloud DevOps', color: 'text-secondary', shadow: 'shadow-neon-secondary', desc: 'Seamless cloud migration and management. We optimize your infrastructure for speed, reliability, and cost-efficiency on AWS, Azure, or GCP.' },
  { id: 3, icon: <Shield size={48} />, title: 'Cybersecurity', color: 'text-accentGlow', shadow: 'shadow-neon-accent', desc: 'Proactive threat hunting, vulnerability assessments, and robust security architectures to keep your enterprise data safe from evolving threats.' },
  { id: 4, icon: <Code size={48} />, title: 'Web3 Development', color: 'text-primary', shadow: 'shadow-neon-primary', desc: 'Decentralized applications, smart contracts, and blockchain integrations that redefine transparency and trust in digital transactions.' },
  { id: 5, icon: <Smartphone size={48} />, title: 'Immersive Mobile', color: 'text-secondary', shadow: 'shadow-neon-secondary', desc: 'High-performance mobile applications with fluid 60fps animations, intuitive UX, and robust offline capabilities.' },
  { id: 6, icon: <Database size={48} />, title: 'Big Data Architecture', color: 'text-accentGlow', shadow: 'shadow-neon-accent', desc: 'Design and implementation of complex data pipelines and data lakes that turn terabytes of raw information into business intelligence.' },
  { id: 7, icon: <Layout size={48} />, title: 'UI/UX Design', color: 'text-primary', shadow: 'shadow-neon-primary', desc: 'Crafting intuitive, engaging, and beautiful user interfaces that provide exceptional experiences and drive user retention.' },
  { id: 8, icon: <Settings size={48} />, title: 'Maintenance & Support', color: 'text-secondary', shadow: 'shadow-neon-secondary', desc: 'Reliable, 24/7 technical support and continuous maintenance to ensure your applications run smoothly and securely at all times.' },
  { id: 9, icon: <Monitor size={48} />, title: 'Web Designing', color: 'text-accentGlow', shadow: 'shadow-neon-accent', desc: 'Creating stunning, responsive, and high-performance websites tailored to your brand identity and business goals.' },
];

const Services = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="w-full pt-20 px-6 md:px-12 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our <span className="text-gradient">Expertise</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore our comprehensive suite of advanced technology services. Click on any service to dive deeper.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              layoutId={`card-container-${service.id}`}
              onClick={() => setSelectedId(service.id)}
              className="cursor-pointer h-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TiltCard className="h-full flex flex-col items-center justify-center text-center p-10">
                <motion.div layoutId={`icon-${service.id}`} className={`${service.color} mb-6`}>
                  {service.icon}
                </motion.div>
                <motion.h3 layoutId={`title-${service.id}`} className="text-2xl font-bold text-white">
                  {service.title}
                </motion.h3>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-darkBg/90 backdrop-blur-sm cursor-pointer"
              />
              
              <motion.div 
                layoutId={`card-container-${selectedId}`}
                className={`glass w-full max-w-3xl p-8 md:p-12 relative z-10 ${servicesData.find(s => s.id === selectedId)?.shadow}`}
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
                
                <div className="flex flex-col items-center text-center">
                  <motion.div layoutId={`icon-${selectedId}`} className={`${servicesData.find(s => s.id === selectedId)?.color} mb-8 scale-150`}>
                    {servicesData.find(s => s.id === selectedId)?.icon}
                  </motion.div>
                  <motion.h3 layoutId={`title-${selectedId}`} className="text-4xl font-bold text-white mb-6">
                    {servicesData.find(s => s.id === selectedId)?.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-300 text-lg leading-relaxed"
                  >
                    {servicesData.find(s => s.id === selectedId)?.desc}
                  </motion.p>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-10 px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-all duration-300 border border-white/20"
                  >
                    Discuss Your Project
                  </motion.button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Services;
