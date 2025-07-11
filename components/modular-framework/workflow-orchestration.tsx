'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  GitBranch, 
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  FileText,
  Mail,
  ChevronRight
} from 'lucide-react'

const WorkflowOrchestration = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeWorkflow, setActiveWorkflow] = useState('market-analysis')
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const workflows = {
    'market-analysis': {
      title: 'Market Trend Analysis ? Content Creation',
      description: 'Agent identifies market opportunity and creates targeted content automatically',
      steps: [
        { icon: TrendingUp, name: 'Data Analytics', action: 'Identifies trending topic in your industry' },
        { icon: Target, name: 'SEO Analysis', action: 'Analyzes keyword opportunities' },
        { icon: FileText, name: 'Content Creation', action: 'Generates optimized article' },
        { icon: Mail, name: 'Distribution', action: 'Publishes and promotes content' }
      ],
      color: 'from-blue-500 to-purple-500'
    },
    'lead-nurture': {
      title: 'Lead Qualification ? Meeting Scheduled',
      description: 'From initial contact to booked appointment without human intervention',
      steps: [
        { icon: Target, name: 'Lead Capture', action: 'Identifies high-intent prospect' },
        { icon: Mail, name: 'Enrichment', action: 'Gathers company and contact data' },
        { icon: Zap, name: 'Outreach', action: 'Sends personalized engagement' },
        { icon: TrendingUp, name: 'Scheduling', action: 'Books meeting when qualified' }
      ],
      color: 'from-green-500 to-blue-500'
    },
    'customer-retention': {
      title: 'Support Ticket ? Upsell Opportunity',
      description: 'Turns customer issues into growth opportunities',
      steps: [
        { icon: Mail, name: 'Ticket Analysis', action: 'Detects product limitation issue' },
        { icon: Target, name: 'Solution Mapping', action: 'Identifies upgrade path' },
        { icon: FileText, name: 'Proposal Creation', action: 'Generates custom offer' },
        { icon: Zap, name: 'Follow-up', action: 'Delivers proposal at optimal time' }
      ],
      color: 'from-purple-500 to-pink-500'
    }
  }

  return (
    <div ref={sectionRef} className="relative py-24 lg:py-32">
      <motion.div
        style={{ opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 
                     rounded-full text-sm text-green-400 mb-6"
          >
            <GitBranch className="w-4 h-4" />
            <span>Intelligent Workflow Orchestration</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            This is the Force Multiplier
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            The agent functions as an orchestration engine, not just a task executor. It intelligently 
            sequences discrete capabilities to execute complex, multi-step directives.
          </motion.p>
        </div>

        {/* Workflow Examples */}
        <div className="max-w-6xl mx-auto">
          {/* Workflow Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(workflows).map(([key, workflow]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveWorkflow(key)}
                className={`
                  px-6 py-3 rounded-full font-medium transition-all duration-300
                  ${activeWorkflow === key
                    ? 'bg-gradient-to-r ' + workflow.color + ' text-white shadow-lg'
                    : 'bg-slate-800 text-gray-400 hover:text-white border border-slate-700'
                  }
                `}
              >
                {workflow.title.split('?')[0].trim()}
              </motion.button>
            ))}
          </div>

          {/* Active Workflow Visualization */}
          <motion.div
            key={activeWorkflow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700"
          >
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-white mb-2">
                {workflows[activeWorkflow].title}
              </h4>
              <p className="text-gray-400">
                {workflows[activeWorkflow].description}
              </p>
            </div>

            {/* Workflow Steps */}
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-700 -translate-y-1/2" />
              
              <div className="relative grid grid-cols-4 gap-4">
                {workflows[activeWorkflow].steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Connection line animation */}
                    {index < workflows[activeWorkflow].steps.length - 1 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
                        className={`
                          absolute top-1/2 left-1/2 w-full h-0.5 -translate-y-1/2
                          bg-gradient-to-r ${workflows[activeWorkflow].color}
                        `}
                        style={{ transformOrigin: 'left center' }}
                      />
                    )}

                    <div className="relative bg-slate-900 rounded-2xl p-6 text-center z-10">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`
                          w-16 h-16 rounded-2xl bg-gradient-to-br ${workflows[activeWorkflow].color}
                          flex items-center justify-center mx-auto mb-4 shadow-lg
                        `}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h5 className="font-semibold text-white mb-1">
                        {step.name}
                      </h5>
                      <p className="text-xs text-gray-400">
                        {step.action}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Result Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 
                       rounded-2xl border border-purple-500/20"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Typical Result</p>
                  <p className="text-lg font-semibold text-white">
                    {activeWorkflow === 'market-analysis' && '3x increase in organic traffic'}
                    {activeWorkflow === 'lead-nurture' && '47% meeting show rate improvement'}
                    {activeWorkflow === 'customer-retention' && '23% upsell conversion rate'}
                  </p>
                </div>
                <ChevronRight className="w-6 h-6 text-purple-400" />
              </div>
            </motion.div>
          </motion.div>

          {/* Example Use Case */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-slate-900/50 rounded-2xl p-8 border border-purple-500/20"
          >
            <h4 className="text-xl font-bold text-white mb-4">
              Real-World Example: Strategic Value Chain
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center 
                              flex-shrink-0 mt-0.5">
                  <span className="text-sm font-semibold text-purple-400">1</span>
                </div>
                <div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Data Analytics module</span> identifies 
                    a market trend: "AI adoption in healthcare increasing 40% YoY"
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center 
                              flex-shrink-0 mt-0.5">
                  <span className="text-sm font-semibold text-purple-400">2</span>
                </div>
                <div>
                  <p className="text-gray-300">
                    Agent automatically pipes this insight to the <span className="font-semibold text-white">SEO 
                    & Reputation module</span> to generate targeted content
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center 
                              flex-shrink-0 mt-0.5">
                  <span className="text-sm font-semibold text-purple-400">3</span>
                </div>
                <div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Lead Generation module</span> then 
                    identifies healthcare companies searching for this content
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center 
                              flex-shrink-0 mt-0.5">
                  <ArrowRight className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-green-400">Result:</span> A seamless strategic 
                    value chain from market intelligence to qualified pipeline
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default WorkflowOrchestration
