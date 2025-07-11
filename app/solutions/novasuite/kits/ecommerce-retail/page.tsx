"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  ArrowLeft, 
  ShoppingCart, 
  CheckCircle2,
  DollarSign,
  MessageSquare,
  BarChart3,
  ArrowRight,
  Store,
  Tag,
  ShoppingBag,
  Headphones,
  LineChart,
  Phone
} from "lucide-react"
import { OrbitalSkillsShowcase } from "@/components/novasuite/orbital-skills-showcase"
import { WorkflowTimeline } from "@/components/novasuite/workflow-timeline"

export default function EcommerceRetailBundlePage() {
  // Custom skills for the orbital showcase
  const ecommerceSkills = [
    {
      id: "commerceops",
      name: "CommerceOps Manager",
      icon: <ShoppingCart className="h-8 w-8" />,
      metric: "99.8% accuracy",
      description: "AI-powered inventory & pricing automation",
      color: "from-violet-500 to-purple-500",
      position: { x: 0, y: -220 }
    },
    {
      id: "finance",
      name: "Finance Flow",
      icon: <DollarSign className="h-8 w-8" />,
      metric: "2min processing",
      description: "Automated transaction management",
      color: "from-green-500 to-emerald-500",
      position: { x: 220, y: 0 }
    },
    {
      id: "support",
      name: "Support Concierge",
      icon: <Headphones className="h-8 w-8" />,
      metric: "<30s response",
      description: "24/7 intelligent customer support",
      color: "from-blue-500 to-cyan-500",
      position: { x: 0, y: 220 }
    },
    {
      id: "insights",
      name: "Insight Intelligence",
      icon: <BarChart3 className="h-8 w-8" />,
      metric: "+45% revenue",
      description: "Analytics & reporting automation",
      color: "from-pink-500 to-rose-500",
      position: { x: -220, y: 0 }
    }
  ]

  // Custom workflow steps
  const workflowSteps = [
    {
      id: 1,
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Monitor",
      description: "AI tracks inventory levels and price changes across all channels",
      color: "from-violet-500 to-purple-500"
    },
    {
      id: 2,
      icon: <Tag className="h-6 w-6" />,
      title: "Optimize",
      description: "Dynamic pricing adjustments based on demand and competition",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Support",
      description: "Instant customer assistance with order tracking and inquiries",
      color: "from-pink-500 to-blue-500"
    },
    {
      id: 4,
      icon: <LineChart className="h-6 w-6" />,
      title: "Analyze",
      description: "Real-time insights to drive business growth decisions",
      color: "from-blue-500 to-green-500"
    }
  ]

  const benefits = [
    {
      title: "Complete Commerce Stack",
      description: "Everything you need for modern e-commerce operations in one integrated solution"
    },
    {
      title: "AI-Powered Efficiency",
      description: "Automate inventory management and pricing while maintaining personalization at scale"
    },
    {
      title: "Unified Customer Experience",
      description: "24/7 intelligent support across all channels with consistent service quality"
    },
    {
      title: "Expert Management",
      description: "Our team optimizes your entire e-commerce ecosystem, not just individual tools"
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-violet-900 to-purple-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/solutions/novasuite"
              className="inline-flex items-center text-violet-300 hover:text-violet-200 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to NovaSuite
            </Link>
          </div>

          <div className="text-center mb-16">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300">
              <Store className="mr-2 h-4 w-4" />
              Pre-Configured Bundle
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">
                E-Commerce & Retail Power Suite
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              The complete AI solution for modern e-commerce operations. Automate inventory, optimize pricing, delight customers, and scale your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700" asChild>
                <Link href="/contact">Get Started with E-Commerce Bundle</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/pricing">View Pricing Options</Link>
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
              Four AI Skills Working in <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">Perfect Harmony</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Each skill is a powerful tool on its own, but together they create an unstoppable commerce operations engine
            </p>
          </div>

          <OrbitalSkillsShowcase customSkills={ecommerceSkills} />

          <div className="mt-16 text-center">
            <Link 
              href="/contact"
              className="inline-flex items-center text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 font-medium"
            >
              Schedule a consultation to explore more skills <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              See the <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">Seamless Workflow</span> in Action
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Watch how your AI agent orchestrates the perfect e-commerce operation from inventory to customer delight
            </p>
          </div>

          <WorkflowTimeline customSteps={workflowSteps} />

          <div className="mt-16 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              Ready to Transform Your E-Commerce Operations?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Choose your plan and activate these powerful skills for your AI agent
            </p>
            <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700" asChild>
              <Link href="/pricing">View Pricing Options</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose the <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">E-Commerce Bundle</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              More than just tools - a complete commerce transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
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
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">90-Day Transformation</span> Roadmap
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Based on our proven implementation methodology, here's what you can expect when you activate the E-Commerce & Retail Bundle
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-600 via-purple-600 to-green-600"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {/* Day 1-7 */}
                <div className="relative flex items-start space-x-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-violet-600 rounded-full shadow-lg">
                    <span className="text-white font-bold">1-7</span>
                  </div>
                  <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Launch & Integration</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your AI agent is configured and connected to your e-commerce platforms</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Inventory sync complete</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Payment systems connected</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Support channels activated</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Analytics dashboard live</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 8-30 */}
                <div className="relative flex items-start space-x-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full shadow-lg">
                    <span className="text-white font-bold">8-30</span>
                  </div>
                  <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Momentum Building</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your operations start running smoothly with visible improvements</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">99.8%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Inventory accuracy</div>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">&lt;30s</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Support response time</div>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2min</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Order processing time</div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">+32%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">AOV increase</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 31-90 */}
                <div className="relative flex items-start space-x-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-green-600 rounded-full shadow-lg">
                    <span className="text-white font-bold">31-90</span>
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl p-6 border-2 border-violet-200 dark:border-violet-700">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Full Transformation</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your e-commerce engine is running at peak performance</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Revenue Increase</span>
                        <span className="font-bold text-violet-600 dark:text-violet-400">+45%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Operational Cost Reduction</span>
                        <span className="font-bold text-purple-600 dark:text-purple-400">-65%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Customer Satisfaction</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">4.8/5 ?</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Expected ROI</span>
                        <span className="font-bold text-green-600 dark:text-green-400">5-8x</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Ready to start your e-commerce transformation?
              </p>
              <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700" asChild>
                <Link href="/contact">
                  Schedule Your Implementation Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Got Questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">We've Got Answers</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Everything you need to know about the E-Commerce & Retail Bundle
              </p>
            </div>

            <div className="grid gap-4">
              {/* FAQ Item 1 */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      Which e-commerce platforms does the bundle support?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Our E-Commerce Bundle works seamlessly with all major platforms including <span className="font-semibold text-violet-600 dark:text-violet-400">Shopify, WooCommerce, BigCommerce, Magento, and custom APIs</span>. During onboarding, our experts configure your AI agent to integrate perfectly with your existing tech stack. We can also work with multiple platforms simultaneously for multi-channel operations.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-violet-600/10 to-purple-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              {/* FAQ Item 2 */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      How many SKUs and orders can the system handle?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      The E-Commerce Bundle scales effortlessly with your business. Our <span className="font-semibold text-violet-600 dark:text-violet-400">Growth Plan ($1,749/month)</span> handles up to <span className="font-semibold">10,000 SKUs and 5,000 orders per month</span>. Need more? Our <span className="font-semibold text-violet-600 dark:text-violet-400">Scale Plan</span> offers unlimited processing power for enterprise operations with custom infrastructure.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-violet-600/10 to-purple-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              {/* FAQ Item 3 */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      What about peak seasons and high-traffic events?
                    </h3>
                    <div className="space-y-3 text-slate-600 dark:text-slate-400">
                      <p className="leading-relaxed">
                        Our platform is built for scale. During peak seasons like Black Friday or holiday shopping:
                      </p>
                      <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4 border border-violet-200 dark:border-violet-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-violet-900 dark:text-violet-300">Automatic Scaling</span>
                          <span className="text-violet-600 dark:text-violet-400 font-bold">Included</span>
                        </div>
                        <p className="text-sm text-violet-700 dark:text-violet-300">
                          Your AI agent automatically handles increased volume without manual intervention
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-lg p-4 border border-violet-200 dark:border-violet-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-violet-900 dark:text-violet-300">Priority Support</span>
                          <Badge className="bg-gradient-to-r from-violet-600 to-purple-600 text-white border-0">24/7</Badge>
                        </div>
                        <p className="text-sm text-violet-700 dark:text-violet-300">
                          Our team monitors your operations round-the-clock during critical periods
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-violet-600/10 to-purple-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              {/* FAQ Item 4 */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      How does the AI handle customer support in multiple languages?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Our Support Concierge skill includes <span className="font-semibold">multilingual capabilities</span> out of the box. The AI agent can handle customer inquiries in <span className="font-semibold text-violet-600 dark:text-violet-400">25+ languages</span>, automatically detecting and responding in the customer's preferred language. This ensures consistent, high-quality support for your global customer base without needing separate teams.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-violet-600/10 to-purple-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>

            {/* Still have questions CTA */}
            <div className="mt-12 text-center bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-violet-200 dark:border-violet-700">
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Still have questions?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Our team is here to help you understand how the E-Commerce Bundle can transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-violet-600 text-violet-600 hover:bg-violet-50 dark:border-violet-400 dark:text-violet-400 dark:hover:bg-violet-900/20" asChild>
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4" />
                    Schedule a Call
                  </Link>
                </Button>
                <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700" asChild>
                  <Link href="/pricing">
                    View All Pricing Options
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your E-Commerce Operations?
            </h2>
            <p className="text-xl mb-8 text-violet-100">
              Join hundreds of retailers using the E-Commerce Bundle to scale their business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-violet-600 hover:bg-violet-50" asChild>
                <Link href="/contact">
                  Start with E-Commerce Bundle
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
