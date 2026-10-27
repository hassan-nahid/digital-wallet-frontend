import { Zap, ShieldCheck, Users, Wallet, Send, Globe, PhoneCall, ArrowRight, CheckCircle, TrendingUp, Clock, CreditCard, Smartphone } from "lucide-react";
import { Link } from "react-router";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-[#3DE8A0]" />,
    title: "Instant Transfers",
    desc: "Send and receive money instantly, anytime, anywhere. Your transactions are settled in real-time with zero waiting."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#3DE8A0]" />,
    title: "Bank-Grade Security",
    desc: "Your funds and identity are guarded by AES-256 encryption, multi-factor authentication, and audited fraud detection."
  },
  {
    icon: <Wallet className="w-6 h-6 text-[#3DE8A0]" />,
    title: "Multi-Currency Ready",
    desc: "Seamlessly hold, send, and manage taka and global currencies with transparent real-time conversion rates."
  },
  {
    icon: <Send className="w-6 h-6 text-[#3DE8A0]" />,
    title: "Easy Cash Out",
    desc: "Withdraw cash on demand through our nationwide agent network at an honest flat rate of ৳10 per ৳1,000."
  },
  {
    icon: <Globe className="w-6 h-6 text-[#3DE8A0]" />,
    title: "Everywhere in Bangladesh",
    desc: "Accessible from all 64 districts. Built for individuals, merchants, and local cash agents."
  },
  {
    icon: <PhoneCall className="w-6 h-6 text-[#3DE8A0]" />,
    title: "24/7 Dedicated Support",
    desc: "Round-the-clock help from our support team via live chat and email at hassan.nahid.dev@gmail.com."
  },
  {
    icon: <Users className="w-6 h-6 text-[#3DE8A0]" />,
    title: "Roles for Everyone",
    desc: "Dedicated workspaces for personal users, earning tools for cash agents, and oversight for admins."
  },
  {
    icon: <Clock className="w-6 h-6 text-[#3DE8A0]" />,
    title: "Audited Ledger History",
    desc: "Every transaction fee, commission, and balance movement is permanently recorded with full transparency."
  },
  {
    icon: <CreditCard className="w-6 h-6 text-[#3DE8A0]" />,
    title: "Bank & Card Integration",
    desc: "Add money directly from linked bank accounts or debit cards up to ৳50,000 per transaction."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-[#3DE8A0]" />,
    title: "Mobile Optimized",
    desc: "Fully responsive web wallet that feels like a native mobile app on iOS and Android devices."
  },
];

const FeaturesPage = () => {
  return (
    <main className="min-h-screen bg-[#F3F6F4] text-[#0C1A14]">
      {/* Header */}
      <section className="bg-[#0B2318] text-white py-20 lg:py-24 hero-grid-pattern border-b border-white/10 text-center">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col items-center gap-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#3DE8A0]/40 rounded-full font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#3DE8A0] bg-[#3DE8A0]/5">
            Platform Capabilities
          </div>
          <h1 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white max-w-3xl">
            Everything you need for honest digital transactions.
          </h1>
          <p className="m-0 text-lg sm:text-xl text-[#B7CCC0] max-w-2xl leading-relaxed">
            Discover how WalletX combines cutting-edge financial architecture with transparent upfront fee calculations.
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 bg-white border-b border-[#D9E2DC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#087F4C]">
              Core Features
            </span>
            <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-4xl text-[#0C1A14]">
              Built with precision for everyday life
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 p-7 rounded-3xl bg-[#F3F6F4] border border-[#E4EBE7] shadow-sm hover:border-[#12B76A]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B2318] flex items-center justify-center shrink-0 mb-1">
                  {f.icon}
                </div>
                <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl text-[#0C1A14] m-0">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#4A5D54] m-0">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20 bg-[#F3F6F4]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#087F4C]">
              Workflow
            </span>
            <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-4xl text-[#0C1A14]">
              Start transacting in minutes
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Sign Up", desc: "Create your free wallet account in seconds." },
              { step: "02", title: "Verify", desc: "Quick verification for identity and safety." },
              { step: "03", title: "Add Money", desc: "Top up via bank, card, or agent." },
              { step: "04", title: "Transact", desc: "Send, receive, and cash out with zero surprises." },
            ].map((item, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-white border border-[#D9E2DC] flex flex-col gap-3 shadow-sm">
                <span className="w-10 h-10 rounded-xl bg-[#0B2318] text-[#3DE8A0] font-mono font-bold text-sm flex items-center justify-center">
                  {item.step}
                </span>
                <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl text-[#0C1A14] m-0">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4A5D54] leading-relaxed m-0">{item.desc}</p>
                {idx < 3 && (
                  <ArrowRight className="hidden md:block absolute top-6 right-4 w-5 h-5 text-[#D9E2DC]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Users Love WalletX */}
      <section className="py-20 bg-white border-t border-b border-[#D9E2DC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-10">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#087F4C]">
              Real Benefits
            </span>
            <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-4xl text-[#0C1A14]">
              Why users choose WalletX
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <TrendingUp className="w-6 h-6 text-[#087F4C]" />, title: "Low, Honest Fees", desc: "Free sends under ৳1,000, ৳10 up to ৳20,000, and flat ৳15 above. No hidden percentage markups." },
              { icon: <Clock className="w-6 h-6 text-[#087F4C]" />, title: "Instant Settlement", desc: "Direct wallet-to-wallet transactions finish in real time without batch delays." },
              { icon: <ShieldCheck className="w-6 h-6 text-[#087F4C]" />, title: "Bank-Grade Protection", desc: "End-to-end encryption, multi-factor auth, and intelligent transaction anomaly detection." },
              { icon: <Users className="w-6 h-6 text-[#087F4C]" />, title: "Agent Empowerment", desc: "Agents receive a dedicated ৳4 per ৳1,000 commission on cash-out services." },
            ].map((item, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-[#F3F6F4] border border-[#E4EBE7] flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E1EBE5] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl text-[#0C1A14] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4A5D54] leading-relaxed m-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-20 bg-[#F3F6F4]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-10">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#087F4C]">
              Audience
            </span>
            <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-4xl text-[#0C1A14]">
              Perfect for everyone
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Individuals", items: ["Personal daily expenses", "Free peer-to-peer sends under ৳1k", "Biometric face/fingerprint login", "Instant balance alerts"] },
              { title: "Agents", items: ["Earn ৳4/1k on cash-out", "Cash in deposits up to ৳100k", "Dedicated agent float dashboard", "Real-time earnings tracking"] },
              { title: "Businesses & Admins", items: ["System ledger oversight", "Withdraw up to ৳100k fee-free", "Audit logs & transaction analytics", "User & agent compliance controls"] },
            ].map((useCase, idx) => (
              <div key={idx} className="p-7 rounded-3xl bg-white border border-[#D9E2DC] flex flex-col gap-4 shadow-sm">
                <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-2xl text-[#0C1A14] m-0">
                  {useCase.title}
                </h3>
                <ul className="flex flex-col gap-2.5 p-0 m-0 list-none">
                  {useCase.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-[#4A5D54]">
                      <CheckCircle className="w-4 h-4 text-[#12B76A] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#12B76A] text-[#04170E] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-4xl">
              Ready to experience WalletX?
            </h2>
            <p className="m-0 text-base opacity-85 mt-1">
              Join thousands who rely on transparent digital finance.
            </p>
          </div>
          <Link
            to="/register"
            className="btn px-7 py-3.5 rounded-xl font-bold text-base text-white bg-[#04170E] hover:bg-[#082316] transition-all shadow-md"
          >
            Create your account
          </Link>
        </div>
      </section>
    </main>
  );
};

export default FeaturesPage;