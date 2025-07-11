'use client'

import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { useState } from 'react'

interface Integration {
  name: string
  icon: keyof typeof Icons
  description: string
  category: 'crm' | 'communication' | 'productivity' | 'data'
}

interface Feature {
  title: string
  description: string
  icon: keyof typeof Icons
  benefits: string[]
}

export default function IntegrationsAndFeaturesSection() {
  const [activeTab, setActiveTab] = useState<'integrations' | 'features'>('integrations')

  const integrations: Integration[] = [
    {
      name: 'Salesforce',
      icon: 'Cloud',
      description: 'Sync leads directly to your CRM with custom field mapping',
      category: 'crm'
    },
    {
      name: 'HubSpot',
      icon: 'Layers',
      description: 'Automatic lead creation and activity tracking',
      category: 'crm'
    },
    {
      name: 'Slack',
      icon: 'MessageSquare',
      description: 'Real-time notifications for high-priority leads',
      category: 'communication'
    },
    {
      name: 'Microsoft Teams',
      icon: 'Users',
      description: 'Collaborate on leads with your team instantly',
      category: 'communication'
    },
    {
      name: 'Google Calendar',
      icon: 'Calendar',
      description: 'Automated meeting scheduling with qualified prospects',
      category: 'productivity'
    },
    {
      name: 'Outlook',
      icon: 'Mail',
      description: 'Seamless email integration for personalized outreach',
      category: 'productivity'
    },
    {
      name: 'ClickUp',
      icon: 'CheckSquare',
      description: 'Sync leads as tasks and track progress in your workspace',
      category: 'productivity'
    },
    {
      name: 'Monday CRM',
      icon: 'Grid',
      description: 'Seamless lead management with customizable workflows',
      category: 'crm'
    }
  ]

  const features: Feature[] = [
    {
      title: 'AI-Powered Lead Scoring',
      description: 'Automatically prioritize leads based on engagement patterns and fit criteria',
      icon: 'Brain',
      benefits: [
        'Focus on high-intent prospects',
        'Reduce time wasted on poor fits',
        'Improve conversion rates',
        'Data-driven prioritization'
      ]
    },
    {
      title: 'Custom Workflow Builder',
      description: 'Design multi-step sequences tailored to your sales process',
      icon: 'GitBranch',
      benefits: [
        'Flexible campaign creation',
        'A/B testing capabilities',
        'Conditional logic paths',
        'Performance analytics'
      ]
    },
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Track performance metrics and optimize campaigns on the fly',
      icon: 'BarChart3',
      benefits: [
        'Live campaign monitoring',
        'ROI tracking',
        'Team performance insights',
        'Exportable reports'
      ]
    },
    {
      title: 'Advanced Personalization Engine',
      description: 'Create highly personalized messages at scale using AI and dynamic fields',
      icon: 'Sparkles',
      benefits: [
        'Dynamic content insertion',
        'Industry-specific templates',
        'Tone and style matching',
        'Multi-language support'
      ]
    }
  ]

  const categoryColors = {
    crm: 'from-blue-500 to-cyan-500',
    communication: 'from-purple-500 to-pink-500',
    productivity: 'from-emerald-500 to-teal-500',
    data: 'from-orange-500 to-red-500'
  }

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Built for Your Workflow
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
            Seamlessly integrate with your existing tools and unlock powerful features designed for modern sales teams
          </p>

          {/* Tab switcher */}
          <div className="inline-flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <button
              onClick={() => setActiveTab('integrations')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'integrations'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Integrations
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'features'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Key Features
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'integrations' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
            >
              {integrations.map((integration, index) => {
                const Icon = Icons[integration.icon] || Icons.Box
                return (
                  <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group"
                  >
                    <div className="relative bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg dark:shadow-none border border-slate-200 dark:border-slate-700 h-full">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${categoryColors[integration.category]} p-[1px] mb-4`}>
                        <div className="w-full h-full bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                        {integration.name}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {integration.description}
                      </p>
                      <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[integration.category]} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6 lg:gap-8"
            >
              {features.map((feature, index) => {
                const Icon = Icons[feature.icon] || Icons.Zap
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className="relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 shadow-xl dark:shadow-none border border-slate-200 dark:border-slate-700 h-full">
                      <div className="flex items-start gap-4 mb-6">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0"
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400">
                            {feature.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {feature.benefits.map((benefit, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">
                              {benefit}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          )}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            {activeTab === 'integrations' 
              ? "Need a specific integration? Our API allows custom connections to any platform."
              : "Discover how these features can transform your sales process."
            }
          </p>
          <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
            {activeTab === 'integrations' 
              ? "Learn About Our API ?"
              : "Schedule a Demo ?"
            }
          </button>
        </motion.div>
      </div>
    </section>
  )
}
