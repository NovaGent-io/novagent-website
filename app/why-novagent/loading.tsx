import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 text-gray-100 p-6">
      <Loader2 className="h-16 w-16 text-cyan-400 animate-spin mb-6" />
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 mb-4">
        Unveiling the NovaGent Difference...
      </h1>
      <p className="text-lg text-gray-300">Please wait while we prepare the insights into our unique AI approach.</p>
    </div>
  )
}
