import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Overview = lazy(() => import("@/pages/Agent/Overview"))
const CashIn = lazy(() => import("@/pages/Agent/CashIn"))

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
          title: "CashIn",
          url: "/agent/cash-in",
          component: CashIn
        },
      ],
    },


  ]