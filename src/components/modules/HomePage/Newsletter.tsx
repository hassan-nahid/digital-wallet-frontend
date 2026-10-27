import { useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="bg-[#F3F6F4] py-16 w-full">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="bg-[#0B2318] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-xl relative overflow-hidden hero-grid-pattern">
          <div className="max-w-[620px] mx-auto text-center flex flex-col items-center gap-5">
            <div className="w-13 h-13 rounded-2xl bg-[#12B76A]/20 text-[#3DE8A0] flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>

            <h2 className="m-0 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[28px] sm:text-[38px] leading-tight text-white tracking-tight">
              Stay ahead on fees & product updates
            </h2>

            <p className="m-0 text-base leading-relaxed text-[#B7CCC0]">
              Get transparent product updates, security advisories, and financial guides directly to your inbox. No spam, unsubscribe anytime.
            </p>

            {!subscribed ? (
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col sm:flex-row gap-2.5 pt-2"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-[#B7CCC0]/60 text-sm focus:outline-none focus:border-[#3DE8A0] transition-colors"
                />
                <button
                  type="submit"
                  className="btn h-12 px-7 rounded-xl font-bold text-sm text-[#04170E] bg-[#3DE8A0] hover:bg-[#32d992] transition-all cursor-pointer shrink-0"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 text-[#3DE8A0] font-semibold text-base py-3">
                <CheckCircle2 className="w-5 h-5" />
                <span>Thank you for subscribing to WalletX!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
