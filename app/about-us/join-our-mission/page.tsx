import JMMissionHero from "@/components/join-mission/jm-mission-hero"
import JMMissionEthos from "@/components/join-mission/jm-mission-ethos"
import JMMissionValues from "@/components/join-mission/jm-mission-values"
import JMMissionIdealTalent from "@/components/join-mission/jm-mission-ideal-talent"
import JMMissionConnect from "@/components/join-mission/jm-mission-connect"
import "./styles.css" // Keep for any specific page styles

export default function JoinOurMissionPageRedesigned() {
  return (
    <div className="bg-slate-950 text-slate-100 overflow-x-hidden">
      <JMMissionHero />
      <JMMissionEthos />
      <JMMissionValues />
      <JMMissionIdealTalent />
      <JMMissionConnect />
    </div>
  )
}
