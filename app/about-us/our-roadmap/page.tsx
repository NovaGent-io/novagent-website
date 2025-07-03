import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AnimatedBackground from "@/components/animated-background"
import { Layers, BrainCircuit, Waypoints, ShieldCheck, BarChartBig, ArrowRight, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const roadmapThemes = [
  {
    id: "platform-evolution",
    icon: Layers,
    color: "cyan",
    headline: "A More Powerful & Integrated Client Experience",
    description:
      "We are focused on empowering you with greater control and seamless management. Our upcoming platform evolution includes the launch of the **Novagent CRM**, a unified hub to manage contacts, monitor agent activity, and access insights. This will be complemented by **self-serve billing** and an **Agent Marketplace**, allowing you to browse and deploy pre-built agent templates with even greater speed.",
    valueToClient: "More Control, Deeper Integration, Faster Deployment.",
  },
  {
    id: "ai-core",
    icon: BrainCircuit,
    color: "fuchsia",
    headline: "Making Your Agents Smarter, Faster & More Efficient",
    description:
      "The 'brains' behind NovaGent are constantly evolving. We are developing our own **proprietary fine-tuned LLM** and enhancing our **data flywheel**. As we process more anonymized event data, your agents will benefit from increased performance, superior accuracy, and greater cost-effectiveness, giving you a powerful competitive edge.",
    valueToClient: "Access to a State-of-the-Art AI Engine That Continuously Improves.",
  },
  {
    id: "agent-capabilities",
    icon: Waypoints,
    color: "sky",
    headline: "Engaging Your Customers, Wherever They Are",
    description:
      "To ensure you can connect with your audience on their preferred platforms, we are developing **Voice and WhatsApp agent skills**. This will enable true omnichannel outreach and support, allowing our Core Agents to perform tasks like appointment setting or customer support via live voice and messaging apps.",
    valueToClient: "True Omnichannel Engagement. Unmatched Customer Reach.",
  },
  {
    id: "enterprise-readiness",
    icon: ShieldCheck,
    color: "emerald",
    headline: "Uncompromising Security & Flexibility for Enterprise Scale",
    description:
      "Our commitment to serving larger, complex organizations is unwavering. We are actively building our platform in alignment with **SOC 2 criteria** and have a clear roadmap for other certifications like **HIPAA**. For maximum flexibility and control, we are also developing an **on-premise deployment option** via a Helm chart for regulated industries.",
    valueToClient: "Peace of Mind with Enterprise-Grade Security, Compliance, and Deployment Options.",
  },
  {
    id: "insights-analytics",
    icon: BarChartBig,
    color: "purple",
    headline: "From Action to Insight: Proving Your ROI, Clearly",
    description:
      "We believe in transparent value. Our roadmap includes an **advanced credit and event analytics dashboard** and a powerful **Revenue Intelligence module** within the NovaGent CRM. These tools will provide you with even deeper insights into agent performance and a crystal-clear understanding of the return on your AI investment.",
    valueToClient: "Actionable Data, Transparent Performance, Undeniable ROI.",
  },
]

interface RoadmapItemProps {
  icon: LucideIcon
  color: string
  headline: string
  description: string
  valueToClient: string
  isLast?: boolean
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({
  icon: Icon,
  color,
  headline,
  description,
  valueToClient,
  isLast = false,
}) => {
  const colorClasses = {
    cyan: {
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30",
      iconBg: "bg-cyan-500/20",
      iconText: "text-cyan-400",
      valueText: "text-cyan-300",
      line: "from-cyan-500/50 to-transparent",
    },
    fuchsia: {
      bg: "bg-fuchsia-500/10",
      border: "border-fuchsia-500/30",
      iconBg: "bg-fuchsia-500/20",
      iconText: "text-fuchsia-400",
      valueText: "text-fuchsia-300",
      line: "from-fuchsia-500/50 to-transparent",
    },
    sky: {
      bg: "bg-sky-500/10",
      border: "border-sky-500/30",
      iconBg: "bg-sky-500/20",
      iconText: "text-sky-400",
      valueText: "text-sky-300",
      line: "from-sky-500/50 to-transparent",
    },
    emerald: {
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      iconBg: "bg-emerald-500/20",
      iconText: "text-emerald-400",
      valueText: "text-emerald-300",
      line: "from-emerald-500/50 to-transparent",
    },
    purple: {
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      iconBg: "bg-purple-500/20",
      iconText: "text-purple-400",
      valueText: "text-purple-300",
      line: "from-purple-500/50 to-transparent",
    },
  }

  const currentTheme = colorClasses[color as keyof typeof colorClasses] || colorClasses.cyan

  // Function to parse and render bold text
  const renderDescription = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className={`font-semibold ${currentTheme.iconText}`}>
            {part.slice(2, -2)}
          </strong>
        )
      }
      return part
    })
  }

  return (
    <div className="relative group">
      <div
        className={cn(
          "relative flex flex-col md:flex-row items-start p-6 sm:p-8 rounded-xl shadow-2xl transition-all duration-300 ease-in-out overflow-hidden",
          currentTheme.bg,
          currentTheme.border,
          "hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.2)]",
          `hover:shadow-${color}-500/30`,
        )}
      >
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8 text-center md:text-left">
          <div
            className={cn(
              "w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center relative shadow-lg",
              currentTheme.iconBg,
              "border-2",
              currentTheme.border,
            )}
          >
            <Icon className={cn("w-8 h-8 sm:w-10 sm:h-10", currentTheme.iconText)} />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className={cn("text-2xl sm:text-3xl font-bold mb-3", currentTheme.iconText, "tracking-tight")}>
            {headline}
          </h3>
          <p className="text-slate-300 mb-5 text-base sm:text-lg leading-relaxed">{renderDescription(description)}</p>
          <div className="mt-auto pt-4 border-t border-slate-700/50">
            <p className={cn("text-sm sm:text-base font-semibold", currentTheme.valueText, "tracking-wide")}>
              <span className="font-normal text-slate-400">Client Value: </span>
              {valueToClient}
            </p>
          </div>
        </div>
      </div>
      {!isLast && (
        <div
          className="hidden md:block absolute top-1/2 left-[calc(50%_-_1px)] transform -translate-y-1/2 h-full w-[2px] bg-gradient-to-b from-slate-700 via-slate-600 to-slate-700 -z-10 group-hover:opacity-50 transition-opacity duration-300"
          style={{ left: "calc(50% - 1px)", top: "100%", height: "8rem" }}
        ></div>
      )}
      {!isLast && (
        <div className="md:hidden w-full h-16 flex justify-center items-center">
          <div className={cn("w-1 h-8 rounded-full", currentTheme.iconBg)}></div>
        </div>
      )}
    </div>
  )
}

export default function OurRoadmapPage() {
  const pageTitle = "Our Roadmap"
  const heroHeadline = "The NovaGent Evolution: Our Commitment to Continuous Innovation."
  const heroSubheadline =
    "Our vision is to build the world's most effective and trusted Managed-AI platform. We are relentlessly innovating to bring more power, intelligence, and efficiency to our partners. This roadmap outlines our strategic direction and our dedication to building a platform that evolves with your business and defines the future of work."
  const disclaimer =
    "Please note: This roadmap outlines our current strategic vision. Specific features and timelines are subject to change as we adapt to market needs and customer feedback."

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-fuchsia-950">
          <AnimatedBackground />
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-sky-400">
              {heroHeadline}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">{heroSubheadline}</p>
            <p className="text-xs md:text-sm text-slate-500 max-w-2xl mx-auto italic">{disclaimer}</p>
          </div>
        </section>

        {/* Visual Roadmap Section */}
        <section className="py-16 md:py-24 bg-slate-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-20 tracking-tight">
              Our Strategic Development Themes
            </h2>
            <div className="relative space-y-12 md:space-y-16 max-w-4xl mx-auto">
              {roadmapThemes.map((theme, index) => (
                <RoadmapItem
                  key={theme.id}
                  icon={theme.icon}
                  color={theme.color}
                  headline={theme.headline}
                  description={theme.description}
                  valueToClient={theme.valueToClient}
                  isLast={index === roadmapThemes.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Partnership Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-sky-400">
              Let's Build the Future of Your Business, Together.
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              This roadmap is our public commitment to building the most powerful managed AI platform available. We are
              driven by the potential to transform businesses like yours. If our vision for the future of work aligns
              with yours, we invite you to start a conversation with us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-3 text-base"
              >
                <Link href="/book-demo">Discuss Your Goals with Our Team</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-slate-300 border-slate-600 hover:bg-slate-700/50 hover:text-white transition-colors duration-300 px-8 py-3 text-base group"
              >
                <Link href="/solutions/ai-agent-suite">
                  See Our Current Core Agent Suite
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
