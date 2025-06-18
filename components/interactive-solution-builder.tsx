"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Network, PlugZap, BrainCog, Target, UsersRound, PenTool, Lightbulb, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface Capability {
  id: string
  name: string
  icon: React.ElementType
}

const capabilities: Capability[] = [
  {
    id: "multiAgentOrchestration",
    name: "Multi-Agent Orchestration",
    icon: Network,
  },
  {
    id: "deepLegacyIntegration",
    name: "Deep Legacy & Proprietary System Integration",
    icon: PlugZap,
  },
  {
    id: "proprietaryKnowledgeCreation",
    name: "Proprietary Knowledge & Skill Creation",
    icon: BrainCog,
  },
  {
    id: "dynamicGoalSeeking",
    name: "Dynamic Goal-Seeking & Adaptation",
    icon: Target,
  },
  {
    id: "bespokeHumanInLoop",
    name: "Bespoke Human-in-the-Loop Workflows",
    icon: UsersRound,
  },
  {
    id: "aiContentGeneration",
    name: "AI-Powered Content Generation",
    icon: PenTool,
  },
]

// A complete map of all 63 possible combinations to their unique descriptions.
// The key is a sorted, comma-separated string of capability IDs.
const solutionBlueprints = new Map<string, string>([
  // Single Selections (6)
  [
    "multiAgentOrchestration",
    "This system architects workflows where multiple, specialized AIs work in concert to tackle complex, multi-threaded processes.",
  ],
  [
    "deepLegacyIntegration",
    "This system focuses on integrating into the very fabric of your operations, connecting to proprietary databases and legacy systems that have no standard API.",
  ],
  [
    "proprietaryKnowledgeCreation",
    "This system codifies your unique 'secret sauce'—your business logic and expert knowledge—into a proprietary AI brain that informs all of its actions.",
  ],
  [
    "dynamicGoalSeeking",
    "This system is designed with a dynamic, high-level goal, allowing it to adapt its strategy and execution based on real-time market conditions or business performance.",
  ],
  [
    "bespokeHumanInLoop",
    "This system designs seamless, hybrid workflows that embed your human experts into the AI's decision-making process for critical approval, review, and strategic intervention points.",
  ],
  [
    "aiContentGeneration",
    "This system enables an agent to expertly draft, adapt, and optimize content for any channel, from SEO-focused articles to personalized outreach sequences.",
  ],

  // Two-Block Combinations (15)
  [
    "deepLegacyIntegration,multiAgentOrchestration",
    "A solution that orchestrates multiple agents while deeply integrating with your proprietary systems, allowing different AIs to seamlessly access and act upon previously siloed data.",
  ],
  [
    "multiAgentOrchestration,proprietaryKnowledgeCreation",
    "This is the 'Master Brain' Agentic System. It orchestrates a team of specialized AIs, centralizing their findings into a 'master brain' agent that we build with your proprietary knowledge to make complex, strategic decisions.",
  ],
  [
    "dynamicGoalSeeking,multiAgentOrchestration",
    "A system that orchestrates multiple agents and gives them a unified, dynamic goal, allowing the entire AI workforce to adapt its collective strategy to meet a single, high-level business objective.",
  ],
  [
    "bespokeHumanInLoop,multiAgentOrchestration",
    "This system orchestrates a complex series of AI-driven tasks, but at critical junctures, it intelligently routes decisions or approvals to designated human experts through a bespoke workflow.",
  ],
  [
    "aiContentGeneration,multiAgentOrchestration",
    "An advanced system where one AI agent can perform an analysis or action, and then task a separate, specialized content generation agent to automatically create a report, summary, or outreach message about the outcome.",
  ],
  [
    "deepLegacyIntegration,proprietaryKnowledgeCreation",
    "This system performs deep integration to unlock data from your legacy systems, then feeds that unique data into a proprietary AI brain, making it an unparalleled expert on your specific business.",
  ],
  [
    "deepLegacyIntegration,dynamicGoalSeeking",
    "An agent that deeply integrates with your core business systems (e.g., inventory, sales) and uses that real-time data to dynamically adapt its actions to meet a high-level goal, like 'maintain 95% inventory efficiency'.",
  ],
  [
    "bespokeHumanInLoop,deepLegacyIntegration",
    "A system that integrates with your proprietary software to surface critical data, then presents it within a bespoke workflow for a human expert to review and approve before taking the next action.",
  ],
  [
    "aiContentGeneration,deepLegacyIntegration",
    "This is the 'Legacy Data to Content' Engine. It performs a deep integration with your proprietary databases to unlock siloed data, then pipes this unique information into an AI content generation agent to automatically create insightful reports or marketing materials.",
  ],
  [
    "dynamicGoalSeeking,proprietaryKnowledgeCreation",
    "An AI system that uses its proprietary knowledge of your business to make smarter, context-aware decisions as it dynamically adapts its strategy to meet its overarching goals.",
  ],
  [
    "bespokeHumanInLoop,proprietaryKnowledgeCreation",
    "A workflow where the AI, using its proprietary knowledge, handles a task up to a certain point and then presents a summary and recommendation to a human expert, who provides the final, nuanced judgment.",
  ],
  [
    "aiContentGeneration,proprietaryKnowledgeCreation",
    "A specialized content solution where the AI doesn't just write generic text, but generates highly specific, expert-level content based on the proprietary knowledge and data unique to your business.",
  ],
  [
    "bespokeHumanInLoop,dynamicGoalSeeking",
    "This is the 'Guided Strategy' System. It is designed with a dynamic, high-level goal and can adapt its own strategy, but at critical decision points, it seamlessly assigns approval or review tasks to your human experts via a bespoke workflow.",
  ],
  [
    "aiContentGeneration,dynamicGoalSeeking",
    "An agent that dynamically adapts its strategy based on performance data, and then automatically tasks its content generation module to create new variations of messaging or creatives to support that new strategy.",
  ],
  [
    "aiContentGeneration,bespokeHumanInLoop",
    "A content creation workflow where an AI generates the initial draft, which is then automatically routed to a human editor for review and approval before being finalized and published.",
  ],

  // Three-Block Combinations (20)
  [
    "deepLegacyIntegration,multiAgentOrchestration,proprietaryKnowledgeCreation",
    "A 'master brain' system that orchestrates multiple AIs, allows them to communicate using your proprietary knowledge, and gives them deep integration access to your legacy systems for comprehensive data retrieval.",
  ],
  [
    "deepLegacyIntegration,dynamicGoalSeeking,multiAgentOrchestration",
    "An advanced system that orchestrates multiple agents across your integrated proprietary systems, all working together and adapting their collective actions to achieve a single, dynamic business goal.",
  ],
  [
    "bespokeHumanInLoop,deepLegacyIntegration,multiAgentOrchestration",
    "A system that orchestrates agents to pull and process data from your unique legacy systems, then presents a unified summary to a human expert for a key decision before proceeding.",
  ],
  [
    "aiContentGeneration,deepLegacyIntegration,multiAgentOrchestration",
    "A powerful content engine that orchestrates one agent to perform deep integration and data extraction from your legacy systems, and another agent to take that data and generate insightful reports or summaries.",
  ],
  [
    "dynamicGoalSeeking,multiAgentOrchestration,proprietaryKnowledgeCreation",
    "A 'master brain' agent that directs a team of specialized AIs, using its proprietary knowledge of your business to dynamically shift their collective strategy to best meet its high-level objectives.",
  ],
  [
    "bespokeHumanInLoop,multiAgentOrchestration,proprietaryKnowledgeCreation",
    "A system where a team of AIs, guided by your proprietary knowledge, handles a complex process and then escalates a final, context-rich decision point to a human expert for approval.",
  ],
  [
    "aiContentGeneration,multiAgentOrchestration,proprietaryKnowledgeCreation",
    "A content creation system where a 'strategist' AI with proprietary knowledge of your brand voice directs a 'writer' AI to generate perfectly on-brand content for multiple channels.",
  ],
  [
    "bespokeHumanInLoop,dynamicGoalSeeking,multiAgentOrchestration",
    "A system that directs multiple agents to achieve a dynamic goal, but is designed to pause and seek human approval via a bespoke workflow before making major strategic shifts.",
  ],
  [
    "aiContentGeneration,dynamicGoalSeeking,multiAgentOrchestration",
    "A self-optimizing marketing system where an 'analyst' agent adapts campaign goals based on performance, and then tasks a 'creative' agent to generate new ad copy and content to match.",
  ],
  [
    "aiContentGeneration,bespokeHumanInLoop,multiAgentOrchestration",
    "A content workflow that orchestrates an AI to draft content, a human to approve or edit it, and then another AI to distribute it across multiple platforms.",
  ],
  [
    "deepLegacyIntegration,dynamicGoalSeeking,proprietaryKnowledgeCreation",
    "An agent that uses deep integration into your core systems to access real-time data, interprets that data using its proprietary knowledge of your business, and adapts its actions to meet dynamic goals.",
  ],
  [
    "bespokeHumanInLoop,deepLegacyIntegration,proprietaryKnowledgeCreation",
    "A system that pulls and analyzes data from your unique legacy software, uses its proprietary knowledge to frame a decision, and then presents it to a human manager for the final go/no-go.",
  ],
  [
    "aiContentGeneration,deepLegacyIntegration,proprietaryKnowledgeCreation",
    "An expert system that deeply integrates with your internal databases to extract unique data, understands its context through a proprietary knowledge base, and generates expert-level internal reports or documentation.",
  ],
  [
    "bespokeHumanInLoop,deepLegacyIntegration,dynamicGoalSeeking",
    "An operational agent that monitors real-time data from your integrated legacy systems to pursue a goal (like 'reduce waste'), but requires human approval before making significant operational changes.",
  ],
  [
    "aiContentGeneration,deepLegacyIntegration,dynamicGoalSeeking",
    "A market-adaptive system that pulls performance data from your core systems, adapts its marketing goals accordingly, and generates new landing page copy to reflect the new strategy.",
  ],
  [
    "aiContentGeneration,bespokeHumanInLoop,deepLegacyIntegration",
    "A 'human-guided' content system that pulls unique data from your legacy platforms, presents it to a human strategist to define the angle, and then tasks an AI to generate the full content piece.",
  ],
  [
    "bespokeHumanInLoop,dynamicGoalSeeking,proprietaryKnowledgeCreation",
    "A strategic agent that uses its unique understanding of your business to pursue a dynamic goal, while also being designed to consult human experts for approval at key strategic milestones.",
  ],
  [
    "aiContentGeneration,dynamicGoalSeeking,proprietaryKnowledgeCreation",
    "An agent that adapts its goals based on market performance, then generates new content that is perfectly tuned to your brand's proprietary voice and knowledge.",
  ],
  [
    "aiContentGeneration,bespokeHumanInLoop,proprietaryKnowledgeCreation",
    "A 'brand guardian' content system where an AI, trained on your proprietary knowledge, generates on-brand drafts that are then sent to your marketing manager for final approval.",
  ],
  [
    "aiContentGeneration,bespokeHumanInLoop,dynamicGoalSeeking",
    "A self-improving content engine that adapts its content strategy based on analytics, generates new content, and presents it to a human for approval before publishing.",
  ],

  // Four-Block Combinations (15)
  [
    "deepLegacyIntegration,dynamicGoalSeeking,multiAgentOrchestration,proprietaryKnowledgeCreation",
    "A highly autonomous system that orchestrates agents across your integrated proprietary platforms, using your unique business knowledge to dynamically adapt its strategy to meet high-level goals.",
  ],
  [
    "bespokeHumanInLoop,deepLegacyIntegration,multiAgentOrchestration,proprietaryKnowledgeCreation",
    "An agentic system that orchestrates multiple AIs, deeply integrated with your legacy data, to handle complex processes using your proprietary knowledge, with bespoke workflows for critical human approval.",
  ],
  [
    "aiContentGeneration,deepLegacyIntegration,multiAgentOrchestration,proprietaryKnowledgeCreation",
    "This system orchestrates data extraction from legacy platforms, uses proprietary knowledge to understand it, and tasks a content agent to generate expert-level reports and summaries.",
  ],
  [
    "bespokeHumanInLoop,deepLegacyIntegration,dynamicGoalSeeking,multiAgentOrchestration",
    "This system orchestrates agents across your proprietary infrastructure to achieve dynamic goals, but is designed with bespoke human-in-the-loop checkpoints for strategic changes.",
  ],
  [
    "aiContentGeneration,deepLegacyIntegration,dynamicGoalSeeking,multiAgentOrchestration",
    "An agent that orchestrates real-time data analysis from your integrated systems, adapts its marketing goals, and directs an AI to generate new ad creatives to match.",
  ],
  [
    "aiContentGeneration,bespokeHumanInLoop,deepLegacyIntegration,multiAgentOrchestration",
    "A comprehensive content workflow that orchestrates data extraction from legacy systems, AI-powered drafting, human review and approval, and finally, automated distribution by another agent.",
  ],
  [
    "bespokeHumanInLoop,dynamicGoalSeeking,multiAgentOrchestration,proprietaryKnowledgeCreation",
    "A 'master brain' system that directs a team of agents based on proprietary knowledge, adapting their collective strategy toward a dynamic goal, while still relying on human experts for final strategic sign-off.",
  ],
  [
    "aiContentGeneration,dynamicGoalSeeking,multiAgentOrchestration,proprietaryKnowledgeCreation",
    "An autonomous branding agent that orchestrates a team of AIs to adapt marketing goals based on real-time data and generate new content that is always perfectly aligned with your proprietary brand voice.",
  ],
  [
    "aiContentGeneration,bespokeHumanInLoop,multiAgentOrchestration,proprietaryKnowledgeCreation",
    "A collaborative content creation system where a 'strategist' AI with proprietary knowledge directs a 'writer' AI, whose drafts are then routed through a bespoke workflow to your human team for approval.",
  ],
  [
    "aiContentGeneration,bespokeHumanInLoop,dynamicGoalSeeking,multiAgentOrchestration",
    "A fully managed, adaptive content system that orchestrates goal-setting based on performance, AI content generation, and human review cycles to ensure quality and strategic alignment.",
  ],
  [
    "bespokeHumanInLoop,deepLegacyIntegration,dynamicGoalSeeking,proprietaryKnowledgeCreation",
    "A deeply integrated agent that pulls real-time data from your legacy systems, interprets it using its proprietary knowledge of your business, and adapts its actions to meet goals, with checkpoints for human oversight on major decisions.",
  ],
  [
    "aiContentGeneration,deepLegacyIntegration,dynamicGoalSeeking,proprietaryKnowledgeCreation",
    "This agent becomes a true business expert, using deep integration to access unique data, interpreting it with proprietary knowledge, adapting its content strategy, and generating expert-level market analysis.",
  ],
  [
    "aiContentGeneration,bespokeHumanInLoop,deepLegacyIntegration,proprietaryKnowledgeCreation",
    "A secure content system that pulls sensitive data from your proprietary systems, uses its unique knowledge base to draft reports, and routes them through a human approval workflow before distribution.",
  ],
  [
    "aiContentGeneration,bespokeHumanInLoop,deepLegacyIntegration,dynamicGoalSeeking",
    "An adaptive marketing system that deeply integrates with your CRM to track goals, automatically generates new campaign content, and presents it to your marketing lead for approval via a bespoke workflow.",
  ],
  [
    "aiContentGeneration,bespokeHumanInLoop,dynamicGoalSeeking,proprietaryKnowledgeCreation",
    "A complete, self-improving content ecosystem that uses its proprietary knowledge to generate on-brand content, adapts its strategy based on results, and includes human review to ensure strategic alignment and quality.",
  ],

  // Five-Block Combinations (6)
  [
    "bespokeHumanInLoop,deepLegacyIntegration,dynamicGoalSeeking,multiAgentOrchestration,proprietaryKnowledgeCreation",
    "This system represents a nearly autonomous operational unit, orchestrating agents across your integrated proprietary systems, using your unique knowledge to adapt its strategy towards a dynamic goal, while embedding your human experts for the most critical strategic decisions.",
  ],
  [
    "aiContentGeneration,deepLegacyIntegration,dynamicGoalSeeking,multiAgentOrchestration,proprietaryKnowledgeCreation",
    "An autonomous market intelligence system that orchestrates agents to analyze data from your integrated systems, interprets it with proprietary knowledge to adapt its goals, and generates comprehensive reports and market summaries.",
  ],
  [
    "aiContentGeneration,bespokeHumanInLoop,deepLegacyIntegration,multiAgentOrchestration,proprietaryKnowledgeCreation",
    "A complete, managed content creation and distribution system that orchestrates data extraction from legacy sources, uses proprietary knowledge for on-brand AI drafting, and runs it through a human approval workflow before publishing.",
  ],
  [
    "aiContentGeneration,bespokeHumanInLoop,deepLegacyIntegration,dynamicGoalSeeking,multiAgentOrchestration",
    "This system orchestrates an adaptive marketing workflow where real-time data from your integrated platforms informs dynamic campaign goals, new content is generated automatically, and your team provides final approval before launch.",
  ],
  [
    "aiContentGeneration,bespokeHumanInLoop,dynamicGoalSeeking,multiAgentOrchestration,proprietaryKnowledgeCreation",
    "The ultimate 'brand-as-a-service' agent, this system orchestrates a team of AIs that adapt their strategy based on performance, generate perfectly on-brand content using proprietary knowledge, and require human sign-off for all public-facing material.",
  ],
  [
    "aiContentGeneration,bespokeHumanInLoop,deepLegacyIntegration,dynamicGoalSeeking,proprietaryKnowledgeCreation",
    "A comprehensive business intelligence agent that deeply integrates with your core data, interprets it with proprietary knowledge to provide predictive analysis, generates detailed reports, and includes human oversight for strategic validation.",
  ],

  // Six-Block Combination (1)
  [
    "aiContentGeneration,bespokeHumanInLoop,deepLegacyIntegration,dynamicGoalSeeking,multiAgentOrchestration,proprietaryKnowledgeCreation",
    "This is the Autonomous Business Operating System. By combining all core architectural concepts, this comprehensive system acts as your business's central nervous system. It orchestrates multiple specialized AIs that integrate deeply with your proprietary and legacy systems. It operates with dynamic, goal-seeking behavior, adapting its strategies to market changes while executing bespoke human-in-the-loop workflows for critical oversight. It leverages its proprietary knowledge base to inform its actions and uses AI-powered content generation to communicate and execute tasks, creating a truly transformative operational model.",
  ],
])

const generateSolutionConcept = (selectedCapabilities: Capability[]): string => {
  const count = selectedCapabilities.length

  if (count === 0) {
    return "Select capabilities on the left to visualize a conceptual agent."
  }

  // Generate a consistent key by sorting the IDs of selected capabilities.
  const combinationKey = selectedCapabilities
    .map((c) => c.id)
    .sort()
    .join(",")

  // Look up the description in our comprehensive map.
  return solutionBlueprints.get(combinationKey) || "Please select a valid combination to see a description."
}

export default function InteractiveSolutionBuilder() {
  const [selectedCapabilityIds, setSelectedCapabilityIds] = useState<string[]>([])

  const toggleCapability = (id: string) => {
    setSelectedCapabilityIds((prev) => (prev.includes(id) ? prev.filter((capId) => capId !== id) : [...prev, id]))
  }

  const selectedCapabilitiesObjects = capabilities.filter((cap) => selectedCapabilityIds.includes(cap.id))
  const solutionConceptText = generateSolutionConcept(selectedCapabilitiesObjects)

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          >
            Building Blocks of Your Bespoke AI Solution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Discover how our core AI capabilities combine to create powerful, tailored solutions. Select building blocks
            to visualize a conceptual agent.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => toggleCapability(cap.id)}
                className={cn(
                  "p-6 rounded-xl border border-slate-700 bg-slate-800/30 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 flex flex-col items-center text-center justify-center h-full min-h-[160px]",
                  selectedCapabilityIds.includes(cap.id)
                    ? "border-purple-500 ring-2 ring-purple-500 shadow-lg shadow-purple-500/30 bg-slate-800"
                    : "border-slate-700",
                )}
              >
                <div className="flex flex-col items-center mb-3">
                  <cap.icon
                    className={cn(
                      "w-10 h-10 mb-4 transition-colors duration-300",
                      selectedCapabilityIds.includes(cap.id) ? "text-purple-400" : "text-cyan-400",
                    )}
                  />
                  <h3 className="text-md font-semibold text-slate-100 leading-tight">{cap.name}</h3>
                </div>
                {selectedCapabilityIds.includes(cap.id) && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <CheckCircle2 className="w-5 h-5 text-purple-400 absolute top-3 right-3" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:sticky md:top-28 p-8 rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-md min-h-[350px] flex flex-col justify-center items-center text-center shadow-2xl"
          >
            <Lightbulb className="w-12 h-12 text-purple-400 mb-6 flex-shrink-0" />
            <AnimatePresence mode="wait">
              <motion.div
                key={solutionConceptText} // Key change triggers animation
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-lg text-slate-200 leading-relaxed"
              >
                <h4 className="font-bold text-purple-300 mb-2 text-xl">Solution Concept</h4>
                <p>{solutionConceptText}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
