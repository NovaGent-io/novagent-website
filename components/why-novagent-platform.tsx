"use client"

import { motion } from "framer-motion"
import { Brain, Shield, Eye, Zap, Building2, Users, ChartBar, Lock } from "lucide-react"

const WhyNovaGentPlatform = () => {
  const features = [
    {
      icon: Brain,
      title: "One Intelligent Agent",
      description: "Not 7 separate bots, but one unified AI that understands your entire business context",
      gradient: "from-purple-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Single-tenant architecture means your data and AI are completely isolated",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Eye,
      title: "Complete Transparency",
      description: "Real-time dashboards show exactly what your agent is doing and the ROI it's delivering",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Instant Scalability",
      description: "Add or remove skills as your business evolves - no new deployments needed",
      gradient: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-950 z-0"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            The Power of a True Platform
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Unlike DIY tools or black-box services, NovaGent delivers the perfect balance of power, transparency, and expertise
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* DIY Tools */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">DIY Platforms</h3>
                  <p className="text-gray-500 text-sm">Build it yourself, manage it yourself</p>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">?</span>
                    <span className="text-gray-400">Steep learning curve</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">?</span>
                    <span className="text-gray-400">Hidden operational costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">?</span>
                    <span className="text-gray-400">No guaranteed outcomes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">?</span>
                    <span className="text-gray-400">You own all the risk</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* NovaGent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative lg:-mt-4"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-sm border-2 border-purple-500 rounded-2xl p-8 h-full">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    RECOMMENDED
                  </span>
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">NovaGent</h3>
                  <p className="text-purple-200 text-sm">Managed AI Platform</p>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">?</span>
                    <span className="text-gray-200">Expert configuration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">?</span>
                    <span className="text-gray-200">Continuous optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">?</span>
                    <span className="text-gray-200">Transparent ROI tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">?</span>
                    <span className="text-gray-200">Guaranteed outcomes</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Black Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">Black-Box Services</h3>
                  <p className="text-gray-500 text-sm">Trust us, it's working... somehow</p>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">?</span>
                    <span className="text-gray-400">No visibility into operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">?</span>
                    <span className="text-gray-400">Unclear pricing models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">?</span>
                    <span className="text-gray-400">Limited customization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">?</span>
                    <span className="text-gray-400">Vendor lock-in risks</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Key Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            What Makes NovaGent Different
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-purple-500 rounded-xl p-6 h-full transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyNovaGentPlatform
