import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",

  experimental: {
    globalNotFound: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
  },
};

export default nextConfig;
