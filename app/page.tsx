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
        <UVPSection />
        <AgentSolutionsSection />
        <WhoWeHelpSection />
        <CredibilitySection />
        <FinalCTASection />
      </main>
    </>
  )
}
