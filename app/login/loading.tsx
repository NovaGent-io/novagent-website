import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function LoginLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-950 dark:to-purple-950 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-1000" />

      <div className="relative w-full max-w-md">
        {/* Logo and Branding Skeleton */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <Skeleton className="h-12 w-12 rounded-lg" />
            <Skeleton className="h-8 w-32" />
          </div>
          <Skeleton className="h-9 w-48 mx-auto mb-2" />
          <Skeleton className="h-5 w-64 mx-auto" />
        </div>

        <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-white/20 dark:border-slate-800/50 shadow-xl">
          <CardHeader className="space-y-1 pb-6">
            <Skeleton className="h-6 w-48 mx-auto" />
            <Skeleton className="h-4 w-64 mx-auto" />
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Form Skeleton */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-11 w-full" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-11 w-full" />
              </div>

              <Skeleton className="h-11 w-full" />
            </div>

            <Skeleton className="h-4 w-32 mx-auto" />

            {/* Divider */}
            <div className="relative">
              <Skeleton className="h-px w-full" />
            </div>

            {/* SSO Skeleton */}
            <div className="space-y-3">
              <Skeleton className="h-3 w-32 mx-auto" />
              <Skeleton className="h-11 w-full" />
            </div>
          </CardContent>
        </Card>

        {/* Footer Skeleton */}
        <div className="text-center mt-6">
          <Skeleton className="h-4 w-48 mx-auto" />
        </div>
      </div>
    </div>
  )
}
