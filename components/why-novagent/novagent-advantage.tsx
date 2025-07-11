"use client"

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { 
  Sparkles, 
  TrendingUp, 
  Shield, 
  Eye, 
  Lock,
  Rocket,
  Brain,
  Layers,
  ArrowRight,
  ChevronDown
} from "lucide-react"

const NovaGentAdvantage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedTransformation, setSelectedTransformation] = useState(0)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const springConfig = { stiffness: 100, damping: 20 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        mouseX.set((e.clientX - rect.left - rect.width / 2) / 20)
        mouseY.set((e.clientY - rect.top - rect.height / 2) / 20)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const transformations = [
    {
      from: "Chaos",
      to: "Harmony",
      description: "Transform fragmented tools into one powerful, unified AI system",
      icon: Brain,
      fromColor: "text-red-400",
      toColor: "from-purple-400 to-cyan-400"
    },
    {
      from: "Blindness",
      to: "Clarity",
      description: "From black-box mystery to complete transparency",
      icon: Eye,
      fromColor: "text-gray-400",
      toColor: "from-cyan-400 to-blue-400"
    },
    {
      from: "Struggle",
      to: "Flow",
      description: "From DIY complexity to managed excellence",
      icon: Shield,
      fromColor: "text-orange-400",
      toColor: "from-emerald-400 to-teal-400"
    },
    {
      from: "Limits",
      to: "Freedom",
      description: "From rigid constraints to infinite possibilities",
      icon: Rocket,
      fromColor: "text-yellow-400",
      toColor: "from-purple-400 to-fuchsia-400"
    }
  ]

  // Auto-advance timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedTransformation((prev) => (prev + 1) % transformations.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [transformations.length])

  return (
    <section ref={containerRef} className="relative py-20 md:py-24 flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 opacity-40">
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600 blur-[150px]" 
          />
          <motion.div 
            animate={{ 
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600 blur-[150px]" 
          />
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, 100, 0],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-600 blur-[150px]" 
          />
          <motion.div 
            animate={{ 
              x: [0, -100, 0],
              y: [0, -100, 0],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600 blur-[150px]" 
          />
        </div>

        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              }}
              animate={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content */}
        <motion.div
          style={{ x, y }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-white/40 block mb-2 text-3xl md:text-4xl">From</span>
              <motion.span
                key={`from-${selectedTransformation}`}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className={`block text-5xl md:text-6xl lg:text-7xl mb-4 ${transformations[selectedTransformation].fromColor}`}
              >
                {transformations[selectedTransformation].from}
              </motion.span>
              <span className="text-white/40 block mb-2 text-3xl md:text-4xl">to</span>
              <motion.span
                key={`to-${selectedTransformation}`}
                initial={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className={`block text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r ${transformations[selectedTransformation].toColor}`}
              >
                {transformations[selectedTransformation].to}
              </motion.span>
            </h2>
          </motion.div>

          {/* Icon Animation */}
          <motion.div
            key={`icon-${selectedTransformation}`}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="flex justify-center mb-8"
          >
            <div className={`p-6 rounded-full bg-gradient-to-br ${transformations[selectedTransformation].toColor} opacity-20`}>
              {(() => {
                const Icon = transformations[selectedTransformation].icon;
                return <Icon className="w-16 h-16 md:w-20 md:h-20 text-white" />;
              })()}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            key={`desc-${selectedTransformation}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {transformations[selectedTransformation].description}
          </motion.p>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mb-12">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedTransformation(index)}
                className="group relative p-2"
              >
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300
                    ${selectedTransformation === index 
                      ? 'bg-white w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                    }
                  `}
                />
              </button>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <button className="group relative px-10 py-5 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 rounded-full bg-[length:200%] animate-gradient" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 opacity-50 bg-[length:200%] animate-gradient" />
              <span className="relative flex items-center gap-3 text-white font-semibold text-lg">
                Experience the Transformation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Mobile-friendly indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ChevronDown className="w-6 h-6 text-white/40 animate-bounce" />
        </motion.div>
      </div>


    </section>
  )
}

export default NovaGentAdvantage
