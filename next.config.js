/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.fizyoterapistenesarica.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/subeler/:path*',
        destination: '/iletisim',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'fizyoterapistenesarica.com' }],
        destination: 'https://www.fizyoterapistenesarica.com/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/imgs/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
      {
        source: '/site.webmanifest',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
