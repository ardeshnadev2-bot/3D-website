import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="w-full pt-20 px-6 md:px-12 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In <span className="text-primary">Touch</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to transform your digital presence? Let's discuss how our intelligent solutions can drive your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass p-8 md:p-10"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-accentGlow/20 flex items-center justify-center text-accentGlow shadow-neon-accent">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. Our team will contact you shortly.</p>
                <button onClick={() => setIsSubmitted(false)} className="text-primary hover:text-white underline mt-4">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2" htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2" htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2" htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows="5"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg bg-primary hover:bg-secondary text-white font-bold tracking-wide transition-all duration-300 shadow-neon-primary flex justify-center items-center gap-2"
                >
                  {isSubmitting ? <span className="animate-pulse">Sending...</span> : <><Send size={18} /> Send Message</>}
                </button>
              </form>
            )}
          </motion.div>

          {/* Map and Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="glass p-8 flex-1 relative overflow-hidden flex items-center justify-center min-h-[300px]">
              {/* Pseudo Map Background */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
                backgroundSize: 'cover'
              }}></div>
              
              {/* Glowing Map Marker */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-ping absolute"></div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center relative z-10 shadow-neon-primary text-white">
                  <MapPin size={16} />
                </div>
                <div className="mt-4 glass px-4 py-2 text-center text-sm font-semibold text-white">
                  NexaTech HQ <br/>
                  Silicon Valley, CA
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass p-6 flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/5 text-primary"><Phone size={24} /></div>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone</h4>
                  <p className="text-gray-400 text-sm">7990652427</p>
                </div>
              </div>
              <div className="glass p-6 flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/5 text-primary"><Mail size={24} /></div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-gray-400 text-sm">nexatech@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
