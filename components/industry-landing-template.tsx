"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, AlertTriangle, Zap, TrendingUp, Lightbulb, Settings, Users2, Target } from "lucide-react" // Added more icons for defaults and use
import { cn } from "@/lib/utils"

// Define types for the template props
export interface IndustryChallenge {
  icon: React.ElementType
  title: string
  description: string
}

export interface NovaGentSolution {
  icon: React.ElementType
  useCaseTitle: string
  benefitDescription: string
  imagePlaceholder?: string
  imageAlt?: string
}

export interface RelevantAgent {
  icon: React.ElementType
  name: string
  description: string
  link: string
}

export interface KeyOutcome {
  icon: React.ElementType
  title: string
  description: string
}

export interface IndustryPageTemplateProps {
  industryName: string
  hero: {
    headline: string
    subHeadline: string
    imagePlaceholder: string
    imageAlt: string
  }
  challenges: {
    headline: string
    items: IndustryChallenge[]
  }
  solutions: {
    headline: string
    items: NovaGentSolution[]
  }
  relevantAgents?: {
    // Optional: can be omitted if no specific agents for an industry
    headline: string
    items: RelevantAgent[]
  }
  keyOutcomes?: {
    // Optional: can be omitted
    headline: string
    items: KeyOutcome[]
  }
  cta: {
    headline: string
    buttonText: string
    buttonLink: string
  }
}

const defaultIndustryProps: IndustryPageTemplateProps = {
  industryName: "[Industry Name]",
  hero: {
    headline: "AI-Powered Solutions for Your Sector",
    subHeadline:
      "Discover how NovaGent's managed AI agents are engineered to solve unique challenges, driving growth and operational efficiency.",
    imagePlaceholder: "/abstract-industry-hero.png",
    imageAlt: "Abstract graphic representing the industry",
  },
  challenges: {
    headline: "Navigating Landscape Complexities",
    items: [
      {
        icon: AlertTriangle,
        title: "Key Challenge 1",
        description: "Short description of a common industry challenge.",
      },
      {
        icon: Zap,
        title: "Key Challenge 2",
        description: "Another significant pain point for this sector.",
      },
    ],
  },
  solutions: {
    headline: "Your AI-Powered Growth & Efficiency Engine",
    items: [
      {
        icon: Lightbulb,
        useCaseTitle: "Automate Key Process",
        benefitDescription: "Detailed explanation of AI benefits for a core process.",
        imagePlaceholder: "/ai-solution-default-1.png",
        imageAlt: "AI automating a key process",
      },
      {
        icon: Settings,
        useCaseTitle: "Enhance Decision Making",
        benefitDescription: "How AI provides insights for better strategic decisions.",
        imagePlaceholder: "/ai-decision-making-default.png",
        imageAlt: "AI enhancing decision making",
      },
    ],
  },
  relevantAgents: {
    headline: "Meet Your AI Team",
    items: [
      {
        icon: Users2,
        name: "Core Agent Alpha",
        description: "This agent helps streamline operations and improve data analysis.",
        link: "/solutions/ai-agent-suite",
      },
    ],
  },
  keyOutcomes: {
    headline: "Tangible Results for Your Business",
    items: [
      {
        icon: TrendingUp,
        title: "Increased Efficiency",
        description: "Measurable improvements in operational speed and resource utilization.",
      },
      {
        icon: Target,
        title: "Enhanced Accuracy",
        description: "Reduction in errors and more precise outcomes.",
      },
    ],
  },
  cta: {
    headline: "Ready to Transform Your Business with AI?",
    buttonText: "Book a Demo",
    buttonLink: "/contact",
  },
}

export function IndustryPageTemplate(partialProps: Partial<IndustryPageTemplateProps>) {
  const props: IndustryPageTemplateProps = {
    industryName: partialProps.industryName ?? defaultIndustryProps.industryName,
    hero: { ...defaultIndustryProps.hero, ...partialProps.hero },
    challenges: {
      ...defaultIndustryProps.challenges,
      ...partialProps.challenges,
      items: partialProps.challenges?.items?.length
        ? partialProps.challenges.items
        : defaultIndustryProps.challenges.items,
    },
    solutions: {
      ...defaultIndustryProps.solutions,
      ...partialProps.solutions,
      items: partialProps.solutions?.items?.length
        ? partialProps.solutions.items
        : defaultIndustryProps.solutions.items,
    },
    relevantAgents: partialProps.relevantAgents
      ? {
          ...defaultIndustryProps.relevantAgents!,
          ...partialProps.relevantAgents,
          items: partialProps.relevantAgents.items?.length
            ? partialProps.relevantAgents.items
            : defaultIndustryProps.relevantAgents!.items,
        }
      : defaultIndustryProps.relevantAgents,
    keyOutcomes: partialProps.keyOutcomes
      ? {
          ...defaultIndustryProps.keyOutcomes!,
          ...partialProps.keyOutcomes,
          items: partialProps.keyOutcomes.items?.length
            ? partialProps.keyOutcomes.items
            : defaultIndustryProps.keyOutcomes!.items,
        }
      : defaultIndustryProps.keyOutcomes,
    cta: { ...defaultIndustryProps.cta, ...partialProps.cta },
  }

  const {
    industryName: currentIndustryName, // Renamed to avoid conflict in replace functions
    hero,
    challenges,
    solutions,
    relevantAgents,
    keyOutcomes,
    cta: pageCta, // Renamed to avoid conflict
  } = props

  return (
    <div className="bg-slate-950 text-white min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* 1. Page Hero Section */}
        <section className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 mix-blend-overlay"></div>
          </div>
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-1 mb-6 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium">
                NovaGent for {currentIndustryName}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-fuchsia-500">
                  {hero.headline.replace(/\[Industry Name\]/g, currentIndustryName)}
                </span>
              </h1>
              <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed">
                {hero.subHeadline.replace(/\[Industry Name\]/g, currentIndustryName)}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 sm:bg-gradient-to-r sm:from-blue-600 sm:to-purple-600 hover:bg-blue-700 sm:hover:from-blue-700 sm:hover:to-purple-700 text-white font-semibold text-base sm:text-lg px-6 py-3 sm:px-10 sm:py-6 rounded-lg shadow-sm sm:shadow-lg shadow-blue-700/5 sm:shadow-blue-700/20 hover:shadow-blue-700/10 sm:hover:shadow-blue-700/40 transition-all duration-150 sm:duration-300 transform active:scale-95 sm:hover:scale-105 border-0 touch-manipulation select-none"
                >
                  <Link href={pageCta.buttonLink}>
                    {pageCta.buttonText.replace(/\[Industry Name\]/g, currentIndustryName)}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white font-semibold text-lg px-10 py-6 rounded-lg transition-all duration-300"
                >
                  <Link href="/solutions/ai-agent-suite">Explore Our AI Agents</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. "Industry Challenges" Section */}
        <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_60%)]"></div>
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block px-4 py-1 mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium">
                Industry Challenges
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                {challenges.headline.replace(/\[Industry Name\]/g, currentIndustryName)}
              </h2>
              <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                Understanding the hurdles to overcome for success in the {currentIndustryName} sector.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {challenges.items.map((challenge, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700 hover:border-sky-500/50 transition-all duration-300 shadow-xl hover:shadow-sky-500/10 transform hover:-translate-y-1"
                >
                  <CardHeader className="flex flex-row items-center space-x-4 pb-3">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-sky-500/20 to-blue-500/20 border border-sky-500/30 text-sky-400 shrink-0">
                      <challenge.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-white">
                      {challenge.title.replace(/\[Industry Name\]/g, currentIndustryName)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">
                      {challenge.description.replace(/\[Industry Name\]/g, currentIndustryName)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 3. "How NovaGent Helps [Industry Name]" / Use Cases Section */}
        <section className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(124,58,237,0.1),transparent_60%)]"></div>
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block px-4 py-1 mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium">
                AI Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                {solutions.headline.replace(/\[Industry Name\]/g, currentIndustryName)}
              </h2>
              <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                Leveraging AI to create tangible value and a competitive edge in {currentIndustryName}.
              </p>
            </div>
            <div className="space-y-12 md:space-y-16">
              {solutions.items.map((solution, index) => (
                <div
                  key={index}
                  className={cn(
                    "grid md:grid-cols-12 gap-8 items-center p-6 md:p-8 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700 hover:border-purple-500/30 shadow-lg transition-all duration-300 hover:shadow-purple-500/10 group",
                    index % 2 !== 0 && "md:flex-row-reverse", // Alternate layout
                  )}
                >
                  <div
                    className={cn(
                      "md:col-span-1 flex justify-center md:justify-start items-center",
                      index % 2 !== 0 && "md:order-last md:justify-end",
                      solution.icon ? "block" : "hidden",
                    )}
                  >
                    {solution.icon && (
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 text-purple-400 border border-purple-500/30 group-hover:border-purple-400/50 transition-colors duration-300 mb-4 md:mb-0">
                        <solution.icon className="h-8 w-8" />
                      </div>
                    )}
                  </div>
                  <div
                    className={cn("md:col-span-7", !solution.icon && "md:col-span-8", index % 2 !== 0 && "md:order-1")}
                  >
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 mb-3">
                      {solution.useCaseTitle.replace(/\[Industry Name\]/g, currentIndustryName)}
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {solution.benefitDescription.replace(/\[Industry Name\]/g, currentIndustryName)}
                    </p>
                  </div>
                  {solution.imagePlaceholder && (
                    <div
                      className={cn(
                        "md:col-span-4 relative h-60 md:h-72 rounded-lg overflow-hidden shadow-xl group",
                        index % 2 !== 0 && "md:order-first",
                      )}
                    >
                      <Image
                        src={solution.imagePlaceholder || "/placeholder.svg"}
                        alt={
                          solution.imageAlt?.replace(/\[Industry Name\]/g, currentIndustryName) || solution.useCaseTitle
                        }
                        layout="fill"
                        objectFit="cover"
                        className="transform transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-800/70 to-transparent"></div>
                    </div>
                  )}
                  {!solution.imagePlaceholder && solution.icon && (
                    <div className={cn("md:col-span-4", index % 2 !== 0 && "md:order-first")}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <Button
                variant="link"
                asChild
                className="text-purple-400 hover:text-purple-300 p-0 text-lg group flex items-center"
              >
                <Link href="/solutions/ai-agent-suite">
                  Explore All Our Core Agents
                  <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 4. Relevant NovaGent Core Agents Section */}
        {relevantAgents && relevantAgents.items.length > 0 && (
          <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(14,165,233,0.1),transparent_60%)]"></div>
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-block px-4 py-1 mb-4 rounded-full bg-gradient-to-r from-sky-500/20 to-cyan-500/20 border border-sky-500/30 text-sky-400 text-sm font-medium">
                  Your AI Team
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                  {relevantAgents.headline.replace(/\[Industry Name\]/g, currentIndustryName)}
                </h2>
                <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                  Our specialized AI agents ready to deploy for your {currentIndustryName} needs.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
                {relevantAgents.items.map((agent, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700 hover:border-sky-500/50 transition-all duration-300 shadow-xl hover:shadow-sky-500/10 transform hover:-translate-y-1 flex flex-col h-full"
                  >
                    <CardContent className="p-6 flex flex-col items-center h-full">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-sky-500/20 to-cyan-500/20 text-sky-400 mb-4 border border-sky-500/30">
                        <agent.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 text-center">{agent.name}</h3>
                      <p className="text-slate-300 text-sm flex-grow text-center mb-4">{agent.description}</p>
                      {agent.link && (
                        <Button
                          variant="outline"
                          asChild
                          className="mt-auto w-full border-sky-500/50 text-sky-400 hover:bg-sky-500/10 hover:text-sky-300"
                        >
                          <Link href={agent.link}>Learn More</Link>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. Key Outcomes Section */}
        {keyOutcomes && keyOutcomes.items.length > 0 && (
          <section className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.1),transparent_60%)]"></div>
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-block px-4 py-1 mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium">
                  Measurable Impact
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                  {keyOutcomes.headline.replace(/\[Industry Name\]/g, currentIndustryName)}
                </h2>
                <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                  Experience measurable improvements and a significant ROI with NovaGent.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {keyOutcomes.items.map((outcome, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700 hover:border-cyan-500/30 p-6 rounded-xl shadow-lg flex items-start space-x-4 transition-all duration-300 hover:shadow-cyan-500/10 transform hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 text-cyan-400 border border-cyan-500/30">
                      <outcome.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{outcome.title}</h3>
                      <p className="text-slate-300">{outcome.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 6. Targeted Call to Action (CTA) Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]"></div>
          <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                {pageCta.headline.replace(/\[Industry Name\]/g, currentIndustryName)}
              </h2>
              <p className="text-lg text-slate-300 mb-10">
                Let NovaGent be your partner in navigating the future of the {currentIndustryName} sector. Schedule a
                personalized consultation to see our AI agents in action.
              </p>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-blue-600 sm:bg-gradient-to-r sm:from-blue-600 sm:to-purple-600 hover:bg-blue-700 sm:hover:from-blue-700 sm:hover:to-purple-700 text-white font-semibold text-base sm:text-lg px-6 py-3 sm:px-10 sm:py-6 rounded-lg shadow-sm sm:shadow-lg shadow-blue-700/5 sm:shadow-blue-700/20 hover:shadow-blue-700/10 sm:hover:shadow-blue-700/40 transition-all duration-150 sm:duration-300 transform active:scale-95 sm:hover:scale-105 border-0 touch-manipulation select-none"
              >
                <Link href={pageCta.buttonLink}>
                  {pageCta.buttonText.replace(/\[Industry Name\]/g, currentIndustryName)}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
