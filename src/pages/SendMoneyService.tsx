import { Zap, Shield, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const SendMoneyService = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-[#3DE8A0]" />,
      title: "Instant Transfers",
      description: "Send money in seconds to anyone with a WalletX account.",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#3DE8A0]" />,
      title: "Secure & Encrypted",
      description: "All transactions are protected with bank-grade 256-bit encryption.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#3DE8A0]" />,
      title: "Transparent Fees",
      description: "Free under ৳1,000, ৳10 flat up to ৳20,000, and ৳15 above.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Enter Recipient",
      description: "Provide the recipient's phone number or wallet ID.",
    },
    {
      step: "02",
      title: "Set Amount",
      description: "Enter the amount you wish to transfer.",
    },
    {
      step: "03",
      title: "Review Fee",
      description: "See the exact fee breakdown before entering your PIN.",
    },
    {
      step: "04",
      title: "Instant Settle",
      description: "Confirm and the funds arrive in the recipient's wallet instantly.",
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
                Send Money Service
              </div>
              <h1 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
                Instant peer-to-peer transfers with clear fees.
              </h1>
              <p className="m-0 text-lg sm:text-xl text-[#B7CCC0] max-w-xl leading-relaxed">
                Send money directly to friends, family, or merchants in Bangladesh using just their phone number or wallet ID.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/register"
                  className="btn px-7 py-3.5 rounded-xl font-bold text-base text-[#04170E] bg-[#3DE8A0] hover:bg-[#32d992] transition-all shadow-md"
                >
                  Start Sending
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
                Transfer Details
              </span>
              <div className="flex flex-col gap-3 text-sm pt-2 border-t border-white/10">
                <div className="flex justify-between items-center py-1 border-b border-white/10">
                  <span className="text-[#B7CCC0]">Under ৳1,000</span>
                  <span className="font-['JetBrains_Mono',monospace] font-bold text-[#3DE8A0]">Free (৳0)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/10">
                  <span className="text-[#B7CCC0]">৳1,000 to ৳20,000</span>
                  <span className="font-['JetBrains_Mono',monospace] font-bold text-white">৳10 flat</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/10">
                  <span className="text-[#B7CCC0]">Above ৳20,000</span>
                  <span className="font-['JetBrains_Mono',monospace] font-bold text-white">৳15 flat</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/10">
                  <span className="text-[#B7CCC0]">Transfer Speed</span>
                  <span className="font-['JetBrains_Mono',monospace] font-bold text-[#3DE8A0]">Instant</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#B7CCC0]">Max Transaction</span>
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
              Features
            </span>
            <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-4xl text-[#0C1A14]">
              Why send with WalletX?
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

      {/* How It Works Steps */}
      <section className="py-20 bg-[#F3F6F4]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-10">
          <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
            <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#087F4C]">
              Step by step
            </span>
            <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-4xl text-[#0C1A14]">
              How to Send Money
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

export default SendMoneyService;
