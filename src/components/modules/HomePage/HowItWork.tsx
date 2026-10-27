const steps = [
  {
    step: "Step 1",
    title: "Register",
    description:
      "Create your WalletX account in seconds, then pick whether you are a user or an agent.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3DE8A0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="8.5" r="3.5" />
        <path d="M5 20c1-4 4-5 7-5s6 1 7 5" />
      </svg>
    ),
  },
  {
    step: "Step 2",
    title: "Add money",
    description:
      "Fund your wallet from a bank or card, or hand cash to an agent. Up to ৳50,000 each time.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3DE8A0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="6" width="18" height="13" rx="3" />
        <path d="M3 10h18M16 14.5h2" />
      </svg>
    ),
  },
  {
    step: "Step 3",
    title: "Send or withdraw",
    description:
      "Send money to anyone with a wallet, or cash out through an agent. The fee shows before you confirm.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3DE8A0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 3L10 14M21 3l-7 18-4-7-7-4 18-7z" />
      </svg>
    ),
  },
];

const HowItWork = () => {
  return (
    <section id="how" className="bg-white border-t border-b border-[#D9E2DC] scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 lg:py-24 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-3.5 max-w-[680px]">
          <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#087F4C]">
            How it works
          </span>
          <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.06] tracking-[-0.03em] text-[#0C1A14] text-balance">
            Register, add money, then send or withdraw.
          </h2>
        </div>

        {/* 3 Step Cards */}
        <div className="flex flex-wrap gap-5">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[260px] flex flex-col gap-4.5 p-7 rounded-[20px] bg-[#F3F6F4] border border-[#E4EBE7]"
            >
              <div className="flex items-center justify-between">
                <span className="w-[52px] h-[52px] rounded-2xl bg-[#0B2318] flex items-center justify-center shadow-sm">
                  {item.icon}
                </span>
                <span className="font-['JetBrains_Mono',monospace] font-bold text-sm text-[#4A5D54]">
                  {item.step}
                </span>
              </div>
              <span className="font-['Bricolage_Grotesque',sans-serif] font-bold text-2xl tracking-tight text-[#0C1A14]">
                {item.title}
              </span>
              <span className="text-base leading-relaxed text-[#4A5D54]">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWork;