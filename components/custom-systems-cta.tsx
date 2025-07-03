"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const CustomSystemsCTA = () => {
  return (
    <section className="py-28 sm:py-36 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="relative rounded-3xl p-12 md:p-20 text-center overflow-hidden shadow-2xl shadow-purple-700/30"
        >
          <motion.div
            className="absolute inset-0 z-0"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
            style={{
              backgroundImage: "linear-gradient(120deg, #581c87, #0e7490, #7e22ce, #581c87)", // Dark Purple, Cyan, Magenta, Dark Purple
              backgroundSize: "400% 400%",
            }}
          />
          <div className="absolute inset-0 bg-black/30 z-0"></div> {/* Dark overlay for text contrast */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Let's Architect Your Competitive Advantage.
            </h2>
            <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-slate-200">
              Our most powerful partnerships begin with a conversation about your biggest challenges. If you're ready to
              explore how a custom-built AI agentic system can transform your business, contact our senior solutions
              team to schedule a confidential strategic consultation.
            </p>
            <div className="mt-12">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-white text-slate-950 hover:bg-slate-200 rounded-lg font-semibold px-6 sm:px-10 py-4 sm:py-7 text-base sm:text-lg shadow-xl
                           transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/30 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-purple-600"
              >
                <Link href="/contact">Schedule a Strategic Consultation</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CustomSystemsCTA
