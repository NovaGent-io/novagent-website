export default function CredibilitySection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 dark:from-slate-900 dark:via-slate-950 dark:to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Subtle decorative element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-full opacity-50"></div>

        <div className="text-center max-w-4xl mx-auto pt-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400">
              Unlock Exponential Growth
            </span>
            <br />
            <span className="text-white">with Custom AI Architectures.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            For organizations with unique operational complexities and ambitious growth 
            targets, our expert team partners with you to architect intelligent automation that 
            solves your most pressing challenges and unlocks new levels of efficiency and 
            innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Explore Custom Solutions
            </button>
            <button className="w-full sm:w-auto bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Schedule a Consultation
            </button>
          </div>

          {/* Optional: Add specialized skills text */}
          <p className="text-sm text-white/70 mt-8">
            + 2 additional specialized skills for industry-specific needs
          </p>
        </div>
      </div>

      {/* Our Collaborative Process Section */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-12 text-white">Our Collaborative Process</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Process steps would go here - I can add them if needed */}
        </div>
      </div>
    </section>
  )
}
