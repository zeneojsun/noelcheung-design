/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/coaching", destination: "/coaching.html" },
    ];
  },
};

module.exports = nextConfig;
