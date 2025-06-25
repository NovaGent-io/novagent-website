"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedBackground from "@/components/animated-background"
import MainNavigation from "@/components/main-navigation"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Target,
  Zap,
  Shield,
  type LucideIcon,
} from "lucide-react"

interface IndustryPageProps {
  industry: {
    name: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    heroTitle: string
    heroSubtitle: string
    challenges: Array<{
      title: string
      description: string
      icon: React.ComponentType<{ className?: string }>
    }>
    solutions: Array<{
      title: string
      description: string
      benefits: string[]
      icon: React.ComponentType<{ className?: string }>
    }>
    caseStudy: {
      title: string
      company: string
      challenge: string
      solution: string
      results: Array<{
        metric: string
        value: string
        description: string
      }>
    }
    agents: Array<{
      name: string
      description: string
      keyFeatures: string[]
      link: string
    }>
  }
}

export default function IndustryPageTemplate({ industry }: IndustryPageProps) {
  const IconComponent = industry.icon

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <MainNavigation />

        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 text-center mb-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-center mb-6">
                <IconComponent className="w-20 h-20 text-cyan-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                {industry.heroTitle}
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
                {industry.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 text-lg">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 text-lg">
                    How It Works
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Industry Challenges Section */}
          <section className="container mx-auto px-4 mb-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-200">
                Key Challenges in {industry.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industry.challenges.map((challenge, index) => {
                  const ChallengeIcon = challenge.icon
                  return (
                    <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <ChallengeIcon className="w-12 h-12 text-cyan-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-white">{challenge.title}</h3>
                        <p className="text-slate-300 leading-relaxed">{challenge.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>

          {/* AI Solutions Section */}
          <section className="container mx-auto px-4 mb-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-200">
                Our AI Solutions for {industry.name}
              </h2>
              <div className="space-y-12">
                {industry.solutions.map((solution, index) => {
                  const SolutionIcon = solution.icon
                  return (
                    <Card key={index} className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600 backdrop-blur-sm">
                      <CardContent className="p-8 md:p-12">
                        <div className="flex flex-col lg:flex-row items-start gap-8">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-6">
                              <SolutionIcon className="w-12 h-12 text-purple-400" />
                              <h3 className="text-2xl md:text-3xl font-bold text-white">{solution.title}</h3>
                            </div>
                            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                              {solution.description}
                            </p>
                            <div className="grid sm:grid-cols-2 gap-3">
                              {solution.benefits.map((benefit, benefitIndex) => (
                                <div key={benefitIndex} className="flex items-center gap-3">
                                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                  <span className="text-slate-300">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Case Study Section */}
          <section className="container mx-auto px-4 mb-20">
            <div className="max-w-6xl mx-auto">
              <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/30 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center mb-8">
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
                      Case Study
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                      {industry.caseStudy.title}
                    </h2>
                    <p className="text-xl text-slate-300">{industry.caseStudy.company}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-cyan-400">The Challenge</h3>
                      <p className="text-slate-300 leading-relaxed">{industry.caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-purple-400">Our Solution</h3>
                      <p className="text-slate-300 leading-relaxed">{industry.caseStudy.solution}</p>
                    </div>
                  </div>

                  <div className="border-t border-slate-600 pt-8">
                    <h3 className="text-2xl font-bold mb-6 text-center text-white">Results Achieved</h3>
                    <div className="grid sm:grid-cols-3 gap-6">
                      {industry.caseStudy.results.map((result, index) => (
                        <div key={index} className="text-center">
                          <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                            {result.value}
                          </div>
                          <div className="text-lg font-semibold text-white mb-1">
                            {result.metric}
                          </div>
                          <p className="text-sm text-slate-400">{result.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Recommended Agents Section */}
          <section className="container mx-auto px-4 mb-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-200">
                Recommended AI Agents for {industry.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {industry.agents.map((agent, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                        {agent.name}
                      </h3>
                      <p className="text-slate-300 mb-4 leading-relaxed">{agent.description}</p>
                      <div className="space-y-2 mb-6">
                        {agent.keyFeatures.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-slate-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link href={agent.link}>
                        <Button variant="outline" className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border-blue-500/30 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Ready to Transform Your {industry.name} Business?
                  </h2>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                    Join the leading companies in {industry.name.toLowerCase()} who are already leveraging NovaGent's AI solutions to drive growth, reduce costs, and stay ahead of the competition.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 text-lg">
                        Schedule a Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/pricing">
                      <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 text-lg">
                        View Pricing
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}