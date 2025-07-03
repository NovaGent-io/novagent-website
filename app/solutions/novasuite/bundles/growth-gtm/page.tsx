"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  ArrowLeft, 
  Target, 
  CheckCircle2, 
  TrendingUp,
  Rocket,
  Users,
  PhoneCall,
  Search,
  DollarSign,
  ArrowRight,
  Sparkles,
  BarChart3
} from "lucide-react"
import { OrbitalSkillsShowcase } from "@/components/novasuite/orbital-skills-showcase"
import { WorkflowTimeline } from "@/components/novasuite/workflow-timeline"

export default function GrowthGTMBundlePage() {
  const benefits = [
    {
      title: "Complete Sales Stack",
      description: "Everything you need for modern B2B sales in one integrated solution"
    },
    {
      title: "AI-Powered Efficiency",
      description: "Automate repetitive tasks while maintaining personalization at scale"
    },
    {
      title: "Unified Data & Insights",
      description: "All your sales activities tracked in one dashboard with actionable insights"
    },
    {
      title: "Expert Management",
      description: "Our team optimizes your entire GTM motion, not just individual tools"
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/solutions/novasuite"
              className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to NovaSuite
            </Link>
          </div>

          <div className="text-center mb-16">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300">
              <Rocket className="mr-2 h-4 w-4" />
              Pre-Configured Bundle
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-400">
                The Growth & GTM Power Suite
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              An integrated AI ecosystem that orchestrates your entire revenue engine
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="/contact">Get Started with Growth Bundle</Link>
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
              Four AI Skills Working in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Perfect Harmony</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Each skill is a powerful tool on its own, but together they create an unstoppable revenue acceleration engine
            </p>
          </div>

          <OrbitalSkillsShowcase />

          <div className="mt-16 text-center">
            <Link 
              href="/capabilities"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
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
              See the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Seamless Workflow</span> in Action
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Watch how your AI agent orchestrates the perfect sales motion from first touch to closed deal
            </p>
          </div>

          <WorkflowTimeline />

          <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              Ready to Transform Your Revenue Engine?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Choose your plan and activate these powerful skills for your AI agent
            </p>
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" asChild>
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
              Why Choose the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Growth Bundle</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              More than just tools - a complete GTM transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
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
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">90-Day Transformation</span> Roadmap
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Based on our proven implementation methodology, here's what you can expect when you activate the Growth & GTM Bundle
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-pink-600 to-green-600"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {/* Day 1-7 */}
                <div className="relative flex items-start space-x-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full shadow-lg">
                    <span className="text-white font-bold">1-7</span>
                  </div>
                  <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Launch & Integration</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your AI agent is configured and connected to your systems</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">CRM integration complete</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Calendar sync activated</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">ICP targeting configured</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">First outreach campaigns live</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 8-30 */}
                <div className="relative flex items-start space-x-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-pink-600 rounded-full shadow-lg">
                    <span className="text-white font-bold">8-30</span>
                  </div>
                  <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Momentum Building</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your pipeline starts filling with qualified opportunities</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">500+</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Qualified leads identified</div>
                      </div>
                      <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">50-75</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Meetings booked</div>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">35%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Response rate improvement</div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">4.5?</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Online reputation score</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 31-90 */}
                <div className="relative flex items-start space-x-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-green-600 rounded-full shadow-lg">
                    <span className="text-white font-bold">31-90</span>
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-700">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Full Transformation</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your revenue engine is running at peak performance</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Pipeline Value Increase</span>
                        <span className="font-bold text-purple-600 dark:text-purple-400">250-350%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Sales Cycle Reduction</span>
                        <span className="font-bold text-pink-600 dark:text-pink-400">40-60%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Team Time Saved</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">20+ hrs/week</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Expected ROI</span>
                        <span className="font-bold text-green-600 dark:text-green-400">3-5x</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Ready to start your transformation journey?
              </p>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" asChild>
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
                Got Questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">We've Got Answers</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Everything you need to know about the Growth & GTM Bundle
              </p>
            </div>

            <div className="grid gap-4">
              {/* FAQ Item 1 */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      How do AI Credits work with the Growth Bundle?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      The Growth Bundle works seamlessly with our flexible pricing tiers. When you're on the <span className="font-semibold text-purple-600 dark:text-purple-400">Growth Plan ($1,749/month)</span>, you receive <span className="font-semibold">20,000 AI Credits</span> monthly. These credits power all four skills in your bundle - from lead generation to reputation management. Your AI agent intelligently optimizes credit usage across all activities to maximize your ROI.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              {/* FAQ Item 2 */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      Can I add more skills to my bundle later?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Absolutely! The Growth Plan supports <span className="font-semibold">up to 8 active skills</span>, so you have room to expand beyond the 4 skills in this bundle. You can add individual skills anytime through your dashboard. For maximum flexibility, consider our <span className="font-semibold text-purple-600 dark:text-purple-400">Scale Plan</span> which offers unlimited skills.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              {/* FAQ Item 3 */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      What happens if I need more AI Credits?
                    </h3>
                    <div className="space-y-3 text-slate-600 dark:text-slate-400">
                      <p className="leading-relaxed">
                        We've designed our plans to be generous, but if you need more credits, you have options:
                      </p>
                      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-purple-900 dark:text-purple-300">Additional Credits</span>
                          <span className="text-purple-600 dark:text-purple-400 font-bold">$50 per 1,000</span>
                        </div>
                        <p className="text-sm text-purple-700 dark:text-purple-300">
                          Perfect for temporary spikes in usage
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-purple-900 dark:text-purple-300">Upgrade to Scale Plan</span>
                          <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">Recommended</Badge>
                        </div>
                        <p className="text-sm text-purple-700 dark:text-purple-300">
                          Custom credit pools, unlimited skills, and dedicated support for growing businesses
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              {/* FAQ Item 4 */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      How quickly can I see results?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Results start <span className="font-semibold">immediately</span>. Within 24 hours of activation, your AI agent begins identifying leads and initiating outreach. Most clients see their first booked meetings within 3-5 days. By day 30, you'll have measurable pipeline growth. Check out our <span className="font-semibold text-purple-600 dark:text-purple-400">90-Day Transformation Roadmap</span> above for detailed milestones.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>

            {/* Still have questions CTA */}
            <div className="mt-12 text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-700">
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Still have questions?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Our team is here to help you understand how the Growth & GTM Bundle can transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20" asChild>
                  <Link href="/contact">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Schedule a Call
                  </Link>
                </Button>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" asChild>
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
      <section className="py-16 sm:py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Join hundreds of companies using the Growth & GTM Bundle to transform their sales process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50" asChild>
                <Link href="/contact">
                  Start with Growth Bundle
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
