import InteractiveCapabilitiesSection from '@/components/InteractiveCapabilitiesSection'
import CTASection from '@/components/CTASection'
import EnhancedHeroSection from '@/components/EnhancedHeroSection'
import AnimatedHowItWorksSection from '@/components/AnimatedHowItWorksSection'
import IntegrationsAndFeaturesSection from '@/components/IntegrationsAndFeaturesSection'

export default function TalentWelcomeSuitePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <EnhancedHeroSection
        className="hero-section bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-slate-900 text-white"
        headingText="Talent Welcome Suite"
        subheadingText="Transform employee onboarding with AI that personalizes experiences, automates workflows, and ensures every new hire feels valued from day one."
        primaryButtonText="See It In Action"
        primaryButtonHref="#demo"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
        stats={[
          { value: "87%", label: "Faster Time to Productivity" },
          { value: "94%", label: "New Hire Satisfaction" },
          { value: "75%", label: "Reduced HR Workload" }
        ]}
      />
      
      <InteractiveCapabilitiesSection
        heading="Onboarding That Creates Champions From Day One"
        subheading="Talent Welcome Suite combines intelligent automation with personalized experiences to turn new hires into engaged, productive team members faster."
        capabilities={[
          {
            title: "Personalized Onboarding Journeys",
            description: "AI creates custom onboarding paths based on role, department, experience level, and individual learning preferences.",
            icon: "UserPlus",
            color: "from-blue-500 to-cyan-500",
            features: [
              "Role-specific workflows",
              "Adaptive learning paths",
              "Progress tracking",
              "Milestone celebrations"
            ],
            metric: { value: "96%", label: "completion rate" }
          },
          {
            title: "Automated Task Orchestration",
            description: "Coordinate IT setup, paperwork, training schedules, and team introductions without manual intervention.",
            icon: "Workflow",
            color: "from-purple-500 to-pink-500",
            features: [
              "Equipment provisioning",
              "Document collection",
              "Access management",
              "Calendar coordination"
            ],
            metric: { value: "5x", label: "faster setup" }
          },
          {
            title: "Intelligent Q&A Assistant",
            description: "24/7 AI support answers new hire questions instantly, from benefits details to company policies and procedures.",
            icon: "MessageCircle",
            color: "from-emerald-500 to-teal-500",
            features: [
              "Company knowledge base",
              "Policy explanations",
              "Benefits guidance",
              "Cultural insights"
            ],
            metric: { value: "2min", label: "avg response time" }
          },
          {
            title: "Engagement & Feedback Loop",
            description: "Monitor new hire sentiment, collect feedback, and proactively address concerns before they become issues.",
            icon: "Heart",
            color: "from-orange-500 to-red-500",
            features: [
              "Pulse surveys",
              "Sentiment analysis",
              "Manager alerts",
              "Retention insights"
            ],
            metric: { value: "92%", label: "retention rate" }
          }
        ]}
      />
      
      <AnimatedHowItWorksSection
        heading="How Talent Welcome Suite Works"
        subheading="A seamless system that turns first days into lasting impressions"
        steps={[
          {
            title: "Pre-Arrival Preparation",
            description: "As soon as an offer is accepted, AI begins orchestrating equipment orders, access requests, and personalized welcome materials."
          },
          {
            title: "Day One Excellence",
            description: "New hires receive a personalized onboarding portal with their schedule, team introductions, and everything needed to succeed."
          },
          {
            title: "Guided Learning Journey",
            description: "AI delivers role-specific training, tracks progress, and ensures new hires get the knowledge they need when they need it."
          },
          {
            title: "Continuous Support",
            description: "Ongoing check-ins, feedback collection, and proactive support ensure successful integration into your company culture."
          }
        ]}
      />
      
      <IntegrationsAndFeaturesSection />
      
      <div className="relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-slate-900 dark:text-white">
              Onboarding Impact That Lasts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">14?3</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Days to productivity reduced from 14 to 3</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">$4,200</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Saved per new hire in HR costs</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">98%</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Would recommend to other new hires</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection
        heading="Ready to Transform Your Onboarding Experience?"
        subheading="Let Talent Welcome Suite create exceptional first impressions with AI that ensures every new hire becomes a long-term success story."
        primaryButtonText="Schedule a Demo"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Platform"
        secondaryButtonHref="/platform"
        className="bg-slate-900 dark:bg-slate-950"
      />
    </main>
  )
}
