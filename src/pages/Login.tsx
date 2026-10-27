import { LoginForm } from "@/components/modules/LoginPage/LoginForm";
import Logo from "@/assets/Logo/Logo";
import { Link, useNavigate } from "react-router";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useEffect } from "react";

export default function Login() {
  const { data } = useUserInfoQuery(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.data?.role) {
      let redirect = "/";
      switch (data.data.role.toUpperCase()) {
        case "USER":
          redirect = "/user/overview";
          break;
        case "AGENT":
          redirect = "/agent/overview";
          break;
        case "ADMIN":
          redirect = "/admin/analaytics";
          break;
        default:
          redirect = "/";
      }
      navigate(redirect, { replace: true });
    }
  }, [data, navigate]);

  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-[#F3F6F4] text-[#0C1A14]">
      {/* Form Column */}
      <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-12">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2.5 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-2xl tracking-tight text-[#0C1A14]"
          >
            <Logo size={34} />
            <span>WalletX</span>
          </Link>
          <Link
            to="/register"
            className="text-sm font-semibold text-[#087F4C] hover:underline"
          >
            Need an account?
          </Link>
        </div>

        <div className="flex items-center justify-center py-10">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>

        <div className="text-xs text-[#4A5D54] text-center lg:text-left">
          © 2026 WalletX. Built with bank-grade security.
        </div>
      </div>

      {/* Brand Side Column */}
      <div className="bg-[#0B2318] text-white relative hidden lg:flex flex-col justify-between p-12 hero-grid-pattern border-l border-white/10 overflow-hidden">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#3DE8A0]">
          Instant • Transparent • Secure
        </div>

        <div className="flex flex-col gap-6 max-w-md my-auto">
          <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-4xl lg:text-5xl leading-tight tracking-tight">
            A wallet where the fee is{" "}
            <span className="text-[#3DE8A0]">never a surprise.</span>
          </h2>
          <p className="text-base leading-relaxed text-[#B7CCC0]">
            Send money, deposit with agents, and cash out with complete transparency. See who earns what before you confirm.
          </p>

          <div className="p-5 rounded-2xl bg-[#123226] border border-white/10 flex flex-col gap-2">
            <div className="flex justify-between text-xs text-[#3DE8A0] font-mono font-bold uppercase tracking-wider">
              <span>Send under ৳1,000</span>
              <span>Free</span>
            </div>
            <div className="text-sm text-white font-medium">
              Zero fees for daily small payments among users.
            </div>
          </div>
        </div>

        <div className="text-xs text-[#B7CCC0]">
          Protected by AES-256 encryption and multi-factor authentication.
        </div>
      </div>
    </div>
  );
}
