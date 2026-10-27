const testimonials = [
  {
    name: "Sarah Rahman",
    role: "Freelance Designer",
    text: "WalletX made sending and receiving payments effortless. You know the exact fee before confirming, and the money arrives in the same second.",
    rating: 5,
    avatar: "SR",
  },
  {
    name: "Aminul Islam",
    role: "Retail Store Owner & Agent",
    text: "As an agent, the commission split is crystal clear. I earn ৳4 per ৳1,000 immediately without wondering about hidden deductions.",
    rating: 5,
    avatar: "AI",
  },
  {
    name: "Nadia Akter",
    role: "University Student",
    text: "Free transfers under ৳1,000 are a lifesaver for splitting food bills with roommates. The biometric login makes it super fast.",
    rating: 5,
    avatar: "NA",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white border-t border-b border-[#D9E2DC] w-full">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 lg:py-24 flex flex-col gap-12">
        <div className="flex flex-col gap-3.5 max-w-[680px]">
          <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#087F4C]">
            User stories
          </span>
          <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.06] tracking-[-0.03em] text-[#0C1A14] text-balance">
            Real feedback from people who use it every day.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between gap-6 p-7 rounded-3xl bg-[#F3F6F4] border border-[#E4EBE7] shadow-sm hover:border-[#12B76A]/40 transition-colors"
            >
              <div className="flex flex-col gap-4">
                {/* 5 Stars */}
                <div className="flex gap-1 text-[#12B76A]">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#12B76A"
                      aria-hidden="true"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="m-0 text-base leading-relaxed text-[#0C1A14]">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-[#D9E2DC]">
                <div className="w-10 h-10 rounded-full bg-[#0B2318] text-[#3DE8A0] font-bold text-sm flex items-center justify-center shrink-0">
                  {t.avatar}
                </div>
                <div className="flex flex-col">
                  <span className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[15px] text-[#0C1A14]">
                    {t.name}
                  </span>
                  <span className="text-xs text-[#4A5D54]">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;