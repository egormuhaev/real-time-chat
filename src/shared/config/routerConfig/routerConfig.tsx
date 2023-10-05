import { type RouteProps } from "react-router-dom";
import { NotFoundPage } from "page/NotFoundPage";
import { HomePage } from "page/HomePage";
import { AboutPage } from "page/AboutPage";
import { LoginPage } from "page/LoginPage";
import { ProfilePage } from "page/ProfilePage";

export enum AppRoutesPublic {
  NOT_FOUND = "not_found",
  LOGIN = "login",
}

export enum AppRoutesPrivate {
  HOME = "home",
  ABOUT = "about",
  PROFILE = "profile",
}

export const RoutePaths: Record<AppRoutesPublic | AppRoutesPrivate, string> = {
  [AppRoutesPrivate.HOME]: "/",
  [AppRoutesPrivate.ABOUT]: "/about",
  [AppRoutesPublic.LOGIN]: "/login",
  [AppRoutesPrivate.PROFILE]: "/profile",
  [AppRoutesPublic.NOT_FOUND]: "*",
};

export const publicRoute: Record<AppRoutesPublic, RouteProps> = {
  [AppRoutesPublic.LOGIN]: {
    path: RoutePaths.login,
    element: <LoginPage />,
  },
  [AppRoutesPublic.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
};

export const privateRoute: Record<AppRoutesPrivate, RouteProps> = {
  [AppRoutesPrivate.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
  [AppRoutesPrivate.PROFILE]: {
    path: RoutePaths.profile,
    element: <ProfilePage />,
  },
  [AppRoutesPrivate.HOME]: {
    path: RoutePaths.home,
    element: <HomePage />,
  },
};

export const routerConfig = {
  privateRoute,
  publicRoute,
};
