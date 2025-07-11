"use client"

import { Button } from "@/components/ui/button"
import {
  Brain,
  Eye,
  Users,
  Sparkles,
  Calculator,
  ArrowRight,
  Code,
  Lock,
  Zap,
  Settings,
  Database,
  Network,
  GitBranch,
  Layers,
  Activity,
  Globe,
  Server,
  Monitor,
  FileText,
  CloudCog,
  Shield,
  CheckCircle,
  BarChart3,
  TrendingUp,
  Target,
  Clock,
  AlertTriangle,
  CheckCircle2,
  PlayCircle,
  Building,
  Lightbulb,
  RefreshCw,
  LineChart,
  DollarSign,
  Gauge,
  MessageSquare,
  Calendar,
  FileCheck,
  Workflow,
  Building2,
  Star,
  Award,
  Briefcase
} from "lucide-react"
import Link from "next/link"
import AnimatedBackground from "@/components/animated-background"
import { motion } from "framer-motion"
import { useState } from "react"
import ModalWrapper from "@/components/novasuite/modals/modal-wrapper"
import ROICalculator from "@/components/novasuite/modals/roi-calculator"

export default function PlatformPage() {
  const [showROIModal, setShowROIModal] = useState(false)
  
  return (
    <div className="bg-slate-950 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
        <AnimatedBackground />
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-cyan-500/20 border border-cyan-500 rounded-full text-cyan-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              <span className="whitespace-nowrap">World's First Managed AI Platform</span>
            </div>
          </motion.div>
          
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            The <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400">NovaGent Platform</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl text-gray-300 block mt-2">
              Where AI Meets Human Ingenuity
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-10 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            We've solved the industry's impossible choice: DIY complexity vs. black-box opacity. 
            Our revolutionary platform delivers the power and customization of enterprise AI with the 
            reliability and expertise of a fully managed service.
          </motion.p>

          <motion.div
            className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:gap-4 justify-center items-center px-4 sm:px-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              asChild
            >
              <Link href="#architecture">
                <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="whitespace-nowrap">Explore Platform Features</span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 text-sm sm:text-base"
              asChild
            >
              <Link href="/contact">
                <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="whitespace-nowrap">Schedule Platform Demo</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Statement */}
      <section className="py-12 sm:py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Revolutionizing AI with Transparency & Control
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0">
              NovaGent Platform represents a paradigm shift in AI technology. We've created the world's first 
              platform that combines the sophistication of enterprise AI with complete transparency and expert management.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <div className="bg-slate-800/50 rounded-xl p-6 sm:p-8 border border-slate-700">
                <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">One Agent, Infinite Skills</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Instead of managing multiple tools, get one intelligent agent that can be equipped with any combination of our 14+ business-critical skills.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 sm:p-8 border border-slate-700">
                <Eye className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Complete Transparency</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  See exactly what your AI is doing, when it's doing it, and the value it's creating. No more black boxes or mysterious processes.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 sm:p-8 border border-slate-700">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-fuchsia-400 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Expert Management</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Our specialists handle the complexity of setup, optimization, and continuous improvement so you can focus on results.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Industry's Broken Promise */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
              The Industry's Broken Promise
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              For too long, businesses have been forced to choose between two flawed options
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <motion.div
              className="bg-red-500/10 border border-red-500/30 rounded-xl p-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-red-400 mr-3" />
                <h3 className="text-xl font-bold text-red-400">DIY "Builder" Platforms</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  Steep learning curves and technical complexity
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  Your team spends time building instead of executing
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  Constant maintenance and optimization burden
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  Limited sophistication for complex business logic
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-red-500/10 border border-red-500/30 rounded-xl p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <Lock className="h-8 w-8 text-red-400 mr-3" />
                <h3 className="text-xl font-bold text-red-400">Black-Box Services</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  Zero visibility into what's actually happening
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  No control over customization or optimization
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  Unclear ROI and performance metrics
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  Generic solutions that don't fit your business
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 rounded-full">
              <Zap className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-semibold">We built the third option</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Native vs Bolted-On */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              One Platform. One Agent. Zero Complexity.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Your AI agent isn't an add-on -it's a first-class citizen of the NovaGent Platform, 
              designed from the ground up for seamless integration and intelligent operation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-8 border border-cyan-200 dark:border-cyan-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Settings className="w-10 h-10 text-cyan-600 dark:text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-cyan-700 dark:text-cyan-400">Toggle-Based Configuration</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Activate or deactivate agent skills with simple toggles. No complex workflow rebuilding required.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />Instant skill deployment</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />Real-time configuration updates</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />Zero downtime changes</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-8 border border-purple-200 dark:border-purple-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <BarChart3 className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-400">Real-Time Performance Dashboards</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Monitor every action, outcome, and ROI metric as they happen. Complete transparency into your AI's operations.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />Live task monitoring</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />ROI tracking in real-time</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />Performance analytics</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-8 border border-fuchsia-200 dark:border-fuchsia-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Workflow className="w-10 h-10 text-fuchsia-600 dark:text-fuchsia-400 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-fuchsia-700 dark:text-fuchsia-400">Unified Settings Management</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                All agent configurations managed from one intelligent interface. No scattered tools or disconnected systems.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />Centralized control panel</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />Cross-skill coordination</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />Intelligent defaults</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Data, Your Context */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Your Data, Your Context
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Unlike generic AI tools, your NovaGent agent learns from and integrates with your specific business data, 
              making every decision contextually intelligent and precisely tailored to your operations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Deep Business Integration</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Real-Time Data Sync</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Your agent continuously learns from customer interactions, sales data, support tickets, 
                      and operational metrics to make increasingly intelligent decisions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contextual Intelligence</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Every action your agent takes is informed by your business rules, customer history, 
                      and strategic objectives -not generic templates.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-fuchsia-100 dark:bg-fuchsia-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Secure Data Handling</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      All data integration follows enterprise-grade security protocols with encryption, 
                      access controls, and compliance monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800/30 rounded-2xl p-8 border border-gray-200 dark:border-slate-700"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">Data Sources & Integrations</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                  <Building2 className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-900 dark:text-white">CRM Systems</span>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                  <MessageSquare className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-900 dark:text-white">Support Tickets</span>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                  <Calendar className="w-8 h-8 text-fuchsia-600 dark:text-fuchsia-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-900 dark:text-white">Calendars</span>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                  <FileCheck className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-900 dark:text-white">Documents</span>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                  <LineChart className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-900 dark:text-white">Analytics</span>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                  <DollarSign className="w-8 h-8 text-fuchsia-600 dark:text-fuchsia-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-900 dark:text-white">Financial Data</span>
                </div>
              </div>
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/platform/integrations"
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium"
                >
                  <span>View All Integrations</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Agent - From AI Tool to AI Partner */}
      <section id="architecture" className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Your Interactive AI Partner
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
              What if you didn't just partner with an AI company, but with the AI itself? 
              Experience direct communication with your dedicated agent - a proactive, transparent, and consultative partner.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Transparency & Reporting */}
            <motion.div
              className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Transparency & Reporting</h3>
              <p className="text-gray-300 mb-6">
                Get complete visibility into your agent's work. Ask questions, request summaries, and understand exactly what's happening.
              </p>
              <div className="space-y-3">
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <p className="text-sm text-gray-400 italic">"What are you working on right now?"</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <p className="text-sm text-gray-400 italic">"Summarize this week's lead generation results"</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <p className="text-sm text-gray-400 italic">"How many appointments did you book today?"</p>
                </div>
              </div>
            </motion.div>

            {/* Proactive Consultation */}
            <motion.div
              className="bg-slate-800/50 rounded-xl p-8 border border-purple-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">Proactive Consultation</h3>
              <p className="text-gray-300 mb-6">
                Your agent doesn't just execute tasks - it identifies opportunities and suggests improvements based on your data.
              </p>
              <div className="space-y-3">
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <p className="text-sm text-cyan-400">"I noticed high email engagement on Tuesdays. Should we shift more outreach to that day?"</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <p className="text-sm text-purple-400">"Your appointment no-show rate is 15%. I can add SMS reminders to reduce this."</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <p className="text-sm text-fuchsia-400">"Based on your growth, the SEO & Reputation skill could help attract more leads."</p>
                </div>
              </div>
            </motion.div>

            {/* Simple Instructions */}
            <motion.div
              className="bg-slate-800/50 rounded-xl p-8 border border-fuchsia-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-fuchsia-500/20 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8 text-fuchsia-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-fuchsia-400">Simple Instructions</h3>
              <p className="text-gray-300 mb-6">
                Act as your agent's team lead. Give simple directives and adjustments without complex configuration.
              </p>
              <div className="space-y-3">
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <p className="text-sm text-gray-400 italic">"Focus on healthcare prospects this week"</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <p className="text-sm text-gray-400 italic">"Pause all social media posts for 48 hours"</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <p className="text-sm text-gray-400 italic">"Find the contact info for Acme Corp"</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* The Intelligent Handoff */}
          <motion.div
            className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-fuchsia-500/10 rounded-2xl p-12 border border-purple-500/30 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">The Intelligent Handoff</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Your agent knows its boundaries. When strategic decisions or account changes are needed, 
                it seamlessly connects you with your human Success Manager.
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-purple-400 mb-1">Your AI Agent</p>
                  <p className="text-gray-300">"Excellent! I can activate the Insight Intelligence skill for you. Based on your current usage, this will likely exceed your monthly AI Credits."</p>
                  <p className="text-gray-300 mt-2">"To ensure we set this up in the most strategic and cost-effective way, I've notified your NovaGent Success Manager. They'll review your account and reach out within 24 hours to discuss the best options."</p>
                </div>
              </div>
              <div className="flex items-center justify-center mt-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-green-400">Success Manager notified</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Demo Preview */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-6">Experience the future of AI partnership</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/contact">
                <MessageSquare className="mr-2 h-5 w-5" />
                Schedule a Consultation
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Enterprise-Grade Security & Trust */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Enterprise-Grade Security & Trust
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Built with security-first architecture and compliance standards that meet the strictest enterprise requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">SOC 2 Compliant</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Rigorous security controls and regular audits ensure your data protection.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">End-to-End Encryption</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All data in transit and at rest is protected with enterprise-grade encryption.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-fuchsia-100 dark:bg-fuchsia-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-fuchsia-600 dark:text-fuchsia-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">GDPR Ready</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Full compliance with global data protection and privacy regulations.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Full Audit Trails</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Complete visibility and logging of all agent actions and data access.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="bg-gray-50 dark:bg-slate-800/30 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-center mb-6 text-gray-900 dark:text-white">Multi-Layered Security Architecture</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white dark:bg-slate-700/50 rounded-lg">
                <Server className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mx-auto mb-2" />
                <span className="text-sm text-gray-900 dark:text-gray-300">Single-Tenant Isolation</span>
                <p className="text-xs text-gray-500 mt-1">Dedicated infrastructure per client</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-700/50 rounded-lg">
                <Database className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                <span className="text-sm text-gray-900 dark:text-gray-300">Zero-Trust Architecture</span>
                <p className="text-xs text-gray-500 mt-1">Every request verified</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-700/50 rounded-lg">
                <CloudCog className="w-8 h-8 text-fuchsia-600 dark:text-fuchsia-400 mx-auto mb-2" />
                <span className="text-sm text-gray-900 dark:text-gray-300">Real-Time Monitoring</span>
                <p className="text-xs text-gray-500 mt-1">24/7 security oversight</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-700/50 rounded-lg">
                <Shield className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mx-auto mb-2" />
                <span className="text-sm text-gray-900 dark:text-gray-300">Defense in Depth</span>
                <p className="text-xs text-gray-500 mt-1">Multiple security layers</p>
              </div>
            </div>
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                href="/platform/security"
                className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors font-medium"
              >
                <Shield className="w-4 h-4 mr-2" />
                <span>View Complete Security Details</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Measurable Business Impact */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500 dark:border-cyan-500/50 rounded-full text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              <span>Real Results, Not Promises</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-400 dark:via-purple-400 dark:to-fuchsia-400">
              Measurable Business Impact
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              NovaGent clients see transformational results within the first 30 days. 
              Here's what happens when AI meets expert management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Time Saved Card */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl blur-xl opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white dark:bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-cyan-500/30 hover:border-cyan-500 dark:hover:border-cyan-500/50 transition-all duration-300 shadow-lg">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto transform group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                
                <motion.div
                  className="text-4xl sm:text-5xl font-bold text-cyan-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-400 dark:to-cyan-600 mb-2 text-center"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  40+
                </motion.div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white text-center">Hours Saved Weekly</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-center">
                  Automate repetitive tasks and free your team for strategic work that drives growth
                </p>
                
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between bg-gray-100 dark:bg-slate-700/50 rounded-lg px-3 sm:px-4 py-2">
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Lead qualification</span>
                    <span className="text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400">12 hrs/week</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 dark:bg-slate-700/50 rounded-lg px-3 sm:px-4 py-2">
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Appointment scheduling</span>
                    <span className="text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400">8 hrs/week</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 dark:bg-slate-700/50 rounded-lg px-3 sm:px-4 py-2">
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Customer support</span>
                    <span className="text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400">20 hrs/week</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ROI Card */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl blur-xl opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white dark:bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-purple-500/30 hover:border-purple-500 dark:hover:border-purple-500/50 transition-all duration-300 shadow-lg">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto transform group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                
                <motion.div
                  className="text-4xl sm:text-5xl font-bold text-purple-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-400 dark:to-purple-600 mb-2 text-center"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  5.2x
                </motion.div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white text-center">Average ROI</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-center">
                  Most clients see positive returns within the first month of deployment
                </p>
                
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between bg-gray-100 dark:bg-slate-700/50 rounded-lg px-3 sm:px-4 py-2">
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">New leads generated</span>
                    <span className="text-xs sm:text-sm font-semibold text-green-600 dark:text-green-400">+47%</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 dark:bg-slate-700/50 rounded-lg px-3 sm:px-4 py-2">
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Conversion rate</span>
                    <span className="text-xs sm:text-sm font-semibold text-green-600 dark:text-green-400">+23%</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 dark:bg-slate-700/50 rounded-lg px-3 sm:px-4 py-2">
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Customer satisfaction</span>
                    <span className="text-xs sm:text-sm font-semibold text-green-600 dark:text-green-400">+31%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 24/7 Operations Card */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 rounded-2xl blur-xl opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white dark:bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-fuchsia-500/30 hover:border-fuchsia-500 dark:hover:border-fuchsia-500/50 transition-all duration-300 shadow-lg">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto transform group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                
                <motion.div
                  className="text-4xl sm:text-5xl font-bold text-fuchsia-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-fuchsia-400 dark:to-fuchsia-600 mb-2 text-center"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  24/7
                </motion.div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white text-center">Always Working</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-center">
                  Your AI agent never sleeps, ensuring no opportunity is missed
                </p>
                
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between bg-gray-100 dark:bg-slate-700/50 rounded-lg px-3 sm:px-4 py-2">
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">After-hours responses</span>
                    <span className="text-xs sm:text-sm font-semibold text-fuchsia-600 dark:text-fuchsia-400">100%</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 dark:bg-slate-700/50 rounded-lg px-3 sm:px-4 py-2">
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Weekend coverage</span>
                    <span className="text-xs sm:text-sm font-semibold text-fuchsia-600 dark:text-fuchsia-400">Full</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 dark:bg-slate-700/50 rounded-lg px-3 sm:px-4 py-2">
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Holiday availability</span>
                    <span className="text-xs sm:text-sm font-semibold text-fuchsia-600 dark:text-fuchsia-400">Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTAs */}
          <motion.div
            className="text-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Results based on average client performance metrics across all industries</p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
                onClick={() => setShowROIModal(true)}
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Your ROI
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-purple-500 text-purple-600 dark:border-purple-400 dark:text-purple-400 hover:bg-purple-500 hover:text-white dark:hover:bg-purple-400 dark:hover:text-slate-900 font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  <Users className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Human-in-the-Loop Advantage */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              The Human-in-the-Loop Advantage
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              While our platform is sophisticated, it's our human expertise that ensures your AI delivers transformational results.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-8 border border-cyan-200 dark:border-cyan-500/30 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-cyan-700 dark:text-cyan-400">Strategic Design</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our AI specialists analyze your business objectives and design the optimal agent configuration for maximum impact.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li className="flex items-center justify-center"><Target className="w-4 h-4 mr-2 text-cyan-600 dark:text-cyan-400" />Goal-oriented setup</li>
                <li className="flex items-center justify-center"><Building className="w-4 h-4 mr-2 text-cyan-600 dark:text-cyan-400" />Industry expertise</li>
                <li className="flex items-center justify-center"><Award className="w-4 h-4 mr-2 text-cyan-600 dark:text-cyan-400" />Best practice implementation</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-8 border border-purple-200 dark:border-purple-500/30 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-400">Continuous Monitoring</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our team actively monitors your agent's performance, quickly addressing issues and identifying optimization opportunities.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li className="flex items-center justify-center"><Activity className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />24/7 oversight</li>
                <li className="flex items-center justify-center"><AlertTriangle className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />Proactive issue resolution</li>
                <li className="flex items-center justify-center"><Gauge className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />Performance optimization</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-8 border border-fuchsia-200 dark:border-fuchsia-500/30 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-fuchsia-100 dark:bg-fuchsia-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <RefreshCw className="w-8 h-8 text-fuchsia-600 dark:text-fuchsia-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-fuchsia-700 dark:text-fuchsia-400">Strategic Evolution</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                As your business grows and changes, our experts continuously refine your agent's capabilities and strategies.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li className="flex items-center justify-center"><TrendingUp className="w-4 h-4 mr-2 text-fuchsia-600 dark:text-fuchsia-400" />Continuous improvement</li>
                <li className="flex items-center justify-center"><Star className="w-4 h-4 mr-2 text-fuchsia-600 dark:text-fuchsia-400" />Advanced optimization</li>
                <li className="flex items-center justify-center"><Briefcase className="w-4 h-4 mr-2 text-fuchsia-600 dark:text-fuchsia-400" />Business alignment</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Experience the Future of AI?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 px-4 sm:px-0">
              Join the companies already transforming their operations with the NovaGent Platform. 
              Experience the power of managed AI with complete transparency and control.
            </p>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-fuchsia-500 via-purple-600 to-cyan-500 hover:from-fuchsia-600 hover:via-purple-700 hover:to-cyan-600 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 text-base sm:text-lg"
                asChild
              >
                <Link href="/contact">
                  <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="whitespace-nowrap">Schedule Platform Demo</span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-lg transition-all duration-300 text-base sm:text-lg"
                asChild
              >
                <Link href="/pricing">
                  <Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="whitespace-nowrap">Build Your Solution</span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator Modal */}
      <ModalWrapper
        isOpen={showROIModal}
        onClose={() => setShowROIModal(false)}
        title="ROI Calculator"
        maxWidth="max-w-4xl"
      >
        <ROICalculator />
      </ModalWrapper>
    </div>
  )
}
