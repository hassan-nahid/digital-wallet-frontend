const securityFeatures = [
  {
    title: "End-to-end encryption",
    description: "Your data is encrypted with AES-256 in transit and at rest.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3DE8A0"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="5" y="11" width="14" height="9" rx="2" />
        <path d="M8 11V8a4 4 0 018 0v3" />
      </svg>
    ),
  },
  {
    title: "Biometric sign-in",
    description: "Open your wallet with a fingerprint or face scan.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3DE8A0"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12a7 7 0 0114 0c0 2-.2 3.5-.7 5" />
        <path d="M8.5 14a3.5 3.5 0 017 0c0 2-.4 3.6-1 5" />
        <path d="M12 12v2c0 3-1 5-2 7" />
      </svg>
    ),
  },
  {
    title: "Fraud detection",
    description: "Real-time monitoring flags suspicious activity as it happens.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3DE8A0"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Multi-factor authentication",
    description: "Add a second check by SMS, email or authenticator app.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3DE8A0"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </svg>
    ),
  },
];

const SecurityTrust = () => {
  return (
    <section id="security" className="bg-[#0B2318] text-white scroll-mt-20 w-full">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 lg:py-24 flex flex-wrap gap-12 lg:gap-16 items-start">
        {/* Left Column Text */}
        <div className="flex-1 min-w-[280px] lg:min-w-[360px] flex flex-col gap-4.5">
          <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#3DE8A0]">
            Security
          </span>
          <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.06] tracking-[-0.03em] text-balance">
            Your money stays yours. So does your data.
          </h2>
          <p className="m-0 text-lg leading-[1.55] text-[#B7CCC0]">
            Every layer of WalletX is built to protect funds and personal information, from the sign-in screen to the ledger.
          </p>
        </div>

        {/* Right 4-Grid Cards (#123226) */}
        <div className="flex-1 min-w-[280px] lg:min-w-[520px] grid grid-cols-1 sm:grid-cols-2 gap-4">
          {securityFeatures.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#123226] border border-white/10 rounded-2xl p-6 flex flex-col gap-3 shadow-sm hover:border-[#3DE8A0]/30 transition-colors"
            >
              <div className="text-[#3DE8A0]">{item.icon}</div>
              <span className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl tracking-tight text-white">
                {item.title}
              </span>
              <span className="text-[15px] leading-relaxed text-[#B7CCC0]">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityTrust;