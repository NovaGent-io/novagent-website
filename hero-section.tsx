import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"
import Link from "next/link"

// Add an id to the root element for scrolling, or accept a ref
export default function HeroSection({ id }: { id?: string }) {
  return (
    <div id={id} className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900">
      <AnimatedBackground />
      <div className="container relative mx-auto px-4 pt-16 pb-24 sm:px-6 lg:px-8 lg:pt-20 lg:pb-32 z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-black/30 px-4 py-1.5 text-sm font-medium text-fuchsia-400 backdrop-blur-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-fuchsia-400"></span>
            Managed AI for Business Outcomes
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            One Agent.
            <br />
            Infinite Capabilities.
            <br />
            Expertly Managed.
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-xl text-slate-200">
            NovaGent provides a single, powerful AI agent tailored to your exact business needs. Configure its skills, monitor its performance on our transparent platform, and let our experts handle the rest.
          </p>

          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              asChild
              className="h-12 px-8 text-base font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
            >
              <Link href="/contact">Book a Discovery Call</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 px-8 text-base font-medium border-purple-400 text-purple-300 hover:bg-purple-900/50 hover:text-purple-200"
            >
              <Link href="/capabilities">Explore Agent Skills</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full">
          <path
            fill="#ffffff" // Assuming the next section has a white background
            fillOpacity="1"
            d="M0,32L60,37.3C120,43,240,53,360,53.3C480,53,600,43,720,42.7C840,43,960,53,1080,53.3C1200,53,1320,43,1380,37.3L1440,32L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}
