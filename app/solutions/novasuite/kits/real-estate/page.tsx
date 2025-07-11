"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  ArrowLeft, 
  Building, 
  CheckCircle2,
  PhoneCall,
  Search,
  ArrowRight,
  Home,
  Calendar,
  FileText,
  Key
} from "lucide-react"
import { OrbitalSkillsShowcase } from "@/components/novasuite/orbital-skills-showcase"
import { WorkflowTimeline } from "@/components/novasuite/workflow-timeline"

export default function RealEstateBundlePage() {
  const benefits = [
    {
      title: "Complete Brokerage Stack",
      description: "Everything you need for modern real estate operations in one integrated solution"
    },
    {
      title: "AI-Powered Efficiency",
      description: "Automate lead qualification, showing scheduling, and document management at scale"
    },
    {
      title: "MLS Integration & Sync",
      description: "Keep all your listings updated across platforms with intelligent automation"
    },
    {
      title: "Expert Management",
      description: "Our team optimizes your entire real estate workflow, not just individual tools"
    }
  ]

  const realEstateSkills = [
    {
      id: "prospect",
      name: "Prospect Hunter",
      icon: <Search className="h-8 w-8" />,
      metric: "500+ leads/month",
      description: "Qualify buyers & sellers from Zillow, your site & more",
      color: "from-amber-500 to-orange-500",
      position: { x: 0, y: -220 }
    },
    {
      id: "schedule",
      name: "Schedule Coordinator",
      icon: <Calendar className="h-8 w-8" />,
      metric: "90% show rate",
      description: "Book viewings, inspections & closings seamlessly",
      color: "from-blue-500 to-cyan-500",
      position: { x: 220, y: 0 }
    },
    {
      id: "property",
      name: "Property Intelligence",
      icon: <Building className="h-8 w-8" />,
      metric: "24/7 MLS sync",
      description: "Manage listings & property data automatically",
      color: "from-emerald-500 to-green-500",
      position: { x: 0, y: 220 }
    },
    {
      id: "legal",
      name: "Legal Logic Hub",
      icon: <FileText className="h-8 w-8" />,
      metric: "100% compliant",
      description: "Generate contracts & disclosure documents instantly",
      color: "from-purple-500 to-pink-500",
      position: { x: -220, y: 0 }
    }
  ]

  const realEstateWorkflow = [
    {
      id: 1,
      icon: <Home className="h-6 w-6" />,
      title: "Capture",
      description: "AI qualifies leads from Zillow, Trulia & your website 24/7",
      color: "from-amber-500 to-orange-500"
    },
    {
      id: 2,
      icon: <Calendar className="h-6 w-6" />,
      title: "Schedule",
      description: "Automated booking for viewings & appointments",
      color: "from-orange-500 to-blue-500"
    },
    {
      id: 3,
      icon: <FileText className="h-6 w-6" />,
      title: "Document",
      description: "Generate offers, contracts & disclosures instantly",
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 4,
      icon: <Key className="h-6 w-6" />,
      title: "Close",
      description: "Track deals & manage closing coordination",
      color: "from-purple-500 to-green-500"
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-amber-900 to-orange-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link 
              href="/solutions/novasuite"
              className="inline-flex items-center text-amber-300 hover:text-amber-200 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to NovaSuite
            </Link>
          </div>

          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center rounded-full bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-300">
              <Building className="mr-2 h-4 w-4" />
              Pre-Configured Bundle
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">
                The Real Estate Growth Engine
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              An integrated AI ecosystem that automates your brokerage operations from lead to close
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700" asChild>
                <Link href="/contact">Get Started with Real Estate Bundle</Link>
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
              Four AI Skills Working in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Perfect Harmony</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Each skill is a powerful tool on its own, but together they create an unstoppable real estate operations engine
            </p>
          </div>

          <OrbitalSkillsShowcase customSkills={realEstateSkills} />

          <div className="mt-16 text-center">
            <Link 
              href="/contact"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 font-medium"
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
              See the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Seamless Workflow</span> in Action
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Watch how your AI agent orchestrates the perfect real estate transaction from first inquiry to keys in hand
            </p>
          </div>

          <WorkflowTimeline customSteps={realEstateWorkflow} />

          <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              Ready to Transform Your Brokerage?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Choose your plan and activate these powerful skills for your AI agent
            </p>
            <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700" asChild>
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
              Why Choose the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Real Estate Bundle</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              More than just tools - a complete brokerage transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
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
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">90-Day Transformation</span> Roadmap
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Based on our proven implementation methodology, here&apos;s what you can expect when you activate the Real Estate Bundle
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-600 via-orange-600 to-green-600"></div>
              
              <div className="space-y-12">
                {/* Day 1-7 */}
                <div className="relative flex items-start space-x-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full shadow-lg">
                    <span className="text-white font-bold">1-7</span>
                  </div>
                  <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Launch & Integration</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your AI agent is configured and connected to your systems</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">MLS integration complete</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Calendar sync activated</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Lead sources connected</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Document templates loaded</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 8-30 */}
                <div className="relative flex items-start space-x-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full shadow-lg">
                    <span className="text-white font-bold">8-30</span>
                  </div>
                  <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Momentum Building</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your pipeline starts filling with qualified buyers and sellers</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">300+</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Qualified leads captured</div>
                      </div>
                      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">75-100</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Showings scheduled</div>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">90%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Show rate improvement</div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">15-20</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Offers generated</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 31-90 */}
                <div className="relative flex items-start space-x-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-green-600 rounded-full shadow-lg">
                    <span className="text-white font-bold">31-90</span>
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 border-2 border-amber-200 dark:border-amber-700">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Full Transformation</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your brokerage is running at peak performance</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Listing Volume Increase</span>
                        <span className="font-bold text-amber-600 dark:text-amber-400">200-300%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Time to Close Reduction</span>
                        <span className="font-bold text-orange-600 dark:text-orange-400">35-50%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Agent Time Saved</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">25+ hrs/week</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Expected ROI</span>
                        <span className="font-bold text-green-600 dark:text-green-400">4-6x</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Ready to start your transformation journey?
              </p>
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700" asChild>
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
                Got Questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">We&apos;ve Got Answers</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Everything you need to know about the Real Estate Bundle
              </p>
            </div>

            <div className="grid gap-4">
              {/* FAQ Item 1 */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      How do AI Credits work with the Real Estate Bundle?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      The Real Estate Bundle works seamlessly with our flexible pricing tiers. When you&apos;re on the <span className="font-semibold text-amber-600 dark:text-amber-400">Growth Plan ($1,749/month)</span>, you receive <span className="font-semibold">20,000 AI Credits</span> monthly. These credits power all four skills in your bundle - from lead qualification to document generation. Your AI agent intelligently optimizes credit usage across all activities to maximize your ROI.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-600/10 to-orange-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              {/* FAQ Item 2 */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      Does this integrate with my existing MLS and CRM?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Yes! Our Property Intelligence Manager skill is designed to work with major MLS systems and real estate CRMs. During onboarding, our team handles all the technical integration work. We support popular platforms like <span className="font-semibold">Zillow, Trulia, Realtor.com</span>, and CRMs like <span className="font-semibold">Follow Up Boss, kvCORE, and BoomTown</span>. Your listings stay synchronized across all platforms automatically.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-600/10 to-orange-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              {/* FAQ Item 3 */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      Can the AI generate state-specific real estate documents?
                    </h3>
                    <div className="space-y-3 text-slate-600 dark:text-slate-400">
                      <p className="leading-relaxed">
                        Absolutely! Our Legal Logic Hub skill is configured with your state&apos;s specific requirements and your brokerage&apos;s approved templates:
                      </p>
                      <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-amber-900 dark:text-amber-300">Document Types</span>
                          <Badge className="bg-amber-600 text-white border-0">Customizable</Badge>
                        </div>
                        <p className="text-sm text-amber-700 dark:text-amber-300">
                          Purchase offers, listing agreements, disclosures, addendums - all state-compliant
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-amber-900 dark:text-amber-300">Compliance Guaranteed</span>
                          <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white border-0">Managed Service</Badge>
                        </div>
                        <p className="text-sm text-amber-700 dark:text-amber-300">
                          Our team ensures all templates meet your state&apos;s legal requirements and are regularly updated
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-600/10 to-orange-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              {/* FAQ Item 4 */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      How quickly can I see results in my real estate business?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Results start <span className="font-semibold">immediately</span>. Within 24 hours of activation, your AI agent begins qualifying leads from all your sources. Most brokerages see their first AI-scheduled showing within 2-3 days. By day 30, you&apos;ll have measurable improvements in lead response time and showing rates. Check out our <span className="font-semibold text-amber-600 dark:text-amber-400">90-Day Transformation Roadmap</span> above for detailed milestones.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-600/10 to-orange-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>

            {/* Still have questions CTA */}
            <div className="mt-12 text-center bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-amber-200 dark:border-amber-700">
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Still have questions?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Our team is here to help you understand how the Real Estate Bundle can transform your brokerage
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-900/20" asChild>
                  <Link href="/contact">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Schedule a Call
                  </Link>
                </Button>
                <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700" asChild>
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
      <section className="py-16 sm:py-24 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Revolutionize Your Real Estate Business?
            </h2>
            <p className="text-xl mb-8 text-amber-100">
              Join hundreds of brokerages using the Real Estate Bundle to automate operations and close more deals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50" asChild>
                <Link href="/contact">
                  Start with Real Estate Bundle
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
