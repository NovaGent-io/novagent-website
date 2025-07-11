"use client"

import { motion } from "framer-motion"
import { Brain, Users, Calendar, HeadphonesIcon, BarChart3, FileText, Phone, Mail, TrendingUp, Shield, Briefcase, Home, ShoppingCart, Gavel } from "lucide-react"
import { useState } from "react"

const WhyNovaGentModular = () => {
  const [activeSkills, setActiveSkills] = useState([0, 1, 2, 3])
  
  const skills = [
    { icon: Users, name: "Prospect Hunter", color: "from-purple-500 to-purple-600" },
    { icon: Calendar, name: "Schedule Coordinator", color: "from-cyan-500 to-cyan-600" },
    { icon: HeadphonesIcon, name: "Support Concierge", color: "from-blue-500 to-blue-600" },
    { icon: BarChart3, name: "Insight Intelligence", color: "from-green-500 to-green-600" },
    { icon: Phone, name: "Smart Outreach Dialer", color: "from-pink-500 to-pink-600" },
    { icon: Shield, name: "Visibility & Trust Manager", color: "from-amber-500 to-amber-600" },
    { icon: Briefcase, name: "Talent Scout Engine", color: "from-indigo-500 to-indigo-600" },
    { icon: FileText, name: "Legal Logic Hub", color: "from-red-500 to-red-600" },
  ]

  const toggleSkill = (index: number) => {
    setActiveSkills(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Your Agent, Your Configuration
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            One intelligent agent that adapts to your exact business needs with modular skills you can activate instantly
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Agent Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                {/* Central Agent */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-32 h-32 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <Brain className="w-16 h-16 text-white" />
                  </motion.div>
                </div>
                
                {/* Orbiting Skills */}
                {skills.slice(0, 8).map((skill, index) => {
                  const angle = (index * 360) / 8
                  const radius = 120
                  const x = Math.cos((angle * Math.PI) / 180) * radius
                  const y = Math.sin((angle * Math.PI) / 180) * radius
                  const isActive = activeSkills.includes(index)
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0.3,
                        scale: isActive ? 1 : 0.8,
                        x: isActive ? x : x * 0.5,
                        y: isActive ? y : y * 0.5
                      }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => toggleSkill(index)}
                    >
                      <div className={`w-14 h-14 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}>
                        <skill.icon className="w-7 h-7 text-white" />
                      </div>
                    </motion.div>
                  )
                })}
                
                {/* Connection Lines */}
                {activeSkills.map((skillIndex) => {
                  const angle = (skillIndex * 360) / 8
                  const radius = 120
                  const x = Math.cos((angle * Math.PI) / 180) * radius
                  const y = Math.sin((angle * Math.PI) / 180) * radius
                  
                  return (
                    <motion.div
                      key={`line-${skillIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      className="absolute top-1/2 left-1/2 origin-left"
                      style={{
                        width: radius,
                        height: '2px',
                        background: 'linear-gradient(to right, rgba(168, 85, 247, 0.5), transparent)',
                        transform: `rotate(${angle}deg)`,
                      }}
                    />
                  )
                })}
              </div>
              
              <p className="text-center mt-8 text-sm text-gray-600 dark:text-gray-400">
                Click skills to toggle them on/off
              </p>
            </motion.div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                The Power of Modular AI
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Start Small, Scale Smart
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Begin with the skills you need today. Add more as your business grows, without deploying new agents or systems.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Unified Intelligence
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      One agent with complete context across all your business operations. No more fragmented data or disconnected workflows.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Pay for Value, Not Seats
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our pricing scales with the actual work performed, not arbitrary user limits. True value-based pricing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Preview */}
              <div className="mt-10 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  14+ Agent Skills Available:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Lead Generation', 'Appointment Setting', 'Customer Support', 'Data Analytics', 'SEO Management', 'Legal Docs', 'Finance Ops', '+ 7 more'].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full text-xs text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyNovaGentModular
