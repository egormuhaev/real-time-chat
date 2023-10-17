import { type RouteProps } from "react-router-dom";
import { NotFoundPage } from "page/NotFoundPage";
import { HomePage } from "page/HomePage";
import { AboutPage } from "page/AboutPage";
import { LoginPage } from "page/LoginPage";
import { ProfilePage } from "page/ProfilePage";
import { FriendsPage } from "page/FriendsPage";
import { ConfirmPage } from "page/ConfirmPage";
import { RequireConfigPage } from "page/RequireConfigPage";

export enum AppRoutesPublic {
  NOT_FOUND = "not_found",
  LOGIN = "login",
  CONFIRM_EMAIL = "confirm_email",
  REQ_CONFIRM_EMAIL = "req_confirm_email",
}

export enum AppRoutesPrivate {
  HOME = "home",
  ABOUT = "about",
  PROFILE = "profile",
  FRIENDS = "friends",
}

export const RoutePaths: Record<AppRoutesPublic | AppRoutesPrivate, string> = {
  [AppRoutesPrivate.HOME]: "/",
  [AppRoutesPrivate.ABOUT]: "/about",
  [AppRoutesPublic.LOGIN]: "/login",
  [AppRoutesPrivate.PROFILE]: "/profile",
  [AppRoutesPrivate.FRIENDS]: "/friends",
  [AppRoutesPublic.NOT_FOUND]: "*",
  [AppRoutesPublic.CONFIRM_EMAIL]: "/confirm",
  [AppRoutesPublic.REQ_CONFIRM_EMAIL]: "/req-confirm",
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
  [AppRoutesPublic.CONFIRM_EMAIL]: {
    path: RoutePaths.confirm_email,
    element: <ConfirmPage />,
  },
  [AppRoutesPublic.REQ_CONFIRM_EMAIL]: {
    path: RoutePaths.req_confirm_email,
    element: <RequireConfigPage />,
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
  [AppRoutesPrivate.FRIENDS]: {
    path: RoutePaths.friends,
    element: <FriendsPage />,
  },
};

export const routerConfig = {
  privateRoute,
  publicRoute,
};
