import type { NextConfig } from "next";

const isGithubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.*.*"],

  ...(isGithubPages && {
    output: "export",
    basePath: "/jmjagdish.github.io",
    assetPrefix: "/jmjagdish.github.io/",
    images: {
      unoptimized: true,
    },
  }),
};

export default nextConfig;
