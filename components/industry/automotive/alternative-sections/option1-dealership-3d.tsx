"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Wrench, Users, DollarSign, Phone, BarChart3, Zap } from 'lucide-react';

export function Dealership3DView() {
  const [activeArea, setActiveArea] = useState<string | null>('showroom');

  const areas = [
    { 
      id: 'showroom', 
      name: 'Showroom Floor', 
      icon: Car,
      position: { top: '20%', left: '25%' },
      stats: {
        leads: '127 leads captured today',
        conversion: '24% conversion rate',
        responseTime: '< 2 min response time'
      }
    },
    { 
      id: 'service', 
      name: 'Service Bay', 
      icon: Wrench,
      position: { top: '40%', left: '60%' },
      stats: {
        appointments: '42 appointments booked',
        utilization: '94% bay utilization',
        satisfaction: '4.8? customer rating'
      }
    },
    { 
      id: 'finance', 
      name: 'Finance Office', 
      icon: DollarSign,
      position: { top: '60%', left: '30%' },
      stats: {
        applications: '18 credit apps processed',
        approvals: '89% approval rate',
        time: '15 min avg processing'
      }
    },
    { 
      id: 'callcenter', 
      name: 'Virtual Call Center', 
      icon: Phone,
      position: { top: '30%', left: '75%' },
      stats: {
        calls: '284 calls handled',
        satisfaction: '96% satisfaction',
        availability: '24/7 availability'
      }
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
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
            Explore how AI transforms every corner of your dealership
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* 3D Dealership Container */}
          <motion.div 
            className="relative h-[600px] bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-slate-700/50 backdrop-blur-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }} />
            </div>

            {/* Dealership Areas */}
            {areas.map((area) => (
              <motion.div
                key={area.id}
                className="absolute cursor-pointer"
                style={area.position}
                whileHover={{ scale: 1.1 }}
                onClick={() => setActiveArea(area.id)}
              >
                <div className={`relative ${activeArea === area.id ? 'z-20' : 'z-10'}`}>
                  {/* Pulse Effect */}
                  <div className={`absolute inset-0 rounded-full ${
                    activeArea === area.id 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                      : 'bg-gradient-to-r from-slate-600 to-slate-700'
                  } animate-ping opacity-20`} />
                  
                  {/* Icon Container */}
                  <motion.div 
                    className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl ${
                      activeArea === area.id 
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                        : 'bg-gradient-to-br from-slate-700 to-slate-800'
                    }`}
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <area.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Label */}
                  <motion.div 
                    className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium ${
                      activeArea === area.id 
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                        : 'bg-slate-800/80 text-slate-400 border border-slate-700'
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {area.name}
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Central AI Core */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-30 blur-xl" />
            </motion.div>

            {/* Connection Lines */}
            {areas.map((area) => (
              <svg
                key={`line-${area.id}`}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 5 }}
              >
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2={area.position.left}
                  y2={area.position.top}
                  stroke={activeArea === area.id ? "url(#gradient)" : "rgba(148, 163, 184, 0.2)"}
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
            ))}
          </motion.div>

          {/* Stats Display */}
          <AnimatePresence mode="wait">
            {activeArea && (
              <motion.div
                key={activeArea}
                className="mt-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-6 backdrop-blur-xl border border-slate-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {(() => {
                    const area = areas.find(a => a.id === activeArea);
                    const Icon = area?.icon || Car;
                    return (
                      <>
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{area?.name}</h3>
                      </>
                    );
                  })()}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {areas.find(a => a.id === activeArea)?.stats && 
                    Object.entries(areas.find(a => a.id === activeArea)!.stats).map(([key, value]) => (
                      <motion.div
                        key={key}
                        className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <BarChart3 className="w-5 h-5 text-blue-400 mb-2" />
                        <p className="text-2xl font-bold text-white">{value}</p>
                      </motion.div>
                    ))
                  }
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
