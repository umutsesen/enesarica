/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.enesarica.com',
      },
    ],
  },
};

module.exports = nextConfig;
