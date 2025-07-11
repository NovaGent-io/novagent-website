import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function TransformSection() {
  const router = useRouter()
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Calculate what your AI agent is doing right now
  const getAgentActivity = () => {
    const hour = currentTime.getHours()
    const minute = currentTime.getMinutes()
    const second = currentTime.getSeconds()
    
    const activities = [
      { time: "Right now", action: "qualifying leads while you read this", metric: "3 leads analyzed" },
      { time: "Last hour", action: "sent follow-up emails to prospects", metric: "27 emails sent" },
      { time: "While you slept", action: "handled customer inquiries", metric: "14 tickets resolved" },
      { time: "This week", action: "generated SEO content", metric: "8 articles published" },
    ]
    
    // Rotate through activities based on seconds
    const index = Math.floor(second / 15) % activities.length
    return activities[index]
  }

  const activity = getAgentActivity()

  return (
    <section className="relative py-20 md:py-32 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* The Time Reveal */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                <span>Your AI is working right now</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                While you focus on strategy,
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                  your AI handles execution
                </span>
              </h2>
            </motion.div>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Every second counts in business. See what your AI agent could be accomplishing 
              while you focus on what matters most.
            </motion.p>
          </div>

          {/* The Live Activity Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 animate-pulse" />
              </div>
              
              {/* Clock Display */}
              <div className="relative z-10 text-center">
                <div className="text-5xl md:text-7xl font-mono font-bold text-gray-900 dark:text-white mb-2">
                  {currentTime.toLocaleTimeString()}
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
                
                {/* Activity Ticker */}
                <motion.div
                  key={activity.time}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="text-left">
                      <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                        {activity.time}
                      </p>
                      <p className="text-lg text-gray-900 dark:text-white">
                        Your AI agent {activity.action}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        {activity.metric}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* The Time Math */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { number: "168", label: "Hours per week your AI works" },
              { number: "8,760", label: "Hours per year of productivity" },
              { number: "0", label: "Sick days or vacations" },
              { number: "100+", label: "Tasks handled simultaneously" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* The Single CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20 rounded-2xl p-8 md:p-12 border border-purple-200 dark:border-purple-800">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Your AI agent is waiting to start
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Every minute you wait is a minute of productivity lost. 
                See exactly how AI can amplify your team's impact.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 px-8 py-6 text-lg"
                onClick={() => router.push("/contact")}
              >
                Start Working Smarter Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Free consultation. See your custom AI solution in action.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
