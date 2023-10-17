import { lazy } from "react";

export const RequireConfigPageLazy = lazy(
  async () => await import("./RequireConfigPage")
);
