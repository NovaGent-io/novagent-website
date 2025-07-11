"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import * as Icons from 'lucide-react'
import { useState } from 'react'

interface Integration {
  name: string
  icon: keyof typeof Icons
  color: string
}

const integrations: Integration[] = [
  { name: "Salesforce", icon: "Cloud", color: "from-blue-400 to-blue-600" },
  { name: "HubSpot", icon: "Layers", color: "from-orange-400 to-orange-600" },
  { name: "Slack", icon: "MessageSquare", color: "from-purple-400 to-purple-600" },
  { name: "Microsoft Teams", icon: "Users", color: "from-indigo-400 to-indigo-600" },
  { name: "Google Calendar", icon: "Calendar", color: "from-red-400 to-red-600" },
  { name: "Outlook", icon: "Mail", color: "from-blue-500 to-blue-700" },
  { name: "LinkedIn Sales Navigator", icon: "Linkedin", color: "from-blue-600 to-blue-800" },
  { name: "ZoomInfo", icon: "Database", color: "from-teal-400 to-teal-600" },
  { name: "Pipedrive", icon: "GitBranch", color: "from-green-400 to-green-600" },
  { name: "Zoho CRM", icon: "Grid", color: "from-yellow-400 to-yellow-600" },
  { name: "ActiveCampaign", icon: "Zap", color: "from-blue-400 to-purple-600" },
  { name: "Google Ads", icon: "TrendingUp", color: "from-green-500 to-green-700" },
  { name: "Mailchimp", icon: "Mail", color: "from-yellow-500 to-yellow-700" },
  { name: "Zoom", icon: "Video", color: "from-blue-500 to-blue-700" },
  { name: "Gmail", icon: "Mail", color: "from-red-500 to-red-700" },
  { name: "Google Sheets", icon: "FileSpreadsheet", color: "from-green-500 to-green-700" },
  { name: "Airtable", icon: "Table", color: "from-cyan-400 to-cyan-600" },
  { name: "Notion", icon: "FileText", color: "from-gray-600 to-gray-800" },
  { name: "Trello", icon: "Trello", color: "from-blue-500 to-blue-700" },
  { name: "Asana", icon: "CheckSquare", color: "from-red-400 to-pink-600" },
  { name: "Google Drive", icon: "HardDrive", color: "from-yellow-400 to-orange-600" },
  { name: "Dropbox", icon: "Archive", color: "from-blue-400 to-blue-600" },
  { name: "Stripe", icon: "CreditCard", color: "from-purple-500 to-indigo-600" },
  { name: "Shopify", icon: "ShoppingCart", color: "from-green-500 to-green-700" },
  { name: "QuickBooks", icon: "DollarSign", color: "from-green-600 to-green-800" },
  { name: "Calendly", icon: "CalendarDays", color: "from-blue-400 to-indigo-600" },
  { name: "ClickUp", icon: "MousePointer", color: "from-pink-400 to-purple-600" },
  { name: "Monday CRM", icon: "Calendar", color: "from-red-500 to-pink-600" },
  { name: "Copper", icon: "Coins", color: "from-orange-400 to-red-600" },
  { name: "Agile CRM", icon: "Activity", color: "from-blue-500 to-teal-600" }
]

export default function IntegrationsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedIntegration, setSelectedIntegration] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: -60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Navigation Back Link */}
      <div className="container mx-auto px-4 sm:px-6 pt-20 pb-4">
        <Link href="/platform" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Platform
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
        {/* Animated Background Gradient Effect */}
        <motion.div 
          className="absolute inset-0 -z-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-500">
              Seamlessly Connected
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your NovaGent agent integrates with the tools you already use, creating a unified ecosystem for intelligent automation.
          </motion.p>
        </div>
      </section>

      {/* Integrations Grid Section */}
      <section className="py-12 sm:py-16 md:py-24 perspective-1000">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {integrations.map((integration, index) => {
              const Icon = Icons[integration.icon] || Icons.Box
              const isHovered = hoveredIndex === index
              const isSelected = selectedIntegration === integration.name
              
              return (
                <motion.div
                  key={integration.name}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -8,
                    rotateY: 5,
                    rotateX: 5,
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 17 
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() => setSelectedIntegration(isSelected ? null : integration.name)}
                  className="relative group cursor-pointer"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div 
                    className={`relative bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg dark:shadow-none border-2 transition-all duration-300 h-full ${
                      isSelected 
                        ? 'border-cyan-500 dark:border-cyan-400' 
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                    animate={{
                      boxShadow: isHovered 
                        ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
                        : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    {/* Animated Background Gradient */}
                    <motion.div 
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${integration.color} opacity-0`}
                      animate={{
                        opacity: isHovered ? 0.1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Floating Particles Effect */}
                    {isHovered && (
                      <>
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                            initial={{ 
                              x: '50%', 
                              y: '100%',
                              opacity: 0
                            }}
                            animate={{
                              x: `${20 + i * 30}%`,
                              y: '-20%',
                              opacity: [0, 1, 0]
                            }}
                            transition={{
                              duration: 2,
                              delay: i * 0.2,
                              repeat: Infinity,
                              ease: "easeOut"
                            }}
                          />
                        ))}
                      </>
                    )}
                    
                    {/* Icon with Gradient Background */}
                    <motion.div 
                      className={`relative w-12 h-12 rounded-lg bg-gradient-to-br ${integration.color} flex items-center justify-center mb-4 mx-auto`}
                      animate={{
                        rotate: isHovered ? 360 : 0,
                        scale: isHovered ? 1.15 : 1
                      }}
                      transition={{ 
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                      
                      {/* Pulse Effect on Hover */}
                      {isHovered && (
                        <motion.div
                          className={`absolute inset-0 rounded-lg bg-gradient-to-br ${integration.color}`}
                          initial={{ scale: 1, opacity: 0.5 }}
                          animate={{
                            scale: [1, 1.5, 1.5],
                            opacity: [0.5, 0, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeOut"
                          }}
                        />
                      )}
                    </motion.div>
                    
                    {/* Integration Name */}
                    <motion.h3 
                      className="relative text-sm font-medium text-center text-slate-700 dark:text-slate-300"
                      animate={{
                        color: isHovered ? '#0891b2' : undefined
                      }}
                    >
                      {integration.name}
                    </motion.h3>
                    
                    {/* Selected Checkmark */}
                    <motion.div
                      className="absolute top-2 right-2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: isSelected ? 1 : 0,
                        opacity: isSelected ? 1 : 0
                      }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <Icons.Check className="w-4 h-4 text-white" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
            
            {/* "And many more" card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                rotateY: 5,
                rotateX: 5
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer"
            >
              <motion.div className="relative bg-gradient-to-br from-cyan-500/10 to-purple-500/10 dark:from-slate-900 dark:to-slate-800 rounded-xl p-6 shadow-lg dark:shadow-none border-2 border-dashed border-slate-300 dark:border-slate-600 h-full">
                {/* Animated Plus Icon */}
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-4 mx-auto"
                  animate={{
                    rotate: [0, 90, 180, 270, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Icons.Plus className="w-6 h-6 text-white" />
                </motion.div>
                
                {/* Text with Gradient Animation */}
                <motion.h3 
                  className="text-sm font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: "200% 200%"
                  }}
                >
                  And many more
                </motion.h3>
                
                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: [0, 0.1, 0],
                    scale: [1, 1.1, 1.2],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity
                  }}
                  style={{
                    background: "radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)"
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Selected Integration Counter */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {selectedIntegration && (
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-sm text-slate-600 dark:text-slate-400"
              >
                You've selected <span className="font-semibold text-cyan-600 dark:text-cyan-400">{selectedIntegration}</span>
              </motion.p>
            )}
          </motion.div>

          {/* API Integration Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Need a specific integration? Our API allows custom connections to any platform.
            </p>
            <Link href="/contact" className="text-cyan-600 dark:text-cyan-400 font-medium hover:underline inline-flex items-center gap-2 group">
              Learn About Our API 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Icons.ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-gray-100 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to Connect Your Tools?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team will handle all the technical integration so you can focus on results.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/contact">
                Start Your Integration
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
