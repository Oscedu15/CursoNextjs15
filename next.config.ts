import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //TODO: Configuracion para ignorar los errores de typeScript y Eslint
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        port: "",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
