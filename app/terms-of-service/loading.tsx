import { Scale } from "lucide-react"

export default function TermsOfServiceLoading() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Skeleton */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <Scale className="h-8 w-8 text-blue-600" />
            <div className="h-10 bg-slate-200 rounded w-64 animate-pulse"></div>
          </div>
          <div className="h-6 bg-slate-200 rounded w-48 animate-pulse"></div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12">
          {/* Section skeletons */}
          {[...Array(10)].map((_, i) => (
            <div key={i} className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 rounded-full w-8 h-8 mr-3"></div>
                <div className="h-8 bg-slate-200 rounded w-80 animate-pulse"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
                <div className="h-4 bg-slate-200 rounded w-5/6 animate-pulse"></div>
                <div className="h-4 bg-slate-200 rounded w-4/6 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
