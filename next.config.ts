import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https", // or http
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
