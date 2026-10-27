import { useState } from "react";

const faqData = [
  {
    q: "How secure is my money?",
    a: "Every sign-in is checked, and you can add biometric login and multi-factor codes by SMS, email or authenticator app. Fraud monitoring watches for unusual activity as it happens.",
  },
  {
    q: "How long do transfers take?",
    a: "Transfers between WalletX wallets arrive instantly. Withdrawals to a bank account follow your bank’s own processing time.",
  },
  {
    q: "Are there any fees?",
    a: "Sending money is free under ৳1,000, ৳10 from ৳1,000 to ৳20,000 and ৳15 above that. Cashing out through an agent costs ৳10 per ৳1,000. Use the calculator above to see the exact amount.",
  },
  {
    q: "What happens if I lose my phone?",
    a: "Your balance lives in your account, not on the device. Contact support from any phone and we will lock the wallet until you can sign in again.",
  },
  {
    q: "How do I withdraw money?",
    a: "Cash out through an agent at ৳10 per ৳1,000, up to ৳50,000 per transaction, or withdraw to a linked bank account from the app.",
  },
  {
    q: "Is there a limit on what I can send or receive?",
    a: "Adding money and cashing out are each capped at ৳50,000 per transaction. Agents can cash in up to ৳100,000 per transaction.",
  },
  {
    q: "How do I become an agent?",
    a: "Choose Become an agent when you register. Agents handle cash in and cash out for users and earn ৳4 for every ৳1,000 they cash out.",
  },
  {
    q: "What support options are available?",
    a: "Support is available around the clock in the app and by email at hassan.nahid.dev@gmail.com. Agents get priority support.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-[#F3F6F4] scroll-mt-20 w-full">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 lg:py-24 flex flex-wrap gap-12 lg:gap-18 items-start">
        {/* Left Intro Text */}
        <div className="flex-1 min-w-[280px] lg:min-w-[300px] flex flex-col gap-4.5">
          <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#087F4C]">
            Support center
          </span>
          <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.06] tracking-[-0.03em] text-[#0C1A14] text-balance">
            Questions people ask first.
          </h2>
          <p className="m-0 text-[17px] leading-[1.55] text-[#4A5D54]">
            Still stuck? Write to{" "}
            <a
              href="mailto:hassan.nahid.dev@gmail.com"
              className="text-[#087F4C] underline hover:text-[#0C1A14] transition-colors"
            >
              hassan.nahid.dev@gmail.com
            </a>{" "}
            and a person will reply.
          </p>
        </div>

        {/* Right Accordion List */}
        <div className="flex-[2_1_480px] min-w-[280px] flex flex-col border-t border-[#D9E2DC]">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-[#D9E2DC]">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-5 py-5.5 bg-transparent border-0 cursor-pointer text-left font-['Figtree',sans-serif] text-base sm:text-lg font-semibold text-[#0C1A14] hover:text-[#087F4C] transition-colors"
                >
                  <span>{item.q}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#087F4C"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                      }`}
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {isOpen && (
                  <p className="m-0 pr-6 sm:pr-10 pb-6 text-base leading-relaxed text-[#4A5D54]">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;