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
    // Slugs containing 'tedavi' renamed (2026-10-28): the word is no longer used on the site
    const renamedAreas = [
      ['bel-fitigi-tedavisi', 'bel-fitigi'],
      ['bel-kaymasi-tedavisi', 'bel-kaymasi'],
      ['boyun-fitigi-tedavisi', 'boyun-fitigi'],
      ['fibromiyalji-tedavisi', 'fibromiyalji'],
      ['skolyoz-schroth-tedavisi', 'skolyoz-schroth'],
      ['evde-fizik-tedavi', 'evde-fizyoterapi'],
    ];
    const renamedPosts = [
      ['siyatik-agrisi-evde-tedavi', 'siyatik-agrisi-evde'],
      ['fizik-tedavi-fizyoterapi-farki', 'ftr-hekimi-fizyoterapist-farki'],
      ['trigger-point-tedavisi', 'tetik-nokta-trigger-point'],
      ['ameliyatsiz-tedavi-yontemleri', 'ameliyatsiz-yontemler'],
    ];
    return [
      ...renamedAreas.map(([from, to]) => ({
        source: `/tedavi-alanlari/${from}`,
        destination: `/calisma-alanlari/${to}`,
        permanent: true,
      })),
      {
        source: '/tedavi-alanlari/:path*',
        destination: '/calisma-alanlari/:path*',
        permanent: true,
      },
      ...renamedPosts.map(([from, to]) => ({
        source: `/blog/${from}`,
        destination: `/blog/${to}`,
        permanent: true,
      })),
      // Unpublished 2026-10-28: a "how to choose a physiotherapist" post can read as an implicit comparison
      {
        source: '/blog/fizyoterapist-nasil-secilir',
        destination: '/blog',
        permanent: true,
      },
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
