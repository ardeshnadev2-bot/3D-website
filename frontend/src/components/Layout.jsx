import React from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatbotUI from './ChatbotUI';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="relative z-10 flex flex-col min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-grow pt-20" // Add padding top to account for fixed navbar
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ChatbotUI />
    </div>
  );
};

export default Layout;
