import branches from '@/data/branches';
import { SITE_URL, SITE_NAME, PERSON_ID, CLINIC_URL, BUSINESS_ID, PORTRAIT_URL } from '@/lib/site';

export function StructuredData() {
  const location = branches[0];
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: 'Enes Arıca',
        jobTitle: 'Fizyoterapist',
        url: SITE_URL,
        image: PORTRAIT_URL,
        telephone: location.phone,
        description: SITE_NAME + ' — Yalova Merkez’de fizyoterapi ve rehabilitasyon.',
        affiliation: { '@id': BUSINESS_ID },
      },
      {
        '@type': 'LocalBusiness',
        '@id': BUSINESS_ID,
        name: 'Yalova Fizyoterapi',
        url: CLINIC_URL,
        telephone: location.phone,
        email: 'fizyones77@gmail.com',
        logo: new URL('logo.webp', CLINIC_URL).href,
        image: new URL('imgs/og-yalova-fizyoterapi-v2.jpg', CLINIC_URL).href,
        areaServed: { '@type': 'City', name: 'Yalova' },
        sameAs: ['https://www.facebook.com/fizyones'],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Rüstem Paşa, Hürriyet Sk. Büyükgümüş İş Merkezi D:30/7',
          addressLocality: 'Yalova Merkez',
          addressRegion: 'Yalova',
          postalCode: '77100',
          addressCountry: 'TR',
        },
        geo: { '@type': 'GeoCoordinates', latitude: location.coordinates.lat, longitude: location.coordinates.lng },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '22:00',
        },
      },
    ],
  };
  return <script id="identity-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }} />;
}
