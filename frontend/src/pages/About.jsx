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
            We are an innovative IT company dedicated to pushing the boundaries of what's possible with Artificial Intelligence, Web3, and Immersive 3D Experiences.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
