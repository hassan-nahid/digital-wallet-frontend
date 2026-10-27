import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center gap-6 p-6 bg-[#F3F6F4] text-[#0C1A14]">
      <div className="flex flex-col items-center gap-3 max-w-md">
        <span className="font-['JetBrains_Mono',monospace] font-bold text-6xl text-[#0B2318]">
          404
        </span>
        <h1 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl text-[#0C1A14] m-0">
          Page not found
        </h1>
        <p className="text-base text-[#4A5D54] m-0">
          The page you are looking for doesn't exist or has been moved.
        </p>
      </div>
      <Link
        to="/"
        className="btn px-6 py-3 rounded-xl font-bold text-sm text-[#04170E] bg-[#12B76A] hover:bg-[#0fa968] transition-all shadow-sm"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;