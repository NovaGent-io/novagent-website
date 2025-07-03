import { Button } from "@/components/ui/button"
import Link from "next/link"
import AnimatedBackground from "@/components/animated-background"
import {
  Users,
  Target,
  Lightbulb,
  ShieldCheck,
  Zap,
  BrainCircuit,
  AlertTriangle,
  Lock,
  Bot,
  Quote,
  CheckCircle,
  ArrowRight,
  Rocket,
  Globe,
  Sparkles,
  TrendingUp,
} from "lucide-react"

export default function OurStoryMissionPage() {
  const pageTitle = "Our Story & Mission"

  const values = [
    {
      title: "Partnership Over Prescription",
      description:
        "We build deep, collaborative relationships founded on mutual trust, shared understanding, and an unwavering commitment to achieving your specific goals.",
      icon: <Users className="w-10 h-10 text-sky-400" />,
    },
    {
      title: "Verifiable Outcomes, Not Vague Outputs",
      description:
        "Our focus is relentlessly on designing and managing AI solutions that deliver measurable, impactful results and tangible ROI for your business.",
      icon: <Target className="w-10 h-10 text-fuchsia-400" />,
    },
    {
      title: "Pragmatic Innovation, Applied Expertise",
      description:
        "We embrace cutting-edge AI and are passionate about innovation, but always apply it pragmatically and expertly to solve real-world business challenges with maximum effectiveness.",
      icon: <Lightbulb className="w-10 h-10 text-purple-400" />,
    },
    {
      title: "Unwavering Integrity, Absolute Transparency",
      description:
        "We operate with complete openness, scrupulous honesty, and the highest ethical standards in every interaction, every solution, and every promise we make.",
      icon: <ShieldCheck className="w-10 h-10 text-emerald-400" />,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-50">
      {/* Header is handled by layout.tsx */}

      <main className="flex-grow">
        {/* 1. Redesigned Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <AnimatedBackground className="opacity-20" />

          <div className="relative z-10 container mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">
              {/* Left Column - Main Story */}
              <div className="space-y-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500">
                    Born from Real-World Experience
                  </span>
                </h1>

                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
                    <span className="text-cyan-400 font-semibold">Seasoned sales leaders</span> who witnessed the gap
                    between
                    <span className="text-fuchsia-400 font-semibold"> AI's promise</span> and its
                    <span className="text-purple-400 font-semibold"> practical application</span>.
                  </p>

                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg border-l-4 border-cyan-500">
                    <BrainCircuit className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                    <p className="text-slate-200 italic">
                      "We saw brilliant teams bogged down by repetitive tasks, and powerful AI tools that remained out
                      of reach."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Redesigned AI Paradox Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-slate-900/50 to-slate-800/30 relative overflow-hidden">
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                <span className="text-white font-light">What We Discovered: </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
                  The AI Paradox
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
                Limitless potential, yet tangible results remained frustratingly elusive
              </p>
            </div>

            {/* Problems Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="group p-6 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-xl border border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-red-500/20 rounded-full">
                    <AlertTriangle className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-red-300">Steep Learning Curves</h3>
                  <p className="text-slate-400 text-sm">
                    Complex implementations requiring extensive technical expertise
                  </p>
                </div>
              </div>

              <div className="group p-6 bg-gradient-to-br from-orange-900/20 to-amber-900/20 rounded-xl border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-orange-500/20 rounded-full">
                    <Zap className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-orange-300">Integration Nightmares</h3>
                  <p className="text-slate-400 text-sm">Fragmented tools creating more problems than solutions</p>
                </div>
              </div>

              <div className="group p-6 bg-gradient-to-br from-amber-900/20 to-yellow-900/20 rounded-xl border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-amber-500/20 rounded-full">
                    <Lock className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-amber-300">Black Box Technology</h3>
                  <p className="text-slate-400 text-sm">Opaque systems with unproven ROI and unclear outcomes</p>
                </div>
              </div>

              <div className="group p-6 bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-xl border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-yellow-500/20 rounded-full">
                    <Bot className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-yellow-300">Generic Limitations</h3>
                  <p className="text-slate-400 text-sm">Basic bots failing at complex, business-critical challenges</p>
                </div>
              </div>
            </div>

            {/* Central Revelation */}
            <div className="relative">
              {/* Connecting Lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-full w-px bg-gradient-to-b from-transparent via-slate-600 to-transparent"></div>
              </div>

              {/* Central Solution Card */}
              <div className="relative z-10 flex justify-center">
                <div className="max-w-2xl p-8 bg-gradient-to-br from-cyan-900/30 via-purple-900/30 to-fuchsia-900/30 rounded-2xl border border-cyan-500/50 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm">
                  <div className="text-center space-y-6">
                    <div className="flex justify-center">
                      <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full">
                        <Lightbulb className="w-12 h-12 text-cyan-400" />
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400">
                        Our Conviction
                      </span>
                    </h3>

                    <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                      There had to be a more <span className="text-cyan-400 font-semibold">intelligent</span>, more{" "}
                      <span className="text-purple-400 font-semibold">managed</span>, more{" "}
                      <span className="text-fuchsia-400 font-semibold">effective</span> way.
                    </p>

                    <p className="text-slate-300">
                      A way to make sophisticated AI not just accessible, but a reliable engine for
                      <span className="text-cyan-400 font-semibold"> verifiable outcomes</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Redesigned Mission Section - Founder's Declaration */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
          <div className="container mx-auto px-6">
            {/* Founders Introduction */}
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-fuchsia-400 to-purple-400">
                  Our Mission:
                </span>
                <span className="block mt-2 text-slate-200">A Declaration from the Founders</span>
              </h2>

              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {/* Founder 1 */}
                  <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-200">Co-Founder</h3>
                        <p className="text-cyan-400">Sales Leadership Expert</p>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm">
                      "Having led sales teams through countless technology adoptions, I've seen firsthand how AI's
                      potential gets lost in complexity. We're here to change that."
                    </p>
                  </div>

                  {/* Founder 2 */}
                  <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center">
                        <BrainCircuit className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-200">Co-Founder</h3>
                        <p className="text-fuchsia-400">Business Strategy Expert</p>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm">
                      "My business partner and I believe that AI should amplify human capability, not replace it. That's
                      the foundation of everything we build."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Declaration */}
            <div className="relative mb-16">
              <div className="absolute top-0 left-8 text-6xl text-cyan-500/20">
                <Quote className="w-16 h-16" />
              </div>

              <div className="max-w-5xl mx-auto pl-16">
                <div className="space-y-8">
                  <div className="p-8 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-fuchsia-900/20 rounded-2xl border-l-4 border-cyan-500">
                    <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-200 leading-relaxed mb-4">
                      "NovaGent's mission is to design, deploy, and relentlessly optimize sophisticated AI agents that
                      function as a dedicated, intelligent extension of your revenue, marketing, and operations teams."
                    </p>
                    <div className="flex items-center text-cyan-400 text-sm">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                      <span>Core Mission Statement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Pillars */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Pillar 1 */}
              <div className="group p-8 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-cyan-500/20 rounded-lg mr-4">
                    <Target className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                    Cut Through Complexity
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  We exist to cut through the technological complexity, to provide unwavering expert management, and to
                  ensure that Artificial Intelligence becomes your most potent catalyst.
                </p>
                <div className="mt-4 flex items-center text-cyan-400 text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Expert Management Guaranteed</span>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="group p-8 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-fuchsia-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-fuchsia-500/20 rounded-lg mr-4">
                    <Zap className="w-8 h-8 text-fuchsia-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-200 group-hover:text-fuchsia-300 transition-colors">
                    Drive Superior Results
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Achieving superior efficiency, sustainable growth, and undisputed market leadership through
                  intelligently architected AI solutions.
                </p>
                <div className="mt-4 flex items-center text-fuchsia-400 text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Measurable ROI Focus</span>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="group p-8 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-lg mr-4">
                    <ShieldCheck className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">
                    Seamless Service
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Our commitment is to deliver these advanced capabilities through a seamless, fully managed service,
                  making transformative AI both accessible and results-driven.
                </p>
                <div className="mt-4 flex items-center text-purple-400 text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Fully Managed Platform</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-cyan-900/30 via-purple-900/30 to-fuchsia-900/30 rounded-2xl border border-cyan-500/30">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400">
                    Ready to Experience the NovaGent Difference?
                  </span>
                </h3>
                <p className="text-slate-300 mb-6">
                  Let us show you how intelligently architected and fully managed AI can transform your business
                  operations.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-fuchsia-600 hover:from-cyan-600 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/solutions/ai-agent-suite" className="inline-flex items-center">
                    Explore Our AI Agent Suite
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Redesigned Vision Section - Future Journey */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-slate-900 to-purple-900/30 relative overflow-hidden">
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-sky-400 to-fuchsia-400">
                  Our Vision:
                </span>
                <span className="block mt-2 text-slate-200">The Future We're Building Together</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
                A new era of work, amplified by seamless AI collaboration
              </p>
            </div>

            {/* Future Scenarios Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Scenario 1 */}
              <div className="group relative p-8 bg-gradient-to-br from-purple-900/30 via-slate-800/50 to-purple-900/30 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                </div>

                <div className="flex items-center mb-6">
                  <div className="p-4 bg-purple-500/20 rounded-xl mr-4">
                    <Globe className="w-10 h-10 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-200 group-hover:text-purple-300 transition-colors">
                      Universal AI Access
                    </h3>
                    <p className="text-purple-400 text-sm">For Every Business</p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  We envision a future where businesses of all sizes can harness the full, transformative potential of
                  Artificial Intelligence without needing to become AI experts themselves.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                    <span>No technical expertise required</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                    <span>Accessible to businesses of all sizes</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                    <span>Transformative potential unlocked</span>
                  </div>
                </div>
              </div>

              {/* Scenario 2 */}
              <div className="group relative p-8 bg-gradient-to-br from-sky-900/30 via-slate-800/50 to-sky-900/30 rounded-2xl border border-sky-500/30 hover:border-sky-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/20">
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse"></div>
                </div>

                <div className="flex items-center mb-6">
                  <div className="p-4 bg-sky-500/20 rounded-xl mr-4">
                    <Users className="w-10 h-10 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-200 group-hover:text-sky-300 transition-colors">
                      Human-AI Synergy
                    </h3>
                    <p className="text-sky-400 text-sm">Perfect Collaboration</p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  A future where intelligent agents work in perfect synergy with human teams, amplifying capabilities,
                  sparking unprecedented innovation, and liberating human potential.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-sky-400 mr-2 flex-shrink-0" />
                    <span>Amplified human capabilities</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-sky-400 mr-2 flex-shrink-0" />
                    <span>Unprecedented innovation</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-sky-400 mr-2 flex-shrink-0" />
                    <span>Strategic, creative focus</span>
                  </div>
                </div>
              </div>

              {/* Scenario 3 */}
              <div className="group relative p-8 bg-gradient-to-br from-fuchsia-900/30 via-slate-800/50 to-fuchsia-900/30 rounded-2xl border border-fuchsia-500/30 hover:border-fuchsia-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-fuchsia-500/20">
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-fuchsia-400 rounded-full animate-pulse"></div>
                </div>

                <div className="flex items-center mb-6">
                  <div className="p-4 bg-fuchsia-500/20 rounded-xl mr-4">
                    <Rocket className="w-10 h-10 text-fuchsia-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-200 group-hover:text-fuchsia-300 transition-colors">
                      NovaGent Leadership
                    </h3>
                    <p className="text-fuchsia-400 text-sm">Industry Vanguard</p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  NovaGent aspires to be at the vanguard of this evolution, building the preeminent platform for
                  trusted, ethically deployed, and expertly managed AI solutions.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-fuchsia-400 mr-2 flex-shrink-0" />
                    <span>Trusted & transparent AI</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-fuchsia-400 mr-2 flex-shrink-0" />
                    <span>Ethical deployment standards</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-fuchsia-400 mr-2 flex-shrink-0" />
                    <span>Long-term partner success</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Vision Statement */}
            <div className="relative">
              <div className="max-w-4xl mx-auto text-center">
                <div className="p-10 bg-gradient-to-br from-purple-900/40 via-sky-900/40 to-fuchsia-900/40 rounded-3xl border border-gradient-to-r border-purple-500/50 backdrop-blur-sm shadow-2xl">
                  <div className="flex justify-center mb-8">
                    <div className="p-6 bg-gradient-to-br from-purple-500/20 via-sky-500/20 to-fuchsia-500/20 rounded-full">
                      <Sparkles className="w-16 h-16 text-purple-400" />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-sky-400 to-fuchsia-400">
                      Intelligent. Accountable. Transformative.
                    </span>
                  </h3>

                  <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8">
                    Our AI solutions are not only intelligent but are also transparent, accountable, and deeply
                    interwoven with our partners' long-term success.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-4">
                      <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <p className="text-sm text-slate-300">Continuous Evolution</p>
                    </div>
                    <div className="p-4">
                      <ShieldCheck className="w-8 h-8 text-sky-400 mx-auto mb-2" />
                      <p className="text-sm text-slate-300">Ethical Standards</p>
                    </div>
                    <div className="p-4">
                      <Target className="w-8 h-8 text-fuchsia-400 mx-auto mb-2" />
                      <p className="text-sm text-slate-300">Partner Success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Redesigned 'Our Guiding Principles' Section */}
        <section className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-fuchsia-400 to-purple-400">
                  The Values That Define
                </span>
                <span className="block mt-2">Our Approach and Our Promises.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 - Partnership */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-sky-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/20 hover:-translate-y-2">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-lg"></div>
                      <div className="relative p-4 bg-gradient-to-br from-sky-500/30 to-cyan-500/30 rounded-full border border-sky-500/30">
                        <Users className="w-10 h-10 text-sky-400" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                        Partnership Over Prescription
                      </h3>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-500 mx-auto opacity-60"></div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          <span className="font-semibold text-sky-300">Deep Collaboration:</span> Founded on mutual
                          trust and shared understanding
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          <span className="font-semibold text-sky-300">Unwavering Commitment:</span> To achieving your
                          specific goals
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          <span className="font-semibold text-sky-300">Relationship-First:</span> Building partnerships,
                          not prescriptions
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center text-xs text-sky-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-2 h-2 bg-sky-400 rounded-full mr-2 animate-pulse"></div>
                      <span>Collaborative Excellence</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Verifiable Outcomes */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-fuchsia-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-fuchsia-500/20 hover:-translate-y-2">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-fuchsia-500/20 rounded-full blur-lg"></div>
                      <div className="relative p-4 bg-gradient-to-br from-fuchsia-500/30 to-pink-500/30 rounded-full border border-fuchsia-500/30">
                        <Target className="w-10 h-10 text-fuchsia-400" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-fuchsia-300 transition-colors">
                        Verifiable Outcomes, Not Vague Outputs
                      </h3>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-fuchsia-500 to-pink-500 mx-auto opacity-60"></div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          <span className="font-semibold text-fuchsia-300">Measurable Results:</span> Impactful outcomes
                          you can track
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          <span className="font-semibold text-fuchsia-300">Tangible ROI:</span> Clear business value
                          delivery
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          <span className="font-semibold text-fuchsia-300">Relentless Focus:</span> On designing
                          solutions that deliver
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center text-xs text-fuchsia-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-2 h-2 bg-fuchsia-400 rounded-full mr-2 animate-pulse"></div>
                      <span>Measurable Impact</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Pragmatic Innovation */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-lg"></div>
                      <div className="relative p-4 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-full border border-purple-500/30">
                        <Lightbulb className="w-10 h-10 text-purple-400" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
                        Pragmatic Innovation, Applied Expertise
                      </h3>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto opacity-60"></div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          <span className="font-semibold text-purple-300">Cutting-Edge AI:</span> Embracing the latest
                          innovations
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          <span className="font-semibold text-purple-300">Pragmatic Application:</span> Expert
                          implementation for real-world challenges
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          <span className="font-semibold text-purple-300">Maximum Effectiveness:</span> Strategic
                          innovation that works
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                      <span>Strategic Innovation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 - Integrity */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-lg"></div>
                      <div className="relative p-4 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-full border border-emerald-500/30">
                        <ShieldCheck className="w-10 h-10 text-emerald-400" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                        Unwavering Integrity, Absolute Transparency
                      </h3>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto opacity-60"></div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          <span className="font-semibold text-emerald-300">Complete Openness:</span> Transparent in
                          every interaction
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          <span className="font-semibold text-emerald-300">Scrupulous Honesty:</span> Highest ethical
                          standards always
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          <span className="font-semibold text-emerald-300">Every Promise:</span> Accountability in
                          solutions and commitments
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center text-xs text-emerald-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                      <span>Ethical Excellence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. 'Join Us on This Journey' Section */}
        <section className="py-16 md:py-24 bg-gradient-to-t from-slate-900 to-purple-900/50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-8">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-purple-300 to-fuchsia-300">
                The Future of Your Business, Reimagined with AI.
              </span>
              <span className="block mt-2">Let's Build It Together.</span>
            </h2>
            <p className="max-w-3xl mx-auto text-slate-300 text-base md:text-lg mb-10 leading-relaxed">
              NovaGent is more than an AI solutions provider; we are your dedicated partner in navigating and mastering
              the future of work. Proudly based in Houston, Texas, we serve ambitious businesses globally that are ready
              to embrace their AI-powered potential. We invite you to explore our Core Agent Suite, understand our
              unique approach further, and discuss how we can co-create your success story.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-fuchsia-600 hover:from-sky-600 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                <Link href="/solutions/ai-agent-suite">Explore Our AI Agent Suite</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-sky-500 text-sky-400 hover:bg-sky-500/10 hover:text-sky-300 w-full sm:w-auto"
              >
                <Link href="/about-us/meet-the-founders">Connect With Our Founders</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer is handled by layout.tsx */}
    </div>
  )
}
