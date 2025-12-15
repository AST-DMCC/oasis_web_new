import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["c.animaapp.com"],
  },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
};

// Patch for Node 25+ where localStorage is defined but broken
if (typeof global !== "undefined" && (global as any).localStorage) {
  delete (global as any).localStorage;
}


export default nextConfig;
