import { Lightbulb, DraftingCompass, GitMerge, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WhoWeHelpSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-fuchsia-500">
              Unlock Exponential Growth
            </span>
            <br />
            with Custom AI Architectures.
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            For organizations with unique operational complexities and ambitious growth targets, our expert team
            partners with you to architect intelligent automation that solves your most pressing challenges and unlocks
            new levels of efficiency and innovation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/solutions/custom-agentic-systems" passHref>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-purple-900 hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Explore Custom Solutions
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-purple-900 font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-3xl md:text-4xl font-semibold text-center mb-12 md:mb-16 text-white">
            Our Collaborative Process
          </h3>
          <div className="relative">
            {/* Decorative connecting line for larger screens */}
            <div
              className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-700/50 -translate-y-1/2"
              style={{ zIndex: 0 }}
            ></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 items-stretch">
              {[
                {
                  step: "01",
                  title: "Strategic Consultation & Discovery",
                  description:
                    "We begin with a deep understanding of your business goals, challenges, and existing infrastructure.",
                  Icon: Lightbulb,
                  accentColor: "purple",
                  iconClass: "text-purple-400",
                  borderClass: "border-purple-500/30 hover:border-purple-500/70",
                  glowClass: "from-purple-500/20",
                },
                {
                  step: "02",
                  title: "Custom Architecture & Design",
                  description:
                    "Our expert team architects a bespoke AI agentic system tailored to your exact requirements.",
                  Icon: DraftingCompass,
                  accentColor: "fuchsia",
                  iconClass: "text-fuchsia-400",
                  borderClass: "border-fuchsia-500/30 hover:border-fuchsia-500/70",
                  glowClass: "from-fuchsia-500/20",
                },
                {
                  step: "03",
                  title: "Agile Development & Integration",
                  description:
                    "We build and integrate your custom solution with a focus on efficiency and seamless deployment.",
                  Icon: GitMerge,
                  accentColor: "pink",
                  iconClass: "text-pink-400",
                  borderClass: "border-pink-500/30 hover:border-pink-500/70",
                  glowClass: "from-pink-500/20",
                },
                {
                  step: "04",
                  title: "Ongoing Management & Optimization",
                  description:
                    "We provide continuous monitoring, maintenance, and optimization to ensure peak performance and evolving value.",
                  Icon: TrendingUp,
                  accentColor: "sky",
                  iconClass: "text-sky-400",
                  borderClass: "border-sky-500/30 hover:border-sky-500/70",
                  glowClass: "from-sky-500/20",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-xl shadow-2xl flex flex-col h-full transition-all duration-300 hover:scale-105 group bg-slate-800/70 backdrop-blur-md ${item.borderClass}`}
                  style={{ zIndex: 1 }}
                >
                  <div
                    className="absolute -top-5 -left-3 w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center border-4 border-slate-800 shadow-lg"
                  >
                    <item.Icon className={`w-7 h-7 ${item.iconClass}`} strokeWidth={2} />
                  </div>

                  <div className="pt-10">
                    {" "}
                    {/* Add padding to account for the icon circle */}
                    <h4 className={`text-xl font-semibold ${item.iconClass} mb-3 flex items-center`}>
                      <span className={`text-3xl font-bold text-slate-600 mr-3 group-hover:${item.iconClass} transition-colors`}>
                        {item.step}
                      </span>
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-sm flex-grow">{item.description}</p>
                  </div>

                  {/* Subtle glow effect */}
                  <div
                    className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${item.glowClass} via-transparent to-transparent blur-lg`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
