import App from "@/App";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Features from "@/pages/Features";
import HomePage from "@/pages/HomePage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Services from "@/pages/Services";
import CashOutService from "@/pages/CashOutService";
import CashInService from "@/pages/CashInService";
import SendMoneyService from "@/pages/SendMoneyService";
import TransactionsService from "@/pages/TransactionsService";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItem } from "./adminSidebarItem";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { role } from "@/constants/role";
import type { TRole } from "@/types";
import { userSidebarItem } from "./userSidebarItem";
import { generateRoutes } from "@/utils/generateRoutes";
import { agentSidebarItem } from "./agentSidebarItem";
import Unauthorized from "@/pages/Unauthorized";
import ErrorPage from "@/pages/ErrorPage";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        Component: HomePage,
        index: true
      },
      {
        Component: About,
        path: "about"
      },
      {
        Component: Contact,
        path: "contact"
      },
      {
        Component: Features,
        path: "features"
      },
      {
        Component: FAQ,
        path: "faq"
      },
      {
        Component: Services,
        path: "services"
      },
      {
        Component: CashOutService,
        path: "services/cash-out"
      },
      {
        Component: CashInService,
        path: "services/cash-in"
      },
      {
        Component: SendMoneyService,
        path: "services/send-money"
      },
      {
        Component: TransactionsService,
        path: "services/transactions"
      },
    ]
  },
  {
    Component: withAuth(DashboardLayout, role.admin as TRole),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/analaytics" /> },
      ...generateRoutes(adminSidebarItem)
    ]
  },
  {
    Component: withAuth(DashboardLayout, role.user as TRole),
    path: "/user",
    children: [
      { index: true, element: <Navigate to="/user/overview" /> },
      ...generateRoutes(userSidebarItem)
    ]
  },
  {
    Component: withAuth(DashboardLayout, role.agent as TRole),
    path: "/agent",
    children: [
      { index: true, element: <Navigate to="/agent/overview" /> },
      ...generateRoutes(agentSidebarItem)
    ]
  },
  {
    Component: Login,
    path: "login"
  },
  {
    Component: Register,
    path: "register"
  },
  {
    Component: Unauthorized,
    path: "unauthorized"
  },
  {
    path: "*",
    element: <ErrorPage />
  },
]);