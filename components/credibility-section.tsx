export default function CredibilitySection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Subtle decorative element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-full opacity-50"></div>

        <div className="text-center max-w-3xl mx-auto pt-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400">
              Expertise. Partnership.
            </span>
            <br />
            <span className="text-white">A Relentless Focus on Your Success.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
            We don't just deploy AI; we partner with you, providing continuous strategic oversight and expert management
            to ensure your AI agents become an invaluable, evolving asset for your business.
          </p>
        </div>
      </div>
    </section>
  )
}
