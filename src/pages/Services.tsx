import { ArrowDownToLine, ArrowUpFromLine, Send, Wallet, Shield, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router";

const Services = () => {
  const services = [
    {
      icon: <ArrowUpFromLine className="w-6 h-6 text-[#3DE8A0]" />,
      title: "Cash Out",
      description: "Withdraw money from your wallet through our nationwide agent network at an honest flat rate of ৳10 per ৳1,000.",
      link: "/services/cash-out",
      features: ["Flat ৳10 per ৳1,000 fee", "Split: ৳4 Agent / ৳6 Admin", "Up to ৳50,000 per transaction", "Instant SMS & app confirmation"]
    },
    {
      icon: <ArrowDownToLine className="w-6 h-6 text-[#3DE8A0]" />,
      title: "Cash In",
      description: "Add money to your wallet through authorized agents or linked bank cards with zero deposit fee.",
      link: "/services/cash-in",
      features: ["100% free for users", "Agents can deposit up to ৳100,000", "Instant balance update", "Secure OTP verification"]
    },
    {
      icon: <Send className="w-6 h-6 text-[#3DE8A0]" />,
      title: "Send Money",
      description: "Transfer funds to any WalletX user instantly using their phone number or wallet address.",
      link: "/services/send-money",
      features: ["Free under ৳1,000", "৳10 flat from ৳1k to ৳20k", "৳15 flat above ৳20k", "Never a hidden charge"]
    },
    {
      icon: <Wallet className="w-6 h-6 text-[#3DE8A0]" />,
      title: "Transaction History",
      description: "Track all your balance movements, fee breakdowns, and agent commissions on a unified ledger.",
      link: "/services/transactions",
      features: ["Real-time transaction log", "Exportable statements", "Clear fee auditing", "Filter by transaction type"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#F3F6F4] text-[#0C1A14]">
      {/* Hero Section */}
      <section className="bg-[#0B2318] text-white py-20 lg:py-24 hero-grid-pattern border-b border-white/10 text-center">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col items-center gap-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#3DE8A0]/40 rounded-full font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#3DE8A0] bg-[#3DE8A0]/5">
            Wallet Services
          </div>
          <h1 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white max-w-3xl">
            Financial services built on full transparency.
          </h1>
          <p className="m-0 text-lg sm:text-xl text-[#B7CCC0] max-w-2xl leading-relaxed">
            Every transaction type has clear rules, upfront fee calculations, and instant real-time settlement.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white border-b border-[#D9E2DC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-[#F3F6F4] border border-[#E4EBE7] flex flex-col justify-between gap-6 shadow-sm hover:border-[#12B76A]/40 transition-colors"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-13 h-13 rounded-2xl bg-[#0B2318] flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-2xl text-[#0C1A14] m-0 mb-2">
                      {service.title}
                    </h2>
                    <p className="text-base text-[#4A5D54] leading-relaxed m-0">
                      {service.description}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2.5 p-0 m-0 list-none pt-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-[#0C1A14] font-medium">
                        <CheckCircle className="w-4 h-4 text-[#12B76A] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={service.link}
                  className="btn w-full text-center py-3.5 px-4 rounded-xl font-bold text-sm text-[#04170E] bg-[#12B76A] hover:bg-[#0fa968] transition-all"
                >
                  View service details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F3F6F4]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-10">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#087F4C]">
              Reliability
            </span>
            <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-4xl text-[#0C1A14]">
              Why Choose WalletX?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-[#D9E2DC] text-center flex flex-col items-center gap-3 shadow-sm">
              <div className="w-13 h-13 rounded-xl bg-[#E1EBE5] text-[#087F4C] flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl text-[#0C1A14] m-0">
                Safe & Regulated
              </h3>
              <p className="text-sm text-[#4A5D54] leading-relaxed m-0">
                Bank-level encryption and security protocols to safeguard your account.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#D9E2DC] text-center flex flex-col items-center gap-3 shadow-sm">
              <div className="w-13 h-13 rounded-xl bg-[#E1EBE5] text-[#087F4C] flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl text-[#0C1A14] m-0">
                24/7 Availability
              </h3>
              <p className="text-sm text-[#4A5D54] leading-relaxed m-0">
                Transact day or night with round-the-clock live support assistance.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#D9E2DC] text-center flex flex-col items-center gap-3 shadow-sm">
              <div className="w-13 h-13 rounded-xl bg-[#E1EBE5] text-[#087F4C] flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl text-[#0C1A14] m-0">
                Instant Processing
              </h3>
              <p className="text-sm text-[#4A5D54] leading-relaxed m-0">
                Lightning-fast transactions that complete in seconds, not banking days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#12B76A] text-[#04170E] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="m-0 text-base opacity-85 mt-1">
              Join thousands of users who trust WalletX for everyday transactions.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/register"
              className="btn px-7 py-3.5 rounded-xl font-bold text-base text-white bg-[#04170E] hover:bg-[#082316] transition-all shadow-md"
            >
              Create Account
            </Link>
            <Link
              to="/contact"
              className="btn px-7 py-3.5 rounded-xl font-bold text-base text-[#04170E] border-2 border-[#04170E] hover:bg-[#04170E]/10 transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
