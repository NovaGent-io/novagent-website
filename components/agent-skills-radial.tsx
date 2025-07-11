"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  TrendingUp, 
  Settings, 
  Users, 
  ArrowRight,
  Sparkles,
  Brain,
  Zap,
  Shield,
  BarChart3,
  Phone,
  FileText,
  UserPlus,
  Search,
  Calendar,
  HeadphonesIcon,
  Scale,
  Briefcase,
  Building2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Skill {
  id: string
  name: string
  shortName: string
  description: string
  icon: React.ElementType
  category: string
  color: string
}

const skills: Skill[] = [
  {
    id: "prospect-hunter",
    name: "Prospect Hunter",
    shortName: "Prospect",
    description: "Intelligent lead generation that fills your pipeline",
    icon: Search,
    category: "Sales & Growth",
    color: "#06b6d4" // cyan-500
  },
  {
    id: "schedule-coordinator",
    name: "Schedule Coordinator",
    shortName: "Schedule",
    description: "Books qualified meetings directly into calendars",
    icon: Calendar,
    category: "Sales & Growth",
    color: "#3b82f6" // blue-500
  },
  {
    id: "smart-dialer",
    name: "Smart Outreach Dialer",
    shortName: "Dialer",
    description: "AI-powered calls with real-time transcription",
    icon: Phone,
    category: "Sales & Growth",
    color: "#6366f1" // indigo-500
  },
  {
    id: "visibility-manager",
    name: "Visibility & Trust Manager",
    shortName: "Visibility",
    description: "SEO optimization and reputation management",
    icon: Shield,
    category: "Sales & Growth",
    color: "#8b5cf6" // violet-500
  },
  {
    id: "workflow-navigator",
    name: "Workflow Navigator",
    shortName: "Workflow",
    description: "Intelligent project management and task coordination",
    icon: BarChart3,
    category: "Operations & Management",
    color: "#a855f7" // purple-500
  },
  {
    id: "finance-flow",
    name: "Finance Flow Manager",
    shortName: "Finance",
    description: "Transaction processing and financial operations",
    icon: Briefcase,
    category: "Operations & Management",
    color: "#c026d3" // fuchsia-500
  },
  {
    id: "talent-welcome",
    name: "Talent Welcome Suite",
    shortName: "Onboarding",
    description: "Automated employee onboarding workflows",
    icon: UserPlus,
    category: "Operations & Management",
    color: "#e11d48" // rose-600
  },
  {
    id: "regulatory-guard",
    name: "Regulatory Risk Guard",
    shortName: "Compliance",
    description: "Compliance monitoring and management",
    icon: Scale,
    category: "Operations & Management",
    color: "#dc2626" // red-600
  },
  {
    id: "support-concierge",
    name: "Support Concierge",
    shortName: "Support",
    description: "24/7 intelligent customer support automation",
    icon: HeadphonesIcon,
    category: "Support & Intelligence",
    color: "#ea580c" // orange-600
  },
  {
    id: "insight-intelligence",
    name: "Insight Intelligence",
    shortName: "Analytics",
    description: "Advanced analytics and reporting capabilities",
    icon: Brain,
    category: "Support & Intelligence",
    color: "#f59e0b" // amber-500
  },
  {
    id: "talent-scout",
    name: "Talent Scout Engine",
    shortName: "Recruiting",
    description: "Recruitment and hiring automation",
    icon: Users,
    category: "Support & Intelligence",
    color: "#10b981" // emerald-500
  },
  {
    id: "legal-logic",
    name: "Legal Logic Hub",
    shortName: "Legal",
    description: "Document generation and contract management",
    icon: FileText,
    category: "Support & Intelligence",
    color: "#06b6d4" // cyan-500
  }
]

export default function AgentSkillsRadial() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [selectedSkill, setSelectedSkill] = useState<string | null>(skills[0].id)
  const [activeSkills, setActiveSkills] = useState<string[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const radius = 280 // Radius of the circle
  const centerX = 300
  const centerY = 300

  const toggleSkill = (skillId: string) => {
    setActiveSkills(prev => 
      prev.includes(skillId) 
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    )
  }

  const selectedSkillData = skills.find(s => s.id === selectedSkill)

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-slate-900 dark:text-white">Equip Your Agent with Skills from the</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-500">
              NovaCore Suite
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI capabilities. Click on any skill to learn more and add it to your agent's arsenal.
          </p>
        </motion.div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Radial Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[600px] aspect-square"
          >
            <svg
              viewBox="0 0 600 600"
              className="w-full h-full"
              ref={containerRef}
            >
              {/* Center Agent Core */}
              <motion.g>
                <circle
                  cx={centerX}
                  cy={centerY}
                  r="60"
                  className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-700"
                  strokeWidth="2"
                />
                <motion.circle
                  cx={centerX}
                  cy={centerY}
                  r="60"
                  className="fill-none stroke-purple-500"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: `${centerX}px ${centerY}px` }}
                />
                <text
                  x={centerX}
                  y={centerY - 10}
                  textAnchor="middle"
                  className="fill-slate-900 dark:fill-white text-sm font-bold"
                >
                  AI AGENT
                </text>
                <text
                  x={centerX}
                  y={centerY + 10}
                  textAnchor="middle"
                  className="fill-slate-600 dark:fill-slate-400 text-xs"
                >
                  CORE
                </text>
              </motion.g>

              {/* Skill Nodes */}
              {skills.map((skill, index) => {
                const angle = (index * 360 / skills.length) * Math.PI / 180
                const x = centerX + radius * Math.cos(angle - Math.PI / 2)
                const y = centerY + radius * Math.sin(angle - Math.PI / 2)
                const isActive = activeSkills.includes(skill.id)
                const isSelected = selectedSkill === skill.id
                const Icon = skill.icon

                return (
                  <motion.g
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredSkill(skill.id)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onClick={() => setSelectedSkill(skill.id)}
                    className="cursor-pointer"
                  >
                    {/* Connection Line */}
                    <motion.line
                      x1={centerX}
                      y1={centerY}
                      x2={x}
                      y2={y}
                      stroke={isActive ? skill.color : "#e2e8f0"}
                      strokeWidth={isActive ? "2" : "1"}
                      className="dark:stroke-slate-700"
                      initial={{ pathLength: 0 }}
                      animate={{ 
                        pathLength: 1,
                        stroke: isActive ? skill.color : hoveredSkill === skill.id ? skill.color : "#e2e8f0"
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Skill Circle */}
                    <motion.circle
                      cx={x}
                      cy={y}
                      r="40"
                      fill={isActive ? skill.color : "white"}
                      className={`${!isActive && 'dark:fill-slate-800'} transition-all duration-300`}
                      stroke={isSelected ? skill.color : isActive ? skill.color : "#e2e8f0"}
                      strokeWidth={isSelected ? "4" : "2"}
                      animate={{
                        scale: isSelected ? 1.1 : hoveredSkill === skill.id ? 1.05 : 1,
                      }}
                    />

                    {/* Icon */}
                    <Icon
                      x={x - 12}
                      y={y - 12}
                      width="24"
                      height="24"
                      className={`pointer-events-none ${isActive ? 'text-white' : 'text-slate-600 dark:text-slate-300'}`}
                      fill="currentColor"
                    />

                    {/* Skill Name (on hover) */}
                    <AnimatePresence>
                      {(hoveredSkill === skill.id || isSelected) && (
                        <motion.g
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          <rect
                            x={x - 50}
                            y={y + 50}
                            width="100"
                            height="24"
                            rx="12"
                            fill="rgba(0,0,0,0.8)"
                            className="dark:fill-slate-900"
                          />
                          <text
                            x={x}
                            y={y + 65}
                            textAnchor="middle"
                            className="fill-white text-xs font-medium"
                          >
                            {skill.shortName}
                          </text>
                        </motion.g>
                      )}
                    </AnimatePresence>
                  </motion.g>
                )
              })}
            </svg>
          </motion.div>

          {/* Skill Details Panel */}
          <motion.div
            className="w-full lg:w-96"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {selectedSkillData && (
                <motion.div
                  key={selectedSkillData.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700"
                >
                  {/* Icon and Category */}
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className="p-3 rounded-xl"
                      style={{ backgroundColor: `${selectedSkillData.color}20` }}
                    >
                      {React.createElement(selectedSkillData.icon, { 
                        className: "w-6 h-6",
                        style: { color: selectedSkillData.color }
                      })}
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                      {selectedSkillData.category}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {selectedSkillData.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {selectedSkillData.description}
                  </p>

                  {/* Add/Remove Button */}
                  <motion.button
                    onClick={() => toggleSkill(selectedSkillData.id)}
                    className={`
                      w-full py-3 px-6 rounded-xl font-medium transition-all duration-300
                      ${activeSkills.includes(selectedSkillData.id)
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                      }
                    `}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {activeSkills.includes(selectedSkillData.id) ? (
                      <span className="flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Active in Your Agent
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Zap className="w-4 h-4" />
                        Add to Agent
                      </span>
                    )}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Active Skills Summary */}
            {activeSkills.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20"
              >
                <p className="text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Active Skills: {activeSkills.length}
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeSkills.map(skillId => {
                    const skill = skills.find(s => s.id === skillId)!
                    return (
                      <span
                        key={skillId}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: skill.color }}
                      >
                        {React.createElement(skill.icon, { className: "w-3 h-3" })}
                        {skill.shortName}
                      </span>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="mb-6 flex items-center justify-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            <span className="text-slate-600 dark:text-slate-300 text-sm">
              14 core skills + 2 specialized industry capabilities
            </span>
            <Zap className="w-5 h-5 text-yellow-500" />
          </div>
          
          <Button
            asChild
            size="lg"
            className="group bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:text-white dark:hover:text-white border border-slate-200 dark:border-slate-700 hover:bg-gradient-to-r hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500 hover:border-transparent shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/capabilities">
              <span className="flex items-center text-base font-semibold">
                Configure Your Agent
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}