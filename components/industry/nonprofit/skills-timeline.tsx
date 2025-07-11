"use client";

import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    time: '7:00 AM',
    title: 'Campaign Launch Alert',
    description: 'Year-end giving campaign goes live with personalized emails to 10,000 donors segmented by giving history',
    skill: 'Campaign Management',
    color: 'from-purple-500 to-pink-500'
  },
  {
    time: '9:15 AM',
    title: 'Major Donor Identified',
    description: 'AI detects $10,000 donation from first-time major donor, triggers immediate executive director notification',
    skill: 'Donor Outreach',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    time: '10:30 AM',
    title: 'Volunteer Mobilization',
    description: 'Food drive needs extra hands - agent texts 50 standby volunteers, fills 12 open shifts in 30 minutes',
    skill: 'Volunteer Coordination',
    color: 'from-green-500 to-emerald-500'
  },
  {
    time: '2:00 PM',
    title: 'Grant Opportunity Match',
    description: 'New foundation RFP detected matching your mission - agent drafts initial proposal outline with your impact data',
    skill: 'Grant Writing',
    color: 'from-amber-500 to-orange-500'
  },
  {
    time: '4:30 PM',
    title: 'Real-Time Campaign Pivot',
    description: 'Agent detects email fatigue, automatically switches high-value donors to text outreach, improving response 40%',
    skill: 'Data Analytics',
    color: 'from-purple-500 to-pink-500'
  },
  {
    time: '6:00 PM',
    title: 'Impact Report Delivered',
    description: 'Automated board update sent with live campaign dashboard, donor stories, and tomorrow\'s strategy recommendations',
    skill: 'Impact Reporting',
    color: 'from-blue-500 to-purple-500'
  }
];

export function SkillsTimeline() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Your AI Agent's Mission-Critical Day
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            See how one agent with multiple skills amplifies your impact around the clock
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 transform -translate-x-1/2"></div>
          
          {/* Mobile Timeline Line */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500"></div>

          <div className="space-y-8 lg:space-y-12">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
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
            The Result: Maximum Mission Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <ResultCard value="$147K" label="Raised in one day" />
            <ResultCard value="312" label="Donors engaged" />
            <ResultCard value="67" label="Volunteers coordinated" />
            <ResultCard value="100%" label="Tasks automated" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Desktop Layout */}
      <div className={`hidden lg:flex items-center ${isEven ? '' : 'flex-row-reverse'}`}>
        {/* Content */}
        <div className={`w-1/2 ${isEven ? 'pr-12 text-right' : 'pl-12'}`}>
          <motion.div 
            className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg dark:shadow-xl border border-slate-200 dark:border-slate-800"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
              {item.time}
            </p>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
              {item.description}
            </p>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              {item.skill}
            </span>
          </motion.div>
        </div>

        {/* Timeline Dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <motion.div 
            className={`w-6 h-6 bg-gradient-to-br ${item.color} rounded-full shadow-lg`}
            whileHover={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-full h-full rounded-full animate-ping bg-white/30"></div>
          </motion.div>
        </div>

        {/* Spacer */}
        <div className="w-1/2"></div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex items-start gap-4">
        {/* Timeline Dot */}
        <div className="relative flex-shrink-0">
          <motion.div 
            className={`w-4 h-4 bg-gradient-to-br ${item.color} rounded-full shadow-lg mt-1.5`}
            whileHover={{ scale: 1.5 }}
          >
            <div className="w-full h-full rounded-full animate-ping bg-white/30"></div>
          </motion.div>
        </div>

        {/* Content */}
        <motion.div 
          className="flex-1 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-lg dark:shadow-xl border border-slate-200 dark:border-slate-800"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
            {item.time}
          </p>
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            {item.description}
          </p>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            {item.skill}
          </span>
        </motion.div>
      </div>
    </motion.div>
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
