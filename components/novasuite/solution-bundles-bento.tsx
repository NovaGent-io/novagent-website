"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  ChevronRight, 
  TrendingUp, 
  Building2, 
  Users, 
  ShoppingCart, 
  Briefcase, 
  Globe,
  ShieldCheck,
  Target,
  DollarSign,
  UserPlus,
  FileText,
  BarChart3,
  Cpu
} from 'lucide-react'

interface Bundle {
  id: string
  title: string
  subtitle: string
  description: string
  icon: React.ReactElement
  gradient: string
  glowColor: string
  stats: {
    active: string
    growth: string
  }
  savings: string
  size: 'large' | 'medium' | 'small'
  href: string
}

const bundles: Bundle[] = [
  {
    id: 'growth',
    title: 'Growth & GTM Bundle',
    subtitle: 'For sales-focused organizations',
    description: 'Includes: Prospect Hunter, Schedule Coordinator, Smart Dialer, SEO Manager',
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-purple-600 to-blue-600',
    glowColor: 'rgba(147, 51, 234, 0.5)',
    stats: { active: '2.4K', growth: '+32%' },
    savings: 'Save 20%+',
    size: 'large',
    href: '/solutions/novasuite/bundles/growth-gtm'
  },
  {
    id: 'realestate',
    title: 'Real Estate Bundle',
    subtitle: 'Complete real estate workflow',
    description: 'Includes: Lead Gen, Scheduling, Legal Docs, Property Manager',
    icon: <Building2 className="w-6 h-6" />,
    gradient: 'from-blue-600 to-cyan-600',
    glowColor: 'rgba(37, 99, 235, 0.5)',
    stats: { active: '1.8K', growth: '+28%' },
    savings: 'Save 25%+',
    size: 'medium',
    href: '/solutions/novasuite/bundles/real-estate'
  },
  {
    id: 'hr',
    title: 'HR & Compliance Bundle',
    subtitle: 'People operations focus',
    description: 'Includes: Onboarding, Compliance, Recruitment, Workflow',
    icon: <Users className="w-6 h-6" />,
    gradient: 'from-cyan-600 to-teal-600',
    glowColor: 'rgba(6, 182, 212, 0.5)',
    stats: { active: '950', growth: '+45%' },
    savings: 'Save 30%+',
    size: 'medium',
    href: '/solutions/novasuite/bundles/hr-compliance'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Retail Bundle',
    subtitle: 'Online business operations',
    description: 'Includes: Commerce Ops, Finance, Support, Analytics',
    icon: <ShoppingCart className="w-6 h-6" />,
    gradient: 'from-purple-600 to-pink-600',
    glowColor: 'rgba(219, 39, 119, 0.5)',
    stats: { active: '3.1K', growth: '+52%' },
    savings: 'Save 35%+',
    size: 'medium',
    href: '/solutions/novasuite/bundles/ecommerce-retail'
  },
  {
    id: 'legal',
    title: 'Legal & Risk Bundle',
    subtitle: 'Compliance-heavy industries',
    description: 'Includes: Legal Docs, Compliance, Analytics, Workflow',
    icon: <Briefcase className="w-6 h-6" />,
    gradient: 'from-slate-600 to-slate-800',
    glowColor: 'rgba(71, 85, 105, 0.5)',
    stats: { active: '620', growth: '+18%' },
    savings: 'Save 25%+',
    size: 'small',
    href: '/solutions/novasuite/bundles/legal-risk'
  },
  {
    id: 'enterprise',
    title: 'Enterprise Ops Bundle',
    subtitle: 'Large organization operations',
    description: 'Includes: Finance, Analytics, Workflow, Support',
    icon: <Globe className="w-6 h-6" />,
    gradient: 'from-pink-600 to-purple-600',
    glowColor: 'rgba(236, 72, 153, 0.5)',
    stats: { active: '480', growth: '+38%' },
    savings: 'Save 30%+',
    size: 'small',
    href: '/solutions/novasuite/bundles/enterprise-ops'
  }
]

export default function SolutionBundlesBento() {
  const [hoveredBundle, setHoveredBundle] = useState<string | null>(null)

  const getSizeClasses = (size: string) => {
    switch(size) {
      case 'large': return 'md:col-span-2 md:row-span-2'
      case 'medium': return 'md:col-span-1 md:row-span-2'
      case 'small': return 'md:col-span-1 md:row-span-1'
      default: return 'md:col-span-1 md:row-span-1'
    }
  }

  return (
    <section className="bg-slate-100 dark:bg-slate-900/70 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Pre-Configured Solution Bundles
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Accelerate your results with our expert-designed bundles for specific industries and use cases.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(200px,auto)]">
            {bundles.map((bundle) => (
              <motion.div
                key={bundle.id}
                className={`${getSizeClasses(bundle.size)} relative group cursor-pointer`}
                onMouseEnter={() => setHoveredBundle(bundle.id)}
                onMouseLeave={() => setHoveredBundle(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: bundles.indexOf(bundle) * 0.1 }}
              >
                {/* Glow Effect - Desktop Only */}
                <div 
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl hidden md:block ${
                    hoveredBundle === bundle.id ? 'opacity-100' : ''
                  }`}
                  style={{
                    background: `radial-gradient(circle at center, ${bundle.glowColor}, transparent)`,
                  }}
                />
                
                {/* Card */}
                <motion.div 
                  className="relative h-full bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-slate-800 group-hover:border-slate-300 dark:group-hover:border-slate-700 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${bundle.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative h-full p-6 flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${bundle.gradient} text-white shadow-lg`}>
                        {bundle.icon}
                      </div>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                        {bundle.savings}
                      </span>
                    </div>
                    
                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{bundle.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{bundle.subtitle}</p>
                    
                    {/* Stats (for larger cards) */}
                    {bundle.size !== 'small' && (
                      <div className="flex gap-6 mb-4">
                        <div>
                          <p className="text-2xl font-bold text-slate-900 dark:text-white">{bundle.stats.active}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-500">Active Users</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-green-600 dark:text-green-400">{bundle.stats.growth}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-500">Growth Rate</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Skills Preview (for medium/large cards) */}
                    {bundle.size !== 'small' && (
                      <p className="text-sm text-slate-500 dark:text-slate-500 mb-4 line-clamp-2">{bundle.description}</p>
                    )}
                    
                    {/* CTA */}
                    <div className="mt-auto">
                      <Link
                        href={bundle.href}
                        className="group/btn flex items-center gap-2 text-slate-900 dark:text-white font-medium hover:gap-3 transition-all"
                      >
                        <span>View Bundle Details</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Animated Background Pattern - Desktop Only */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none hidden md:block">
                    <div 
                      className="absolute inset-0" 
                      style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, transparent 20%, rgba(0,0,0,0.1) 21%, transparent 22%),
                                          radial-gradient(circle at 75% 80%, transparent 20%, rgba(0,0,0,0.1) 21%, transparent 22%)`,
                        backgroundSize: '50px 50px',
                        animation: hoveredBundle === bundle.id ? 'float 3s ease-in-out infinite' : 'none'
                      }} 
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Healthcare Admin Bundle - Special Card */}
          <motion.div 
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredBundle('healthcare')}
              onMouseLeave={() => setHoveredBundle(null)}
            >
              {/* Glow Effect - Desktop Only */}
              <div 
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl hidden md:block ${
                  hoveredBundle === 'healthcare' ? 'opacity-100' : ''
                }`}
                style={{ background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.5), transparent)' }} 
              />
              
              <motion.div 
                className="relative bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-slate-800 group-hover:border-slate-300 dark:group-hover:border-slate-700 transition-all duration-300 p-6 md:p-8 shadow-sm hover:shadow-xl"
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600 opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
                
                <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Healthcare Admin Bundle</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-2">Healthcare administration</p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">Includes: Compliance, Onboarding, Support, Legal</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-3">
                    <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium whitespace-nowrap">
                      Most Popular in Healthcare
                    </span>
                    <Link
                      href="/solutions/novasuite/bundles/healthcare-admin"
                      className="group/btn flex items-center gap-2 text-slate-900 dark:text-white font-medium hover:gap-3 transition-all"
                    >
                      <span>View Bundle Details</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}
