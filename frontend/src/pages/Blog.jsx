import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const posts = [
  { title: 'The Future of AI in 2026', date: 'April 20, 2026', category: 'AI' },
  { title: 'Building Immersive 3D Web Apps', date: 'April 15, 2026', category: 'Web3' },
  { title: 'Why Next.js & Vite Rule the Web', date: 'April 10, 2026', category: 'Development' },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-darkBg text-white relative">
      <Navbar />
      <main className="pt-32 px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-16">Latest Insights</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 cursor-pointer hover:-translate-y-2 transition-transform"
            >
              <div className="text-sm text-neonCyan mb-2">{post.category}</div>
              <h3 className="text-xl font-bold mb-4">{post.title}</h3>
              <div className="text-sm text-gray-400">{post.date}</div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
