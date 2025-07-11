'use client'

import { motion } from 'framer-motion'
import { 
  Rocket, 
  TrendingUp, 
  Zap,
  Brain,
  ChevronRight
} from 'lucide-react'

const EvolutionTimeline = () => {
  const stages = [
    {
      icon: Rocket,
      title: 'Initial Deployment',
      time: 'Day 1',
      description: 'Your agent launches with core capabilities tailored to immediate needs',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Learning & Optimization',
      time: 'Week 2-4',
      description: 'Agent learns your business patterns and workflows become more efficient',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Capability Expansion',
      time: 'Month 2-3',
      description: 'New skills activated based on discovered opportunities',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Full Automation',
      time: 'Month 6+',
      description: 'Complex multi-skill workflows running autonomously at scale',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div className="relative py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h4 className="text-2xl font-bold text-white mb-3">
            Your Growth Journey
          </h4>
          <p className="text-gray-400">
            Watch your intelligent automation platform evolve and scale
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-green-500/50 -translate-x-1/2 hidden lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${index % 2 === 0 ? 'lg:pr-[50%] lg:text-right' : 'lg:pl-[50%] lg:text-left'}`}
              >
                <div className="flex items-center gap-4 lg:justify-end">
                  {index % 2 === 0 && (
                    <>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">{stage.time}</p>
                        <h5 className="text-lg font-semibold text-white mb-2">{stage.title}</h5>
                        <p className="text-gray-400">{stage.description}</p>
                      </div>
                      <div className={`
                        w-16 h-16 rounded-2xl bg-gradient-to-br ${stage.color}
                        flex items-center justify-center shadow-lg lg:absolute lg:left-1/2 lg:-translate-x-1/2
                      `}>
                        <stage.icon className="w-8 h-8 text-white" />
                      </div>
                    </>
                  )}
                  
                  {index % 2 === 1 && (
                    <>
                      <div className={`
                        w-16 h-16 rounded-2xl bg-gradient-to-br ${stage.color}
                        flex items-center justify-center shadow-lg lg:absolute lg:left-1/2 lg:-translate-x-1/2
                      `}>
                        <stage.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">{stage.time}</p>
                        <h5 className="text-lg font-semibold text-white mb-2">{stage.title}</h5>
                        <p className="text-gray-400">{stage.description}</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Connection arrow */}
                {index < stages.length - 1 && (
                  <div className="flex justify-center mt-8 lg:hidden">
                    <ChevronRight className="w-6 h-6 text-purple-400 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EvolutionTimeline
