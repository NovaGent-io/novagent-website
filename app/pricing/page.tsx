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
  BarChart,
  Briefcase,
  DollarSign,
  FileText,
  Home,
  Sparkles,
  Server,
  ChevronRight,
  Info,
  X,
  Plus,
  Minus,
  Building2,
  TrendingUp,
  CheckCircle2,
  AlertCircle
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import AnimatedBackground from "@/components/animated-background"
import PricingCard from "@/components/pricing/PricingCard"
import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import TransformSection from "@/components/pricing/TransformSection"
import FAQSection from "@/components/pricing/FAQSection"

// Helper for animations
const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

// For dynamic headline
const dynamicWords = ["Transparent Pricing", "Measurable Outcomes", "Scalable Solutions", "Value-Driven Results"]

export default function PricingPage() {
  const router = useRouter()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [selectedTier, setSelectedTier] = useState("pro")
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [estimatedUsage, setEstimatedUsage] = useState<{[key: string]: number}>({})
  const [showCalculator, setShowCalculator] = useState(false)
  const [showOverageInfo, setShowOverageInfo] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length)
    }, 3000)
    return () => clearInterval(intervalId)
  }, [])

  // Platform Tiers - Based on new pricing model v4
  const platformTiers = [
    {
      id: "starter",
      name: "Starter",
      price: 499,
      monthlyPrice: 499,
      description: "For small teams or businesses focused on solving one core problem area",
      icon: <Zap className="h-8 w-8" />,
      color: "cyan",
      features: [
        { text: "Up to 3 Agent Skills active", highlight: true },
        { text: "5,000 AI Credits per month", highlight: true },
        { text: "Standard Performance Server", highlight: false },
        { text: "Standard Email Support", highlight: false },
        { text: "Basic Analytics Dashboard", highlight: false },
        { text: "99.9% Uptime SLA", highlight: false }
      ],
      maxSkills: 3,
      includedCredits: 5000,
      serverType: "Standard",
      popular: false
    },
    {
      id: "pro",
      name: "Pro",
      price: 999,
      monthlyPrice: 999,
      description: "For teams ready to expand their AI capabilities into new areas",
      icon: <Star className="h-8 w-8" />,
      color: "blue",
      features: [
        { text: "Up to 5 Agent Skills active", highlight: true },
        { text: "10,000 AI Credits per month", highlight: true },
        { text: "Standard Performance Server", highlight: false },
        { text: "Priority Email Support", highlight: false },
        { text: "Advanced Analytics Dashboard", highlight: false },
        { text: "99.9% Uptime SLA", highlight: false }
      ],
      maxSkills: 5,
      includedCredits: 10000,
      serverType: "Standard",
      popular: false
    },
    {
      id: "growth",
      name: "Growth",
      price: 1749,
      monthlyPrice: 1749,
      description: "For growing businesses looking to automate multiple functions",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "purple",
      features: [
        { text: "Up to 8 Agent Skills active", highlight: true },
        { text: "20,000 AI Credits per month", highlight: true },
        { text: "High-Performance Server", highlight: true },
        { text: "Priority Support & Onboarding", highlight: false },
        { text: "Advanced Analytics & ROI", highlight: false },
        { text: "Custom Integrations", highlight: false }
      ],
      maxSkills: 8,
      includedCredits: 20000,
      serverType: "High-Performance",
      popular: true
    },
    {
      id: "scale",
      name: "Scale",
      price: "Custom",
      monthlyPrice: 2500, // Base platform fee
      description: "For larger organizations deploying an AI workforce across the company",
      icon: <Building2 className="h-8 w-8" />,
      color: "fuchsia",
      features: [
        { text: "Unlimited Agent Skills", highlight: true },
        { text: "Custom/Unlimited AI Credits", highlight: true },
        { text: "Dedicated Server Cluster", highlight: true },
        { text: "Dedicated Success Manager", highlight: false },
        { text: "Custom SLAs & Support", highlight: false },
        { text: "White-label Capabilities", highlight: false }
      ],
      maxSkills: "Unlimited",
      includedCredits: "Custom",
      serverType: "Dedicated Cluster",
      popular: false
    }
  ]

  // Agent Skills - From NovaCore Suite
  const agentSkills = [
    {
      id: "prospect-hunter",
      name: "Prospect Hunter",
      category: "Sales & Growth",
      icon: <Search className="h-5 w-5" />,
      description: "AI-powered lead generation and qualification",
      outcome: "Generates 300+ qualified leads per month",
      baseCreditsPerMonth: 2000
    },
    {
      id: "schedule-coordinator",
      name: "Schedule Coordinator",
      category: "Sales & Growth",
      icon: <Calendar className="h-5 w-5" />,
      description: "Books qualified meetings directly into calendars",
      outcome: "Books 50+ meetings per month",
      baseCreditsPerMonth: 1500
    },
    {
      id: "smart-outreach-dialer",
      name: "Smart Outreach Dialer",
      category: "Sales & Growth",
      icon: <Phone className="h-5 w-5" />,
      description: "Places and transcribes outbound calls with AI voice",
      outcome: "1000+ call minutes per month",
      baseCreditsPerMonth: 3000
    },
    {
      id: "support-concierge",
      name: "Support Concierge",
      category: "Support & Operations",
      icon: <Headphones className="h-5 w-5" />,
      description: "Handles up to 80% of Tier 1 support inquiries",
      outcome: "Resolves 100+ tickets per month",
      baseCreditsPerMonth: 2500
    },
    {
      id: "visibility-trust-manager",
      name: "Visibility & Trust Manager",
      category: "Sales & Growth",
      icon: <Star className="h-5 w-5" />,
      description: "SEO content generation and reputation management",
      outcome: "4+ SEO articles per month",
      baseCreditsPerMonth: 4000
    },
    {
      id: "talent-welcome-suite",
      name: "Talent Welcome Suite",
      category: "HR & Compliance",
      icon: <UserCheck className="h-5 w-5" />,
      description: "Automates employee onboarding from start to finish",
      outcome: "Onboards 10+ employees per month",
      baseCreditsPerMonth: 1000
    },
    {
      id: "regulatory-risk-guard",
      name: "Regulatory Risk Guard",
      category: "HR & Compliance",
      icon: <Shield className="h-5 w-5" />,
      description: "Monitors compliance and flags risks",
      outcome: "Tracks 5+ regulations continuously",
      baseCreditsPerMonth: 1500
    },
    {
      id: "talent-scout-engine",
      name: "Talent Scout Engine",
      category: "HR & Compliance",
      icon: <Users className="h-5 w-5" />,
      description: "Sources and screens candidates with AI",
      outcome: "Screens 100+ candidates per month",
      baseCreditsPerMonth: 2000
    },
    {
      id: "insight-intelligence",
      name: "Insight Intelligence",
      category: "Analytics & Intelligence",
      icon: <BarChart className="h-5 w-5" />,
      description: "Transforms data into actionable insights",
      outcome: "10+ reports per month",
      baseCreditsPerMonth: 3000
    },
    {
      id: "workflow-navigator",
      name: "Workflow Navigator",
      category: "Support & Operations",
      icon: <Settings className="h-5 w-5" />,
      description: "Manages projects and tracks progress",
      outcome: "Manages 5+ active projects",
      baseCreditsPerMonth: 1500
    },
    {
      id: "finance-flow-manager",
      name: "Finance Flow Manager",
      category: "Support & Operations",
      icon: <DollarSign className="h-5 w-5" />,
      description: "Automates financial operations",
      outcome: "Processes 100+ transactions per month",
      baseCreditsPerMonth: 2000
    },
    {
      id: "legal-logic-hub",
      name: "Legal Logic Hub",
      category: "Analytics & Intelligence",
      icon: <FileText className="h-5 w-5" />,
      description: "Drafts and manages legal documents",
      outcome: "20+ documents per month",
      baseCreditsPerMonth: 5000
    },
    {
      id: "property-intelligence",
      name: "Property Intelligence Manager",
      category: "Industry Solutions",
      icon: <Home className="h-5 w-5" />,
      description: "Real estate operations automation",
      outcome: "Manages 50+ properties",
      baseCreditsPerMonth: 2500
    },
    {
      id: "commerceops-manager",
      name: "CommerceOps Manager",
      category: "Industry Solutions",
      icon: <Package className="h-5 w-5" />,
      description: "E-commerce operations automation",
      outcome: "Manages 1000+ SKUs",
      baseCreditsPerMonth: 3000
    }
  ]

  // Expert-Designed Kits
  const kits = [
    {
      id: "growth-gtm",
      name: "Growth & GTM Kit",
      description: "Complete sales and marketing automation",
      skills: ["Prospect Hunter", "Schedule Coordinator", "Smart Outreach Dialer", "Visibility & Trust Manager"],
      icon: <Zap className="h-6 w-6" />,
      pricing: {
        starter: 899,
        pro: 1599,
        growth: 2799,
        scale: "Custom"
      }
    },
    {
      id: "hr-compliance",
      name: "HR & Compliance Kit",
      description: "Complete human resources automation",
      skills: ["Talent Welcome Suite", "Regulatory Risk Guard", "Talent Scout Engine", "Workflow Navigator"],
      icon: <Users className="h-6 w-6" />,
      pricing: {
        starter: 999,
        pro: 1799,
        growth: 2999,
        scale: "Custom"
      }
    }
  ]

  // Helper functions
  const canAddMoreSkills = () => {
    const tier = platformTiers.find(t => t.id === selectedTier)
    if (!tier) return false
    if (tier.maxSkills === "Unlimited") return true
    return selectedSkills.length < tier.maxSkills
  }

  const calculateTotalCreditsNeeded = () => {
    return selectedSkills.reduce((total, skillId) => {
      const skill = agentSkills.find(s => s.id === skillId)
      const usage = estimatedUsage[skillId] || 100 // Default to 100% usage
      return total + (skill ? skill.baseCreditsPerMonth * (usage / 100) : 0)
    }, 0)
  }

  const calculateOverageCredits = () => {
    const tier = platformTiers.find(t => t.id === selectedTier)
    if (!tier || tier.includedCredits === "Custom") return 0
    const totalNeeded = calculateTotalCreditsNeeded()
    return Math.max(0, totalNeeded - tier.includedCredits)
  }

  const calculateMonthlyTotal = () => {
    const tier = platformTiers.find(t => t.id === selectedTier)
    if (!tier) return 0
    
    const basePrice = tier.price === "Custom" ? tier.monthlyPrice : tier.price
    const overageCredits = calculateOverageCredits()
    const overageCost = Math.ceil(overageCredits / 1000) * 50 // $50 per 1,000 credits
    
    return basePrice + overageCost
  }

  const toggleSkill = (skillId: string) => {
    if (selectedSkills.includes(skillId)) {
      setSelectedSkills(selectedSkills.filter(id => id !== skillId))
      const newEstimates = { ...estimatedUsage }
      delete newEstimates[skillId]
      setEstimatedUsage(newEstimates)
    } else if (canAddMoreSkills()) {
      setSelectedSkills([...selectedSkills, skillId])
      setEstimatedUsage({ ...estimatedUsage, [skillId]: 100 })
    }
  }

  const updateUsageEstimate = (skillId: string, value: number) => {
    setEstimatedUsage({ ...estimatedUsage, [skillId]: value })
  }

  const headlineText = "One Agent. Infinite Capabilities. "

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-fuchsia-900/20 overflow-hidden">
        <AnimatedBackground />
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gray-900 dark:text-white">{headlineText}</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-600 dark:from-purple-400 dark:to-fuchsia-400"
              >
                {dynamicWords[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Deploy a single, powerful AI agent equipped with the exact skills your business needs. 
            Managed by experts. Powered by the NovaGent Platform. Priced for measurable outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setShowCalculator(true)}
            >
              <Calculator className="mr-2 h-5 w-5" />
              Build Your Solution
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"
              asChild
            >
              <Link href="/contact">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      {/* Act I: Platform Tiers */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Step 1: Choose Your Foundation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Select the platform tier that matches your business scale and support needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {platformTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PricingCard
                  tier={tier}
                  selected={selectedTier === tier.id}
                  onSelect={() => {
                    router.push("/contact")
                  }}
                  index={index}
                />
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* Act II: Interactive Calculator */}
      <AnimatePresence>
        {showCalculator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowCalculator(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute inset-4 md:inset-8 lg:inset-x-[10%] lg:inset-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Calculator Header */}
              <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Build Your Custom AI Solution</h3>
                    <p className="text-purple-100">Configure your agent with the exact skills your business needs</p>
                  </div>
                  <button
                    onClick={() => setShowCalculator(false)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Calculator Body */}
              <div className="flex flex-col lg:flex-row h-[calc(100%-104px)]">
                {/* Left: Skills Selection */}
                <div className="flex-1 overflow-y-auto p-6 lg:border-r border-gray-200 dark:border-slate-800">
                  <div className="max-w-3xl mx-auto">
                    {/* Platform Selection */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Selected Platform</h4>
                      <div className="grid grid-cols-4 gap-3">
                        {platformTiers.map((tier) => (
                          <button
                            key={tier.id}
                            onClick={() => setSelectedTier(tier.id)}
                            className={cn(
                              "p-4 rounded-lg border-2 transition-all",
                              selectedTier === tier.id
                                ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                                : "border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600"
                            )}
                          >
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{tier.name}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {tier.price === "Custom" ? "Custom" : `${tier.price}/mo`}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Skills Selection */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Select Agent Skills</h4>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {selectedSkills.length} / {platformTiers.find(t => t.id === selectedTier)?.maxSkills === "Unlimited" ? "?" : platformTiers.find(t => t.id === selectedTier)?.maxSkills} selected
                        </span>
                      </div>

                      {/* Skills by Category */}
                      {["Sales & Growth", "Support & Operations", "HR & Compliance", "Analytics & Intelligence", "Industry Solutions"].map((category) => (
                        <div key={category} className="mb-8">
                          <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">{category}</h5>
                          <div className="space-y-3">
                            {agentSkills.filter(skill => skill.category === category).map((skill) => {
                              const isSelected = selectedSkills.includes(skill.id)
                              const canAdd = canAddMoreSkills()
                              
                              return (
                                <div
                                  key={skill.id}
                                  className={cn(
                                    "p-4 rounded-lg border transition-all cursor-pointer",
                                    isSelected 
                                      ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20" 
                                      : "border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600",
                                    !isSelected && !canAdd && "opacity-50 cursor-not-allowed"
                                  )}
                                  onClick={() => (isSelected || canAdd) && toggleSkill(skill.id)}
                                >
                                  <div className="flex items-start justify-between">
                                    <div className="flex items-start space-x-3">
                                      <div className={cn(
                                        "p-2 rounded-lg",
                                        isSelected ? "bg-purple-600 text-white" : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400"
                                      )}>
                                        {skill.icon}
                                      </div>
                                      <div className="flex-1">
                                        <h6 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h6>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{skill.description}</p>
                                        <p className="text-xs text-purple-600 dark:text-purple-400 mt-2">{skill.outcome}</p>
                                      </div>
                                    </div>
                                    <button
                                      className={cn(
                                        "p-1 rounded",
                                        isSelected ? "text-purple-600" : "text-gray-400"
                                      )}
                                    >
                                      {isSelected ? <CheckCircle2 className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                                    </button>
                                  </div>

                                  {/* Usage Slider */}
                                  <AnimatePresence>
                                    {isSelected && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700"
                                      >
                                        <div className="flex items-center justify-between mb-2">
                                          <span className="text-sm text-gray-600 dark:text-gray-400">Expected Usage</span>
                                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                                            {estimatedUsage[skill.id] || 100}%
                                          </span>
                                        </div>
                                        <input
                                          type="range"
                                          min="0"
                                          max="200"
                                          value={estimatedUsage[skill.id] || 100}
                                          onChange={(e) => updateUsageEstimate(skill.id, parseInt(e.target.value))}
                                          className="w-full"
                                          onClick={(e) => e.stopPropagation()}
                                        />
                                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                          <span>Light</span>
                                          <span>Normal</span>
                                          <span>Heavy</span>
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Summary */}
                <div className="lg:w-96 p-6 bg-gray-50 dark:bg-slate-800/50">
                  <div className="sticky top-0">
                    <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Configuration Summary</h4>
                    
                    {/* Platform Cost */}
                    <div className="mb-6 p-4 bg-white dark:bg-slate-900 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Platform Tier</span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {platformTiers.find(t => t.id === selectedTier)?.name}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Base Cost</span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          ${platformTiers.find(t => t.id === selectedTier)?.price === "Custom" ? "2,500" : platformTiers.find(t => t.id === selectedTier)?.price}/mo
                        </span>
                      </div>
                    </div>

                    {/* Selected Skills */}
                    {selectedSkills.length > 0 && (
                      <div className="mb-6">
                        <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Selected Skills ({selectedSkills.length})</h5>
                        <div className="space-y-2">
                          {selectedSkills.map(skillId => {
                            const skill = agentSkills.find(s => s.id === skillId)
                            return skill ? (
                              <div key={skillId} className="flex items-center justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">{skill.name}</span>
                                <span className="text-gray-500 dark:text-gray-500">
                                  {(skill.baseCreditsPerMonth * (estimatedUsage[skillId] || 100) / 100).toLocaleString()} credits
                                </span>
                              </div>
                            ) : null
                          })}
                        </div>
                      </div>
                    )}

                    {/* Credits Usage */}
                    <div className="mb-6 p-4 bg-white dark:bg-slate-900 rounded-lg">
                      <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">AI Credits Usage</h5>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Credits Needed</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {calculateTotalCreditsNeeded().toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Credits Included</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {platformTiers.find(t => t.id === selectedTier)?.includedCredits === "Custom" 
                              ? "Custom" 
                              : platformTiers.find(t => t.id === selectedTier)?.includedCredits?.toLocaleString()}
                          </span>
                        </div>
                        {calculateOverageCredits() > 0 && (
                          <>
                            <div className="border-t dark:border-slate-700 pt-2 mt-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">Overage Credits</span>
                                <span className="font-medium text-orange-600 dark:text-orange-400">
                                  {calculateOverageCredits().toLocaleString()}
                                </span>
                              </div>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">Overage Cost</span>
                                <span className="font-medium text-orange-600 dark:text-orange-400">
                                  +${Math.ceil(calculateOverageCredits() / 1000) * 50}/mo
                                </span>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Total Cost */}
                    <div className="p-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-lg text-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-100">Estimated Monthly Total</span>
                        <span className="text-3xl font-bold">${calculateMonthlyTotal().toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-purple-100">Final pricing confirmed during onboarding</p>
                    </div>

                    {/* CTA */}
                    <Button 
                      size="lg"
                      className="w-full mt-6 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900"
                      asChild
                    >
                      <Link href="/contact">
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>

                    {/* Tier Upgrade Prompt */}
                    {!canAddMoreSkills() && selectedTier !== "scale" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800"
                      >
                        <p className="text-sm text-purple-900 dark:text-purple-100">
                          Need more skills? Upgrade to {selectedTier === "starter" ? "Pro" : selectedTier === "pro" ? "Growth" : "Scale"} tier.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transform Your Business Section */}
      <TransformSection />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  )
}
