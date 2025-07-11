import InteractiveCapabilitiesSection from '@/components/InteractiveCapabilitiesSection'
import CTASection from '@/components/CTASection'
import EnhancedHeroSection from '@/components/EnhancedHeroSection'
import ScheduleCoordinatorWorkflow from '@/components/workflows/ScheduleCoordinatorWorkflow'
import IntegrationsAndFeaturesSection from '@/components/IntegrationsAndFeaturesSection'

export default function ScheduleCoordinatorPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <EnhancedHeroSection
        className="hero-section bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-slate-900 text-white"
        headingText="Schedule Coordinator"
        subheadingText="Eliminate scheduling friction with AI that books meetings, manages calendars, and reduces no-shows automatically."
        primaryButtonText="See It In Action"
        primaryButtonHref="#demo"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
        stats={[
          { value: "92%", label: "Show Rate Improvement" },
          { value: "73%", label: "Less Time Scheduling" },
          { value: "24/7", label: "Booking Availability" }
        ]}
      />
      
      <InteractiveCapabilitiesSection
        heading="Intelligent Scheduling That Never Stops"
        subheading="Schedule Coordinator uses advanced AI to handle complex scheduling scenarios, time zones, and preferences automatically."
        capabilities={[
          {
            title: "Smart Calendar Management",
            description: "AI analyzes your team's availability, preferences, and priorities to find optimal meeting times for everyone involved.",
            icon: "Calendar",
            color: "from-blue-500 to-cyan-500",
            features: [
              "Multi-calendar synchronization",
              "Intelligent conflict resolution",
              "Buffer time optimization",
              "Team availability balancing"
            ],
            metric: { value: "96%", label: "scheduling accuracy" }
          },
          {
            title: "Automated Follow-Up System",
            description: "Persistent yet polite follow-ups ensure meetings get booked, with smart reminders that maximize attendance rates.",
            icon: "Bell",
            color: "from-purple-500 to-pink-500",
            features: [
              "Multi-touch reminder sequences",
              "SMS and email notifications",
              "Pre-meeting preparation emails",
              "No-show recovery workflows"
            ],
            metric: { value: "89%", label: "show rate achieved" }
          },
          {
            title: "Time Zone Intelligence",
            description: "Seamlessly handles global scheduling with automatic time zone detection and conversion for all participants.",
            icon: "Globe",
            color: "from-emerald-500 to-teal-500",
            features: [
              "Automatic timezone detection",
              "Global availability display",
              "Cross-timezone optimization",
              "Daylight saving adjustments"
            ],
            metric: { value: "50+", label: "countries supported" }
          },
          {
            title: "Meeting Type Optimization",
            description: "Different meeting types require different approaches - from quick calls to multi-stakeholder sessions.",
            icon: "Users",
            color: "from-orange-500 to-red-500",
            features: [
              "Custom meeting templates",
              "Duration recommendations",
              "Required attendee logic",
              "Meeting prep automation"
            ],
            metric: { value: "15+", label: "meeting types" }
          }
        ]}
      />
      
      <ScheduleCoordinatorWorkflow />
      
      <IntegrationsAndFeaturesSection />
      
      <div className="relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-slate-900 dark:text-white">
              Measurable Business Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">78%</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Reduction in scheduling back-and-forth</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">4.2x</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">More meetings booked per week</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">$45K</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Average annual time value saved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection
        heading="Ready to Eliminate Scheduling Friction?"
        subheading="Let Schedule Coordinator transform your booking process with AI that works 24/7 to fill your calendar with qualified meetings."
        primaryButtonText="Schedule a Demo"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Platform"
        secondaryButtonHref="/platform"
        className="bg-slate-900 dark:bg-slate-950"
      />
    </main>
  )
}
