"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, type LucideIcon, Sparkles } from "lucide-react";
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
                        {industry.hero.title.replace(industry.name, "")}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-fuchsia-400 to-pink-500">
                            {industry.name}
                        </span>
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

// NEW: Circular Progress Card Component for Challenges Section
function CircularChallengeCard({ item, index }: { item: { icon: React.ReactElement<typeof LucideIcon>, title: string, points: string[] }, index: number }) {
    const [isHovered, setIsHovered] = React.useState(false);
    const circumference = 2 * Math.PI * 80; // radius is 80 for 160px diameter
    const progressPercentage = 75 + (index * 5); // Vary progress for visual interest
    const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

    return (
        <motion.div 
            className="text-center relative group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Circular Progress Container */}
            <div className="relative w-40 h-40 mx-auto mb-6">
                <svg className="w-40 h-40 transform -rotate-90">
                    <defs>
                        <linearGradient id={`gradient-challenge-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="50%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>
                    
                    {/* Background circle */}
                    <circle
                        cx="80"
                        cy="80"
                        r="72"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="none"
                        className="text-slate-200 dark:text-slate-800/50"
                    />
                    
                    {/* Progress circle */}
                    <motion.circle
                        cx="80"
                        cy="80"
                        r="72"
                        stroke={`url(#gradient-challenge-${index})`}
                        strokeWidth="12"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                        className="filter drop-shadow-lg"
                    />
                </svg>
                
                {/* Icon in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={{ 
                            scale: isHovered ? 1.15 : 1,
                            rotate: isHovered ? 10 : 0
                        }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                        className="relative"
                    >
                        <div className="relative">
                            {React.cloneElement(item.icon, { 
                                className: "h-12 w-12 text-slate-700 dark:text-slate-300"
                            })}
                            {/* Gradient overlay on hover */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full blur-xl"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ 
                                    opacity: isHovered ? 0.5 : 0,
                                    scale: isHovered ? 1.5 : 0.5
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Progress percentage */}
                <motion.div
                    className="absolute bottom-0 right-0 bg-white dark:bg-slate-900 rounded-full px-2 py-1 shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                >
                    <span className="text-xs font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                        {progressPercentage}%
                    </span>
                </motion.div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 px-2">
                {item.title}
            </h3>

            {/* Short description when not hovered */}
            <motion.p 
                className="text-sm text-slate-600 dark:text-slate-400 px-4 mb-3"
                animate={{ 
                    opacity: isHovered ? 0 : 1,
                    height: isHovered ? 0 : "auto"
                }}
                transition={{ duration: 0.2 }}
            >
                {item.points[0].split('.')[0]}
            </motion.p>

            {/* Detailed points - shows on hover */}
            <motion.div 
                className="overflow-hidden px-4"
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                    height: isHovered ? "auto" : 0,
                    opacity: isHovered ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
            >
                <ul className="space-y-2 text-left">
                    {item.points.map((point, pointIndex) => (
                        <motion.li 
                            key={pointIndex}
                            className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ 
                                x: isHovered ? 0 : -10,
                                opacity: isHovered ? 1 : 0
                            }}
                            transition={{ delay: isHovered ? pointIndex * 0.1 : 0 }}
                        >
                            <Check className="h-4 w-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                            <span>{point}</span>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            {/* Hover indicator */}
            <motion.div 
                className="mt-3 flex items-center justify-center gap-1"
                animate={{ opacity: isHovered ? 0 : 0.6 }}
            >
                <div className="w-1 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse" />
                <div className="w-1 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse delay-75" />
                <div className="w-1 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse delay-150" />
            </motion.div>
        </motion.div>
    );
}

// UPDATED: ChallengesSection with Circular Progress Design
export function ChallengesSection({ industry }: { industry: IndustryData }) {
  return (
    <SectionWrapper className="bg-slate-50 dark:bg-slate-900">
      <SectionTitle title={industry.challenges.title} subtitle={industry.challenges.subtitle} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto">
        {industry.challenges.items.map((item, index) => (
          <CircularChallengeCard key={index} item={item} index={index} />
        ))}
      </div>
    </SectionWrapper>
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
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* 3D Animated Title */}
        <motion.div 
          className="relative mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center relative"
            style={{ 
              transformStyle: "preserve-3d",
              perspective: "1000px" 
            }}
            animate={{
              rotateX: [0, 2, -2, 0],
              rotateY: [0, -5, 5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Base layer */}
            <span className="block relative z-30 text-white">
              {industry.cta.title}
            </span>
            
            {/* 3D layers with different colors */}
            <motion.span 
              className="absolute inset-0 block text-cyan-400"
              style={{ 
                transform: "translateZ(-2px) translateX(2px) translateY(2px)",
              }}
              animate={{
                transform: [
                  "translateZ(-2px) translateX(2px) translateY(2px)",
                  "translateZ(-2px) translateX(3px) translateY(3px)",
                  "translateZ(-2px) translateX(1px) translateY(1px)",
                  "translateZ(-2px) translateX(2px) translateY(2px)",
                ]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {industry.cta.title}
            </motion.span>
            
            <motion.span 
              className="absolute inset-0 block text-purple-400"
              style={{ 
                transform: "translateZ(-4px) translateX(4px) translateY(4px)",
              }}
              animate={{
                transform: [
                  "translateZ(-4px) translateX(4px) translateY(4px)",
                  "translateZ(-4px) translateX(6px) translateY(6px)",
                  "translateZ(-4px) translateX(2px) translateY(2px)",
                  "translateZ(-4px) translateX(4px) translateY(4px)",
                ]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {industry.cta.title}
            </motion.span>
            
            <motion.span 
              className="absolute inset-0 block text-pink-400"
              style={{ 
                transform: "translateZ(-6px) translateX(6px) translateY(6px)",
              }}
              animate={{
                transform: [
                  "translateZ(-6px) translateX(6px) translateY(6px)",
                  "translateZ(-6px) translateX(9px) translateY(9px)",
                  "translateZ(-6px) translateX(3px) translateY(3px)",
                  "translateZ(-6px) translateX(6px) translateY(6px)",
                ]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {industry.cta.title}
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Subtitle with fade-in animation */}
        <motion.p 
          className="text-center text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {industry.cta.subtitle}
        </motion.p>

        {/* CTA Button with enhanced effects */}
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

        {/* Optional: Floating particles for additional depth */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}