import { TrendingUp, Megaphone, Users, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AgentSolutionsSection() {
  const agentCategories = [
    {
      icon: TrendingUp,
      title: "AI for Accelerated Sales & Growth",
      bullets: [
        "Drives intelligent lead generation to fill your pipeline.",
        "Automates multi-channel outreach effectively.",
        "Secures qualified appointments, accelerating revenue.",
      ],
      iconColor: "text-blue-400",
      gradientFromTo: "from-blue-500/10 to-cyan-500/10", // Subtle gradient for icon background
    },
    {
      icon: Megaphone,
      title: "AI for Dominant Marketing & Brand Presence",
      bullets: [
        "Powers AI-driven ad campaign optimization for maximum ROI.",
        "Enhances your SEO and online reputation significantly.",
        "Manages engaging social media strategies that convert.",
      ],
      iconColor: "text-fuchsia-400",
      gradientFromTo: "from-purple-500/10 to-fuchsia-500/10",
    },
    {
      icon: Users,
      title: "AI for Enhanced Customer Experience & Operations",
      bullets: [
        "Provides intelligent, 24/7 customer support.",
        "Streamlines complex operational workflows for peak efficiency.",
        "Resolves inquiries faster, boosting satisfaction.",
      ],
      iconColor: "text-cyan-400",
      gradientFromTo: "from-cyan-500/10 to-sky-500/10",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:whitespace-nowrap">
            Meet Your Dedicated AI Specialists: Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500">
              Core Agent Suite
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            NovaGent delivers sophisticated, expertly engineered Core AI Agents. These aren't simple task automators;
            they are comprehensive AI systems, fully managed and continuously optimized by our team to deliver
            transformative results without the DIY burden.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-10 md:space-y-12">
            {agentCategories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:space-x-6 md:space-x-8 p-6 rounded-xl bg-slate-800/70 border border-slate-700 shadow-lg"
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
          <Button
            asChild
            size="lg"
            className="bg-white text-slate-900 hover:bg-slate-200 h-12 px-8 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <Link href="/solutions/ai-agent-suite">
              <span className="flex items-center">
                Explore Our Full Suite of Core Agents
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
