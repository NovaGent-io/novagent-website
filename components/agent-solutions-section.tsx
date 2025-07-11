import { TrendingUp, Settings, Users, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AgentSolutionsSection() {
  const agentCategories = [
    {
      icon: TrendingUp,
      title: "Sales & Growth",
      bullets: [
        "Prospect Hunter: Intelligent lead generation that fills your pipeline",
        "Schedule Coordinator: Books qualified meetings directly into calendars",
        "Smart Outreach Dialer: AI-powered calls with real-time transcription",
        "Visibility & Trust Manager: SEO optimization and reputation management",
      ],
      iconColor: "text-cyan-400",
      gradientFromTo: "from-cyan-500/10 to-blue-500/10",
    },
    {
      icon: Settings,
      title: "Operations & Management",
      bullets: [
        "Workflow Navigator: Intelligent project management and task coordination",
        "Finance Flow Manager: Transaction processing and financial operations",
        "Talent Welcome Suite: Automated employee onboarding workflows",
        "Regulatory Risk Guard: Compliance monitoring and management",
      ],
      iconColor: "text-purple-400",
      gradientFromTo: "from-purple-500/10 to-fuchsia-500/10",
    },
    {
      icon: Users,
      title: "Support & Intelligence",
      bullets: [
        "Support Concierge: 24/7 intelligent customer support automation",
        "Insight Intelligence: Advanced analytics and reporting capabilities",
        "Talent Scout Engine: Recruitment and hiring automation",
        "Legal Logic Hub: Document generation and contract management",
      ],
      iconColor: "text-pink-400",
      gradientFromTo: "from-pink-500/10 to-rose-500/10",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:whitespace-nowrap">
            Equip Your Agent with Skills from the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500">
              NovaCore Suite
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            NovaGent delivers a single, sophisticated AI agent equipped with any combination of Agent Skills you need. 
            These aren't simple task automators; this is a comprehensive AI system, fully managed and continuously 
            optimized by our team to deliver transformative results without the DIY burden.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-10 md:space-y-12">
            {agentCategories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:space-x-6 md:space-x-8 p-6 rounded-xl bg-slate-800/70 dark:bg-slate-800/70 border border-slate-700 dark:border-slate-700 shadow-lg"
              >
                <div
                  className={`mb-4 sm:mb-0 p-3 md:p-4 rounded-full bg-gradient-to-br ${category.gradientFromTo} self-start`}
                >
                  <category.icon className={`w-10 h-10 md:w-12 md:h-12 ${category.iconColor}`} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{category.title}</h3>
                  <ul className="space-y-2 text-slate-300">
                    {category.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 mt-1 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <div className="mb-4">
            <span className="text-slate-400 text-sm">+ 2 additional specialized skills for industry-specific needs</span>
          </div>
          <Button
            asChild
            size="lg"
            className="h-12 px-8 text-base font-semibold bg-white text-purple-900 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Link href="/capabilities">
              <span className="flex items-center">
                Configure Your Agent
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
