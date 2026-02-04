import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        hostname:"i.imgur.com",
        protocol:"https",
      },
      {
        hostname:"placehold.co",
        protocol:"https",
      },
    ],
  },
};

export default nextConfig;
