import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routerConfig } from "shared/config/routerConfig/routerConfig";
import { LoaderPage } from "shared/ui/loader";
import { AuthRoute } from "../AuthRoute/AuthRoute";

export const AppRouter = () => {
  const publicRoutes = Object.values(routerConfig.publicRoute).map(
    ({ path, element }) => <Route key={path} path={path} element={element} />
  );

  const privateRoutes = Object.values(routerConfig.privateRoute).map(
    ({ path, element }) => (
      <Route
        key={path}
        path={path}
        element={<AuthRoute>{element}</AuthRoute>}
      />
    )
  );

  const routes = [...publicRoutes, ...privateRoutes];

  return (
    <Suspense fallback={<LoaderPage />}>
      <Routes>{routes}</Routes>
    </Suspense>
  );
};
