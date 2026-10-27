import { Link } from "react-router";
import { Lock } from "lucide-react";

const Unauthorized = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center gap-6 p-6 bg-[#F3F6F4] text-[#0C1A14]">
      <div className="flex flex-col items-center gap-3 max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-[#0B2318] text-[#3DE8A0] flex items-center justify-center shadow-sm mb-2">
          <Lock className="w-8 h-8" />
        </div>
        <h1 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl text-[#0C1A14] m-0">
          Access Restricted
        </h1>
        <p className="text-base text-[#4A5D54] m-0">
          You do not have permission to view this page with your current role.
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

export default Unauthorized;