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
  const includedSkills = [
    {
      name: "Finance Flow Manager",
      icon: <DollarSign className="h-5 w-5 text-green-500" />,
      description: "Transaction processing and financial operations automation",
      value: "$500-2000/mo"
    },
    {
      name: "Insight Intelligence", 
      icon: <PieChart className="h-5 w-5 text-purple-500" />,
      description: "Automated reporting and data analysis with narrative insights",
      value: "$400-1500/mo"
    },
    {
      name: "Workflow Navigator",
      icon: <Settings className="h-5 w-5 text-teal-500" />,
      description: "Project management and task coordination across teams",
      value: "$350-1200/mo"
    },
    {
      name: "Support Concierge",
      icon: <MessageSquare className="h-5 w-5 text-emerald-500" />,
      description: "AI-powered customer support handling 80% of Tier 1 inquiries",
      value: "$250-1200/mo"
    }
  ]

  const caseStudies = [
    {
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Manual processes across finance, operations, and customer service creating bottlenecks",
      solution: "Implemented Enterprise Ops Bundle with custom workflow automation",
      results: [
        "75% reduction in processing time",
        "$2.3M annual cost savings",
        "99.2% customer satisfaction score"
      ]
    },
    {
      company: "TechLogistics International",
      industry: "Logistics",
      challenge: "Disparate systems preventing operational visibility and efficiency",
      solution: "Unified operations with AI-powered insights and automation",
      results: [
        "60% faster reporting cycles",
        "40% improvement in project delivery",
        "Real-time operational insights"
      ]
    }
  ]

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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 sm:py-32">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="mb-6 inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300">
                <Building2 className="mr-2 h-4 w-4" />
                Enterprise Solution
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Enterprise Ops Bundle
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                The comprehensive AI operations platform for large organizations. 
                Streamline finance, analytics, project management, and customer support at enterprise scale.
              </p>

              {/* Value Props */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">30%</div>
                  <div className="text-sm text-slate-400">Bundle Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-400">4</div>
                  <div className="text-sm text-slate-400">Core Operations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">24/7</div>
                  <div className="text-sm text-slate-400">Enterprise Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">?</div>
                  <div className="text-sm text-slate-400">Cost Savings: $2.3M</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">Get Enterprise Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="/pricing">Enterprise Pricing</Link>
                </Button>
              </div>
            </div>

            <div className="relative lg:pl-8">
              {/* Modern Skills Grid Visualization */}
              <div className="relative">
                {/* Background Gradient Orb */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-full blur-3xl"></div>
                </div>
                
                {/* Skills Grid */}
                <div className="relative grid grid-cols-2 gap-4 max-w-sm mx-auto">
                  {/* Finance Flow Manager */}
                  <div className="group relative bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur border border-green-500/20 rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:border-green-400/40 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <DollarSign className="h-8 w-8 text-green-400 mb-3" />
                    <h4 className="text-white font-semibold text-sm mb-1">Finance Flow</h4>
                    <p className="text-green-300 text-xs">Automated finance ops</p>
                    <div className="mt-3 text-2xl font-bold text-green-400">45.8K</div>
                    <p className="text-xs text-green-300/60">transactions/month</p>
                  </div>
                  
                  {/* Insight Intelligence */}
                  <div className="group relative bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur border border-purple-500/20 rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:border-purple-400/40 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <PieChart className="h-8 w-8 text-purple-400 mb-3" />
                    <h4 className="text-white font-semibold text-sm mb-1">Insights AI</h4>
                    <p className="text-purple-300 text-xs">Analytics & reporting</p>
                    <div className="mt-3 text-2xl font-bold text-purple-400">1,247</div>
                    <p className="text-xs text-purple-300/60">reports generated</p>
                  </div>
                  
                  {/* Workflow Navigator */}
                  <div className="group relative bg-gradient-to-br from-teal-500/10 to-teal-600/10 backdrop-blur border border-teal-500/20 rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:border-teal-400/40 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <Settings className="h-8 w-8 text-teal-400 mb-3" />
                    <h4 className="text-white font-semibold text-sm mb-1">Workflow AI</h4>
                    <p className="text-teal-300 text-xs">Project management</p>
                    <div className="mt-3 text-2xl font-bold text-teal-400">89</div>
                    <p className="text-xs text-teal-300/60">active projects</p>
                  </div>
                  
                  {/* Support Concierge */}
                  <div className="group relative bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 backdrop-blur border border-emerald-500/20 rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:border-emerald-400/40 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <MessageSquare className="h-8 w-8 text-emerald-400 mb-3" />
                    <h4 className="text-white font-semibold text-sm mb-1">Support AI</h4>
                    <p className="text-emerald-300 text-xs">Customer support</p>
                    <div className="mt-3 text-2xl font-bold text-emerald-400">99.2%</div>
                    <p className="text-xs text-emerald-300/60">satisfaction rate</p>
                  </div>
                </div>
                
                {/* Central AI Badge */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                      <Building2 className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">AI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Included Skills Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              What's Included in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Enterprise Ops Bundle</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Four essential operations skills designed for enterprise-scale efficiency and control
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {includedSkills.map((skill, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                        {skill.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{skill.name}</CardTitle>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Individual value:</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{skill.value}</span>
                  </div>
                  <Link 
                    href={`/solutions/novasuite/${skill.name.toLowerCase().replace(/ /g, '-')}`}
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 mt-4"
                  >
                    Learn more <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Bundle Value</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Recommended for</p>
                    <p className="text-lg font-bold text-blue-600 dark:text-blue-400">Scale Plan</p>
                    <p className="text-sm text-slate-500">Enterprise pricing</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Includes</p>
                    <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">Custom AI Credits</p>
                    <p className="text-sm text-slate-500">Tailored to your needs</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Bundle Savings</p>
                    <p className="text-lg font-bold text-green-600 dark:text-green-400">30% Discount</p>
                    <p className="text-sm text-slate-500">vs. Individual Skills</p>
                  </div>
                </div>
                <Button className="w-full" size="lg" asChild>
                  <Link href="/pricing">View Enterprise Pricing</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Enterprise Ops Bundle</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Built for the complexity and scale of enterprise operations
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
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{benefit.description}</p>
                </div>
              </div>
            ))}
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