"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle, ArrowRight, Sparkles, Target, Calendar, Calculator, FileText } from 'lucide-react';

export function SkillsTimeline() {
  const [activeStep, setActiveStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const timelineEvents = [
    {
      time: '8:00 AM',
      skill: 'Lead Generation',
      icon: Target,
      event: 'Identify RFP Opportunities',
      description: 'AI scans 500+ sources, identifies 12 matching RFPs, analyzes win probability, prioritizes top 3',
      metrics: {
        sources: '500+',
        matches: '12',
        qualified: '3'
      }
    },
    {
      time: '10:30 AM',
      skill: 'Appointment Setting',
      icon: Calendar,
      event: 'Schedule Partner Meetings',
      description: 'Qualified prospect books directly into senior partner calendar, prep materials auto-generated',
      metrics: {
        bookings: '4',
        confirmations: '100%',
        prep: 'Automated'
      }
    },
    {
      time: '3:15 PM',
      skill: 'Financial Operations',
      icon: Calculator,
      event: 'Month-End Billing Cycle',
      description: 'AI compiles billable hours, generates 18 invoices totaling $425K, sends for approval',
      metrics: {
        invoices: '18',
        value: '$425K',
        accuracy: '100%'
      }
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep(prev => {
        if (prev >= timelineEvents.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, timelineEvents.length]);

  const handleStart = () => {
    setActiveStep(-1);
    setIsPlaying(true);
    setTimeout(() => setActiveStep(0), 500);
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            A Day in Your AI-Powered Practice
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Watch how your AI agent works tirelessly to grow your business
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Control Button */}
          <motion.div 
            className="flex justify-center mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={handleStart}
              disabled={isPlaying}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
            >
              <Clock className="w-4 h-4 md:w-5 md:h-5" />
              {isPlaying ? 'Timeline Running...' : 'Start Workday Simulation'}
            </button>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-700 transform md:-translate-x-1/2" />

            {/* Timeline Events */}
            <div className="space-y-8 md:space-y-12">
              {timelineEvents.map((event, index) => {
                const isActive = index <= activeStep;
                const isCurrentStep = index === activeStep;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative ${index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%] md:text-right'}`}
                  >
                    {/* Timeline Node */}
                    <motion.div
                      className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center z-10 ${
                        isActive 
                          ? 'bg-gradient-to-br from-purple-500 to-pink-500' 
                          : 'bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700'
                      }`}
                      animate={isCurrentStep ? {
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(147, 51, 234, 0)',
                          '0 0 0 20px rgba(147, 51, 234, 0.2)',
                          '0 0 0 0 rgba(147, 51, 234, 0)'
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: isCurrentStep ? Infinity : 0 }}
                    >
                      {isActive ? (
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      ) : (
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-slate-400 dark:bg-slate-600 rounded-full" />
                      )}
                    </motion.div>

                    {/* Content Card */}
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ 
                          opacity: isActive ? 1 : 0.5, 
                          y: 0, 
                          scale: 1 
                        }}
                        transition={{ duration: 0.5 }}
                        className={`ml-14 md:ml-0 md:mr-0 ${index % 2 === 0 ? 'md:mr-14' : 'md:ml-14'}`}
                      >
                        <div className={`bg-white dark:bg-slate-800 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border ${
                          isActive 
                            ? 'border-purple-300 dark:border-purple-700 shadow-purple-500/10' 
                            : 'border-slate-200 dark:border-slate-700'
                        }`}>
                          {/* Time Badge */}
                          <div className={`inline-flex items-center gap-1.5 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium mb-3 ${
                            isActive 
                              ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' 
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                          }`}>
                            <Clock className="w-3 h-3 md:w-4 md:h-4" />
                            {event.time}
                          </div>

                          {/* Event Header */}
                          <div className={`flex items-start gap-3 mb-3 ${index % 2 === 1 ? 'md:flex-row-reverse md:text-left' : ''}`}>
                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 ${
                              isActive 
                                ? 'bg-gradient-to-br from-purple-500 to-pink-500' 
                                : 'bg-slate-100 dark:bg-slate-700'
                            }`}>
                              <event.icon className={`w-5 h-5 md:w-6 md:h-6 ${isActive ? 'text-white' : 'text-slate-600 dark:text-slate-400'}`} />
                            </div>
                            <div className="flex-1">
                              <h3 className={`text-base md:text-lg font-bold mb-1 ${
                                isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'
                              }`}>
                                {event.event}
                              </h3>
                              <p className={`text-xs md:text-sm ${
                                isActive ? 'text-purple-600 dark:text-purple-400' : 'text-slate-500 dark:text-slate-500'
                              }`}>
                                {event.skill}
                              </p>
                            </div>
                          </div>

                          {/* Description */}
                          <p className={`text-sm md:text-base mb-4 ${
                            isActive ? 'text-slate-700 dark:text-slate-300' : 'text-slate-500 dark:text-slate-500'
                          }`}>
                            {event.description}
                          </p>

                          {/* Metrics */}
                          <motion.div 
                            className={`grid grid-cols-3 gap-2 md:gap-3 ${index % 2 === 1 ? 'md:text-left' : ''}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isActive ? 1 : 0.5 }}
                            transition={{ delay: 0.3 }}
                          >
                            {Object.entries(event.metrics).map(([key, value]) => (
                              <div key={key} className={`text-center p-2 rounded-lg ${
                                isActive 
                                  ? 'bg-purple-50 dark:bg-purple-900/20' 
                                  : 'bg-slate-50 dark:bg-slate-800'
                              }`}>
                                <p className="text-xs text-slate-500 dark:text-slate-400 capitalize mb-0.5">{key}</p>
                                <p className={`text-sm md:text-base font-bold ${
                                  isActive ? 'text-purple-600 dark:text-purple-400' : 'text-slate-600 dark:text-slate-400'
                                }`}>
                                  {value}
                                </p>
                              </div>
                            ))}
                          </motion.div>

                          {/* Action Arrow */}
                          {isCurrentStep && (
                            <motion.div
                              className="flex items-center justify-center mt-4"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 }}
                            >
                              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-purple-500 animate-pulse" />
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Completion Message */}
            <AnimatePresence>
              {activeStep >= timelineEvents.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center mt-8 md:mt-12"
                >
                  <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg md:rounded-xl text-sm md:text-base font-medium">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                    Your AI agent handled 50+ tasks while you focused on strategic work
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
