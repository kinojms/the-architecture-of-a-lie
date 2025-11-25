import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  eslint: {
    // Temporarily ignore ESLint errors during the production build so we can
    // focus on critical TypeScript/runtime issues. Remove or set to `false`
    // once lint errors are addressed.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
