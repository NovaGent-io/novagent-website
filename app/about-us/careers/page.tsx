import { Button } from "@/components/ui/button"
import Link from "next/link"
import AnimatedBackground from "@/components/animated-background"

export default function CareersPage() {
  const pageTitle = "Careers"
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-sky-900 text-slate-50">
      <main className="flex-grow">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <AnimatedBackground />
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-sky-400 to-emerald-400">
              {pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              Detailed information for our {pageTitle} page is currently being developed. Explore opportunities to join
              the NovaGent team soon.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-sky-600 hover:from-amber-600 hover:to-sky-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact">Express Interest</Link>
            </Button>
          </div>
        </section>
        <section className="py-16 bg-slate-800/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-semibold mb-8 text-amber-400">Join Our Team</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              We're looking for talented individuals passionate about AI. Current openings and application details will
              be posted here.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
