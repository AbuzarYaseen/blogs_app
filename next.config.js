/** @type {import('next').NextConfig} */
const dotenv = require("dotenv");
dotenv.config();

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pexels.com",
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
