// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  eslint: {
    dirs: ["pages", "utils"],
  },

  images: {
    domains: ["images.ctfassets.net", "res.cloudinary.com"],
    loader: "akamai",
    path: "",
  },

  assetPrefix: "/",
  trailingSlash: false,
  distDir: "build",
};

module.exports = nextConfig;
