'use client'

import { motion } from 'framer-motion'
import { 
  Sparkles, 
  TrendingUp,
  RefreshCw,
  Shield,
  Zap,
  CheckCircle
} from 'lucide-react'

const ContinuousEnhancement = () => {
  const enhancements = [
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI models continuously refined for better accuracy and speed',
      stat: '35% faster',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Security Updates',
      description: 'Proactive security patches applied without downtime',
      stat: 'Zero-day protection',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'New Capabilities',
      description: 'Regular introduction of cutting-edge features and skills',
      stat: '2-3 per month',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: RefreshCw,
      title: 'Process Refinement',
      description: 'Workflows optimized based on performance data',
      stat: '47% efficiency gain',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 
                     rounded-full text-sm text-purple-400 mb-6"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Continuous Capability Enhancement</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Your Agent Gets Smarter Every Day
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Your agent's capabilities are not static; they exist in a state of continuous enhancement. 
            We manage the underlying technology stack, meaning every module in your library is 
            perpetually updated with the latest data models and process optimizations.
          </motion.p>
        </div>

        {/* Enhancement Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {enhancements.map((enhancement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-8 bg-slate-800/50 rounded-2xl border border-slate-700 
                            hover:border-purple-500/30 transition-all duration-300">
                {/* Background gradient on hover */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${enhancement.color} opacity-0 
                  group-hover:opacity-5 rounded-2xl transition-opacity duration-300
                `} />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className={`
                      w-12 h-12 rounded-xl bg-gradient-to-br ${enhancement.color}
                      flex items-center justify-center flex-shrink-0
                    `}>
                      <enhancement.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {enhancement.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-3">
                        {enhancement.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-medium text-green-400">
                          {enhancement.stat}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Zero Integration Debt Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 p-12 border border-purple-500/20">
            {/* Animated background */}
            <div className="absolute inset-0">
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10 text-center">
              <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              
              <h4 className="text-2xl font-bold text-white mb-4">
                Zero Integration Debt or Downtime
              </h4>
              
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                Unlike traditional software that requires painful migrations and updates, your agent 
                evolves seamlessly. New capabilities, improved algorithms, and enhanced security 
                measures are applied automatically?with zero downtime on your end.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">99.9%</p>
                  <p className="text-sm text-gray-400">Uptime SLA</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-400">0</p>
                  <p className="text-sm text-gray-400">Manual updates required</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-400">24/7</p>
                  <p className="text-sm text-gray-400">Monitoring & optimization</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mt-16"
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            The result is an intelligent automation platform that is 
            <span className="text-white font-semibold"> more than the sum of its parts</span>?it 
            is a resilient, adaptable, and integrated core for your most critical operations.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default ContinuousEnhancement
