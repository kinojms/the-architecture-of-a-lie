import type { NextConfig } from "next";
const repoBase = "/the-architecture-of-a-lie";
const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: repoBase,
  assetPrefix: repoBase,
};

export default nextConfig;
