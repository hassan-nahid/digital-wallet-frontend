import { useState } from "react";

const CHIP_VALUES = [500, 1000, 5000, 20000, 50000];

const Pricing = () => {
  const [mode, setMode] = useState<"send" | "cash">("send");
  const [amount, setAmount] = useState<number>(5000);

  const isSend = mode === "send";
  const fmt = (n: number) =>
    "৳" + Number(n).toLocaleString("en-US", { maximumFractionDigits: 2 });
  const r2 = (n: number) => Math.round(n * 100) / 100;

  let fee = 0;
  let feeNote = "";
  let tier = -1;

  if (isSend) {
    if (amount < 1000) {
      fee = 0;
      tier = 0;
      feeNote = "Free under ৳1,000";
    } else if (amount <= 20000) {
      fee = 10;
      tier = 1;
      feeNote = "Flat fee for ৳1,000 to ৳20,000";
    } else {
      fee = 15;
      tier = 2;
      feeNote = "Flat fee above ৳20,000";
    }
  } else {
    fee = r2(amount * 0.01);
    feeNote = "৳10 per ৳1,000";
  }

  const total = r2(amount + fee);

  const sendRows = [
    { label: "Under ৳1,000", value: "Free" },
    { label: "৳1,000 to ৳20,000", value: "৳10" },
    { label: "Above ৳20,000", value: "৳15" },
  ];

  const cashRows = [
    { label: "Fee per ৳1,000", note: "Paid by the user", value: "৳10" },
    { label: "Commission", note: "Earned by the agent", value: "৳4" },
    { label: "Profit", note: "Kept by admin", value: "৳6" },
  ];

  const agentCommission = r2(amount * 0.004);
  const adminProfit = r2(amount * 0.006);

  return (
    <section id="pricing" className="bg-[#F3F6F4] scroll-mt-20 w-full">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 lg:py-24 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-3.5 max-w-[680px]">
          <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#087F4C]">
            Transaction fees
          </span>
          <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.06] tracking-[-0.03em] text-[#0C1A14] text-balance">
            See the fee before you send. Drag to try it.
          </h2>
          <p className="m-0 text-lg leading-[1.55] text-[#4A5D54]">
            Pick a transaction and an amount. The calculator uses the same schedule WalletX charges.
          </p>
        </div>

        {/* Main 2-Column: Calculator + Schedules */}
        <div className="flex flex-wrap gap-6 items-stretch">
          {/* Interactive Calculator Card */}
          <div className="flex-1 min-w-[280px] lg:min-w-[480px] bg-white border border-[#D9E2DC] rounded-3xl p-6 sm:p-7 flex flex-col gap-6 shadow-sm">
            {/* Mode Switcher Tabs */}
            <div className="flex gap-1.5 p-1.5 bg-[#EAF0EC] rounded-2xl">
              <button
                type="button"
                onClick={() => setMode("send")}
                className={`flex-1 py-3 px-3 rounded-xl font-['Figtree',sans-serif] text-[15px] font-bold cursor-pointer transition-all ${
                  isSend
                    ? "bg-[#0B2318] text-white shadow-sm"
                    : "bg-transparent text-[#4A5D54] hover:text-[#0C1A14]"
                }`}
              >
                Send money
              </button>
              <button
                type="button"
                onClick={() => setMode("cash")}
                className={`flex-1 py-3 px-3 rounded-xl font-['Figtree',sans-serif] text-[15px] font-bold cursor-pointer transition-all ${
                  !isSend
                    ? "bg-[#0B2318] text-white shadow-sm"
                    : "bg-transparent text-[#4A5D54] hover:text-[#0C1A14]"
                }`}
              >
                Cash out
              </button>
            </div>

            {/* Amount Slider & Display */}
            <div className="flex flex-col gap-3.5">
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <label
                  htmlFor="amount-slider"
                  className="text-sm font-semibold text-[#4A5D54]"
                >
                  Amount
                </label>
                <span className="font-['JetBrains_Mono','Noto_Sans_Bengali',monospace] font-bold text-3xl sm:text-[38px] tracking-tight text-[#0C1A14]">
                  {fmt(amount)}
                </span>
              </div>

              <input
                id="amount-slider"
                type="range"
                min="100"
                max="50000"
                step="100"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                aria-label="Transaction amount in taka"
                className="w-full cursor-pointer h-2 bg-[#E1EBE5] rounded-lg accent-[#0FA968]"
              />

              {/* Quick Chip Pickers */}
              <div className="flex flex-wrap gap-2 pt-1">
                {CHIP_VALUES.map((val) => {
                  const isActive = amount === val;
                  return (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setAmount(val)}
                      className={`px-3.5 py-2 rounded-full font-['JetBrains_Mono','Noto_Sans_Bengali',monospace] text-xs sm:text-[13px] transition-all cursor-pointer ${
                        isActive
                          ? "border border-[#0B2318] bg-[#0B2318] text-white font-bold"
                          : "border border-[#C9D6CE] bg-white text-[#0C1A14] font-medium hover:border-[#0B2318]"
                      }`}
                    >
                      {fmt(val)}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Breakdown Rows */}
            <div className="flex flex-col border-t border-[#D9E2DC] pt-2">
              <div className="flex justify-between items-center gap-4 py-3 border-b border-[#E4EBE7]">
                <span className="text-[#4A5D54] text-[15px]">Amount</span>
                <span className="font-['JetBrains_Mono','Noto_Sans_Bengali',monospace] font-medium text-[15px] text-[#0C1A14]">
                  {fmt(amount)}
                </span>
              </div>
              <div className="flex justify-between items-center gap-4 py-3 border-b border-[#E4EBE7]">
                <div className="flex flex-col">
                  <span className="text-[#4A5D54] text-[15px]">Fee</span>
                  <span className="text-xs text-[#4A5D54]">{feeNote}</span>
                </div>
                <span className="font-['JetBrains_Mono','Noto_Sans_Bengali',monospace] font-bold text-[15px] text-[#087F4C]">
                  {fee === 0 ? "Free" : fmt(fee)}
                </span>
              </div>
              <div className="flex justify-between items-center gap-4 pt-4">
                <span className="font-bold text-base text-[#0C1A14]">
                  Total from your wallet
                </span>
                <span className="font-['JetBrains_Mono','Noto_Sans_Bengali',monospace] font-bold text-xl text-[#0C1A14]">
                  {fmt(total)}
                </span>
              </div>
            </div>

            {/* Split Breakdown Box (Dark) */}
            <div className="bg-[#0B2318] text-white rounded-2xl p-4 sm:p-5 flex flex-col gap-3.5">
              <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#3DE8A0]">
                {isSend ? "Where the fee goes" : "Who earns the fee"}
              </span>

              {fee > 0 ? (
                <>
                  {/* Progress Bar Split */}
                  <div className="flex h-2.5 rounded-full overflow-hidden bg-white/10">
                    {isSend ? (
                      <span className="w-full bg-[#3DE8A0]" />
                    ) : (
                      <>
                        <span className="w-[40%] bg-[#3DE8A0]" />
                        <span className="w-[60%] bg-white" />
                      </>
                    )}
                  </div>

                  {/* Split Labels */}
                  <div className="flex flex-wrap gap-x-7 gap-y-2.5 text-sm">
                    {isSend ? (
                      <div className="flex items-center gap-2">
                        <span className="text-[#B7CCC0]">
                          Platform fee, collected by admin:
                        </span>
                        <span className="font-['JetBrains_Mono','Noto_Sans_Bengali',monospace] font-bold text-[#3DE8A0]">
                          {fmt(fee)}
                        </span>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-2">
                          <span className="text-[#B7CCC0]">Agent commission:</span>
                          <span className="font-['JetBrains_Mono','Noto_Sans_Bengali',monospace] font-bold text-[#3DE8A0]">
                            {fmt(agentCommission)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#B7CCC0]">Admin profit:</span>
                          <span className="font-['JetBrains_Mono','Noto_Sans_Bengali',monospace] font-bold text-white">
                            {fmt(adminProfit)}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <span className="text-[15px] leading-relaxed text-[#B7CCC0]">
                  Nothing to split. Sends under ৳1,000 are free.
                </span>
              )}
            </div>
          </div>

          {/* Fee Schedule Side Cards */}
          <div className="flex-1 min-w-[280px] lg:min-w-[360px] flex flex-col gap-6">
            {/* Send Money Schedule Card */}
            <div className="bg-white border border-[#D9E2DC] rounded-3xl p-6 flex flex-col gap-2 shadow-sm">
              <span className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl tracking-tight text-[#0C1A14] mb-2">
                Send money
              </span>
              {sendRows.map((row, i) => {
                const isActive = isSend && tier === i;
                return (
                  <div
                    key={i}
                    className={`flex justify-between items-center gap-4 px-3.5 py-3 rounded-xl transition-colors ${
                      isActive ? "bg-[#DDF3E8] font-semibold" : "bg-transparent"
                    }`}
                  >
                    <span className="text-[15px] text-[#0C1A14]">
                      {row.label}
                    </span>
                    <span className="font-['JetBrains_Mono','Noto_Sans_Bengali',monospace] font-bold text-[15px] text-[#0C1A14]">
                      {row.value}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Cash Out Schedule Card */}
            <div className="bg-white border border-[#D9E2DC] rounded-3xl p-6 flex flex-col gap-2 shadow-sm">
              <span className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl tracking-tight text-[#0C1A14] mb-2">
                Cash out
              </span>
              {cashRows.map((row, i) => {
                return (
                  <div
                    key={i}
                    className="flex justify-between items-center gap-4 px-3.5 py-3 rounded-xl"
                  >
                    <div className="flex flex-col">
                      <span className="text-[15px] text-[#0C1A14]">
                        {row.label}
                      </span>
                      <span className="text-xs text-[#4A5D54]">
                        {row.note}
                      </span>
                    </div>
                    <span className="font-['JetBrains_Mono','Noto_Sans_Bengali',monospace] font-bold text-[15px] text-[#0C1A14]">
                      {row.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Transaction Limits Bar */}
        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold tracking-wider uppercase text-[#4A5D54]">
            Limits per transaction
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-[#D9E2DC] rounded-2xl p-5 flex flex-col gap-1 shadow-sm">
              <span className="text-sm text-[#4A5D54]">Add money</span>
              <span className="font-['JetBrains_Mono','Noto_Sans_Bengali',monospace] font-bold text-2xl tracking-tight text-[#0C1A14]">
                ৳50,000
              </span>
            </div>
            <div className="bg-white border border-[#D9E2DC] rounded-2xl p-5 flex flex-col gap-1 shadow-sm">
              <span className="text-sm text-[#4A5D54]">Cash out</span>
              <span className="font-['JetBrains_Mono','Noto_Sans_Bengali',monospace] font-bold text-2xl tracking-tight text-[#0C1A14]">
                ৳50,000
              </span>
            </div>
            <div className="bg-white border border-[#D9E2DC] rounded-2xl p-5 flex flex-col gap-1 shadow-sm">
              <span className="text-sm text-[#4A5D54]">Cash in (agent)</span>
              <span className="font-['JetBrains_Mono','Noto_Sans_Bengali',monospace] font-bold text-2xl tracking-tight text-[#0C1A14]">
                ৳100,000
              </span>
            </div>
            <div className="bg-white border border-[#D9E2DC] rounded-2xl p-5 flex flex-col gap-1 shadow-sm">
              <span className="text-sm text-[#4A5D54]">Admin withdrawal</span>
              <span className="font-['JetBrains_Mono','Noto_Sans_Bengali',monospace] font-bold text-2xl tracking-tight text-[#0C1A14]">
                ৳100,000
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;