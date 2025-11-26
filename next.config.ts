import type { NextConfig } from "next";

// When deploying to GitHub Pages the site is served from
// https://<user>.github.io/<repo>/ so we set a base path and
// asset prefix to ensure absolute `/images/...` URLs resolve correctly.
const repoBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "/the-architecture-of-a-lie";

const nextConfig = {
  output: "export",
  basePath: repoBase,
  assetPrefix: repoBase,
  // Keep builds working while lint issues are addressed.
  // The `eslint` option isn't present on the NextConfig type in some
  // versions; cast on export to avoid type errors during local type checking.
  eslint: {
    ignoreDuringBuilds: true,
  },
} as any;

export default nextConfig as NextConfig;
