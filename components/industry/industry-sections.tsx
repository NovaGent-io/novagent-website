"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, type LucideIcon, Sparkles, AlertCircle, TrendingDown, Clock, Star, DollarSign, Phone } from "lucide-react";
import { type IndustryData } from '@/lib/industry-data'; // Use 'type' for type-only imports
import Link from 'next/link';
import { motion } from 'framer-motion';

// A wrapper for consistent section padding and background colors
function SectionWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`py-16 lg:py-24 ${className || ''}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}

// A reusable component for section titles
function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// =================================================================
// EXPORTED COMPONENTS START HERE
// =================================================================

export function IndustryHero({ industry }: { industry: IndustryData }) {
    const wordAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            type: "spring",
            stiffness: 100,
            damping: 12,
        },
        }),
    };

    return (
        <section className="relative w-full overflow-hidden bg-slate-950 text-white">
             {/* Simple CSS Animated Gradient instead of a component */}
             <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            
            <div className="container relative z-10 mx-auto px-4 text-center py-24 lg:py-40">
                <motion.div
                    className="absolute inset-0 z-0 flex items-center justify-center"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    {industry.hero.heroIcon && React.cloneElement(industry.hero.heroIcon, {
                        className: "h-auto w-3/5 text-purple-500/5 dark:text-purple-500/10"
                    })}
                </motion.div>

                <motion.div
                    className="relative z-10"
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.2 }}
                >
                    <motion.div
                        className="mb-4 inline-block rounded-full bg-blue-500/10 py-1 px-4 text-sm font-semibold text-blue-400"
                        variants={wordAnimation}
                    >
                        NovaGent for {industry.name}
                    </motion.div>

                    <motion.h1
                        className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                        variants={wordAnimation}
                    >
                        {industry.hero.title.split('\n').map((line, index) => {
                            // Check if this line contains the industry name
                            const isIndustryLine = line.includes(industry.name);
                            if (isIndustryLine) {
                                return (
                                    <React.Fragment key={index}>
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-fuchsia-400 to-pink-500">
                                            {line}
                                        </span>
                                        {index < industry.hero.title.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                );
                            }
                            return (
                                <React.Fragment key={index}>
                                    {line}
                                    {index < industry.hero.title.split('\n').length - 1 && <br />}
                                </React.Fragment>
                            );
                        })}
                    </motion.h1>

                    <motion.p
                        className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300"
                        variants={wordAnimation}
                    >
                        {industry.hero.subtitle}
                    </motion.p>

                    <motion.div className="mt-10 flex items-center justify-center gap-x-6" variants={wordAnimation}>
                        <Link href="/contact">
                            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-purple-500/50 group">
                                Book Your {industry.name} Consultation
                                <Sparkles className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// UPDATED: ChallengesSection with Real-Time Cost Counter
export function ChallengesSection({ industry }: { industry: IndustryData }) {
  const [lostRevenue, setLostRevenue] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLostRevenue(prev => prev + 23.50);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {industry.challenges.title}
          </motion.h2>
          {industry.challenges.subtitle && (
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 mt-4 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {industry.challenges.subtitle}
            </motion.p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industry.challenges.items.map((item, index) => {
            const colors = [
              { bg: 'bg-red-950/50', border: 'border-red-500/30', text: 'text-red-400' },
              { bg: 'bg-orange-950/50', border: 'border-orange-500/30', text: 'text-orange-400' },
              { bg: 'bg-yellow-950/50', border: 'border-yellow-500/30', text: 'text-yellow-400' }
            ];
            const colorSet = colors[index % colors.length];
            
            return (
              <motion.div 
                key={index}
                className={`${colorSet.bg} border ${colorSet.border} rounded-2xl p-8`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {React.cloneElement(item.icon, { className: `h-12 w-12 ${colorSet.text} mb-4` })}
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-gray-300 text-sm flex items-start">
                      <span className={`${colorSet.text} mr-2`}>?</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// FIXED: Pure React hover with NO CSS hover classes
function BulletPointFeatureCard({ item }: { item: { icon: React.ReactElement<typeof LucideIcon>, title: string, points: string[] } }) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div 
            className={`bg-white dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col transition-all duration-300 overflow-hidden cursor-pointer ${
                isHovered 
                    ? 'border-fuchsia-500/50 shadow-lg shadow-fuchsia-500/10' 
                    : 'border-slate-200 dark:border-slate-800'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex items-center gap-4 mb-4">
                {React.cloneElement(item.icon, { 
                    className: `h-9 w-9 text-fuchsia-500 transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}` 
                })}
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {item.title}
                </h3>
            </div>
            
            {/* Content that appears on hover - controlled by React state only */}
            <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <ul className="space-y-3 mt-2">
                    {item.points.map((point, index) => (
                        <li 
                            key={index} 
                            className={`flex items-start transition-all duration-300 ${
                                isHovered ? 'translate-y-0' : 'translate-y-2'
                            }`}
                            style={{ 
                                transitionDelay: isHovered ? `${index * 75}ms` : '0ms' 
                            }}
                        >
                            <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5 mr-3" />
                            <span className="text-slate-600 dark:text-slate-400">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Hint that fades out on hover */}
            <div 
                className={`mt-4 transition-opacity duration-300 text-center ${
                    isHovered ? 'opacity-0' : 'opacity-50'
                }`}
            >
                <div className="w-8 h-1 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full mx-auto"></div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Hover to explore</p>
            </div>
        </div>
    );
}

export function SolutionsSection({ industry }: { industry: IndustryData }) {
  return (
    <SectionWrapper className="bg-white dark:bg-slate-950">
      <SectionTitle title={industry.solutions.title} subtitle={industry.solutions.subtitle} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industry.solutions.items.map((item, index) => <BulletPointFeatureCard key={index} item={item} />)}
      </div>
    </SectionWrapper>
  );
}

// NEW: Problem Cards Grid Section
export function ProblemCardsGrid() {
  const problems = [
    {
      icon: Phone,
      title: "18-Hour Response Time",
      description: "While winners respond in under 5 minutes",
      stat: "78%",
      statLabel: "of buyers choose first responder",
      severity: "high",
      color: "red"
    },
    {
      icon: Clock,
      title: "67% Time Wasted",
      description: "Service advisors stuck on routine tasks",
      stat: "$500",
      statLabel: "lost per empty bay daily",
      severity: "high",
      color: "orange"
    },
    {
      icon: Star,
      title: "Invisible Online",
      description: "88% check reviews before visiting",
      stat: "40%",
      statLabel: "traffic loss from bad reviews",
      severity: "medium",
      color: "yellow"
    },
    {
      icon: DollarSign,
      title: "Hidden Costs",
      description: "Manual processes bleeding profits",
      stat: "$1.2M",
      statLabel: "annual revenue loss",
      severity: "critical",
      color: "red"
    }
  ];

  return (
    <section className="bg-slate-950 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Your Dealership's Profit Killers
          </motion.h2>
          <p className="text-xl text-gray-400">Every problem = Lost revenue. Every day = Deeper hole.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-2xl border ${
                problem.severity === 'critical' 
                  ? 'border-red-500/50 bg-red-950/20' 
                  : problem.severity === 'high'
                  ? 'border-orange-500/50 bg-orange-950/20'
                  : 'border-yellow-500/50 bg-yellow-950/20'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="p-6">
                <div className={`inline-flex p-3 rounded-full mb-4 ${
                  problem.color === 'red' ? 'bg-red-500/20' :
                  problem.color === 'orange' ? 'bg-orange-500/20' :
                  'bg-yellow-500/20'
                }`}>
                  <problem.icon className={`h-8 w-8 ${
                    problem.color === 'red' ? 'text-red-400' :
                    problem.color === 'orange' ? 'text-orange-400' :
                    'text-yellow-400'
                  }`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{problem.description}</p>
                
                <div className="border-t border-gray-800 pt-4">
                  <div className={`text-3xl font-bold ${
                    problem.color === 'red' ? 'text-red-400' :
                    problem.color === 'orange' ? 'text-orange-400' :
                    'text-yellow-400'
                  }`}>{problem.stat}</div>
                  <p className="text-xs text-gray-500 mt-1">{problem.statLabel}</p>
                </div>
              </div>
              
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  background: [
                    `radial-gradient(circle at 20% 80%, ${problem.color} 0%, transparent 50%)`,
                    `radial-gradient(circle at 80% 20%, ${problem.color} 0%, transparent 50%)`,
                    `radial-gradient(circle at 20% 80%, ${problem.color} 0%, transparent 50%)`,
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AgentsSection({ industry }: { industry: IndustryData }) {
  return (
    <SectionWrapper className="bg-slate-50 dark:bg-slate-900">
      <SectionTitle title={industry.agents.title} subtitle={industry.agents.subtitle} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {industry.agents.items.map((agent, index) => (
          <div key={index} className="bg-white dark:bg-slate-900/50 text-center p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none flex flex-col">
            {React.cloneElement(agent.icon, { className: "h-10 w-10 text-fuchsia-500 mx-auto mb-4" })}
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{agent.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">{agent.description}</p>
            <Button variant="outline" asChild>
              <Link href={agent.link}>Learn More</Link>
            </Button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

// NEW: Isometric 3D Result Card Component
function IsometricResultCard({ item, index }: { item: { icon: React.ReactElement<typeof LucideIcon>, value?: string; title: string; description: string }, index: number }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="relative preserve-3d"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative"
        animate={{
          rotateX: isHovered ? 20 : 30,
          rotateY: isHovered ? -20 : -30,
          z: isHovered ? 50 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{
          transformStyle: "preserve-3d",
          transform: "perspective(1000px) rotateX(30deg) rotateY(-30deg)",
        }}
      >
        {/* Card Face */}
        <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 dark:from-slate-800/90 dark:to-slate-900/90 p-8 rounded-2xl border border-slate-700/50 dark:border-slate-600/50 backdrop-blur-sm">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl" />
          
          {/* Glow effect */}
          <motion.div
            className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-0"
            animate={{ opacity: isHovered ? 0.3 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Icon with glow */}
            <div className="relative mb-6">
              {React.cloneElement(item.icon, { 
                className: "h-10 w-10 text-cyan-400" 
              })}
              <motion.div
                className="absolute inset-0 bg-cyan-400/20 blur-xl"
                animate={{ scale: isHovered ? 1.5 : 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Value with animated gradient */}
            {item.value && (
              <motion.div
                className="mb-4"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                  {item.value}
                </span>
              </motion.div>
            )}
            
            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3">
              {item.title}
            </h3>
            
            {/* Description */}
            <p className="text-slate-300 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
          
          {/* 3D shadow layers for depth */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl -z-10"
            style={{
              transform: "translateZ(-10px) translateY(4px) translateX(4px)",
            }}
          />
          <div 
            className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl -z-20"
            style={{
              transform: "translateZ(-20px) translateY(8px) translateX(8px)",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ResultsSection({ industry }: { industry: IndustryData }) {
  return (
    <SectionWrapper className="bg-white dark:bg-slate-950 overflow-hidden">
      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
      <SectionTitle title={industry.results.title} subtitle={industry.results.subtitle} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
        {industry.results.items.map((item, index) => (
          <IsometricResultCard key={index} item={item} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export function FinalCTA({ industry }: { industry: IndustryData }) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-950">
      {/* Liquid Morphing Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-500 opacity-20"></div>
        <div 
          className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-600"
          style={{
            background: `
              linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4),
              linear-gradient(135deg, #8b5cf6, #ec4899, #06b6d4, #8b5cf6),
              linear-gradient(225deg, #ec4899, #06b6d4, #8b5cf6, #ec4899)
            `,
            backgroundSize: '400% 400%, 300% 300%, 500% 500%',
            animation: `
              liquidFlow1 8s ease-in-out infinite,
              liquidFlow2 12s ease-in-out infinite reverse,
              liquidFlow3 15s ease-in-out infinite
            `,
            opacity: 0.25,
            mixBlendMode: 'multiply'
          }}
        />
      </div>

      {/* Additional liquid layers for more complexity */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-cyan-300 via-purple-400 to-pink-400 opacity-15"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, #06b6d4 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, #8b5cf6 0%, transparent 50%),
              radial-gradient(ellipse at 40% 80%, #ec4899 0%, transparent 50%)
            `,
            animation: 'liquidPulse 10s ease-in-out infinite'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Clean Title */}
        <motion.div 
          className="relative mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white">
            {industry.cta.title}
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          className="text-center text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {industry.cta.subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Button 
            asChild 
            size="lg" 
            className="relative h-14 px-10 text-lg font-semibold bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-600 hover:via-purple-700 hover:to-pink-600 text-white shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 group overflow-hidden"
          >
            <Link href="/contact">
              <span className="relative z-10 flex items-center">
                Book Your Consultation
                <Sparkles className="ml-3 h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-12" />
              </span>
              
              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 -top-2 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </Link>
          </Button>
        </motion.div>

        {/* Floating particles - restored */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.1, 0.4, 0.1],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* CSS Keyframes for liquid animation */}
      <style jsx>{`
        @keyframes liquidFlow1 {
          0%, 100% { background-position: 0% 50%, 100% 0%, 50% 100%; }
          25% { background-position: 100% 0%, 0% 100%, 100% 50%; }
          50% { background-position: 100% 100%, 50% 0%, 0% 50%; }
          75% { background-position: 0% 100%, 100% 50%, 50% 0%; }
        }
        
        @keyframes liquidFlow2 {
          0%, 100% { background-position: 50% 0%, 100% 100%, 0% 50%; }
          33% { background-position: 0% 50%, 50% 0%, 100% 100%; }
          66% { background-position: 100% 50%, 0% 100%, 50% 0%; }
        }
        
        @keyframes liquidFlow3 {
          0%, 100% { background-position: 100% 50%, 0% 0%, 50% 100%; }
          20% { background-position: 0% 100%, 100% 50%, 0% 0%; }
          40% { background-position: 50% 0%, 0% 100%, 100% 50%; }
          60% { background-position: 100% 100%, 50% 0%, 0% 50%; }
          80% { background-position: 0% 50%, 100% 100%, 50% 0%; }
        }
        
        @keyframes liquidPulse {
          0%, 100% { 
            opacity: 0.15;
          }
          25% { 
            opacity: 0.25;
          }
          50% { 
            opacity: 0.1;
          }
          75% { 
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
}