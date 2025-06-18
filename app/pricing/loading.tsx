import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="bg-slate-950 text-gray-100 min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-fuchsia-900">
        <div className="container mx-auto px-6 text-center relative z-10">
          <Skeleton className="h-12 w-3/4 md:h-16 mx-auto mb-6 bg-slate-700" />
          <Skeleton className="h-6 w-full md:w-3/4 max-w-3xl mx-auto mb-8 bg-slate-700" />
          <Skeleton className="h-12 w-52 mx-auto bg-slate-700 rounded-lg" />
        </div>
      </section>

      {/* Philosophy Section Skeleton */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <Skeleton className="h-10 w-1/2 md:w-1/3 mx-auto mb-16 bg-slate-700" />
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-slate-800 border-slate-700 shadow-xl rounded-lg p-6">
                <Skeleton className="h-10 w-10 mx-auto mb-4 rounded-full bg-slate-700" />
                <Skeleton className="h-8 w-3/4 mx-auto mb-4 bg-slate-700" />
                <Skeleton className="h-4 w-full mb-2 bg-slate-700" />
                <Skeleton className="h-4 w-5/6 mx-auto bg-slate-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section Skeleton */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <Skeleton className="h-10 w-1/2 md:w-1/3 mx-auto mb-16 bg-slate-700" />
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-slate-800/50 rounded-lg shadow-lg border border-slate-700"
              >
                <Skeleton className="h-16 w-16 rounded-full bg-slate-700 mb-6" />
                <Skeleton className="h-6 w-3/4 mb-2 bg-slate-700" />
                <Skeleton className="h-4 w-full mb-1 bg-slate-700" />
                <Skeleton className="h-4 w-5/6 bg-slate-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Factors Section Skeleton */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <Skeleton className="h-10 w-1/2 md:w-1/3 mx-auto mb-16 bg-slate-700" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-slate-800 border-slate-700 shadow-lg rounded-lg p-6">
                <Skeleton className="h-10 w-10 mx-auto mb-4 rounded-full bg-slate-700" />
                <Skeleton className="h-6 w-3/4 mx-auto mb-4 bg-slate-700" />
                <Skeleton className="h-4 w-full mb-2 bg-slate-700" />
                <Skeleton className="h-4 w-5/6 mx-auto bg-slate-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section Skeleton */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-purple-950 to-fuchsia-950">
        <div className="container mx-auto px-6 text-center">
          <Skeleton className="h-10 w-3/4 md:h-12 mx-auto mb-6 bg-slate-700" />
          <Skeleton className="h-6 w-full md:w-3/4 max-w-2xl mx-auto mb-10 bg-slate-700" />
          <Skeleton className="h-14 w-64 mx-auto bg-slate-700 rounded-lg" />
        </div>
      </section>
    </div>
  )
}
