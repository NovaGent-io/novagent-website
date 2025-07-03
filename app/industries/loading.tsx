import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedBackground from "@/components/animated-background"
import { MainNavigation } from "@/components/main-navigation"

export default function IndustriesLoading() {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        <MainNavigation />

        <main className="pt-24 pb-16">
          {/* Hero Section Skeleton */}
          <section className="container mx-auto px-4 text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <Skeleton className="h-16 w-3/4 mx-auto mb-6 bg-slate-800" />
              <Skeleton className="h-8 w-full mb-4 bg-slate-800" />
              <Skeleton className="h-8 w-2/3 mx-auto bg-slate-800" />
            </div>
          </section>

          {/* Challenge Buttons Skeleton */}
          <section className="container mx-auto px-4 mb-20">
            <div className="max-w-4xl mx-auto">
              <Skeleton className="h-12 w-1/2 mx-auto mb-12 bg-slate-800" />
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-16 bg-slate-800" />
                ))}
              </div>
            </div>
          </section>

          {/* Featured Industry Skeleton */}
          <section className="container mx-auto px-4 mb-20">
            <div className="max-w-6xl mx-auto">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                      <Skeleton className="h-8 w-32 mb-4 bg-slate-700" />
                      <Skeleton className="h-12 w-3/4 mb-4 bg-slate-700" />
                      <Skeleton className="h-6 w-full mb-2 bg-slate-700" />
                      <Skeleton className="h-6 w-2/3 mb-6 bg-slate-700" />
                      <Skeleton className="h-12 w-48 bg-slate-700" />
                    </div>
                    <Skeleton className="w-full md:w-80 h-64 bg-slate-700" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Industry Grid Skeleton */}
          <section className="container mx-auto px-4 mb-20">
            <div className="max-w-7xl mx-auto">
              <Skeleton className="h-12 w-1/3 mx-auto mb-12 bg-slate-800" />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 16 }).map((_, i) => (
                  <Card key={i} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6 text-center">
                      <Skeleton className="w-12 h-12 mx-auto mb-4 bg-slate-700" />
                      <Skeleton className="h-6 w-3/4 mx-auto bg-slate-700" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom Section Skeleton */}
          <section className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8 md:p-12">
                  <Skeleton className="h-12 w-1/2 mx-auto mb-6 bg-slate-700" />
                  <Skeleton className="h-6 w-full mb-2 bg-slate-700" />
                  <Skeleton className="h-6 w-3/4 mx-auto mb-8 bg-slate-700" />
                  <Skeleton className="h-12 w-32 mx-auto bg-slate-700" />
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
