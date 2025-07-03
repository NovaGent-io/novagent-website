"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Target, Users, PhoneCall, Search, Sparkles } from "lucide-react"

interface SkillNode {
  id: string
  name: string
  icon: React.ReactNode
  metric: string
  description: string
  color: string
  position: { x: number; y: number }
}

interface OrbitalSkillsShowcaseProps {
  customSkills?: SkillNode[]
}

export function OrbitalSkillsShowcase({ customSkills }: OrbitalSkillsShowcaseProps = {}) {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(true)

  const defaultSkills: SkillNode[] = [
    {
      id: "prospect",
      name: "Prospect Hunter",
      icon: <Target className="h-8 w-8" />,
      metric: "500+ leads/month",
      description: "AI-powered lead generation that never sleeps",
      color: "from-blue-500 to-cyan-500",
      position: { x: 0, y: -220 }
    },
    {
      id: "schedule",
      name: "Schedule Coordinator",
      icon: <Users className="h-8 w-8" />,
      metric: "80% booking rate",
      description: "Seamless calendar management & booking",
      color: "from-fuchsia-500 to-pink-500",
      position: { x: 220, y: 0 }
    },
    {
      id: "outreach",
      name: "Smart Outreach",
      icon: <PhoneCall className="h-8 w-8" />,
      metric: "3x response rate",
      description: "Personalized voice & text engagement",
      color: "from-cyan-500 to-blue-500",
      position: { x: 0, y: 220 }
    },
    {
      id: "visibility",
      name: "Visibility Manager",
      icon: <Search className="h-8 w-8" />,
      metric: "24/7 monitoring",
      description: "SEO & reputation intelligence",
      color: "from-green-500 to-emerald-500",
      position: { x: -220, y: 0 }
    }
  ]

  const skills = customSkills || defaultSkills

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(prev => !prev)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[700px] flex items-center justify-center">
      {/* Orbital paths - hidden on mobile */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center hidden md:flex"
        animate={{ rotate: isAnimating ? 360 : 0 }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      >
        <div className="absolute w-[400px] md:w-[500px] h-[400px] md:h-[500px] border border-dashed border-purple-500/20 dark:border-purple-400/20 rounded-full" />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center hidden md:flex"
        animate={{ rotate: isAnimating ? -360 : 0 }}
        transition={{ duration: 90, ease: "linear", repeat: Infinity }}
      >
        <div className="absolute w-[600px] md:w-[700px] h-[600px] md:h-[700px] border border-dashed border-purple-500/10 dark:border-purple-400/10 rounded-full" />
      </motion.div>

      {/* Central hub */}
      <motion.div
        className="absolute z-20"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="relative w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-xl" />
          <div className="relative z-10 text-center">
            <Sparkles className="h-8 w-8 md:h-12 md:w-12 text-white mx-auto mb-1 md:mb-2" />
            <div className="text-white font-semibold text-xs md:text-base">Your AI Agent</div>
            <div className="text-purple-200 text-xs md:text-sm">Command Center</div>
          </div>
        </div>
      </motion.div>

      {/* Skill nodes */}
      {skills.map((skill, index) => (
        <motion.div
          key={skill.id}
          className="absolute"
          style={{ 
            x: skill.position.x, 
            y: skill.position.y,
            zIndex: activeSkill === skill.id ? 30 : 10
          }}
          animate={{
            scale: activeSkill === skill.id ? 1.1 : 1,
            x: skill.position.x,
            y: skill.position.y
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div
            className={`
              relative w-36 md:w-48 p-4 md:p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl cursor-pointer
              border-2 transition-all duration-300
              ${activeSkill === skill.id 
                ? 'border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.3)]' 
                : 'border-slate-200 dark:border-slate-700 hover:border-purple-400'
              }
            `}
            onMouseEnter={() => setActiveSkill(skill.id)}
            onMouseLeave={() => setActiveSkill(null)}
          >
            <div className={`text-transparent bg-clip-text bg-gradient-to-r ${skill.color} mb-3`}>
              {skill.icon}
            </div>
            <h3 className="font-semibold text-sm mb-1 text-slate-900 dark:text-white">
              {skill.name}
            </h3>
            <div className="text-purple-600 dark:text-purple-400 text-sm font-medium mb-2">
              {skill.metric}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {skill.description}
            </p>
          </div>
        </motion.div>
      ))}

      {/* Connection beams */}
      {activeSkill && (
        <>
          {skills.map((skill) => (
            <motion.div
              key={`beam-${skill.id}`}
              className="absolute z-5 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeSkill === skill.id ? 0.6 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                width="1000"
                height="1000"
              >
                <line
                  x1="500"
                  y1="500"
                  x2={500 + skill.position.x}
                  y2={500 + skill.position.y}
                  stroke="url(#gradient)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          ))}
        </>
      )}
    </div>
  )
}
