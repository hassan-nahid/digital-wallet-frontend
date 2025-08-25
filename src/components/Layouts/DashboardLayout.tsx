import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import { ModeToggle } from "./ModeToggle";
import { useEffect, useRef } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

interface Step {
  element: string;
  popover: { title: string; description: string };
}

export default function DashboardLayout() {
  const driverRef = useRef<ReturnType<typeof driver> | null>(null);
  const { data } = useUserInfoQuery(undefined);
  const role = data?.data?.role; // "admin" | "agent" | "user"

  useEffect(() => {
    if (!role) return; // role load না হলে tour run হবে না

    const commonSteps: Step[] = [
      { element: "#sidebar-nav", popover: { title: "Sidebar", description: "Use the sidebar to navigate." } },
      { element: "#theme-toggle", popover: { title: "Theme", description: "Switch between light and dark mode." } },
      // { element: "#table-filters", popover: { title: "Table Search/Filter", description: "Search and filter your data tables easily." } },
    ];

    let roleSteps: Step[] = [];

    if (role === "ADMIN") {
      roleSteps = [
        { element: "#dashboard-analytics-cards", popover: { title: "Cards", description: "View key metrics here." } },
        { element: "#dashboard-analytics-chart", popover: { title: "Chart", description: "Visualize trends." } },
        {
          element: "#table-filters",
          popover: {
            title: "Table Search/Filter",
            description: `
          Filter and search all tables: Users, Agents, Wallets, Transactions.
          Use criteria like name, email, ID, type, date range, status.
          Available on pages like Manage User, Manage Agent, Manage Wallet, All Transactions.
        `
          }
        }
      ];
    } else {
      // agent or user
      roleSteps = [
        { element: "#wallet-overview", popover: { title: "Wallet Overview", description: "Check your wallet balance and summary." } },
        { element: "#recent-transactions", popover: { title: "Recent Transactions", description: "View the latest transactions in your account." } },
        {
          element: "#table-filters",
          popover: {
            title: "Transactions History",
            description: `
          Filter and search your transaction history only.
          Use criteria like date, type, or status.
          Other tables like Users, Agents, or Wallets are not available for your role.
        `
          }
        }
      ];
    }

    const steps = [...commonSteps.slice(0, 1), ...roleSteps, ...commonSteps.slice(1)];

    const lastStep = parseInt(localStorage.getItem("tour-last-step") || "0");
    if (lastStep >= steps.length) return;

    driverRef.current = driver({
      steps,
      showProgress: true,
      onCloseClick: () => localStorage.setItem("tour-last-step", steps.length.toString()),
      onDestroyed: () => localStorage.setItem("tour-last-step", steps.length.toString()),
    });

    if (driverRef.current && typeof driverRef.current.moveTo === "function") {
      driverRef.current.moveTo(lastStep);
    }

    driverRef.current.drive();

    return () => driverRef.current?.destroy();
  }, [role]);

  return (
    <SidebarProvider>
      <div id="sidebar-nav">
        <AppSidebar />
      </div>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
          <div id="theme-toggle">
            <ModeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
