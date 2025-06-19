import Link from "next/link"
import { Linkedin, Twitter, Sparkles, Lightbulb, Target, Zap, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MeetTheFoundersPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>

        {/* Animated Particles/Dots (decorative) */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            A Partnership of Experience & Vision
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            NovaGent was founded by seasoned sales and business leaders who understand firsthand the challenges
            businesses face in driving growth. We've translated that real-world experience into a passion for building
            sophisticated AI solutions that deliver tangible, verifiable outcomes for our partners.
          </p>
        </div>
      </section>

      {/* Founder Profiles Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

          {/* Decorative shapes */}
          <div className="absolute top-20 left-10 w-16 h-16 border-4 border-blue-200/20 rounded-lg transform rotate-12"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border-4 border-purple-200/20 rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-12 h-12 border-4 border-cyan-200/20 transform rotate-45"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Meet Our Founders</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              The visionaries behind NovaGent who are transforming how businesses leverage AI
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* First Founder */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl transform group-hover:scale-[1.03] transition-all duration-300 blur-xl opacity-70"></div>
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Founder Avatar/Symbol */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">S</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-900 rounded-full p-1 shadow-lg">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full p-1">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-2">Sam Shahin</h2>
                <p className="text-lg text-center text-blue-600 dark:text-blue-400 mb-4">CEO and Founder</p>

                <div className="flex justify-center space-x-3 mb-6">
                  <Link
                    href="https://linkedin.com/company/novagent/"
                    className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://twitter.com/Novagent1"
                    className="text-slate-600 hover:text-blue-400 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>

                {/* Expertise Indicators */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                    <Zap className="w-3 h-3 mr-1" /> Leadership
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300">
                    <Target className="w-3 h-3 mr-1" /> B2B Sales
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                    <Lightbulb className="w-3 h-3 mr-1" /> AI Strategy
                  </span>
                </div>

                <div className="space-y-4 text-slate-700 dark:text-slate-300">
                  <p>
                    After spending nearly 15 years leading complex B2B sales in industries from telecom to logistics,
                    the one constant I saw everywhere was talented, driven people being bogged down by repetitive,
                    manual work. It wasn't just inefficient; it was a barrier to growth that was burning out great
                    teams.
                  </p>
                  <p>
                    That's why I founded NovaGent. I saw AI not as a way to replace people, but as the ultimate tool to
                    empower them. My focus now is to be the partner I wish I'd had in my previous roles—one who is
                    relentlessly focused on using intelligent automation to solve real-world problems and deliver
                    measurable results.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Founder */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-2xl transform group-hover:scale-[1.03] transition-all duration-300 blur-xl opacity-70"></div>
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Founder Avatar/Symbol */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">Y</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-900 rounded-full p-1 shadow-lg">
                      <div className="bg-gradient-to-r from-purple-600 to-fuchsia-500 rounded-full p-1">
                        <BarChart className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-2">Yagazie Moghalu</h2>
                <p className="text-lg text-center text-purple-600 dark:text-purple-400 mb-4">COO and Co-Founder</p>

                <div className="flex justify-center space-x-3 mb-6">
                  <Link
                    href="https://linkedin.com/company/novagent/"
                    className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://twitter.com/Novagent1"
                    className="text-slate-600 hover:text-blue-400 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>

                {/* Expertise Indicators */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                    <BarChart className="w-3 h-3 mr-1" /> Operations
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/30 dark:text-fuchsia-300">
                    <Target className="w-3 h-3 mr-1" /> Strategy
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300">
                    <Lightbulb className="w-3 h-3 mr-1" /> Solutions Architecture
                  </span>
                </div>

                <div className="space-y-4 text-slate-700 dark:text-slate-300">
                  <p>
                    I've spent my career on the sales and strategy side of B2B tech, helping businesses in software and
                    logistics solve complex operational puzzles. My role was to sit down with C-level leaders and
                    architect solutions, but I quickly saw a huge gap in the market: companies were selling powerful
                    tools, but they weren't selling outcomes.
                  </p>
                  <p>
                    We built NovaGent to fix that. As COO, my job is to ensure our technology and our strategy are
                    perfectly aligned with a client's real-world goals. My passion is seeing intelligent technology come
                    to life, but I know it's the human partnership behind it that truly unlocks its potential and
                    delivers real value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Shared Vision Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
              Our Guiding Philosophy
            </h2>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 text-5xl text-blue-500 opacity-30">"</div>
              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 italic">
                We believe the most powerful AI solutions are built on a foundation of expert human partnership. Our
                entire platform is designed to make sophisticated AI a transparent, reliable, and expertly managed asset
                that delivers undeniable value, allowing our partners to focus on what they do best.
              </p>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 text-5xl text-blue-500 opacity-30">"</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Start a Conversation</h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Ready to explore how NovaGent's AI solutions can transform your business? Our founders are passionate about
            helping companies achieve their goals.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-lg px-8 py-6 h-auto"
          >
            <Link href="/contact">Connect with Our Founders</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
