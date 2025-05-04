import withPWA from "next-pwa";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: false,
    serverActions: true,
  },
};

export default withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // ✅ OK
  // ❌ NÃO coloque 'experimental' aqui
})(nextConfig);
