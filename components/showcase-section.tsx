"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Briefcase, Truck, ShieldPlus } from "lucide-react"

const showcaseItems = [
  {
    id: "finance",
    title: "Finance & Reconciliation",
    headline: "Achieve 98% Accuracy in Financial Operations",
    icon: Briefcase,
    content:
      "For a leading fintech enterprise, manual reconciliation across three disparate legacy systems created significant operational drag and compliance risk. We engineered a bespoke agentic system that acts as a central orchestration engine. It performs deep integration to ingest transactional data from all three systems, applies a custom-built validation ruleset based on their unique business logic, and automatically cross-references millions of entries daily. The system not only automates the entire process but also flags complex discrepancies for human expert review with a full data summary, transforming a week-long manual effort into a seamless, daily, audit-ready operation.",
  },
  {
    id: "logistics",
    title: "Supply Chain & Logistics",
    headline: "Build a Predictive & Resilient Supply Chain",
    icon: Truck,
    content:
      "A global manufacturing client was facing millions in losses due to unpredictable shipping delays. We architected a 'Logistics Nerve Center'—a custom system that orchestrates multiple specialized AIs. One AI ingests real-time data from global shipping APIs and IoT container sensors, another analyzes meteorological data to predict disruptions, while a third monitors internal inventory levels. By synthesizing this data, the system runs predictive models to flag at-risk shipments 48-72 hours in advance and can autonomously initiate re-routing procedures, turning their supply chain from a reactive liability into a proactive, resilient asset.",
  },
  {
    id: "healthcare",
    title: "Healthcare & Compliance",
    headline: "Fortify Compliance & Elevate the Patient Journey",
    icon: ShieldPlus,
    content:
      "For a multi-state healthcare provider, patient onboarding was a fragmented and manually intensive process, posing significant HIPAA compliance risks. We built a proprietary, HIPAA-compliant agentic system to manage the entire end-to-end journey securely. The system automates patient data intake from various sources, programmatically verifies insurance eligibility via API, manages secure e-signature workflows for consent forms, and intelligently schedules initial consultations based on practitioner availability, all while creating a complete, immutable audit trail for every action, ensuring both a seamless patient experience and a fortified compliance posture.",
  },
]

const tabContentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "circOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "circIn" } },
}

const ShowcaseSection = () => {
  const [activeTab, setActiveTab] = useState(showcaseItems[0].id)

  return (
    <section className="py-28 sm:py-36 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Inspiring{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              What's Possible
            </span>
          </h2>
          <p className="text-lg text-slate-400 mt-6 font-medium">
            To inspire your vision, here are a few examples of what's possible.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 bg-slate-900/80 backdrop-blur-sm border border-slate-800 h-auto p-1.5 rounded-xl shadow-md">
              {showcaseItems.map((item) => (
                <TabsTrigger
                  key={item.id}
                  value={item.id}
                  className="relative data-[state=active]:text-white text-slate-400 rounded-lg py-4 px-3 text-base font-medium transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  {item.id === activeTab && (
                    <motion.div
                      layoutId="activeShowcaseTab"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 mr-2 opacity-80" />
                    {item.title}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="mt-10 min-h-[300px] md:min-h-[280px] relative">
              <AnimatePresence mode="wait">
                {showcaseItems.map(
                  (item) =>
                    item.id === activeTab && (
                      <TabsContent key={item.id} value={item.id} asChild forceMount>
                        <motion.div
                          variants={tabContentVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="bg-slate-900/60 backdrop-blur-md border border-slate-800/70 rounded-2xl p-10 shadow-xl"
                        >
                          <h3 className="text-2xl font-semibold text-white mb-2 flex items-center">
                            <item.icon className="w-7 h-7 mr-3 text-purple-400" />
                            {item.title}
                          </h3>
                          <h4 className="text-xl font-bold text-purple-300 mb-6">{item.headline}</h4>
                          <p className="text-lg text-slate-300 leading-relaxed">{item.content}</p>
                        </motion.div>
                      </TabsContent>
                    ),
                )}
              </AnimatePresence>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

export default ShowcaseSection
