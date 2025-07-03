"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"
import AdvancedSuiteHeroBackground from "@/components/advanced-suite-hero-background"
import FloatingAgentCards from "@/components/floating-agent-cards"
import { motion, AnimatePresence } from "framer-motion"
import ModalWrapper from "@/components/novasuite/modals/modal-wrapper"
import UsageEstimator from "@/components/novasuite/modals/usage-estimator"
import ROICalculator from "@/components/novasuite/modals/roi-calculator"
import IntegrationChecker from "@/components/novasuite/modals/integration-checker"
import SolutionBundlesBento from "@/components/novasuite/solution-bundles-bento"
import {
  ArrowRight,
  Zap,
  Users,
  BarChart3,
  Target,
  PhoneCall,
  MessageSquare,
  Search,
  UserPlus,
  ShieldCheck,
  Briefcase,
  PieChart,
  Settings,
  DollarSign,
  FileText,
  Building,
  ShoppingCart,
  CheckCircle2,
  Layers,
  Sparkles,
  Clock,
  TrendingUp,
  Cpu,
  type LucideIcon,
} from "lucide-react"

// Define the 14 Agent Skills with new naming
export interface AgentSkill {
  id: string
  name: string
  publicName: string
  icon: React.ReactElement
  category: string
  tagline: string
  outcome: string
  keyActions: string[]
  priceModel: string
  basePricing: {
    basic: number
    advanced: number
    enterprise: number
  }
  href: string
  priority: 'phase1' | 'phase2' | 'phase3'
  automationRate: string
  timeToValue: string
  integrations: number
  gradient: string
}

const agentSkills: AgentSkill[] = [
  // PHASE 1 - Top Priority Skills
  {
    id: "prospect-hunter",
    name: "Lead Generation Agent",
    publicName: "Prospect Hunter",
    icon: <Target className="h-8 w-8 text-blue-500" />,
    category: "Sales & Growth",
    tagline: "Multi-source lead generation with AI qualification scoring",
    outcome: "Delivers verified, ICP-matched leads with contact data and buyer intent signals",
    keyActions: [
      "Multi-source prospect discovery and verification",
      "AI-powered lead qualification scoring",
      "Real-time contact data enrichment",
      "CRM integration with buyer intent signals"
    ],
    priceModel: "Per qualified lead delivered",
    basePricing: { basic: 200, advanced: 500, enterprise: 1000 },
    href: "/solutions/novasuite/prospect-hunter",
    priority: 'phase1',
    automationRate: "85%",
    timeToValue: "48 hours",
    integrations: 12,
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    id: "schedule-coordinator",
    name: "Appointment Setting Agent", 
    publicName: "Schedule Coordinator",
    icon: <Users className="h-8 w-8 text-fuchsia-500" />,
    category: "Sales & Growth",
    tagline: "Automated appointment setting with intelligent follow-up",
    outcome: "Books qualified meetings directly into calendars with personalized outreach sequences",
    keyActions: [
      "Personalized multi-channel outreach sequences",
      "AI-driven sentiment analysis and timing",
      "Calendar integration and conflict resolution",
      "Intelligent follow-up and rescheduling"
    ],
    priceModel: "Per confirmed appointment booked",
    basePricing: { basic: 150, advanced: 400, enterprise: 900 },
    href: "/solutions/novasuite/schedule-coordinator",
    priority: 'phase1',
    automationRate: "90%",
    timeToValue: "24 hours",
    integrations: 8,
    gradient: "from-purple-500 to-fuchsia-600"
  },
  {
    id: "support-concierge",
    name: "Customer Support Agent",
    publicName: "Support Concierge", 
    icon: <MessageSquare className="h-8 w-8 text-emerald-500" />,
    category: "Support & Service",
    tagline: "Autonomous customer support handling 80% of Tier 1 inquiries",
    outcome: "Resolves customer inquiries using RAG-powered responses with seamless escalation",
    keyActions: [
      "RAG-powered knowledge base responses",
      "Historical ticket search and context",
      "Multi-channel resolution logic",
      "Intelligent escalation to human agents"
    ],
    priceModel: "Per customer issue resolved",
    basePricing: { basic: 250, advanced: 600, enterprise: 1200 },
    href: "/solutions/novasuite/support-concierge",
    priority: 'phase1',
    automationRate: "80%",
    timeToValue: "12 hours",
    integrations: 10,
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: "insight-intelligence",
    name: "Data Analytics & Reporting Agent",
    publicName: "Insight Intelligence",
    icon: <PieChart className="h-8 w-8 text-purple-500" />,
    category: "Analytics & Intelligence", 
    tagline: "Automated reporting and data analysis with narrative insights",
    outcome: "Builds comprehensive reports from structured and unstructured data with key insights",
    keyActions: [
      "Automated report generation from multiple data sources",
      "AI-powered insight summarization with narrative text",
      "Visual dashboard creation and customization",
      "Scheduled delivery and real-time updates"
    ],
    priceModel: "Per report generated",
    basePricing: { basic: 400, advanced: 800, enterprise: 1500 },
    href: "/solutions/novasuite/insight-intelligence",
    priority: 'phase1',
    automationRate: "95%",
    timeToValue: "6 hours",
    integrations: 15,
    gradient: "from-purple-500 to-pink-600"
  },
  // PHASE 2 - Expansion Skills
  {
    id: "smart-outreach-dialer",
    name: "AI Dialer Agent",
    publicName: "Smart Outreach Dialer",
    icon: <PhoneCall className="h-8 w-8 text-cyan-500" />,
    category: "Sales & Growth",
    tagline: "AI-powered calling with transcription and follow-up",
    outcome: "Places and transcribes outbound calls with AI voice and intelligent routing",
    keyActions: [
      "AI voice for natural conversations",
      "Real-time call transcription and logging",
      "Automatic follow-up task creation",
      "Call analytics and sentiment analysis"
    ],
    priceModel: "Per minute of calling",
    basePricing: { basic: 300, advanced: 600, enterprise: 1200 },
    href: "/solutions/novasuite/smart-outreach-dialer",
    priority: 'phase2',
    automationRate: "88%",
    timeToValue: "24 hours",
    integrations: 6,
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    id: "visibility-trust-manager",
    name: "SEO & Reputation Agent",
    publicName: "Visibility & Trust Manager",
    icon: <Search className="h-8 w-8 text-green-500" />,
    category: "Marketing",
    tagline: "SEO content generation and reputation monitoring",
    outcome: "Generates optimized content and monitors brand mentions across channels",
    keyActions: [
      "SEO-optimized content generation",
      "Brand mention monitoring",
      "Review response automation",
      "Keyword and backlink opportunities"
    ],
    priceModel: "Per article generated",
    basePricing: { basic: 400, advanced: 800, enterprise: 1500 },
    href: "/solutions/novasuite/visibility-trust-manager",
    priority: 'phase2',
    automationRate: "92%",
    timeToValue: "72 hours",
    integrations: 8,
    gradient: "from-green-500 to-lime-600"
  },
  {
    id: "talent-welcome-suite",
    name: "Employee Onboarding Agent",
    publicName: "Talent Welcome Suite",
    icon: <UserPlus className="h-8 w-8 text-pink-500" />,
    category: "HR & Operations",
    tagline: "Complete employee onboarding automation",
    outcome: "Automates offer letters, forms collection, and new hire setup processes",
    keyActions: [
      "Automated offer letter dispatch",
      "Document collection and verification",
      "IT access and system setup",
      "Welcome sequence orchestration"
    ],
    priceModel: "Per new hire onboarded",
    basePricing: { basic: 300, advanced: 500, enterprise: 800 },
    href: "/solutions/novasuite/talent-welcome-suite",
    priority: 'phase2',
    automationRate: "85%",
    timeToValue: "48 hours",
    integrations: 12,
    gradient: "from-pink-500 to-rose-600"
  },
  {
    id: "regulatory-risk-guard",
    name: "Compliance Management Agent",
    publicName: "Regulatory Risk Guard",
    icon: <ShieldCheck className="h-8 w-8 text-red-500" />,
    category: "HR & Operations", 
    tagline: "Compliance monitoring and policy matching",
    outcome: "Monitors regulations and flags noncompliant processes automatically",
    keyActions: [
      "Regulation feed monitoring",
      "Policy compliance matching",
      "Risk assessment automation",
      "Compliance reporting"
    ],
    priceModel: "Per regulation monitored",
    basePricing: { basic: 400, advanced: 800, enterprise: 1500 },
    href: "/solutions/novasuite/regulatory-risk-guard",
    priority: 'phase2',
    automationRate: "95%",
    timeToValue: "24 hours",
    integrations: 5,
    gradient: "from-red-500 to-orange-600"
  },
  {
    id: "talent-scout-engine",
    name: "Recruitment & Hiring Agent",
    publicName: "Talent Scout Engine",
    icon: <Briefcase className="h-8 w-8 text-indigo-500" />,
    category: "HR & Operations",
    tagline: "End-to-end recruitment and candidate management",
    outcome: "Parses resumes, ranks candidates, schedules interviews, and drafts offers",
    keyActions: [
      "Resume parsing and skill matching",
      "Candidate ranking by fit score",
      "Interview scheduling automation",
      "Offer letter generation"
    ],
    priceModel: "Per candidate processed",
    basePricing: { basic: 600, advanced: 1200, enterprise: 2500 },
    href: "/solutions/novasuite/talent-scout-engine",
    priority: 'phase2',
    automationRate: "87%",
    timeToValue: "48 hours",
    integrations: 7,
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    id: "workflow-navigator",
    name: "Project Management Agent",
    publicName: "Workflow Navigator",
    icon: <Settings className="h-8 w-8 text-teal-500" />,
    category: "Operations",
    tagline: "Project management and task coordination",
    outcome: "Assigns tasks, monitors progress, updates timelines, and flags blockers",
    keyActions: [
      "Task assignment and tracking",
      "Progress monitoring and alerts",
      "Timeline optimization",
      "Blocker identification"
    ],
    priceModel: "Per project managed",
    basePricing: { basic: 350, advanced: 700, enterprise: 1200 },
    href: "/solutions/novasuite/workflow-navigator",
    priority: 'phase2',
    automationRate: "82%",
    timeToValue: "12 hours",
    integrations: 9,
    gradient: "from-teal-500 to-cyan-600"
  },
  {
    id: "finance-flow-manager",
    name: "Financial Operations Agent",
    publicName: "Finance Flow Manager",
    icon: <DollarSign className="h-8 w-8 text-green-500" />,
    category: "Finance & Legal",
    tagline: "Transaction processing and financial operations",
    outcome: "Reconciles transactions, flags anomalies, and generates invoices automatically",
    keyActions: [
      "Transaction reconciliation",
      "Anomaly detection",
      "Invoice generation",
      "Financial reporting"
    ],
    priceModel: "Per transaction processed",
    basePricing: { basic: 500, advanced: 1000, enterprise: 2000 },
    href: "/solutions/novasuite/finance-flow-manager",
    priority: 'phase2',
    automationRate: "96%",
    timeToValue: "6 hours",
    integrations: 11,
    gradient: "from-green-600 to-emerald-600"
  },
  {
    id: "legal-logic-hub",
    name: "Legal Document Agent",
    publicName: "Legal Logic Hub",
    icon: <FileText className="h-8 w-8 text-indigo-500" />,
    category: "Finance & Legal",
    tagline: "Contract drafting and legal document management",
    outcome: "Drafts, redlines, and tracks contracts with regulation-aware templates",
    keyActions: [
      "Contract generation from templates",
      "Clause library management",
      "Redline tracking",
      "Compliance validation"
    ],
    priceModel: "Per document generated",
    basePricing: { basic: 800, advanced: 1500, enterprise: 3000 },
    href: "/solutions/novasuite/legal-logic-hub",
    priority: 'phase2',
    automationRate: "89%",
    timeToValue: "24 hours",
    integrations: 6,
    gradient: "from-slate-500 to-indigo-600"
  },
  {
    id: "property-intelligence-manager",
    name: "Real Estate Operations Agent",
    publicName: "Property Intelligence Manager",
    icon: <Building className="h-8 w-8 text-amber-500" />,
    category: "Industry Specific",
    tagline: "Real estate operations and MLS integration",
    outcome: "Automates listings, property management, and lead follow-up with MLS sync",
    keyActions: [
      "MLS feed integration",
      "Listing automation",
      "Lead follow-up sequences",
      "Document preparation"
    ],
    priceModel: "Per property managed",
    basePricing: { basic: 600, advanced: 1200, enterprise: 2500 },
    href: "/solutions/novasuite/property-intelligence-manager",
    priority: 'phase2',
    automationRate: "91%",
    timeToValue: "48 hours",
    integrations: 14,
    gradient: "from-amber-500 to-orange-600"
  },
  {
    id: "commerceops-manager",
    name: "E-commerce Operations Agent",
    publicName: "CommerceOps Manager",
    icon: <ShoppingCart className="h-8 w-8 text-violet-500" />,
    category: "Industry Specific",
    tagline: "E-commerce inventory and pricing management",
    outcome: "Monitors SKUs, flags pricing issues, and automates product feed updates",
    keyActions: [
      "SKU monitoring across channels",
      "Price mismatch detection",
      "Inventory optimization",
      "Product feed automation"
    ],
    priceModel: "Per SKU monitored",
    basePricing: { basic: 500, advanced: 1000, enterprise: 2000 },
    href: "/solutions/novasuite/commerceops-manager",
    priority: 'phase2',
    automationRate: "94%",
    timeToValue: "24 hours",
    integrations: 10,
    gradient: "from-violet-500 to-purple-600"
  }
]

// Group skills by category
const skillsByCategory = agentSkills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = []
  }
  acc[skill.category].push(skill)
  return acc
}, {} as Record<string, AgentSkill[]>)

export default function NovaSuitePage() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeModal, setActiveModal] = useState<'usage' | 'roi' | 'integration' | null>(null)

  const toggleSkill = (skillId: string) => {
    setSelectedSkills(prev => 
      prev.includes(skillId) 
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    )
  }

  const calculateEstimatedCost = () => {
    // Placeholder calculation - would be replaced with actual pricing logic
    return selectedSkills.length * 500 + 299 // Base platform fee
  }

  const categories = Object.keys(skillsByCategory)
  const filteredSkills = activeCategory === 'all' 
    ? agentSkills 
    : skillsByCategory[activeCategory] || []

  // Helper function to determine tile size
  const getTileSize = (index: number) => {
    // Create varied sizes for visual interest
    if (index === 0 || index === 4) return "col-span-2 row-span-2"
    if (index === 1 || index === 7) return "col-span-1 row-span-2"
    if (index === 9 || index === 11) return "col-span-2 row-span-1"
    return "col-span-1 row-span-1"
  }

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section - Always dark mode appearance */}
      <section className="relative flex min-h-screen items-center justify-start overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white dark">
        <AdvancedSuiteHeroBackground />
        <div className="hidden md:block">
          <FloatingAgentCards />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-purple-900/30 z-5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-5" />
        <div className="container relative z-20 mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-xl lg:max-w-2xl relative z-20">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-fuchsia-300 backdrop-blur-sm">
              <Sparkles className="mr-2 h-4 w-4 text-fuchsia-400 animate-pulse" />
              NovaGent NovaSuite
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              One Agent.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-fuchsia-600">
                Infinite Capabilities
              </span>
              . Expertly Managed.
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl md:text-2xl">
              Configure your NovaGent agent with any combination of our{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">
                14+ business-critical skills
              </span>
              . You choose what you need -we configure and manage the rest.
            </p>

            {/* Floating metrics */}
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              {[
                { label: "Agent Skills", value: "14+" },
                { label: "Success Rate", value: "99%" },
                { label: "Uptime", value: "24/7" },
              ].map((metric, index) => (
                <div
                  key={metric.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-white">{metric.value}</span>
                  <span className="text-white/70">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* 2. Agent Skills Overview - Metro Tiles Design */}
      <section className="py-16 dark:bg-slate-950 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500">
                NovaCore Suite
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Configure your agent with business-critical skills. Each skill is expertly managed and optimized for your success.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'all' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              All Skills
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Metro Tiles Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto auto-rows-[minmax(160px,auto)]"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => {
                // Determine tile size based on index
                let tileClass = ''
                if (index === 0 || index === 4) {
                  tileClass = 'sm:col-span-2 sm:row-span-2'
                } else if (index === 2 || index === 7 || index === 11) {
                  tileClass = 'sm:col-span-2'
                }
                
                return (
                  <motion.div
                    key={skill.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`relative group cursor-pointer ${tileClass}`}
                    onClick={() => toggleSkill(skill.id)}
                  >
                    <div className={`h-full min-h-[160px] rounded-xl bg-gradient-to-br ${skill.gradient} p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 rounded-lg bg-white/20">
                        {React.cloneElement(skill.icon, { className: "h-6 w-6 text-white" })}
                      </div>
                      {selectedSkills.includes(skill.id) && (
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      )}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">{skill.publicName}</h3>
                    
                    {/* Show different content based on tile size */}
                    {(index === 0 || index === 4 || index === 2 || index === 7 || index === 11) ? (
                      <>
                        <p className="text-white/90 text-sm mb-3 line-clamp-2">{skill.tagline}</p>
                        <div className="flex items-center gap-4 text-xs text-white/70">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{skill.timeToValue}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            <span>{skill.automationRate} automated</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center gap-2 text-xs text-white/70">
                        <Cpu className="h-3 w-3" />
                        <span>{skill.integrations} integrations</span>
                      </div>
                    )}
                    
                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 bg-black/20 rounded-xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>

          {/* Configuration Summary */}
          {selectedSkills.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                  Your Agent Configuration
                </h3>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  ${calculateEstimatedCost().toLocaleString()}/mo
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedSkills.map(skillId => {
                  const skill = agentSkills.find(s => s.id === skillId)
                  return skill ? (
                    <span key={skillId} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200">
                      {skill.publicName}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleSkill(skillId)
                        }}
                        className="ml-2 text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-200"
                      >
                        ?
                      </button>
                    </span>
                  ) : null
                })}
              </div>
              <div className="flex gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                  <Link href="/contact">Get Started with This Configuration</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/pricing">See Detailed Pricing</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* 3. How It Works */}
      <section className="bg-slate-100 py-16 dark:bg-slate-900/70 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                How{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500">
                  Modular Skills
                </span>{" "}
                Work
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                One intelligent agent, dynamically equipped with the exact capabilities your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Select Your Skills</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Choose from our NovaCore Suite of 14+ business-critical skills based on your specific needs and goals.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">We Configure & Deploy</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Our experts configure your agent with the selected skills, integrate with your systems, and deploy your solution.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Track Your ROI</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Monitor every action and outcome on the NovaGent Platform with real-time dashboards and transparent reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Advanced Configurator Features */}
      <section className="py-16 dark:bg-slate-950 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Advanced{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500">
                Configuration Tools
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Powerful tools to help you build the perfect AI agent for your business
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {/* Usage Estimator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
            <Card className="hover:shadow-lg transition-shadow hover:-translate-y-1 cursor-pointer group">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg">Usage Estimator</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Estimate your monthly usage and costs based on your business metrics
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => setActiveModal('usage')}
                >
                  Estimate Usage
                </Button>
              </CardContent>
            </Card>
            </motion.div>

            {/* ROI Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
            <Card className="hover:shadow-lg transition-shadow hover:-translate-y-1 cursor-pointer group">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                    <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-lg">ROI Calculator</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Calculate your expected return on investment with NovaGent
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => setActiveModal('roi')}
                >
                  Calculate ROI
                </Button>
              </CardContent>
            </Card>
            </motion.div>

            {/* Integration Checker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
            <Card className="hover:shadow-lg transition-shadow hover:-translate-y-1 cursor-pointer group">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
                    <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-lg">Integration Checker</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Check compatibility with your existing tools and systems
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => setActiveModal('integration')}
                >
                  Check Integrations
                </Button>
              </CardContent>
            </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Vertical Solution Bundles - New Bento Design */}
      <SolutionBundlesBento />

      {/* 6. Comparison Section */}
      <section className="py-16 dark:bg-slate-950 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                NovaGent vs.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500">
                  DIY Platforms
                </span>
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Why managed AI delivers better results than build-it-yourself solutions
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-b border-slate-200 dark:border-slate-700 p-4 text-left"></th>
                    <th className="border-b border-slate-200 dark:border-slate-700 p-4 text-center">
                      <div className="text-purple-600 dark:text-purple-400 font-bold">NovaGent</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Managed AI Platform</div>
                    </th>
                    <th className="border-b border-slate-200 dark:border-slate-700 p-4 text-center">
                      <div className="text-slate-600 dark:text-slate-400 font-bold">DIY Platforms</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Build-it-yourself</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="p-4 font-medium">Setup Time</td>
                    <td className="p-4 text-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto mb-1" />
                      <span className="text-sm">24-48 hours</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-sm text-slate-600 dark:text-slate-400">2-6 weeks</span>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="p-4 font-medium">Technical Expertise Required</td>
                    <td className="p-4 text-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto mb-1" />
                      <span className="text-sm">None</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-sm text-slate-600 dark:text-slate-400">High</span>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="p-4 font-medium">Ongoing Optimization</td>
                    <td className="p-4 text-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto mb-1" />
                      <span className="text-sm">Included</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Manual</span>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="p-4 font-medium">Support</td>
                    <td className="p-4 text-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto mb-1" />
                      <span className="text-sm">24/7 Expert Support</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Community/Docs</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">ROI Timeline</td>
                    <td className="p-4 text-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto mb-1" />
                      <span className="text-sm">30-60 days</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-sm text-slate-600 dark:text-slate-400">6-12 months</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" asChild>
                <Link href="/contact">See How NovaGent Compares</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 py-16 text-white sm:py-24">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Configure Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-200 to-fuchsia-300">
              Perfect AI Agent
            </span>
            ?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
            Our team is ready to help you select the right combination of skills and design a solution 
            that delivers measurable results for your business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="h-12 bg-white px-8 text-base font-semibold text-purple-700 shadow-lg hover:bg-slate-100"
            >
              <Link href="/contact">Schedule Your Configuration Call</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-12 border-white text-white px-8 text-base font-semibold hover:bg-white/10"
            >
              <Link href="/pricing">Explore Pricing & Bundles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ModalWrapper
        isOpen={activeModal === 'usage'}
        onClose={() => setActiveModal(null)}
        title="Usage Estimator"
        maxWidth="max-w-3xl"
      >
        <UsageEstimator />
      </ModalWrapper>

      <ModalWrapper
        isOpen={activeModal === 'roi'}
        onClose={() => setActiveModal(null)}
        title="ROI Calculator"
        maxWidth="max-w-4xl"
      >
        <ROICalculator />
      </ModalWrapper>

      <ModalWrapper
        isOpen={activeModal === 'integration'}
        onClose={() => setActiveModal(null)}
        title="Integration Checker"
        maxWidth="max-w-4xl"
      >
        <IntegrationChecker />
      </ModalWrapper>
    </div>
  )
}