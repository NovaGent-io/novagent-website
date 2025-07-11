'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Star } from 'lucide-react';

export function ResultsSection() {
  const results = [
    {
      icon: TrendingUp,
      percentage: '3x',
      title: 'More Media Coverage',
      description: '24/7 monitoring and instant response means you never miss an opportunity to share your story.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Users,
      percentage: '89%',
      title: 'Positive Sentiment',
      description: 'Proactive reputation management and crisis response keeps your brand narrative on track.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Star,
      percentage: '42%',
      title: 'Share of Voice',
      description: 'Dominate industry conversations with consistent, strategic media engagement at scale.',
      color: 'from-pink-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Real Results. Real Brands.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            NovaGent clients dominate their media landscape
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-2xl p-8 h-full border border-purple-100 dark:border-purple-900/20">
                <div className={`w-16 h-16 bg-gradient-to-br ${result.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <result.icon className="w-8 h-8 text-white" />
                </div>
                
                <motion.div 
                  className="text-5xl font-bold mb-4 bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2, type: "spring" }}
                >
                  {result.percentage}
                </motion.div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {result.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300">
                  {result.description}
                </p>
                
                <div className="absolute bottom-8 right-8">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                    Verified Result
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div 
          className="mt-16 bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-6 italic">
              "NovaGent transformed our PR operations. What used to take our team days now happens in minutes. 
              We're not just keeping up with the news cycle?we're ahead of it."
            </p>
            <footer className="text-slate-600 dark:text-slate-400">
              <p className="font-semibold">Sarah Chen</p>
              <p className="text-sm">VP of Communications, TechCorp</p>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
