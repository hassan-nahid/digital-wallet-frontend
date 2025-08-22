import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Overview = lazy(() => import("@/pages/User/Overview"))
const SendMoney = lazy(() => import("@/pages/User/SendMoney"))
const CashOut = lazy(() => import("@/pages/User/CashOut"))
const Transactions = lazy(() => import("@/pages/User/Transactions"))
const Profile = lazy(() => import("@/pages/User/Profile"))
const Settings = lazy(() => import("@/pages/User/Settings"))

export const userSidebarItem : ISidebarItem[] = [
    {
      title: "Transactions",
      items: [
        {
          title: "Overview",
          url: "/user/overview",
          component: Overview
        },
        {
          title: "Send Money",
          url: "/user/send-money",
          component: SendMoney
        },
        {
          title: "Cash Out",
          url: "/user/cash-out",
          component: CashOut
        },
        {
          title: "Transactions History",
          url: "/user/transctions-history",
          component: Transactions
        },
      ],
    },
    {
      title: "Profile and Settings",
      items: [
        {
          title: "Profile",
          url: "/user/profile",
          component: Profile
        },
        {
          title: "Settings",
          url: "/user/settings",
          component: Settings
        },
       
      ],
    },


  ]