'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Megaphone, TrendingUp, Globe, Star } from 'lucide-react';

export function CustomerJourney() {
  const journeySteps = [
    {
      time: '6:00 AM',
      title: 'Breaking News Alert',
      description: 'Major tech publication announces industry report. Your competitor is mentioned but you\'re not.',
      skill: 'Brand Monitor',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      time: '6:02 AM',
      title: 'Instant Response',
      description: 'Agent crafts expert commentary, identifies reporter contact, and sends personalized pitch within 2 minutes.',
      skill: 'Media Outreach',
      icon: Megaphone,
      color: 'from-blue-500 to-purple-500'
    },
    {
      time: '8:30 AM',
      title: 'Coverage Secured',
      description: 'Reporter responds positively. Agent schedules interview, prepares talking points, and briefs your spokesperson.',
      skill: 'Content Creation',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500'
    },
    {
      time: '2:00 PM',
      title: 'Story Published',
      description: 'Your expert commentary features prominently. Agent immediately amplifies across all channels.',
      skill: 'Media Outreach',
      icon: Megaphone,
      color: 'from-purple-500 to-pink-500'
    },
    {
      time: '4:00 PM',
      title: 'Impact Analysis',
      description: 'Agent tracks reach, engagement, and sentiment. Reports 2.3M impressions and 89% positive sentiment.',
      skill: 'Analytics & Reporting',
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Your AI Agent's 24-Hour Media Cycle
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            See how one agent with multiple skills creates media wins around the clock
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block" />

          {/* Journey Steps */}
          <div className="space-y-12 md:space-y-16">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-purple-500 rounded-full hidden md:block" />

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <motion.div 
                    className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg inline-block text-left max-w-md"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">{step.time}</p>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-3">{step.description}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                      <step.icon className="w-4 h-4" />
                      <span>{step.skill}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for timeline */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Result Card */}
        <motion.div 
          className="mt-16 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            The Result: One Seamless Media Victory
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            From crisis to opportunity in under 10 hours. Your AI agent turned a potential miss into major media coverage.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
