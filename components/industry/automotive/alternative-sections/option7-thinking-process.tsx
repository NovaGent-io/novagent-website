"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Zap, TrendingUp, AlertCircle, ChevronRight, Brain, Target, Shield } from 'lucide-react';

export function AIThinkingProcess() {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      id: 0,
      title: "The Midnight Shopper",
      scenario: "11:47 PM - A potential buyer is browsing your inventory online",
      thought: {
        observation: "Visitor has viewed 5 SUVs in 8 minutes, all under $35,000",
        analysis: "Pattern indicates family-oriented buyer with budget constraints",
        decision: "Engage immediately with family-friendly SUV options and financing",
        action: "Sending personalized message with 3 perfect matches + payment calculator"
      },
      result: "Lead captured and qualified within 90 seconds"
    },
    {
      id: 1,
      title: "The Service Opportunity",
      scenario: "A customer just completed an oil change",
      thought: {
        observation: "Customer's vehicle is 4 years old with 48,000 miles",
        analysis: "Approaching major service milestones and warranty expiration",
        decision: "Proactively address upcoming maintenance needs",
        action: "Scheduling 50,000-mile service and offering extended warranty options"
      },
      result: "Additional $1,200 in service revenue secured"
    },
    {
      id: 2,
      title: "The Comparison Shopper",
      scenario: "Lead has been inactive for 3 days after initial inquiry",
      thought: {
        observation: "Customer viewed competitor websites after our initial contact",
        analysis: "Likely comparing prices and features across dealerships",
        decision: "Differentiate with value-adds rather than competing on price",
        action: "Sending exclusive test drive offer with complimentary tank of gas"
      },
      result: "Customer books appointment, mentions our persistence made the difference"
    },
    {
      id: 3,
      title: "The Upset Customer",
      scenario: "Negative review posted about service wait time",
      thought: {
        observation: "Customer waited 2 hours for routine service last Tuesday",
        analysis: "Service bay was overbooked due to staff shortage",
        decision: "Address immediately and prevent future occurrences",
        action: "Personal apology sent, free next service offered, scheduling system adjusted"
      },
      result: "Review updated to 4 stars, customer becomes advocate"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 overflow-hidden">
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
            Inside the mind of your AI: How it thinks, decides, and acts
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Case Selector */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {cases.map((case_, index) => (
              <motion.button
                key={case_.id}
                onClick={() => setActiveCase(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeCase === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {case_.title}
              </motion.button>
            ))}
          </div>

          {/* Thought Process Visualization */}
          <motion.div
            key={activeCase}
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Scenario Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">{cases[activeCase].title}</h3>
                  <p className="text-blue-100">{cases[activeCase].scenario}</p>
                </div>
              </div>
            </div>

            {/* AI Thinking Process */}
            <div className="p-8">
              <div className="space-y-6">
                {/* Observation */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Observation</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      {cases[activeCase].thought.observation}
                    </p>
                  </div>
                </motion.div>

                {/* Connecting Line */}
                <div className="flex items-center justify-center">
                  <motion.div 
                    className="w-0.5 h-8 bg-gradient-to-b from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.4 }}
                  />
                </div>

                {/* Analysis */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Analysis</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      {cases[activeCase].thought.analysis}
                    </p>
                  </div>
                </motion.div>

                {/* Connecting Line */}
                <div className="flex items-center justify-center">
                  <motion.div 
                    className="w-0.5 h-8 bg-gradient-to-b from-purple-200 to-green-200 dark:from-purple-800 dark:to-green-800"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.7 }}
                  />
                </div>

                {/* Decision */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Decision</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      {cases[activeCase].thought.decision}
                    </p>
                  </div>
                </motion.div>

                {/* Connecting Line */}
                <div className="flex items-center justify-center">
                  <motion.div 
                    className="w-0.5 h-8 bg-gradient-to-b from-green-200 to-amber-200 dark:from-green-800 dark:to-amber-800"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 1 }}
                  />
                </div>

                {/* Action */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Action</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      {cases[activeCase].thought.action}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Result */}
              <motion.div
                className="mt-8 p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl border border-green-200 dark:border-green-800"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 }}
              >
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Result</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      {cases[activeCase].result}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Key Insight */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Your AI processes thousands of these micro-decisions every day, learning and improving with each interaction
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
