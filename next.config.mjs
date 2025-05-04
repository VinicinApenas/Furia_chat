import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      loaders: {},
    },
    serverActions: {},
  },
};

const pwaConfig = {
  dest: "public",
  disable: process.env.NODE_ENV === "development",
};

export default withPWA(pwaConfig)(baseConfig);
