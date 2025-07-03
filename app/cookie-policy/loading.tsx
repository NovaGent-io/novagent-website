import { Cookie } from "lucide-react"

export default function CookiePolicyLoading() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Skeleton */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <Cookie className="h-8 w-8 text-blue-600" />
            <div className="h-10 bg-slate-200 rounded w-64 animate-pulse"></div>
          </div>
          <div className="h-6 bg-slate-200 rounded w-96 animate-pulse"></div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 md:p-12">
            <div className="space-y-8">
              {/* Introduction skeleton */}
              <div className="space-y-4">
                <div className="h-4 bg-slate-200 rounded w-32 animate-pulse"></div>
                <div className="h-4 bg-slate-200 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-slate-200 rounded w-3/4 animate-pulse"></div>
              </div>

              {/* Section skeletons */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full animate-pulse"></div>
                    <div className="h-6 bg-slate-200 rounded w-48 animate-pulse"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-200 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-slate-200 rounded w-5/6 animate-pulse"></div>
                    <div className="h-4 bg-slate-200 rounded w-4/5 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
