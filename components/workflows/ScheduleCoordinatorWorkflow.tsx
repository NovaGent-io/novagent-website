'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, Clock, Users, CheckCircle,
  Bell, Link, Zap, TrendingUp, Phone,
  Video, MapPin, Globe
} from 'lucide-react'
import SkillWorkflow, { WorkflowStage } from '@/components/SkillWorkflow'

const scheduleCoordinatorStages: WorkflowStage[] = [
  {
    id: 1,
    title: "Capture Meeting Requests",
    description: "Automatically capture and process meeting requests from multiple channels including email, forms, and direct links.",
    icon: Calendar,
    stats: { label: "Request Sources", value: "10+" },
    features: [
      "Multi-channel capture",
      "Smart request parsing",
      "Priority detection",
      "Context extraction"
    ],
    colorClass: "blue",
    gradientClass: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Intelligent Scheduling",
    description: "AI analyzes availability, preferences, and priorities to find the perfect meeting time for all participants.",
    icon: Clock,
    stats: { label: "Scheduling Accuracy", value: "98%" },
    features: [
      "Calendar conflict resolution",
      "Time zone optimization",
      "Buffer time management",
      "Preference learning"
    ],
    colorClass: "purple",
    gradientClass: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Automated Coordination",
    description: "Handle all the back-and-forth communication, send invites, and manage rescheduling requests automatically.",
    icon: Users,
    stats: { label: "Time Saved", value: "90%" },
    features: [
      "Automated invitations",
      "Smart reminders",
      "Rescheduling handling",
      "Attendee management"
    ],
    colorClass: "emerald",
    gradientClass: "from-emerald-500 to-teal-500"
  },
  {
    id: 4,
    title: "Meeting Optimization",
    description: "Ensure meetings happen on time with pre-meeting prep, reminders, and post-meeting follow-ups.",
    icon: CheckCircle,
    stats: { label: "No-show Reduction", value: "85%" },
    features: [
      "Pre-meeting briefs",
      "Smart notifications",
      "Follow-up automation",
      "Meeting analytics"
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
  { icon: Calendar, metric: "50K+", label: "Meetings Scheduled" },
  { icon: Clock, metric: "2hrs", label: "Saved Per Day" },
  { icon: Users, metric: "95%", label: "Satisfaction Rate" },
  { icon: Zap, metric: "24/7", label: "Always Available" }
]

export default function ScheduleCoordinatorWorkflow() {
  return (
    <SkillWorkflow
      title="How Schedule Coordinator Works"
      subtitle="Transform chaotic calendars into organized schedules with AI-powered meeting coordination"
      stages={scheduleCoordinatorStages}
      visualizations={visualizations}
      metrics={metrics}
    />
  )
}

// Stage Visualizations
function StageOneVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-3 gap-4">
        {[
          { icon: Globe, label: "Web Forms" },
          { icon: Phone, label: "Phone" },
          { icon: Video, label: "Video Calls" }
        ].map((channel, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -10, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity
            }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg p-0.5 mb-2">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center">
                {React.createElement(channel.icon, {
                  className: "w-8 h-8 text-blue-600 dark:text-blue-400"
                })}
              </div>
            </div>
            <span className="text-xs text-slate-600 dark:text-slate-400">{channel.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function StageTwoVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div className="relative w-48 h-48">
        {/* Central calendar */}
        <Calendar className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-purple-500" />
        
        {/* Time slots animating */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded"
            initial={{
              top: '50%',
              left: '50%',
              opacity: 0
            }}
            animate={{
              top: `${20 + (i % 4) * 30}%`,
              left: `${20 + Math.floor(i / 4) * 60}%`,
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

function StageThreeVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="space-y-4">
        {/* Email animations */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [-100, 0, 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 1,
              repeat: Infinity
            }}
            className="flex items-center gap-2"
          >
            <Bell className="w-6 h-6 text-emerald-500" />
            <div className="h-2 w-32 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function StageFourVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
        className="relative"
      >
        <CheckCircle className="w-24 h-24 text-green-500" />
        
        {/* Success metrics floating */}
        {[
          { value: "98%", label: "On-time" },
          { value: "5?", label: "Rating" },
          { value: "0", label: "Conflicts" }
        ].map((metric, i) => (
          <motion.div
            key={i}
            className="absolute text-center"
            style={{
              top: '50%',
              left: '50%',
              transform: `
                translateX(-50%) 
                translateY(-50%) 
                rotate(${i * 120}deg) 
                translateY(-60px) 
                rotate(-${i * 120}deg)
              `
            }}
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity
            }}
          >
            <div className="text-sm font-bold text-orange-600 dark:text-orange-400">{metric.value}</div>
            <div className="text-xs text-slate-600 dark:text-slate-400">{metric.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
