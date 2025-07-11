"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  ArrowLeft, 
  CheckCircle2, 
  Rocket,
  ArrowRight,
  PhoneCall,
  Heart,
  Calendar,
  FileText,
  Users,
  Clock,
  Shield,
  Activity,
  Stethoscope,
  UserCheck,
  ClipboardCheck,
  Brain,
  AlertCircle,
  TrendingUp,
  DollarSign,
  Sparkles
} from "lucide-react"
import { OrbitalSkillsShowcase } from "@/components/novasuite/orbital-skills-showcase"
import { WorkflowTimeline } from "@/components/novasuite/workflow-timeline"

export default function HealthcareAdminKitPage() {
  const skills = [
    {
      id: "appointment",
      name: "Appointment Coordinator",
      icon: <Calendar className="h-8 w-8" />,
      metric: "90% show rate",
      description: "Automated patient scheduling with intelligent reminders",
      color: "from-blue-500 to-cyan-500",
      position: { x: 0, y: -220 }
    },
    {
      id: "support",
      name: "Patient Concierge",
      icon: <Heart className="h-8 w-8" />,
      metric: "24/7 availability",
      description: "AI-powered patient support & pre-visit preparation",
      color: "from-pink-500 to-rose-500",
      position: { x: 220, y: 0 }
    },
    {
      id: "dialer",
      name: "Intelligent Dialer",
      icon: <PhoneCall className="h-8 w-8" />,
      metric: "3x more efficient",
      description: "Smart call routing & automated appointment confirmations",
      color: "from-green-500 to-emerald-500",
      position: { x: 0, y: 220 }
    },
    {
      id: "referral",
      name: "Referral Navigator",
      icon: <Users className="h-8 w-8" />,
      metric: "Same-day processing",
      description: "Seamless specialist referral coordination",
      color: "from-purple-500 to-indigo-500",
      position: { x: -220, y: 0 }
    }
  ]

  const benefits = [
    {
      title: "HIPAA-Compliant by Design",
      description: "Every interaction is secured with enterprise-grade encryption and compliance protocols"
    },
    {
      title: "Reduce No-Shows by 40%",
      description: "Intelligent multi-channel reminders ensure patients arrive prepared and on time"
    },
    {
      title: "Free Up 20+ Staff Hours Weekly",
      description: "Automate repetitive tasks so your team can focus on patient care"
    },
    {
      title: "Seamless EMR Integration",
      description: "Works with Epic, Cerner, Athena, and all major healthcare systems"
    }
  ]

  const workflowSteps = [
    {
      title: "New Patient Inquiry",
      description: "Patient calls or submits online form",
      skills: ["Patient Concierge"],
      outcomes: ["Insurance verified", "Symptoms documented", "Urgency assessed"]
    },
    {
      title: "Smart Scheduling",
      description: "AI finds optimal appointment slot",
      skills: ["Appointment Coordinator"],
      outcomes: ["Provider matched", "Time slot booked", "EMR updated"]
    },
    {
      title: "Pre-Visit Prep",
      description: "Automated patient preparation",
      skills: ["Intelligent Dialer", "Patient Concierge"],
      outcomes: ["Forms sent", "Reminders scheduled", "Instructions provided"]
    },
    {
      title: "Referral Management",
      description: "Post-visit specialist coordination",
      skills: ["Referral Navigator"],
      outcomes: ["Specialist contacted", "Records transferred", "Follow-up scheduled"]
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 border border-blue-500/20">
              <Stethoscope className="mr-2 h-4 w-4" />
              Healthcare-Optimized Kit
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400">
                Healthcare Practice OS
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              The complete AI-powered operating system for modern healthcare practices. Reduce administrative burden by 60% while improving patient satisfaction scores.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/contact">Schedule Your HIPAA-Compliant Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/pricing">View Healthcare Pricing</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2 text-blue-300">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-300">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-medium">SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-300">
                <Activity className="h-5 w-5" />
                <span className="text-sm font-medium">HL7 FHIR Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Challenges Section */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              The Modern Healthcare Challenge: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Too Much Admin, Too Little Care</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Healthcare providers spend 40% of their time on administrative tasks. It's time to flip that ratio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Challenge Cards */}
            <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-red-100 dark:bg-red-800/30 rounded-lg">
                    <Clock className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <CardTitle className="text-lg">Chronic No-Shows</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  15-30% appointment no-show rates cost practices $150K+ annually in lost revenue
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-800/30 rounded-lg">
                    <PhoneCall className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <CardTitle className="text-lg">Phone Tag Nightmare</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Staff spends 2+ hours daily on phone tag for appointments, referrals, and follow-ups
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-amber-100 dark:bg-amber-800/30 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <CardTitle className="text-lg">Referral Black Hole</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  40% of referrals never result in appointments due to poor coordination and follow-up
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Orbital Skills Showcase Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Four Essential Skills for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Healthcare Excellence</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Each skill is purpose-built for healthcare workflows and compliance requirements
            </p>
          </div>

          <OrbitalSkillsShowcase customSkills={skills} />

          <div className="mt-16 text-center">
            <Link 
              href="/contact"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              Schedule a consultation to explore more healthcare skills <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Patient Journey</span> Reimagined
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              See how your AI agent orchestrates a seamless experience from first contact to follow-up care
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative group hover:scale-105 transition-transform duration-300">
                  {/* Connection lines for desktop */}
                  {index === 0 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                  )}
                  {index === 1 && (
                    <div className="hidden md:block absolute left-1/2 -bottom-3 w-0.5 h-6 bg-gradient-to-b from-blue-400 to-transparent"></div>
                  )}
                  {index === 2 && (
                    <div className="hidden md:block absolute -left-3 top-1/2 w-6 h-0.5 bg-gradient-to-l from-blue-400 to-transparent"></div>
                  )}
                  
                  <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700 group-hover:border-blue-400 dark:group-hover:border-blue-600">
                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl shadow-md text-white">
                        <span className="text-xl font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Content - More Compact */}
                    <div className="space-y-3">
                      {/* Active Skills */}
                      <div>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Active Skills:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {step.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-0.5">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Outcomes */}
                      <div>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Outcomes:</p>
                        <div className="space-y-1">
                          {step.outcomes.map((outcome, outcomeIndex) => (
                            <div key={outcomeIndex} className="flex items-start space-x-1.5">
                              <CheckCircle2 className="h-3.5 w-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-600 dark:text-slate-400 leading-tight">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mobile Connection Indicator */}
            <div className="md:hidden flex justify-center mt-8">
              <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                <Activity className="h-4 w-4" />
                <span>Seamless workflow integration</span>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              Ready to Transform Your Practice?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Join leading healthcare providers who've reduced admin time by 60% and improved patient satisfaction
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700" asChild>
              <Link href="/pricing">View Healthcare Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Healthcare Leaders Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">NovaGent</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Purpose-built for healthcare's unique challenges and compliance requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
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

      {/* ROI Timeline Section */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">90-Day Practice Transformation</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Based on results from 100+ healthcare implementations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-teal-600 to-green-600"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {/* Week 1 */}
                <div className="relative flex items-start space-x-6">
                  <div className="relative z-10 flex flex-col items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg">
                    <span className="text-white font-bold text-sm">Week</span>
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Seamless Integration</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your AI agent connects to your EMR and begins learning your workflows</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">EMR integration complete</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Staff training finished</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">HIPAA protocols verified</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">First appointments booked</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Month 1 */}
                <div className="relative flex items-start space-x-6">
                  <div className="relative z-10 flex flex-col items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full shadow-lg">
                    <span className="text-white font-bold text-sm">Month</span>
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Measurable Impact</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Staff and patients experience the difference</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">35%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Reduction in no-shows</div>
                      </div>
                      <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">50%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Less phone time</div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">80%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Referral completion rate</div>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">4.8</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Patient satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Month 3 */}
                <div className="relative flex items-start space-x-6">
                  <div className="relative z-10 flex flex-col items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg">
                    <span className="text-white font-bold text-sm">Month</span>
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-700 shadow-lg">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Practice Transformation</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your practice operates at peak efficiency</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Staff hours saved weekly</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">20-25 hours</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Revenue increase</span>
                        <span className="font-bold text-green-600 dark:text-green-400">15-20%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Patient wait times</span>
                        <span className="font-bold text-teal-600 dark:text-teal-400">-40%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-300">Provider satisfaction</span>
                        <span className="font-bold text-purple-600 dark:text-purple-400"> 35%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROI Calculator CTA */}
            <div className="mt-16 text-center">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Want to see your practice's potential ROI?
              </p>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700" asChild>
                <Link href="/contact">
                  Calculate Your Practice ROI
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare-Specific FAQ Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Healthcare Leaders Ask, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">We Answer</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Everything you need to know about implementing NovaGent in your practice
              </p>
            </div>

            <div className="grid gap-4">
              {/* HIPAA Compliance */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      How do you ensure HIPAA compliance and patient data security?
                    </h3>
                    <div className="space-y-3 text-slate-600 dark:text-slate-400">
                      <p className="leading-relaxed">
                        Security isn't an afterthought?it's built into every layer of our platform:
                      </p>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                            <span><strong>Single-tenant architecture:</strong> Your data is completely isolated in its own secure environment</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                            <span><strong>End-to-end encryption:</strong> All data is encrypted at rest and in transit using AES-256</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                            <span><strong>BAA included:</strong> We sign Business Associate Agreements with all healthcare clients</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                            <span><strong>Regular audits:</strong> Annual SOC 2 Type II and HIPAA compliance audits</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/10 to-teal-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              {/* EMR Integration */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 flex items-center justify-center">
                      <Activity className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Which EMR systems do you integrate with?
                    </h3>
                    <div className="space-y-3 text-slate-600 dark:text-slate-400">
                      <p className="leading-relaxed">
                        We integrate seamlessly with all major EMR systems through HL7 FHIR standards:
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div className="bg-slate-50 dark:bg-slate-700 rounded-lg px-4 py-2 text-center">
                          <span className="font-medium text-slate-700 dark:text-slate-300">Epic</span>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-700 rounded-lg px-4 py-2 text-center">
                          <span className="font-medium text-slate-700 dark:text-slate-300">Cerner</span>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-700 rounded-lg px-4 py-2 text-center">
                          <span className="font-medium text-slate-700 dark:text-slate-300">Athenahealth</span>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-700 rounded-lg px-4 py-2 text-center">
                          <span className="font-medium text-slate-700 dark:text-slate-300">eClinicalWorks</span>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-700 rounded-lg px-4 py-2 text-center">
                          <span className="font-medium text-slate-700 dark:text-slate-300">NextGen</span>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-700 rounded-lg px-4 py-2 text-center">
                          <span className="font-medium text-slate-700 dark:text-slate-300">AllScripts</span>
                        </div>
                      </div>
                      <p className="text-sm italic">
                        Don't see your EMR? We can build custom integrations in 2-4 weeks.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/10 to-teal-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              {/* Implementation Time */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      How long does implementation take?
                    </h3>
                    <div className="space-y-3 text-slate-600 dark:text-slate-400">
                      <p className="leading-relaxed">
                        We've streamlined healthcare implementations to minimize disruption:
                      </p>
                      <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">Initial setup & EMR connection</span>
                            <span className="text-blue-600 dark:text-blue-400 font-bold">2-3 days</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-medium">Staff training & workflow mapping</span>
                            <span className="text-blue-600 dark:text-blue-400 font-bold">3-5 days</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-medium">Go-live with full support</span>
                            <span className="text-green-600 dark:text-green-400 font-bold">Day 7</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/10 to-teal-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              {/* Pricing */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      What's the investment for a typical practice?
                    </h3>
                    <div className="space-y-3 text-slate-600 dark:text-slate-400">
                      <p className="leading-relaxed">
                        Our healthcare bundles are designed to deliver immediate ROI:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
                          <div className="font-semibold text-blue-900 dark:text-blue-300 mb-1">Small Practice (1-5 providers)</div>
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$999/month</div>
                          <div className="text-sm mt-2">Pro Plan with Healthcare Bundle</div>
                        </div>
                        <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
                          <div className="font-semibold text-blue-900 dark:text-blue-300 mb-1">Medium Practice (6-20 providers)</div>
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$1,749/month</div>
                          <div className="text-sm mt-2">Growth Plan with expanded capacity</div>
                          <Badge className="mt-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white border-0">Most Popular</Badge>
                        </div>
                      </div>
                      <p className="text-sm bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-200 dark:border-green-700">
                        <strong className="text-green-800 dark:text-green-300">Average ROI:</strong> Practices typically save 20+ staff hours weekly, worth $3,000-$4,000/month in labor costs alone.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/10 to-teal-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>

            {/* Healthcare-specific CTA */}
            <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-700">
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Have specific questions about your practice?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Our healthcare specialists understand your unique challenges and compliance needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20" asChild>
                  <Link href="/contact">
                    <Stethoscope className="mr-2 h-4 w-4" />
                    Talk to a Healthcare Specialist
                  </Link>
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700" asChild>
                  <Link href="/pricing">
                    See Healthcare Pricing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mb-6">
              <Brain className="h-10 w-10 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">
              Join the Healthcare AI Revolution
            </h2>
            <p className="text-xl mb-8 text-slate-600 dark:text-slate-300">
              Leading practices are already transforming with NovaGent. Don't let administrative burden hold your practice back.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700" asChild>
                <Link href="/contact">
                  Start Your Practice Transformation
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20" asChild>
                <Link href="/solutions/novasuite">View All Industry Kits</Link>
              </Button>
            </div>

            <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
              No credit card required ? HIPAA compliant ? 30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
