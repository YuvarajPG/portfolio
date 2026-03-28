import type { NextConfig } from "next";

const nextConfig: NextConfig = {

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
        unoptimized: true,
    },
};

export default nextConfig;
