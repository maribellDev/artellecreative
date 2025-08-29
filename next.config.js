module.exports = {
  reactStrictMode: true,

  eslint: {
    dirs: ["pages", "utils"], // проверка ESLint только в этих папках
  },

  images: {
    domains: ["images.ctfassets.net", "res.cloudinary.com"], // добавлен Cloudinary
    loader: "akamai",
    path: "", // ты используешь кастомный loader — пусть остаётся, если он нужен
  },

  assetPrefix: "/",
   trailingSlash: false,
};