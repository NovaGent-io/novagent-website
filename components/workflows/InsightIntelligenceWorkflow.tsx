'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Database, LineChart, Brain, FileText,
  TrendingUp, BarChart3, PieChart, Activity,
  Sparkles, Zap, Users, DollarSign
} from 'lucide-react'
import SkillWorkflow, { WorkflowStage } from '@/components/SkillWorkflow'

const insightStages: WorkflowStage[] = [
  {
    id: 1,
    title: "Data Collection",
    description: "Automatically gather and consolidate data from all your business systems, databases, and third-party sources.",
    icon: Database,
    stats: { label: "Data Sources", value: "100+" },
    features: [
      "Multi-source integration",
      "Real-time data sync",
      "Data quality validation",
      "Automated ETL processes"
    ],
    colorClass: "blue",
    gradientClass: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "AI Analysis Engine",
    description: "Advanced algorithms identify patterns, anomalies, and opportunities hidden in your data.",
    icon: Brain,
    stats: { label: "Analysis Speed", value: "10x" },
    features: [
      "Pattern recognition",
      "Anomaly detection",
      "Predictive modeling",
      "Correlation analysis"
    ],
    colorClass: "purple",
    gradientClass: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Visual Intelligence",
    description: "Transform complex data into clear, actionable visualizations that tell your business story.",
    icon: LineChart,
    stats: { label: "Visualization Types", value: "50+" },
    features: [
      "Interactive dashboards",
      "Custom report builder",
      "Real-time updates",
      "Mobile-optimized views"
    ],
    colorClass: "emerald",
    gradientClass: "from-emerald-500 to-teal-500"
  },
  {
    id: 4,
    title: "Actionable Reports",
    description: "Receive automated insights, recommendations, and alerts that drive business decisions.",
    icon: FileText,
    stats: { label: "Decision Impact", value: "89%" },
    features: [
      "Executive summaries",
      "Action recommendations",
      "Alert notifications",
      "Scheduled reporting"
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
  { icon: BarChart3, metric: "500M+", label: "Data Points Analyzed" },
  { icon: TrendingUp, metric: "35%", label: "Revenue Growth" },
  { icon: Users, metric: "92%", label: "User Adoption" },
  { icon: DollarSign, metric: "8.5x", label: "ROI" }
]

export default function InsightIntelligenceWorkflow() {
  return (
    <SkillWorkflow
      title="How Insight Intelligence Works"
      subtitle="Turn your data chaos into strategic clarity with AI-powered analytics and visualization"
      stages={insightStages}
      visualizations={visualizations}
      metrics={metrics}
    />
  )
}

// Stage Visualizations
function StageOneVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-48 h-48">
        {/* Central database */}
        <Database className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-blue-500 z-10" />
        
        {/* Data sources flowing in */}
        {[
          { angle: 0, label: "CRM" },
          { angle: 72, label: "ERP" },
          { angle: 144, label: "Web" },
          { angle: 216, label: "API" },
          { angle: 288, label: "Files" }
        ].map((source, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              transform: `
                translateX(-50%) 
                translateY(-50%) 
                rotate(${source.angle}deg) 
                translateX(80px) 
                rotate(-${source.angle}deg)
              `
            }}
          >
            <motion.div
              animate={{
                scale: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity
              }}
              className="bg-white dark:bg-slate-800 rounded-lg px-3 py-1 shadow-md"
            >
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                {source.label}
              </span>
            </motion.div>
          </motion.div>
        ))}
        
        {/* Data flow particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            animate={{
              x: [80 * Math.cos((i * 72) * Math.PI / 180), 0],
              y: [80 * Math.sin((i * 72) * Math.PI / 180), 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity
            }}
            style={{
              top: '50%',
              left: '50%'
            }}
          />
        ))}
      </div>
    </div>
  )
}

function StageTwoVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative">
        <Brain className="w-24 h-24 text-purple-500" />
        
        {/* Neural activity */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 40 * Math.cos((i * 60) * Math.PI / 180)}
              y2={50 + 40 * Math.sin((i * 60) * Math.PI / 180)}
              stroke="url(#purple-gradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity
              }}
            />
          ))}
          <defs>
            <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function StageThreeVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-2 gap-3">
        {/* Different chart types */}
        {[
          { icon: LineChart, data: [20, 40, 30, 60, 80] },
          { icon: BarChart3, data: [30, 50, 70, 40, 90] },
          { icon: PieChart, data: [25, 35, 40] },
          { icon: Activity, data: [40, 20, 60, 30, 70] }
        ].map((chart, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [0.9, 1, 0.9],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity
            }}
            className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-md"
          >
            {React.createElement(chart.icon, {
              className: "w-12 h-12 text-emerald-500 mx-auto"
            })}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function StageFourVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="space-y-3 w-full max-w-xs">
        {/* Report sections animating in */}
        {[
          { title: "Executive Summary", color: "bg-orange-100 dark:bg-orange-900/30" },
          { title: "Key Insights", color: "bg-yellow-100 dark:bg-yellow-900/30" },
          { title: "Recommendations", color: "bg-green-100 dark:bg-green-900/30" }
        ].map((section, i) => (
          <motion.div
            key={i}
            animate={{
              x: [-50, 0],
              opacity: [0, 1]
            }}
            transition={{
              duration: 1,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 3
            }}
            className={`${section.color} rounded-lg p-3`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {section.title}
              </span>
              <Sparkles className="w-4 h-4 text-orange-500" />
            </div>
            <div className="mt-2 space-y-1">
              <div className="h-1.5 bg-slate-300 dark:bg-slate-600 rounded w-full" />
              <div className="h-1.5 bg-slate-300 dark:bg-slate-600 rounded w-3/4" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
