const facts = [
  {
    value: "৳0",
    desc: "to send money under ৳1,000",
    isMono: true,
  },
  {
    value: "৳10",
    desc: "per ৳1,000 to cash out through an agent",
    isMono: true,
  },
  {
    value: "৳50,000",
    desc: "maximum per add-money or cash-out transaction",
    isMono: true,
  },
  {
    value: "3 roles",
    desc: "user, agent and admin on one ledger",
    isMono: false,
  },
];

const Statistics = () => {
  return (
    <section className="bg-white border-b border-[#D9E2DC] w-full">
      <div className="max-w-[1200px] mx-auto px-6 py-10 box-border flex flex-wrap gap-y-7">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="flex-1 min-w-[240px] px-6 border-l border-[#D9E2DC] flex flex-col gap-1.5"
          >
            <span
              className={`font-bold text-4xl tracking-[-0.03em] text-[#0C1A14] ${
                fact.isMono
                  ? "font-['JetBrains_Mono','Noto_Sans_Bengali',monospace]"
                  : "font-['JetBrains_Mono',monospace]"
              }`}
            >
              {fact.value}
            </span>
            <span className="text-[15px] leading-[1.45] text-[#4A5D54]">
              {fact.desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;