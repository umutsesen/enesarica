import Script from 'next/script';

export function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': ['Person', 'PhysicalTherapist'],
    name: 'Enes Arıca',
    jobTitle: 'Uzman Fizyoterapist',
    url: 'https://www.fizyoterapistenesarica.com',
    telephone: '+90 544 662 12 45',
    image: 'https://www.fizyoterapistenesarica.com/imgs/enes-arica.jpg',
    description:
      'Uzman Fizyoterapist Enes Arıca - Bel fıtığı, boyun fıtığı, skolyoz, GTOS terapi, manuel terapi, klinik ve reformer pilates alanlarında uzman.',
    areaServed: ['Yalova', 'İzmir', 'İstanbul'],
    sameAs: [
      'https://www.instagram.com/yalovafizyoterapist/',
      'https://www.facebook.com/fizyones',
      'https://www.youtube.com/@fizyones',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fizyoterapi Hizmetleri',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bel Fıtığı Tedavisi', serviceType: 'Physical Therapy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Boyun Fıtığı Tedavisi', serviceType: 'Physical Therapy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GTOS Terapi', serviceType: 'Physical Therapy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Manuel Terapi', serviceType: 'Physical Therapy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Klinik Pilates', serviceType: 'Physical Therapy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Reformer Pilates', serviceType: 'Physical Therapy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Skolyoz / Schroth Tedavisi', serviceType: 'Physical Therapy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Spor Yaralanmaları Rehabilitasyonu', serviceType: 'Physical Therapy' } },
      ],
    },
    location: [
      {
        '@type': 'Place',
        name: 'Yalova Merkez',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Rüstem Paşa, Hürriyet Sk büyükgümüş iş merkezi D:30/7',
          addressLocality: 'Yalova Merkez',
          addressRegion: 'Yalova',
          postalCode: '77100',
          addressCountry: 'TR',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 40.6562957, longitude: 29.2697809 },
        telephone: '+90 544 662 12 45',
      },
      {
        '@type': 'Place',
        name: 'Yalova Çiftlikköy',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Atatürk Cd. Mehmet Bakay iş mrk No:21/10 kat3',
          addressLocality: 'Çiftlikköy',
          addressRegion: 'Yalova',
          postalCode: '77600',
          addressCountry: 'TR',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 40.6609368, longitude: 29.3240432 },
        telephone: '+90 531 889 32 36',
      },
      {
        '@type': 'Place',
        name: 'İzmir Alsancak',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Alsancak, 1471. Sk. Kenet Sitesi No:1 Kat:3 Daire:5',
          addressLocality: 'Konak',
          addressRegion: 'İzmir',
          postalCode: '35220',
          addressCountry: 'TR',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 38.3994223, longitude: 27.0564492 },
        telephone: '+90 551 480 84 74',
      },
      {
        '@type': 'Place',
        name: 'İstanbul Bahçelievler',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Bahçelievler, İzzettin Çalışlar Cd. No:35 Kat:1 Daire:2',
          addressLocality: 'Bahçelievler',
          addressRegion: 'İstanbul',
          postalCode: '34100',
          addressCountry: 'TR',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 41.0011268, longitude: 28.8682755 },
        telephone: '+90 538 675 14 91',
      },
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Yalova Fizyoterapi',
      url: 'https://www.yalovafizyoterapist.com',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '22:00',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Fizyoterapi seansları ne kadar sürüyor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fizyoterapi seansları genellikle 45-60 dakika sürmektedir. Tedavi süresi bel fıtığı, boyun fıtığı, skolyoz gibi durumunuza göre belirlenir.',
        },
      },
      {
        '@type': 'Question',
        name: 'GTOS terapi nedir ve kimlere uygulanır?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GTOS terapi, kas-iskelet sistemi rahatsızlıklarında kullanılan iğnesiz, ilaçsız ve risksiz bir tedavi yöntemidir. Bel fıtığı, boyun fıtığı, siyatik, spor yaralanmaları ve kronik ağrılarda etkili sonuçlar verir.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hangi şehirlerde hizmet veriyorsunuz?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yalova Merkez, Yalova Çiftlikköy, İzmir Alsancak ve İstanbul Bahçelievler olmak üzere 4 lokasyonda fizyoterapi ve rehabilitasyon hizmeti sunuyoruz.',
        },
      },
      {
        '@type': 'Question',
        name: 'Randevu nasıl alabilirim?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Web sitesinden iletişim formunu doldurarak, +90 544 662 12 45 numarasını arayarak veya WhatsApp üzerinden ulaşarak randevu alabilirsiniz.',
        },
      },
      {
        '@type': 'Question',
        name: 'Klinik Pilates ile Reformer Pilates arasındaki fark nedir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Klinik Pilates, fizyoterapist eşliğinde rehabilitasyon odaklı uygulanan tedavi amaçlı pilatestir. Reformer Pilates ise özel ekipmanla yapılan, vücut şekillendirme ve güçlendirmeye yönelik pilatestir.',
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
