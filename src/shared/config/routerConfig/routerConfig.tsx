import { type RouteProps } from "react-router-dom";
import { NotFoundPage } from "page/NotFoundPage";
import { HomePage } from "page/HomePage";
import { AboutPage } from "page/AboutPage";

export enum AppRoutes {
  HOME = "home",
  NOT_FOUND = "not_found",
  ABOUT = "about",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePaths.home,
    element: <HomePage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
};
