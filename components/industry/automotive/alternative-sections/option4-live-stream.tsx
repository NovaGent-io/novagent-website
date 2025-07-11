"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, TrendingUp, Users, Calendar, Star, MessageCircle, DollarSign } from 'lucide-react';

export function LiveDataStream() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [stats, setStats] = useState({
    leads: 0,
    appointments: 0,
    responses: 0,
    reviews: 0,
    revenue: 0
  });

  const dataPoints = [
    { time: 0, type: 'lead', source: 'Website', value: 1, message: 'New lead: 2024 Honda Accord inquiry' },
    { time: 2, type: 'response', source: 'AI Agent', value: 1, message: 'Instant response sent with financing options' },
    { time: 4, type: 'lead', source: 'Cars.com', value: 1, message: 'Lead captured: Used SUV interest' },
    { time: 5, type: 'appointment', source: 'AI Agent', value: 1, message: 'Test drive scheduled for tomorrow 2PM' },
    { time: 7, type: 'review', source: 'Google', value: 1, message: '5-star review posted by satisfied customer' },
    { time: 9, type: 'lead', source: 'AutoTrader', value: 1, message: 'Premium lead: Cash buyer for luxury sedan' },
    { time: 11, type: 'response', source: 'AI Agent', value: 1, message: 'Video walkthrough sent to prospect' },
    { time: 13, type: 'appointment', source: 'AI Agent', value: 1, message: 'Service appointment booked' },
    { time: 15, type: 'revenue', source: 'Sale', value: 32000, message: 'Vehicle sold: 2024 CR-V - $32,000' },
    { time: 17, type: 'lead', source: 'Facebook', value: 1, message: 'Social media lead captured' },
    { time: 19, type: 'response', source: 'AI Agent', value: 1, message: 'Trade-in evaluation sent' },
    { time: 20, type: 'appointment', source: 'AI Agent', value: 1, message: 'Finance consultation scheduled' }
  ];

  // Process events based on current time
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTime(prev => {
        const next = prev + 0.1;
        if (next >= 24) {
          setIsPlaying(false);
          return 24;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Update stats based on current time
  useEffect(() => {
    const activeEvents = dataPoints.filter(point => point.time <= currentTime);
    const newStats = activeEvents.reduce((acc, event) => {
      switch (event.type) {
        case 'lead':
          acc.leads += event.value;
          break;
        case 'appointment':
          acc.appointments += event.value;
          break;
        case 'response':
          acc.responses += event.value;
          break;
        case 'review':
          acc.reviews += event.value;
          break;
        case 'revenue':
          acc.revenue += event.value;
          break;
      }
      return acc;
    }, { leads: 0, appointments: 0, responses: 0, reviews: 0, revenue: 0 });

    setStats(newStats);
  }, [currentTime]);

  const reset = () => {
    setCurrentTime(0);
    setStats({ leads: 0, appointments: 0, responses: 0, reviews: 0, revenue: 0 });
    setIsPlaying(true);
  };

  const activeEvents = dataPoints.filter(
    point => point.time <= currentTime && point.time > currentTime - 2
  );

  return (
    <section className="py-16 lg:py-24 bg-slate-900 overflow-hidden">
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
            Watch real-time data flow through your autonomous dealership
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Control Panel */}
          <motion.div 
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 mb-8 border border-slate-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>
                <button
                  onClick={reset}
                  className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white hover:bg-slate-600 transition-colors"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 text-sm">Time:</span>
                  <span className="font-mono text-white font-bold">
                    {Math.floor(currentTime).toString().padStart(2, '0')}:{((currentTime % 1) * 60).toFixed(0).padStart(2, '0')}
                  </span>
                </div>
              </div>
              <div className="text-sm text-slate-400">
                Simulating 24 hours of dealership activity
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 h-2 bg-slate-700 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                style={{ width: `${(currentTime / 24) * 100}%` }}
              />
            </div>
          </motion.div>

          {/* Live Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <StatCard icon={Users} label="Leads Captured" value={stats.leads} color="from-blue-500 to-blue-600" />
            <StatCard icon={Calendar} label="Appointments" value={stats.appointments} color="from-green-500 to-green-600" />
            <StatCard icon={MessageCircle} label="AI Responses" value={stats.responses} color="from-purple-500 to-purple-600" />
            <StatCard icon={Star} label="Reviews" value={stats.reviews} color="from-amber-500 to-amber-600" />
            <StatCard icon={DollarSign} label="Revenue" value={`$${stats.revenue.toLocaleString()}`} color="from-pink-500 to-pink-600" />
          </div>

          {/* Data Stream Visualization */}
          <motion.div 
            className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }} />
            </div>

            {/* Data Points */}
            <div className="relative h-64">
              {dataPoints.map((point, index) => {
                const isActive = point.time <= currentTime;
                const x = (point.time / 24) * 100;
                const y = 50 + (index % 3 - 1) * 30;

                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{ left: `${x}%`, top: `${y}%` }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`w-3 h-3 rounded-full ${
                      point.type === 'lead' ? 'bg-blue-500' :
                      point.type === 'appointment' ? 'bg-green-500' :
                      point.type === 'response' ? 'bg-purple-500' :
                      point.type === 'review' ? 'bg-amber-500' :
                      'bg-pink-500'
                    }`}>
                      <div className="absolute inset-0 rounded-full animate-ping opacity-75" style={{
                        backgroundColor: 'inherit'
                      }} />
                    </div>
                  </motion.div>
                );
              })}

              {/* Scanning Line */}
              <motion.div
                className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-400 to-transparent"
                style={{ left: `${(currentTime / 24) * 100}%` }}
              />
            </div>

            {/* Event Feed */}
            <div className="mt-8 space-y-2 max-h-40 overflow-y-auto">
              {activeEvents.map((event, index) => (
                <motion.div
                  key={`${event.time}-${index}`}
                  className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <div className={`w-2 h-2 rounded-full ${
                    event.type === 'lead' ? 'bg-blue-500' :
                    event.type === 'appointment' ? 'bg-green-500' :
                    event.type === 'response' ? 'bg-purple-500' :
                    event.type === 'review' ? 'bg-amber-500' :
                    'bg-pink-500'
                  }`} />
                  <span className="text-sm text-slate-300">{event.message}</span>
                  <span className="text-xs text-slate-500 ml-auto">{event.source}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Performance Summary */}
          <motion.div 
            className="mt-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-blue-500/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <TrendingUp className="w-8 h-8 text-blue-400" />
                <div>
                  <p className="text-sm text-slate-400">AI Performance Score</p>
                  <p className="text-2xl font-bold text-white">98.7%</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 max-w-md text-right">
                Your AI agent is processing leads 47x faster than traditional methods with a 3x higher conversion rate
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, label, value, color }: {
  icon: any;
  label: string;
  value: string | number;
  color: string;
}) {
  return (
    <motion.div 
      className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`w-10 h-10 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center mb-3`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-slate-400 mt-1">{label}</p>
    </motion.div>
  );
}
