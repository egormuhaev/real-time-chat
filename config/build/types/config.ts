export interface BuildPaths {
  entry: string;
  html: string;
  path: string;
  src: string;
}

export type BuildMode = "development" | "production";

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
