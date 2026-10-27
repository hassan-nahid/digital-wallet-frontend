import Logo from "@/assets/Logo/Logo";
import { RegisterForm } from "@/components/modules/RegisterPage/RagisterForm";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Link, useNavigate } from "react-router";
import { useEffect } from "react";

export default function Register() {
  const { data } = useUserInfoQuery(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.data?.email) {
      navigate("/");
    }
  }, [data, navigate]);

  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-[#F3F6F4] text-[#0C1A14]">
      {/* Brand Side Column */}
      <div className="bg-[#0B2318] text-white relative hidden lg:flex flex-col justify-between p-12 hero-grid-pattern border-r border-white/10 overflow-hidden">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#3DE8A0]">
          Join the WalletX Network
        </div>

        <div className="flex flex-col gap-6 max-w-md my-auto">
          <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-4xl lg:text-5xl leading-tight tracking-tight">
            Create an account in <span className="text-[#3DE8A0]">seconds.</span>
          </h2>
          <p className="text-base leading-relaxed text-[#B7CCC0]">
            Sign up as a personal user to send and manage funds, or register as an agent to earn commission on every cash-out.
          </p>

          <div className="flex flex-col gap-3">
            <div className="p-4 rounded-xl bg-[#123226] border border-white/10 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#3DE8A0]/15 text-[#3DE8A0] font-bold text-xs flex items-center justify-center shrink-0">
                01
              </span>
              <span className="text-sm font-medium text-white">
                Personal user: Free sends under ৳1,000
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#123226] border border-white/10 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#3DE8A0]/15 text-[#3DE8A0] font-bold text-xs flex items-center justify-center shrink-0">
                02
              </span>
              <span className="text-sm font-medium text-white">
                Agent: Earn ৳4 per ৳1,000 commission
              </span>
            </div>
          </div>
        </div>

        <div className="text-xs text-[#B7CCC0]">
          © 2026 WalletX. Transparent fees with real-time audit ledger.
        </div>
      </div>

      {/* Form Column */}
      <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 overflow-y-auto">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2.5 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-2xl tracking-tight text-[#0C1A14] dark:text-white"
          >
            <Logo size={34} />
            <span>WalletX</span>
          </Link>
          <Link
            to="/login"
            className="text-xs sm:text-sm font-semibold text-[#087F4C] hover:underline"
          >
            Already registered?
          </Link>
        </div>

        <div className="flex items-center justify-center py-6 sm:py-8">
          <div className="w-full max-w-xl">
            <RegisterForm />
          </div>
        </div>

        <div className="text-[11px] sm:text-xs text-[#4A5D54] dark:text-[#B7CCC0] text-center lg:text-left">
          By signing up, you agree to our Terms of Service & Privacy Policy.
        </div>
      </div>
    </div>
  );
}
