"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Sparkles, Zap, MessageSquare, Calendar, Users, Star, TrendingUp, FileText, Phone } from 'lucide-react';

export function AIBrainNetwork() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [pulseOrigin, setPulseOrigin] = useState({ x: 50, y: 50 });

  const skills = [
    { id: 'lead', name: 'Lead Generation', icon: Users, position: { x: 20, y: 20 } },
    { id: 'appointment', name: 'Appointment Setting', icon: Calendar, position: { x: 80, y: 20 } },
    { id: 'support', name: 'Customer Support', icon: MessageSquare, position: { x: 20, y: 80 } },
    { id: 'reputation', name: 'SEO & Reputation', icon: Star, position: { x: 80, y: 80 } },
    { id: 'finance', name: 'Financial Operations', icon: TrendingUp, position: { x: 15, y: 50 } },
    { id: 'documents', name: 'Legal Documents', icon: FileText, position: { x: 85, y: 50 } },
    { id: 'dialer', name: 'Smart Dialer', icon: Phone, position: { x: 50, y: 15 } },
    { id: 'analytics', name: 'Data Analytics', icon: Brain, position: { x: 50, y: 85 } }
  ];

  const scenarios = [
    {
      trigger: "Late night lead arrives",
      sequence: ['lead', 'support', 'appointment'],
      story: "At 11:47 PM, a customer inquires about a 2024 CR-V. The AI instantly engages, answers questions, and schedules a test drive for the next day."
    },
    {
      trigger: "Service customer completes visit",
      sequence: ['support', 'reputation', 'appointment'],
      story: "After a positive service experience, the AI requests a review, gets a 5-star response, and schedules their next maintenance."
    },
    {
      trigger: "High-value lead detected",
      sequence: ['lead', 'analytics', 'finance', 'documents'],
      story: "AI identifies a cash buyer, analyzes their preferences, prepares financing alternatives, and readies all paperwork for a quick close."
    },
    {
      trigger: "Missed call from prospect",
      sequence: ['dialer', 'lead', 'support', 'appointment'],
      story: "AI returns the call within minutes, qualifies the lead, answers initial questions, and books a showroom visit."
    }
  ];

  const [currentScenario, setCurrentScenario] = useState(0);
  const [sequenceStep, setSequenceStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const scenario = scenarios[currentScenario];
    const interval = setInterval(() => {
      if (sequenceStep < scenario.sequence.length) {
        const skillId = scenario.sequence[sequenceStep];
        setActiveSkill(skillId);
        const skill = skills.find(s => s.id === skillId);
        if (skill) {
          setPulseOrigin(skill.position);
        }
        setSequenceStep(prev => prev + 1);
      } else {
        // Move to next scenario
        setSequenceStep(0);
        setActiveSkill(null);
        setTimeout(() => {
          setCurrentScenario(prev => (prev + 1) % scenarios.length);
        }, 1000);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentScenario, sequenceStep, isPlaying]);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            See Your AI Agent in Action
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Watch how multiple AI skills work together autonomously
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Brain Visualization */}
          <motion.div 
            className="relative h-[500px] mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Neural Network Background */}
            <svg className="absolute inset-0 w-full h-full">
              {/* Connection Lines */}
              {skills.map((skill, i) => 
                skills.slice(i + 1).map((otherSkill, j) => (
                  <motion.line
                    key={`${skill.id}-${otherSkill.id}`}
                    x1={`${skill.position.x}%`}
                    y1={`${skill.position.y}%`}
                    x2={`${otherSkill.position.x}%`}
                    y2={`${otherSkill.position.y}%`}
                    stroke="url(#neuralGradient)"
                    strokeWidth="1"
                    opacity={0.1}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: i * 0.1 }}
                  />
                ))
              )}
              <defs>
                <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Central Brain */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center relative">
                <Brain className="w-16 h-16 text-white" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 opacity-40 blur-xl animate-pulse" />
              </div>
            </motion.div>

            {/* Skill Nodes */}
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ left: `${skill.position.x}%`, top: `${skill.position.y}%` }}
                whileHover={{ scale: 1.2 }}
                onHoverStart={() => setActiveSkill(skill.id)}
                onHoverEnd={() => setActiveSkill(null)}
              >
                <motion.div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    activeSkill === skill.id 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-purple-500/50' 
                      : 'bg-slate-800 border border-slate-700'
                  }`}
                  animate={activeSkill === skill.id ? {
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      '0 0 20px rgba(147, 51, 234, 0.5)',
                      '0 0 40px rgba(147, 51, 234, 0.8)',
                      '0 0 20px rgba(147, 51, 234, 0.5)'
                    ]
                  } : {}}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <skill.icon className={`w-8 h-8 ${
                    activeSkill === skill.id ? 'text-white' : 'text-slate-400'
                  }`} />
                </motion.div>
                <p className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap ${
                  activeSkill === skill.id ? 'text-purple-300 font-semibold' : 'text-slate-500'
                }`}>
                  {skill.name}
                </p>
              </motion.div>
            ))}

            {/* Active Pulse Effect */}
            <AnimatePresence>
              {activeSkill && (
                <motion.div
                  className="absolute pointer-events-none"
                  style={{ left: `${pulseOrigin.x}%`, top: `${pulseOrigin.y}%` }}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 4, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <div className="w-16 h-16 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Scenario Display */}
          <motion.div 
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  {scenarios[currentScenario].trigger}
                </h3>
                <p className="text-slate-300">
                  {scenarios[currentScenario].story}
                </p>
              </div>
            </div>

            {/* Skill Sequence */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-slate-500">Active Skills:</span>
              {scenarios[currentScenario].sequence.map((skillId, index) => {
                const skill = skills.find(s => s.id === skillId);
                const isActive = index < sequenceStep;
                return (
                  <motion.div
                    key={`${currentScenario}-${index}`}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${
                      isActive 
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                        : 'bg-slate-700/50 text-slate-500 border border-slate-600'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {skill && <skill.icon className="w-4 h-4" />}
                    <span>{skill?.name}</span>
                    {index < scenarios[currentScenario].sequence.length - 1 && (
                      <Sparkles className="w-3 h-3 ml-1" />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Control */}
            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white text-sm font-medium transition-colors"
              >
                {isPlaying ? 'Pause' : 'Resume'} Simulation
              </button>
              <p className="text-xs text-slate-500">
                Scenario {currentScenario + 1} of {scenarios.length}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
