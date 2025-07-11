"use client"

import { useState } from "react"
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
  Building2,
  ShoppingCart,
  Briefcase
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type SkillCategory = "sales" | "operations" | "support"

interface Skill {
  id: string
  name: string
  description: string
  icon: React.ElementType
  category: SkillCategory
  color: string
}

const skills: Skill[] = [
  {
    id: "prospect-hunter",
    name: "Prospect Hunter",
    description: "Intelligent lead generation that fills your pipeline",
    icon: Search,
    category: "sales",
    color: "cyan"
  },
  {
    id: "schedule-coordinator",
    name: "Schedule Coordinator",
    description: "Books qualified meetings directly into calendars",
    icon: Calendar,
    category: "sales",
    color: "cyan"
  },
  {
    id: "smart-dialer",
    name: "Smart Outreach Dialer",
    description: "AI-powered calls with real-time transcription",
    icon: Phone,
    category: "sales",
    color: "cyan"
  },
  {
    id: "visibility-manager",
    name: "Visibility & Trust Manager",
    description: "SEO optimization and reputation management",
    icon: Shield,
    category: "sales",
    color: "cyan"
  },
  {
    id: "workflow-navigator",
    name: "Workflow Navigator",
    description: "Intelligent project management and task coordination",
    icon: BarChart3,
    category: "operations",
    color: "purple"
  },
  {
    id: "finance-flow",
    name: "Finance Flow Manager",
    description: "Transaction processing and financial operations",
    icon: Briefcase,
    category: "operations",
    color: "purple"
  },
  {
    id: "talent-welcome",
    name: "Talent Welcome Suite",
    description: "Automated employee onboarding workflows",
    icon: UserPlus,
    category: "operations",
    color: "purple"
  },
  {
    id: "regulatory-guard",
    name: "Regulatory Risk Guard",
    description: "Compliance monitoring and management",
    icon: Scale,
    category: "operations",
    color: "purple"
  },
  {
    id: "support-concierge",
    name: "Support Concierge",
    description: "24/7 intelligent customer support automation",
    icon: HeadphonesIcon,
    category: "support",
    color: "pink"
  },
  {
    id: "insight-intelligence",
    name: "Insight Intelligence",
    description: "Advanced analytics and reporting capabilities",
    icon: Brain,
    category: "support",
    color: "pink"
  },
  {
    id: "talent-scout",
    name: "Talent Scout Engine",
    description: "Recruitment and hiring automation",
    icon: Users,
    category: "support",
    color: "pink"
  },
  {
    id: "legal-logic",
    name: "Legal Logic Hub",
    description: "Document generation and contract management",
    icon: FileText,
    category: "support",
    color: "pink"
  }
]

const categoryConfig = {
  sales: {
    title: "Sales & Growth",
    icon: TrendingUp,
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-500/10 to-blue-500/10",
    borderColor: "border-cyan-500/30",
    glowColor: "cyan"
  },
  operations: {
    title: "Operations & Management",
    icon: Settings,
    gradient: "from-purple-500 to-fuchsia-500",
    bgGradient: "from-purple-500/10 to-fuchsia-500/10",
    borderColor: "border-purple-500/30",
    glowColor: "purple"
  },
  support: {
    title: "Support & Intelligence",
    icon: Users,
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-500/10 to-rose-500/10",
    borderColor: "border-pink-500/30",
    glowColor: "pink"
  }
}

export default function AgentSkillsRedesigned() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("sales")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const activeSkills = skills.filter(skill => skill.category === activeCategory)
  const config = categoryConfig[activeCategory]

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Background with animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        {/* Animated orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 dark:bg-pink-500/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-slate-900 dark:text-white">Equip Your Agent with Skills from the</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-500">
                NovaCore Suite
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              NovaGent delivers a single, sophisticated AI agent equipped with any combination of Agent Skills you need. 
              These aren't simple task automators; this is a comprehensive AI system, fully managed and continuously 
              optimized by our team to deliver transformative results without the DIY burden.
            </p>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {Object.entries(categoryConfig).map(([key, cat]) => {
            const Icon = cat.icon
            const isActive = activeCategory === key
            
            return (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key as SkillCategory)}
                className={`
                  relative flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300
                  ${isActive 
                    ? 'bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-500 text-white shadow-lg shadow-current/20' 
                    : 'bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700'
                  }
                `}

                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className={isActive ? '' : ''}>{cat.title}</span>
                {isActive && (
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${cat.gradient} opacity-20`}
                    layoutId="activeTab"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>

        {/* Skills Grid with 3D Cards */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {activeSkills.map((skill, index) => {
                const Icon = skill.icon
                const isHovered = hoveredSkill === skill.id
                
                return (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredSkill(skill.id)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="relative"
                  >
                    <motion.div
                      className={`
                        relative p-6 rounded-2xl border backdrop-blur-sm
                        bg-white hover:shadow-2xl transition-all duration-300
                        ${activeCategory === 'sales' ? 'dark:bg-gradient-to-br dark:from-cyan-500/10 dark:to-blue-500/10 border-slate-200 dark:border-cyan-500/30' : ''}
                        ${activeCategory === 'operations' ? 'dark:bg-gradient-to-br dark:from-purple-500/10 dark:to-fuchsia-500/10 border-slate-200 dark:border-purple-500/30' : ''}
                        ${activeCategory === 'support' ? 'dark:bg-gradient-to-br dark:from-pink-500/10 dark:to-rose-500/10 border-slate-200 dark:border-pink-500/30' : ''}
                      `}
                      animate={{
                        y: isHovered ? -5 : 0,
                      }}
                      style={{
                        boxShadow: isHovered 
                          ? `0 20px 40px -15px ${config.glowColor === 'cyan' ? 'rgb(6 182 212 / 0.3)' : config.glowColor === 'purple' ? 'rgb(168 85 247 / 0.3)' : 'rgb(236 72 153 / 0.3)'}`
                          : undefined
                      }}
                    >
                      {/* Skill Icon */}
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${config.gradient} mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {skill.description}
                      </p>

                      {/* Hover Effect Overlay */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${config.gradient} opacity-5`}
                          />
                        )}
                      </AnimatePresence>

                      {/* Corner Accent */}
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${config.gradient} opacity-10 rounded-bl-3xl rounded-tr-2xl`} />
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* Central Agent Core Visualization */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 text-white/50" />
              </motion.div>
              
              {/* Orbiting particles */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${config.gradient}`}
                  style={{
                    top: '50%',
                    left: '50%',
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                >
                  <div className={`w-2 h-2 rounded-full bg-white translate-x-16`} />
                </motion.div>
              ))}
            </div>
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
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-slate-600 dark:text-slate-300 text-sm">
              14 core skills + 2 specialized industry capabilities
            </span>
            <Zap className="w-5 h-5 text-yellow-400" />
          </div>
          
          <Button
            asChild
            size="lg"
            className="group relative overflow-hidden bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:text-white dark:hover:text-white border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/capabilities">
              <span className="relative z-10 flex items-center text-base font-semibold">
                Configure Your Agent
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}