import withPWA from "next-pwa";

const nextConfig = {
  experimental: {
    serverActions: true,
    turbo: false,
  },
  reactStrictMode: true,
};

export default withPWA(nextConfig);
