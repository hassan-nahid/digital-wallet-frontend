
// import Analytics from "@/pages/Admin/Analytics";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/Admin/Analaytics"))

export const adminSidebarItem: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analaytics",
        url: "/admin/analytics",
        component: Analytics
      },
    ],
  },
  {
    title: "Tour Management",
    items: [
    
    ],
  },

]