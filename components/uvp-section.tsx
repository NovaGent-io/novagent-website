import { Brain, Target, BarChart3, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UVPSection() {
  const features = [
    {
      icon: Brain,
      title: "Expert-Managed Solutions",
      description:
        "Our AI specialists design, deploy, monitor, and continuously optimize your agents for peak performance. Human expertise guides AI power.",
      iconColor: "text-cyan-400",
    },
    {
      icon: Target,
      title: "Outcome-Driven Agents",
      description:
        "Our Core Agents are engineered to achieve your specific business objectives – from lead generation to ad campaign management and customer support.",
      iconColor: "text-purple-400",
    },
    {
      icon: BarChart3,
      title: "Transparent Performance & ROI",
      description:
        "Gain clear visibility into your AI agents' performance and tangible value via your dedicated NovaGent platform and regular strategic reviews.",
      iconColor: "text-fuchsia-400",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Beyond Basic Bots: Experience True 'Managed-AI'</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            NovaGent offers more than just software. We provide a fully managed service, ensuring your AI solutions
            deliver exceptional results and evolve with your business.
          </p>
        </div>

        <div className="space-y-20 md:space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`md:flex items-center gap-8 lg:gap-12 rounded-xl border border-slate-800 p-6 hover:bg-slate-800 transition-colors duration-300 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-2/5 lg:w-1/3 flex justify-center mb-6 md:mb-0">
                <div className="bg-slate-800 p-6 rounded-xl shadow-xl w-full max-w-xs md:max-w-none flex justify-center items-center aspect-square md:aspect-auto border border-slate-700">
                  <feature.icon
                    className={`w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 ${feature.iconColor}`}
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div className="md:w-3/5 lg:w-2/3 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 md:mt-20">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-purple-300 border-purple-400 hover:bg-purple-400/20 hover:text-purple-200 h-12 px-8 text-base transition-colors duration-300 group"
          >
            <Link href="/why-novagent">
              <span className="flex items-center">
                Discover Why NovaGent Excels
                <LinkIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
