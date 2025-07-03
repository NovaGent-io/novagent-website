"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Mail, Send } from "lucide-react"

export default function JMMissionConnect() {
  return (
    <section id="jm-connect" className="py-20 md:py-32 bg-gradient-to-br from-purple-950 via-slate-950 to-cyan-950">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 text-center"
      >
        <Mail className="h-16 w-16 md:h-20 md:w-20 text-purple-400 mx-auto mb-8" />
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
          See a Future with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">NovaGent?</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          We may not have a specific role listed today, but our team is always growing. If our mission resonates and you
          believe your unique talents can contribute, we&apos;re eager to hear from you.
        </p>
        <p className="text-lg text-slate-300 mb-10">
          Reach out to our talent team at:{" "}
          <a
            href="mailto:talent@novagent.ai"
            className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4"
          >
            talent@novagent.ai
          </a>
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:from-cyan-600 hover:via-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-10 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 text-base md:text-lg group"
          asChild
        >
          {/* Updated this part: if it's an external mailto link, <a> is fine. If it was an internal NextLink, ensure it's a single child */}
          {/* The previous change to Link href="/contact" was in a different request. This component uses mailto: */}
          <a href="mailto:talent@novagent.ai?subject=NovaGent%20Talent%20Inquiry">
            <span className="flex items-center justify-center">
              {" "}
              {/* Wrapper span */}
              Email Our Talent Team{" "}
              <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </Button>
      </motion.div>
    </section>
  )
}
