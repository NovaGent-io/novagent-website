export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
        <p className="mt-4 text-gray-400">Loading Platform...</p>
      </div>
    </div>
  )
}
