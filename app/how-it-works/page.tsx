"use client"

import React from "react"
import type { FunctionComponent } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ChevronRight,
  Search,
  Settings2,
  Rocket,
  BrainCircuit,
  BarChart3,
  CloudCog,
  PlugZap,
  Users,
  LayoutDashboard,
  Handshake,
  Lightbulb,
  Zap,
  UserCheck,
  Sparkles,
  Award,
  MessageSquare,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Enhanced animated background component
const AbstractProcessVisual: FunctionComponent<{ className?: string; children?: React.ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 z-0",
        className,
      )}
    >
      {/* Animated geometric shapes */}
      <div className="absolute inset-0">
        {/* Large background elements */}
        <Settings2 className="absolute -left-12 -top-12 h-64 w-64 text-purple-500/5 opacity-50 animate-spin-slow" />
        <Rocket className="absolute -right-10 bottom-1/4 h-72 w-72 text-cyan-500/5 opacity-50 animate-pulse animation-delay-2000" />
        <BrainCircuit className="absolute left-1/3 top-1/2 h-48 w-48 text-blue-500/5 opacity-30 animate-pulse animation-delay-4000" />

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-400/30 rounded-full animate-float animation-delay-3000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-fuchsia-400/40 rounded-full animate-float animation-delay-5000"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float animation-delay-2000"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      </div>
      {children}
    </div>
  )
}

const processSteps = [
  {
    icon: <Search className="h-10 w-10" />,
    title: "Strategic Design",
    subtitle: "Human-Led",
    description:
      "We begin with a deep dive into your objectives. Our experts collaborate with you to define your goals and select the perfect combination of Agent Skills for your unified AI agent from the NovaCore Suite.",
    color: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-cyan-700",
  },
  {
    icon: <Settings2 className="h-10 w-10" />,
    title: "Expert Deployment", 
    subtitle: "Human-Led, Platform-Enabled",
    description:
      "Our team meticulously configures, tests, and integrates your agent into your existing workflows. You can monitor the entire process from day one on the NovaGent Platform with full transparency.",
    color: "text-fuchsia-400",
    borderColor: "border-fuchsia-500/30",
    gradientFrom: "from-fuchsia-500",
    gradientTo: "to-fuchsia-700",
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "Transparent Management",
    subtitle: "Platform-Led, Human-Supervised", 
    description:
      "Your agent gets to work with complete visibility. You track every action, KPI, and point of ROI in your real-time dashboard. Our team remains in the loop, proactively managing performance and handling exceptions.",
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-700",
  },
  {
    icon: <BrainCircuit className="h-10 w-10" />,
    title: "Continuous Optimization",
    subtitle: "Human & AI-Led",
    description:
      "Your agent gets smarter over time. We use performance data from the platform to relentlessly refine its logic, improve its effectiveness, and recommend new Agent Skills as your business evolves.",
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-700",
  },
]

const platformPillars = [
  {
    icon: <Lightbulb className="h-8 w-8 text-cyan-400" />,
    title: "Modular Agent Intelligence",
    bullets: [
      "One unified agent with configurable Agent Skills.",
      "Dynamic capability assignment from NovaCore Suite.",
      "Seamless skill addition as your business evolves.",
    ],
  },
  {
    icon: <CloudCog className="h-8 w-8 text-fuchsia-400" />,
    title: "NovaGent Platform Command Center",
    bullets: [
      "Real-time visibility into every agent action.",
      "Transparent performance tracking and ROI metrics.",
      "Unified dashboard for complete agent management.",
    ],
  },
  {
    icon: <Users className="h-8 w-8 text-purple-400" />,
    title: "Expert Human Ingenuity",
    bullets: [
      "Dedicated AI specialists managing your agent.",
      "Continuous optimization and performance tuning.",
      "Strategic guidance for maximum business impact.",
    ],
  },
]

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const progressRef = React.useRef<NodeJS.Timeout | null>(null);

  const STEP_DURATION = 5000; // 5 seconds per step
  const PROGRESS_INTERVAL = 50; // Update progress every 50ms

  React.useEffect(() => {
    // Progress animation
    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (STEP_DURATION / PROGRESS_INTERVAL));
      });
    }, PROGRESS_INTERVAL);

    // Step progression
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
      setProgress(0);
    }, STEP_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, []);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setProgress(0);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* 1. Page Hero Section - ENHANCED */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
        <AbstractProcessVisual />
        <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse">
                  NovaGent Loop
                </span>
                {" "}- How We Deliver Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-500 to-indigo-500">
                  Unified AI Agent
                </span>
              </h1>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed text-slate-300 max-w-4xl mx-auto px-4">
                Discover our continuous, cyclical approach to designing, deploying, and optimizing your single, 
                powerful AI agent equipped with the exact capabilities your business needs. One agent, infinite possibilities.
              </p>
            </div>

            {/* Key Benefits Pills */}
            <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-500">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium text-cyan-300">✨ Fully Managed</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium text-purple-300">🚀 Rapid Deployment</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium text-fuchsia-300">📈 Proven Results</span>
              </div>
            </div>

            <div className="mt-12 animate-fade-in-up animation-delay-700">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-14 px-10 text-lg font-semibold border-0 relative overflow-hidden"
              >
                <Link href="/contact">
                  <span className="relative z-10">Get Started Today</span>
                  <ChevronRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 'The NovaGent Loop - Continuous Partnership' (Circular Process Section) */}
      <section id="process-steps" className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-4xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              The NovaGent Loop: Your Continuous Journey to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                AI Excellence
              </span>
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our cyclical approach transforms the traditional setup-and-forget model into an ongoing, 
              evolving partnership that grows with your business.
            </p>
          </div>

          {/* Circular Process Visualization */}
          <div className="relative mt-8 max-w-6xl mx-auto">
            {/* Desktop Circular Layout */}
            <div className="hidden lg:block">
              <div className="relative w-full" style={{ height: '800px' }}>
                <div className="absolute inset-0 flex items-center justify-center">

                  {/* Central Hub */}
                  <div className="relative z-10 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 shadow-2xl flex items-center justify-center" style={{ marginTop: '-80px', marginLeft: '80px' }}>
                    <div className="text-center text-white">
                      <h3 className="font-bold text-2xl mb-2">Your AI Agent</h3>
                      <p className="text-slate-200 text-sm">Continuously Evolving</p>
                    </div>
                  </div>

                  {/* Circular Path and Arrows */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 900 900" style={{ left: '0', top: '-40px' }}>
                    {/* Background dashed circle - positioned at the outer edge */}
                    <circle
                      cx="490"
                      cy="450"
                      r="250"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="1"
                      strokeDasharray="5 5"
                      className="dark:stroke-slate-600"
                    />
                    
                    {/* Animated progress circle */}
                    <circle
                      cx="490"
                      cy="450"
                      r="250"
                      fill="none"
                      stroke="url(#progressGradient)"
                      strokeWidth="2"
                      strokeDasharray={`${2 * Math.PI * 250}`}
                      strokeDashoffset={`${2 * Math.PI * 250 * (1 - (activeStep * 25 + progress * 0.25) / 100)}`}
                      transform="rotate(-90 490 450)"
                      className="transition-all duration-300 opacity-60"
                    />
                    
                    {/* Curved lines from center to each step */}
                    {processSteps.map((step, index) => {
                      const angle = (index * 90 - 90) * Math.PI / 180;
                      const centerX = 490;
                      const centerY = 450;
                      const endX = centerX + Math.cos(angle) * 250;
                      const endY = centerY + Math.sin(angle) * 250;
                      const startX = centerX + Math.cos(angle) * 128; // Start from edge of center circle (radius 128)
                      const startY = centerY + Math.sin(angle) * 128;
                      
                      // Control points for the curve
                      const cp1X = centerX + Math.cos(angle) * 170;
                      const cp1Y = centerY + Math.sin(angle) * 170;
                      const cp2X = centerX + Math.cos(angle) * 210;
                      const cp2Y = centerY + Math.sin(angle) * 210;
                      
                      return (
                        <g key={index}>
                          {/* Background line */}
                          <path
                            d={`M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`}
                            fill="none"
                            stroke="#e2e8f0"
                            strokeWidth="1"
                            className="dark:stroke-slate-700"
                          />
                          {/* Animated colored line for active step */}
                          {activeStep === index && (
                            <path
                              d={`M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`}
                              fill="none"
                              stroke="url(#gradient-${index})"
                              strokeWidth="3"
                              strokeDasharray="300"
                              strokeDashoffset="300"
                              className="animate-draw-line"
                            />
                          )}
                        </g>
                      );
                    })}
                    
                    <defs>
                      <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                      {/* Individual gradients for each step */}
                      <linearGradient id="gradient-0" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                      <linearGradient id="gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                      <linearGradient id="gradient-2" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                      <linearGradient id="gradient-3" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Process Steps positioned in a circle */}
                  {processSteps.map((step, index) => {
                    const angle = (index * 90) - 90; // Start from top, go clockwise
                    const radius = 250; // Distance from center in pixels
                    const angleRad = angle * Math.PI / 180;
                    const centerOffsetX = 40; // Offset to move circle right
                    const centerOffsetY = -40; // Move circle up
                    const x = Math.cos(angleRad) * radius + centerOffsetX;
                    const y = Math.sin(angleRad) * radius + centerOffsetY;
                    
                    return (
                      <div
                        key={step.title}
                        className={cn(
                          "absolute cursor-pointer transition-all duration-500",
                          activeStep === index ? "z-20" : "z-10"
                        )}
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                        }}
                        onClick={() => handleStepClick(index)}
                      >
                        <div className="relative">
                          {/* Step Circle */}
                          <div
                            className={cn(
                              "relative w-24 h-24 rounded-full flex items-center justify-center shadow-lg transition-all duration-300",
                              activeStep === index
                                ? "bg-gradient-to-br from-purple-600 to-purple-800 scale-110 shadow-2xl shadow-purple-500/30"
                                : "bg-gradient-to-br from-cyan-500 to-blue-600 hover:scale-105"
                            )}
                          >
                            {React.cloneElement(step.icon, { 
                              className: cn(
                                "text-white transition-all duration-300",
                                activeStep === index ? "h-12 w-12" : "h-10 w-10"
                              )
                            })}
                          </div>
                          
                          {/* Step Number Badge */}
                          <div className={cn(
                            "absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-lg transition-all duration-300",
                            activeStep === index
                              ? "bg-slate-900 text-white"
                              : "bg-white text-slate-900 dark:bg-slate-800 dark:text-white"
                          )}>
                            {index + 1}
                          </div>
                        </div>

                        {/* Step Label and Subtitle */}
                        <div className="mt-4 text-center absolute left-1/2 -translate-x-1/2 w-40">
                          <h3 className={cn(
                            "text-sm font-semibold transition-colors duration-300",
                            activeStep === index ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400"
                          )}>
                            {step.title}
                          </h3>
                          <p className={cn(
                            "text-xs mt-1 transition-colors duration-300",
                            activeStep === index ? "text-slate-600 dark:text-slate-300" : "text-slate-400 dark:text-slate-500"
                          )}>
                            {step.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Active Step Details */}
                <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-3xl px-8" style={{ bottom: '-160px', marginLeft: '40px' }}>
                  <div
                    key={activeStep}
                    className={cn(
                      "bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border transition-all duration-500 animate-fade-in-up",
                      activeStep === 0 ? "border-cyan-500/20" :
                      activeStep === 1 ? "border-fuchsia-500/20" :
                      activeStep === 2 ? "border-blue-500/20" :
                      "border-purple-500/20"
                    )}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={cn(
                        "text-2xl font-bold",
                        activeStep === 0 ? "text-cyan-600" :
                        activeStep === 1 ? "text-fuchsia-600" :
                        activeStep === 2 ? "text-blue-600" :
                        "text-purple-600"
                      )}>
                        {`${activeStep + 1}. ${processSteps[activeStep].title}`}
                      </h3>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                        {processSteps[activeStep].subtitle}
                      </span>
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      {processSteps[activeStep].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step Indicators */}
              <div className="flex justify-center gap-2" style={{ marginTop: '200px', marginLeft: '40px' }}>
                {processSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleStepClick(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      activeStep === index
                        ? "w-8 bg-gradient-to-r from-blue-500 to-purple-600"
                        : "bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Mobile Layout - Vertical Cards */}
            <div className="lg:hidden space-y-6">
              {/* Mobile Step Indicators at top */}
              <div className="flex justify-center gap-2 mb-6">
                {processSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleStepClick(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      activeStep === index
                        ? "w-8 bg-gradient-to-r from-blue-500 to-purple-600"
                        : "bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                    )}
                  />
                ))}
              </div>
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={cn(
                    "relative transition-all duration-500",
                    activeStep === index ? "scale-105" : "scale-100 opacity-70"
                  )}
                  onClick={() => handleStepClick(index)}
                >
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-10 top-20 bottom-0 w-0.5 bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-700"></div>
                  )}
                  
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div
                      className={cn(
                        "relative z-10 flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center shadow-lg",
                        `bg-gradient-to-br ${step.gradientFrom} ${step.gradientTo}`
                      )}
                    >
                      {React.cloneElement(step.icon, { className: "h-8 w-8 text-white" })}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-slate-900 dark:bg-slate-100 flex items-center justify-center text-xs font-bold text-white dark:text-slate-900">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={cn(
                      "flex-1 bg-slate-50 dark:bg-slate-800/70 p-4 rounded-xl shadow-lg border-2 transition-all duration-300",
                      activeStep === index ? step.borderColor : "border-slate-200 dark:border-slate-700"
                    )}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className={`text-lg font-semibold ${step.color}`}>
                          {step.title}
                        </h3>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 sm:mt-0">
                          {step.subtitle}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Loop Back Arrow for Mobile */}
              <div className="flex justify-center pt-4">
                <div className="relative">
                  <svg className="w-24 h-12" viewBox="0 0 100 50">
                    <path
                      d="M 10 25 Q 50 10 90 25"
                      fill="none"
                      stroke="url(#mobile-gradient)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      markerEnd="url(#arrowhead)"
                    />
                    <defs>
                      <linearGradient id="mobile-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="7"
                        refX="9"
                        refY="3.5"
                        orient="auto"
                      >
                        <polygon
                          points="0 0, 10 3.5, 0 7"
                          fill="#06b6d4"
                        />
                      </marker>
                    </defs>
                  </svg>
                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-2">
                    Continuous Loop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 'The Three Pillars of the Lightning Strategy' Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-slate-100 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-4xl mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              The Three Pillars Behind
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                NovaGent's Lightning Strategy
              </span>
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our unified approach combines modular intelligence, transparent platform control, and expert human guidance 
              to deliver exceptional AI outcomes.
            </p>
          </div>
          
          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {platformPillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="group rounded-xl bg-white dark:bg-slate-800/80 p-4 sm:p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-slate-200 dark:border-slate-700 hover:border-purple-500/30 dark:hover:border-purple-400/30 flex flex-col h-full"
              >
                <div className="mb-4 sm:mb-5 flex justify-center">{pillar.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3 sm:mb-4 text-center leading-tight">
                  {pillar.title}
                </h3>
                <ul className="space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 text-left flex-grow">
                  {pillar.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <Zap className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-purple-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Interactive Agent Feature Banner */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-fuchsia-500/10 border border-purple-500/20 p-6 sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-fuchsia-500/5 animate-pulse"></div>
              <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 flex items-center justify-center shadow-lg">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Introducing the Interactive Agent Interface
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                    Transform your AI from a background tool into a proactive partner. Chat directly with your agent, 
                    ask questions, give instructions, and receive strategic insights -all through natural conversation.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-4 py-2 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-full text-sm font-medium text-purple-600 dark:text-purple-400">
                    Platform Feature
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 'Your Ongoing Partnership with NovaGent' Section - UPDATED */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                More Than a Service Provider – We're Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Dedicated AI
                </span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">
                  Automation Partner
                </span>
                .
              </h2>
              <p className="mt-6 text-lg text-slate-300">
                Our commitment to your success extends far beyond initial deployment. We believe in fostering a
                long-term partnership focused on achieving your continuous business improvement.
              </p>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <UserCheck className="h-8 w-8 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Named Solutions Architect</h3>
                    <p className="text-lg text-slate-300">
                      Direct access to your dedicated AI expert for strategic advice, performance reviews, and ongoing
                      support.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Sparkles className="h-8 w-8 text-fuchsia-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Proactive Excellence</h3>
                    <p className="text-lg text-slate-300">
                      Continuous optimization, clear communication, and expert handling of edge cases for seamless
                      operations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Service Level Guarantee</h3>
                    <p className="text-lg text-slate-300">
                      Comprehensive SLA designed for your peace of mind, ensuring your AI solutions evolve with your
                      business.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              {/* Placeholder for partnership visual */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 opacity-20 blur-xl"></div>
                <Handshake className="absolute inset-0 m-auto h-2/5 w-2/5 opacity-60" />
                <Zap className="absolute top-1/4 left-1/4 h-10 w-10 text-cyan-300 opacity-70 animate-ping" />
                <Users className="absolute bottom-1/4 right-1/4 h-10 w-10 text-fuchsia-300 opacity-70 animate-ping animation-delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 text-white">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight">
            Ready to Experience The NovaGent Loop?
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed">
            Discover how our continuous partnership approach delivers one powerful AI agent equipped with 
            the exact capabilities your business needs. No complexity, just results.
          </p>
          <div className="mt-8 sm:mt-10">
            <Button
              size="lg"
              asChild
              className="h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg font-semibold bg-white text-purple-700 shadow-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 min-w-[220px] sm:min-w-[260px]"
            >
              <Link href="/contact">Start Your Lightning Journey</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
