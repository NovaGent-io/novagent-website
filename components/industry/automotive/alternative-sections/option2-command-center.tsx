"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, TrendingUp, AlertCircle, CheckCircle, Clock, Users, Car, Wrench, DollarSign, Phone } from 'lucide-react';

export function AICommandCenter() {
  const [activeAlerts, setActiveAlerts] = useState(3);
  const [tasksCompleted, setTasksCompleted] = useState(156);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTasksCompleted(prev => prev + Math.floor(Math.random() * 3));
      setActiveAlerts(prev => Math.max(0, prev + Math.floor(Math.random() * 3) - 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const monitors = [
    {
      id: 'leads',
      title: 'Lead Management',
      icon: Users,
      status: 'active',
      metrics: {
        'Response Time': '< 60 sec',
        'Leads Today': '47',
        'Conversion': '24%'
      },
      activity: [
        { time: '14:32', action: 'New lead from Cars.com', status: 'processing' },
        { time: '14:31', action: 'Follow-up sent to J. Smith', status: 'completed' },
        { time: '14:28', action: 'Qualification call scheduled', status: 'completed' }
      ]
    },
    {
      id: 'service',
      title: 'Service Operations',
      icon: Wrench,
      status: 'active',
      metrics: {
        'Bay Utilization': '92%',
        'Appointments': '18',
        'Wait Time': '12 min'
      },
      activity: [
        { time: '14:33', action: 'Service reminder sent', status: 'completed' },
        { time: '14:30', action: 'Appointment confirmed', status: 'completed' },
        { time: '14:25', action: 'Parts availability checked', status: 'processing' }
      ]
    },
    {
      id: 'sales',
      title: 'Sales Pipeline',
      icon: Car,
      status: 'warning',
      metrics: {
        'Hot Leads': '12',
        'Test Drives': '6',
        'Closing Rate': '18%'
      },
      activity: [
        { time: '14:34', action: 'Price quote sent', status: 'completed' },
        { time: '14:29', action: 'Finance options prepared', status: 'processing' },
        { time: '14:24', action: 'Trade-in value assessed', status: 'completed' }
      ]
    },
    {
      id: 'finance',
      title: 'Financial Services',
      icon: DollarSign,
      status: 'active',
      metrics: {
        'Applications': '8',
        'Approval Rate': '87%',
        'Avg Time': '15 min'
      },
      activity: [
        { time: '14:35', action: 'Credit check completed', status: 'completed' },
        { time: '14:32', action: 'Loan terms calculated', status: 'completed' },
        { time: '14:27', action: 'Insurance quote generated', status: 'processing' }
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-950 overflow-hidden">
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
            Mission control for your autonomous dealership operations
          </motion.p>
        </div>

        {/* Command Center Header */}
        <motion.div 
          className="bg-slate-900/50 backdrop-blur-xl rounded-t-2xl border border-slate-800 p-6 mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">System Online</span>
              </div>
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">
                  <span className="text-blue-400 font-bold">{tasksCompleted}</span> Tasks Completed Today
                </span>
              </div>
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                <span className="text-slate-300">
                  <span className="text-amber-400 font-bold">{activeAlerts}</span> Active Alerts
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-slate-400" />
              <span className="text-slate-400 font-mono">
                {new Date().toLocaleTimeString()}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Monitor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {monitors.map((monitor, index) => (
            <motion.div
              key={monitor.id}
              className={`bg-slate-900/80 backdrop-blur-xl border border-slate-800 ${
                index === 0 ? 'lg:border-r-0' : ''
              } ${index === 1 ? '' : ''} ${
                index === 2 ? 'lg:border-r-0 lg:border-t-0' : ''
              } ${index === 3 ? 'lg:border-t-0' : ''} ${
                index === monitors.length - 1 ? 'rounded-b-2xl' : ''
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {/* Monitor Header */}
              <div className="p-4 border-b border-slate-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      monitor.status === 'active' ? 'bg-green-500/20' : 'bg-amber-500/20'
                    }`}>
                      <monitor.icon className={`w-5 h-5 ${
                        monitor.status === 'active' ? 'text-green-400' : 'text-amber-400'
                      }`} />
                    </div>
                    <h3 className="font-semibold text-white">{monitor.title}</h3>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    monitor.status === 'active' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {monitor.status === 'active' ? 'OPERATIONAL' : 'ATTENTION'}
                  </div>
                </div>
              </div>

              {/* Metrics Bar */}
              <div className="p-4 bg-slate-800/30 border-b border-slate-800">
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(monitor.metrics).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">{key}</p>
                      <p className="text-lg font-bold text-white mt-1">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Feed */}
              <div className="p-4 space-y-2 h-40 overflow-hidden">
                {monitor.activity.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <span className="text-slate-500 font-mono text-xs">{item.time}</span>
                    {item.status === 'completed' ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-blue-400 border-t-transparent animate-spin" />
                    )}
                    <span className="text-slate-300">{item.action}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Ticker */}
        <motion.div 
          className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <div>
                <p className="text-sm text-slate-400">Today's Performance</p>
                <p className="text-2xl font-bold text-white">92% Efficiency</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-400">98%</p>
                <p className="text-xs text-slate-400 mt-1">Response Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-400">1.2s</p>
                <p className="text-xs text-slate-400 mt-1">Avg Response</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-400">4.9?</p>
                <p className="text-xs text-slate-400 mt-1">Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-400">$142K</p>
                <p className="text-xs text-slate-400 mt-1">Value Generated</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
