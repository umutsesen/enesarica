import Script from 'next/script';

export function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Enes Arıca',
    jobTitle: 'Uzman Fizyoterapist',
    url: 'https://www.fizyoterapistenesarica.com',
    telephone: '+905546621245',
    image: 'https://www.fizyoterapistenesarica.com/imgs/enes-arica.jpg',
    description:
      'Uzman Fizyoterapist Enes Arıca - Bel fıtığı, boyun fıtığı, skolyoz, GTOS terapi, manuel terapi, klinik ve reformer pilates alanlarında uzman.',
    sameAs: [
      'https://www.instagram.com/yalovafizyoterapist/',
      'https://www.facebook.com/fizyones',
      'https://www.youtube.com/@fizyones',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Yalova Fizyoterapi',
      url: 'https://www.yalovafizyoterapist.com',
    },
  };

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'PhysicalTherapist',
    name: 'Yalova Fizyoterapi — Enes Arıca',
    url: 'https://www.fizyoterapistenesarica.com',
    telephone: '+905546621245',
    image: 'https://www.fizyoterapistenesarica.com/imgs/enes-arica.jpg',
    description:
      'Uzman Fizyoterapist Enes Arıca - Bel fıtığı, boyun fıtığı, skolyoz, GTOS terapi, manuel terapi, klinik ve reformer pilates alanlarında uzman.',
    areaServed: ['Yalova', 'İzmir', 'İstanbul'],
    knowsAbout: [
      'Bel Fıtığı Tedavisi',
      'Boyun Fıtığı Tedavisi',
      'GTOS Terapi',
      'Manuel Terapi',
      'Klinik Pilates',
      'Reformer Pilates',
      'Skolyoz / Schroth Tedavisi',
      'Spor Yaralanmaları Rehabilitasyonu',
    ],
    address: { '@type': 'PostalAddress', streetAddress: 'Yahyaoğlu iş merkezi, Rüstem Paşa, Cumhuriyet sokak D:48/2', addressLocality: 'Yalova Merkez', addressRegion: 'Yalova', postalCode: '77200', addressCountry: 'TR' },
    geo: { '@type': 'GeoCoordinates', latitude: 40.6562957, longitude: 29.2697809 },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '22:30',
    },
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
    </>
  );
}
