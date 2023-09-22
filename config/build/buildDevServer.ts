import { type Configuration as DevServerConfiguration } from "webpack-dev-server";
import { type BuildOptions } from "./types/config";

export const buildDevServer = (
  options: BuildOptions
): DevServerConfiguration => {
  const { port } = options;
  return {
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true,
  };
};
