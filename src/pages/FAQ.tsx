import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Wallet, CreditCard, HelpCircle, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const faqCategories = [
  {
    category: "Getting Started",
    icon: <HelpCircle className="w-5 h-5 text-[#3DE8A0]" />,
    questions: [
      {
        question: "What is WalletX?",
        answer: "WalletX is a transparent digital wallet platform built for personal users, cash agents, and administrators. It lets you send, receive, and cash out money with zero hidden fees—every cost is clearly displayed before you confirm any transaction.",
      },
      {
        question: "How do I create an account?",
        answer: "Click 'Create account', provide your name, email, phone number, and password, and choose whether you want a Personal or Agent wallet. You're ready to start in under 2 minutes.",
      },
      {
        question: "Is WalletX free to register?",
        answer: "Yes! Account registration is 100% free with no monthly fees, no subscription tiers, and no hidden account maintenance charges.",
      },
      {
        question: "What devices are supported?",
        answer: "WalletX runs seamlessly on modern smartphones, tablets, and desktop browsers. It features a fully responsive layout with touch-friendly controls.",
      },
    ]
  },
  {
    category: "Fees & Pricing",
    icon: <Wallet className="w-5 h-5 text-[#3DE8A0]" />,
    questions: [
      {
        question: "What are the exact fees for sending money?",
        answer: "Sending money under ৳1,000 is completely free. From ৳1,000 to ৳20,000, there is a flat ৳10 platform fee. Above ৳20,000, there is a flat ৳15 fee. There are no surprise percentage add-ons.",
      },
      {
        question: "How much does cashing out cost?",
        answer: "Cashing out through an authorized agent costs ৳10 per ৳1,000 (1%). This fee is split instantly in the same second: the agent earns ৳4 commission, and admin keeps ৳6 profit.",
      },
      {
        question: "Are there fees for adding money?",
        answer: "Adding money from your bank account or through an agent is 100% free for users. You receive the exact amount you deposit.",
      },
      {
        question: "What are the transaction limits?",
        answer: "Users can add up to ৳50,000 and cash out up to ৳50,000 per transaction. Agents can handle cash in up to ৳100,000 per transaction, and administrators can withdraw up to ৳100,000 fee-free.",
      },
    ]
  },
  {
    category: "Account & Security",
    icon: <Shield className="w-5 h-5 text-[#3DE8A0]" />,
    questions: [
      {
        question: "How is my money protected?",
        answer: "WalletX uses bank-grade AES-256 encryption, multi-factor authentication, and biometric sign-in (fingerprint and Face ID). All transactions are logged on an immutable audit ledger.",
      },
      {
        question: "What happens if I lose my phone?",
        answer: "Your funds reside securely in your cloud account, not on your physical device. Simply contact support or sign in from another device to secure your wallet.",
      },
      {
        question: "Can someone access my account without my PIN?",
        answer: "No. Every sensitive transaction requires your security credentials, and biometric checks or 2FA codes are required on unfamiliar devices.",
      },
    ]
  },
  {
    category: "Agent Services",
    icon: <CreditCard className="w-5 h-5 text-[#3DE8A0]" />,
    questions: [
      {
        question: "How do I become a WalletX agent?",
        answer: "Select 'Become an agent' when registering or contact support. Agents receive an agent dashboard, float management tools, and priority verification.",
      },
      {
        question: "How much can agents earn?",
        answer: "Agents earn a guaranteed ৳4 commission for every ৳1,000 cash-out they process. The commission is deposited instantly into the agent's wallet upon transaction confirmation.",
      },
      {
        question: "How do agents top up their cash float?",
        answer: "Agents can receive cash in top-ups from admin up to ৳100,000 per transaction with real-time balance updates.",
      },
    ]
  },
  {
    category: "Support & Help",
    icon: <Phone className="w-5 h-5 text-[#3DE8A0]" />,
    questions: [
      {
        question: "How can I contact customer support?",
        answer: "Our support team is available 24/7. Email us at hassan.nahid.dev@gmail.com, call +880 1780-365440, or use the live chat in the portal.",
      },
      {
        question: "What is the average response time?",
        answer: "Live chat inquiries are answered within minutes. Email support tickets are typically resolved in under 2 hours.",
      },
    ]
  },
];

const FAQPage = () => {
  return (
    <main className="min-h-screen bg-[#F3F6F4] text-[#0C1A14]">
      {/* Header */}
      <section className="bg-[#0B2318] text-white py-20 lg:py-24 hero-grid-pattern border-b border-white/10 text-center">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col items-center gap-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#3DE8A0]/40 rounded-full font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#3DE8A0] bg-[#3DE8A0]/5">
            Knowledge Base
          </div>
          <h1 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white max-w-3xl">
            Frequently Asked Questions
          </h1>
          <p className="m-0 text-lg sm:text-xl text-[#B7CCC0] max-w-2xl leading-relaxed">
            Everything you need to know about fees, cash-out rates, agent commissions, and wallet security.
          </p>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-8 bg-white border-b border-[#D9E2DC] sticky top-[72px] z-30 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 overflow-x-auto">
          <div className="flex items-center justify-center gap-3 min-w-max">
            {faqCategories.map((cat, idx) => (
              <a
                key={idx}
                href={`#cat-${idx}`}
                className="px-4 py-2 rounded-xl bg-[#F3F6F4] border border-[#D9E2DC] text-xs sm:text-sm font-semibold text-[#0C1A14] hover:border-[#12B76A] hover:text-[#087F4C] transition-all flex items-center gap-2"
              >
                <span>{cat.category}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Groups */}
      <section className="py-16 bg-[#F3F6F4]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 flex flex-col gap-14">
          {faqCategories.map((cat, idx) => (
            <div
              key={idx}
              id={`cat-${idx}`}
              className="scroll-mt-36 flex flex-col gap-5 p-7 sm:p-9 bg-white border border-[#D9E2DC] rounded-3xl shadow-sm"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-[#D9E2DC]">
                <div className="w-10 h-10 rounded-xl bg-[#0B2318] flex items-center justify-center shrink-0">
                  {cat.icon}
                </div>
                <h2 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-2xl text-[#0C1A14] m-0">
                  {cat.category}
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {cat.questions.map((q, qIdx) => (
                  <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`} className="border-b border-[#E4EBE7] last:border-b-0">
                    <AccordionTrigger className="text-left font-['Figtree',sans-serif] font-semibold text-base sm:text-lg text-[#0C1A14] hover:text-[#087F4C] py-4">
                      {q.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#4A5D54] text-base leading-relaxed pb-4">
                      {q.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-white border-t border-[#D9E2DC] text-center">
        <div className="max-w-[800px] mx-auto px-4 flex flex-col items-center gap-4">
          <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl text-[#0C1A14] m-0">
            Still have questions?
          </h2>
          <p className="text-base text-[#4A5D54] m-0">
            Our team is always available to help you with your wallet account or agent registration.
          </p>
          <div className="flex gap-3 pt-2">
            <Link
              to="/contact"
              className="btn px-6 py-3 rounded-xl font-bold text-sm text-[#04170E] bg-[#12B76A] hover:bg-[#0fa968] transition-all"
            >
              Contact Support
            </Link>
            <Link
              to="/register"
              className="btn px-6 py-3 rounded-xl font-bold text-sm text-[#0C1A14] border border-[#D9E2DC] hover:bg-[#F3F6F4] transition-all"
            >
              Create Account <ArrowRight className="inline w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;