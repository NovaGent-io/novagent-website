"use client"

import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"
import { Lightbulb, Award, Sparkles, BarChartBig, ArrowDown, Zap, Target, BarChart4, Users } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import ContrastPanelsSection from "@/components/contrast-panels-section"
import ExperienceTimelineSection from "@/components/experience-timeline-section"
import FounderStorySection from "@/components/founder-story-section"

const WhyNovaGentPage = () => {
  const [headlineIndex, setHeadlineIndex] = useState(0)
  const headlines = [
    { text: "Tired of AI Promises?", gradient: "linear-gradient(to right, #f59e0b, #f97316)" },
    { text: "Demand Verifiable Outcomes.", gradient: "linear-gradient(to right, #22d3ee, #d946ef)" },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length)
    }, 3000)
    return () => clearTimeout(timer)
  }, [headlineIndex])

  const fadeInSlideUp = (delay: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
  })

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        delay: 1.5 + i * 0.2,
      },
    }),
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-purple-700/30 to-slate-800 text-gray-100">
      {/* === Hero Section === */}
      <section className="relative py-24 md:py-40 text-center overflow-hidden min-h-[80vh] md:min-h-screen flex flex-col justify-center items-center">
        <AnimatedBackground />
        <div className="container mx-auto px-6 relative z-20 flex flex-col items-center">
          <div className="mb-6 min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] lg:min-h-[7rem] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={headlineIndex}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent"
                style={{
                  backgroundImage: headlines[headlineIndex].gradient,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {headlines[headlineIndex].text}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.div className="max-w-3xl mx-auto" variants={fadeInSlideUp(0.8)} initial="hidden" animate="visible">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              NovaGent was built to bridge the gap between AI's promise and its practical application. Our unique
              'Managed-AI' model ensures your business achieves{" "}
              <span className="font-semibold text-cyan-400">verifiable results</span> through{" "}
              <span className="font-semibold text-fuchsia-400">expert-managed</span> solutions that deliver{" "}
              <span className="font-semibold text-purple-400">continuous ROI</span>.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center items-center gap-8 md:gap-12 mt-10"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              custom={0}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-2"
            >
              <Award className="w-7 h-7 text-cyan-400" />
              <span className="text-xs text-slate-400">Results</span>
            </motion.div>
            <motion.div
              custom={1}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-2"
            >
              <Sparkles className="w-7 h-7 text-fuchsia-400" />
              <span className="text-xs text-slate-400">Expertise</span>
            </motion.div>
            <motion.div
              custom={2}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-2"
            >
              <BarChartBig className="w-7 h-7 text-purple-400" />
              <span className="text-xs text-slate-400">Growth</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-30"
          variants={fadeInSlideUp(2.5)}
          initial="hidden"
          animate="visible"
        >
          <a href="#next-section" aria-label="Scroll down to next section">
            <ArrowDown className="w-8 h-8 text-slate-400 hover:text-slate-200 transition-colors animate-bounce" />
          </a>
        </motion.div>
      </section>

      {/* === Contrast Panels Section === */}
      <ContrastPanelsSection />

      {/* === NEW Experience Timeline Section === */}
      <ExperienceTimelineSection />

      {/* === Founder Story Section === */}
      <FounderStorySection />

      {/* Final CTA Section (Redesigned) */}
      <section className="py-20 md:py-32 bg-gradient-to-t from-slate-800 to-purple-700/30">
        <div className="container mx-auto px-6">
          {/* Headline with Gradient */}
          <div className="text-center mb-12">
            <Lightbulb className="w-16 h-16 text-fuchsia-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500">
              Experience the NovaGent Difference
            </h2>
            <p className="text-2xl font-semibold text-gray-100">Let's Engineer Your AI Success Story, Together</p>
          </div>

          {/* Modern Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <Target className="w-8 h-8 text-cyan-400" />,
                title: "Targeted Solutions",
                description: "AI solutions engineered specifically for your unique business challenges",
              },
              {
                icon: <Users className="w-8 h-8 text-fuchsia-400" />,
                title: "Expert Management",
                description: "Fully managed by our team of AI specialists and business strategists",
              },
              {
                icon: <BarChart4 className="w-8 h-8 text-purple-400" />,
                title: "Measurable Results",
                description: "Clear metrics and transparent reporting on your AI investment",
              },
              {
                icon: <Zap className="w-8 h-8 text-amber-400" />,
                title: "Transformative Impact",
                description: "Fundamentally transform your revenue, marketing, and operations",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 hover:border-slate-600 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons (Unchanged Design) */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              asChild
            >
              <Link href="/contact">Schedule Your Strategic AI Consultation</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-cyan-400 border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              asChild
            >
              <Link href="/solutions/ai-agent-suite">See Our Core Agent Suite</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyNovaGentPage
