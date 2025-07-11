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

interface UseCase {
  title: string
  industry: string
  challenge: string
  solution: string
  result: string
  icon: keyof typeof Icons
}

export default function IntegrationsAndUseCasesSection() {
  const [activeTab, setActiveTab] = useState<'integrations' | 'usecases'>('integrations')

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
      name: 'LinkedIn Sales Navigator',
      icon: 'Linkedin',
      description: 'Enhanced targeting with professional network data',
      category: 'data'
    },
    {
      name: 'ZoomInfo',
      icon: 'Database',
      description: 'Enriched B2B contact and company intelligence',
      category: 'data'
    }
  ]

  const useCases: UseCase[] = [
    {
      title: 'SaaS Startup Scales from 10 to 100 Demos/Month',
      industry: 'Technology',
      challenge: 'Limited sales team struggling to identify and reach decision makers',
      solution: 'Deployed Prospect Hunter to target VP and C-level executives at mid-market companies',
      result: '10x increase in qualified demos, 3x improvement in close rate',
      icon: 'Rocket'
    },
    {
      title: 'Marketing Agency Fills Pipeline in New Vertical',
      industry: 'Professional Services',
      challenge: 'Breaking into healthcare market with no existing contacts',
      solution: 'Used industry-specific targeting to identify and engage healthcare CMOs',
      result: '47 qualified meetings in first 60 days, $2M pipeline generated',
      icon: 'TrendingUp'
    },
    {
      title: 'Financial Services Firm Reduces CAC by 60%',
      industry: 'Finance',
      challenge: 'High cost of acquiring qualified leads through traditional channels',
      solution: 'Implemented AI-driven qualification to focus only on high-intent prospects',
      result: 'Reduced cost per qualified lead from $500 to $200',
      icon: 'DollarSign'
    },
    {
      title: 'E-commerce Platform Expands to Enterprise',
      industry: 'Retail Tech',
      challenge: 'Needed to identify and engage enterprise retail chains',
      solution: 'Targeted retailers with 50+ locations using technographic data',
      result: '15 enterprise deals closed in 6 months, $5M ARR added',
      icon: 'ShoppingCart'
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
            Prospect Hunter seamlessly integrates with your existing tools and delivers results across industries
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
              onClick={() => setActiveTab('usecases')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'usecases'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Success Stories
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
              {useCases.map((useCase, index) => {
                const Icon = Icons[useCase.icon] || Icons.Briefcase
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
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                            {useCase.title}
                          </h3>
                          <span className="text-sm text-slate-500 dark:text-slate-400">
                            {useCase.industry}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Challenge
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {useCase.challenge}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Solution
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {useCase.solution}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                          <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Result
                          </h4>
                          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                            {useCase.result}
                          </p>
                        </div>
                      </div>
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
              ? "Don't see your tool? We're constantly adding new integrations."
              : "Ready to write your own success story?"
            }
          </p>
          <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
            {activeTab === 'integrations' 
              ? "Request an Integration ?"
              : "Start Your Free Trial ?"
            }
          </button>
        </motion.div>
      </div>
    </section>
  )
}
