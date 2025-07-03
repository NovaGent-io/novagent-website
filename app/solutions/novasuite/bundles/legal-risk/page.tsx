"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  ArrowLeft, 
  Scale, 
  CheckCircle2, 
  Shield,
  FileText,
  AlertTriangle,
  Lock,
  Gavel,
  ArrowRight,
  Sparkles,
  PhoneCall,
  BarChart3,
  Clock,
  Search,
  DollarSign,
  ShieldCheck,
  TrendingUp,
  FileSearch,
  AlertCircle,
  FileCheck
} from "lucide-react"
import { OrbitalSkillsShowcase } from "@/components/novasuite/orbital-skills-showcase"
import { WorkflowTimeline } from "@/components/novasuite/workflow-timeline"

export default function LegalRiskBundlePage() {
  const benefits = [
    {
      title: "Complete Legal Stack",
      description: "Everything you need for modern legal operations and compliance in one integrated solution"
    },
    {
      title: "AI-Powered Risk Management",
      description: "Proactively identify and mitigate regulatory risks before they become costly issues"
    },
    {
      title: "Unified Compliance Dashboard",
      description: "All your legal documents, contracts, and compliance status tracked in one place"
    },
    {
      title: "Expert Legal Support",
      description: "Our team ensures your AI agent stays current with the latest regulations and best practices"
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/solutions/novasuite"
              className="inline-flex items-center text-indigo-300 hover:text-indigo-200 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to NovaSuite
            </Link>
          </div>

          <div className="text-center mb-16">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
              <Scale className="mr-2 h-4 w-4" />
              Pre-Configured Bundle
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400">
                The Legal & Risk Intelligence Suite
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              An integrated AI ecosystem that protects your business with proactive compliance and intelligent legal operations
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700" asChild>
                <Link href="/contact">Get Started with Legal Bundle</Link>
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
              Four AI Skills Working in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Perfect Harmony</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Each skill is a powerful tool on its own, but together they create an unbreakable legal and compliance fortress
            </p>
          </div>

          <OrbitalSkillsShowcase />

          <div className="mt-16 text-center">
            <Link 
              href="/capabilities"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
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
              See the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Seamless Workflow</span> in Action
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Watch how your AI agent orchestrates comprehensive legal protection from risk detection to resolution
            </p>
          </div>

          <WorkflowTimeline />

          <div className="mt-16 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              Ready to Transform Your Legal Operations?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Choose your plan and activate these powerful skills for your AI agent
            </p>
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700" asChild>
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
              Why Choose the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Legal & Risk Bundle</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              More than just tools - a complete legal transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
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
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">90-Day Transformation</span> Roadmap
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Based on our proven implementation methodology, here's what you can expect when you activate the Legal & Risk Bundle
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-blue-600 to-green-600"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {/* Day 1-7 */}
                <div className="relative flex items-start space-x-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full shadow-lg">
                    <span className="text-white font-bold">1-7</span>
                  </div>
                  <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Launch & Assessment</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your AI agent is configured and begins comprehensive risk assessment</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Document repository scanned</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Compliance baseline established</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Risk monitoring activated</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Alert systems configured</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 8-30 */}
                <div className="relative flex items-start space-x-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full shadow-lg">
                    <span className="text-white font-bold">8-30</span>
                  </div>
                  <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Active Protection</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your compliance posture strengthens with proactive risk management</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">100%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Contract compliance rate</div>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">75%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Risk reduction achieved</div>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Continuous monitoring</div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">90%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Faster document processing</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 31-90 */}
                <div className="relative flex items-start space-x-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-green-600 rounded-full shadow-lg">
                    <span className="text-white font-bold">31-90</span>
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl p-6 border-2 border-indigo-200 dark:border-indigo-700">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Full Transformation</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your legal operations are running at peak efficiency with minimal risk</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Compliance Violations Prevented</span>
                        <span className="font-bold text-indigo-600 dark:text-indigo-400">95%+</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Legal Processing Time Saved</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">80%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Contract Turnaround</span>
                        <span className="font-bold text-purple-600 dark:text-purple-400">&lt; 24 hrs</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Risk-Adjusted Savings</span>
                        <span className="font-bold text-green-600 dark:text-green-400">$250K+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Ready to bulletproof your legal operations?
              </p>
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700" asChild>
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
                Got Questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">We've Got Answers</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Everything you need to know about the Legal & Risk Bundle
              </p>
            </div>

            <div className="grid gap-4">
              {/* FAQ Item 1 */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      How do AI Credits work with the Legal & Risk Bundle?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      The Legal & Risk Bundle works seamlessly with our flexible pricing tiers. When you're on the <span className="font-semibold text-indigo-600 dark:text-indigo-400">Growth Plan ($1,749/month)</span>, you receive <span className="font-semibold">20,000 AI Credits</span> monthly. These credits power all four skills in your bundle - from compliance monitoring to document generation. Your AI agent intelligently optimizes credit usage across all legal operations to maximize your protection.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-600/10 to-blue-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              {/* FAQ Item 2 */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      Can the AI handle industry-specific regulations?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Absolutely! Our AI agent is continuously updated with the latest regulations across multiple industries including <span className="font-semibold">HIPAA, GDPR, SOC 2, PCI-DSS, and more</span>. During onboarding, we configure your agent with your specific industry requirements and compliance frameworks. The agent then monitors changes specific to your regulatory environment.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-600/10 to-blue-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              {/* FAQ Item 3 */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      What happens if I need more AI Credits?
                    </h3>
                    <div className="space-y-3 text-slate-600 dark:text-slate-400">
                      <p className="leading-relaxed">
                        We've designed our plans to handle typical legal operations, but if you need more credits, you have options:
                      </p>
                      <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-indigo-900 dark:text-indigo-300">Additional Credits</span>
                          <span className="text-indigo-600 dark:text-indigo-400 font-bold">$50 per 1,000</span>
                        </div>
                        <p className="text-sm text-indigo-700 dark:text-indigo-300">
                          Perfect for busy periods or major compliance projects
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-indigo-900 dark:text-indigo-300">Upgrade to Scale Plan</span>
                          <Badge className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white border-0">Recommended</Badge>
                        </div>
                        <p className="text-sm text-indigo-700 dark:text-indigo-300">
                          Custom credit pools, unlimited skills, and dedicated legal AI specialist for enterprise needs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-600/10 to-blue-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              {/* FAQ Item 4 */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      How secure is my legal data?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Security is our top priority. Your legal data is protected with <span className="font-semibold">bank-grade encryption</span>, both at rest and in transit. We maintain <span className="font-semibold text-indigo-600 dark:text-indigo-400">SOC 2 Type II compliance</span> and use isolated, single-tenant architecture so your data is never commingled. All document processing happens within your secure environment, and we maintain complete audit trails for every action.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-600/10 to-blue-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>

            {/* Still have questions CTA */}
            <div className="mt-12 text-center bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-700">
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Still have questions?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Our team is here to help you understand how the Legal & Risk Bundle can protect your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-900/20" asChild>
                  <Link href="/contact">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Schedule a Call
                  </Link>
                </Button>
                <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700" asChild>
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
      <section className="py-16 sm:py-24 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Secure Your Legal Future?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Join leading companies using the Legal & Risk Bundle to transform their compliance and legal operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50" asChild>
                <Link href="/contact">
                  Start with Legal Bundle
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
