"use client"

import { Button } from "@/components/ui/button"
import {
  Brain,
  Settings,
  Users,
  Check,
  ArrowRight,
  Calculator,
  Zap,
  Shield,
  Crown,
  Star,
  Calendar,
  Phone,
  Search,
  Headphones,
  Package,
  UserCheck,
  Users as UsersIcon,
  BarChart,
  Briefcase,
  DollarSign,
  FileText,
  Home
} from "lucide-react"
import Link from "next/link"
import AnimatedBackground from "@/components/animated-background"
import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

// Helper for animations
const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

// For dynamic headline
const dynamicWords = ["Transparent Pricing", "Measurable Outcomes", "Scalable Solutions", "Value-Driven Results"]

export default function PricingPage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [selectedTier, setSelectedTier] = useState("Growth")
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [skillTiers, setSkillTiers] = useState<{[key: string]: 'basic' | 'advanced' | 'enterprise'}>({}) 
  const [usageEstimates, setUsageEstimates] = useState<{[key: string]: number}>({})
  const [showCalculator, setShowCalculator] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length)
    }, 3000)
    return () => clearInterval(intervalId)
  }, [])

  // Helper functions
  const canAddMoreSkills = () => {
    const tier = platformTiers.find(t => t.name === selectedTier)
    if (!tier) return false
    if (tier.maxSkills === "Unlimited") return true
    return selectedSkills.length < tier.maxSkills
  }

  const addSkill = (skillName: string) => {
    if (!canAddMoreSkills()) return
    setSelectedSkills([...selectedSkills, skillName])
    setSkillTiers({ ...skillTiers, [skillName]: 'basic' })
  }

  const removeSkill = (skillName: string) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skillName))
    const newTiers = { ...skillTiers }
    delete newTiers[skillName]
    setSkillTiers(newTiers)
    const newEstimates = { ...usageEstimates }
    delete newEstimates[skillName]
    setUsageEstimates(newEstimates)
  }

  const updateSkillTier = (skillName: string, tier: 'basic' | 'advanced' | 'enterprise') => {
    setSkillTiers({ ...skillTiers, [skillName]: tier })
  }

  const updateUsageEstimate = (skillName: string, estimate: number) => {
    setUsageEstimates({ ...usageEstimates, [skillName]: estimate })
  }

  const getSkillsByCategory = () => {
    const grouped: {[key: string]: typeof agentSkills} = {}
    agentSkills.forEach(skill => {
      if (!grouped[skill.category]) {
        grouped[skill.category] = []
      }
      grouped[skill.category].push(skill)
    })
    return grouped
  }

  const calculateTotal = () => {
    const tier = platformTiers.find(t => t.name === selectedTier)
    const platformPrice = tier?.price === "Custom" ? 0 : (tier?.price || 0)
    return platformPrice
  }

  // Platform Tiers - Updated to match new pricing model
  const platformTiers = [
    {
      name: "Starter",
      price: 349,
      maxSkills: 3,
      includedCredits: 5000,
      support: "Standard Email Support",
      serverType: "Standard Performance Server",
      description: "Perfect for small teams getting started with AI automation",
      icon: <Zap className="h-8 w-8" />,
      popular: false,
      features: [
        "Up to 3 Agent Skills",
        "5,000 AI Credits/month",
        "Standard Performance Server",
        "Email Support",
        "Basic Analytics Dashboard",
        "99.9% Uptime SLA"
      ]
    },
    {
      name: "Growth", 
      price: 1749,
      maxSkills: 8,
      includedCredits: 20000,
      support: "Priority Support & Onboarding",
      serverType: "High-Performance Server",
      description: "Ideal for growing businesses ready to scale operations",
      icon: <Settings className="h-8 w-8" />,
      popular: true,
      features: [
        "Up to 8 Agent Skills",
        "20,000 AI Credits/month",
        "High-Performance Server",
        "Priority Support",
        "Advanced Analytics & ROI Tracking",
        "Custom Integrations",
        "Dedicated Onboarding"
      ]
    },
    {
      name: "Scale",
      price: "Custom",
      maxSkills: "Unlimited",
      includedCredits: "Custom",
      support: "Dedicated Success Manager",
      serverType: "Dedicated High-Performance Cluster",
      description: "For large organizations with complex automation needs",
      icon: <Crown className="h-8 w-8" />,
      popular: false,
      features: [
        "Unlimited Agent Skills",
        "Custom AI Credit Pool",
        "Dedicated Server Cluster",
        "Dedicated Success Manager",
        "Custom SLAs & Support",
        "Advanced Security Features",
        "Multi-tenant Options"
      ]
    }
  ]

  // Agent Skills - Updated with new naming from documents
  const agentSkills = [
    { 
      name: "Prospect Hunter", 
      category: "Sales & Growth",
      description: "AI-powered lead generation and qualification",
      metrics: "Generates 300+ qualified leads/month"
    },
    { 
      name: "Schedule Coordinator", 
      category: "Sales & Growth",
      description: "Automates personalized outreach sequences and books qualified meetings",
      metrics: "Books 50+ meetings/month"
    },
    { 
      name: "Smart Outreach Dialer", 
      category: "Sales & Growth",
      description: "Places and transcribes outbound calls with AI voice and real-time memory",
      metrics: "1000+ minutes/month"
    },
    { 
      name: "Visibility & Trust Manager", 
      category: "Sales & Growth",
      description: "Generates optimized content and monitors brand mentions across SERPs",
      metrics: "4+ SEO articles/month"
    },
    { 
      name: "Support Concierge", 
      category: "Support & Intelligence",
      description: "Handles up to 80% of Tier 1 inquiries using RAG-powered responses",
      metrics: "100+ tickets resolved/month"
    },
    { 
      name: "CommerceOps Manager", 
      category: "Operations",
      description: "Monitors SKUs, flags pricing mismatches, and automates product feeds",
      metrics: "1000+ SKUs managed"
    },
    { 
      name: "Talent Welcome Suite", 
      category: "Operations",
      description: "Automates offer letters, form collection, and IT access setup",
      metrics: "10+ hires onboarded/month"
    },
    { 
      name: "Regulatory Risk Guard", 
      category: "Operations",
      description: "Monitors regulations and flags noncompliant processes",
      metrics: "5+ regulations tracked"
    },
    { 
      name: "Talent Scout Engine", 
      category: "Support & Intelligence",
      description: "Parses resumes, ranks candidates, and drafts offer letters",
      metrics: "100+ candidates screened/month"
    },
    { 
      name: "Insight Intelligence", 
      category: "Support & Intelligence",
      description: "Builds reports from structured data with narrative insights",
      metrics: "10+ reports generated/month"
    },
    { 
      name: "Workflow Navigator", 
      category: "Operations",
      description: "Assigns tasks, monitors progress, and flags blockers",
      metrics: "5+ projects managed"
    },
    { 
      name: "Finance Flow Manager", 
      category: "Operations",
      description: "Reconciles transactions and generates invoices automatically",
      metrics: "100+ transactions/month"
    },
    { 
      name: "Legal Logic Hub", 
      category: "Support & Intelligence",
      description: "Drafts, redlines, and tracks contracts using clause libraries",
      metrics: "20+ documents/month"
    },
    { 
      name: "Property Intelligence Manager", 
      category: "Specialized",
      description: "Automates listings, property records, and document prep",
      metrics: "50+ properties managed"
    }
  ]

  // New skills data for the redesigned section
  const skillsData = [
    {
      id: "prospect-hunter",
      name: "Prospect Hunter",
      category: "Sales & Growth",
      icon: <Search className="h-6 w-6" />,
      color: "purple",
      description: "AI-powered lead generation that finds and qualifies your ideal customers 24/7",
      metric: "300+ qualified leads/month",
      features: ["Smart lead scoring", "Multi-source enrichment", "Real-time qualification"]
    },
    {
      id: "schedule-coordinator",
      name: "Schedule Coordinator",
      category: "Sales & Growth",
      icon: <Calendar className="h-6 w-6" />,
      color: "blue",
      description: "Automates outreach sequences and books qualified meetings directly into calendars",
      metric: "50+ meetings booked/month",
      features: ["Smart scheduling", "Follow-up automation", "Calendar sync"]
    },
    {
      id: "smart-outreach-dialer",
      name: "Smart Outreach Dialer",
      category: "Sales & Growth",
      icon: <Phone className="h-6 w-6" />,
      color: "green",
      description: "Places and transcribes outbound calls with AI voice and real-time coaching",
      metric: "1000+ minutes/month",
      features: ["AI voice calls", "Live transcription", "Sentiment analysis"]
    },
    {
      id: "support-concierge",
      name: "Support Concierge",
      category: "Support & Intelligence",
      icon: <Headphones className="h-6 w-6" />,
      color: "teal",
      description: "Handles 80% of Tier 1 inquiries with AI-powered responses and smart routing",
      metric: "100+ tickets resolved/month",
      features: ["24/7 availability", "Smart routing", "Knowledge base AI"]
    },
    {
      id: "commerceops-manager",
      name: "CommerceOps Manager",
      category: "Operations",
      icon: <Package className="h-6 w-6" />,
      color: "orange",
      description: "Monitors inventory, pricing, and automates product feed management",
      metric: "1000+ SKUs managed",
      features: ["Price monitoring", "Inventory alerts", "Feed automation"]
    },
    {
      id: "talent-welcome-suite",
      name: "Talent Welcome Suite",
      category: "Operations",
      icon: <UserCheck className="h-6 w-6" />,
      color: "pink",
      description: "Automates onboarding from offer letters to IT provisioning",
      metric: "10+ hires/month",
      features: ["Document automation", "Task orchestration", "IT integration"]
    },
    {
      id: "regulatory-risk-guard",
      name: "Regulatory Risk Guard",
      category: "Operations",
      icon: <Shield className="h-6 w-6" />,
      color: "red",
      description: "Monitors compliance requirements and flags potential risks",
      metric: "5+ regulations tracked",
      features: ["Real-time monitoring", "Risk alerts", "Audit trails"]
    },
    {
      id: "talent-scout-engine",
      name: "Talent Scout Engine",
      category: "Support & Intelligence",
      icon: <UsersIcon className="h-6 w-6" />,
      color: "indigo",
      description: "Sources, screens, and ranks candidates with AI precision",
      metric: "100+ candidates screened",
      features: ["Resume parsing", "Skills matching", "Automated outreach"]
    },
    {
      id: "insight-intelligence",
      name: "Insight Intelligence",
      category: "Support & Intelligence",
      icon: <BarChart className="h-6 w-6" />,
      color: "cyan",
      description: "Transforms raw data into actionable business intelligence",
      metric: "10+ reports/month",
      features: ["Data analysis", "Trend detection", "Custom dashboards"]
    },
    {
      id: "visibility-trust-manager",
      name: "Visibility & Trust Manager",
      category: "Sales & Growth",
      icon: <Star className="h-6 w-6" />,
      color: "yellow",
      description: "Generates optimized content and monitors brand mentions across SERPs",
      metric: "4+ articles/month",
      features: ["SEO content", "Brand monitoring", "Review management"]
    },
    {
      id: "workflow-navigator",
      name: "Workflow Navigator",
      category: "Operations",
      icon: <Settings className="h-6 w-6" />,
      color: "slate",
      description: "Assigns tasks, monitors progress, and flags blockers",
      metric: "5+ projects managed",
      features: ["Task automation", "Progress tracking", "Blocker alerts"]
    },
    {
      id: "finance-flow-manager",
      name: "Finance Flow Manager",
      category: "Operations",
      icon: <DollarSign className="h-6 w-6" />,
      color: "emerald",
      description: "Reconciles transactions and generates invoices automatically",
      metric: "100+ transactions/month",
      features: ["Auto-reconciliation", "Invoice generation", "Financial reporting"]
    },
    {
      id: "legal-logic-hub",
      name: "Legal Logic Hub",
      category: "Support & Intelligence",
      icon: <FileText className="h-6 w-6" />,
      color: "violet",
      description: "Drafts, redlines, and tracks contracts using clause libraries",
      metric: "20+ documents/month",
      features: ["Contract drafting", "Clause management", "Version tracking"]
    },
    {
      id: "property-intelligence-manager",
      name: "Property Intelligence Manager",
      category: "Specialized",
      icon: <Home className="h-6 w-6" />,
      color: "amber",
      description: "Automates listings, property records, and document prep",
      metric: "50+ properties managed",
      features: ["Listing automation", "Document generation", "MLS sync"]
    }
  ]

  const colorMap: {[key: string]: string} = {
    purple: "bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
    blue: "bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    green: "bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800",
    teal: "bg-teal-100 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-800",
    orange: "bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800",
    pink: "bg-pink-100 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800",
    red: "bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800",
    indigo: "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800",
    cyan: "bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800",
    yellow: "bg-yellow-100 dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800",
    slate: "bg-slate-100 dark:bg-slate-500/20 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800",
    emerald: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
    violet: "bg-violet-100 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-800",
    amber: "bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800"
  }

  // Pre-configured bundles
  const bundles = [
    {
      name: "Sales Accelerator",
      icon: <Zap className="h-6 w-6" />,
      skills: ["Prospect Hunter", "Schedule Coordinator", "Smart Outreach Dialer"],
      description: "Complete sales automation suite for rapid growth",
      savings: "Save 20% vs. individual skills"
    },
    {
      name: "Customer Success Suite",
      icon: <Users className="h-6 w-6" />,
      skills: ["Support Concierge", "Visibility & Trust Manager", "Insight Intelligence"],
      description: "Comprehensive customer experience and analytics",
      savings: "Save 15% vs. individual skills"
    },
    {
      name: "Operations Excellence",
      icon: <Settings className="h-6 w-6" />,
      skills: ["Workflow Navigator", "Finance Flow Manager", "Regulatory Risk Guard"],
      description: "Streamline your entire operational backbone",
      savings: "Save 25% vs. individual skills"
    }
  ]

  const headlineText = "One Agent. Infinite Capabilities. "

  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }),
  }

  return (
    <div className="bg-slate-950 dark:bg-slate-950 bg-white text-gray-100 dark:text-gray-100 text-gray-900 min-h-screen">
      {/* Hero Section - Preserved Design */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-fuchsia-900 dark:from-slate-900 dark:via-purple-900 dark:to-fuchsia-900 from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        <AnimatedBackground />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.05 }}
          >
            {headlineText.split(" ").map((word, index) => (
              <motion.span key={index} variants={wordAnimation} custom={index} className="inline-block mr-2 md:mr-3">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 hover:brightness-125 transition-all duration-200"
                    whileHover={{ y: -3, scale: 1.05, rotate: Math.random() > 0.5 ? 2 : -2 }}
                    style={{ cursor: "default" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400"
              >
                {dynamicWords[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Deploy a single, powerful AI agent custom-configured with the exact skills your business needs. 
            Managed by experts. Powered by the NovaGent Platform. Priced for value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('pricing-tiers')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calculator className="mr-2 h-5 w-5" />
                See Pricing
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-semibold py-3 px-8 rounded-lg transform transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Tiers Section */}
      <section id="pricing-tiers" className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInAnimation} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Choose Your Foundation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Select the platform tier that matches your scale and support needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {platformTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className={`relative p-8 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  tier.popular 
                    ? 'border-purple-500 dark:bg-gradient-to-b dark:from-purple-900/50 dark:to-slate-800/50 bg-gradient-to-b from-purple-50 to-indigo-50 scale-105 shadow-xl' 
                    : 'dark:border-slate-700 border-gray-300 dark:bg-slate-800/50 bg-white shadow-lg dark:hover:border-slate-600 hover:border-gray-400 hover:shadow-xl'
                } ${selectedTier === tier.name ? 'ring-2 ring-cyan-400' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => setSelectedTier(tier.name)}
                style={{ cursor: 'pointer' }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center shadow-md">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className={`inline-flex p-3 rounded-lg mb-4 ${tier.popular ? 'bg-purple-100 dark:bg-purple-500/20' : 'bg-gray-100 dark:bg-slate-700/50'}`}>
                    {React.cloneElement(tier.icon, { 
                      className: `${tier.icon.props.className} ${tier.popular ? 'text-purple-600 dark:text-purple-400' : 'text-blue-600 dark:text-cyan-400'}` 
                    })}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    {tier.price === "Custom" ? (
                      <div>
                        <span className="text-3xl font-bold">Custom</span>
                        <span className="text-gray-500 dark:text-gray-400"> pricing</span>
                      </div>
                    ) : (
                      <div>
                        <span className="text-4xl font-bold">${tier.price}</span>
                        <span className="text-gray-500 dark:text-gray-400">/month</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-700 dark:text-gray-400 text-sm mb-6">{tier.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-800 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white' 
                      : 'bg-gray-800 hover:bg-gray-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white'
                  }`}
                  asChild
                >
                  <Link href={tier.price === "Custom" ? "/contact" : "/contact"}>
                    {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* AI Credits Overage Rate */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 dark:text-gray-400">
              Additional AI Credits: <span className="font-semibold text-blue-600 dark:text-cyan-400">$50 per 1,000 credits</span> ($0.05/credit)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agent Skills Section - Completely Redesigned */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInAnimation} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
              Configure Your Agent's Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose from 14+ modular capabilities to create your perfect AI workforce
            </p>
          </motion.div>

          {/* Interactive Skills Builder - New Design */}
          <div className="max-w-7xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between max-w-3xl mx-auto">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedTier ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' : 'bg-gray-300 dark:bg-slate-700 text-gray-500 dark:text-gray-400'}`}>
                    1
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">Platform Selected</span>
                </div>
                <div className="flex-1 h-1 mx-4 bg-gray-200 dark:bg-slate-700">
                  <div className={`h-full transition-all duration-300 ${selectedSkills.length > 0 ? 'w-full bg-gradient-to-r from-cyan-500 to-purple-600' : 'w-0'}`} />
                </div>
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedSkills.length > 0 ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' : 'bg-gray-300 dark:bg-slate-700 text-gray-500 dark:text-gray-400'}`}>
                    2
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">Skills Configured</span>
                </div>
              </div>
            </div>

            {/* Main Configuration Interface */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Skills Catalog */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Quick Start Templates - Redesigned as Cards */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 dark:from-purple-500/20 dark:to-cyan-500/20 rounded-2xl p-6 border border-purple-500/20 dark:border-purple-500/30"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Start Templates</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { name: "Sales Starter", skills: ["Prospect Hunter", "Schedule Coordinator"], icon: <Zap className="h-5 w-5" />, color: "blue" },
                      { name: "Support Hub", skills: ["Support Concierge", "Insight Intelligence"], icon: <Headphones className="h-5 w-5" />, color: "green" },
                      { name: "HR Essentials", skills: ["Talent Welcome Suite", "Regulatory Risk Guard"], icon: <Users className="h-5 w-5" />, color: "purple" }
                    ].map((template) => (
                      <button
                        key={template.name}
                        onClick={() => {
                          setSelectedSkills(template.skills)
                          template.skills.forEach(skill => {
                            setSkillTiers({ ...skillTiers, [skill]: 'basic' })
                          })
                        }}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                          template.color === 'blue' ? 'border-blue-500 bg-blue-500/10 hover:bg-blue-500/20' :
                          template.color === 'green' ? 'border-green-500 bg-green-500/10 hover:bg-green-500/20' :
                          'border-purple-500 bg-purple-500/10 hover:bg-purple-500/20'
                        }`}
                      >
                        <div className={`inline-flex p-2 rounded-lg mb-2 ${
                          template.color === 'blue' ? 'bg-blue-500/20 text-blue-500' :
                          template.color === 'green' ? 'bg-green-500/20 text-green-500' :
                          'bg-purple-500/20 text-purple-500'
                        }`}>
                          {template.icon}
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{template.name}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{template.skills.length} skills included</p>
                      </button>
                    ))}
                  </div>
                </motion.div>
                
                {/* Skills Grid - Redesigned with Visual Cards */}
                <div className="space-y-8">
                  {Object.entries(getSkillsByCategory()).map(([category, skills], categoryIndex) => (
                    <motion.div 
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIndex * 0.1 }}
                    >
                      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                        <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full mr-3" />
                        {category}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {skills.map((skill, skillIndex) => {
                          const isSelected = selectedSkills.includes(skill.name)
                          const canAdd = canAddMoreSkills()
                          const skillData = skillsData.find(s => s.name === skill.name)
                          
                          return (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: skillIndex * 0.05 }}
                              whileHover={{ scale: 1.02 }}
                              className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                                isSelected 
                                  ? 'border-cyan-500 dark:border-cyan-400 shadow-lg shadow-cyan-500/20' 
                                  : 'border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600'
                              } ${!isSelected && !canAdd ? 'opacity-50' : ''}`}
                            >
                              {/* Background Gradient */}
                              <div className={`absolute inset-0 opacity-5 dark:opacity-10 bg-gradient-to-br ${
                                skillData?.color === 'purple' ? 'from-purple-500 to-purple-600' :
                                skillData?.color === 'blue' ? 'from-blue-500 to-blue-600' :
                                skillData?.color === 'green' ? 'from-green-500 to-green-600' :
                                skillData?.color === 'teal' ? 'from-teal-500 to-teal-600' :
                                skillData?.color === 'orange' ? 'from-orange-500 to-orange-600' :
                                skillData?.color === 'pink' ? 'from-pink-500 to-pink-600' :
                                skillData?.color === 'red' ? 'from-red-500 to-red-600' :
                                skillData?.color === 'indigo' ? 'from-indigo-500 to-indigo-600' :
                                'from-cyan-500 to-cyan-600'
                              }`} />
                              
                              <div className="relative p-6">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                  <div className="flex items-center">
                                    {skillData?.icon && (
                                      <div className={`p-2 rounded-lg mr-3 ${
                                        isSelected ? colorMap[skillData.color || 'cyan'] : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400'
                                      }`}>
                                        {skillData.icon}
                                      </div>
                                    )}
                                    <div>
                                      <h4 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                                    </div>
                                  </div>
                                  <button
                                    onClick={() => isSelected ? removeSkill(skill.name) : addSkill(skill.name)}
                                    disabled={!isSelected && !canAdd}
                                    className={`p-2 rounded-lg transition-all ${
                                      isSelected 
                                        ? 'bg-red-500 text-white hover:bg-red-600' 
                                        : canAdd 
                                          ? 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700' 
                                          : 'bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                                    }`}
                                  >
                                    {isSelected ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                                  </button>
                                </div>
                                
                                {/* Description */}
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                                  {skill.description}
                                </p>
                                
                                {/* Metrics Display */}
                                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-slate-700">
                                  <p className="text-xs text-gray-600 dark:text-gray-400">
                                    {skill.metrics || (skillData?.metric ? skillData.metric : "Optimized for your business needs")}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Dynamic Pricing Summary - Sticky on Desktop */}
              <div className="lg:sticky lg:top-24 h-fit">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 border border-slate-700 shadow-xl"
                >
                  <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                    <Calculator className="h-5 w-5 mr-2 text-cyan-400" />
                    Your Custom Solution
                  </h3>
                
                  {/* Platform Summary - Compact */}
                  <div className="mb-6 p-4 bg-slate-800/50 dark:bg-slate-700/50 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Platform Tier</p>
                        <p className="font-semibold text-white">{selectedTier}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-cyan-400">
                          ${platformTiers.find(t => t.name === selectedTier)?.price}
                        </p>
                        <p className="text-xs text-gray-400">/month</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Progress */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Skills Selected</span>
                      <span className="text-sm font-medium text-white">
                        {selectedSkills.length} / {platformTiers.find(t => t.name === selectedTier)?.maxSkills === "Unlimited" ? '?' : platformTiers.find(t => t.name === selectedTier)?.maxSkills}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-300"
                        style={{ 
                          width: platformTiers.find(t => t.name === selectedTier)?.maxSkills === "Unlimited" 
                            ? `${Math.min(selectedSkills.length * 10, 100)}%` 
                            : `${(selectedSkills.length / (platformTiers.find(t => t.name === selectedTier)?.maxSkills as number)) * 100}%` 
                        }}
                      />
                    </div>
                  </div>

                  {/* Selected Skills List - Compact */}
                  {selectedSkills.length > 0 && (
                    <div className="mb-6 space-y-2">
                      {selectedSkills.map((skillName) => {
                        const skill = agentSkills.find(s => s.name === skillName)
                        const tierKey = skillTiers[skillName] || 'basic'
                        const skillCost = calculateSkillCost(skillName)
                        
                        return (
                          <div key={skillName} className="flex items-center justify-between py-2 px-3 bg-slate-800/50 dark:bg-slate-700/50 rounded-lg">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2" />
                              <span className="text-sm text-white">{skillName}</span>
                            </div>
                            <span className="text-sm font-medium text-cyan-400">
                              ${skillCost.toFixed(0)}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  )}

                  {/* Total Cost - Prominent */}
                  <div className="border-t border-slate-700 pt-6">
                    <div className="flex items-end justify-between mb-6">
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Total Monthly Cost</p>
                        <p className="text-3xl font-bold text-white">
                          ${calculateTotal().toFixed(0)}
                          <span className="text-lg font-normal text-gray-400">/mo</span>
                        </p>
                      </div>
                      {selectedSkills.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full"
                        >
                          <p className="text-xs font-medium text-green-400">Ready to Deploy</p>
                        </motion.div>
                      )}
                    </div>
                    
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl" 
                      asChild
                    >
                      <Link href="/contact">
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center mt-3">
                      Pricing confirmed during onboarding
                    </p>
                  </div>
                </motion.div>

                {/* Tier Upgrade Prompt - Only show when at limit */}
                {!canAddMoreSkills() && selectedTier !== "Scale" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30"
                  >
                    <p className="text-sm font-medium text-white mb-2">
                      ? Need more skills?
                    </p>
                    <p className="text-xs text-gray-300 mb-3">
                      Upgrade to {selectedTier === "Starter" ? "Growth" : "Scale"} for {selectedTier === "Starter" ? "up to 8" : "unlimited"} skills
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-purple-500 text-purple-400 hover:bg-purple-500/20"
                      onClick={() => setSelectedTier(selectedTier === "Starter" ? "Growth" : "Scale")}
                    >
                      Upgrade Tier
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Act III: Vertical Bundles */}
      <section className="py-16 md:py-24 bg-slate-900 dark:bg-slate-900 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInAnimation} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
              Step 3: Expert-Designed Bundles
            </h2>
            <p className="text-lg text-gray-300 dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
              Pre-configured combinations optimized for specific business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-800/50 dark:bg-slate-800/50 bg-white rounded-xl p-8 border border-slate-700 dark:border-slate-700 border-gray-300">
              <h3 className="text-xl font-bold mb-4 text-fuchsia-400">Growth & GTM Bundle</h3>
              <p className="text-gray-300 dark:text-gray-300 text-gray-600 mb-4">Complete sales and marketing automation</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-slate-700/50 dark:bg-slate-700/50 bg-gray-200 p-3 rounded">
                  <div className="text-sm text-gray-400 dark:text-gray-400 text-gray-600">Starter</div>
                  <div className="text-lg font-bold text-cyan-400 dark:text-cyan-400 text-cyan-600">$1,099</div>
                </div>
                <div className="bg-purple-500/20 border border-purple-500 p-3 rounded">
                  <div className="text-sm text-gray-400 dark:text-gray-400 text-gray-600">Professional</div>
                  <div className="text-lg font-bold text-cyan-400 dark:text-cyan-400 text-cyan-600">$2,099</div>
                </div>
                <div className="bg-slate-700/50 dark:bg-slate-700/50 bg-gray-200 p-3 rounded">
                  <div className="text-sm text-gray-400 dark:text-gray-400 text-gray-600">Enterprise</div>
                  <div className="text-lg font-bold text-cyan-400 dark:text-cyan-400 text-cyan-600">$3,999</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 dark:bg-slate-800/50 bg-white rounded-xl p-8 border border-slate-700 dark:border-slate-700 border-gray-300">
              <h3 className="text-xl font-bold mb-4 text-fuchsia-400">HR & Compliance Bundle</h3>
              <p className="text-gray-300 dark:text-gray-300 text-gray-600 mb-4">Complete human resources automation</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-slate-700/50 dark:bg-slate-700/50 bg-gray-200 p-3 rounded">
                  <div className="text-sm text-gray-400 dark:text-gray-400 text-gray-600">Starter</div>
                  <div className="text-lg font-bold text-cyan-400 dark:text-cyan-400 text-cyan-600">$1,299</div>
                </div>
                <div className="bg-purple-500/20 border border-purple-500 p-3 rounded">
                  <div className="text-sm text-gray-400 dark:text-gray-400 text-gray-600">Professional</div>
                  <div className="text-lg font-bold text-cyan-400 dark:text-cyan-400 text-cyan-600">$2,499</div>
                </div>
                <div className="bg-slate-700/50 dark:bg-slate-700/50 bg-gray-200 p-3 rounded">
                  <div className="text-sm text-gray-400 dark:text-gray-400 text-gray-600">Enterprise</div>
                  <div className="text-lg font-bold text-cyan-400 dark:text-cyan-400 text-cyan-600">$4,499</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Event Explanation */}
      <section className="py-16 md:py-24 bg-slate-950 dark:bg-slate-950 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInAnimation} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Understanding Events & Value
            </h2>
            <p className="text-lg text-gray-300 dark:text-gray-300 text-gray-600 max-w-3xl mx-auto">
              What is an "event"? An event is a measurable business outcome. We believe you should pay for results, not just software access.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 dark:bg-slate-800/50 bg-gray-50 rounded-xl p-8 border border-slate-700 dark:border-slate-700 border-gray-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-600 dark:border-slate-600 border-gray-300">
                    <span className="text-gray-300 dark:text-gray-300 text-gray-700">Qualified Lead</span>
                    <span className="text-cyan-400 dark:text-cyan-400 text-cyan-600">$0.40</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-600 dark:border-slate-600 border-gray-300">
                    <span className="text-gray-300 dark:text-gray-300 text-gray-700">Appointment Booked</span>
                    <span className="text-cyan-400 dark:text-cyan-400 text-cyan-600">$0.75</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-600 dark:border-slate-600 border-gray-300">
                    <span className="text-gray-300 dark:text-gray-300 text-gray-700">Support Ticket Resolved</span>
                    <span className="text-cyan-400 dark:text-cyan-400 text-cyan-600">$0.80</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-600 dark:border-slate-600 border-gray-300">
                    <span className="text-gray-300 dark:text-gray-300 text-gray-700">SEO Article Generated</span>
                    <span className="text-cyan-400 dark:text-cyan-400 text-cyan-600">$15.00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-600 dark:border-slate-600 border-gray-300">
                    <span className="text-gray-300 dark:text-gray-300 text-gray-700">Employee Onboarded</span>
                    <span className="text-cyan-400 dark:text-cyan-400 text-cyan-600">$25.00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-600 dark:border-slate-600 border-gray-300">
                    <span className="text-gray-300 dark:text-gray-300 text-gray-700">Legal Document</span>
                    <span className="text-cyan-400 dark:text-cyan-400 text-cyan-600">$75.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-900 dark:bg-slate-900 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInAnimation} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-slate-800/50 dark:bg-slate-800/50 bg-white rounded-lg p-6 border border-slate-700 dark:border-slate-700 border-gray-300">
              <h3 className="text-lg font-semibold mb-3 text-cyan-400">What happens if I go over my included events?</h3>
              <p className="text-gray-300 dark:text-gray-300 text-gray-600">You'll pay a small overage fee based on our value-based pricing. All rates are transparent and designed to maintain positive ROI.</p>
            </div>
            
            <div className="bg-slate-800/50 dark:bg-slate-800/50 bg-white rounded-lg p-6 border border-slate-700 dark:border-slate-700 border-gray-300">
              <h3 className="text-lg font-semibold mb-3 text-cyan-400">Can I add or remove Agent Skills later?</h3>
              <p className="text-gray-300 dark:text-gray-300 text-gray-600">Absolutely. Your agent is modular and can be reconfigured at any time to match your evolving business needs.</p>
            </div>
            
            <div className="bg-slate-800/50 dark:bg-slate-800/50 bg-white rounded-lg p-6 border border-slate-700 dark:border-slate-700 border-gray-300">
              <h3 className="text-lg font-semibold mb-3 text-cyan-400">What's included in the 'fully managed' service?</h3>
              <p className="text-gray-300 dark:text-gray-300 text-gray-600">Everything. Expert setup, continuous monitoring, optimization, reporting, and dedicated support.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-purple-950 to-fuchsia-950 dark:from-slate-900 dark:via-purple-950 dark:to-fuchsia-950 from-blue-100 via-purple-100 to-pink-100">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 {...fadeInAnimation} className="text-3xl md:text-4xl font-bold mb-6 text-gray-100 dark:text-gray-100 text-gray-900">
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 dark:text-gray-300 text-gray-700 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Stop managing tools and start managing outcomes. Let's discuss how your AI agent can drive extraordinary results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-fuchsia-500 via-purple-600 to-cyan-500 hover:from-fuchsia-600 hover:via-purple-700 hover:to-cyan-600 text-white font-bold py-4 px-10 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 text-lg"
              asChild
            >
              <Link href="/contact">
                Book Your Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
