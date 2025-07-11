"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  Search,
  Calendar,
  Phone,
  Shield,
  BarChart3,
  Briefcase,
  UserPlus,
  Scale,
  HeadphonesIcon,
  Brain,
  Users,
  FileText,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const skills = [
  {
    category: "Sales & Growth",
    color: "from-cyan-500 to-blue-600",
    accentColor: "cyan",
    items: [
      { 
        name: "Prospect Hunter", 
        desc: "Intelligent lead generation that fills your pipeline", 
        icon: Search,
        gradient: "from-cyan-400 to-blue-500"
      },
      { 
        name: "Schedule Coordinator", 
        desc: "Books qualified meetings directly into calendars", 
        icon: Calendar,
        gradient: "from-blue-400 to-indigo-500"
      },
      { 
        name: "Smart Outreach Dialer", 
        desc: "AI-powered calls with real-time transcription", 
        icon: Phone,
        gradient: "from-indigo-400 to-purple-500"
      },
      { 
        name: "Visibility & Trust Manager", 
        desc: "SEO optimization and reputation management", 
        icon: Shield,
        gradient: "from-purple-400 to-pink-500"
      }
    ]
  },
  {
    category: "Operations & Management",
    color: "from-purple-500 to-pink-600",
    accentColor: "purple",
    items: [
      { 
        name: "Workflow Navigator", 
        desc: "Intelligent project management and task coordination", 
        icon: BarChart3,
        gradient: "from-purple-400 to-pink-500"
      },
      { 
        name: "Finance Flow Manager", 
        desc: "Transaction processing and financial operations", 
        icon: Briefcase,
        gradient: "from-pink-400 to-rose-500"
      },
      { 
        name: "Talent Welcome Suite", 
        desc: "Automated employee onboarding workflows", 
        icon: UserPlus,
        gradient: "from-rose-400 to-orange-500"
      },
      { 
        name: "Regulatory Risk Guard", 
        desc: "Compliance monitoring and management", 
        icon: Scale,
        gradient: "from-orange-400 to-amber-500"
      }
    ]
  },
  {
    category: "Support & Intelligence",
    color: "from-amber-500 to-orange-600",
    accentColor: "amber",
    items: [
      { 
        name: "Support Concierge", 
        desc: "24/7 intelligent customer support automation", 
        icon: HeadphonesIcon,
        gradient: "from-amber-400 to-orange-500"
      },
      { 
        name: "Insight Intelligence", 
        desc: "Advanced analytics and reporting capabilities", 
        icon: Brain,
        gradient: "from-orange-400 to-red-500"
      },
      { 
        name: "Talent Scout Engine", 
        desc: "Recruitment and hiring automation", 
        icon: Users,
        gradient: "from-red-400 to-pink-500"
      },
      { 
        name: "Legal Logic Hub", 
        desc: "Document generation and contract management", 
        icon: FileText,
        gradient: "from-pink-400 to-purple-500"
      }
    ]
  }
]

export default function AgentSkillsSleek() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)
  const [isDark, setIsDark] = useState(false)
  
  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark')
      setIsDark(isDarkMode)
      console.log('Dark mode check:', isDarkMode, 'Classes:', document.documentElement.className)
    }
    
    checkDarkMode()
    
    // Watch for changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    })
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', checkDarkMode)
    
    return () => {
      observer.disconnect()
      mediaQuery.removeEventListener('change', checkDarkMode)
    }
  }, [])

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Equip Your Agent with Skills from the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
                NovaCore Suite
              </span>
            </h2>
          </motion.div>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
            NovaGent delivers a single, sophisticated AI agent equipped with any combination of Agent Skills you need. 
              These aren't simple task automators; this is a comprehensive AI system, fully managed and continuously 
              optimized by our team to deliver transformative results without the DIY burden.
            </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  className={`h-1 bg-gradient-to-r ${category.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {category.category}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((skill, skillIndex) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="group"
                    >
                      <div className={`
                        relative h-full p-8 rounded-2xl
                        bg-white
                        border border-slate-200
                        hover:bg-slate-50
                        hover:border-slate-300
                        hover:shadow-lg hover:shadow-slate-200/50
                        transition-all duration-300 cursor-pointer
                      `}>
                        {/* Icon container with gradient background */}
                        <div className="mb-6">
                          <motion.div 
                            className={`
                              w-14 h-14 rounded-xl
                              bg-gradient-to-br ${skill.gradient}
                              flex items-center justify-center
                              shadow-lg
                              group-hover:shadow-xl
                              transition-all duration-300
                            `}
                            whileHover={{ scale: 1.05, rotate: 3 }}
                          >
                            <Icon className="w-7 h-7 text-white" />
                          </motion.div>
                        </div>
                        
                        {/* Content */}
                        <h4 className="text-xl font-semibold mb-3 text-gray-900">
                          {skill.name}
                        </h4>
                        <p className="text-sm leading-relaxed text-gray-700">
                          {skill.desc}
                        </p>
                        
                        {/* Bottom accent line */}
                        <motion.div 
                          className={`
                            absolute bottom-0 left-0 right-0 h-1 
                            bg-gradient-to-r ${skill.gradient}
                            origin-left rounded-b-2xl
                          `}
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.div 
            className="flex items-center justify-center gap-6 mb-8 text-sm text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>14 core skills</span>
            </motion.div>
            <div className="w-1 h-1 bg-slate-300 dark:bg-slate-500 rounded-full" />
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>2 specialized industry capabilities</span>
            </motion.div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              size="lg"
              className="
                bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500
                text-white font-semibold
                hover:shadow-xl hover:shadow-purple-500/25
                transition-all duration-300
                border-0
              "
            >
              <Link href="/novasuite" className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Explore the NovaCore Suite
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}