import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: isProd ? "/vogue-dance-studio" : "",
  assetPrefix: isProd ? "/vogue-dance-studio" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/vogue-dance-studio" : "",
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
