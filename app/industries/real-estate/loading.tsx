import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="bg-slate-950 text-white min-h-screen p-6 md:p-12">
      <div className="container mx-auto">
        {/* Hero section skeleton */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <Skeleton className="h-8 w-40 bg-slate-800 mb-4" />
            <Skeleton className="h-16 w-full bg-slate-800 mb-4" />
            <Skeleton className="h-16 w-3/4 bg-slate-800 mb-6" />
            <Skeleton className="h-12 w-64 bg-slate-800" />
          </div>
          <Skeleton className="h-80 w-full bg-slate-800 rounded-xl" />
        </div>

        {/* Challenges section skeleton */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Skeleton className="h-8 w-40 mx-auto bg-slate-800 mb-4" />
            <Skeleton className="h-12 w-96 mx-auto bg-slate-800 mb-4" />
            <Skeleton className="h-8 w-80 mx-auto bg-slate-800" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-64 w-full bg-slate-800 rounded-xl" />
            ))}
          </div>
        </div>

        {/* Solutions section skeleton */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Skeleton className="h-8 w-40 mx-auto bg-slate-800 mb-4" />
            <Skeleton className="h-12 w-96 mx-auto bg-slate-800 mb-4" />
            <Skeleton className="h-8 w-80 mx-auto bg-slate-800" />
          </div>
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-40 w-full bg-slate-800 rounded-xl" />
            ))}
          </div>
        </div>

        {/* CTA section skeleton */}
        <div className="text-center">
          <Skeleton className="h-12 w-96 mx-auto bg-slate-800 mb-6" />
          <Skeleton className="h-8 w-80 mx-auto bg-slate-800 mb-8" />
          <Skeleton className="h-14 w-64 mx-auto bg-slate-800" />
        </div>
      </div>
    </div>
  )
}
