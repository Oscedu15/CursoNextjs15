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
};

export default nextConfig;
