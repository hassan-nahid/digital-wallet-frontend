import { Smartphone, QrCode, ShieldCheck, Zap, Bell, CheckCircle2, Download } from "lucide-react";
import { Link } from "react-router";

export default function AppShowcase() {
  const highlights = [
    {
      icon: QrCode,
      title: "Instant QR Retail Pay",
      desc: "Scan and pay at 50,000+ merchant outlets nationwide with zero hidden surcharges.",
    },
    {
      icon: ShieldCheck,
      title: "Biometric Authorization",
      desc: "Face ID and fingerprint authentication protect your wallet with hardware-grade safety.",
    },
    {
      icon: Bell,
      title: "Real-time Push Ledger",
      desc: "Instant notifications for every transaction showing exactly who earns what in fees.",
    },
    {
      icon: Zap,
      title: "USSD Offline Fallback",
      desc: "No mobile data? Execute emergency transfers via dial code *123# anywhere in Bangladesh.",
    },
  ];

  return (
    <section className="w-full py-20 lg:py-24 bg-[#0B2318] text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content & Features */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#3DE8A0]">
              Mobile Ecosystem
            </div>

            <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              Your entire wallet. <br />
              <span className="text-[#3DE8A0]">In the palm of your hand.</span>
            </h2>

            <p className="text-[#B7CCC0] text-base sm:text-lg leading-relaxed max-w-xl">
              Experience the fastest digital wallet in Bangladesh. Built for seamless personal transfers, instant agent cash-outs, and transparent merchant checkouts.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#123226] border border-white/10 flex flex-col gap-2 hover:border-[#3DE8A0]/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#3DE8A0]/15 flex items-center justify-center text-[#3DE8A0]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-base text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#B7CCC0]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* App Store CTA Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link
                to="/register"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#3DE8A0] text-[#04170E] font-bold text-sm hover:bg-[#32d992] shadow-md transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Get WalletX App</span>
              </Link>
              <div className="flex items-center gap-2 text-xs text-[#B7CCC0] px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#3DE8A0]" />
                <span>Available on iOS, Android & Web</span>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Screen Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px] rounded-[36px] bg-[#071911] border-4 border-white/15 p-4 shadow-2xl relative">
              {/* Phone Speaker Notch */}
              <div className="w-24 h-4 bg-white/10 rounded-full mx-auto mb-4" />

              {/* In-app Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#12B76A] text-[#04170E] flex items-center justify-center font-bold text-xs">
                    R
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Rahim Uddin</div>
                    <div className="text-[10px] text-[#3DE8A0] font-mono">Personal Verified</div>
                  </div>
                </div>
                <Smartphone className="w-4 h-4 text-white/50" />
              </div>

              {/* In-app Balance Card */}
              <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-[#123226] to-[#0A261A] border border-[#3DE8A0]/30 shadow-inner">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#B7CCC0]">
                  Available Balance
                </div>
                <div className="font-['Bricolage_Grotesque',sans-serif] font-black text-2xl sm:text-3xl text-white tracking-tight mt-1">
                  ৳ 45,820.00
                </div>
                <div className="mt-3 grid grid-cols-4 gap-1.5 pt-2 border-t border-white/10 text-center">
                  <div className="p-1.5 rounded-lg bg-white/5 text-[10px] text-[#B7CCC0]">
                    Send
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/5 text-[10px] text-[#B7CCC0]">
                    Cash Out
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/5 text-[10px] text-[#B7CCC0]">
                    Deposit
                  </div>
                  <div className="p-1.5 rounded-lg bg-[#3DE8A0]/20 text-[10px] text-[#3DE8A0] font-bold">
                    QR Pay
                  </div>
                </div>
              </div>

              {/* In-app Recent Activity Feed */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs font-semibold text-[#B7CCC0] mb-2 px-1">
                  <span>Recent Activity</span>
                  <span className="text-[10px] text-[#3DE8A0]">Live Feed</span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-white">Received Money</div>
                      <div className="text-[10px] text-[#B7CCC0]">From Tanvir • Free</div>
                    </div>
                    <div className="text-xs font-mono font-bold text-[#3DE8A0]">
                      +৳ 2,500.00
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-white">Grocery QR Pay</div>
                      <div className="text-[10px] text-[#B7CCC0]">Shwapno Outlet • ৳0 fee</div>
                    </div>
                    <div className="text-xs font-mono font-bold text-white">
                      -৳ 840.00
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-white">Agent Cash Out</div>
                      <div className="text-[10px] text-[#B7CCC0]">Agent #1084 • Fee: ৳14.50</div>
                    </div>
                    <div className="text-xs font-mono font-bold text-white">
                      -৳ 1,000.00
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Home Bar */}
              <div className="w-28 h-1 bg-white/20 rounded-full mx-auto mt-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
