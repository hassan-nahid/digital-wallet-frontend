import App from "@/App";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Features from "@/pages/Features";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
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
    ]
  },
]);