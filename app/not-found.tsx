import { Button } from "@/components/ui/button";
import { ArrowLeft, FileX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md">
        <FileX className="h-20 w-20 md:h-24 md:w-24 text-slate-600 mx-auto mb-6" />
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-400 mb-8 text-base sm:text-lg">
          Oops! The page you&apos;re looking for doesn&apos;t exist or may have
          been moved.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4">
          <Button
            asChild
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 text-base"
          >
            <a href="/" className="flex items-center justify-center">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Home
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto text-slate-300 border-slate-600 hover:bg-slate-700 hover:text-white px-6 py-3 text-base"
          >
            <a href="/contact">Contact Support</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
