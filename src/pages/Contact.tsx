import ContactForm from "@/components/modules/ContactPage/ContactForm";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Clock, MessageCircle, HelpCircle } from "lucide-react";
import { Link } from "react-router";

const Contact = () => {
  return (
    <main className="min-h-screen bg-[#F3F6F4] text-[#0C1A14]">
      {/* Header */}
      <section className="bg-[#0B2318] text-white py-20 lg:py-24 hero-grid-pattern border-b border-white/10 text-center">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col items-center gap-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#3DE8A0]/40 rounded-full font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-[#3DE8A0] bg-[#3DE8A0]/5">
            Support & Inquiries
          </div>
          <h1 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white max-w-3xl">
            Get in touch with the WalletX team.
          </h1>
          <p className="m-0 text-lg sm:text-xl text-[#B7CCC0] max-w-2xl leading-relaxed">
            Reach out with any questions, feedback, or partnership opportunities. We respond within 24 hours.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6 w-full max-w-3xl">
            <div className="flex flex-col items-center bg-[#123226] border border-white/10 rounded-2xl p-6 text-center shadow-sm">
              <Mail className="w-6 h-6 text-[#3DE8A0] mb-2" />
              <span className="font-bold text-white text-base">Email</span>
              <a href="mailto:hassan.nahid.dev@gmail.com" className="text-sm text-[#B7CCC0] hover:text-[#3DE8A0] transition-colors mt-1">
                hassan.nahid.dev@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center bg-[#123226] border border-white/10 rounded-2xl p-6 text-center shadow-sm">
              <Phone className="w-6 h-6 text-[#3DE8A0] mb-2" />
              <span className="font-bold text-white text-base">Phone</span>
              <span className="text-sm text-[#B7CCC0] mt-1">+880 1780-365440</span>
            </div>
            <div className="flex flex-col items-center bg-[#123226] border border-white/10 rounded-2xl p-6 text-center shadow-sm">
              <MapPin className="w-6 h-6 text-[#3DE8A0] mb-2" />
              <span className="font-bold text-white text-base">Location</span>
              <span className="text-sm text-[#B7CCC0] mt-1">Dhaka, Bangladesh</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white/80 pt-4">
            <a href="https://www.facebook.com/HassanNahid10" target="_blank" rel="noopener noreferrer" className="hover:text-[#3DE8A0] transition-colors" title="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://x.com/HassanNahid100" target="_blank" rel="noopener noreferrer" className="hover:text-[#3DE8A0] transition-colors" title="X (Twitter)">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/hassan-nahid" target="_blank" rel="noopener noreferrer" className="hover:text-[#3DE8A0] transition-colors" title="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Inquiry Categories */}
      <section className="py-20 bg-white border-b border-[#D9E2DC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h2 className="text-center font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-4xl text-[#0C1A14] mb-12">
            How can we help you?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#F3F6F4] border border-[#E4EBE7] flex flex-col gap-3 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#0B2318] text-[#3DE8A0] flex items-center justify-center mb-1">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-[#0C1A14] m-0">General Inquiries</h3>
              <p className="text-sm text-[#4A5D54] leading-relaxed m-0">
                Questions about wallet limits, fee calculations, and transaction settlement.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F3F6F4] border border-[#E4EBE7] flex flex-col gap-3 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#0B2318] text-[#3DE8A0] flex items-center justify-center mb-1">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-[#0C1A14] m-0">Technical Support</h3>
              <p className="text-sm text-[#4A5D54] leading-relaxed m-0">
                Issues with 2FA, PIN resets, biometric verification, or transaction status.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F3F6F4] border border-[#E4EBE7] flex flex-col gap-3 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#0B2318] text-[#3DE8A0] flex items-center justify-center mb-1">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-[#0C1A14] m-0">Agent & Enterprise</h3>
              <p className="text-sm text-[#4A5D54] leading-relaxed m-0">
                Apply to become a verified cash-out agent or integrate WalletX for business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Message Form */}
      <section className="py-20 bg-[#F3F6F4]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-[#D9E2DC] p-8 sm:p-12 shadow-sm flex flex-col gap-8">
            <div className="text-center flex flex-col gap-2">
              <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-4xl text-[#0C1A14] m-0">
                Send Us a Message
              </h2>
              <p className="text-base text-[#4A5D54] m-0">
                Fill out the form below and our team will get back to you promptly.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-16 bg-white border-t border-b border-[#D9E2DC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-[#E1EBE5] text-[#087F4C] flex items-center justify-center mb-1">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl text-[#0C1A14] m-0">
              Support Hours
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="p-6 rounded-2xl bg-[#F3F6F4] border border-[#E4EBE7]">
              <h3 className="font-bold text-lg text-[#0C1A14] mb-3">Live Platform Chat</h3>
              <div className="flex justify-between text-sm py-1.5 border-b border-[#D9E2DC]">
                <span className="text-[#4A5D54]">Monday - Friday:</span>
                <span className="font-bold text-[#0C1A14]">24 / 7</span>
              </div>
              <div className="flex justify-between text-sm py-1.5">
                <span className="text-[#4A5D54]">Saturday - Sunday:</span>
                <span className="font-bold text-[#0C1A14]">24 / 7</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F3F6F4] border border-[#E4EBE7]">
              <h3 className="font-bold text-lg text-[#0C1A14] mb-3">Email Helpdesk</h3>
              <div className="flex justify-between text-sm py-1.5 border-b border-[#D9E2DC]">
                <span className="text-[#4A5D54]">Average Response:</span>
                <span className="font-bold text-[#0C1A14]">Under 2 hours</span>
              </div>
              <div className="flex justify-between text-sm py-1.5">
                <span className="text-[#4A5D54]">Direct Support:</span>
                <span className="font-bold text-[#087F4C]">hassan.nahid.dev@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-16 bg-[#F3F6F4] text-center">
        <div className="max-w-[800px] mx-auto px-4 flex flex-col items-center gap-4">
          <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl text-[#0C1A14] m-0">
            Looking for quick answers?
          </h2>
          <p className="text-base text-[#4A5D54] m-0">
            Check our FAQ section for instant guidance on send fees, cash-out rates, and account limits.
          </p>
          <Link
            to="/#faq"
            className="btn px-6 py-3 rounded-xl font-bold text-sm text-[#04170E] bg-[#12B76A] hover:bg-[#0fa968] transition-all"
          >
            View all FAQs
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Contact;