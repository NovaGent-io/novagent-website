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
  Shield,
  Users,
  PhoneCall,
  Search,
  DollarSign,
  ArrowRight,
  Sparkles,
  BarChart3,
  FileCheck,
  UserPlus,
  GraduationCap,
  ClipboardCheck,
  ShieldCheck,
  Scale
} from "lucide-react"
import { OrbitalSkillsShowcase } from "@/components/novasuite/orbital-skills-showcase"
import { WorkflowTimeline } from "@/components/novasuite/workflow-timeline"

export default function HRComplianceBundlePage() {
  const benefits = [
    {
      title: "Complete HR Operations Stack",
      description: "Everything you need for modern people operations in one integrated solution"
    },
    {
      title: "AI-Powered Compliance",
      description: "Stay ahead of regulations with automated monitoring and proactive risk management"
    },
    {
      title: "Unified Employee Experience",
      description: "From recruitment to onboarding, create a seamless journey for every team member"
    },
    {
      title: "Expert HR Management",
      description: "Our team ensures your people processes are optimized and compliant"
    }
  ]

  // Custom skills for HR-Compliance
  const hrSkills = [
    {
      id: "talent",
      name: "Talent Scout Engine",
      icon: <UserPlus className="h-8 w-8" />,
      metric: "70% faster hiring",
      description: "AI-powered recruitment that identifies top talent",
      color: "from-blue-500 to-cyan-500",
      position: { x: 0, y: -220 }
    },
    {
      id: "onboarding",
      name: "Talent Welcome Suite",
      icon: <GraduationCap className="h-8 w-8" />,
      metric: "100% completion rate",
      description: "Seamless employee onboarding & training",
      color: "from-fuchsia-500 to-pink-500",
      position: { x: 220, y: 0 }
    },
    {
      id: "compliance",
      name: "Regulatory Risk Guard",
      icon: <ShieldCheck className="h-8 w-8" />,
      metric: "Zero violations",
      description: "Proactive compliance monitoring & alerts",
      color: "from-cyan-500 to-blue-500",
      position: { x: 0, y: 220 }
    },
    {
      id: "support",
      name: "Support Concierge",
      icon: <Users className="h-8 w-8" />,
      metric: "24/7 HR support",
      description: "Instant answers for employee questions",
      color: "from-green-500 to-emerald-500",
      position: { x: -220, y: 0 }
    }
  ]

  // Custom workflow steps for HR
  const hrWorkflowSteps = [
    {
      id: 1,
      icon: <UserPlus className="h-6 w-6" />,
      title: "Source",
      description: "AI identifies and engages top candidates across multiple channels",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: "Screen",
      description: "Automated initial assessments and interview scheduling",
      color: "from-cyan-500 to-purple-500"
    },
    {
      id: 3,
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Onboard",
      description: "Seamless digital onboarding with automated paperwork",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Protect",
      description: "Continuous compliance monitoring and risk mitigation",
      color: "from-pink-500 to-green-500"
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
              <Shield className="mr-2 h-4 w-4" />
              Pre-Configured Bundle
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-400">
                The HR & Compliance Power Suite
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              An integrated AI ecosystem that transforms your people operations and ensures compliance
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="/contact">Get Started with HR Bundle</Link>
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
              Four AI Skills Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">People Excellence</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Each skill is powerful alone, but together they create a comprehensive HR & compliance system
            </p>
          </div>

          <OrbitalSkillsShowcase customSkills={hrSkills} />

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
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">End-to-End HR Workflow</span> Automated
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Watch how your AI agent manages the complete employee lifecycle with precision
            </p>
          </div>

          <WorkflowTimeline customSteps={hrWorkflowSteps} />

          <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              Ready to Transform Your People Operations?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Choose your plan and activate these powerful HR & compliance skills
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
              Why Choose the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">HR & Compliance Bundle</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              More than just tools - a complete people operations transformation
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
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">90-Day HR Transformation</span> Journey
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Based on our proven implementation methodology, here's what you can expect when you activate the HR & Compliance Bundle
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
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Setup & Integration</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your AI agent is configured and connected to your HR systems</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">HRIS integration complete</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Compliance rules configured</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Job boards connected</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Employee helpdesk live</span>
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
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Efficiency Gains</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your HR processes are streamlined and automated</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">80%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Faster candidate screening</div>
                      </div>
                      <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">100%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Onboarding completion rate</div>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Zero</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Compliance violations</div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">&lt; 5 min</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Employee query response</div>
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
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Full HR Transformation</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your people operations are optimized and compliant</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Time-to-Hire Reduction</span>
                        <span className="font-bold text-purple-600 dark:text-purple-400">50-70%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">HR Admin Time Saved</span>
                        <span className="font-bold text-pink-600 dark:text-pink-400">30+ hrs/week</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Employee Satisfaction</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">+40%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Compliance Risk Score</span>
                        <span className="font-bold text-green-600 dark:text-green-400">Near Zero</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Ready to transform your HR operations?
              </p>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" asChild>
                <Link href="/contact">
                  Schedule Your HR Consultation
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
                HR Questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">We've Got Answers</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Everything you need to know about the HR & Compliance Bundle
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
                      How does the HR Bundle ensure compliance?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      The <span className="font-semibold text-purple-600 dark:text-purple-400">Regulatory Risk Guard</span> skill continuously monitors federal, state, and local labor regulations. It cross-references your policies and practices against current laws, alerting you to any gaps or changes. Your AI agent automatically updates compliance checklists, tracks required trainings, and maintains audit-ready documentation. This proactive approach has helped our clients maintain <span className="font-semibold">100% compliance rates</span> during audits.
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
                      Can I customize the recruitment process?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Absolutely! The <span className="font-semibold text-purple-600 dark:text-purple-400">Talent Scout Engine</span> is fully customizable to your hiring needs. During onboarding, we configure your ideal candidate profiles, screening questions, and assessment criteria. Your AI agent then sources candidates from multiple platforms, conducts initial screenings based on your requirements, and even schedules interviews with qualified candidates. You maintain full control while the AI handles the time-consuming tasks.
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
                      What HRIS systems do you integrate with?
                    </h3>
                    <div className="space-y-3 text-slate-600 dark:text-slate-400">
                      <p className="leading-relaxed">
                        We integrate with all major HRIS platforms and can connect to custom systems through APIs. Popular integrations include:
                      </p>
                      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            <span className="text-sm">Workday</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            <span className="text-sm">BambooHR</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            <span className="text-sm">ADP</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            <span className="text-sm">Gusto</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            <span className="text-sm">Rippling</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            <span className="text-sm">Custom APIs</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        Don't see your system? Our team can create custom integrations during onboarding.
                      </p>
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
                      How secure is employee data?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Security is our top priority. Each client receives a <span className="font-semibold">dedicated, single-tenant instance</span> ensuring complete data isolation. We employ <span className="font-semibold text-purple-600 dark:text-purple-400">enterprise-grade encryption</span> for data at rest and in transit, maintain SOC 2 compliance, and can meet HIPAA requirements for healthcare clients. Your employee data never mingles with other clients' data, and our AI agent operates within strict security boundaries defined during setup.
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
                Our HR specialists are here to help you understand how the HR & Compliance Bundle can transform your organization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20" asChild>
                  <Link href="/contact">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Schedule an HR Consultation
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
              Ready to Transform Your People Operations?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Join leading organizations using the HR & Compliance Bundle to build exceptional teams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50" asChild>
                <Link href="/contact">
                  Start with HR Bundle
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
