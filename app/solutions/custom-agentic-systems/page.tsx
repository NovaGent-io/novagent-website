import CustomSystemsHero from "@/components/custom-systems-hero"
import QualificationSection from "@/components/qualification-section"
import MethodologyTimeline from "@/components/methodology-timeline"
import InteractiveSolutionBuilder from "@/components/interactive-solution-builder" // Contains Part 1
import ShowcaseSection from "@/components/showcase-section" // Contains restored Part 2 (examples)
import CustomSystemsCTA from "@/components/custom-systems-cta"

export default function CustomAgenticSystemsPage() {
  return (
    <div className="bg-slate-950 text-white">
      <CustomSystemsHero />
      <main>
        <QualificationSection />
        <MethodologyTimeline />
        <InteractiveSolutionBuilder /> {/* This now only has the capability stacker */}
        <ShowcaseSection /> {/* This is the original examples showcase */}
        <CustomSystemsCTA />
      </main>
    </div>
  )
}
