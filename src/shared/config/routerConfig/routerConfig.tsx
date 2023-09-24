import { type RouteProps } from "react-router-dom";
import { NotFoundPage } from "page/NotFoundPage";
import { HomePage } from "page/HomePage";
import { AboutPage } from "page/AboutPage";
import { LoginPage } from "page/LoginPage";

export enum AppRoutes {
  HOME = "home",
  NOT_FOUND = "not_found",
  ABOUT = "about",
  LOGIN = "login",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.LOGIN]: "/login",
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
  [AppRoutes.LOGIN]: {
    path: RoutePaths.login,
    element: <LoginPage />,
  },
};
