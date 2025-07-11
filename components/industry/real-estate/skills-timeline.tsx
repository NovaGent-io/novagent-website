"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, MessageSquare, Calendar, Clock, Sparkles } from 'lucide-react';

export function SkillsTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineEvents = [
    {
      time: '10:47 PM',
      title: 'Late-Night Lead Capture',
      description: 'Zillow inquiry arrives for waterfront property. Buyer is out-of-state and needs weekend showing.',
      skills: ['Lead Generation'],
      icon: Home,
      color: 'bg-purple-500'
    },
    {
      time: '10:48 PM',
      title: 'Instant Qualification',
      description: 'Agent gathers buyer info, confirms pre-approval, sends property details and virtual tour link within 60 seconds.',
      skills: ['Property Management', 'Legal Documents'],
      icon: MessageSquare,
      color: 'bg-blue-500'
    },
    {
      time: '7:15 AM',
      title: 'Morning Coordination',
      description: 'Agent schedules weekend showing, coordinates with listing agent, arranges local accommodations for buyer.',
      skills: ['Appointment Setting', 'Smart Dialer'],
      icon: Calendar,
      color: 'bg-green-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % timelineEvents.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Your AI Agent's 24-Hour Property Cycle
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            See how one agent with multiple skills creates seamless transactions
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 opacity-20 md:transform md:-translate-x-1/2" />
            
            {/* Timeline Events */}
            <div className="space-y-8 md:space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-start gap-4 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Timeline Node */}
                  <div className="relative flex-shrink-0 z-10">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl ${event.color} flex items-center justify-center shadow-lg`}
                      animate={activeIndex === index ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      } : {}}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    >
                      <event.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    {/* Pulse Effect */}
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          className={`absolute inset-0 rounded-2xl ${event.color} opacity-40`}
                          initial={{ scale: 1 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} md:w-1/2`}
                    animate={activeIndex === index ? { scale: 1.02 } : { scale: 1 }}
                  >
                    <div className={`bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border ${
                      activeIndex === index 
                        ? 'border-purple-500 dark:border-purple-400' 
                        : 'border-slate-200 dark:border-slate-700'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-slate-500" />
                        <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                          {event.time}
                        </span>
                      </div>
                      
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {event.title}
                      </h3>
                      
                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-4">
                        {event.description}
                      </p>
                      
                      <div className="flex items-center gap-2 flex-wrap">
                        {event.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
                          >
                            <Sparkles className="w-3 h-3" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Hidden spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-12 flex justify-center gap-2">
            {timelineEvents.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'w-8 bg-purple-600 dark:bg-purple-400' 
                    : 'bg-slate-300 dark:bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Results Section */}
        <motion.div 
          className="mt-16 bg-gradient-to-br from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20 rounded-2xl p-8 md:p-12 border border-blue-600/20 dark:border-purple-600/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-8">
            The Result: One Seamless Experience
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <ResultCard value="9 hrs" label="Lead to contract" />
            <ResultCard value="12" label="Tasks automated" />
            <ResultCard value="0" label="Missed opportunities" />
            <ResultCard value="$47K" label="Commission secured" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ResultCard({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
        {value}
      </p>
      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{label}</p>
    </motion.div>
  );
}