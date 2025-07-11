"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, FileText, Calendar, Phone, Mail, TrendingUp, Briefcase, Award } from 'lucide-react';

export function DigitalEmployee() {
  const [selectedDay, setSelectedDay] = useState('monday');

  const employeeProfile = {
    name: "Nova",
    title: "Your AI Sales & Service Specialist",
    skills: ["Lead Generation", "Customer Support", "Appointment Setting", "Document Processing"],
    metrics: {
      productivity: "312% of human baseline",
      availability: "24/7/365",
      languages: "12 languages",
      responseTime: "< 60 seconds"
    }
  };

  const weekSchedule = {
    monday: [
      { time: "12:00 AM", task: "Processing overnight leads from website", count: 23 },
      { time: "6:00 AM", task: "Sending appointment reminders", count: 47 },
      { time: "9:00 AM", task: "Qualifying incoming calls", count: 84 },
      { time: "2:00 PM", task: "Following up with test drivers", count: 18 },
      { time: "6:00 PM", task: "Scheduling service appointments", count: 31 },
      { time: "10:00 PM", task: "Responding to social media inquiries", count: 29 }
    ],
    tuesday: [
      { time: "12:00 AM", task: "Analyzing competitor pricing", count: 150 },
      { time: "7:00 AM", task: "Preparing daily sales reports", count: 5 },
      { time: "10:00 AM", task: "Conducting follow-up calls", count: 92 },
      { time: "3:00 PM", task: "Processing finance applications", count: 14 },
      { time: "7:00 PM", task: "Updating CRM records", count: 267 },
      { time: "11:00 PM", task: "Engaging late-night browsers", count: 41 }
    ],
    wednesday: [
      { time: "1:00 AM", task: "Monitoring review sites", count: 8 },
      { time: "8:00 AM", task: "Coordinating test drives", count: 22 },
      { time: "11:00 AM", task: "Answering service inquiries", count: 76 },
      { time: "4:00 PM", task: "Sending review requests", count: 34 },
      { time: "8:00 PM", task: "Qualifying weekend shoppers", count: 58 },
      { time: "11:30 PM", task: "Preparing next-day schedules", count: 12 }
    ]
  };

  const achievements = [
    { icon: Award, label: "Lead Conversion Champion", value: "47% conversion rate" },
    { icon: TrendingUp, label: "Revenue Generator", value: "$2.3M this quarter" },
    { icon: Users, label: "Customer Satisfaction", value: "4.9/5 average rating" },
    { icon: Briefcase, label: "Deals Closed", value: "186 this month" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-slate-900 overflow-hidden">
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
            Meet Nova - your tireless digital employee who never takes a break
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Employee Card */}
          <motion.div 
            className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 mb-12 shadow-xl border border-slate-200 dark:border-slate-700"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Avatar */}
              <motion.div 
                className="relative"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
                  <div className="relative z-10 text-white text-6xl font-bold">N</div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-transparent to-white/30"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                </div>
              </motion.div>

              {/* Profile Info */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {employeeProfile.name}
                </h3>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
                  {employeeProfile.title}
                </p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                  {employeeProfile.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(employeeProfile.metrics).map(([key, value]) => (
                    <div key={key} className="text-center lg:text-left">
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Work Schedule */}
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              This Week's Performance
            </h4>

            {/* Day Selector */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {Object.keys(weekSchedule).map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
                    selectedDay === day
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Daily Tasks */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDay}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {weekSchedule[selectedDay as keyof typeof weekSchedule].map((task, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="w-20 text-sm font-medium text-slate-500 dark:text-slate-400">
                      {task.time}
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-700 dark:text-slate-300">{task.task}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {task.count}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        completed
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Achievements */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 text-center border border-blue-200 dark:border-blue-800"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <achievement.icon className="w-12 h-12 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                  {achievement.label}
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  {achievement.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
