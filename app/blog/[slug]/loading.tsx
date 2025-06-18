import { Skeleton } from "@/components/ui/skeleton"

export default function ArticleLoading() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section Skeleton */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-950/50 to-slate-950" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-6 w-32 mb-8 bg-slate-800" />

            <div className="flex gap-4 mb-6">
              <Skeleton className="h-6 w-24 bg-slate-800" />
              <Skeleton className="h-6 w-32 bg-slate-800" />
              <Skeleton className="h-6 w-20 bg-slate-800" />
            </div>

            <Skeleton className="h-16 w-full mb-6 bg-slate-800" />
            <Skeleton className="h-12 w-3/4 mb-8 bg-slate-800" />

            <div className="flex items-center gap-4 mb-8">
              <Skeleton className="h-12 w-12 rounded-full bg-slate-800" />
              <div>
                <Skeleton className="h-5 w-32 mb-2 bg-slate-800" />
                <Skeleton className="h-4 w-40 bg-slate-800" />
              </div>
            </div>

            <div className="flex gap-3">
              <Skeleton className="h-10 w-24 bg-slate-800" />
              <Skeleton className="h-10 w-24 bg-slate-800" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Skeleton */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-[400px] md:h-[500px] w-full rounded-2xl bg-slate-800" />
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Skeleton className="h-32 w-full bg-slate-800 rounded-2xl" />

            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-8 w-3/4 bg-slate-800" />
                <Skeleton className="h-24 w-full bg-slate-800" />
                <Skeleton className="h-32 w-full bg-slate-800 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
