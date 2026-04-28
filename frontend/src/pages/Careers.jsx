import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const jobs = [
  { role: 'Cyber Security Intern', type: 'Internship', location: 'Remote / On-site' },
  { role: 'Web Development Intern', type: 'Internship', location: 'Remote / On-site' },
  { role: 'Mobile App Development Intern', type: 'Internship', location: 'Remote / On-site' },
  { role: 'Cloud & DevOps Intern', type: 'Internship', location: 'Remote / On-site' },
  { role: 'AI & Automation Intern', type: 'Internship', location: 'Remote / On-site' },
  { role: 'UI/UX Design Intern', type: 'Internship', location: 'Remote / On-site' },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-darkBg text-white relative">
      <Navbar />
      <main className="pt-32 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Kickstart Your Tech Career</h1>
          <p className="text-gray-400">Join our dynamic team, work on real client projects, and grow your skills with industry experts.</p>
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
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCv8KlMzl-izHMGpXIq3s33fOJUJ3PmiesAgcJ_9Y5JXA6qg/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 md:mt-0 px-6 py-2 rounded-full border border-neonCyan text-neonCyan group-hover:bg-neonCyan group-hover:text-darkBg transition-all font-semibold">
                Apply Now
              </a>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Careers;
