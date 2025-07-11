'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  MessageSquare, Brain, Zap, CheckCircle,
  HeadphonesIcon, Mail, MessageCircle, Globe,
  TrendingUp, Users, Clock, Star
} from 'lucide-react'
import SkillWorkflow, { WorkflowStage } from '@/components/SkillWorkflow'

const supportConciergeStages: WorkflowStage[] = [
  {
    id: 1,
    title: "Omnichannel Support",
    description: "Capture support requests from all channels - email, chat, phone, and social media - in one unified system.",
    icon: MessageSquare,
    stats: { label: "Response Time", value: "<30s" },
    features: [
      "Email integration",
      "Live chat widget",
      "Social media monitoring",
      "Voice transcription"
    ],
    colorClass: "blue",
    gradientClass: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "AI Understanding",
    description: "Natural language processing understands customer intent, sentiment, and urgency to provide accurate responses.",
    icon: Brain,
    stats: { label: "Understanding Rate", value: "97%" },
    features: [
      "Intent recognition",
      "Sentiment analysis",
      "Context awareness",
      "Multi-language support"
    ],
    colorClass: "purple",
    gradientClass: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Instant Resolution",
    description: "Provide immediate, accurate answers to common questions while intelligently escalating complex issues.",
    icon: Zap,
    stats: { label: "First Contact Resolution", value: "82%" },
    features: [
      "Knowledge base search",
      "Dynamic response generation",
      "Smart escalation rules",
      "Solution suggestions"
    ],
    colorClass: "emerald",
    gradientClass: "from-emerald-500 to-teal-500"
  },
  {
    id: 4,
    title: "Continuous Learning",
    description: "Learn from every interaction to improve responses, update knowledge, and enhance customer satisfaction.",
    icon: CheckCircle,
    stats: { label: "Satisfaction Score", value: "4.8/5" },
    features: [
      "Response optimization",
      "Knowledge updates",
      "Pattern recognition",
      "Performance analytics"
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
  { icon: MessageSquare, metric: "1M+", label: "Tickets Resolved" },
  { icon: Clock, metric: "85%", label: "Time Saved" },
  { icon: Star, metric: "4.8/5", label: "Customer Rating" },
  { icon: TrendingUp, metric: "3x", label: "Efficiency Gain" }
]

export default function SupportConciergeWorkflow() {
  return (
    <SkillWorkflow
      title="How Support Concierge Works"
      subtitle="Transform customer support with AI that understands, responds, and learns from every interaction"
      stages={supportConciergeStages}
      visualizations={visualizations}
      metrics={metrics}
    />
  )
}

// Stage Visualizations
function StageOneVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div className="relative w-48 h-48">
        {/* Central hub */}
        <HeadphonesIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-blue-500" />
        
        {/* Channels orbiting */}
        {[
          { icon: Mail, label: "Email" },
          { icon: MessageCircle, label: "Chat" },
          { icon: Globe, label: "Social" },
          { icon: MessageSquare, label: "SMS" }
        ].map((channel, i) => {
          const angle = i * 90
          const radius = 80
          
          return (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                delay: i * 0.5,
                repeat: Infinity
              }}
              style={{
                top: '50%',
                left: '50%',
                transform: `
                  translateX(-50%) 
                  translateY(-50%) 
                  rotate(${angle}deg) 
                  translateX(${radius}px) 
                  rotate(-${angle}deg)
                `
              }}
            >
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-lg shadow-md flex items-center justify-center">
                {React.createElement(channel.icon, {
                  className: "w-6 h-6 text-blue-600 dark:text-blue-400"
                })}
              </div>
            </motion.div>
          )
        })}
        
        {/* Message flow animation */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            animate={{
              x: [0, -80 * Math.cos((i * 90) * Math.PI / 180)],
              y: [0, -80 * Math.sin((i * 90) * Math.PI / 180)],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              delay: i * 0.5,
              repeat: Infinity
            }}
            style={{
              top: '50%',
              left: '50%'
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

function StageTwoVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Brain className="w-24 h-24 text-purple-500 relative z-10" />
      
      {/* Neural network connections */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity
          }}
          style={{
            top: `${30 + (i % 3) * 20}%`,
            left: `${20 + Math.floor(i / 3) * 60}%`
          }}
        >
          <div className="w-3 h-3 bg-purple-400 dark:bg-purple-600 rounded-full" />
          <motion.div
            className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-purple-400 dark:bg-purple-600 origin-left"
            style={{
              transform: `rotate(${i * 60}deg)`
            }}
            animate={{
              scaleX: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

function StageThreeVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="space-y-3 w-full max-w-xs">
        {/* Response bubbles */}
        {[
          "How can I help?",
          "Here's the solution...",
          "Issue resolved!"
        ].map((text, i) => (
          <motion.div
            key={i}
            animate={{
              x: i % 2 === 0 ? [20, 0] : [-20, 0],
              opacity: [0, 1]
            }}
            transition={{
              duration: 1,
              delay: i * 0.8,
              repeat: Infinity,
              repeatDelay: 2
            }}
            className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`px-4 py-2 rounded-lg text-sm ${
              i % 2 === 0 
                ? 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300' 
                : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
            }`}>
              {text}
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
      <motion.div className="relative">
        <Star className="w-24 h-24 text-yellow-500" />
        
        {/* Performance metrics */}
        <div className="absolute -top-8 -right-8">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
            className="bg-green-100 dark:bg-green-900/30 rounded-lg px-3 py-1 text-xs font-medium text-green-700 dark:text-green-300"
          >
            +15% CSAT
          </motion.div>
        </div>
        
        {/* Learning indicators */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              y: [-20, -40],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              delay: i * 0.6,
              repeat: Infinity
            }}
            style={{
              bottom: 0,
              left: `${30 + i * 20}%`
            }}
          >
            <TrendingUp className="w-4 h-4 text-orange-500" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
