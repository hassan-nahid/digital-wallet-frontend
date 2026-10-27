import { Shield, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const CashOutService = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-[#3DE8A0]" />,
      title: "Instant Cash Out",
      description: "Receive physical cash from an authorized agent immediately upon confirmation.",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#3DE8A0]" />,
      title: "Secure Verification",
      description: "Requires your secure PIN and sends instant notification alerts to your device.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#3DE8A0]" />,
      title: "Fair Commission Split",
      description: "The ৳10 fee on ৳1,000 is transparently split: ৳4 for your local agent, ৳6 for admin.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Visit Agent",
      description: "Locate any authorized WalletX agent near your home or office.",
    },
    {
      step: "02",
      title: "Specify Amount",
      description: "Enter amount up to ৳50,000 and the agent's wallet number.",
    },
    {
      step: "03",
      title: "Confirm Fee",
      description: "Review the exact ৳10/1k fee and enter your secure PIN.",
    },
    {
      step: "04",
      title: "Collect Cash",
      description: "Collect physical cash instantly from the agent.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F3F6F4] text-[#0C1A14]">
      {/* Hero Section */}
      <section className="bg-[#0B2318] text-white py-16 lg:py-20 hero-grid-pattern border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 flex flex-col gap-5">
              <div className="inline-flex self-start items-center gap-2 px-3.5 py-1.5 border border-[#3DE8A0]/40 rounded-full font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#3DE8A0] bg-[#3DE8A0]/5">
                Cash Out Service
              </div>
              <h1 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
                Withdraw cash via agents with predictable fees.
              </h1>
              <p className="m-0 text-lg sm:text-xl text-[#B7CCC0] max-w-xl leading-relaxed">
                Cash out from your digital wallet quickly and securely through our verified agent network across Bangladesh.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/register"
                  className="btn px-7 py-3.5 rounded-xl font-bold text-base text-[#04170E] bg-[#3DE8A0] hover:bg-[#32d992] transition-all shadow-md"
                >
                  Start Using
                </Link>
                <Link
                  to="/services"
                  className="btn px-7 py-3.5 rounded-xl font-semibold text-base text-white border border-white/30 hover:bg-white/5 transition-all"
                >
                  All Services
                </Link>
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="w-full md:w-[380px] bg-[#123226] border border-white/10 rounded-3xl p-7 flex flex-col gap-4 text-white shadow-xl">
              <span className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl text-white">
                Cash Out Rates
              </span>
              <div className="flex flex-col gap-3 text-sm pt-2 border-t border-white/10">
                <div className="flex justify-between items-center py-1 border-b border-white/10">
                  <span className="text-[#B7CCC0]">User Fee</span>
                  <span className="font-['JetBrains_Mono',monospace] font-bold text-[#3DE8A0]">৳10 per ৳1,000</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/10">
                  <span className="text-[#B7CCC0]">Agent Commission</span>
                  <span className="font-['JetBrains_Mono',monospace] font-bold text-white">৳4 per ৳1,000</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/10">
                  <span className="text-[#B7CCC0]">Admin Profit</span>
                  <span className="font-['JetBrains_Mono',monospace] font-bold text-white">৳6 per ৳1,000</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/10">
                  <span className="text-[#B7CCC0]">Settlement</span>
                  <span className="font-['JetBrains_Mono',monospace] font-bold text-[#3DE8A0]">Instant</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#B7CCC0]">Max per Transaction</span>
                  <span className="font-['JetBrains_Mono',monospace] font-bold text-white">৳50,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white border-b border-[#D9E2DC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-10">
          <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
            <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#087F4C]">
              Advantages
            </span>
            <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-4xl text-[#0C1A14]">
              Why cash out with WalletX?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-7 rounded-2xl bg-[#F3F6F4] border border-[#E4EBE7] flex flex-col gap-3 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B2318] flex items-center justify-center shrink-0 mb-1">
                  {feature.icon}
                </div>
                <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl text-[#0C1A14] m-0">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#4A5D54] leading-relaxed m-0">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Cash Out Steps */}
      <section className="py-20 bg-[#F3F6F4]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-10">
          <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
            <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#087F4C]">
              Guide
            </span>
            <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-4xl text-[#0C1A14]">
              How to Cash Out
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-white border border-[#D9E2DC] flex flex-col gap-3 shadow-sm"
              >
                <span className="w-10 h-10 rounded-xl bg-[#0B2318] text-[#3DE8A0] font-mono font-bold text-sm flex items-center justify-center">
                  {item.step}
                </span>
                <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl text-[#0C1A14] m-0">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4A5D54] leading-relaxed m-0">{item.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-6 right-4 w-5 h-5 text-[#D9E2DC]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CashOutService;
