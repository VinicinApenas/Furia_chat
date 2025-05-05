// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    rules: {}, // você pode remover se não estiver usando custom loaders
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
