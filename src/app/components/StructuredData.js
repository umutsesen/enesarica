import Script from 'next/script';

export function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Enes Arıca',
    jobTitle: 'Uzman Fizyoterapist',
    url: 'https://www.fizyoterapistenesarica.com',
    telephone: '+905446621245',
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
    telephone: '+905446621245',
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
    location: [
      {
        '@type': 'Place',
        name: 'Yalova FİZYOTERAPİ & ALETLİ PİLATES & EVDE FİZİK TEDAVİ & Schroth Skolyoz Metod -Yalova',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Yahyaoğlu iş merkezi, Rüstem Paşa, Cumhuriyet sokak D:48/2',
          addressLocality: 'Yalova Merkez',
          addressRegion: 'Yalova',
          postalCode: '77200',
          addressCountry: 'TR',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 40.6562957, longitude: 29.2697809 },
        telephone: '+905446621245',
      },
      {
        '@type': 'Place',
        name: 'Çiftlikköy Aletli Pilates & Fizik Tedavi',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'kaymakamlık karşısı, Çiftlik, Atatürk Cd. Mehmet Bakay iş mrk No:21/10 kat3',
          addressLocality: 'Çiftlikköy',
          addressRegion: 'Yalova',
          postalCode: '77100',
          addressCountry: 'TR',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 40.6609368, longitude: 29.3240432 },
        telephone: '+905395834179',
      },
      {
        '@type': 'Place',
        name: 'Alsancak Fizik Tedavi/Alsancak Fizyoterapist/Aletli Pilates Alsancak',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Alsancak, 1471. Sk. Kenet Sitesi No:1 Kat:3 Daire:5',
          addressLocality: 'Konak',
          addressRegion: 'İzmir',
          postalCode: '35220',
          addressCountry: 'TR',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 38.3994223, longitude: 27.0564492 },
        telephone: '+905514808474',
      },
      {
        '@type': 'Place',
        name: 'Fizyoterapist Pınar Elikesik- Bahçelievler',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Bahçelievler, İzzettin Çalışlar Cd. No:35 Kat:1 Daire:2',
          addressLocality: 'Bahçelievler',
          addressRegion: 'İstanbul',
          postalCode: '34100',
          addressCountry: 'TR',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 41.0011268, longitude: 28.8682755 },
        telephone: '+905386751491',
      },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '22:30',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '528',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Ömer Atış' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Uzun süredir bel fıtığı ve siyatik ağrısı çekiyordum, ameliyat gündemime girmişti. Enes Bey\'in GTOS terapi ve manuel terapi kombinasyonuyla hazırladığı program sayesinde 4 haftada ameliyatsız iyileştim. Bel fıtığı tedavisinde gerçekten uzman bir fizyoterapist.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Seda Arpa' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Oğlumda skolyoz teşhisi konulunca Schroth metodu uygulayan bir fizyoterapist aradık. Enes Bey her seansta omurga ölçümü yaparak ilerlemeyi takip etti, evde yapılacak skolyoz egzersizlerini de öğretti. 3 ayda belirgin düzelme oldu. Skolyoz tedavisi için kesinlikle tavsiye ederim.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'İsmail Akcaalan' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Boyun fıtığından kaynaklanan baş ağrısı ve kol uyuşması şikayetim vardı. GTOS terapi ile iğnesiz ve ilaçsız tedavi uygulandı, 6 seansta ağrılarım büyük ölçüde geçti. Boyun fıtığı tedavisinde profesyonel ve güler yüzlü bir ekip.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Alparslan Akkaş' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Futbol oynarken ayak bileği burkulması geçirdim. Enes Bey sporcu rehabilitasyonu konusunda çok deneyimli, kişiye özel program hazırladı. Fizyoterapi ve kademeli güçlendirme egzersizleriyle 5 haftada sahaya dönebildim. Spor yaralanmaları için doğru adres.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Ayşe Yılmaz' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Topuk dikeni ve taban çökmesi nedeniyle sabahları yere basamıyordum. FootBalance ayak analizi ile düz taban tespit edildi, kişiye özel tabanlık yapıldı. Manuel terapi ve egzersiz programıyla 8 haftada topuk dikeni ağrılarım geçti. Ayak problemleri için mutlaka danışın.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Mehmet Kaya' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Bel kayması teşhisi sonrası klinik pilates programına başladım. Reformer pilates ile core kaslarım güçlendi, duruşum düzeldi ve kronik bel ağrılarım azaldı. Enes Bey birebir seanslarda her hareketi kişiye özel ayarlıyor. Klinik pilates ve reformer pilates arayanlar için en iyi tercih.',
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
        id="business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
    </>
  );
}
