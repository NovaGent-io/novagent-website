"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  Sparkles,
  ChevronRight,
  Zap,
  TrendingUp,
  Clock,
  Award,
  CheckCircle,
  Star,
  Home,
  Target,
  Building2,
  ShoppingCart,
  DollarSign
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Define the skills data with enhanced properties
const skillsData = [
  {
    category: "Sales & Growth",
    color: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-500/10 to-blue-600/10",
    darkBgGradient: "dark:from-cyan-500/20 dark:to-blue-600/20",
    items: [
      { 
        name: "Prospect Hunter", 
        desc: "Intelligent lead generation that fills your pipeline",
        icon: Search,
        stats: "85% qualification rate",
        features: ["AI-powered targeting", "Multi-channel outreach", "Lead enrichment"],
        href: "/capabilities/prospect-hunter"
      },
      { 
        name: "Schedule Coordinator", 
        desc: "Books qualified meetings directly into calendars",
        icon: Calendar,
        stats: "3x booking speed",
        features: ["Smart scheduling", "Timezone handling", "Automated reminders"],
        href: "/capabilities/schedule-coordinator"
      },
      { 
        name: "Smart Outreach Dialer", 
        desc: "AI-powered calls with real-time transcription",
        icon: Phone,
        stats: "40% connection rate",
        features: ["Voice AI", "Live transcription", "Call analytics"],
        href: "/capabilities/smart-outreach-dialer"
      },
      { 
        name: "Visibility & Trust Manager", 
        desc: "SEO optimization and reputation management",
        icon: Shield,
        stats: "2x online visibility",
        features: ["Review automation", "SEO optimization", "Brand monitoring"],
        href: "/capabilities/visibility-trust-manager"
      }
    ]
  },
  {
    category: "Operations & Management",
    color: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-500/10 to-pink-600/10",
    darkBgGradient: "dark:from-purple-500/20 dark:to-pink-600/20",
    items: [
      { 
        name: "Workflow Navigator", 
        desc: "Intelligent project management and task coordination",
        icon: BarChart3,
        stats: "60% faster delivery",
        features: ["Task automation", "Progress tracking", "Team coordination"],
        href: "/capabilities/workflow-navigator"
      },
      { 
        name: "Finance Flow Manager", 
        desc: "Automated financial operations and reporting",
        icon: DollarSign,
        stats: "90% fewer errors",
        features: ["Invoice automation", "Expense tracking", "Financial reporting"],
        href: "/capabilities/finance-flow-manager"
      },
      { 
        name: "Talent Welcome Suite", 
        desc: "Streamlined employee onboarding and training",
        icon: UserPlus,
        stats: "5x faster onboarding",
        features: ["Document automation", "Training workflows", "Progress tracking"],
        href: "/capabilities/talent-welcome-suite"
      },
      { 
        name: "Regulatory Risk Guard", 
        desc: "Proactive compliance monitoring and management",
        icon: Scale,
        stats: "100% audit ready",
        features: ["Policy monitoring", "Risk alerts", "Compliance reporting"],
        href: "/capabilities/regulatory-risk-guard"
      }
    ]
  },
  {
    category: "Customer & Intelligence",
    color: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-500/10 to-teal-600/10",
    darkBgGradient: "dark:from-emerald-500/20 dark:to-teal-600/20",
    items: [
      { 
        name: "Support Concierge", 
        desc: "24/7 intelligent customer support automation",
        icon: HeadphonesIcon,
        stats: "80% resolution rate",
        features: ["Multi-channel support", "Smart routing", "Sentiment analysis"],
        href: "/capabilities/support-concierge"
      },
      { 
        name: "Insight Intelligence", 
        desc: "Advanced data analytics and predictive insights",
        icon: Brain,
        stats: "10x faster insights",
        features: ["Real-time analytics", "Predictive modeling", "Custom dashboards"],
        href: "/capabilities/insight-intelligence"
      },
      { 
        name: "Talent Scout Engine", 
        desc: "AI-powered recruitment and candidate matching",
        icon: Users,
        stats: "70% better matches",
        features: ["Resume screening", "Candidate matching", "Interview scheduling"],
        href: "/capabilities/talent-scout-engine"
      },
      { 
        name: "Legal Logic Hub", 
        desc: "Automated legal document generation and review",
        icon: FileText,
        stats: "95% time saved",
        features: ["Contract generation", "Compliance checks", "Document management"],
        href: "/capabilities/legal-logic-hub"
      }
    ]
  },
  {
    category: "Industry Solutions",
    color: "from-orange-500 to-red-600",
    bgGradient: "from-orange-500/10 to-red-600/10",
    darkBgGradient: "dark:from-orange-500/20 dark:to-red-600/20",
    items: [
      { 
        name: "Property Intelligence", 
        desc: "Real estate operations and lead management",
        icon: Home,
        stats: "45% more closings",
        features: ["MLS integration", "Lead qualification", "Document automation"],
        href: "/capabilities/property-intelligence"
      },
      { 
        name: "CommerceOps Manager", 
        desc: "E-commerce automation and inventory management",
        icon: ShoppingCart,
        stats: "3x revenue growth",
        features: ["Inventory sync", "Order processing", "Customer analytics"],
        href: "/capabilities/commerceops-manager"
      }
    ]
  }
]

export default function NovaSuitePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const categories = ["All", ...skillsData.map(cat => cat.category)]

  const filteredSkills = selectedCategory === "All" 
    ? skillsData 
    : skillsData.filter(cat => cat.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 
                     rounded-full text-sm text-purple-400 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            The NovaCore Suite
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              14+ Agent Skills
            </span>
            <br />
            One Powerful Agent
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            Equip your AI agent with the exact capabilities your business needs. 
            Each skill is a powerful module that can be combined to create your perfect digital workforce.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/pricing">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                View Pricing
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                How It Works
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "14+", label: "Agent Skills", icon: Zap },
              { value: "500+", label: "Businesses Powered", icon: Building2 },
              { value: "10M+", label: "Tasks Automated", icon: TrendingUp },
              { value: "99.9%", label: "Uptime Guaranteed", icon: Award }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-3">
                  <stat.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="relative pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredSkills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="mb-16"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full`} />
                  <h2 className="text-2xl font-bold text-white">{category.category}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -5 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      <Link href={skill.href}>
                        <div className={`
                          relative h-full p-6 rounded-2xl border border-gray-800 
                          bg-gradient-to-b from-gray-900/50 to-gray-900/20 backdrop-blur-sm
                          hover:border-gray-700 transition-all duration-300 group cursor-pointer
                          ${hoveredSkill === skill.name ? 'shadow-2xl shadow-purple-500/10' : ''}
                        `}>
                          {/* Gradient overlay on hover */}
                          <div className={`
                            absolute inset-0 bg-gradient-to-br ${category.bgGradient} ${category.darkBgGradient}
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl
                          `} />

                          <div className="relative z-10">
                            {/* Icon */}
                            <div className={`
                              w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} 
                              flex items-center justify-center mb-4 group-hover:scale-110 transition-transform
                            `}>
                              <skill.icon className="w-6 h-6 text-white" />
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all">
                              {skill.name}
                            </h3>
                            <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                              {skill.desc}
                            </p>

                            {/* Stats */}
                            <div className="flex items-center gap-2 mb-4">
                              <Star className="w-4 h-4 text-yellow-500" />
                              <span className="text-sm font-medium text-white">{skill.stats}</span>
                            </div>

                            {/* Features */}
                            <div className="space-y-2">
                              {skill.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-xs text-gray-300">{feature}</span>
                                </div>
                              ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-purple-400 group-hover:text-purple-300">
                              Learn more
                              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-12 rounded-3xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-3xl blur-xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build Your Custom AI Agent?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Configure your agent with the exact skills your business needs. 
                Start with what you need today and scale as you grow.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/pricing">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    See Pricing & Plans
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-purple-500/50 hover:bg-purple-500/10">
                    Schedule a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
