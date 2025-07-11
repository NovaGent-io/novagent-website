"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  ArrowLeft, 
  Briefcase, 
  CheckCircle2, 
  TrendingUp,
  Building2,
  PieChart,
  MessageSquare,
  DollarSign,
  ArrowRight,
  Sparkles,
  BarChart3,
  Settings
} from "lucide-react"

export default function EnterpriseOpsBundlePage() {
  const benefits = [
    {
      title: "Unified Operations Platform",
      description: "Connect finance, operations, projects, and support in one intelligent system"
    },
    {
      title: "Enterprise-Grade Scalability",
      description: "Built to handle complex workflows and high-volume operations seamlessly"
    },
    {
      title: "Advanced Analytics & Insights",
      description: "Transform operational data into actionable business intelligence"
    },
    {
      title: "Dedicated Enterprise Support",
      description: "Priority support with dedicated success management for enterprise clients"
    }
  ]

  const enterpriseSkills = [
    {
      id: "finance",
      name: "Finance Flow Manager",
      icon: <DollarSign className="h-8 w-8" />,
      metric: "45.8K transactions/mo",
      description: "Automated financial operations & transaction processing",
      color: "from-green-500 to-emerald-500",
      position: { x: 0, y: -220 }
    },
    {
      id: "insights",
      name: "Insight Intelligence",
      icon: <PieChart className="h-8 w-8" />,
      metric: "1,247 reports generated",
      description: "Advanced analytics & automated reporting",
      color: "from-purple-500 to-indigo-500",
      position: { x: 220, y: 0 }
    },
    {
      id: "workflow",
      name: "Workflow Navigator",
      icon: <Settings className="h-8 w-8" />,
      metric: "89 active projects",
      description: "Project management & task orchestration",
      color: "from-blue-500 to-cyan-500",
      position: { x: 0, y: 220 }
    },
    {
      id: "support",
      name: "Support Concierge",
      icon: <MessageSquare className="h-8 w-8" />,
      metric: "99.2% satisfaction",
      description: "AI-powered customer service excellence",
      color: "from-teal-500 to-green-500",
      position: { x: -220, y: 0 }
    }
  ]

  const workflowSteps = [
    {
      id: 1,
      icon: <DollarSign className="h-6 w-6" />,
      title: "Process",
      description: "AI handles complex financial transactions automatically",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 2,
      icon: <PieChart className="h-6 w-6" />,
      title: "Analyze",
      description: "Real-time insights from operational data",
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 3,
      icon: <Settings className="h-6 w-6" />,
      title: "Orchestrate",
      description: "Seamless coordination across all departments",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Optimize",
      description: "Continuous improvement through AI-driven insights",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/solutions/novasuite"
              className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to NovaSuite
            </Link>
          </div>

          <div className="text-center mb-16">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300">
              <Building2 className="mr-2 h-4 w-4" />
              Enterprise Solution
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                The Enterprise Operations Power Suite
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              A comprehensive AI operations platform that transforms how large organizations manage finance, analytics, projects, and support
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/contact">Get Started with Enterprise Bundle</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/pricing">View Enterprise Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Orbital Skills Showcase Section */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Four Enterprise Skills Working at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Massive Scale</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Each skill is enterprise-grade on its own, but together they create an unstoppable operational powerhouse
            </p>
          </div>

          <OrbitalSkillsShowcase customSkills={enterpriseSkills} />

          <div className="mt-16 text-center">
            <Link 
              href="/capabilities"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              Explore all available skills <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              See the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Enterprise Workflow</span> in Action
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Watch how your AI agent orchestrates seamless operations across every department
            </p>
          </div>

          <WorkflowTimeline customSteps={workflowSteps} />

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              Ready to Transform Your Enterprise Operations?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Choose your enterprise plan and activate these powerful skills for your AI agent
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" asChild>
              <Link href="/pricing">View Enterprise Pricing Options</Link>
            </Button>
          </div>
        </div>
      </section>



      {/* Benefits Section */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Enterprise Bundle</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              More than just tools - a complete operational transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Enterprise Transformation</span> Roadmap
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Based on our proven enterprise implementation methodology, here's what you can expect when you activate the Enterprise Ops Bundle
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-green-600"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {/* Day 1-14 */}
                <div className="relative flex items-start space-x-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full shadow-lg">
                    <span className="text-white font-bold">1-14</span>
                  </div>
                  <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Enterprise Discovery & Setup</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your AI agent is configured with enterprise-grade security and integrations</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">ERP/CRM integration complete</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Security protocols established</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Custom workflows configured</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Team training completed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 15-60 */}
                <div className="relative flex items-start space-x-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full shadow-lg">
                    <span className="text-white font-bold">15-60</span>
                  </div>
                  <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Operational Excellence Building</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your operations begin running with new efficiency and insights</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">75%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Faster financial processing</div>
                      </div>
                      <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">60%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Reporting time reduction</div>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">89</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Active projects managed</div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">99.2%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Support satisfaction rate</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 61-120 */}
                <div className="relative flex items-start space-x-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-green-600 rounded-full shadow-lg">
                    <span className="text-white font-bold">61-120</span>
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-700">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Full Enterprise Transformation</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your organization operates at peak performance with AI-powered efficiency</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Operational Cost Reduction</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">30-40%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Process Efficiency Gain</span>
                        <span className="font-bold text-indigo-600 dark:text-indigo-400">60-75%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Annual Cost Savings</span>
                        <span className="font-bold text-green-600 dark:text-green-400">$2-5M</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Expected ROI</span>
                        <span className="font-bold text-purple-600 dark:text-purple-400">5-8x</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Ready to start your enterprise transformation?
              </p>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" asChild>
                <Link href="/contact">
                  Schedule Your Enterprise Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Enterprise Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Stories</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              See how enterprise organizations are transforming their operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{study.industry}</Badge>
                    <Building2 className="h-5 w-5 text-blue-500" />
                  </div>
                  <CardTitle className="text-xl">{study.company}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Challenge:</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Solution:</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Results:</p>
                      <ul className="space-y-2 mt-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm text-green-600 dark:text-green-400">
                            <CheckCircle2 className="h-4 w-4 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Enterprise FAQ
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What makes this bundle enterprise-ready?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    The Enterprise Ops Bundle includes advanced security features, dedicated support, 
                    custom AI Credit pools tailored to your usage, and integration capabilities 
                    designed for complex enterprise environments.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can this integrate with our existing ERP/CRM systems?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Yes! Our enterprise team specializes in complex integrations with systems like SAP, 
                    Salesforce, Oracle, Microsoft Dynamics, and custom enterprise applications. 
                    Integration planning is included in your implementation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What level of customization is available?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Enterprise clients receive extensive customization including custom workflows, 
                    branded interfaces, specialized reporting, and dedicated development resources 
                    for enterprise-specific requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready for Enterprise-Scale Operations?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join Fortune 500 companies using the Enterprise Ops Bundle to transform their operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                <Link href="/contact">
                  Get Enterprise Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/solutions/novasuite">Compare All Bundles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}