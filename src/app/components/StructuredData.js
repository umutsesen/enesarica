import Script from 'next/script';

export function StructuredData() {
  const siteUrl = 'https://www.fizyoterapistenesarica.com';
  const clinicUrl = 'https://www.yalovafizyoterapist.com';
  const profileImage = `${siteUrl}/imgs/enes-arica.webp`;
  const logoImage = `${siteUrl}/enesaricalogo.png`;
  const socialProfiles = [
    'https://www.instagram.com/yalovafizyoterapist/',
    'https://www.facebook.com/fizyones',
    'https://www.youtube.com/@fizyones',
  ];

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Enes Arıca',
    jobTitle: 'Uzman Fizyoterapist',
    url: siteUrl,
    telephone: '+905546621245',
    image: profileImage,
    description:
      'Uzman Fizyoterapist Enes Arıca - Bel fıtığı, boyun fıtığı, skolyoz, GTOS terapi, manuel terapi, klinik ve reformer pilates alanlarında uzman.',
    sameAs: [siteUrl, ...socialProfiles],
    affiliation: {
      '@type': 'Organization',
      name: 'Yalova Fizyoterapi',
      url: clinicUrl,
    },
  };

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'PhysicalTherapist',
    name: 'Fzt. Enes Arıca',
    url: siteUrl,
    telephone: '+905546621245',
    image: profileImage,
    logo: logoImage,
    description:
      'Uzman Fizyoterapist Enes Arıca - Bel fıtığı, boyun fıtığı, skolyoz, GTOS terapi, manuel terapi, klinik ve reformer pilates alanlarında uzman.',
    areaServed: ['Yalova', 'İzmir', 'İstanbul'],
    sameAs: [siteUrl, ...socialProfiles],
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
    affiliation: {
      '@type': 'Organization',
      name: 'Yalova Fizyoterapi',
      url: clinicUrl,
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
