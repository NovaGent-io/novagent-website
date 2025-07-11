'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, Mic, Users, CheckCircle,
  Headphones, BarChart3, Zap, TrendingUp,
  VolumeX, Volume2, PhoneCall, PhoneIncoming
} from 'lucide-react'
import SkillWorkflow, { WorkflowStage } from '@/components/SkillWorkflow'

const smartDialerStages: WorkflowStage[] = [
  {
    id: 1,
    title: "Smart Call List",
    description: "AI prioritizes and optimizes your call list based on lead quality, time zones, and historical engagement data.",
    icon: Users,
    stats: { label: "List Optimization", value: "3x" },
    features: [
      "Lead scoring integration",
      "Time zone optimization",
      "Best time to call analysis",
      "Do not call compliance"
    ],
    colorClass: "blue",
    gradientClass: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "AI Voice Assistant",
    description: "Natural-sounding AI handles initial outreach, qualification, and can seamlessly transfer to human agents.",
    icon: Mic,
    stats: { label: "Natural Voice Quality", value: "98%" },
    features: [
      "Human-like conversation",
      "Dynamic script adaptation",
      "Objection handling",
      "Live transfer capability"
    ],
    colorClass: "purple",
    gradientClass: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Real-Time Analytics",
    description: "Monitor call performance, sentiment, and conversion rates with live dashboards and insights.",
    icon: BarChart3,
    stats: { label: "Conversion Tracking", value: "Live" },
    features: [
      "Call sentiment analysis",
      "Conversion tracking",
      "Agent performance metrics",
      "Campaign optimization"
    ],
    colorClass: "emerald",
    gradientClass: "from-emerald-500 to-teal-500"
  },
  {
    id: 4,
    title: "Continuous Optimization",
    description: "AI learns from every call to improve scripts, timing, and approach for maximum effectiveness.",
    icon: TrendingUp,
    stats: { label: "Performance Gain", value: "+45%" },
    features: [
      "Script A/B testing",
      "Timing optimization",
      "Personalization engine",
      "Success pattern analysis"
    ],
    colorClass: "orange",
    gradientClass: "from-orange-500 to-red-500"
  }
]

// Custom visualizations for each stage
const visualizations = {
  0: <StageOneVisual />,
  1: <StageTwoVisual />,
  2: <StageThreeVisual />,
  3: <StageFourVisual />
}

const metrics = [
  { icon: Phone, metric: "250K+", label: "Calls Made" },
  { icon: Users, metric: "65%", label: "Contact Rate" },
  { icon: TrendingUp, metric: "4.2x", label: "ROI Increase" },
  { icon: Zap, metric: "500", label: "Calls/Hour" }
]

export default function SmartDialerWorkflow() {
  return (
    <SkillWorkflow
      title="How Smart Outreach Dialer Works"
      subtitle="Scale your outreach with AI-powered calling that sounds human and delivers results"
      stages={smartDialerStages}
      visualizations={visualizations}
      metrics={metrics}
    />
  )
}

// Stage Visualizations
function StageOneVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative">
        {/* Call list visualization */}
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [100, 0],
                opacity: [0, 1]
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="flex items-center gap-3 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-md"
            >
              <div className={`w-2 h-8 rounded-full ${
                i === 0 ? 'bg-green-500' : 
                i === 1 ? 'bg-blue-500' : 
                'bg-slate-300 dark:bg-slate-600'
              }`} />
              <div className="flex-1">
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full w-24" />
              </div>
              <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                {i === 0 ? 'High' : i === 1 ? 'Med' : 'Low'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function StageTwoVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative">
        {/* Sound wave animation */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Volume2 className="w-16 h-16 text-purple-500" />
        </motion.div>
        
        {/* Sound waves */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-purple-300 dark:border-purple-700 rounded-full"
            animate={{
              width: [64, 120 + i * 20],
              height: [64, 120 + i * 20],
              opacity: [0.8, 0]
            }}
            transition={{
              duration: 2,
              delay: i * 0.6,
              repeat: Infinity
            }}
          />
        ))}
      </div>
    </div>
  )
}

function StageThreeVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-2 gap-4">
        {/* Metric cards */}
        {[
          { label: "Calls", value: "847", trend: "+12%" },
          { label: "Connected", value: "523", trend: "+8%" },
          { label: "Qualified", value: "89", trend: "+15%" },
          { label: "Converted", value: "34", trend: "+22%" }
        ].map((metric, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -5, 0]
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity
            }}
            className="bg-white dark:bg-slate-800 rounded-lg p-3 text-center shadow-md"
          >
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              {metric.value}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              {metric.label}
            </div>
            <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
              {metric.trend}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function StageFourVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-48 h-48">
        {/* Central optimization hub */}
        <TrendingUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-orange-500" />
        
        {/* Improvement indicators */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.7,
              repeat: Infinity
            }}
            style={{
              top: '50%',
              left: '50%',
              transform: `
                translateX(-50%) 
                translateY(-50%) 
                rotate(${i * 90}deg) 
                translateY(-60px)
              `
            }}
          >
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <div className="text-xs font-medium text-green-600 dark:text-green-400">
                +{5 + i * 3}%
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
