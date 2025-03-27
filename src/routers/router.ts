import { lazy } from "react";
import { createBrowserRouter } from "react-router";
// import Layout from "../Pages/Layout/Layout";
const Layout = lazy(() => import("../Pages/Layout/Layout"));
const Home = lazy(() => import("../Pages/Home/HomeContainer"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,    
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/about",
        Component: Home,
      },
      {
        path: "/contact",
        Component: Home,
      },
    ],
  },
]);