import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B2318] text-white hero-grid-pattern w-full">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div
          id="top"
          className="flex flex-wrap items-center justify-between gap-10 lg:gap-14 py-14 lg:py-20"
        >
          {/* Left Column: Heading, Badges, CTAs, Highlights */}
          <div className="flex-1 min-w-[280px] lg:min-w-[480px] flex flex-col gap-7">
            {/* Pill Badge */}
            <div className="inline-flex self-start items-center gap-2.5 px-3.5 py-1.5 border border-[#3DE8A0]/40 rounded-full font-['JetBrains_Mono',monospace] text-xs tracking-wider uppercase text-[#3DE8A0] bg-[#3DE8A0]/5">
              Wallet for users, agents and admins
            </div>

            {/* Main Headline */}
            <h1 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[40px] sm:text-[54px] lg:text-[68px] leading-[1.03] tracking-[-0.035em] text-balance">
              A wallet where the fee is{" "}
              <span className="text-[#3DE8A0]">never a surprise.</span>
            </h1>

            {/* Subtitle */}
            <p className="m-0 max-w-[520px] text-lg sm:text-[19px] leading-[1.55] text-[#B7CCC0]">
              Send money, add funds and cash out through agents. WalletX shows
              exactly what each transaction costs before you confirm it, and who
              earns what on the other side.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap gap-3.5 pt-1">
              <Link
                to="/register"
                className="btn px-6.5 py-3.5 rounded-xl text-base font-bold text-[#04170E] bg-[#3DE8A0] hover:bg-[#32d992] shadow-sm transition-all"
              >
                Create your wallet
              </Link>
              <a
                href="#pricing"
                className="btn px-6.5 py-3.5 rounded-xl text-base font-semibold text-white border border-white/30 hover:border-white/50 hover:bg-white/5 transition-all"
              >
                Try the fee calculator
              </a>
            </div>

            {/* 3 Trust Features */}
            <div className="flex flex-wrap gap-x-8 gap-y-3.5 pt-3 text-sm text-[#B7CCC0]">
              <div className="flex items-center gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3DE8A0"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
                </svg>
                <span>Instant transfers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3DE8A0"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="5" y="11" width="14" height="9" rx="2" />
                  <path d="M8 11V8a4 4 0 018 0v3" />
                </svg>
                <span>Secure by design</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3DE8A0"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
                </svg>
                <span>Spending insights</span>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Phone Mockup & Floating Settled Badge */}
          <div className="flex-[0_1_380px] w-full max-w-[380px] mx-auto relative py-2 select-none">
            {/* Phone Chassis */}
            <div className="w-[290px] mx-auto bg-[#050F0A] rounded-[46px] p-2.5 shadow-[0_40px_90px_rgba(0,0,0,0.5)] border border-white/10">
              <div className="bg-[#F3F6F4] rounded-[37px] px-4 py-6 text-[#0C1A14] flex flex-col gap-4.5">
                {/* Header within screen */}
                <div className="flex items-center justify-between">
                  <span className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[17px] tracking-tight">
                    WalletX
                  </span>
                  <span className="text-xs font-semibold text-[#4A5D54]">
                    Personal
                  </span>
                </div>

                {/* Available Balance Card */}
                <div className="bg-[#12B76A] rounded-[20px] p-4 text-[#04170E] flex flex-col gap-3.5 shadow-sm">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold opacity-75">
                      Available balance
                    </span>
                    <span className="font-['JetBrains_Mono','Noto_Sans_Bengali',monospace] font-bold text-[26px] tracking-tight">
                      ৳24,580.00
                    </span>
                  </div>

                  {/* 3 Quick Action Buttons */}
                  <div className="flex gap-1.5">
                    <div className="flex-1 flex flex-col items-center gap-1.5 py-2 rounded-xl bg-[#04170E] text-white text-[11px] font-semibold">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3DE8A0"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                      <span>Send</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1.5 py-2 rounded-xl bg-[#04170E] text-white text-[11px] font-semibold">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3DE8A0"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                      <span>Add</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1.5 py-2 rounded-xl bg-[#04170E] text-white text-[11px] font-semibold">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3DE8A0"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 5v14M6 13l6 6 6-6" />
                      </svg>
                      <span>Cash out</span>
                    </div>
                  </div>
                </div>

                {/* Recent Activity Mini-Feed */}
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold tracking-wider uppercase text-[#4A5D54] mb-1">
                    Recent activity
                  </span>

                  {/* Row 1 */}
                  <div className="flex items-center gap-2.5 py-2.5 border-b border-[#D9E2DC]">
                    <span className="w-8 h-8 rounded-full bg-[#E1EBE5] flex items-center justify-center shrink-0">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0C1A14"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </span>
                    <span className="flex-1 min-w-0 flex flex-col">
                      <span className="text-[13px] font-semibold truncate">
                        Sent to Nusrat
                      </span>
                      <span className="text-[11px] text-[#4A5D54]">Fee ৳10</span>
                    </span>
                    <span className="font-['JetBrains_Mono','Noto_Sans_Bengali',monospace] text-xs font-bold text-[#0C1A14]">
                      −৳1,500
                    </span>
                  </div>

                  {/* Row 2 */}
                  <div className="flex items-center gap-2.5 py-2.5 border-b border-[#D9E2DC]">
                    <span className="w-8 h-8 rounded-full bg-[#CDEFDD] flex items-center justify-center shrink-0">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#087F4C"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                    <span className="flex-1 min-w-0 flex flex-col">
                      <span className="text-[13px] font-semibold truncate">
                        Added from bank
                      </span>
                      <span className="text-[11px] text-[#4A5D54]">No fee</span>
                    </span>
                    <span className="font-['JetBrains_Mono','Noto_Sans_Bengali',monospace] text-xs font-bold text-[#087F4C]">
                      +৳10,000
                    </span>
                  </div>

                  {/* Row 3 */}
                  <div className="flex items-center gap-2.5 py-2.5">
                    <span className="w-8 h-8 rounded-full bg-[#E1EBE5] flex items-center justify-center shrink-0">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0C1A14"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 5v14M6 13l6 6 6-6" />
                      </svg>
                    </span>
                    <span className="flex-1 min-w-0 flex flex-col">
                      <span className="text-[13px] font-semibold truncate">
                        Cash out, agent
                      </span>
                      <span className="text-[11px] text-[#4A5D54]">Fee ৳20</span>
                    </span>
                    <span className="font-['JetBrains_Mono','Noto_Sans_Bengali',monospace] text-xs font-bold text-[#0C1A14]">
                      −৳2,000
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Glassmorphic Settled Fee Badge */}
            <div className="absolute left-0 bottom-11 w-[220px] bg-white text-[#0C1A14] rounded-2xl p-4 shadow-[0_18px_40px_rgba(0,0,0,0.35)] flex flex-col gap-2 border border-[#D9E2DC]">
              <span className="font-['JetBrains_Mono',monospace] text-[10px] tracking-wider uppercase text-[#087F4C] font-bold">
                Cash out settled
              </span>
              <span className="text-[13px] font-semibold leading-tight">
                ৳20 fee on ৳2,000, split in the same second
              </span>
              <div className="flex h-1.5 rounded-full overflow-hidden bg-[#E1EBE5]">
                <span className="w-[40%] bg-[#12B76A]" />
                <span className="w-[60%] bg-[#0B2318]" />
              </div>
              <div className="flex justify-between text-[11px] text-[#4A5D54] font-medium">
                <span>Agent ৳8</span>
                <span>Admin ৳12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
