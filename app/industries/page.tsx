"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedBackground from "@/components/animated-background"
import MainNavigation from "@/components/main-navigation" // Corrected to default import
import {
  Car,
  Smartphone,
  Home,
  GraduationCap,
  Zap,
  Hammer,
  DollarSign,
  Heart,
  Factory,
  Camera,
  Users,
  Briefcase,
  Shield,
  Store,
  Laptop,
  Plane,
  TrendingUp,
  Target,
  Settings,
} from "lucide-react"

type ChallengeType = "sales" | "marketing" | "operations" | null

interface Industry {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  path: string
  challenges: ChallengeType[]
  metrics: string[]
}

const industries: Industry[] = [
  {
    id: "automotive",
    name: "Automotive",
    icon: Car,
    path: "/industries/automotive",
    challenges: ["sales", "operations"],
    metrics: [
      "40% faster parts ordering",
      "25% reduction in service delays",
      "60% improvement in customer satisfaction",
    ],
  },
  {
    id: "communications",
    name: "Communications",
    icon: Smartphone,
    path: "/industries/communications",
    challenges: ["marketing", "operations"],
    metrics: [
      "35% reduction in network downtime",
      "50% faster customer onboarding",
      "20% increase in subscription retention",
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: Home,
    path: "/industries/real-estate",
    challenges: ["sales", "marketing", "operations"],
    metrics: [
      "50% faster lead response times",
      "35% increase in qualified appointments",
      "60% more positive client reviews",
    ],
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    path: "/industries/education",
    challenges: ["operations", "marketing"],
    metrics: [
      "60% faster admissions processing",
      "40% improvement in student engagement",
      "50% reduction in scheduling conflicts",
    ],
  },
  {
    id: "energy-utilities",
    name: "Energy & Utilities",
    icon: Zap,
    path: "/industries/energy-and-utilities",
    challenges: ["operations", "sales"],
    metrics: [
      "30% reduction in outage response time",
      "25% improvement in grid efficiency",
      "40% faster trading decisions",
    ],
  },
  {
    id: "engineering-construction",
    name: "Engineering & Construction",
    icon: Hammer,
    path: "/industries/engineering-and-construction",
    challenges: ["sales", "operations"],
    metrics: ["35% faster project scheduling", "50% improvement in lead nurturing", "25% reduction in inspection time"],
  },
  {
    id: "financial-services",
    name: "Financial Services",
    icon: DollarSign,
    path: "/industries/financial-services",
    challenges: ["sales", "operations"],
    metrics: [
      "45% faster loan processing",
      "60% improvement in compliance monitoring",
      "30% increase in portfolio performance",
    ],
  },
  {
    id: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    icon: Heart,
    path: "/industries/healthcare",
    challenges: ["operations", "marketing"],
    metrics: [
      "70% reduction in documentation time",
      "40% faster clinical trial recruitment",
      "50% improvement in lab result processing",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    path: "/industries/manufacturing",
    challenges: ["operations", "sales"],
    metrics: [
      "35% improvement in quality control",
      "25% reduction in supply chain delays",
      "40% increase in production efficiency",
    ],
  },
  {
    id: "media",
    name: "Media & Entertainment",
    icon: Camera,
    path: "/industries/media-and-entertainment",
    challenges: ["marketing", "operations"],
    metrics: [
      "50% faster video editing",
      "30% improvement in ad targeting",
      "60% increase in content curation efficiency",
    ],
  },
  {
    id: "nonprofit",
    name: "Nonprofit",
    icon: Users,
    path: "/industries/nonprofit",
    challenges: ["marketing", "sales"],
    metrics: [
      "40% increase in fundraising efficiency",
      "35% improvement in impact measurement",
      "50% boost in social media engagement",
    ],
  },
  {
    id: "professional-services",
    name: "Professional Services",
    icon: Briefcase,
    path: "/industries/professional-services",
    challenges: ["sales", "operations"],
    metrics: [
      "45% reduction in legal research time",
      "30% improvement in accounting accuracy",
      "50% faster consulting deliverables",
    ],
  },
  {
    id: "public-sector",
    name: "Public Sector",
    icon: Shield,
    path: "/industries/public-sector",
    challenges: ["operations", "marketing"],
    metrics: [
      "60% faster 311 response times",
      "40% improvement in grant processing",
      "35% reduction in records retrieval time",
    ],
  },
  {
    id: "retail",
    name: "Retail",
    icon: Store,
    path: "/industries/retail",
    challenges: ["sales", "marketing"],
    metrics: [
      "70% of support tickets resolved by AI",
      "25% average ROAS increase",
      "15+ hours/week saved on social media",
    ],
  },
  {
    id: "technology",
    name: "Technology",
    icon: Laptop,
    path: "/industries/technology",
    challenges: ["operations", "sales"],
    metrics: [
      "50% faster code review cycles",
      "40% improvement in user onboarding",
      "60% reduction in security incident response time",
    ],
  },
  {
    id: "travel-transportation-hospitality",
    name: "Travel & Hospitality",
    icon: Plane,
    path: "/industries/travel-and-hospitality",
    challenges: ["sales", "operations"],
    metrics: [
      "45% increase in booking conversions",
      "35% improvement in guest satisfaction",
      "30% reduction in fleet maintenance costs",
    ],
  },
]

export default function IndustriesPage() {
  const [selectedChallenge, setSelectedChallenge] = useState<ChallengeType>(null)
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null)

  const filteredIndustries = selectedChallenge
    ? industries.filter((industry) => industry.challenges.includes(selectedChallenge))
    : industries

  const getChallengeButtonClass = (challenge: ChallengeType) => {
    const baseClass = "h-16 text-lg font-semibold transition-all duration-300 border-2"
    if (selectedChallenge === challenge) {
      return `${baseClass} bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-transparent shadow-lg scale-105`
    }
    return `${baseClass} bg-slate-800/50 text-slate-200 border-slate-600 hover:border-cyan-400 hover:bg-slate-700/50 hover:scale-102`
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        <MainNavigation />

        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                AI Solutions, Tailored for Your Industry
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
                NovaGent's powerful Core Agents and Custom Agentic Systems are designed to solve the unique challenges
                and unlock the specific opportunities within your sector. Discover how we drive results for businesses
                like yours.
              </p>
            </div>
          </section>

          {/* Interactive Problem/Solution Matcher */}
          <section className="container mx-auto px-4 mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-200">
                What's Your Primary Challenge?
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Button
                  onClick={() => setSelectedChallenge(selectedChallenge === "sales" ? null : "sales")}
                  className={getChallengeButtonClass("sales")}
                >
                  <TrendingUp className="w-6 h-6 mr-3" />
                  Sales & Growth
                </Button>

                <Button
                  onClick={() => setSelectedChallenge(selectedChallenge === "marketing" ? null : "marketing")}
                  className={getChallengeButtonClass("marketing")}
                >
                  <Target className="w-6 h-6 mr-3" />
                  Marketing & Brand
                </Button>

                <Button
                  onClick={() => setSelectedChallenge(selectedChallenge === "operations" ? null : "operations")}
                  className={getChallengeButtonClass("operations")}
                >
                  <Settings className="w-6 h-6 mr-3" />
                  Operations & Efficiency
                </Button>
              </div>

              {selectedChallenge && (
                <div className="text-center">
                  <Button
                    onClick={() => setSelectedChallenge(null)}
                    variant="outline"
                    className="text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                  >
                    Show All Industries
                  </Button>
                </div>
              )}
            </div>
          </section>

          {/* Featured Industry Spotlight */}
          <section className="container mx-auto px-4 mb-20">
            <div className="max-w-6xl mx-auto">
              <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/30 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                      <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-4">
                        Industry Spotlight
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Healthcare & Compliance</h3>
                      <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                        Discover how we helped a multi-state provider automate their patient onboarding process while
                        fortifying HIPAA compliance, reducing documentation time by 70% and improving patient
                        satisfaction scores.
                      </p>
                      <Link href="/industries/healthcare">
                        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg">
                          Explore Our Healthcare Solutions
                        </Button>
                      </Link>
                    </div>
                    <div className="w-full md:w-80 h-64 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                      <Heart className="w-24 h-24 text-purple-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Interactive Industry Grid */}
          <section className="container mx-auto px-4 mb-20">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-200">Explore Industries</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredIndustries.map((industry) => {
                  const IconComponent = industry.icon
                  const isHighlighted = selectedChallenge && industry.challenges.includes(selectedChallenge)

                  return (
                    <Link key={industry.id} href={industry.path}>
                      <Card
                        className={`group cursor-pointer transition-all duration-300 relative overflow-hidden ${
                          isHighlighted
                            ? "bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border-cyan-400/50 shadow-lg shadow-cyan-500/20"
                            : "bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 hover:bg-slate-700/50"
                        } backdrop-blur-sm`}
                        onMouseEnter={() => setHoveredIndustry(industry.id)}
                        onMouseLeave={() => setHoveredIndustry(null)}
                      >
                        <CardContent className="p-6 text-center relative z-10">
                          <IconComponent
                            className={`w-12 h-12 mx-auto mb-4 transition-colors duration-300 ${
                              isHighlighted ? "text-cyan-400" : "text-slate-400 group-hover:text-cyan-400"
                            }`}
                          />
                          <h3
                            className={`font-semibold text-lg transition-colors duration-300 ${
                              isHighlighted ? "text-white" : "text-slate-200 group-hover:text-white"
                            }`}
                          >
                            {industry.name}
                          </h3>
                        </CardContent>

                        {/* Success Metrics Overlay */}
                        {hoveredIndustry === industry.id && (
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-sm flex items-center justify-center p-4 z-20 animate-in fade-in duration-200">
                            <div className="text-center">
                              <h4 className="font-bold text-cyan-400 mb-3 text-sm">Success Metrics</h4>
                              <div className="space-y-2">
                                {industry.metrics.map((metric, index) => (
                                  <p key={index} className="text-xs text-slate-300 leading-relaxed">
                                    {metric}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Don't See Your Industry Section */}
          <section className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-200">Don't See Your Sector?</h2>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                    Our AI platform is flexible and can be adapted to solve complex challenges in any industry. If you
                    don't see yours listed, contact us to discuss your unique needs and how we can architect a custom
                    solution for you.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 text-lg">
                      Contact Us
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
