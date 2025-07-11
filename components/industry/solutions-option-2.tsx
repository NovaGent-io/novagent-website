"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Calendar, MessageSquare, Star, Brain } from 'lucide-react';

// Option 2: Skill Constellation
export function SkillConstellation() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const skills = [
    { id: 'lead-gen', name: 'Lead Generation', icon: Target, connections: ['appointment', 'support'] },
    { id: 'appointment', name: 'Appointment Setting', icon: Calendar, connections: ['lead-gen', 'reputation'] },
    { id: 'support', name: 'Customer Support', icon: MessageSquare, connections: ['reputation', 'lead-gen'] },
    { id: 'reputation', name: 'SEO & Reputation', icon: Star, connections: ['support', 'appointment'] }
  ];

  return (
    <section className="bg-black py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">Your Agent's Neural Network</h2>
          <p className="text-xl text-gray-400">Every skill connects. Every connection multiplies value.</p>
        </motion.div>
        
        <div className="relative h-[600px] max-w-4xl mx-auto">
          {/* Central Core */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-32 h-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-xl opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="h-16 w-16 text-white" />
              </div>
            </div>
          </motion.div>
          
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            {skills.map((skill, index) => {
              const angle = (index * 360) / skills.length;
              const radius = 200;
              const x = 300 + Math.cos(angle * Math.PI / 180) * radius;
              const y = 300 + Math.sin(angle * Math.PI / 180) * radius;
              
              return (
                <motion.line
                  key={skill.id}
                  x1="300"
                  y1="300"
                  x2={x}
                  y2={y}
                  stroke="url(#gradient-line)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: index * 0.2 }}
                  className={hoveredSkill === skill.id ? 'opacity-100' : 'opacity-30'}
                />
              );
            })}
          </svg>
          
          {/* Orbiting Skills */}
          {skills.map((skill, index) => {
            const angle = (index * 360) / skills.length;
            const radius = 200;
            
            return (
              <motion.div
                key={skill.id}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(${Math.cos(angle * Math.PI / 180) * radius - 40}px, 
                             ${Math.sin(angle * Math.PI / 180) * radius - 40}px)`
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2, type: "spring" }}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <motion.div 
                  className="relative cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  animate={{ 
                    rotate: -360,
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                    y: { duration: 3, repeat: Infinity, delay: index * 0.5 }
                  }}
                >
                  <div className="bg-slate-900 p-4 rounded-full border-2 border-purple-500 relative">
                    <skill.icon className="h-10 w-10 text-purple-400" />
                    {hoveredSkill === skill.id && (
                      <motion.div
                        className="absolute -inset-4 bg-purple-500/20 rounded-full blur-xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1.5 }}
                      />
                    )}
                  </div>
                  <motion.div 
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredSkill === skill.id ? 1 : 0 }}
                  >
                    <span className="text-white font-semibold bg-slate-800 px-3 py-1 rounded-full text-sm">
                      {skill.name}
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
