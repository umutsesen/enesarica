import Script from 'next/script';

export function StructuredData() {
  const siteUrl = 'https://www.fizyoterapistenesarica.com';
  const clinicUrl = 'https://www.yalovafizyoterapist.com';
  const profileImage = `${siteUrl}/imgs/enes-arica.webp`;
  const logoImage = `${siteUrl}/android-chrome-512x512.png`;
  const socialProfiles = [
    'https://www.instagram.com/yalovafizyoterapist/',
    'https://www.facebook.com/fizyones',
    'https://www.youtube.com/@fizyones',
  ];

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Enes Arıca',
    jobTitle: 'Fizyoterapist',
    url: siteUrl,
    telephone: '+905546621245',
    image: profileImage,
    description:
      'Fizyoterapist Enes Arıca - Bel fıtığı, boyun fıtığı, skolyoz, GTOS terapi, manuel terapi, klinik ve reformer pilates alanlarında fizyoterapi hizmeti.',
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
      'Fizyoterapist Enes Arıca - Bel fıtığı, boyun fıtığı, skolyoz, GTOS terapi, manuel terapi, klinik ve reformer pilates alanlarında fizyoterapi hizmeti.',
    areaServed: ['Yalova'],
    sameAs: [siteUrl, ...socialProfiles],
    knowsAbout: [
      'Bel Fıtığında Fizyoterapi',
      'Boyun Fıtığında Fizyoterapi',
      'GTOS Terapi',
      'Manuel Terapi',
      'Klinik Pilates',
      'Reformer Pilates',
      'Skolyoz / Schroth Yöntemi',
      'Spor Yaralanmaları Rehabilitasyonu',
    ],
    address: { '@type': 'PostalAddress', streetAddress: 'Rüstem Paşa, Hürriyet Sk. Büyükgümüş İş Merkezi D:30/7', addressLocality: 'Yalova Merkez', addressRegion: 'Yalova', postalCode: '77100', addressCountry: 'TR' },
    geo: { '@type': 'GeoCoordinates', latitude: 40.6562957, longitude: 29.2697809 },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '22:00',
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
