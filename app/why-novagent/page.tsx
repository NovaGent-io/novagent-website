"use client"

import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"
import { Brain, Shield, TrendingUp, Users, Sparkles, ArrowRight, Building2, Rocket, Eye, ChevronRight, Cpu, Layers, BarChart3, Clock, Target, Zap, Award, CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

// Import sections directly
import PhilosophySection from "@/components/why-novagent/philosophy-section"
import ProblemSection from "@/components/why-novagent/problem-section"
import SolutionSection from "@/components/why-novagent/solution-section"
import JourneySection from "@/components/why-novagent/journey-section"
import NovaGentAdvantage from "@/components/why-novagent/novagent-advantage"

const WhyNovaGentPage = () => {
  const [activePhilosophy, setActivePhilosophy] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  // Hero rotating text
  const [textIndex, setTextIndex] = useState(0)
  const rotatingTexts = [
    "Where AI Meets Accountability",
    "Where Technology Meets Expertise",
    "Where Innovation Meets Results"
  ]

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Philosophy pillars
  const philosophyPillars = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Single-Tenant Security",
      description: "Every client gets their own dedicated AI instance. No shared resources, no data mixing, just pure isolated intelligence working exclusively for you.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "One Agent, Infinite Skills",
      description: "Instead of juggling multiple bots, you get one sophisticated AI agent that can be equipped with any combination of our 14+ specialized skills.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Human + AI Partnership",
      description: "Our expert team designs, deploys, and continuously optimizes your AI agent. You get the power of AI with the wisdom of human oversight.",
      color: "from-fuchsia-500 to-fuchsia-600"
    }
  ]

  // Journey steps
  const journeySteps = [
    {
      phase: "Discovery",
      icon: <Eye className="w-8 h-8" />,
      title: "We Learn Your Business",
      description: "Deep dive into your challenges, workflows, and objectives",
      details: [
        "Strategic consultation with our AI architects",
        "Process mapping and opportunity identification",
        "Custom agent personality design",
        "ROI projection and success metrics definition"
      ]
    },
    {
      phase: "Deployment",
      icon: <Rocket className="w-8 h-8" />,
      title: "We Build Your Solution",
      description: "Expert configuration and seamless integration",
      details: [
        "Single-tenant infrastructure provisioning",
        "Skill selection and configuration",
        "Integration with your existing tools",
        "Rigorous testing and optimization"
      ]
    },
    {
      phase: "Partnership",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "We Grow Together",
      description: "Continuous improvement and expansion",
      details: [
        "Real-time performance monitoring",
        "Proactive optimization recommendations",
        "New skill deployment as needs evolve",
        "Dedicated success manager support"
      ]
    }
  ]

  // Differentiators grid
  const differentiators = [
    {
      traditional: "Multiple disconnected bots",
      novagent: "One unified AI agent",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      traditional: "DIY setup and management",
      novagent: "Fully managed service",
      icon: <Users className="w-5 h-5" />
    },
    {
      traditional: "Black box operations",
      novagent: "Transparent dashboards",
      icon: <Eye className="w-5 h-5" />
    },
    {
      traditional: "Fixed capabilities",
      novagent: "Modular skill system",
      icon: <Layers className="w-5 h-5" />
    },
    {
      traditional: "Pay for potential",
      novagent: "Pay for outcomes",
      icon: <Target className="w-5 h-5" />
    },
    {
      traditional: "Static performance",
      novagent: "Continuous optimization",
      icon: <TrendingUp className="w-5 h-5" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900">
      <ThemeToggle />
      
      {/* Hero Section - Completely Redesigned */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        
        {/* Floating particles - Only render on client */}
        {isClient && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
                initial={{ 
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
                }}
                animate={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                }}
                transition={{
                  duration: Math.random() * 30 + 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        )}

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* New tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-purple-800 dark:text-purple-300">
                The Future of Managed AI
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gray-900 dark:text-gray-100">Why Choose</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-500">
                NovaGent?
              </span>
            </h1>

            <AnimatePresence mode="wait">
              <motion.p
                key={textIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8"
              >
                {rotatingTexts[textIndex]}
              </motion.p>
            </AnimatePresence>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
              We've reimagined AI implementation from the ground up. One powerful agent, 
              infinite possibilities, zero complexity. This is enterprise AI done right.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  Experience the Difference
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                asChild
              >
                <Link href="/platform">Explore Our Platform</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronRight className="w-6 h-6 text-gray-400 animate-bounce" />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* Journey Section - The NovaGent Process */}
      <JourneySection />

      {/* The NovaGent Advantage Section - Last before footer */}
      <NovaGentAdvantage />
    </div>
  )
}

export default WhyNovaGentPage
