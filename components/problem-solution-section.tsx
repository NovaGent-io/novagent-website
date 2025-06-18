import { AlertTriangle, Puzzle, DollarSign } from "lucide-react"

export default function ProblemSolutionSection() {
  const problems = [
    {
      icon: Puzzle,
      title: "Fragmented Systems",
      description: "Juggling too many disconnected tools, APIs, and manual processes that hinder efficiency?",
      iconColor: "text-cyan-500",
    },
    {
      icon: AlertTriangle,
      title: "DIY AI Complexity",
      description:
        "Is the promise of AI lost in steep learning curves, security concerns, and the constant demand for specialized in-house talent?",
      iconColor: "text-fuchsia-500",
    },
    {
      icon: DollarSign,
      title: "Elusive ROI",
      description:
        "Struggling to see and measure the real, tangible impact and financial return of your current automation efforts?",
      iconColor: "text-purple-500",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
            Not Just a Service. Not Just a Tool.
            <br className="hidden md:block" />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500">
                NovaGent is a Platform.
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 transform translate-y-1 opacity-75"></span>
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Most companies either sell you a tool or offer you a service. We built something better — a scalable,
            intelligent platform that deploys and manages AI agents for any business need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-start text-left"
            >
              <problem.icon className={`w-12 h-12 mb-6 ${problem.iconColor}`} strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{problem.title}</h3>
              <p className="text-slate-600 text-base leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
