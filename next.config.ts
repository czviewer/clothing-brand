import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Required for static export in GitHub Pages
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
