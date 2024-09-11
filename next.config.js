/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: '',
      },
    ],
  }
};

module.exports = nextConfig;
