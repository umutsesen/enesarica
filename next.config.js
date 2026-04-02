/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.fizyoterapistenesarica.com',
      },
    ],
  },
};

module.exports = nextConfig;
