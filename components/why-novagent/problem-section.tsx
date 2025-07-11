"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { 
  AlertTriangle,
  Puzzle,
  Eye,
  TrendingDown,
  Users,
  DollarSign,
  Clock,
  ShieldOff,
  XCircle,
  ArrowRight,
  Sparkles
} from "lucide-react"

const ProblemSection = () => {
  const [activeTab, setActiveTab] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  const problems = [
    {
      id: "fragmentation",
      icon: Puzzle,
      title: "The Fragmentation Crisis",
      shortTitle: "Fragmentation",
      description: "Businesses are drowning in disconnected AI tools",
      color: "from-red-500 to-orange-500",
      stats: {
        number: "7.3",
        unit: "Average AI tools",
        subtext: "per enterprise"
      },
      painPoints: [
        {
          icon: XCircle,
          text: "Multiple vendors, multiple contracts, multiple headaches"
        },
        {
          icon: XCircle,
          text: "Data silos preventing unified intelligence"
        },
        {
          icon: XCircle,
          text: "Integration nightmares between different systems"
        },
        {
          icon: XCircle,
          text: "No single source of truth for AI operations"
        }
      ],
      visual: (
        <div className="relative w-full h-64 flex items-center justify-center">
          {/* Network of disconnected nodes */}
          <div className="relative w-full h-full">
            {/* Central void representing lack of unity */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-dashed border-red-300 rounded-full opacity-50" />
            
            {/* Floating disconnected nodes */}
            {[
              { x: '20%', y: '20%', size: 'w-12 h-12', delay: 0 },
              { x: '75%', y: '15%', size: 'w-14 h-14', delay: 0.1 },
              { x: '85%', y: '60%', size: 'w-10 h-10', delay: 0.2 },
              { x: '70%', y: '80%', size: 'w-16 h-16', delay: 0.3 },
              { x: '15%', y: '70%', size: 'w-14 h-14', delay: 0.4 },
              { x: '10%', y: '40%', size: 'w-12 h-12', delay: 0.5 },
              { x: '50%', y: '10%', size: 'w-10 h-10', delay: 0.6 },
            ].map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  delay: node.delay,
                  y: {
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 4 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="absolute"
                style={{ left: node.x, top: node.y }}
              >
                <div className={`${node.size} relative`}>
                  {/* Node circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-orange-400 rounded-full opacity-20" />
                  <div className="absolute inset-1 bg-gradient-to-br from-red-500 to-orange-500 rounded-full opacity-40" />
                  <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full" />
                  
                  {/* Disconnected lines */}
                  <svg className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)]">
                    <line
                      x1="50%"
                      y1="50%"
                      x2={`${50 + Math.cos(i * 45 * Math.PI / 180) * 60}%`}
                      y2={`${50 + Math.sin(i * 45 * Math.PI / 180) * 60}%`}
                      stroke="rgb(239 68 68 / 0.3)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
            
            {/* Broken connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.path
                d="M 20% 20% Q 50% 50% 75% 15%"
                fill="none"
                stroke="rgb(239 68 68 / 0.2)"
                strokeWidth="2"
                strokeDasharray="5 10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                d="M 15% 70% Q 50% 50% 85% 60%"
                fill="none"
                stroke="rgb(251 146 60 / 0.2)"
                strokeWidth="2"
                strokeDasharray="5 10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </div>
      )
    },
    {
      id: "diy-trap",
      icon: Users,
      title: "The DIY Trap",
      shortTitle: "DIY Trap",
      description: "The hidden costs of 'build it yourself' AI",
      color: "from-amber-500 to-yellow-500",
      stats: {
        number: "$312K",
        unit: "Annual cost",
        subtext: "of internal AI team"
      },
      painPoints: [
        {
          icon: DollarSign,
          text: "Hiring AI specialists costs more than most budgets allow"
        },
        {
          icon: Clock,
          text: "Months of development before seeing any ROI"
        },
        {
          icon: AlertTriangle,
          text: "High risk of project failure without expertise"
        },
        {
          icon: TrendingDown,
          text: "Opportunity cost of not focusing on core business"
        }
      ],
      visual: (
        <div className="relative w-full h-64 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative"
          >
            {/* Money drain visualization */}
            <div className="w-32 h-32 border-4 border-amber-500/30 rounded-full" />
            <div className="absolute inset-4 border-4 border-amber-500/50 rounded-full" />
            <div className="absolute inset-8 border-4 border-amber-500/70 rounded-full" />
            <DollarSign className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-amber-500" />
          </motion.div>
        </div>
      )
    },
    {
      id: "black-box",
      icon: Eye,
      title: "The Black Box Problem",
      shortTitle: "Black Box",
      description: "Zero visibility into what your AI is actually doing",
      color: "from-gray-600 to-gray-800",
      stats: {
        number: "82%",
        unit: "of AI tools",
        subtext: "operate without clear reporting"
      },
      painPoints: [
        {
          icon: ShieldOff,
          text: "No transparency into AI decision-making"
        },
        {
          icon: XCircle,
          text: "Can't track what tasks are being performed"
        },
        {
          icon: AlertTriangle,
          text: "Compliance and audit nightmares"
        },
        {
          icon: Eye,
          text: "Blind trust without verification"
        }
      ],
      visual: (
        <div className="relative w-full h-64 flex items-center justify-center">
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-40 h-40 bg-gray-900 rounded-lg flex items-center justify-center"
          >
            <span className="text-6xl text-gray-700">?</span>
          </motion.div>
        </div>
      )
    }
  ]

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-full mb-6"
          >
            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
            <span className="font-semibold text-red-800 dark:text-red-200">
              The Problem
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-gray-100">Why AI Implementation </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
              Fails
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Despite the promise of AI, most businesses struggle with fragmented tools, 
            hidden costs, and zero visibility into their AI operations.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-full p-1">
            {problems.map((problem, index) => (
              <button
                key={problem.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-lg"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                {problem.shortTitle}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ scale }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Problem Details */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${problems[activeTab].color} flex items-center justify-center shadow-lg`}>
                  {(() => {
                    const Icon = problems[activeTab].icon;
                    return <Icon className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    {problems[activeTab].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {problems[activeTab].description}
                  </p>
                </div>
              </div>

              {/* Stats Card */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 mb-8"
              >
                <div className="text-center">
                  <p className={`text-5xl font-bold bg-gradient-to-r ${problems[activeTab].color} bg-clip-text text-transparent`}>
                    {problems[activeTab].stats.number}
                  </p>
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                    {problems[activeTab].stats.unit}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {problems[activeTab].stats.subtext}
                  </p>
                </div>
              </motion.div>

              {/* Pain Points */}
              <div className="space-y-4">
                {problems[activeTab].painPoints.map((point, index) => {
                  const colorClass = activeTab === 0 ? "text-red-500" : activeTab === 1 ? "text-amber-500" : "text-gray-500";
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <point.icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${colorClass}`} />
                      <span className="text-gray-700 dark:text-gray-300">{point.text}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8">
                {problems[activeTab].visual}
              </div>
              
              {/* Decorative Elements */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${problems[activeTab].color} rounded-full opacity-10 blur-2xl`} />
              <div className={`absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br ${problems[activeTab].color} rounded-full opacity-10 blur-2xl`} />
            </div>
          </div>
        </motion.div>


      </motion.div>
    </section>
  )
}

export default ProblemSection
