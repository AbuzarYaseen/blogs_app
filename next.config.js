/** @type {import('next').NextConfig} */
const dotenv = require("dotenv");
dotenv.config();
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

module.exports = nextConfig;
