"use client"

import React, { useState } from "react"
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
  ChevronRight,
  Package,
  Cpu
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const skillsData = {
  "Sales & Growth": [
    { id: "1", name: "Prospect Hunter", desc: "Find and qualify leads automatically", icon: Search, stat: "5x more leads" },
    { id: "2", name: "Schedule Coordinator", desc: "Book meetings directly into calendars", icon: Calendar, stat: "80% less no-shows" },
    { id: "3", name: "Smart Outreach Dialer", desc: "AI calls with live transcription", icon: Phone, stat: "3x connect rate" },
    { id: "4", name: "Visibility Manager", desc: "SEO and reputation management", icon: Shield, stat: "45% more traffic" }
  ],
  "Operations": [
    { id: "5", name: "Workflow Navigator", desc: "Smart project management", icon: BarChart3, stat: "60% time saved" },
    { id: "6", name: "Finance Flow Manager", desc: "Automated financial operations", icon: Briefcase, stat: "99.9% accuracy" },
    { id: "7", name: "Talent Welcome Suite", desc: "Employee onboarding automation", icon: UserPlus, stat: "75% faster" },
    { id: "8", name: "Regulatory Guard", desc: "Compliance monitoring", icon: Scale, stat: "100% compliant" }
  ],
  "Support & Intel": [
    { id: "9", name: "Support Concierge", desc: "24/7 customer support", icon: HeadphonesIcon, stat: "90% resolution" },
    { id: "10", name: "Insight Intelligence", desc: "Advanced analytics", icon: Brain, stat: "10x faster insights" },
    { id: "11", name: "Talent Scout", desc: "Recruitment automation", icon: Users, stat: "50% less time" },
    { id: "12", name: "Legal Logic Hub", desc: "Document automation", icon: FileText, stat: "85% faster" }
  ]
}

export default function AgentSkillsUnique() {
  const [activeView, setActiveView] = useState<"grid" | "flow">("flow")
  const [selectedCategory, setSelectedCategory] = useState("Sales & Growth")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-950 rounded-full mb-6">
            <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-900 dark:text-purple-100">AI-Powered Skills</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-slate-900 dark:text-white">Equip Your Agent with Skills from the</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
              NovaCore Suite
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Transform your AI agent into a powerhouse with our modular skill system. 
            Mix and match capabilities to create your perfect digital workforce.
          </p>

          {/* View Toggle */}
          <div className="inline-flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <button
              onClick={() => setActiveView("flow")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeView === "flow" 
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              Flow View
            </button>
            <button
              onClick={() => setActiveView("grid")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeView === "grid" 
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              Grid View
            </button>
          </div>
        </motion.div>

        {/* Content based on view */}
        <AnimatePresence mode="wait">
          {activeView === "flow" ? (
            <motion.div
              key="flow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-6xl mx-auto"
            >
              {/* Flow View - Visual Pipeline */}
              <div className="relative">
                {/* Central Agent Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="relative w-32 h-32 md:w-40 md:h-40"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50" />
                    <div className="relative w-full h-full bg-white dark:bg-slate-900 rounded-full border-4 border-purple-500 flex items-center justify-center">
                      <div className="text-center">
                        <Package className="w-8 h-8 md:w-10 md:h-10 text-purple-600 dark:text-purple-400 mx-auto mb-1" />
                        <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">AI AGENT</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Skill Categories in Circular Layout */}
                <div className="relative h-[600px] md:h-[700px]">
                  {Object.entries(skillsData).map(([ category, skills ], categoryIndex) => {
                    const angle = (categoryIndex * 120) * Math.PI / 180
                    const radius = 250
                    const x = Math.cos(angle - Math.PI / 2) * radius
                    const y = Math.sin(angle - Math.PI / 2) * radius

                    return (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: categoryIndex * 0.2 }}
                        className="absolute top-1/2 left-1/2"
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                        }}
                      >
                        {/* Category Card */}
                        <div 
                          className={`bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border-2 cursor-pointer transition-all duration-300 ${
                            selectedCategory === category 
                              ? "border-purple-500 scale-105" 
                              : "border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700"
                          }`}
                          onClick={() => setSelectedCategory(category)}
                        >
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{category}</h3>
                          <div className="grid grid-cols-2 gap-2">
                            {skills.slice(0, 4).map((skill) => {
                              const Icon = skill.icon
                              return (
                                <motion.div
                                  key={skill.id}
                                  onHoverStart={() => setHoveredSkill(skill.id)}
                                  onHoverEnd={() => setHoveredSkill(null)}
                                  className={`p-3 rounded-lg bg-slate-50 dark:bg-slate-700 transition-all duration-300 ${
                                    hoveredSkill === skill.id ? "scale-110 bg-purple-100 dark:bg-purple-900" : ""
                                  }`}
                                >
                                  <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                </motion.div>
                              )
                            })}
                          </div>
                        </div>

                        {/* Connection Line */}
                        <svg 
                          className="absolute top-1/2 left-1/2 -z-10" 
                          style={{
                            width: Math.abs(x),
                            height: Math.abs(y),
                            transform: `translate(-${x > 0 ? '100%' : '0%'}, -${y > 0 ? '100%' : '0%'})`
                          }}
                        >
                          <motion.line
                            x1={x > 0 ? "100%" : "0%"}
                            y1={y > 0 ? "100%" : "0%"}
                            x2={x > 0 ? "0%" : "100%"}
                            y2={y > 0 ? "0%" : "100%"}
                            stroke={selectedCategory === category ? "#8b5cf6" : "#e2e8f0"}
                            strokeWidth="2"
                            strokeDasharray="5,5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: categoryIndex * 0.2 }}
                          />
                        </svg>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Selected Category Details */}
                {selectedCategory && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-12 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700"
                  >
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{selectedCategory} Skills</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {skillsData[selectedCategory as keyof typeof skillsData].map((skill) => {
                        const Icon = skill.icon
                        return (
                          <motion.div
                            key={skill.id}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700 hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors"
                          >
                            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-900 dark:text-white">{skill.name}</h4>
                              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{skill.desc}</p>
                              <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mt-2">{skill.stat}</p>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto"
            >
              {/* Grid View - Traditional Layout */}
              {Object.entries(skillsData).map(([category, skills], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-12"
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center">
                      {index === 0 && <TrendingUp className="w-5 h-5 text-white" />}
                      {index === 1 && <Settings className="w-5 h-5 text-white" />}
                      {index === 2 && <Users className="w-5 h-5 text-white" />}
                    </div>
                    {category}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {skills.map((skill) => {
                      const Icon = skill.icon
                      return (
                        <motion.div
                          key={skill.id}
                          whileHover={{ y: -5 }}
                          className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:border-purple-500 transition-all"
                        >
                          <Icon className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-4" />
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{skill.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{skill.desc}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-purple-600 dark:text-purple-400">{skill.stat}</span>
                            <ChevronRight className="w-4 h-4 text-slate-400" />
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white hover:opacity-90"
          >
            <Link href="/capabilities">
              Configure Your Agent
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            <Zap className="inline w-4 h-4 text-yellow-500 mr-1" />
            14 core skills + 2 specialized capabilities
          </p>
        </motion.div>
      </div>
    </section>
  )
}