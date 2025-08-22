import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <span className="text-yellow-500">
          <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fef9c3" />
            <path stroke="#f59e42" strokeWidth="2" strokeLinecap="round" d="M12 8v4m0 4h.01" />
          </svg>
        </span>
        <h1 className="text-3xl font-bold text-yellow-600">Something went wrong</h1>
        <p className="text-muted-foreground text-lg max-w-md">An unexpected error has occurred. Please try again later or contact support.</p>
      </div>
      <Button asChild className="mt-4 cursor-pointer">
        <Link to="/">Go to Home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;