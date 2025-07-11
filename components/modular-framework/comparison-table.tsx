'use client'

import { motion } from 'framer-motion'
import { X, Check, AlertCircle } from 'lucide-react'

const ComparisonTable = () => {
  const comparisons = [
    {
      feature: 'Architecture',
      traditional: 'Monolithic, rigid structure',
      novagent: 'Modular, composable framework',
      highlight: true
    },
    {
      feature: 'Scalability',
      traditional: 'Fixed capacity, requires migration',
      novagent: 'Dynamic scaling, instant provisioning'
    },
    {
      feature: 'Updates',
      traditional: 'Manual updates with downtime',
      novagent: 'Continuous enhancement, zero downtime'
    },
    {
      feature: 'Integration',
      traditional: 'Limited, predefined connections',
      novagent: 'Unlimited, API-first architecture'
    },
    {
      feature: 'Customization',
      traditional: 'One-size-fits-all approach',
      novagent: 'Precision-engineered for your needs',
      highlight: true
    },
    {
      feature: 'Cost Model',
      traditional: 'Pay for unused features',
      novagent: 'Pay only for active capabilities'
    },
    {
      feature: 'Intelligence',
      traditional: 'Rule-based automation',
      novagent: 'AI-powered orchestration engine',
      highlight: true
    },
    {
      feature: 'Support',
      traditional: 'Ticket-based, reactive',
      novagent: 'Proactive optimization & guidance'
    }
  ]

  return (
    <div className="relative py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h4 className="text-2xl font-bold text-white mb-3">
            The Paradigm Shift
          </h4>
          <p className="text-gray-400">
            See why leading enterprises are moving beyond monolithic tools
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50">
          <div className="grid grid-cols-3 border-b border-slate-700">
            <div className="p-6 text-center">
              <p className="text-sm text-gray-400 font-medium">Feature</p>
            </div>
            <div className="p-6 text-center border-x border-slate-700 bg-red-500/5">
              <div className="flex items-center justify-center gap-2 text-red-400">
                <AlertCircle className="w-5 h-5" />
                <p className="font-semibold">Traditional Software</p>
              </div>
            </div>
            <div className="p-6 text-center bg-green-500/5">
              <div className="flex items-center justify-center gap-2 text-green-400">
                <Check className="w-5 h-5" />
                <p className="font-semibold">NovaGent Framework</p>
              </div>
            </div>
          </div>

          {comparisons.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`
                grid grid-cols-3 border-b border-slate-700 last:border-b-0
                ${row.highlight ? 'bg-purple-500/5' : ''}
              `}
            >
              <div className="p-6 flex items-center">
                <p className={`font-medium ${row.highlight ? 'text-purple-400' : 'text-white'}`}>
                  {row.feature}
                </p>
              </div>
              <div className="p-6 border-x border-slate-700 flex items-center">
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-400">{row.traditional}</p>
                </div>
              </div>
              <div className="p-6 flex items-center">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300">{row.novagent}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ComparisonTable
