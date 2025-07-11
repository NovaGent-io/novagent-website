"use client"

import React, { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
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
  ChevronLeft,
  ChevronRight,
  Plus
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Skill {
  id: string
  name: string
  description: string
  icon: React.ElementType
  category: string
  gradient: string
}

const skills: Skill[] = [
  // Sales & Growth
  {
    id: "prospect-hunter",
    name: "Prospect Hunter",
    description: "Intelligent lead generation that fills your pipeline",
    icon: Search,
    category: "Sales & Growth",
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    id: "schedule-coordinator",
    name: "Schedule Coordinator",
    description: "Books qualified meetings directly into calendars",
    icon: Calendar,
    category: "Sales & Growth",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    id: "smart-dialer",
    name: "Smart Outreach Dialer",
    description: "AI-powered calls with real-time transcription",
    icon: Phone,
    category: "Sales & Growth",
    gradient: "from-indigo-400 to-purple-500"
  },
  {
    id: "visibility-manager",
    name: "Visibility & Trust Manager",
    description: "SEO optimization and reputation management",
    icon: Shield,
    category: "Sales & Growth",
    gradient: "from-purple-400 to-pink-500"
  },
  // Operations & Management
  {
    id: "workflow-navigator",
    name: "Workflow Navigator",
    description: "Intelligent project management and task coordination",
    icon: BarChart3,
    category: "Operations & Management",
    gradient: "from-violet-400 to-purple-500"
  },
  {
    id: "finance-flow",
    name: "Finance Flow Manager",
    description: "Transaction processing and financial operations",
    icon: TrendingUp,
    category: "Operations & Management",
    gradient: "from-purple-400 to-fuchsia-500"
  },
  {
    id: "talent-welcome",
    name: "Talent Welcome Suite",
    description: "Automated employee onboarding workflows",
    icon: UserPlus,
    category: "Operations & Management",
    gradient: "from-fuchsia-400 to-pink-500"
  },
  {
    id: "regulatory-guard",
    name: "Regulatory Risk Guard",
    description: "Compliance monitoring and management",
    icon: Scale,
    category: "Operations & Management",
    gradient: "from-pink-400 to-rose-500"
  },
  // Support & Intelligence
  {
    id: "support-concierge",
    name: "Support Concierge",
    description: "24/7 intelligent customer support automation",
    icon: HeadphonesIcon,
    category: "Support & Intelligence",
    gradient: "from-emerald-400 to-cyan-500"
  },
  {
    id: "insight-intelligence",
    name: "Insight Intelligence",
    description: "Advanced analytics and reporting capabilities",
    icon: Brain,
    category: "Support & Intelligence",
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    id: "talent-scout",
    name: "Talent Scout Engine",
    description: "Recruitment and hiring automation",
    icon: Users,
    category: "Support & Intelligence",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    id: "legal-logic",
    name: "Legal Logic Hub",
    description: "Document generation and contract management",
    icon: FileText,
    category: "Support & Intelligence",
    gradient: "from-indigo-400 to-purple-500"
  }
]

export default function AgentSkillsModern() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const toggleSkill = (skillId: string) => {
    setSelectedSkills(prev => 
      prev.includes(skillId) 
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    )
  }

  const nextSkill = () => {
    setCurrentIndex((prev) => (prev + 1) % skills.length)
  }

  const prevSkill = () => {
    setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length)
  }

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-slate-950 dark:bg-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950" />
        
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
          animate={{
            x: [0, 50],
            y: [0, 50],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Equip Your Agent with Skills from the</span>{" "}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500">
              NovaCore Suite
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Build your perfect AI assistant by selecting from our comprehensive suite of intelligent capabilities. 
            Each skill is a powerful module that transforms your agent into a specialized expert.
          </p>
        </motion.div>

        {/* 3D Carousel Style Skill Showcase */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Main Display Area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-full max-w-md mx-auto">
                  {/* Skill Card */}
                  <motion.div
                    className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Gradient Orb Behind Card */}
                    <div className={`absolute -inset-20 bg-gradient-to-r ${skills[currentIndex].gradient} opacity-20 blur-3xl`} />
                    
                    {/* Card Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${skills[currentIndex].gradient} mb-6`}>
                        {React.createElement(skills[currentIndex].icon, { className: "w-8 h-8 text-white" })}
                      </div>
                      
                      {/* Category Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-xs text-white/80 mb-4">
                        {skills[currentIndex].category}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {skills[currentIndex].name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-slate-300 mb-6">
                        {skills[currentIndex].description}
                      </p>
                      
                      {/* Add/Remove Button */}
                      <motion.button
                        onClick={() => toggleSkill(skills[currentIndex].id)}
                        className={`
                          w-full py-3 px-6 rounded-xl font-medium transition-all duration-300
                          ${selectedSkills.includes(skills[currentIndex].id)
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                            : 'bg-white/10 text-white hover:bg-white/20'
                          }
                        `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {selectedSkills.includes(skills[currentIndex].id) ? (
                          <span className="flex items-center justify-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            Added to Agent
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <Plus className="w-4 h-4" />
                            Add to Agent
                          </span>
                        )}
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSkill}
              className="absolute left-0 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSkill}
              className="absolute right-0 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Skill Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {skills.map((skill, index) => (
              <button
                key={skill.id}
                onClick={() => setCurrentIndex(index)}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${index === currentIndex ? 'w-8 bg-gradient-to-r from-cyan-400 to-purple-500' : 'w-2 bg-white/30'}
                `}
              />
            ))}
          </div>
        </div>

        {/* Selected Skills Summary */}
        <AnimatePresence>
          {selectedSkills.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Your Agent Configuration ({selectedSkills.length} skills selected)
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSkills.map(skillId => {
                    const skill = skills.find(s => s.id === skillId)!
                    return (
                      <motion.div
                        key={skillId}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm text-white"
                      >
                        {React.createElement(skill.icon, { className: "w-4 h-4" })}
                        {skill.name}
                        <button
                          onClick={() => toggleSkill(skillId)}
                          className="ml-1 hover:text-red-400 transition-colors"
                        >
                          ?
                        </button>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-slate-300 text-sm">
              14 core skills + 2 specialized industry capabilities
            </span>
            <Zap className="w-5 h-5 text-yellow-400" />
          </div>
          
          <Button
            asChild
            size="lg"
            className="group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
          >
            <Link href="/capabilities">
              <span className="flex items-center text-base font-semibold">
                Configure Your Complete Agent
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}