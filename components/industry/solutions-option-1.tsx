"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Calendar, MessageSquare, Star, Check, Brain } from 'lucide-react';

// Option 1: Interactive Agent Builder
export function InteractiveAgentBuilder() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  
  const skills = [
    { id: 'lead-gen', name: 'Lead Generation', icon: Target, value: 2500, description: 'Capture and qualify leads 24/7' },
    { id: 'appointment', name: 'Appointment Setting', icon: Calendar, value: 1800, description: 'Automate service scheduling' },
    { id: 'support', name: 'Customer Support', icon: MessageSquare, value: 1200, description: 'Answer questions instantly' },
    { id: 'reputation', name: 'SEO & Reputation', icon: Star, value: 2000, description: 'Build your online presence' }
  ];

  const toggleSkill = (skillId: string) => {
    setSelectedSkills(prev => 
      prev.includes(skillId) 
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  };

  const agentPower = Math.min(100, selectedSkills.length * 25);
  const totalValue = selectedSkills.reduce((sum, skillId) => {
    const skill = skills.find(s => s.id === skillId);
    return sum + (skill?.value || 0);
  }, 0);

  return (
    <section className="bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950 py-24">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-5xl font-bold text-white mb-4">Build Your Perfect AI Agent</h2>
          <p className="text-xl text-gray-400">Select the skills your dealership needs. Watch your agent evolve.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left: Available Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Available Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => toggleSkill(skill.id)}
                  className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedSkills.includes(skill.id)
                      ? 'bg-purple-900/30 border-2 border-purple-500'
                      : 'bg-slate-800/50 border-2 border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${
                          selectedSkills.includes(skill.id) ? 'bg-purple-500/20' : 'bg-slate-700/50'
                        }`}>
                          <skill.icon className={`h-6 w-6 ${
                            selectedSkills.includes(skill.id) ? 'text-purple-400' : 'text-gray-400'
                          }`} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                          <p className="text-sm text-gray-400">{skill.description}</p>
                        </div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedSkills.includes(skill.id)
                          ? 'bg-purple-500 border-purple-500'
                          : 'border-gray-500'
                      }`}>
                        {selectedSkills.includes(skill.id) && <Check className="h-4 w-4 text-white" />}
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-gray-500">Monthly value:</span>
                      <span className="text-green-400 font-bold">+${skill.value.toLocaleString()}</span>
                    </div>
                  </div>
                  {selectedSkills.includes(skill.id) && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right: Your Agent Visualization */}
          <div className="relative">
            <div className="bg-slate-900/50 rounded-3xl p-12 border-2 border-dashed border-purple-500/50">
              <div className="text-center">
                {/* Agent Core */}
                <div className="relative inline-block">
                  <motion.div 
                    className="w-48 h-48 mx-auto rounded-full relative overflow-hidden"
                    animate={{ 
                      scale: 1 + (selectedSkills.length * 0.05),
                      boxShadow: `0 0 ${selectedSkills.length * 20}px rgba(168, 85, 247, 0.5)`
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-500" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Brain className="h-20 w-20 text-white/80" />
                    </div>
                  </motion.div>
                  
                  {/* Orbiting Skills */}
                  {selectedSkills.map((skillId, index) => {
                    const skill = skills.find(s => s.id === skillId);
                    const angle = (index * 360) / selectedSkills.length;
                    const radius = 100;
                    
                    return (
                      <motion.div
                        key={skillId}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: 1, 
                          opacity: 1,
                          x: Math.cos(angle * Math.PI / 180) * radius,
                          y: Math.sin(angle * Math.PI / 180) * radius
                        }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <div className="bg-purple-900 p-2 rounded-full border-2 border-purple-500">
                          {skill && <skill.icon className="h-6 w-6 text-purple-300" />}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* Agent Stats */}
                <motion.div className="mt-8" key={agentPower}>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Agent Power: {agentPower}%
                  </h3>
                  <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
                      initial={{ width: 0 }}
                      animate={{ width: `${agentPower}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
                
                {totalValue > 0 && (
                  <motion.div 
                    className="mt-6 text-2xl font-bold text-green-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    Monthly Value: ${totalValue.toLocaleString()}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
