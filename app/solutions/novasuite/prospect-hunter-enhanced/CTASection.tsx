// CTA Section Component
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">5x Your Pipeline</span>?
        </h2>
        <p className="text-xl text-slate-300 mb-8">
          Join thousands of sales teams using Prospect Hunter to fill their pipeline with qualified opportunities
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          >
            <Link href="/contact">
              Schedule a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="border-slate-700 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
          >
            <Link href="/pricing">
              Try Prospect Hunter Free
            </Link>
          </Button>
        </div>

        <p className="text-sm text-slate-500">
          No credit card required ? 14-day free trial ? Cancel anytime
        </p>
      </div>
    </section>
  )
}