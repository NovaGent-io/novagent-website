"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Sparkles, Zap, Hammer, Shield, Activity, FileCheck, Calculator, AlertTriangle, HardHat } from 'lucide-react';

export function DashboardPreview() {
  const [activeSkills, setActiveSkills] = useState<string[]>([]);
  const [pulseOrigin, setPulseOrigin] = useState({ x: 50, y: 50 });
  const [currentScenario, setCurrentScenario] = useState(0);
  const [sequenceStep, setSequenceStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showConnections, setShowConnections] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const skills = [
    { id: 'project', name: 'Project Management', icon: Activity, position: { x: 20, y: 20 } },
    { id: 'compliance', name: 'Compliance Management', icon: Shield, position: { x: 80, y: 20 } },
    { id: 'financial', name: 'Financial Operations', icon: Calculator, position: { x: 20, y: 80 } },
    { id: 'legal', name: 'Legal Documents', icon: FileCheck, position: { x: 80, y: 80 } },
    { id: 'safety', name: 'Safety Monitoring', icon: HardHat, position: { x: 15, y: 50 } },
    { id: 'bid', name: 'Bid Management', icon: FileCheck, position: { x: 85, y: 50 } },
    { id: 'resource', name: 'Resource Planning', icon: Hammer, position: { x: 50, y: 15 } },
    { id: 'risk', name: 'Risk Assessment', icon: AlertTriangle, position: { x: 50, y: 85 } }
  ];

  const scenarios = [
    {
      trigger: "Complex project milestone approaching",
      sequence: ['project', 'resource', 'compliance', 'financial'],
      story: "With Phase 3 deadline in 72 hours, AI coordinates 6 subcontractors, verifies safety compliance, tracks material deliveries, and updates budget projections in real-time."
    },
    {
      trigger: "New OSHA safety regulation released",
      sequence: ['compliance', 'safety', 'legal', 'project'],
      story: "AI instantly analyzes new fall protection standards, updates 23 site protocols, generates compliance documents, and adjusts project timelines to include mandatory training."
    },
    {
      trigger: "Major RFP opportunity identified",
      sequence: ['bid', 'financial', 'resource', 'legal'],
      story: "$45M infrastructure project posted. AI analyzes requirements, estimates costs, checks resource availability, and drafts initial proposal within 2 hours."
    },
    {
      trigger: "Weather delay risk detected",
      sequence: ['risk', 'project', 'financial', 'compliance'],
      story: "Storm system threatens concrete pour schedule. AI recalculates critical path, notifies stakeholders, adjusts budget for overtime, and files weather delay notice."
    }
  ];

  useEffect(() => {
    if (!isPlaying || isTransitioning) return;

    const scenario = scenarios[currentScenario];
    
    // Process sequence steps
    if (sequenceStep < scenario.sequence.length) {
      const timer = setTimeout(() => {
        const skillId = scenario.sequence[sequenceStep];
        setActiveSkills(prev => [...prev, skillId]);
        const skill = skills.find(s => s.id === skillId);
        if (skill) {
          setPulseOrigin(skill.position);
        }
        setSequenceStep(prev => prev + 1);
      }, 2000);
      
      return () => clearTimeout(timer);
    } 
    // Show connections after all skills are activated
    else if (sequenceStep === scenario.sequence.length && !showConnections) {
      const timer = setTimeout(() => {
        setShowConnections(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
    // Wait with connections visible, then transition to next scenario
    else if (showConnections && !isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        // Reset everything
        setTimeout(() => {
          setActiveSkills([]);
          setShowConnections(false);
          setSequenceStep(0);
          setCurrentScenario(prev => (prev + 1) % scenarios.length);
          setIsTransitioning(false);
        }, 1000);
      }, 2500);
      
      return () => clearTimeout(timer);
    }
  }, [currentScenario, sequenceStep, isPlaying, showConnections, isTransitioning, scenarios]);

  return (
    <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            See Your AI Agent in Action
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-slate-600 dark:text-slate-400"
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
            className="relative h-[300px] md:h-[400px] lg:h-[500px] mb-8 md:mb-12"
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
              
              {/* Active Skill to Brain Connections */}
              <AnimatePresence>
                {showConnections && activeSkills.map((skillId, index) => {
                  const skill = skills.find(s => s.id === skillId);
                  if (!skill) return null;
                  return (
                    <motion.line
                      key={`brain-${skillId}-${currentScenario}`}
                      x1={`${skill.position.x}%`}
                      y1={`${skill.position.y}%`}
                      x2="50%"
                      y2="50%"
                      stroke="url(#activeGradient)"
                      strokeWidth="3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.8 }}
                      exit={{ opacity: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        ease: "easeInOut",
                        delay: index * 0.1
                      }}
                    />
                  );
                })}
              </AnimatePresence>
              
              <defs>
                <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#ec4899" stopOpacity="1" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
                </linearGradient>
              </defs>
            </svg>

            {/* Central Brain */}
            <motion.div
              className="absolute z-10"
              style={{ top: '40%', left: '45%', transform: 'translate(-50%, -50%)' }}
              animate={{ 
                scale: showConnections ? [1, 1.15, 1.1] : [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: showConnections ? 1 : 4,
                repeat: showConnections ? 0 : Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center relative">
                <Brain className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white" />
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 ${showConnections ? 'opacity-60' : 'opacity-40'} blur-xl animate-pulse`} />
              </div>
            </motion.div>

            {/* Skill Nodes */}
            {skills.map((skill) => {
              const isActive = activeSkills.includes(skill.id);
              return (
                <motion.div
                  key={skill.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ left: `${skill.position.x}%`, top: `${skill.position.y}%` }}
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.div
                    className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-purple-500/50' 
                        : 'bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700'
                    }`}
                    animate={isActive ? {
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        '0 0 20px rgba(147, 51, 234, 0.5)',
                        '0 0 40px rgba(147, 51, 234, 0.8)',
                        '0 0 20px rgba(147, 51, 234, 0.5)'
                      ]
                    } : {}}
                    transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
                  >
                    <skill.icon className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${
                      isActive ? 'text-white' : 'text-slate-600 dark:text-slate-400'
                    }`} />
                  </motion.div>
                  <p className={`absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 text-[10px] md:text-xs whitespace-nowrap ${
                    isActive ? 'text-purple-600 dark:text-purple-300 font-semibold' : 'text-slate-600 dark:text-slate-500'
                  }`}>
                    {skill.name}
                  </p>
                </motion.div>
              );
            })}

            {/* Active Pulse Effect */}
            <AnimatePresence>
              {sequenceStep > 0 && sequenceStep <= scenarios[currentScenario].sequence.length && (
                <motion.div
                  className="absolute pointer-events-none z-20"
                  style={{ left: `${pulseOrigin.x}%`, top: `${pulseOrigin.y}%` }}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 4, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Scenario Display */}
          <motion.div 
            className="bg-white dark:bg-slate-800/50 backdrop-blur-xl rounded-xl md:rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {scenarios[currentScenario].trigger}
                </h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                  {scenarios[currentScenario].story}
                </p>
              </div>
            </div>

            {/* Skill Sequence */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs md:text-sm text-slate-500 dark:text-slate-400">Active Skills:</span>
              {scenarios[currentScenario].sequence.map((skillId, index) => {
                const skill = skills.find(s => s.id === skillId);
                const isActive = index < sequenceStep;
                return (
                  <motion.div
                    key={`${currentScenario}-${skillId}-${index}`}
                    className={`flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm ${
                      isActive 
                        ? 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-500/30' 
                        : 'bg-slate-100 dark:bg-slate-700/50 text-slate-500 dark:text-slate-500 border border-slate-200 dark:border-slate-600'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {skill && <skill.icon className="w-3 h-3 md:w-4 md:h-4" />}
                    <span className="hidden sm:inline">{skill?.name}</span>
                    {index < scenarios[currentScenario].sequence.length - 1 && (
                      <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3 ml-1" />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Control */}
            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3 md:px-4 py-1.5 md:py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg text-slate-700 dark:text-white text-xs md:text-sm font-medium transition-colors"
              >
                {isPlaying ? 'Pause' : 'Resume'} Simulation
              </button>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Scenario {currentScenario + 1} of {scenarios.length}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
