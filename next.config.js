/** @type {import('next').NextConfig} */
const dotenv = require("dotenv");
dotenv.config();
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
