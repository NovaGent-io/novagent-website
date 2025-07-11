'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function ChallengesSection() {
  const [counter, setCounter] = useState(0);
  const targetValue = 247.50;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => {
        if (prev >= targetValue) {
          clearInterval(interval);
          return targetValue;
        }
        return prev + 2.5;
      });
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="container max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your Brand is Missing
        </motion.h2>
        
        <motion.div 
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-red-400 mb-6"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          ${counter.toFixed(2)}k
        </motion.div>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          in media value every month
        </motion.p>
        
        <motion.p 
          className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          While you sleep, opportunities slip by. Journalists move to competitors. 
          Negative mentions go unaddressed. Your share of voice diminishes.
        </motion.p>
      </div>
    </section>
  );
}
