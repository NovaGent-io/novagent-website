"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { BrainCircuit, Target, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

const iconContainerVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.3 },
  },
}

const AnimatedIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
  <motion.div
    variants={iconContainerVariants}
    whileHover="hover"
    className={cn(
      "p-4 md:p-6 rounded-full shadow-lg flex items-center justify-center w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6",
      className,
    )}
  >
    <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
  </motion.div>
)

export default function BeyondBasicBotsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], ["100px", "0px"])

  const content = [
    {
      icon: BrainCircuit,
      iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600",
      title: "Expert-Managed Solutions",
      description:
        "Our AI specialists design, deploy, monitor, and continuously optimize your agents for peak performance. Human expertise guides AI power.",
    },
    {
      icon: Target,
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
      title: "Outcome-Driven Agents",
      description:
        "Our Core Agents are engineered to achieve your specific business objectives – from lead generation to ad campaign management and customer support.",
    },
    {
      icon: Zap,
      iconBg: "bg-gradient-to-br from-pink-500 to-fuchsia-600",
      title: "Continuous Evolution",
      description:
        "NovaGent's 'Managed-AI' means your solutions aren't static. We proactively adapt and enhance your agents as your business and the AI landscape evolve.",
    },
  ]

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: backgroundOpacity, scale, y }}
      className="relative py-20 md:py-32 bg-slate-900 text-white overflow-hidden"
      id="beyond-basic-bots"
    >
      {/* Diagonal Wave Transition - Top */}
      <div className="absolute top-0 left-0 w-full h-24 md:h-32 z-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M0 60L60 70C120 80 240 100 360 95C480 90 600 60 720 50C840 40 960 50 1080 65C1200 80 1320 100 1380 110L1440 120V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V60Z"
            fill="rgb(248 250 252 / var(--tw-bg-opacity))"
            className="fill-slate-50"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Beyond Basic Bots: Experience True{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              'Managed-AI'
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            NovaGent offers more than just software. We provide a fully managed service, ensuring your AI solutions
            deliver exceptional results and evolve with your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {content.map((item, index) => (
            <motion.div
              key={item.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-2xl border border-slate-700/50 flex flex-col items-center text-center hover:border-purple-500/70 transition-all duration-300"
            >
              <AnimatedIcon icon={item.icon} className={item.iconBg} />
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Diagonal Wave Transition - Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 z-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 30C840 20 960 10 1080 15C1200 20 1320 40 1380 50L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="rgb(15 23 42 / var(--tw-bg-opacity))"
            className="fill-slate-900"
          />
        </svg>
      </div>
    </motion.section>
  )
}
