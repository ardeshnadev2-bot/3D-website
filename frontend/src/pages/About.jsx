import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from '../components/3D/TiltCard';

const timeline = [
  { year: '2020', title: 'Inception', desc: 'NexaTech was founded with a vision to revolutionize AI integration in enterprise systems.' },
  { year: '2022', title: 'Global Expansion', desc: 'Opened offices in 3 continents, expanding our global footprint and talent pool.' },
  { year: '2024', title: 'AI Breakthrough', desc: 'Launched our proprietary AI engine, processing millions of data points securely.' },
  { year: '2026', title: 'The Future', desc: 'Continuing to build immersive, scalable 3D and Web3 experiences for tomorrow.' },
];

const team = [
  { name: 'Elena Rostova', role: 'Chief Executive Officer', img: 'https://i.pravatar.cc/300?img=47' },
  { name: 'Marcus Chen', role: 'Head of AI Research', img: 'https://i.pravatar.cc/300?img=11' },
  { name: 'Sarah Jenkins', role: 'Lead 3D Engineer', img: 'https://i.pravatar.cc/300?img=5' },
  { name: 'David Okafor', role: 'VP of Cloud Ops', img: 'https://i.pravatar.cc/300?img=8' },
];

const About = () => {
  return (
    <div className="w-full pt-20 px-6 md:px-12 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About <span className="text-gradient">NexaTech</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We are a collective of visionaries, engineers, and designers dedicated to pushing the boundaries of what's possible on the web and beyond.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Our <span className="text-secondary">Journey</span></h2>
          <div className="relative border-l border-white/20 ml-4 md:ml-1/2 md:translate-x-[-50%]">
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`mb-12 pl-8 md:pl-0 relative w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:ml-[-50%]' : 'md:pl-12 md:ml-[50%]'}`}
              >
                <div className={`absolute top-0 w-4 h-4 rounded-full bg-primary shadow-neon-primary left-[-8px] ${idx % 2 === 0 ? 'md:left-auto md:right-[-8px]' : 'md:left-[-8px]'}`}></div>
                <h3 className="text-2xl font-bold text-primary mb-2">{item.year}</h3>
                <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Meet The <span className="text-accentGlow">Visionaries</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <TiltCard className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-primary mb-6 shadow-neon-primary">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-secondary text-sm font-semibold">{member.role}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
