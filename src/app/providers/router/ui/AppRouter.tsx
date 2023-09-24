import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routerConfig } from "shared/config/routerConfig/routerConfig";
import { LoaderPage } from "shared/ui/loader";

export const AppRouter = () => {
  const publicRoutes = Object.values(routerConfig).map(({ path, element }) => (
    <Route key={path} path={path} element={element} />
  ));

  return (
    <Suspense fallback={<LoaderPage />}>
      <Routes>{publicRoutes}</Routes>
    </Suspense>
  );
};
