// next.config.mjs
import withPWA from "next-pwa";

const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    rules: {}, // ou remova essa parte se não estiver usando loaders customizados
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
})(nextConfig);
