"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { TrendingUp, Settings, Users, ArrowRight, Sparkles, Zap, Brain, Shield, Code, BarChart3, Phone, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Define skill icons mapping
const skillIcons = {
  "Prospect Hunter": Zap,
  "Schedule Coordinator": Phone,
  "Smart Outreach Dialer": Phone,
  "Visibility & Trust Manager": Shield,
  "Workflow Navigator": Code,
  "Finance Flow Manager": BarChart3,
  "Talent Welcome Suite": Users,
  "Regulatory Risk Guard": Shield,
  "Support Concierge": Sparkles,
  "Insight Intelligence": Brain,
  "Talent Scout Engine": Users,
  "Legal Logic Hub": FileText,
}

export default function AgentSolutionsSection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const agentCategories = [
    {
      icon: TrendingUp,
      title: "Sales & Growth",
      skills: [
        { name: "Prospect Hunter", desc: "Intelligent lead generation that fills your pipeline" },
        { name: "Schedule Coordinator", desc: "Books qualified meetings directly into calendars" },
        { name: "Smart Outreach Dialer", desc: "AI-powered calls with real-time transcription" },
        { name: "Visibility & Trust Manager", desc: "SEO optimization and reputation management" },
      ],
      iconColor: "text-cyan-400",
      bgGradient: "from-cyan-500/20 to-blue-500/20",
      borderGradient: "from-cyan-400 to-blue-400",
    },
    {
      icon: Settings,
      title: "Operations & Management",
      skills: [
        { name: "Workflow Navigator", desc: "Intelligent project management and task coordination" },
        { name: "Finance Flow Manager", desc: "Transaction processing and financial operations" },
        { name: "Talent Welcome Suite", desc: "Automated employee onboarding workflows" },
        { name: "Regulatory Risk Guard", desc: "Compliance monitoring and management" },
      ],
      iconColor: "text-purple-400",
      bgGradient: "from-purple-500/20 to-fuchsia-500/20",
      borderGradient: "from-purple-400 to-fuchsia-400",
    },
    {
      icon: Users,
      title: "Support & Intelligence",
      skills: [
        { name: "Support Concierge", desc: "24/7 intelligent customer support automation" },
        { name: "Insight Intelligence", desc: "Advanced analytics and reporting capabilities" },
        { name: "Talent Scout Engine", desc: "Recruitment and hiring automation" },
        { name: "Legal Logic Hub", desc: "Document generation and contract management" },
      ],
      iconColor: "text-pink-400",
      bgGradient: "from-pink-500/20 to-rose-500/20",
      borderGradient: "from-pink-400 to-rose-400",
    },
  ]

  // Auto-rotate categories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % agentCategories.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [agentCategories.length])

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-400/10 dark:from-cyan-400/5 dark:to-blue-400/5 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-purple-400/10 to-fuchsia-400/10 dark:from-purple-400/5 dark:to-fuchsia-400/5 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-pink-400/10 to-rose-400/10 dark:from-pink-400/5 dark:to-rose-400/5 blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-slate-900 dark:text-white">Equip Your Agent with Skills from the </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500">
              NovaCore Suite
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            NovaGent delivers a single, sophisticated AI agent equipped with any combination of Agent Skills you need. 
            These aren't simple task automators; this is a comprehensive AI system, fully managed and continuously 
            optimized by our team to deliver transformative results without the DIY burden.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {agentCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`
                group relative px-6 py-3 rounded-full font-medium transition-all duration-300
                ${activeCategory === index 
                  ? 'text-white dark:text-white' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }
              `}
            >
              {/* Background gradient for active state */}
              <div 
                className={`
                  absolute inset-0 rounded-full transition-all duration-300
                  ${activeCategory === index 
                    ? `bg-gradient-to-r ${category.borderGradient} opacity-100` 
                    : 'opacity-0'
                  }
                `}
              />
              
              {/* Inner content */}
              <div className="relative flex items-center space-x-2">
                <category.icon className={`w-5 h-5 ${activeCategory === index ? 'text-white' : category.iconColor}`} />
                <span>{category.title}</span>
              </div>

              {/* Hover effect */}
              <div 
                className={`
                  absolute inset-0 rounded-full bg-gradient-to-r ${category.borderGradient} 
                  opacity-0 group-hover:opacity-20 transition-opacity duration-300
                `}
              />
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {agentCategories[activeCategory].skills.map((skill, index) => {
                const IconComponent = skillIcons[skill.name] || Sparkles
                
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group relative"
                  >
                    {/* Card Background */}
                    <div className={`
                      absolute inset-0 rounded-2xl bg-gradient-to-br ${agentCategories[activeCategory].bgGradient}
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    `} />
                    
                    {/* Card Border */}
                    <div className={`
                      absolute inset-0 rounded-2xl bg-gradient-to-br ${agentCategories[activeCategory].borderGradient}
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    `}>
                      <div className="absolute inset-[1px] rounded-2xl bg-white dark:bg-slate-900" />
                    </div>

                    {/* Card Content */}
                    <div className="relative p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-transparent transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        {/* Icon */}
                        <div className={`
                          p-3 rounded-xl bg-gradient-to-br ${agentCategories[activeCategory].bgGradient}
                          group-hover:scale-110 transition-transform duration-300
                        `}>
                          <IconComponent className={`w-6 h-6 ${agentCategories[activeCategory].iconColor}`} />
                        </div>
                        
                        {/* Text */}
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {skill.desc}
                          </p>
                        </div>
                      </div>

                      {/* Hover indicator */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: hoveredSkill === skill.name ? "100%" : 0 }}
                        className={`
                          absolute bottom-0 left-0 h-1 rounded-b-2xl
                          bg-gradient-to-r ${agentCategories[activeCategory].borderGradient}
                        `}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="mb-6">
            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              + 2 additional specialized skills for industry-specific needs
            </span>
          </div>
          
          <div className="relative inline-block">
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            
            <Button
              asChild
              size="lg"
              className="relative h-12 px-8 text-base font-semibold bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-gray-100 text-white dark:text-slate-900 hover:shadow-2xl transition-all duration-300 group"
            >
              <Link href="/capabilities">
                <span className="flex items-center">
                  <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Configure Your Agent
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
