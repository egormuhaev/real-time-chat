import type webpack from "webpack";
import { type BuildOptions } from "./types/config";

export const buildResolves = (
  options: BuildOptions
): webpack.ResolveOptions => ({
  extensions: [".tsx", ".ts", ".js"],
  preferAbsolute: true,
  modules: [options.paths.src, "node_modules"],
  mainFiles: ["index"],
  alias: {},
  fallback: {
    crypto: false,
  },
});
