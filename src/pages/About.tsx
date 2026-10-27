import {
  Users,
  ShieldCheck,
  Zap,
  Globe,
  TrendingUp,
  Target,
  Eye,
  Award,
  Rocket,
  Code,
  Database,
  Cloud,
  Lock,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const team = [
  {
    name: "Hassan Nahid",
    role: "Founder & Full-Stack Developer",
    image: "https://github.com/hassan-nahid.png",
    portfolio: "https://hassannahid.tech",
    github: "https://github.com/hassan-nahid",
    linkedin: "https://www.linkedin.com/in/hassan-nahid",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-[#F3F6F4] text-[#0C1A14]">
      {/* Hero Header */}
      <section className="bg-[#0B2318] text-white py-20 lg:py-24 hero-grid-pattern border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#3DE8A0]/40 rounded-full font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#3DE8A0] bg-[#3DE8A0]/5">
            About WalletX
          </div>
          <h1 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white max-w-4xl">
            Redefining digital money with complete transparency.
          </h1>
          <p className="m-0 text-lg sm:text-xl text-[#B7CCC0] max-w-3xl leading-relaxed">
            WalletX is on a mission to make financial transactions fast, secure, and accessible for everyone. We believe in empowering people with tools where costs are clear up front.
          </p>
          <p className="text-sm text-[#B7CCC0]/80 m-0">
            Founded in 2026 by Hassan Nahid • Visit{" "}
            <a
              href="https://hassannahid.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3DE8A0] underline hover:text-white font-medium"
            >
              hassannahid.tech
            </a>
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white border-b border-[#D9E2DC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#F3F6F4] border border-[#E4EBE7] flex flex-col gap-4 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#0B2318] text-[#3DE8A0] flex items-center justify-center">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-2xl text-[#0C1A14] m-0">
                Our Mission
              </h2>
              <p className="text-base leading-relaxed text-[#4A5D54] m-0">
                To revolutionize digital payments by providing a secure, fast, and transparent platform that makes financial transactions accessible to everyone, everywhere. We eliminate hidden fees and ensure users and agents always know their exact share.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F3F6F4] border border-[#E4EBE7] flex flex-col gap-4 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#0B2318] text-[#3DE8A0] flex items-center justify-center">
                <Eye className="w-7 h-7" />
              </div>
              <h2 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-2xl text-[#0C1A14] m-0">
                Our Vision
              </h2>
              <p className="text-base leading-relaxed text-[#4A5D54] m-0">
                To become the most trusted digital wallet platform, uniting users, agents, and administrators on a single immutable ledger. We envision a future where digital transactions are instant, fair, and free of surprise charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose WalletX */}
      <section className="py-20 bg-[#F3F6F4]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-12">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
            <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#087F4C]">
              Why WalletX
            </span>
            <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-4xl text-[#0C1A14]">
              Speed, security, and fairness in one place.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#D9E2DC] flex flex-col gap-3 text-center items-center shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#E1EBE5] text-[#087F4C] flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#0C1A14] m-0">
                Lightning Fast
              </h3>
              <p className="text-sm leading-relaxed text-[#4A5D54] m-0">
                Instant wallet transfers. Payments settle in the same second they are authorized.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#D9E2DC] flex flex-col gap-3 text-center items-center shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#E1EBE5] text-[#087F4C] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#0C1A14] m-0">
                Bank-Grade Security
              </h3>
              <p className="text-sm leading-relaxed text-[#4A5D54] m-0">
                AES-256 encryption at rest and in transit, multi-factor codes, and biometric verification.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#D9E2DC] flex flex-col gap-3 text-center items-center shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#E1EBE5] text-[#087F4C] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#0C1A14] m-0">
                For Everyone
              </h3>
              <p className="text-sm leading-relaxed text-[#4A5D54] m-0">
                Tailored interfaces for personal consumers, local cash-out agents, and system admins.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#D9E2DC] flex flex-col gap-3 text-center items-center shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#E1EBE5] text-[#087F4C] flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#0C1A14] m-0">
                Universal Ledger
              </h3>
              <p className="text-sm leading-relaxed text-[#4A5D54] m-0">
                Every transaction fee is logged and audited in real time with zero hidden charges.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-[#D9E2DC] flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[#0B2318] text-[#3DE8A0] shrink-0 mt-0.5">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#0C1A14] mb-1">
                  Transparency & Trust
                </h4>
                <p className="text-sm text-[#4A5D54] leading-relaxed m-0">
                  Every fee is presented before you tap confirm. You always know exactly what leaves your wallet and what reaches the recipient.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#D9E2DC] flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[#0B2318] text-[#3DE8A0] shrink-0 mt-0.5">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#0C1A14] mb-1">
                  Continuous Innovation
                </h4>
                <p className="text-sm text-[#4A5D54] leading-relaxed m-0">
                  Built on modern frameworks, type-safe APIs, and responsive micro-interactions for a fluid financial experience.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#D9E2DC] flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[#0B2318] text-[#3DE8A0] shrink-0 mt-0.5">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#0C1A14] mb-1">
                  Fair Agent Economy
                </h4>
                <p className="text-sm text-[#4A5D54] leading-relaxed m-0">
                  Our 40% agent / 60% admin cash-out split ensures local agents earn dependable income on every transaction they facilitate.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#D9E2DC] flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[#0B2318] text-[#3DE8A0] shrink-0 mt-0.5">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#0C1A14] mb-1">
                  Privacy & Data Ownership
                </h4>
                <p className="text-sm text-[#4A5D54] leading-relaxed m-0">
                  We never sell user financial data. All credentials and transactions are protected by audited encryption standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white border-t border-b border-[#D9E2DC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-10">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#087F4C]">
              Infrastructure
            </span>
            <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-4xl text-[#0C1A14]">
              Built With Modern Technology
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#F3F6F4] border border-[#E4EBE7] flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-[#0B2318] text-[#3DE8A0] flex items-center justify-center mb-2">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#0C1A14]">React & TypeScript</h3>
              <p className="text-xs text-[#4A5D54]">Type-safe UI with responsive micro-animations</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F3F6F4] border border-[#E4EBE7] flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-[#0B2318] text-[#3DE8A0] flex items-center justify-center mb-2">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#0C1A14]">Node.js & MongoDB</h3>
              <p className="text-xs text-[#4A5D54]">ACID transactional ledger with fast throughput</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F3F6F4] border border-[#E4EBE7] flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-[#0B2318] text-[#3DE8A0] flex items-center justify-center mb-2">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#0C1A14]">Cloud Infrastructure</h3>
              <p className="text-xs text-[#4A5D54]">High-availability hosting with 99.9% uptime</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F3F6F4] border border-[#E4EBE7] flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-[#0B2318] text-[#3DE8A0] flex items-center justify-center mb-2">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#0C1A14]">End-to-End Security</h3>
              <p className="text-xs text-[#4A5D54]">JWT auth, role gates, and biometric hooks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-20 bg-[#F3F6F4]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col items-center gap-8">
          <div className="text-center max-w-xl flex flex-col gap-2">
            <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#087F4C]">
              Leadership
            </span>
            <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-4xl text-[#0C1A14]">
              Meet the Developer
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-8 bg-white border border-[#D9E2DC] rounded-3xl w-80 text-center shadow-sm"
              >
                <Avatar className="w-24 h-24 mb-4 border-2 border-[#12B76A]">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="bg-[#0B2318] text-[#3DE8A0] font-bold text-xl">
                    HN
                  </AvatarFallback>
                </Avatar>
                <div className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl text-[#0C1A14]">
                  {member.name}
                </div>
                <div className="text-sm text-[#4A5D54] mb-4">
                  {member.role}
                </div>
                <div className="flex gap-4 text-[#0B2318]">
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#12B76A] transition-colors"
                    title="Portfolio"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#12B76A] transition-colors"
                    title="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#12B76A] transition-colors"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-16 bg-[#0B2318] text-white hero-grid-pattern">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#123226] border border-white/10 flex flex-col items-center text-center gap-1">
              <TrendingUp className="w-7 h-7 text-[#3DE8A0] mb-2" />
              <span className="font-['JetBrains_Mono',monospace] font-bold text-3xl text-white">50K+</span>
              <span className="text-xs text-[#B7CCC0]">Active Wallets</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#123226] border border-white/10 flex flex-col items-center text-center gap-1">
              <Globe className="w-7 h-7 text-[#3DE8A0] mb-2" />
              <span className="font-['JetBrains_Mono',monospace] font-bold text-3xl text-white">64</span>
              <span className="text-xs text-[#B7CCC0]">Districts Covered</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#123226] border border-white/10 flex flex-col items-center text-center gap-1">
              <ShieldCheck className="w-7 h-7 text-[#3DE8A0] mb-2" />
              <span className="font-['JetBrains_Mono',monospace] font-bold text-3xl text-white">99.99%</span>
              <span className="text-xs text-[#B7CCC0]">Uptime Guarantee</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#123226] border border-white/10 flex flex-col items-center text-center gap-1">
              <Zap className="w-7 h-7 text-[#3DE8A0] mb-2" />
              <span className="font-['JetBrains_Mono',monospace] font-bold text-3xl text-white">৳0</span>
              <span className="text-xs text-[#B7CCC0]">Small Send Fee</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;