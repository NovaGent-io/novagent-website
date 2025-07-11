'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function CTASection() {
  const benefits = [
    '24/7 media monitoring across all channels',
    'Instant response to breaking news and opportunities',
    'Automated content creation in your brand voice',
    'Real-time competitive intelligence',
    'Crisis management and reputation protection'
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-slate-900 to-pink-900">
      <div className="container max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Amplify Your Brand?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join leading brands using NovaGent to dominate their media landscape
        </motion.p>

        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Your AI-Powered Communications Team Includes:
          </h3>
          <div className="space-y-3 text-left max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-4"
        >
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg rounded-full group"
            >
              Book Your Communications Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <p className="text-sm text-gray-400">
            See ROI in 30 days or your money back
          </p>
        </motion.div>
      </div>
    </section>
  );
}
