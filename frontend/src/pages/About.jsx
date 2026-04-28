import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-darkBg text-white relative">
      <Navbar />
      <main className="pt-24 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gradient mb-8">About Us</h1>
        <div className="glass-card p-8">
          <p className="text-gray-300 text-lg">
            We are a trusted IT agency delivering scalable software solutions for businesses worldwide. We also believe in nurturing new talent through our comprehensive fresher internship programs, bridging the gap between academia and industry.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
