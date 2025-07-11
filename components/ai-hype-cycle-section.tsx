"use client"

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { 
  AlertTriangle, 
  ShieldCheck, 
  Sparkles, 
  Brain,
  BarChart3,
  Lock,
  Puzzle,
  Users,
  Zap,
  ArrowRight,
  Code2,
  Boxes,
  TrendingUp,
  Eye,
  CheckCircle2,
  XCircle,
  DollarSign,
  Clock,
  Shield
} from "lucide-react"
import { cn } from "@/lib/utils"

const AiHypeCycleSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  
  // Mouse tracking for parallax
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const problems = [
    {
      id: 1,
      icon: Puzzle,
      title: "Fragmented Tools",
      subtitle: "Endless integration challenges",
      description: "Managing 10+ AI tools that don't talk to each other, creating data silos and workflow bottlenecks.",
      stats: "87% struggle with integration",
      impact: "$45K annual loss",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 2,
      icon: Code2,
      title: "The 'DIY AI' Mirage",
      subtitle: "Hidden costs & steep curves",
      description: "Building AI solutions in-house requires dedicated developers, ongoing maintenance, and security expertise you may not have.",
      stats: "$250K+ yearly overhead",
      impact: "6-12 month delays",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 3,
      icon: Lock,
      title: "Black Box Technology",
      subtitle: "No transparency, no trust",
      description: "AI vendors promise results but provide zero visibility into what's happening with your data and processes.",
      stats: "73% distrust AI vendors",
      impact: "Compliance risks",
      color: "from-rose-500 to-pink-600"
    },
    {
      id: 4,
      icon: Boxes,
      title: "Basic Bots",
      subtitle: "Limited & error-prone",
      description: "Simple chatbots and automation tools that break at the first sign of complexity, failing your critical business needs.",
      stats: "62% fail expectations",
      impact: "Lost opportunities",
      color: "from-purple-500 to-violet-600"
    }
  ]

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const problemCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const solutionCardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const solutions = [
    {
      id: 1,
      icon: Brain,
      title: "One Agent. Infinite Skills.",
      description: "A single, powerful AI agent equipped with modular capabilities tailored to your exact business needs.",
      feature: "Unified Platform",
      benefit: "80% faster deployment",
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 2,
      icon: Users,
      title: "Expert Human Intelligence",
      description: "Our AI specialists design, deploy, and continuously optimize your agent for peak performance.",
      feature: "Managed Service",
      benefit: "Zero technical overhead",
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 3,
      icon: Eye,
      title: "Transparent Value & Performance",
      description: "Real-time dashboards show exactly what your agent is doing and the ROI it's delivering.",
      feature: "Full Visibility",
      benefit: "100% accountability",
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Sophisticated, Scalable Solutions",
      description: "Enterprise-grade AI that grows with your business, handling complex workflows with ease.",
      feature: "Future-Proof",
      benefit: "Unlimited scalability",
      color: "from-fuchsia-500 to-pink-600"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
    >
      {/* Animated Background */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 dark:bg-purple-600/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/20 dark:bg-cyan-600/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-fuchsia-300/10 dark:bg-fuchsia-600/5 rounded-full filter blur-3xl animate-pulse animation-delay-4000" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          style={{ scale }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-fuchsia-100 dark:from-purple-900/30 dark:to-fuchsia-900/30 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-800 dark:text-purple-300">The Reality Check</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
              Tired of the AI Hype Cycle?
            </span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl font-semibold"
          >
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-cyan-400 animate-gradient">
              Demand Tangible ROI
            </span>
          </motion.p>
        </motion.div>

        {/* Problems Grid */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100">
              The Common Pitfalls of AI Implementation
            </h3>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={problem.id}
                variants={problemCardVariants}
                onMouseEnter={() => setActiveCard(problem.id)}
                onMouseLeave={() => setActiveCard(null)}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className={cn(
                  "relative group cursor-pointer",
                  "bg-white dark:bg-slate-900/50",
                  "border border-slate-200 dark:border-slate-800",
                  "rounded-2xl p-6 sm:p-8",
                  "transition-all duration-300",
                  "hover:shadow-2xl hover:shadow-red-500/10 dark:hover:shadow-red-500/5",
                  activeCard === problem.id && "scale-[1.02]"
                )}
              >
                {/* Icon Background Gradient */}
                <div className={cn(
                  "absolute top-0 right-0 w-32 h-32 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500",
                  `bg-gradient-to-br ${problem.color}`
                )} />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={cn(
                        "p-3 rounded-xl bg-gradient-to-br shadow-lg",
                        problem.color,
                        "group-hover:shadow-xl transition-shadow"
                      )}
                    >
                      <problem.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100 mb-1">
                        {problem.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {problem.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    {problem.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span className="font-medium text-red-600 dark:text-red-400">
                        {problem.stats}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span className="font-medium text-orange-600 dark:text-orange-400">
                        {problem.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-16 md:my-20">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-px w-24 sm:w-32 bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700"
          />
          <Zap className="w-8 h-8 mx-4 text-purple-500 animate-pulse" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-px w-24 sm:w-32 bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700"
          />
        </div>

        {/* Solutions */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <ShieldCheck className="w-6 h-6 text-green-500" />
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100">
              The NovaGent Advantage: Clarity, Capability, Control
            </h3>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                variants={solutionCardVariants}
                onMouseEnter={() => setHoveredSolution(solution.id)}
                onMouseLeave={() => setHoveredSolution(null)}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className={cn(
                  "group relative overflow-hidden",
                  "bg-gradient-to-br from-cyan-50/50 via-purple-50/50 to-fuchsia-50/50",
                  "dark:from-cyan-950/20 dark:via-purple-950/20 dark:to-fuchsia-950/20",
                  "border border-slate-200 dark:border-slate-800",
                  "rounded-2xl p-6 sm:p-8",
                  "transition-all duration-300",
                  "hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/10",
                  "hover:border-purple-300 dark:hover:border-purple-700"
                )}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={cn(
                        "p-3 rounded-xl bg-gradient-to-br shadow-lg",
                        solution.color,
                        "group-hover:shadow-xl transition-shadow"
                      )}
                    >
                      <solution.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        {solution.title}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full">
                        {solution.feature}
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="font-medium text-green-600 dark:text-green-400">
                      {solution.benefit}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8"
          >
            Stop settling for tools. Start demanding outcomes.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer">
                <Shield className="w-5 h-5" />
                <span className="text-sm sm:text-base">See How NovaGent Delivers Real ROI</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AiHypeCycleSection
