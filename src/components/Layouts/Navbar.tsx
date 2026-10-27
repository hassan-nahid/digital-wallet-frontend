import { useState } from "react";
import Logo from "@/assets/Logo/Logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, useLocation } from "react-router";
import { ModeToggle } from "./ModeToggle";
import { authAPi, useLogoutMutation, useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { role } from "@/constants/role";
import { Wallet, Send, ArrowDownToLine, ArrowUpFromLine, ChevronDown, LayoutDashboard, Menu, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout(undefined).unwrap();
      dispatch(authAPi.util.resetApiState());
      setMobileOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const userRole = data?.data?.role;
  const dashboardHref =
    userRole === role.admin
      ? "/admin"
      : userRole === role.agent
      ? "/agent"
      : userRole === role.user
      ? "/user"
      : null;

  const publicLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/features", label: "Features" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ];

  const serviceLinks = [
    { href: "/services/send-money", label: "Send Money", desc: "Instant wallet transfer", icon: Send },
    { href: "/services/cash-out", label: "Cash Out", desc: "Agent cash withdrawal", icon: ArrowUpFromLine },
    { href: "/services/cash-in", label: "Cash In", desc: "Deposit via agent", icon: ArrowDownToLine },
    { href: "/services/transactions", label: "Transactions", desc: "Real-time audit log", icon: Wallet },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B2318] border-b border-white/10 text-white transition-colors w-full">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <nav className="flex h-[72px] items-center justify-between gap-4">
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-2.5 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[22px] tracking-tight text-white hover:opacity-90 transition-opacity"
            >
              <Logo size={34} />
              <span>WalletX</span>
            </Link>
          </div>

          {/* Desktop Navigation Links (Center) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-7 text-[15px] font-medium text-[#B7CCC0]">
            {publicLinks.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`transition-colors ${
                    isActive ? "text-[#3DE8A0] font-bold" : "hover:text-[#3DE8A0]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="hover:text-[#3DE8A0] font-medium flex items-center gap-1 cursor-pointer transition-colors outline-none"
                >
                  Services <ChevronDown className="h-4 w-4 opacity-75" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 p-1.5 bg-[#0B2318] border border-white/15 text-white shadow-xl rounded-xl">
                {serviceLinks.map((svc) => {
                  const SvcIcon = svc.icon;
                  return (
                    <DropdownMenuItem key={svc.href} asChild>
                      <Link to={svc.href} className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer">
                        <SvcIcon className="h-4 w-4 text-[#3DE8A0]" />
                        <div>
                          <div className="font-semibold text-sm">{svc.label}</div>
                          <div className="text-xs text-[#B7CCC0]">{svc.desc}</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            {dashboardHref && (
              <Link
                to={dashboardHref}
                className="text-[#3DE8A0] hover:text-[#32d992] font-semibold flex items-center gap-1.5 transition-colors"
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Link>
            )}
          </div>

          {/* Right Action / Auth & Mobile Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle - Always visible */}
            <ModeToggle />

            {/* If logged in: User Menu on desktop */}
            {data?.data?.email ? (
              <div className="hidden sm:block">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className="flex items-center gap-2.5 p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer outline-none"
                      aria-label="User menu"
                    >
                      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#12B76A] text-[#04170E] font-bold text-sm shadow-md">
                        {data.data.name ? data.data.name.charAt(0).toUpperCase() : "U"}
                      </span>
                      <span className="hidden lg:inline text-sm font-semibold text-white max-w-[120px] truncate">
                        {data.data.name || "My Wallet"}
                      </span>
                      <ChevronDown className="hidden lg:inline h-4 w-4 text-[#B7CCC0]" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-64 p-3 bg-[#0B2318] border border-white/15 text-white shadow-2xl rounded-2xl">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-3 pb-2.5 border-b border-white/10">
                        <div className="w-9 h-9 rounded-full bg-[#12B76A] text-[#04170E] flex items-center justify-center font-bold text-sm">
                          {data.data.name ? data.data.name.charAt(0).toUpperCase() : "U"}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm truncate">{data.data.name || "User"}</div>
                          <div className="text-xs text-[#B7CCC0] truncate">{data.data.email}</div>
                          <div className="inline-block mt-0.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#3DE8A0]/15 text-[#3DE8A0]">
                            {data.data.role}
                          </div>
                        </div>
                      </div>

                      {dashboardHref && (
                        <DropdownMenuItem asChild>
                          <Link
                            to={dashboardHref}
                            className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-semibold flex items-center gap-2 text-white transition-colors cursor-pointer"
                          >
                            <LayoutDashboard className="w-4 h-4 text-[#3DE8A0]" />
                            Dashboard
                          </Link>
                        </DropdownMenuItem>
                      )}

                      <Button
                        onClick={handleLogout}
                        variant="outline"
                        size="sm"
                        className="w-full cursor-pointer mt-1 border-white/20 text-white hover:bg-white/10 hover:text-white"
                      >
                        Logout
                      </Button>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2.5">
                <Link
                  to="/login"
                  className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-sm font-semibold text-white border border-white/25 hover:border-white/50 hover:bg-white/5 transition-all"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-sm font-bold text-[#04170E] bg-[#3DE8A0] hover:bg-[#32d992] shadow-sm transition-all"
                >
                  Create account
                </Link>
              </div>
            )}

            {/* Mobile Menu Sheet */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="md:hidden size-9 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                  aria-label="Open mobile menu"
                >
                  <Menu className="w-5 h-5 text-white" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[350px] bg-[#0B2318] border-l border-white/15 text-white p-0 flex flex-col justify-between overflow-y-auto"
              >
                <div>
                  {/* Drawer Header */}
                  <SheetHeader className="p-5 border-b border-white/10 flex flex-row items-center justify-between space-y-0 text-left">
                    <SheetTitle className="text-left">
                      <Link
                        to="/"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2.5 font-['Bricolage_Grotesque',sans-serif] font-extrabold text-xl tracking-tight text-white"
                      >
                        <Logo size={28} />
                        <span>WalletX</span>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  {/* Drawer Navigation Links */}
                  <div className="p-5 flex flex-col gap-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 px-3 pb-1">
                      Menu
                    </span>
                    {publicLinks.map((item) => {
                      const isActive = location.pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                            isActive
                              ? "bg-white/15 text-[#3DE8A0]"
                              : "text-[#B7CCC0] hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <span>{item.label}</span>
                        </Link>
                      );
                    })}

                    {/* Services Sub-list */}
                    <div className="pt-3 mt-2 border-t border-white/10">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 px-3">
                        Services
                      </span>
                      <div className="flex flex-col gap-1 mt-2">
                        {serviceLinks.map((svc) => {
                          const SvcIcon = svc.icon;
                          const isActive = location.pathname === svc.href;
                          return (
                            <Link
                              key={svc.href}
                              to={svc.href}
                              onClick={() => setMobileOpen(false)}
                              className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs transition-colors ${
                                isActive
                                  ? "bg-white/15 text-[#3DE8A0] font-bold"
                                  : "text-[#B7CCC0] hover:bg-white/10 hover:text-white"
                              }`}
                            >
                              <SvcIcon className="w-4 h-4 text-[#3DE8A0]" />
                              <div>
                                <div className="font-semibold">{svc.label}</div>
                                <div className="text-[11px] text-white/60">{svc.desc}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {dashboardHref && (
                      <div className="pt-3 mt-2 border-t border-white/10">
                        <Link
                          to={dashboardHref}
                          onClick={() => setMobileOpen(false)}
                          className="px-3 py-2.5 rounded-xl bg-[#3DE8A0]/15 text-[#3DE8A0] font-bold text-sm flex items-center gap-2 hover:bg-[#3DE8A0]/25 transition-colors"
                        >
                          <LayoutDashboard className="w-4 h-4" />
                          <span>Go to Dashboard</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                {/* Drawer Footer Actions */}
                <div className="p-5 border-t border-white/10 bg-[#091F15]/80 flex flex-col gap-3">
                  {data?.data?.email ? (
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#12B76A] text-[#04170E] flex items-center justify-center font-bold text-sm">
                          {data.data.name ? data.data.name.charAt(0).toUpperCase() : "U"}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm truncate text-white">{data.data.name || "User"}</div>
                          <div className="text-xs text-[#B7CCC0] truncate">{data.data.email}</div>
                          <span className="inline-block mt-0.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#3DE8A0]/15 text-[#3DE8A0]">
                            {data.data.role}
                          </span>
                        </div>
                      </div>
                      <Button
                        onClick={handleLogout}
                        variant="outline"
                        className="w-full cursor-pointer border-white/20 text-white hover:bg-white/10"
                      >
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2.5">
                      <Link
                        to="/register"
                        onClick={() => setMobileOpen(false)}
                        className="w-full py-2.5 px-4 rounded-xl text-center text-sm font-bold text-[#04170E] bg-[#3DE8A0] hover:bg-[#32d992] shadow transition-colors"
                      >
                        Create account
                      </Link>
                      <Link
                        to="/login"
                        onClick={() => setMobileOpen(false)}
                        className="w-full py-2.5 px-4 rounded-xl text-center text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
                      >
                        Log in
                      </Link>
                    </div>
                  )}

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#B7CCC0] pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#3DE8A0]" />
                    <span>Bank-grade 256-bit encryption</span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
