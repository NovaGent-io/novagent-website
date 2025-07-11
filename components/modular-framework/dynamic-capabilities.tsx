'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  TrendingUp, 
  Calendar, 
  HeadphonesIcon,
  FileText,
  BarChart3,
  Shield,
  Users,
  Building,
  Sparkles,
  Plus,
  Check,
  ArrowRight
} from 'lucide-react'

const DynamicCapabilities = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills = [
    {
      id: 'lead-gen',
      name: 'Lead Generation',
      icon: TrendingUp,
      description: 'Identify and qualify prospects automatically',
      color: 'from-blue-500 to-cyan-500',
      benefits: ['24/7 prospecting', 'Multi-channel outreach', 'Lead enrichment'],
      monthlyValue: '$15,000'
    },
    {
      id: 'appointment',
      name: 'Appointment Setting',
      icon: Calendar,
      description: 'Schedule meetings without the back-and-forth',
      color: 'from-purple-500 to-pink-500',
      benefits: ['Calendar integration', 'Automated reminders', 'No-show reduction'],
      monthlyValue: '$8,000'
    },
    {
      id: 'support',
      name: 'Customer Support',
      icon: HeadphonesIcon,
      description: 'Resolve inquiries instantly at scale',
      color: 'from-green-500 to-emerald-500',
      benefits: ['24/7 availability', 'Multi-language', 'Ticket routing'],
      monthlyValue: '$12,000'
    },
    {
      id: 'compliance',
      name: 'Compliance Management',
      icon: Shield,
      description: 'Stay ahead of regulatory requirements',
      color: 'from-red-500 to-orange-500',
      benefits: ['Policy monitoring', 'Auto documentation', 'Risk alerts'],
      monthlyValue: '$20,000'
    },
    {
      id: 'analytics',
      name: 'Data Analytics',
      icon: BarChart3,
      description: 'Turn data into actionable insights',
      color: 'from-indigo-500 to-purple-500',
      benefits: ['Real-time dashboards', 'Predictive analytics', 'Custom reports'],
      monthlyValue: '$10,000'
    },
    {
      id: 'hr-ops',
      name: 'HR Operations',
      icon: Users,
      description: 'Streamline your entire HR workflow',
      color: 'from-pink-500 to-rose-500',
      benefits: ['Onboarding automation', 'Document management', 'Policy updates'],
      monthlyValue: '$7,000'
    }
  ]

  const toggleSkill = (skillId: string) => {
    setSelectedSkills(prev => 
      prev.includes(skillId) 
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    )
  }

  const calculateTotalValue = () => {
    return selectedSkills.reduce((total, skillId) => {
      const skill = skills.find(s => s.id === skillId)
      const value = parseInt(skill?.monthlyValue.replace(/[$,]/g, '') || '0')
      return total + value
    }, 0)
  }

  return (
    <div className="relative py-24 lg:py-32 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 
                     rounded-full text-sm text-blue-400 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Dynamic Capability Provisioning</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Address Emergent Challenges with Extreme Agility
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Rather than procuring a new single-point solution, you can provision new capabilities 
            to your agent's core in real-time. The framework adapts to your operational needs, 
            not the other way around.
          </motion.p>
        </div>

        {/* Interactive Skill Selection Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredSkill(skill.id)}
                onHoverEnd={() => setHoveredSkill(null)}
                onClick={() => toggleSkill(skill.id)}
                className={`
                  relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300
                  ${selectedSkills.includes(skill.id) 
                    ? 'bg-slate-800 border-purple-500 shadow-lg shadow-purple-500/20' 
                    : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                  }
                `}
              >
                {/* Selection indicator */}
                <div className="absolute top-4 right-4">
                  <AnimatePresence>
                    {selectedSkills.includes(skill.id) ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center"
                      >
                        <Check className="w-4 h-4 text-white" />
                      </motion.div>
                    ) : (
                      <div className="w-6 h-6 border-2 border-slate-600 rounded-full flex items-center justify-center">
                        <Plus className="w-3 h-3 text-slate-600" />
                      </div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Skill content */}
                <div className={`
                  w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} 
                  flex items-center justify-center mb-4
                `}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>

                <h4 className="text-lg font-semibold text-white mb-2">
                  {skill.name}
                </h4>
                
                <p className="text-sm text-gray-400 mb-4">
                  {skill.description}
                </p>

                {/* Benefits preview on hover */}
                <AnimatePresence>
                  {hoveredSkill === skill.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-1 mb-3"
                    >
                      {skill.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                          <span className="text-xs text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Value indicator */}
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-gray-500">Saves up to</span>
                  <span className="text-sm font-semibold text-purple-400">
                    {skill.monthlyValue}/mo
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Value Calculator */}
          <AnimatePresence>
            {selectedSkills.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 
                         border border-purple-500/20"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Your Custom Agent Configuration
                    </h4>
                    <p className="text-gray-400 mb-4">
                      {selectedSkills.length} capabilities selected
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {selectedSkills.map(skillId => {
                        const skill = skills.find(s => s.id === skillId)
                        return skill ? (
                          <div
                            key={skillId}
                            className="flex items-center gap-2 px-3 py-1 bg-slate-800 
                                     rounded-full text-sm text-white"
                          >
                            <skill.icon className="w-4 h-4" />
                            <span>{skill.name}</span>
                          </div>
                        ) : null
                      })}
                    </div>
                  </div>
                  
                  <div className="text-center md:text-right">
                    <p className="text-sm text-gray-400 mb-1">Estimated Monthly Value</p>
                    <p className="text-4xl font-bold text-transparent bg-clip-text 
                                bg-gradient-to-r from-purple-400 to-blue-400">
                      ${calculateTotalValue().toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      in operational efficiency gains
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 
                               text-white rounded-lg font-medium inline-flex items-center gap-2
                               hover:from-purple-600 hover:to-blue-600 transition-all"
                    >
                      See Pricing for This Configuration
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom emphasis text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mt-16"
        >
          <p className="text-lg text-gray-400 leading-relaxed">
            <span className="text-white font-medium">Targeted & Efficient Resource Allocation.</span> Eliminate 
            the inefficiency of bloated software suites. Our modular framework enables precise resource 
            allocation. You deploy capital and AI credits only on the functional modules that are actively 
            driving value, <span className="text-purple-400 font-medium">guaranteeing a higher return on your 
            investment in automation</span>.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default DynamicCapabilities
