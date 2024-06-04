import { lazy } from "react";
import { Navigate } from "react-router-dom";

const HomePage = lazy(() => import("../pages/Home"));
const Library = lazy(() => import("../pages/Library"));
const History = lazy(() => import("../pages/History"));
const RechargePage = lazy(() => import("../pages/Recharge"));
const UploadSoundPage = lazy(() => import("../pages/UploadSound"));
const PlaylistPage = lazy(() => import("../pages/PlayList"));



export const routes = [
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "/",
    component: <HomePage /> ,
  },
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "/library",
    component: <Library />,
  },
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "/history",
    component: <History />,
  },
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "/recharge",
    component: <RechargePage />,
  },
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "/upload-sound",
    component: <UploadSoundPage />,
  },
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "/album/:id",
    component: <PlaylistPage />,
  },
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "*",
    component: <Navigate to="/" replace />,
  },
];
