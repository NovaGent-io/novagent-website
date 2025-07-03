export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-50">
      <main className="flex-grow">
        {/* Hero Section Skeleton */}
        <section className="relative py-24 md:py-32 overflow-hidden border-b border-slate-700/50">
          <div className="container mx-auto px-6 md:px-8 relative z-10 text-center animate-pulse">
            <div className="mb-6 inline-block p-3 bg-slate-800/50 rounded-xl h-20 w-20"></div>
            <div className="h-12 w-3/4 bg-slate-700 rounded-md mx-auto mb-4"></div>
            <div className="h-8 w-1/2 bg-slate-700 rounded-md mx-auto mb-6"></div>
            <div className="h-5 w-full max-w-2xl bg-slate-700 rounded-md mx-auto mb-2"></div>
            <div className="h-5 w-3/4 max-w-xl bg-slate-700 rounded-md mx-auto"></div>
          </div>
        </section>

        {/* Philosophy Section Skeleton */}
        <section className="py-16 md:py-24 bg-slate-900 animate-pulse">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="h-10 w-3/5 bg-slate-700 rounded-md mx-auto mb-6"></div>
              <div className="h-5 w-full bg-slate-700 rounded-md mb-3"></div>
              <div className="h-5 w-5/6 bg-slate-700 rounded-md mb-6 mx-auto"></div>
              <div className="h-5 w-full bg-slate-700 rounded-md mb-3"></div>
              <div className="h-5 w-4/5 bg-slate-700 rounded-md mx-auto"></div>
            </div>
          </div>
        </section>

        {/* Pillars Section Skeleton */}
        <section className="py-16 md:py-24 bg-slate-800/30 border-y border-slate-700/50 animate-pulse">
          <div className="container mx-auto px-6 md:px-8">
            <div className="h-10 w-1/2 bg-slate-700 rounded-md mx-auto mb-12 md:mb-16"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
                  <div className="h-14 w-14 bg-slate-700 rounded-lg mb-4"></div>
                  <div className="h-6 w-3/4 bg-slate-700 rounded-md mb-3"></div>
                  <div className="h-4 w-full bg-slate-700 rounded-md mb-2"></div>
                  <div className="h-4 w-5/6 bg-slate-700 rounded-md"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shared Responsibility & Evolving Defenses Sections Skeleton (Simplified) */}
        {[...Array(2)].map((_, i) => (
          <section
            key={i}
            className={`py-16 md:py-24 ${i === 0 ? "bg-slate-900" : "bg-slate-800/30 border-y border-slate-700/50"} animate-pulse`}
          >
            <div className="container mx-auto px-6 md:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <div className="mb-6 inline-block p-3 bg-slate-800/50 rounded-xl h-16 w-16"></div>
                <div className="h-10 w-3/5 bg-slate-700 rounded-md mx-auto mb-6"></div>
                <div className="h-5 w-full bg-slate-700 rounded-md mb-3"></div>
                <div className="h-5 w-5/6 bg-slate-700 rounded-md mx-auto"></div>
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section Skeleton */}
        <section className="py-16 md:py-24 bg-slate-900 animate-pulse">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center bg-slate-800 p-8 md:p-12 rounded-xl shadow-2xl border border-slate-700">
              <div className="mb-6 inline-block p-3 bg-slate-700/50 rounded-xl h-16 w-16"></div>
              <div className="h-10 w-3/5 bg-slate-700 rounded-md mx-auto mb-6"></div>
              <div className="h-5 w-full bg-slate-700 rounded-md mb-3"></div>
              <div className="h-5 w-5/6 bg-slate-700 rounded-md mb-6 mx-auto"></div>
              <div className="h-6 w-1/2 bg-slate-700 rounded-md mx-auto mb-8"></div>
              <div className="h-5 w-3/4 bg-slate-700 rounded-md mx-auto"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
