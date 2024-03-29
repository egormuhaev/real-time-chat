import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import webpack from "webpack";
import path from "path";

export default (env: BuildEnv): webpack.Configuration => {
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    path: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  return buildWebpackConfig({ mode, isDev, port: PORT, paths });
};
