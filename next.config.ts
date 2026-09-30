import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/home", destination: "/" },
      { source: "/work", destination: "/" },
      { source: "/services", destination: "/" },
      { source: "/experience", destination: "/" },
      { source: "/skills", destination: "/" },
      { source: "/contact", destination: "/" },
      { source: "/hobbies", destination: "/" },
      { source: "/faq", destination: "/" },
    ];
  },
};

export default nextConfig;

