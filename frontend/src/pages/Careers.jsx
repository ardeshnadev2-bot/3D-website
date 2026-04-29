import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const jobs = [
  { id: 1, title: 'Senior AI Engineer', location: 'Remote', type: 'Full-time', dept: 'AI & Machine Learning' },
  { id: 2, title: 'Cloud DevOps Engineer', location: 'London, UK', type: 'Contract', dept: 'Cloud DevOps' },
  { id: 3, title: 'Cybersecurity Analyst', location: 'Remote', type: 'Full-time', dept: 'Cybersecurity' },
  { id: 4, title: 'Web3 / Full-Stack Developer', location: 'New York, USA', type: 'Full-time', dept: 'Web Development' },
  { id: 5, title: 'React Native Developer', location: 'Remote', type: 'Full-time', dept: 'Immersive Mobile' },
  { id: 6, title: 'Data Scientist', location: 'San Francisco, USA', type: 'Full-time', dept: 'Data Analytics' },
  { id: 7, title: 'UX/UI Designer', location: 'Remote', type: 'Full-time', dept: 'UI/UX Design' },
  { id: 8, title: 'IT Support Specialist', location: 'Remote', type: 'Full-time', dept: 'Maintenance & Support' },
  { id: 9, title: 'Creative Web Designer', location: 'New York, USA', type: 'Part-time', dept: 'Web Designing' },
];

const Careers = () => {
  return (
    <div className="w-full pt-20 px-6 md:px-12 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join The <span className="text-secondary">Revolution</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Help us build the next generation of intelligent, immersive digital experiences. We are always looking for visionary talent.
          </p>
        </motion.div>

        <div className="space-y-6">
          {jobs.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass p-8 flex flex-col md:flex-row justify-between items-start md:items-center group hover:border-secondary transition-all duration-300 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-neon-secondary"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-2 block">{job.dept}</span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{job.title}</h3>
                <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                  <div className="flex items-center"><MapPin size={16} className="mr-1" /> {job.location}</div>
                  <div className="flex items-center"><Clock size={16} className="mr-1" /> {job.type}</div>
                </div>
              </div>
              <a 
                href="https://docs.google.com/forms/d/1EWClNC1RWfCPEJ1nDQrEnNrMGSZfDkVq-4JyQ1oKJms/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 md:mt-0 px-6 py-2 rounded-full border border-secondary text-white hover:bg-secondary transition-colors whitespace-nowrap inline-block text-center"
              >
                Apply Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
