import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Unauthorized = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <span className="text-red-500">
          <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fee2e2" />
            <path stroke="#ef4444" strokeWidth="2" strokeLinecap="round" d="M9.5 9.5l5 5m0-5l-5 5" />
          </svg>
        </span>
        <h1 className="text-3xl font-bold text-red-600">Unauthorized</h1>
        <p className="text-muted-foreground text-lg max-w-md">You do not have permission to access this page.</p>
      </div>
      <Button asChild className="mt-4 cursor-pointer">
        <Link to="/">Go to Home</Link>
      </Button>
    </div>
  );
};

export default Unauthorized;