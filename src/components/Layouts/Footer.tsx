import Logo from "@/assets/Logo/Logo";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#06130D] text-[#B7CCC0] transition-colors w-full">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-16 pb-10 flex flex-col gap-12">
        <div className="flex flex-wrap gap-10 lg:gap-16 justify-between">
          {/* Brand Info */}
          <div className="flex-1 min-w-[260px] max-w-[340px] flex flex-col gap-4">
            <Link
              to="/"
              className="flex items-center gap-2.5 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[22px] tracking-tight text-white hover:opacity-90 transition-opacity"
            >
              <Logo size={32} />
              <span>WalletX</span>
            </Link>
            <p className="text-[15px] leading-relaxed text-[#B7CCC0] m-0">
              A digital wallet for users, agents and admins. Built by Hassan Nahid.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 text-white/80 pt-2">
              <a
                href="https://www.linkedin.com/in/hassan-nahid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#3DE8A0] transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/HassanNahid100"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="hover:text-[#3DE8A0] transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/HassanNahid10"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#3DE8A0] transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/HassanNahid10"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#3DE8A0] transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex-[2_1_480px] min-w-[280px] grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3 text-[15px]">
              <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-white">
                Product
              </span>
              <a href="/#pricing" className="hover:text-[#3DE8A0] transition-colors">
                Pricing
              </a>
              <a href="/#roles" className="hover:text-[#3DE8A0] transition-colors">
                Roles
              </a>
              <a href="/#how" className="hover:text-[#3DE8A0] transition-colors">
                How it works
              </a>
              <a href="/#security" className="hover:text-[#3DE8A0] transition-colors">
                Security
              </a>
            </div>

            <div className="flex flex-col gap-3 text-[15px]">
              <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-white">
                Support
              </span>
              <a href="/#faq" className="hover:text-[#3DE8A0] transition-colors">
                FAQ
              </a>
              <Link to="/contact" className="hover:text-[#3DE8A0] transition-colors">
                Help center
              </Link>
              <Link to="/contact" className="hover:text-[#3DE8A0] transition-colors">
                Contact us
              </Link>
              <Link to="/about" className="hover:text-[#3DE8A0] transition-colors">
                About us
              </Link>
            </div>

            <div className="flex flex-col gap-3 text-[15px]">
              <span className="font-['JetBrains_Mono',monospace] text-xs font-bold tracking-widest uppercase text-white">
                Legal
              </span>
              <Link to="/contact" className="hover:text-[#3DE8A0] transition-colors">
                Privacy policy
              </Link>
              <Link to="/contact" className="hover:text-[#3DE8A0] transition-colors">
                Terms of service
              </Link>
              <Link to="/contact" className="hover:text-[#3DE8A0] transition-colors">
                Cookie policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-white/10 text-sm text-[#B7CCC0] flex flex-wrap justify-between items-center gap-4">
          <div>© 2026 WalletX. Developed by Hassan Nahid. All rights reserved.</div>
          <div className="text-xs text-[#B7CCC0]/70">
            Secure Digital Wallet Platform
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
