"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Target, UsersRound, TrendingUp, LayoutDashboard, CheckCircle, ChevronDown } from "lucide-react"

const ExperienceTimelineSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => {
    setExpandedIndex(index)
  }

  const handleMouseLeave = () => {
    setExpandedIndex(null)
  }

  const tenets = [
    {
      icon: <Target className="w-8 h-8" />,
      iconColor: "bg-gradient-to-br from-cyan-400 to-cyan-600",
      title: "We Deliver Managed Outcomes, Not Just Software Licenses.",
      boldStatement: "Your Results Are Our Responsibility.",
      bulletIconColor: "text-cyan-400",
      explanationPoints: [
        "Our 'Agents-as-a-Service' model means we're deeply invested in your AI agents' success.",
        "We forge partnerships to design, deploy, and continuously refine AI solutions.",
        "We meticulously manage your AI to consistently exceed your business objectives.",
        "We measure our success by your tangible achievements, not just software delivery.",
      ],
    },
    {
      icon: <UsersRound className="w-8 h-8" />,
      iconColor: "bg-gradient-to-br from-fuchsia-400 to-fuchsia-600",
      title: "Human Expertise Amplifying Artificial Intelligence.",
      boldStatement: "AI Power, Elevated by Human Ingenuity.",
      bulletIconColor: "text-fuchsia-400",
      explanationPoints: [
        "Our seasoned strategists and AI specialists handle complex design and prompt engineering.",
        "We manage seamless integrations and critical exception handling for reliable performance.",
        "Our team includes founders who intimately understand business challenges.",
        "We create continuous learning cycles that make your AI agents exceptionally effective.",
      ],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      iconColor: "bg-gradient-to-br from-purple-400 to-purple-600",
      title: "Continuous Optimization – Your Agents Get Smarter, Relentlessly.",
      boldStatement: "Intelligence That Evolves With You.",
      bulletIconColor: "text-purple-400",
      explanationPoints: [
        "NovaGents are designed to self-evolve by analyzing their own performance data from every interaction.",
        "They leverage a proprietary learning loop to automatically refine strategies and improve their effectiveness over time.",
        "This process ensures your agents are always operating at peak performance and adapting to new challenges.",
        "Our expert team provides strategic oversight to guide this evolution, guaranteeing your agents become more valuable every day.",
      ],
    },
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      iconColor: "bg-gradient-to-br from-sky-400 to-sky-600",
      title: "Full-Spectrum Solutions, Transparently Delivered.",
      boldStatement: "Complexity Mastered, Results Revealed.",
      bulletIconColor: "text-sky-400",
      explanationPoints: [
        "We take full ownership of the entire AI agent lifecycle.",
        "Your dedicated NovaGent dashboard provides unambiguous ROI reporting.",
        "Our 'Core Agent' capabilities are engineered for your toughest challenges.",
        "You get transparent, real-time insights into the value generated every day.",
      ],
    },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100">
            What Truly Defines the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              NovaGent Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline connector line */}
          <div className="absolute left-[25px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/30 via-purple-500/30 to-fuchsia-500/30 transform -translate-x-1/2 md:translate-x-0"></div>

          <div className="space-y-12 md:space-y-24">
            {tenets.map((tenet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline node */}
                <div
                  className={`absolute left-0 md:left-1/2 top-0 w-12 h-12 rounded-full flex items-center justify-center transform -translate-x-1/2 shadow-lg ${tenet.iconColor} text-white z-10`}
                >
                  <span className="text-lg font-bold">{index + 1}</span>
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-[calc(50%+2rem)]" : "md:ml-[calc(50%+2rem)]"}`}
                >
                  <div
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-purple-500/10 hover:border-slate-600 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`p-3 rounded-full mr-4 ${tenet.iconColor}`}>{tenet.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-100 group-hover:text-white transition-colors duration-300">
                            {tenet.title}
                          </h3>
                          <p className="text-lg font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">
                            {tenet.boldStatement}
                          </p>
                        </div>
                      </div>
                      <div className="text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${expandedIndex === index ? "rotate-180" : ""}`}
                        />
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-3 mt-6 pl-2">
                            {tenet.explanationPoints.map((point, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                className="flex items-start"
                              >
                                <CheckCircle className={`w-5 h-5 ${tenet.bulletIconColor} mr-3 mt-1 flex-shrink-0`} />
                                <span className="text-gray-300">{point}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceTimelineSection
