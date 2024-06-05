import { lazy } from "react";
import { Navigate } from "react-router-dom";

const HomePage = lazy(() => import("../pages/Home"));
const LibraryPage = lazy(() => import("../pages/Library"));
const HistoryPage = lazy(() => import("../pages/History"));
const SearchPage = lazy(() => import("../pages/Search"));
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
    component: <LibraryPage />,
  },
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "/history",
    component: <HistoryPage />,
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
    url: "/search",
    component: <SearchPage />,
  },
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "*",
    component: <Navigate to="/" replace />,
  },
];
