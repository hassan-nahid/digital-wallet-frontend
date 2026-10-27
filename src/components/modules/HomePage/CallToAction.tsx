import { Link } from "react-router";

const CallToAction = () => {
  return (
    <section className="bg-[#12B76A] text-[#04170E] w-full">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 lg:py-20 flex flex-wrap items-center justify-between gap-8">
        <div className="flex-1 min-w-[280px] lg:min-w-[420px] flex flex-col gap-3.5">
          <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.04] tracking-[-0.035em] text-balance">
            Open a wallet that tells you the cost up front.
          </h2>
          <p className="m-0 text-lg leading-relaxed opacity-85 max-w-[540px]">
            Create a personal wallet, or apply to become an agent and earn on every cash out.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/register"
            className="btn px-7 py-4 rounded-xl text-base font-bold text-white bg-[#04170E] hover:bg-[#082316] transition-all shadow-md"
          >
            Create account
          </Link>
          <Link
            to="/register"
            className="btn px-7 py-4 rounded-xl text-base font-bold text-[#04170E] border-2 border-[#04170E] hover:bg-[#04170E]/10 transition-all"
          >
            Become an agent
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;