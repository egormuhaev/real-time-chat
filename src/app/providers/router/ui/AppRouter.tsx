import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routerConfig } from "shared/config/routerConfig/routerConfig";

export const AppRouter = () => {
  const publicRoutes = Object.values(routerConfig).map(({ path, element }) => (
    <Route key={path} path={path} element={element} />
  ));

  return (
    <Suspense fallback={<></>}>
      <Routes>{publicRoutes}</Routes>
    </Suspense>
  );
};
