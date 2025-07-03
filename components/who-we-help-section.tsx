import { Lightbulb, DraftingCompass, GitMerge, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WhoWeHelpSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white">
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
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Custom Solutions
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-400 text-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-300 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-3xl md:text-4xl font-semibold text-center mb-12 md:mb-16 text-slate-100">
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
                },
                {
                  step: "02",
                  title: "Custom Architecture & Design",
                  description:
                    "Our expert team architects a bespoke AI agentic system tailored to your exact requirements.",
                  Icon: DraftingCompass,
                  accentColor: "fuchsia",
                },
                {
                  step: "03",
                  title: "Agile Development & Integration",
                  description:
                    "We build and integrate your custom solution with a focus on efficiency and seamless deployment.",
                  Icon: GitMerge,
                  accentColor: "pink",
                },
                {
                  step: "04",
                  title: "Ongoing Management & Optimization",
                  description:
                    "We provide continuous monitoring, maintenance, and optimization to ensure peak performance and evolving value.",
                  Icon: TrendingUp,
                  accentColor: "sky",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-xl shadow-2xl flex flex-col h-full transition-all duration-300 hover:scale-105 group
                            bg-slate-800/70 backdrop-blur-md border border-${item.accentColor}-500/30 hover:border-${item.accentColor}-500/70`}
                  style={{ zIndex: 1 }}
                >
                  <div
                    className={`absolute -top-5 -left-3 w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center border-4 border-slate-800 shadow-lg`}
                  >
                    <item.Icon className={`w-7 h-7 text-${item.accentColor}-400`} strokeWidth={2} />
                  </div>

                  <div className="pt-10">
                    {" "}
                    {/* Add padding to account for the icon circle */}
                    <h4 className={`text-xl font-semibold text-${item.accentColor}-400 mb-3 flex items-center`}>
                      <span className="text-3xl font-bold text-slate-600 mr-3 group-hover:text-${item.accentColor}-500 transition-colors">
                        {item.step}
                      </span>
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-sm flex-grow">{item.description}</p>
                  </div>

                  {/* Subtle glow effect */}
                  <div
                    className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 
                                bg-gradient-to-br from-${item.accentColor}-500/20 via-transparent to-transparent blur-lg`}
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
