import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const jobs = [
  { role: 'Senior AI Engineer', type: 'Full-time', location: 'Remote' },
  { role: 'React 3D Developer', type: 'Full-time', location: 'New York, NY' },
  { role: 'DevOps Specialist', type: 'Contract', location: 'Remote' },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-darkBg text-white relative">
      <Navbar />
      <main className="pt-32 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Join Our Team</h1>
          <p className="text-gray-400">Help us build the next generation of technology.</p>
        </div>
        
        <div className="space-y-6">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-card p-6 flex flex-col md:flex-row justify-between items-center group hover:bg-white/10 transition-colors"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">{job.role}</h3>
                <div className="flex gap-4 text-sm text-gray-400">
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <button className="mt-4 md:mt-0 px-6 py-2 rounded-full border border-neonCyan text-neonCyan group-hover:bg-neonCyan group-hover:text-darkBg transition-all font-semibold">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Careers;
