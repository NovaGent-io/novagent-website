import { Skeleton } from "@/components/ui/skeleton"

export default function ContactLoading() {
  return (
    <div className="bg-slate-950 text-slate-200">
      <main className="relative overflow-hidden">
        {/* Background Skeleton */}
        <div className="absolute inset-0 bg-slate-950 z-0"></div>

        {/* Hero Section Skeleton */}
        <section className="relative pt-32 pb-20 text-center z-10">
          <div className="container mx-auto px-4">
            <Skeleton className="h-16 w-3/4 md:w-1/2 mx-auto mb-4 bg-slate-800" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-2 bg-slate-800" />
            <Skeleton className="h-6 w-5/6 max-w-2xl mx-auto bg-slate-800" />
          </div>
        </section>

        {/* Main Content Section Skeleton */}
        <section className="relative pb-24 md:pb-32 z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-12">
              {/* Left Side: Form Skeleton */}
              <div className="lg:col-span-3">
                <Skeleton className="h-10 w-52 mb-6 bg-slate-800" />
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-24 bg-slate-800" />
                      <Skeleton className="h-12 w-full bg-slate-800" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-32 bg-slate-800" />
                      <Skeleton className="h-12 w-full bg-slate-800" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-28 bg-slate-800" />
                      <Skeleton className="h-12 w-full bg-slate-800" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-40 bg-slate-800" />
                      <Skeleton className="h-12 w-full bg-slate-800" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-36 bg-slate-800" />
                    <Skeleton className="h-12 w-full bg-slate-800" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-32 bg-slate-800" />
                    <Skeleton className="h-36 w-full bg-slate-800" />
                  </div>
                  <div>
                    <Skeleton className="h-12 w-48 bg-slate-800" />
                  </div>
                </div>
              </div>

              {/* Right Side: Contact Info Skeleton */}
              <div className="lg:col-span-2 lg:border-l lg:border-slate-800 lg:pl-12 flex flex-col justify-between">
                <div>
                  <Skeleton className="h-8 w-48 mb-6 bg-slate-800" />
                  <div className="space-y-6">
                    {/* Contact Item Skeleton */}
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-14 w-14 rounded-lg bg-slate-800 flex-shrink-0" />
                      <div className="space-y-2 w-full">
                        <Skeleton className="h-5 w-24 bg-slate-800" />
                        <Skeleton className="h-5 w-40 bg-slate-800" />
                      </div>
                    </div>
                    {/* Contact Item Skeleton */}
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-14 w-14 rounded-lg bg-slate-800 flex-shrink-0" />
                      <div className="space-y-2 w-full">
                        <Skeleton className="h-5 w-20 bg-slate-800" />
                        <Skeleton className="h-5 w-32 bg-slate-800" />
                      </div>
                    </div>
                    {/* Contact Item Skeleton */}
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-14 w-14 rounded-lg bg-slate-800 flex-shrink-0" />
                      <div className="space-y-2 w-full">
                        <Skeleton className="h-5 w-32 bg-slate-800" />
                        <Skeleton className="h-5 w-28 bg-slate-800" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 lg:mt-0">
                  <Skeleton className="h-6 w-40 mb-4 bg-slate-800" />
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Skeleton className="h-4 w-4 mt-1 mr-3 bg-slate-800 flex-shrink-0" />
                      <Skeleton className="h-4 w-full bg-slate-800" />
                    </div>
                    <div className="flex items-start">
                      <Skeleton className="h-4 w-4 mt-1 mr-3 bg-slate-800 flex-shrink-0" />
                      <Skeleton className="h-4 w-5/6 bg-slate-800" />
                    </div>
                    <div className="flex items-start">
                      <Skeleton className="h-4 w-4 mt-1 mr-3 bg-slate-800 flex-shrink-0" />
                      <Skeleton className="h-4 w-full bg-slate-800" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
