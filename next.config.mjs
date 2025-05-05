// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // ✅ desativa lint na build
  },
};

export default nextConfig;
