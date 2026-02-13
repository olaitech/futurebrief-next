import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/no/systems", destination: "/no/systemer", permanent: true },
      { source: "/systemer", destination: "/systems", permanent: true },
    ];
  },
};

export default nextConfig;
