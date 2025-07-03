import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileX } from "lucide-react"

export default function ArticleNotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <FileX className="h-24 w-24 text-slate-600 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
        <p className="text-slate-400 mb-8">The article you're looking for doesn't exist or may have been moved.</p>
        <Link href="/blog">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>
    </div>
  )
}
