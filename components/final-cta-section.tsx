import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FinalCTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Transform Your Business with NovaGent's Managed AI Agents</h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Stop managing tools and start managing outcomes. Let's discuss how our Core AI Agents can be tailored to your
          unique challenges and drive extraordinary results.
        </p>

        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button
            asChild
            className="h-12 px-8 text-base font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
          >
            <Link href="/contact">Book Your Free Discovery Call</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 px-8 text-base font-medium border-purple-400 text-purple-300 hover:bg-purple-900/50 hover:text-purple-200"
          >
            <Link href="/contact#questions">Have Questions? Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
