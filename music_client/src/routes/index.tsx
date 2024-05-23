import { ComponentType, LazyExoticComponent, lazy } from "react";

const HomePage = lazy(() => import("../pages/Home"));
const MyMusic = lazy(() => import("../pages/MyMusic"));
const RechargePage = lazy(() => import("../pages/Recharge"));
const UploadSoundPage = lazy(() => import("../pages/UploadSound"));

interface RouteConfig {
  pageTitle: string;
  url: string;
  component: LazyExoticComponent<ComponentType<any>>;
}

export const routes: RouteConfig[] = [
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "/",
    component: HomePage,
  },
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "/mymusic",
    component: MyMusic,
  },
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "/recharge",
    component: RechargePage,
  },
  {
    pageTitle: " Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
    url: "/upload-sound",
    component: UploadSoundPage,
  },
];
