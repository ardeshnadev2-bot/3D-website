import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter as Twitter, FaInstagram as Instagram, FaLinkedin as Linkedin, FaGithub as Github } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative z-10 glass mx-4 mb-4 mt-20 px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-3xl font-bold tracking-wider text-white mb-4 block">
            Nexa<span className="text-primary">Tech</span>
          </Link>
          <p className="text-gray-400 mb-6 max-w-sm">
            Building Intelligent Digital Futures. AI-powered solutions for the next generation of web and mobile experiences.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-300 hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-300 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-300 hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-300 hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="text-gray-400 hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link to="/careers" className="text-gray-400 hover:text-primary transition-colors">Careers</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Newsletter</h4>
          <p className="text-gray-400 mb-4 text-sm">Subscribe to get the latest AI and tech updates.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-primary text-white"
            />
            <button className="bg-primary hover:bg-secondary transition-colors text-white px-4 py-2 rounded-r-lg font-semibold shadow-neon-primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} NexaTech Solutions. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
