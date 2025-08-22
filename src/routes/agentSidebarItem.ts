import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Overview = lazy(() => import("@/pages/Agent/Overview"))
const CashIn = lazy(() => import("@/pages/Agent/CashIn"))
const CashOut = lazy(() => import("@/pages/Agent/CashOut"))
const Transactions = lazy(() => import("@/pages/Agent/Transactions"))
const Profile = lazy(() => import("@/pages/Agent/Profile"))
const Settings = lazy(() => import("@/pages/Agent/Settings"))

export const agentSidebarItem : ISidebarItem[] = [
    {
      title: "Transactions",
      items: [
        {
          title: "Overview",
          url: "/agent/overview",
          component: Overview
        },
        {
          title: "Cash In",
          url: "/agent/cash-in",
          component: CashIn
        },
        {
          title: "Cash Out",
          url: "/agent/cash-out",
          component: CashOut
        },
        {
          title: "Transactions History",
          url: "/agent/transactions",
          component: Transactions
        },
      ],
    },
    {
      title: "Profile and Settings",
      items: [
        {
          title: "Profile",
          url: "/agent/profile",
          component: Profile
        },
        {
          title: "Settings",
          url: "/agent/settings",
          component: Settings
        },
       
      ],
    },

  ]