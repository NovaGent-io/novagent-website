export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900 text-slate-50 p-6">
      <div className="animate-pulse flex flex-col items-center space-y-6">
        <div className="h-10 w-3/4 bg-slate-700 rounded-md"></div>
        <div className="h-6 w-1/2 bg-slate-700 rounded-md"></div>
        <div className="h-12 w-40 bg-sky-700 rounded-lg"></div>
      </div>
      <p className="mt-8 text-lg text-slate-400">Loading Our Story & Mission...</p>
    </div>
  )
}
