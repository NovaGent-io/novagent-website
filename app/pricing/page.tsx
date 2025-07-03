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
  const [selectedTier, setSelectedTier] = useState("Professional")
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

  // Platform Tiers
  const platformTiers = [
    {
      name: "Starter",
      price: 299,
      maxModules: 3,
      support: "Standard Email Support",
      multiplier: "1x",
      includedEvents: 100,
      description: "Perfect for small teams getting started with AI automation",
      icon: <Zap className="h-8 w-8" />,
      popular: false,
    },
    {
      name: "Professional", 
      price: 699,
      maxModules: 5,
      support: "Priority Support",
      multiplier: "1.5x",
      includedEvents: 250,
      description: "Ideal for growing businesses ready to scale operations",
      icon: <Settings className="h-8 w-8" />,
      popular: true,
    },
    {
      name: "Enterprise",
      price: 1499,
      maxModules: "Unlimited",
      support: "Dedicated Success Manager",
      multiplier: "3x",
      includedEvents: 500,
      description: "For large organizations with complex automation needs",
      icon: <Crown className="h-8 w-8" />,
      popular: false,
    }
  ]

  // Agent Skills with complete pricing structure
  const agentSkills = [
    { 
      name: "Prospect Hunter", 
      category: "Sales & Growth", 
      basePrice: 200, 
      description: "Uses multi-source scraping, real-time enrichment, and AI qualification scoring", 
      events: "leads",
      tiers: {
        basic: { price: 200, included: 500, overage: 0.40 },
        advanced: { price: 500, included: 1500, overage: 0.30 },
        enterprise: { price: 1000, included: 5000, overage: 0.20 }
      }
    },
    { 
      name: "Schedule Coordinator", 
      category: "Sales & Growth", 
      basePrice: 150, 
      description: "Automates personalized outreach sequences and books qualified meetings", 
      events: "sequences",
      tiers: {
        basic: { price: 150, included: 200, overage: 0.75 },
        advanced: { price: 400, included: 800, overage: 0.50 },
        enterprise: { price: 900, included: 2500, overage: 0.35 }
      }
    },
    { 
      name: "Smart Outreach Dialer", 
      category: "Sales & Growth", 
      basePrice: 300, 
      description: "Places and transcribes outbound calls with AI voice and real-time memory", 
      events: "minutes",
      tiers: {
        basic: { price: 300, included: 1000, overage: 0.25 },
        advanced: { price: 600, included: 3000, overage: 0.20 },
        enterprise: { price: 1200, included: 9000, overage: 0.15 }
      }
    },
    { 
      name: "Visibility & Trust Manager", 
      category: "Sales & Growth", 
      basePrice: 400, 
      description: "Generates optimized content and monitors brand mentions across SERPs", 
      events: "articles",
      tiers: {
        basic: { price: 400, included: 4, overage: 15.00 },
        advanced: { price: 800, included: 10, overage: 12.00 },
        enterprise: { price: 1500, included: 25, overage: 10.00 }
      }
    },
    { 
      name: "Support Concierge", 
      category: "Support & Intelligence", 
      basePrice: 250, 
      description: "Handles up to 80% of Tier 1 inquiries using RAG-powered responses", 
      events: "resolutions",
      tiers: {
        basic: { price: 250, included: 100, overage: 0.80 },
        advanced: { price: 600, included: 300, overage: 0.60 },
        enterprise: { price: 1200, included: 1000, overage: 0.40 }
      }
    },
    { 
      name: "CommerceOps Manager", 
      category: "Operations", 
      basePrice: 500, 
      description: "Monitors SKUs, flags pricing mismatches, and automates product feeds", 
      events: "SKUs",
      tiers: {
        basic: { price: 500, included: 1000, overage: 0.50 },
        advanced: { price: 1000, included: 5000, overage: 0.30 },
        enterprise: { price: 2000, included: "Unlimited", overage: 0 }
      }
    },
    { 
      name: "Talent Welcome Suite", 
      category: "Operations", 
      basePrice: 300, 
      description: "Automates offer letters, form collection, and IT access setup", 
      events: "hires",
      tiers: {
        basic: { price: 300, included: 10, overage: 25.00 },
        advanced: { price: 500, included: 25, overage: 20.00 },
        enterprise: { price: 800, included: 75, overage: 15.00 }
      }
    },
    { 
      name: "Regulatory Risk Guard", 
      category: "Operations", 
      basePrice: 400, 
      description: "Monitors regulations and flags noncompliant processes", 
      events: "regulations",
      tiers: {
        basic: { price: 400, included: 5, overage: 2.00 },
        advanced: { price: 800, included: 15, overage: 1.50 },
        enterprise: { price: 1500, included: "Unlimited", overage: 0 }
      }
    },
    { 
      name: "Talent Scout Engine", 
      category: "Support & Intelligence", 
      basePrice: 600, 
      description: "Parses resumes, ranks candidates, and drafts offer letters", 
      events: "candidates",
      tiers: {
        basic: { price: 600, included: 10, overage: 50.00 },
        advanced: { price: 1200, included: 30, overage: 40.00 },
        enterprise: { price: 2500, included: 100, overage: 30.00 }
      }
    },
    { 
      name: "Insight Intelligence", 
      category: "Support & Intelligence", 
      basePrice: 400, 
      description: "Builds reports from structured data with narrative insights", 
      events: "reports",
      tiers: {
        basic: { price: 400, included: 10, overage: 25.00 },
        advanced: { price: 800, included: 30, overage: 20.00 },
        enterprise: { price: 1500, included: "Unlimited", overage: 0 }
      }
    },
    { 
      name: "Workflow Navigator", 
      category: "Operations", 
      basePrice: 350, 
      description: "Assigns tasks, monitors progress, and flags blockers", 
      events: "projects",
      tiers: {
        basic: { price: 350, included: 5, overage: 25.00 },
        advanced: { price: 700, included: 15, overage: 20.00 },
        enterprise: { price: 1200, included: "Unlimited", overage: 0 }
      }
    },
    { 
      name: "Finance Flow Manager", 
      category: "Operations", 
      basePrice: 500, 
      description: "Reconciles transactions and generates invoices automatically", 
      events: "transactions",
      tiers: {
        basic: { price: 500, included: 100, overage: 2.00 },
        advanced: { price: 1000, included: 300, overage: 1.50 },
        enterprise: { price: 2000, included: "Unlimited", overage: 0 }
      }
    },
    { 
      name: "Legal Logic Hub", 
      category: "Support & Intelligence", 
      basePrice: 800, 
      description: "Drafts, redlines, and tracks contracts using clause libraries", 
      events: "documents",
      tiers: {
        basic: { price: 800, included: 20, overage: 75.00 },
        advanced: { price: 1500, included: 60, overage: 60.00 },
        enterprise: { price: 3000, included: "Unlimited", overage: 0 }
      }
    },
    { 
      name: "Property Intelligence Manager", 
      category: "Specialized", 
      basePrice: 600, 
      description: "Automates listings, property records, and document prep", 
      events: "properties",
      tiers: {
        basic: { price: 600, included: 50, overage: 10.00 },
        advanced: { price: 1200, included: 150, overage: 8.00 },
        enterprise: { price: 2500, included: "Unlimited", overage: 0 }
      }
    }
  ]

  // Vertical Bundles
  const verticalBundles = [
    {
      name: "Growth & GTM Bundle",
      skills: ["Prospect Hunter", "Schedule Coordinator", "Smart Outreach Dialer", "Visibility & Trust Manager"],
      starter: { price: 1099, events: 2500 },
      professional: { price: 2099, events: 6000 },
      enterprise: { price: 3999, events: "Unlimited" },
      description: "Complete sales and marketing automation suite"
    },
    {
      name: "Enterprise Ops Bundle", 
      skills: ["Finance Flow Manager", "Insight Intelligence", "Workflow Navigator", "Support Concierge"],
      starter: { price: 1299, events: 2500 },
      professional: { price: 2499, events: 6000 },
      enterprise: { price: 4499, events: "Unlimited" },
      description: "Comprehensive operational automation"
    },
    {
      name: "HR & Compliance Bundle",
      skills: ["Talent Welcome Suite", "Regulatory Risk Guard", "Talent Scout Engine", "Workflow Navigator"], 
      starter: { price: 1299, events: 3000 },
      professional: { price: 2499, events: 7000 },
      enterprise: { price: 4499, events: "Unlimited" },
      description: "Complete human resources automation"
    }
  ]

  // Helper functions for calculator
  const addSkill = (skillName: string) => {
    const currentTier = platformTiers.find(t => t.name === selectedTier)
    const maxSkills = currentTier?.maxModules
    
    if (!selectedSkills.includes(skillName)) {
      if (maxSkills === "Unlimited" || selectedSkills.length < maxSkills) {
        setSelectedSkills([...selectedSkills, skillName])
        setSkillTiers({...skillTiers, [skillName]: 'basic'})
        setUsageEstimates({...usageEstimates, [skillName]: 0})
      }
    }
  }

  const canAddMoreSkills = () => {
    const currentTier = platformTiers.find(t => t.name === selectedTier)
    const maxSkills = currentTier?.maxModules
    return maxSkills === "Unlimited" || selectedSkills.length < maxSkills
  }

  const removeSkill = (skillName: string) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skillName))
    const newSkillTiers = {...skillTiers}
    const newUsageEstimates = {...usageEstimates}
    delete newSkillTiers[skillName]
    delete newUsageEstimates[skillName]
    setSkillTiers(newSkillTiers)
    setUsageEstimates(newUsageEstimates)
  }

  const updateSkillTier = (skillName: string, tier: 'basic' | 'advanced' | 'enterprise') => {
    setSkillTiers({...skillTiers, [skillName]: tier})
  }

  const updateUsageEstimate = (skillName: string, usage: number) => {
    setUsageEstimates({...usageEstimates, [skillName]: usage})
  }

  const calculateSkillCost = (skillName: string) => {
    const skill = agentSkills.find(s => s.name === skillName)
    if (!skill) return 0
    
    const tierKey = skillTiers[skillName] || 'basic'
    const tierData = skill.tiers[tierKey]
    const usage = usageEstimates[skillName] || 0
    
    let overageCost = 0
    if (tierData.included !== "Unlimited" && usage > tierData.included) {
      overageCost = (usage - tierData.included) * tierData.overage
    }
    
    return tierData.price + overageCost
  }

  const calculateTotal = () => {
    const tierPrice = platformTiers.find(t => t.name === selectedTier)?.price || 0
    const skillsPrice = selectedSkills.reduce((total, skillName) => {
      return total + calculateSkillCost(skillName)
    }, 0)
    return tierPrice + skillsPrice
  }

  const getTotalOverages = () => {
    return selectedSkills.reduce((total, skillName) => {
      const skill = agentSkills.find(s => s.name === skillName)
      if (!skill) return total
      
      const tierKey = skillTiers[skillName] || 'basic'
      const tierData = skill.tiers[tierKey]
      const usage = usageEstimates[skillName] || 0
      
      if (tierData.included !== "Unlimited" && usage > tierData.included) {
        return total + (usage - tierData.included) * tierData.overage
      }
      return total
    }, 0)
  }

  const getSkillsByCategory = () => {
    const categories = agentSkills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = []
      acc[skill.category].push(skill)
      return acc
    }, {} as {[key: string]: typeof agentSkills})
    return categories
  }

  const headlineText = "NovaGent: "

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
            className="text-lg md:text-xl text-gray-300 dark:text-gray-300 text-gray-700 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Transparent pricing for measurable business outcomes. Build your custom AI agent with any combination of skills from the NovaCore Suite ? priced for the value they create.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calculator className="mr-2 h-5 w-5" />
              Build Your Solution
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Act I: Platform Tiers */}
      <section className="py-16 md:py-24 bg-slate-900 dark:bg-slate-900 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInAnimation} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Step 1: Choose Your Foundation
            </h2>
            <p className="text-lg text-gray-300 dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
              Select the platform tier that matches your scale and support needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {platformTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className={`relative p-8 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  tier.popular 
                    ? 'border-purple-500 bg-gradient-to-b from-purple-900/50 to-slate-800/50 dark:from-purple-900/50 dark:to-slate-800/50 from-purple-50 to-blue-50 scale-105' 
                    : 'border-slate-700 dark:border-slate-700 border-gray-300 bg-slate-800/50 dark:bg-slate-800/50 bg-white shadow-lg hover:border-slate-600 dark:hover:border-slate-600 hover:border-gray-400 hover:shadow-xl'
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
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className={`inline-flex p-3 rounded-lg mb-4 ${tier.popular ? 'bg-purple-500/20' : 'bg-slate-700/50 dark:bg-slate-700/50 bg-gray-100'}`}>
                    {React.cloneElement(tier.icon, { 
                      className: `${tier.icon.props.className} ${tier.popular ? 'text-purple-400' : 'text-cyan-400'}` 
                    })}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">${tier.price}</span>
                    <span className="text-gray-400 dark:text-gray-400 text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-400 dark:text-gray-400 text-gray-600 text-sm mb-6">{tier.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-sm text-gray-700 dark:text-white">Max {tier.maxModules} Agent Skills</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-sm text-gray-700 dark:text-white">{tier.support}</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-sm text-gray-700 dark:text-white">{tier.includedEvents} events per skill</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-sm text-gray-700 dark:text-white">{tier.multiplier} usage multiplier</span>
                  </div>
                </div>

                <Button 
                  className={`w-full ${
                    selectedTier === tier.name 
                      ? 'bg-cyan-500 hover:bg-cyan-600' 
                      : tier.popular 
                        ? 'bg-purple-500 hover:bg-purple-600' 
                        : 'bg-slate-600 hover:bg-slate-700'
                  }`}
                  onClick={() => setSelectedTier(tier.name)}
                >
                  {selectedTier === tier.name ? 'Selected' : 'Select Plan'}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Act II: Interactive Calculator */}
      <section id="calculator" className="py-16 md:py-24 bg-slate-950 dark:bg-slate-950 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInAnimation} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
              Step 2: Build Your AI Agent
            </h2>
            <p className="text-lg text-gray-300 dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
              Select the Agent Skills you need and see your investment in real-time
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Panel - Skills Selection */}
              <div className="bg-slate-800/50 dark:bg-slate-800/50 bg-gray-50 rounded-xl p-6 border border-slate-700 dark:border-slate-700 border-gray-300">
                <h3 className="text-xl font-bold mb-6 text-cyan-400">Select Agent Skills</h3>
                
                {/* Quick Start Templates */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-300 dark:text-gray-300 text-gray-700 mb-3">Quick Start:</h4>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => {
                        setSelectedSkills(["Prospect Hunter", "Schedule Coordinator"])
                        setSkillTiers({"Prospect Hunter": "basic", "Schedule Coordinator": "basic"})
                        setUsageEstimates({"Prospect Hunter": 300, "Schedule Coordinator": 150})
                      }}
                      className="px-3 py-1 text-xs bg-blue-500/20 border border-blue-500 text-blue-400 rounded hover:bg-blue-500/30 transition-all"
                    >
                      Sales Starter
                    </button>
                    <button
                      onClick={() => {
                        setSelectedSkills(["Support Concierge", "Insight Intelligence"])
                        setSkillTiers({"Support Concierge": "basic", "Insight Intelligence": "basic"})
                        setUsageEstimates({"Support Concierge": 80, "Insight Intelligence": 5})
                      }}
                      className="px-3 py-1 text-xs bg-green-500/20 border border-green-500 text-green-400 rounded hover:bg-green-500/30 transition-all"
                    >
                      Support & Analytics
                    </button>
                    <button
                      onClick={() => {
                        setSelectedSkills(["Talent Welcome Suite", "Regulatory Risk Guard"])
                        setSkillTiers({"Talent Welcome Suite": "basic", "Regulatory Risk Guard": "basic"})
                        setUsageEstimates({"Talent Welcome Suite": 5, "Regulatory Risk Guard": 3})
                      }}
                      className="px-3 py-1 text-xs bg-purple-500/20 border border-purple-500 text-purple-400 rounded hover:bg-purple-500/30 transition-all"
                    >
                      HR Basics
                    </button>
                    <button
                      onClick={() => {
                        setSelectedSkills([])
                        setSkillTiers({})
                        setUsageEstimates({})
                      }}
                      className="px-3 py-1 text-xs bg-gray-500/20 border border-gray-500 text-gray-400 rounded hover:bg-gray-500/30 transition-all"
                    >
                      Clear All
                    </button>
                  </div>
                </div>
                
                {/* Tier Limit Warning */}
                {!canAddMoreSkills() && (
                  <div className="mb-6 p-4 bg-yellow-500/20 border border-yellow-500 rounded-lg">
                    <p className="text-yellow-400 text-sm mb-2">
                      <strong>Skill Limit Reached:</strong> Your {selectedTier} tier allows up to {platformTiers.find(t => t.name === selectedTier)?.maxModules} skills.
                    </p>
                    <p className="text-yellow-300 text-xs">
                      Upgrade to {selectedTier === "Starter" ? "Professional" : "Enterprise"} for {selectedTier === "Starter" ? "5 skills" : "unlimited skills"}.
                    </p>
                  </div>
                )}
                
                {Object.entries(getSkillsByCategory()).map(([category, skills]) => (
                  <div key={category} className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-purple-400">{category}</h4>
                    <div className="space-y-3">
                      {skills.map((skill) => {
                        const isSelected = selectedSkills.includes(skill.name)
                        const tierKey = skillTiers[skill.name] || 'basic'
                        const tierData = skill.tiers[tierKey]
                        
                        return (
                          <div key={skill.name} className={`p-4 rounded-lg border transition-all duration-200 ${
                            isSelected 
                              ? 'border-cyan-500 bg-cyan-500/10' 
                              : 'border-slate-600 dark:border-slate-600 border-gray-300 bg-slate-700/30 dark:bg-slate-700/30 bg-gray-100 hover:border-slate-500 dark:hover:border-slate-500 hover:border-gray-400'
                          }`}>
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex-1">
                                <div className="flex items-center mb-1">
                                  <h5 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h5>
                                  <span className="ml-2 text-sm text-cyan-400">${tierData.price}/mo</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{skill.description}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  Includes {tierData.included === "Unlimited" ? "unlimited" : tierData.included} {skill.events}
                                  {tierData.overage > 0 && ` ? ${tierData.overage}/${skill.events.slice(0, -1)} overage`}
                                </p>
                              </div>
                              <Button
                                size="sm"
                                variant={isSelected ? "destructive" : "default"}
                                onClick={() => isSelected ? removeSkill(skill.name) : addSkill(skill.name)}
                                disabled={!isSelected && !canAddMoreSkills()}
                                className={isSelected ? "bg-red-600 hover:bg-red-700" : "bg-cyan-600 hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed"}
                              >
                                {isSelected ? "Remove" : !canAddMoreSkills() ? "Tier Limit" : "Add"}
                              </Button>
                            </div>
                            
                            {isSelected && (
                              <div className="mt-3 pt-3 border-t border-slate-600 dark:border-slate-600 border-gray-300 space-y-3">
                                {/* Tier Selection */}
                                <div>
                                  <label className="text-sm font-medium text-gray-300 dark:text-gray-300 text-gray-700 mb-2 block">
                                    Service Tier
                                  </label>
                                  <div className="grid grid-cols-3 gap-2">
                                    {(['basic', 'advanced', 'enterprise'] as const).map((tier) => (
                                      <button
                                        key={tier}
                                        onClick={() => updateSkillTier(skill.name, tier)}
                                        className={`p-2 text-xs rounded border transition-all ${
                                          tierKey === tier
                                            ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                                            : 'border-slate-600 dark:border-slate-600 border-gray-300 text-gray-400 dark:text-gray-400 text-gray-600 hover:border-slate-500 dark:hover:border-slate-500 hover:border-gray-400'
                                        }`}
                                      >
                                        <div className="capitalize font-medium">{tier}</div>
                                        <div>${skill.tiers[tier].price}</div>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                                
                                {/* Usage Estimation */}
                                <div>
                                  <label className="text-sm font-medium text-gray-300 dark:text-gray-300 text-gray-700 mb-2 block">
                                    Estimated Monthly {skill.events.charAt(0).toUpperCase() + skill.events.slice(1)}
                                  </label>
                                  <input
                                    type="number"
                                    min="0"
                                    value={usageEstimates[skill.name] || 0}
                                    onChange={(e) => updateUsageEstimate(skill.name, parseInt(e.target.value) || 0)}
                                    className="w-full p-2 rounded border border-slate-600 dark:border-slate-600 border-gray-300 bg-slate-700 dark:bg-slate-700 bg-white text-gray-900 dark:text-white focus:border-cyan-500 focus:outline-none"
                                    placeholder="0"
                                  />
                                  {tierData.included !== "Unlimited" && usageEstimates[skill.name] > tierData.included && (
                                    <p className="text-xs text-yellow-400 mt-1">
                                      Overage: {usageEstimates[skill.name] - tierData.included} ? ${tierData.overage} = ${((usageEstimates[skill.name] - tierData.included) * tierData.overage).toFixed(2)}
                                    </p>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Panel - Cost Summary */}
              <div className="bg-slate-800/50 dark:bg-slate-800/50 bg-gray-50 rounded-xl p-6 border border-slate-700 dark:border-slate-700 border-gray-300">
                <h3 className="text-xl font-bold mb-6 text-cyan-400">Your Custom Solution</h3>
                
                {/* Platform Tier Summary */}
                <div className="mb-6 p-4 bg-slate-700/50 dark:bg-slate-700/50 bg-gray-200 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">{selectedTier} Platform</span>
                    <span className="text-cyan-400">${platformTiers.find(t => t.name === selectedTier)?.price}/mo</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Max {platformTiers.find(t => t.name === selectedTier)?.maxModules} skills ? {platformTiers.find(t => t.name === selectedTier)?.support}
                  </p>
                </div>

                {/* Selected Skills Summary */}
                {selectedSkills.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Selected Skills ({selectedSkills.length})</h4>
                    <div className="space-y-2">
                      {selectedSkills.map((skillName) => {
                        const skillCost = calculateSkillCost(skillName)
                        const skill = agentSkills.find(s => s.name === skillName)
                        const tierKey = skillTiers[skillName] || 'basic'
                        const tierData = skill?.tiers[tierKey]
                        const usage = usageEstimates[skillName] || 0
                        const hasOverage = tierData?.included !== "Unlimited" && usage > (tierData?.included || 0)
                        
                        return (
                          <div key={skillName} className="flex justify-between items-center py-2 border-b border-slate-600 dark:border-slate-600 border-gray-300">
                            <div>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">{skillName}</span>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {tierKey} tier ? {usage} {skill?.events}
                                {hasOverage && <span className="text-yellow-400 ml-1">(+overage)</span>}
                              </div>
                            </div>
                            <span className="text-cyan-400 font-medium">${skillCost.toFixed(2)}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Total Calculation */}
                <div className="border-t border-slate-600 dark:border-slate-600 border-gray-300 pt-4">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-gray-300 dark:text-gray-300 text-gray-700">
                      <span>Platform Fee:</span>
                      <span>${platformTiers.find(t => t.name === selectedTier)?.price}/mo</span>
                    </div>
                    <div className="flex justify-between text-gray-300 dark:text-gray-300 text-gray-700">
                      <span>Skills Base Cost:</span>
                      <span>${selectedSkills.reduce((total, skillName) => {
                        const skill = agentSkills.find(s => s.name === skillName)
                        const tierKey = skillTiers[skillName] || 'basic'
                        return total + (skill?.tiers[tierKey].price || 0)
                      }, 0)}/mo</span>
                    </div>
                    {getTotalOverages() > 0 && (
                      <div className="flex justify-between text-yellow-400">
                        <span>Usage Overages:</span>
                        <span>+${getTotalOverages().toFixed(2)}/mo</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center text-xl font-bold text-cyan-400 mb-6">
                    <span>Total Monthly Cost:</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                  
                  <Button size="lg" className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600" asChild>
                    <Link href="/contact">
                      Get Custom Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  
                  <p className="text-sm text-gray-400 dark:text-gray-400 text-gray-500 text-center mt-3">
                    Estimate based on your selections. Final pricing confirmed during setup.
                  </p>
                </div>
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
