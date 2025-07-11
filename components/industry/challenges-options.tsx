"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Clock, AlertCircle, DollarSign, Phone, Star, Users, ChevronRight, Activity, Zap } from 'lucide-react';

// Option 1: Real-Time Cost Counter
export function CostCounterSection() {
  const [lostRevenue, setLostRevenue] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLostRevenue(prev => prev + 23.50);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Your Dealership is Losing
          </motion.h2>
          <motion.div 
            className="text-6xl md:text-8xl font-mono text-red-500 font-bold"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            ${lostRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </motion.div>
          <p className="text-xl md:text-2xl text-gray-400 mt-4">Right now. While you read this.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div 
            className="bg-red-950/50 border border-red-500/30 rounded-2xl p-8"
            whileHover={{ scale: 1.05 }}
          >
            <TrendingDown className="h-12 w-12 text-red-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Missed Leads</h3>
            <p className="text-gray-300">Every hour of delay = 7% lower conversion</p>
            <div className="mt-4 text-3xl font-bold text-red-400">$847/hour</div>
          </motion.div>
          
          <motion.div 
            className="bg-orange-950/50 border border-orange-500/30 rounded-2xl p-8"
            whileHover={{ scale: 1.05 }}
          >
            <Clock className="h-12 w-12 text-orange-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Empty Service Bays</h3>
            <p className="text-gray-300">23% no-show rate costs you daily</p>
            <div className="mt-4 text-3xl font-bold text-orange-400">$400-600/bay</div>
          </motion.div>
          
          <motion.div 
            className="bg-yellow-950/50 border border-yellow-500/30 rounded-2xl p-8"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Lost Reputation</h3>
            <p className="text-gray-300">40% fewer walk-ins with bad reviews</p>
            <div className="mt-4 text-3xl font-bold text-yellow-400">-40% traffic</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Option 2: Before/After Split Screen
export function SplitScreenComparison() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Without AI - Chaos */}
        <div className="bg-gradient-to-br from-red-950 to-red-900 p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-white mb-8">Without NovaGent</h3>
            <div className="space-y-6">
              <motion.div 
                className="flex items-start gap-4"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-red-800/50 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-red-300 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Endless Phone Tag</h4>
                  <p className="text-red-200">18-hour average response time</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-red-800/50 p-3 rounded-full">
                  <Users className="h-6 w-6 text-red-300 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Staff Overwhelmed</h4>
                  <p className="text-red-200">67% time on routine tasks</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-red-800/50 p-3 rounded-full">
                  <AlertCircle className="h-6 w-6 text-red-300 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Revenue Bleeding</h4>
                  <p className="text-red-200">$1.2M annual loss from inefficiencies</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Chaos animation elements */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              className="absolute top-10 left-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <AlertCircle className="h-20 w-20 text-red-400" />
            </motion.div>
          </div>
        </div>
        
        {/* With AI - Organized */}
        <div className="bg-gradient-to-br from-green-950 to-green-900 p-12 relative">
          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-white mb-8">With NovaGent</h3>
            <div className="space-y-6">
              <motion.div 
                className="flex items-start gap-4"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-green-800/50 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-green-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Instant Response</h4>
                  <p className="text-green-200">Under 5 minutes, 24/7</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-green-800/50 p-3 rounded-full">
                  <Activity className="h-6 w-6 text-green-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Optimized Operations</h4>
                  <p className="text-green-200">Staff focus on high-value activities</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-green-800/50 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-green-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Revenue Growth</h4>
                  <p className="text-green-200">35% increase in conversions</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Center divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-white to-transparent opacity-20"></div>
    </section>
  );
}

// Option 3: Interactive Timeline
export function LostCustomerTimeline() {
  const [currentStep, setCurrentStep] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev < 3 ? prev + 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { time: "2:47 PM", event: "Customer submits lead", status: "opportunity", color: "green" },
    { time: "5:00 PM", event: "Your team leaves", status: "warning", color: "yellow" },
    { time: "6:23 PM", event: "Customer contacts competitor", status: "danger", color: "orange" },
    { time: "Next Day", event: "Sale lost forever", status: "lost", color: "red" }
  ];

  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-24">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          How You Lose a $45,000 Sale in 24 Hours
        </motion.h2>
        <p className="text-xl text-gray-400 text-center mb-16">Watch how opportunities slip away</p>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Progress bar */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-2 bg-gray-800 rounded-full">
              <motion.div 
                className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${(currentStep + 1) * 25}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            {/* Timeline steps */}
            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: currentStep >= index ? 1 : 0.3,
                    y: 0,
                    scale: currentStep === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    currentStep >= index 
                      ? `bg-${step.color}-500` 
                      : 'bg-gray-700'
                  }`}>
                    {currentStep > index ? (
                      <AlertCircle className="h-8 w-8 text-white" />
                    ) : (
                      <div className="w-4 h-4 bg-white rounded-full" />
                    )}
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-400">{step.time}</p>
                    <p className="text-white font-semibold mt-1">{step.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Current step detail */}
          <motion.div 
            className="mt-16 bg-slate-800/50 rounded-2xl p-8 text-center"
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              {currentStep === 0 && "Opportunity Arrives"}
              {currentStep === 1 && "Critical Window Closing"}
              {currentStep === 2 && "Competition Takes Over"}
              {currentStep === 3 && "Revenue Lost Forever"}
            </h3>
            <p className="text-gray-300">
              {currentStep === 0 && "A motivated buyer with financing ready submits a lead for a high-margin vehicle."}
              {currentStep === 1 && "Your sales team goes home, leaving the lead unattended during prime engagement hours."}
              {currentStep === 2 && "Frustrated by no response, the customer reaches out to your competitor who answers immediately."}
              {currentStep === 3 && "The competitor closes the sale. You'll never get this opportunity back."}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Option 4: Problem Cards Grid
export function ProblemCardsGrid() {
  const problems = [
    {
      icon: Phone,
      title: "18-Hour Response Time",
      description: "While winners respond in under 5 minutes",
      stat: "78%",
      statLabel: "of buyers choose first responder",
      severity: "high",
      color: "red"
    },
    {
      icon: Clock,
      title: "67% Time Wasted",
      description: "Service advisors stuck on routine tasks",
      stat: "$500",
      statLabel: "lost per empty bay daily",
      severity: "high",
      color: "orange"
    },
    {
      icon: Star,
      title: "Invisible Online",
      description: "88% check reviews before visiting",
      stat: "40%",
      statLabel: "traffic loss from bad reviews",
      severity: "medium",
      color: "yellow"
    },
    {
      icon: DollarSign,
      title: "Hidden Costs",
      description: "Manual processes bleeding profits",
      stat: "$1.2M",
      statLabel: "annual revenue loss",
      severity: "critical",
      color: "red"
    }
  ];

  return (
    <section className="bg-slate-950 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Your Dealership's Profit Killers
          </motion.h2>
          <p className="text-xl text-gray-400">Every problem = Lost revenue. Every day = Deeper hole.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-2xl border ${
                problem.severity === 'critical' 
                  ? 'border-red-500/50 bg-red-950/20' 
                  : problem.severity === 'high'
                  ? 'border-orange-500/50 bg-orange-950/20'
                  : 'border-yellow-500/50 bg-yellow-950/20'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="p-6">
                <div className={`inline-flex p-3 rounded-full mb-4 ${
                  problem.color === 'red' ? 'bg-red-500/20' :
                  problem.color === 'orange' ? 'bg-orange-500/20' :
                  'bg-yellow-500/20'
                }`}>
                  <problem.icon className={`h-8 w-8 ${
                    problem.color === 'red' ? 'text-red-400' :
                    problem.color === 'orange' ? 'text-orange-400' :
                    'text-yellow-400'
                  }`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{problem.description}</p>
                
                <div className="border-t border-gray-800 pt-4">
                  <div className={`text-3xl font-bold ${
                    problem.color === 'red' ? 'text-red-400' :
                    problem.color === 'orange' ? 'text-orange-400' :
                    'text-yellow-400'
                  }`}>{problem.stat}</div>
                  <p className="text-xs text-gray-500 mt-1">{problem.statLabel}</p>
                </div>
              </div>
              
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  background: [
                    `radial-gradient(circle at 20% 80%, ${problem.color} 0%, transparent 50%)`,
                    `radial-gradient(circle at 80% 20%, ${problem.color} 0%, transparent 50%)`,
                    `radial-gradient(circle at 20% 80%, ${problem.color} 0%, transparent 50%)`,
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
