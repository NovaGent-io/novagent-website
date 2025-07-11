"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingUp, Clock, Users, Shield, Zap, Award } from 'lucide-react';

export function ResultsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const results = [
    {
      icon: Zap,
      percentage: '73%',
      title: 'More Billable Hours',
      description: 'Automation frees your experts from admin work, adding 15+ billable hours per person weekly',
      badge: 'Revenue Growth'
    },
    {
      icon: Clock,
      percentage: '89%',
      title: 'On-Time Project Delivery',
      description: 'AI project management ensures nothing falls through the cracks, protecting your reputation',
      badge: 'Client Satisfaction'
    },
    {
      icon: Users,
      percentage: '4.2x',
      title: 'Client Pipeline Growth',
      description: 'Consistent outreach and nurturing fills your pipeline with qualified opportunities',
      badge: 'Business Development'
    },
    {
      icon: TrendingUp,
      percentage: '52%',
      title: 'Revenue Increase',
      description: 'More billable hours plus faster collections equals dramatic revenue growth',
      badge: 'Financial Impact'
    },
    {
      icon: Shield,
      percentage: '45',
      title: 'Days Faster Payment',
      description: 'Automated, accurate invoicing gets you paid in days, not months',
      badge: 'Cash Flow'
    },
    {
      icon: Award,
      percentage: '96%',
      title: 'Client Retention',
      description: 'Consistent communication and flawless execution creates clients for life',
      badge: 'Long-term Success'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % results.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, results.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % results.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            One Seamless Experience. Multiple Business Wins.
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-slate-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Real results from firms transformed by AI automation
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* 3D Carousel Container */}
          <div className="relative h-[400px] md:h-[450px] lg:h-[500px] mb-8 md:mb-12">
            <div className="absolute inset-0 flex items-center justify-center perspective-1000">
              <AnimatePresence mode="wait">
                {results.map((result, index) => {
                  const isActive = index === currentIndex;
                  const isPrev = index === (currentIndex - 1 + results.length) % results.length;
                  const isNext = index === (currentIndex + 1) % results.length;
                  
                  if (!isActive && !isPrev && !isNext) return null;

                  return (
                    <motion.div
                      key={index}
                      className="absolute w-full max-w-sm md:max-w-md lg:max-w-lg"
                      initial={{ 
                        opacity: 0,
                        rotateY: isNext ? 45 : -45,
                        z: -200,
                        scale: 0.8
                      }}
                      animate={{ 
                        opacity: isActive ? 1 : 0.6,
                        rotateY: isActive ? 0 : (isNext ? 45 : -45),
                        z: isActive ? 0 : -200,
                        x: isActive ? 0 : (isNext ? 200 : -200),
                        scale: isActive ? 1 : 0.8
                      }}
                      exit={{ 
                        opacity: 0,
                        rotateY: isPrev ? -45 : 45,
                        z: -200,
                        scale: 0.8
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div className={`bg-white dark:bg-slate-800 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-2xl border ${
                        isActive ? 'border-purple-500' : 'border-slate-200 dark:border-slate-700'
                      } cursor-pointer transform transition-all duration-300 hover:scale-105`}
                      onClick={() => !isActive && handleDotClick(index)}
                      >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
                          <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                          {result.badge}
                        </div>

                        {/* Icon and Percentage */}
                        <div className="flex items-start gap-4 md:gap-6 mb-4 md:mb-6">
                          <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                            <result.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                          </div>
                          <div>
                            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-1">
                              {result.percentage}
                            </p>
                            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                              {result.title}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                          {result.description}
                        </p>

                        {/* Visual Indicator */}
                        <div className="mt-4 md:mt-6">
                          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                              initial={{ width: 0 }}
                              animate={{ width: isActive ? `${parseInt(result.percentage)}%` : 0 }}
                              transition={{ duration: 1, ease: "easeOut", delay: isActive ? 0.3 : 0 }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all z-10"
              aria-label="Previous result"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all z-10"
              aria-label="Next result"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2">
            {results.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-6 md:w-8 bg-gradient-to-r from-purple-500 to-pink-500' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to result ${index + 1}`}
              />
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">15+</p>
              <p className="text-xs md:text-sm text-slate-400">Hours Saved Weekly</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">$2.4M</p>
              <p className="text-xs md:text-sm text-slate-400">Pipeline Growth</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">87%</p>
              <p className="text-xs md:text-sm text-slate-400">Utilization Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">3.8x</p>
              <p className="text-xs md:text-sm text-slate-400">ROI on AI Investment</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
