import { Button } from "@/components/ui/button"
import Link from "next/link"
import AnimatedBackground from "@/components/animated-background"

export default function OurTeamPage() {
  const pageTitle = "Our Team"
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-slate-50">
      <main className="flex-grow">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <AnimatedBackground />
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-400 to-fuchsia-400">
              {pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              Detailed information for our {pageTitle} page is currently being developed. Meet the innovators and
              experts behind NovaGent soon.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-sky-600 hover:from-emerald-600 hover:to-sky-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
        <section className="py-16 bg-slate-800/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-semibold mb-8 text-emerald-400">Our Experts</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              We're assembling detailed profiles of our talented team members. Check back to learn about their
              contributions.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
