import { Skeleton } from "@/components/ui/skeleton"

export default function MeetTheFoundersLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section Skeleton */}
      <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Skeleton className="h-12 w-3/4 mx-auto mb-6 bg-slate-800" />
          <Skeleton className="h-24 w-full max-w-3xl mx-auto bg-slate-800" />
        </div>
      </div>

      {/* Founder Profiles Section Skeleton */}
      <div className="py-16 md:py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Founder Skeleton */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-20">
            <div className="w-full md:w-2/5">
              <Skeleton className="aspect-[4/5] w-full max-w-md mx-auto md:mx-0 rounded-lg bg-slate-200 dark:bg-slate-800" />
            </div>
            <div className="w-full md:w-3/5 mt-8 md:mt-0">
              <Skeleton className="h-8 w-48 mb-2 bg-slate-200 dark:bg-slate-800" />
              <Skeleton className="h-6 w-64 mb-4 bg-slate-200 dark:bg-slate-800" />
              <Skeleton className="h-4 w-24 mb-6 bg-slate-200 dark:bg-slate-800" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-full bg-slate-200 dark:bg-slate-800" />
                <Skeleton className="h-4 w-full bg-slate-200 dark:bg-slate-800" />
                <Skeleton className="h-4 w-full bg-slate-200 dark:bg-slate-800" />
                <Skeleton className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800" />
              </div>
            </div>
          </div>

          {/* Second Founder Skeleton */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
            <div className="w-full md:w-2/5">
              <Skeleton className="aspect-[4/5] w-full max-w-md mx-auto md:mx-0 rounded-lg bg-slate-200 dark:bg-slate-800" />
            </div>
            <div className="w-full md:w-3/5 mt-8 md:mt-0">
              <Skeleton className="h-8 w-48 mb-2 bg-slate-200 dark:bg-slate-800" />
              <Skeleton className="h-6 w-64 mb-4 bg-slate-200 dark:bg-slate-800" />
              <Skeleton className="h-4 w-24 mb-6 bg-slate-200 dark:bg-slate-800" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-full bg-slate-200 dark:bg-slate-800" />
                <Skeleton className="h-4 w-full bg-slate-200 dark:bg-slate-800" />
                <Skeleton className="h-4 w-full bg-slate-200 dark:bg-slate-800" />
                <Skeleton className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section Skeleton */}
      <div className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Skeleton className="h-8 w-64 mx-auto mb-8 bg-slate-200 dark:bg-slate-800" />
            <Skeleton className="h-32 w-full mx-auto bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>
      </div>

      {/* CTA Section Skeleton */}
      <div className="py-16 md:py-24 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Skeleton className="h-8 w-64 mx-auto mb-6 bg-blue-500" />
          <Skeleton className="h-16 w-full max-w-2xl mx-auto mb-8 bg-blue-500" />
          <Skeleton className="h-12 w-48 mx-auto bg-white" />
        </div>
      </div>
    </div>
  )
}
