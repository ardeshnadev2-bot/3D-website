import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-darkBg text-white relative pb-20">
      <Navbar />
      <main className="pt-32 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-400">Become part of a IT AnantaCode that is always Growing And offering Opportunities.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col space-y-8 mt-4"
          >
            <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-white/5 text-neonBlue">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <p className="text-gray-400">nexusai@email.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-white/5 text-neonPurple">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Phone</h3>
                <p className="text-gray-400">+91 9925469851</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-white/5 text-neonCyan">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Location</h3>
                <p className="text-gray-400">Gandhinagar, India</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-8 md:p-10"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your message..."></textarea>
              </div>
              <button className="w-full py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
