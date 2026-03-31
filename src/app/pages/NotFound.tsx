import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[calc(100vh-20rem)] flex items-center justify-center bg-gradient-to-br from-amber-50 to-green-50 py-16">
      <div className="text-center px-4">
        <div className="text-9xl font-bold text-amber-900 mb-4">404</div>
        <h1 className="text-4xl font-bold text-amber-900 mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-amber-900 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-white text-amber-900 border-2 border-amber-900 px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}