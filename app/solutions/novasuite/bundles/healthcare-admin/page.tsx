"use client"

import React from "react"
import { Button } from "@/components/ui/button"
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
  Users
} from "lucide-react"
import { OrbitalSkillsShowcase } from "@/components/novasuite/orbital-skills-showcase"
import { WorkflowTimeline } from "@/components/novasuite/workflow-timeline"

export default function HealthcareAdminBundlePage() {
  const skills = [
    {
      id: "appointment",
      name: "Appointment Scheduler",
      icon: <Calendar className="h-8 w-8" />,
      metric: "90% show rate",
      description: "Automated patient scheduling & reminders",
      color: "from-blue-500 to-cyan-500",
      position: { x: 0, y: -220 }
    },
    {
      id: "support",
      name: "Patient Support",
      icon: <Heart className="h-8 w-8" />,
      metric: "24/7 availability",
      description: "AI-powered patient inquiries & triage",
      color: "from-pink-500 to-rose-500",
      position: { x: 220, y: 0 }
    },
    {
      id: "compliance",
      name: "Compliance Manager",
      icon: <FileText className="h-8 w-8" />,
      metric: "100% HIPAA compliant",
      description: "Automated regulatory documentation",
      color: "from-purple-500 to-indigo-500",
      position: { x: 0, y: 220 }
    },
    {
      id: "referral",
      name: "Referral Coordinator",
      icon: <Users className="h-8 w-8" />,
      metric: "3x faster processing",
      description: "Seamless patient referral management",
      color: "from-green-500 to-emerald-500",
      position: { x: -220, y: 0 }
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="mb-6 inline-flex items-center rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300">
              <Rocket className="mr-2 h-4 w-4" />
              Pre-Configured Bundle
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-400">
                Healthcare Admin Bundle
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              The complete AI solution for healthcare practices. Automate patient scheduling, support, and compliance while your team focuses on care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="/contact">Get Started with Healthcare Bundle</Link>
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
              Four Essential Healthcare Skills in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Perfect Harmony</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Each skill is designed for healthcare compliance and patient care excellence
            </p>
          </div>

          <OrbitalSkillsShowcase customSkills={skills} />

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
    </div>
  )
}
