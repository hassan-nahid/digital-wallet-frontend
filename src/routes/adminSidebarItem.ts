
// import Analytics from "@/pages/Admin/Analytics";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analaytics = lazy(() => import("@/pages/Admin/Analaytics"))
const ManageUser = lazy(() => import("@/pages/Admin/ManageUser"))
const ManageAgent = lazy(() => import("@/pages/Admin/ManageAgent"))
const ManageWallet = lazy(() => import("@/pages/Admin/ManageWallet"))
const AllTransactions = lazy(() => import("@/pages/Admin/AllTransactions"))
const WalletOverview = lazy(() => import("@/pages/Admin/WalletOverview"))
const MyTransactions = lazy(() => import("@/pages/Admin/MyTransactions"))
const CashIn = lazy(() => import("@/pages/Admin/CashIn"))
const Withdraw = lazy(() => import("@/pages/Admin/Withdraw"))
const Profile = lazy(() => import("@/pages/Admin/Profile"))
const ChangePassword = lazy(() => import("@/pages/Admin/ChangePassword"))
const Settings = lazy(() => import("@/pages/Admin/Settings"))

export const adminSidebarItem: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analaytics",
        url: "/admin/analytics",
        component: Analaytics
      },
      {
        title: "Manage User",
        url: "/admin/manage-user",
        component: ManageUser
      },
      {
        title: "Manage Agent",
        url: "/admin/manage-agent",
        component: ManageAgent
      },
      {
        title: "Manage Wallet",
        url: "/admin/manage-wallet",
        component: ManageWallet
      },
      {
        title: "All Transactions",
        url: "/admin/all-transactions",
        component: AllTransactions
      },
    ],
  },
  {
    title: "My Transactions",
    items: [
      {
        title: "Wallet Overview",
        url: "/admin/wallet-overview",
        component: WalletOverview
      },
      {
        title: "Cash In",
        url: "/admin/cash-in",
        component: CashIn
      },
      {
        title: "Withdraw",
        url: "/admin/withdraw",
        component: Withdraw
      },
      {
        title: "My Transactions",
        url: "/admin/my-transactions",
        component: MyTransactions
      },
      {
        title: "Profile",
        url: "/admin/profile",
        component: Profile
      },
      {
        title: "Change Password",
        url: "/admin/change-password",
        component: ChangePassword
      },
      {
        title: "Settings",
        url: "/admin/settings",
        component: Settings
      },
    ],
  },

]