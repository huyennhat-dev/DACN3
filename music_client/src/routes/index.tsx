import { lazy } from "react";
import { Navigate } from "react-router-dom";

const HomePage = lazy(() => import("../pages/Home"));
const LibraryPage = lazy(() => import("../pages/Library"));
const HistoryPage = lazy(() => import("../pages/History"));
const SearchPage = lazy(() => import("../pages/Search"));
const UploadSoundPage = lazy(() => import("../pages/UploadSound"));
const PlaylistPage = lazy(() => import("../pages/PlayList"));
const SoundPage = lazy(() => import("../pages/Sound"));
const ProfilePage = lazy(() => import("../pages/Profile"));
const AuthorPage = lazy(() => import("../pages/Author"));



export const routes = [
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "/",
    component: <HomePage /> ,
    protected: false,
  },
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "/sound/:path",
    component: <SoundPage /> ,
    protected: false,
  },
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "/library",
    component: <LibraryPage />,
    protected: true,
  },
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "/history",
    component: <HistoryPage />,
    protected: true,
  },
 
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "/upload-sound",
    component: <UploadSoundPage />,
    protected: true,
  },
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "/album/:id",
    component: <PlaylistPage />,
    protected: false,
  },
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "/search",
    component: <SearchPage />,
    protected: false,
  },
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "/account",
    component: <ProfilePage />,
    protected: true,
  },
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "/author/:slug/:id",
    component: <AuthorPage />,
    protected: false,
  },
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "*",
    component: <Navigate to="/" replace />,
  },
];
