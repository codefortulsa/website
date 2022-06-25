/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  images: {
    domains: [
      /* via.placeholder.com domain should be removed for production */
      "via.placeholder.com",
      "raw.githubusercontent.com",
      "user-images.githubusercontent.com",
    ],
  },
}

module.exports = nextConfig;