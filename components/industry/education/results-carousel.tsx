"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Users, TrendingUp, School, Lightbulb } from 'lucide-react';

const resultsData = [
  {
    icon: Zap,
    percentage: '60',
    title: 'Faster Admissions',
    description: 'From weeks to days. Every application processed efficiently while maintaining personal touch.',
    badge: 'Speed Win'
  },
  {
    icon: Users,
    percentage: '40',
    title: 'Better Engagement',
    description: 'Students stay connected and motivated through personalized support at every step.',
    badge: 'Connection Power'
  },
  {
    icon: Clock,
    percentage: '25+',
    title: 'Hours Saved Weekly',
    description: 'Staff focus on meaningful student interactions instead of administrative tasks.',
    badge: 'Time Freedom'
  },
  {
    icon: TrendingUp,
    percentage: '30',
    title: 'Higher Enrollment',
    description: 'Personalized nurturing converts more prospects into enrolled students.',
    badge: 'Growth Engine'
  },
  {
    icon: School,
    percentage: '50',
    title: 'Fewer Scheduling Issues',
    description: 'Smart coordination eliminates conflicts and ensures smooth campus operations.',
    badge: 'Efficiency Pro'
  },
  {
    icon: Lightbulb,
    percentage: '45',
    title: 'Early Interventions',
    description: 'Identify and support at-risk students before challenges become critical.',
    badge: 'Student Success'
  }
];

export function ResultsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 6);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after user interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Transforming Education, One Institution at a Time
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Every metric reflects our commitment to student success
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center" 
             style={{ perspective: '1200px' }}>
          <motion.div 
            className="relative w-full h-full flex items-center justify-center"
            style={{ 
              transformStyle: 'preserve-3d',
              transform: `rotateY(${-currentIndex * 60}deg)`
            }}
            animate={{ rotateY: -currentIndex * 60 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {resultsData.map((result, index) => (
              <ResultCard
                key={index}
                result={result}
                index={index}
                isActive={index === currentIndex}
              />
            ))}
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {resultsData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-150' 
                  : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultCard({ result, index, isActive }: {
  result: typeof resultsData[0];
  index: number;
  isActive: boolean;
}) {
  const rotationY = index * 60;
  const IconComponent = result.icon;
  const translateZ = isActive ? 450 : 400;

  return (
    <motion.div
      className={`absolute w-[320px] md:w-[380px] h-[350px] md:h-[400px] bg-white dark:bg-slate-900/90 backdrop-blur-lg rounded-2xl p-6 md:p-8 cursor-pointer
        border transition-all duration-500 ${
          isActive 
            ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
            : 'border-slate-200 dark:border-slate-800 shadow-lg'
        }`}
      style={{
        left: '50%',
        top: '50%',
        transform: `translateX(-50%) translateY(-50%) rotateY(${rotationY}deg) translateZ(${translateZ}px)`,
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Gradient overlay for active card */}
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl" />
      )}

      {/* Icon */}
      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-purple-500/30' 
          : 'bg-slate-100 dark:bg-slate-800'
      }`}>
        <IconComponent className={`w-8 h-8 md:w-10 md:h-10 ${
          isActive ? 'text-white' : 'text-slate-600 dark:text-slate-400'
        }`} />
      </div>

      {/* Percentage */}
      <motion.div 
        className="mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          {result.percentage}%
        </span>
      </motion.div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">
        {result.title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        {result.description}
      </p>

      {/* Floating Badge */}
      {isActive && (
        <motion.div
          className="absolute bottom-4 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {result.badge}
        </motion.div>
      )}
    </motion.div>
  );
}
