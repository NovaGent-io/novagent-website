"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle, Clock, TrendingUp, Star, MessageCircle, Calendar, FileText, CreditCard } from 'lucide-react';

export function CustomerJourneyFlow() {
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    {
      id: 0,
      title: 'Discovery',
      time: '11:47 PM',
      icon: MessageCircle,
      description: 'Sarah browses inventory on AutoTrader',
      aiAction: 'AI captures lead within 3 seconds',
      metrics: { responseTime: '3s', channel: 'AutoTrader' }
    },
    {
      id: 1,
      title: 'Engagement',
      time: '11:48 PM',
      icon: MessageCircle,
      description: 'Receives personalized message about the CR-V',
      aiAction: 'AI sends vehicle details, photos, and video walkthrough',
      metrics: { engagementRate: '87%', openRate: '94%' }
    },
    {
      id: 2,
      title: 'Qualification',
      time: '7:30 AM',
      icon: FileText,
      description: 'Sarah replies asking about financing',
      aiAction: 'AI provides payment calculator and pre-qualification link',
      metrics: { qualificationRate: '72%', creditScore: '750+' }
    },
    {
      id: 3,
      title: 'Scheduling',
      time: '9:15 AM',
      icon: Calendar,
      description: 'Books test drive for same day',
      aiAction: 'AI coordinates with sales team and sends confirmations',
      metrics: { showRate: '91%', sameDay: 'Yes' }
    },
    {
      id: 4,
      title: 'Purchase',
      time: '2:30 PM',
      icon: CreditCard,
      description: 'Completes purchase after test drive',
      aiAction: 'AI handles paperwork prep and insurance coordination',
      metrics: { closeRate: '68%', satisfaction: '5/5' }
    },
    {
      id: 5,
      title: 'Retention',
      time: '3 Days Later',
      icon: Star,
      description: 'Leaves 5-star review',
      aiAction: 'AI sends thank you and schedules first service',
      metrics: { reviewRate: '82%', retention: '94%' }
    }
  ];

  const overallMetrics = {
    totalTime: '14.7 hours',
    touchpoints: '12',
    humanInteraction: '45 min',
    revenue: '$32,450'
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            See Your AI Agent in Action
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Follow Sarah's journey from first click to loyal customer
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Journey Path */}
          <div className="relative mb-12">
            {/* Progress Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                initial={{ width: '0%' }}
                animate={{ width: `${(activeStep / (journeySteps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            {/* Step Circles */}
            <div className="relative flex justify-between">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="relative cursor-pointer"
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg ${
                      index <= activeStep 
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                        : 'bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <step.icon className={`w-8 h-8 ${
                      index <= activeStep ? 'text-white' : 'text-slate-400'
                    }`} />
                  </motion.div>
                  <p className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium whitespace-nowrap ${
                    index <= activeStep ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'
                  }`}>
                    {step.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Step Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Customer Side */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      S
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">Customer Experience</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{journeySteps[activeStep].time}</p>
                    </div>
                  </div>
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                    {journeySteps[activeStep].description}
                  </p>
                  <div className="space-y-3">
                    {Object.entries(journeySteps[activeStep].metrics).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="font-semibold text-slate-900 dark:text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Side */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">AI Agent Action</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Automated Response</p>
                    </div>
                  </div>
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                    {journeySteps[activeStep].aiAction}
                  </p>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Skills Activated
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Lead Generation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Customer Support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Appointment Setting</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Journey Summary */}
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Complete Journey Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 opacity-80" />
                <p className="text-3xl font-bold">{overallMetrics.totalTime}</p>
                <p className="text-sm opacity-80">Total Time</p>
              </div>
              <div className="text-center">
                <MessageCircle className="w-8 h-8 mx-auto mb-2 opacity-80" />
                <p className="text-3xl font-bold">{overallMetrics.touchpoints}</p>
                <p className="text-sm opacity-80">AI Touchpoints</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 opacity-80" />
                <p className="text-3xl font-bold">{overallMetrics.humanInteraction}</p>
                <p className="text-sm opacity-80">Human Time</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 opacity-80" />
                <p className="text-3xl font-bold">{overallMetrics.revenue}</p>
                <p className="text-sm opacity-80">Revenue Generated</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
