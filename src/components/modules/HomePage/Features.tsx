import { Link } from "react-router";

const Features = () => {
  return (
    <section id="roles" className="bg-[#F3F6F4] scroll-mt-20 w-full">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 lg:py-24 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-3.5 max-w-[680px]">
          <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#087F4C]">
            One wallet, three roles
          </span>
          <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.06] tracking-[-0.03em] text-[#0C1A14] text-balance">
            Built for the whole chain, from the user to the ledger.
          </h2>
          <p className="m-0 text-lg leading-[1.55] text-[#4A5D54]">
            Each role gets its own tools and its own limits. Every transaction between them is tracked in real time.
          </p>
        </div>

        {/* 3 Role Cards */}
        <div className="flex flex-wrap gap-5 items-stretch">
          {/* Card 1: Personal User (Highlighted) */}
          <div className="flex-1 min-w-[280px] lg:min-w-[320px] bg-white border-2 border-[#12B76A] rounded-3xl p-7 sm:p-8 flex flex-col gap-5.5 shadow-sm">
            <div className="flex flex-col gap-2.5">
              <span className="self-start px-3 py-1 rounded-full bg-[#12B76A] text-[#04170E] text-xs font-bold">
                Most popular
              </span>
              <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-wider uppercase text-[#4A5D54]">
                Personal user
              </span>
              <span className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-4xl tracking-tight text-[#0C1A14]">
                Free
              </span>
              <span className="text-[15px] leading-relaxed text-[#4A5D54]">
                For people managing their own money. Up to ৳50,000 per transaction.
              </span>
            </div>

            {/* Feature Checklist */}
            <div className="flex flex-col gap-3 text-[15px] leading-snug text-[#0C1A14]">
              <div className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#087F4C"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
                <span>Add money up to ৳50,000 per transaction</span>
              </div>
              <div className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#087F4C"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
                <span>Send money free under ৳1,000, ৳10 up to ৳20,000, ৳15 above</span>
              </div>
              <div className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#087F4C"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
                <span>Cash out at ৳10 per ৳1,000 through agents</span>
              </div>
              <div className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#087F4C"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
                <span>Transaction history and spending analytics</span>
              </div>
              <div className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#087F4C"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
                <span>Mobile app access and standard support</span>
              </div>
            </div>

            <Link
              to="/register"
              className="btn mt-auto text-center py-3.5 px-5 rounded-xl text-base font-bold text-[#04170E] bg-[#12B76A] hover:bg-[#0fa968] transition-all"
            >
              Start now
            </Link>
          </div>

          {/* Card 2: Agent */}
          <div className="flex-1 min-w-[280px] lg:min-w-[320px] bg-white border border-[#D9E2DC] rounded-3xl p-7 sm:p-8 flex flex-col gap-5.5 shadow-sm">
            <div className="flex flex-col gap-2.5">
              <span className="self-start px-3 py-1 rounded-full bg-[#E1EBE5] text-[#0C1A14] text-xs font-bold">
                Earn money
              </span>
              <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-wider uppercase text-[#4A5D54]">
                Agent
              </span>
              <span className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-4xl tracking-tight text-[#0C1A14]">
                Commission
              </span>
              <span className="text-[15px] leading-relaxed text-[#4A5D54]">
                Earn by handling cash for your community. Min ৳50, max ৳100,000.
              </span>
            </div>

            <div className="flex flex-col gap-3 text-[15px] leading-snug text-[#0C1A14]">
              <div className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#087F4C"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
                <span>Cash in: help users add money, free for them</span>
              </div>
              <div className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#087F4C"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
                <span>Cash out: earn ৳4 per ৳1,000 in commission</span>
              </div>
              <div className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#087F4C"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
                <span>Top up your float from admin, up to ৳100,000</span>
              </div>
              <div className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#087F4C"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
                <span>Agent dashboard with real-time transaction tracking</span>
              </div>
              <div className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#087F4C"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
                <span>Commission reports, priority support and training</span>
              </div>
            </div>

            <Link
              to="/register"
              className="btn mt-auto text-center py-3.5 px-5 rounded-xl text-base font-bold text-[#0C1A14] bg-[#E1EBE5] hover:bg-[#d2ded7] transition-all"
            >
              Become an agent
            </Link>
          </div>

          {/* Card 3: Admin (Dark #0B2318) */}
          <div className="flex-1 min-w-[280px] lg:min-w-[320px] bg-[#0B2318] text-white rounded-3xl p-7 sm:p-8 flex flex-col gap-5.5 shadow-xl border border-white/10">
            <div className="flex flex-col gap-2.5">
              <span className="self-start px-3 py-1 rounded-full bg-[#3DE8A0]/15 text-[#3DE8A0] text-xs font-bold">
                Enterprise
              </span>
              <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-wider uppercase text-[#9DB5A8]">
                Admin
              </span>
              <span className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-4xl tracking-tight text-white">
                Enterprise
              </span>
              <span className="text-[15px] leading-relaxed text-[#B7CCC0]">
                Complete system management and oversight of every wallet and agent.
              </span>
            </div>

            <div className="flex flex-col gap-3 text-[15px] leading-snug text-[#E4EFE9]">
              <div className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3DE8A0"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
                <span>Manage every transaction type</span>
              </div>
              <div className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3DE8A0"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
                <span>Cash in to agents up to ৳100,000</span>
              </div>
              <div className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3DE8A0"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
                <span>Withdraw up to ৳100,000 with no fees</span>
              </div>
              <div className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3DE8A0"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
                <span>Earn ৳6 per ৳1,000 on cash outs, plus all send-money fees</span>
              </div>
              <div className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3DE8A0"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
                <span>User and agent management, reporting and configuration</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn mt-auto text-center py-3.5 px-5 rounded-xl text-base font-bold text-[#04170E] bg-[#3DE8A0] hover:bg-[#32d992] transition-all"
            >
              Contact sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;