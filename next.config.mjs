/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: false,
    serverActions: true,
  },
};

export default nextConfig;
