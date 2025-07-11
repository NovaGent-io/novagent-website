"use client"

import type React from "react"
import { useRef, useCallback } from "react" // Import useCallback
import VideoIntroSection from "@/components/video-intro-section"
import HeroSection from "@/hero-section"
import ProblemSolutionSection from "@/components/problem-solution-section"
import UVPSection from "@/components/uvp-section"
import AgentSkillsSleek from "@/components/agent-skills-sleek"

import ModularFrameworkSection from "@/components/modular-framework"
import FinalCTASection from "@/components/final-cta-section"
import UnlockGrowthSection from "@/components/unlock-growth-section"

export default function HomePage() {
  const heroSectionRef = useRef<HTMLElement>(null)

  const handleScrollToHero = useCallback(() => {
    heroSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }, []) // Empty dependency array: heroSectionRef is stable

  return (
    <>
      <div className="-mt-16">
        <VideoIntroSection onVideoFinishScroll={handleScrollToHero} />
        <div ref={heroSectionRef as React.RefObject<HTMLDivElement>} className="-mt-1">
          <HeroSection />
        </div>
        <ProblemSolutionSection />
        <UVPSection />
        <AgentSkillsSleek />
        <UnlockGrowthSection />
        <ModularFrameworkSection />
        <FinalCTASection />
      </div>
    </>
  )
}
