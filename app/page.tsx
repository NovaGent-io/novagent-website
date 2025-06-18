"use client"

import type React from "react"
import { useRef, useCallback } from "react" // Import useCallback
import VideoIntroSection from "@/components/video-intro-section"
import HeroSection from "@/hero-section"
import ProblemSolutionSection from "@/components/problem-solution-section"
import UVPSection from "@/components/uvp-section"
import AgentSolutionsSection from "@/components/agent-solutions-section"
import WhoWeHelpSection from "@/components/who-we-help-section"
import CredibilitySection from "@/components/credibility-section"
import FinalCTASection from "@/components/final-cta-section"

export default function HomePage() {
  const heroSectionRef = useRef<HTMLElement>(null)

  const handleScrollToHero = useCallback(() => {
    heroSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }, []) // Empty dependency array: heroSectionRef is stable

  return (
    <>
      <main>
        <VideoIntroSection onVideoFinishScroll={handleScrollToHero} />
        <div ref={heroSectionRef as React.RefObject<HTMLDivElement>}>
          <HeroSection />
        </div>
        <ProblemSolutionSection />
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-lg md:text-xl font-medium text-slate-600">
              Our Platform Was Built to Solve These Core Challenges.
            </h2>
          </div>
        </section>
        <UVPSection />
        <AgentSolutionsSection />
        <WhoWeHelpSection />
        <CredibilitySection />
        <FinalCTASection />
      </main>
    </>
  )
}
