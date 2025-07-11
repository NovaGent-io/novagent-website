'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Brain, 
  Zap, 
  Database, 
  Shield, 
  GitBranch,
  Cpu,
  Network,
  Layers,
  Sparkles
} from 'lucide-react'

const CoreArchitecture = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)

  const coreFeatures = [
    {
      id: 'intelligent-core',
      name: 'Intelligent Core',
      icon: Brain,
      description: 'The central AI brain powered by advanced models',
      detail: 'Processes requests, makes decisions, and coordinates all operations with sophisticated reasoning capabilities.',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 'orchestration',
      name: 'Orchestration Layer',
      icon: Network,
      description: 'Intelligent workflow orchestration engine',
      detail: 'Seamlessly sequences discrete capabilities to execute complex, multi-step directives automatically.',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'capabilities',
      name: 'Dynamic Capabilities',
      icon: GitBranch,
      description: 'Modular skills that can be activated on-demand',
      detail: 'Each capability is a specialized module - from lead generation to financial operations - instantly provisioned.',
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      id: 'memory',
      name: 'Contextual Memory',
      icon: Database,
      description: 'Persistent knowledge and learning system',
      detail: 'Your agent remembers context, learns from interactions, and maintains understanding of your business.',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      id: 'security',
      name: 'Security Framework',
      icon: Shield,
      description: 'Enterprise-grade security and compliance',
      detail: 'Bank-level encryption, isolated environments, and continuous monitoring ensure data protection.',
      gradient: 'from-indigo-600 to-purple-600'
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Instant Adaptation',
      description: 'Provision new capabilities in real-time without disrupting operations'
    },
    {
      icon: Network,
      title: 'Intelligent Integration',
      description: 'Seamlessly connects with your existing tools and workflows'
    },
    {
      icon: Shield,
      title: 'Secure by Design',
      description: 'Isolated environments ensure complete data privacy and security'
    }
  ]

  return (
    <div className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Architecture Advantage
          </h3>
          <p className="text-lg text-gray-400">
            A revolutionary approach to AI that adapts to your needs, not the other way around
          </p>
        </motion.div>

        {/* Clean Grid Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Core Engine Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl" />
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                    <Cpu className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-white text-center mb-3">AI Core Engine</h4>
                <p className="text-gray-400 text-center max-w-2xl mx-auto">
                  Powered by Claude ? The central intelligence that orchestrates every aspect of your AI agent's operations
                </p>
              </div>
            </div>
          </motion.div>

          {/* Architecture Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {coreFeatures.slice(1).map((feature, index) => {
              const Icon = feature.icon
              const isSelected = selectedFeature === feature.id
              
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedFeature(isSelected ? null : feature.id)}
                  className="cursor-pointer"
                >
                  <div className={`
                    relative h-full p-6 rounded-2xl border transition-all duration-300
                    ${isSelected 
                      ? 'bg-slate-800 border-purple-500 shadow-lg shadow-purple-500/20' 
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                    }
                  `}>
                    <div className={`
                      w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient}
                      flex items-center justify-center mb-4
                    `}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h5 className="text-lg font-semibold text-white mb-2">
                      {feature.name}
                    </h5>
                    <p className="text-sm text-gray-400">
                      {feature.description}
                    </p>

                    {/* Expandable Detail */}
                    <motion.div
                      initial={false}
                      animate={{ height: isSelected ? 'auto' : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-gray-300 mt-4 pt-4 border-t border-slate-700">
                        {feature.detail}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Benefits Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-800 mb-4">
                    <Icon className="w-7 h-7 text-purple-400" />
                  </div>
                  <h5 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h5>
                  <p className="text-sm text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CoreArchitecture
