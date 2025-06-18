import { Card, CardContent } from "@/components/ui/card"

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Featured Article Skeleton */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 animate-pulse" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="h-6 w-32 bg-slate-700 rounded animate-pulse mb-4" />
            <div className="h-12 w-full bg-slate-700 rounded animate-pulse mb-4" />
            <div className="h-12 w-3/4 bg-slate-700 rounded animate-pulse mb-6" />
            <div className="h-6 w-full bg-slate-700 rounded animate-pulse mb-2" />
            <div className="h-6 w-2/3 bg-slate-700 rounded animate-pulse mb-8" />
            <div className="h-12 w-40 bg-slate-700 rounded animate-pulse" />
          </div>
        </div>
      </section>

      {/* Search and Categories Skeleton */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-14 w-full bg-slate-800 rounded animate-pulse mb-8" />
            <div className="flex flex-wrap gap-3">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="h-10 w-32 bg-slate-800 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="bg-slate-900/50 border-slate-800 overflow-hidden">
                  <div className="h-48 bg-slate-800 animate-pulse" />
                  <CardContent className="p-6">
                    <div className="h-6 w-3/4 bg-slate-800 rounded animate-pulse mb-3" />
                    <div className="h-4 w-full bg-slate-800 rounded animate-pulse mb-2" />
                    <div className="h-4 w-2/3 bg-slate-800 rounded animate-pulse mb-4" />
                    <div className="flex justify-between mb-4">
                      <div className="h-4 w-24 bg-slate-800 rounded animate-pulse" />
                      <div className="h-4 w-20 bg-slate-800 rounded animate-pulse" />
                    </div>
                    <div className="h-10 w-full bg-slate-800 rounded animate-pulse" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Skeleton */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-950 to-magenta-950">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="h-10 w-96 bg-slate-800 rounded animate-pulse mb-6 mx-auto" />
            <div className="h-6 w-full bg-slate-800 rounded animate-pulse mb-2 mx-auto" />
            <div className="h-6 w-3/4 bg-slate-800 rounded animate-pulse mb-8 mx-auto" />
            <div className="h-12 w-64 bg-slate-800 rounded animate-pulse mx-auto" />
          </div>
        </div>
      </section>
    </div>
  )
}
