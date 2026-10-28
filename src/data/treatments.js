const treatments = [
  {
    slug: 'bel-fitigi',
    title: 'Bel Fıtığında Fizyoterapi',
    description:
      'Bel fıtığında hekim tanısı doğrultusunda ameliyatsız fizyoterapi yaklaşımı. GTOS terapi, manuel terapi ve kişiye özel egzersiz programları.',
    shortDescription:
      'Bel fıtığında hekim tanısı doğrultusunda ameliyatsız fizyoterapi yaklaşımı. GTOS terapi, manuel terapi ve kişiye özel egzersiz programları.',
    metaTitle: 'Bel Fıtığında Fizyoterapi | Fizyoterapist Enes Arıca',
    metaDescription:
      'Bel fıtığında ameliyatsız yaklaşım. GTOS terapi, manuel terapi ve kişiye özel egzersiz programları ile bel fıtığında fizyoterapi yaklaşımı.',
    keywords: ['bel fıtığı fizyoterapi', 'ameliyatsız bel fıtığı', 'bel ağrısı fizyoterapi', 'bel fıtığı egzersizleri'],
    relatedTreatments: ['boyun-fitigi', 'gtos-terapi', 'manuel-terapi'],
  },
  {
    slug: 'boyun-fitigi',
    title: 'Boyun Fıtığında Fizyoterapi',
    description:
      'Boyun fıtığı ve boyun ağrılarında ameliyatsız yaklaşım. Manuel terapi ve GTOS terapi ile konservatif fizyoterapi süreci.',
    shortDescription:
      'Boyun fıtığı ve boyun ağrılarında ameliyatsız yaklaşım. Manuel terapi ve GTOS terapi ile konservatif fizyoterapi süreci.',
    metaTitle: 'Boyun Fıtığında Fizyoterapi | Fizyoterapist Enes Arıca',
    metaDescription:
      'Boyun fıtığında ameliyatsız yaklaşım. Manuel terapi, GTOS terapi ve kişiye özel rehabilitasyon programları ile boyun şikayetlerinde fizyoterapi.',
    keywords: ['boyun fıtığı fizyoterapi', 'ameliyatsız boyun fıtığı', 'boyun ağrısı', 'servikal disk hernisi'],
    relatedTreatments: ['bel-fitigi', 'gtos-terapi', 'manuel-terapi'],
  },
  {
    slug: 'gtos-terapi',
    title: 'GTOS Terapi',
    description:
      'İğnesiz ve ilaçsız GTOS terapi yöntemi ile kas-iskelet sistemi şikayetlerinde fizyoterapi uygulaması.',
    shortDescription:
      'İğnesiz ve ilaçsız GTOS terapi yöntemi ile kas-iskelet sistemi şikayetlerinde fizyoterapi uygulaması.',
    metaTitle: 'GTOS Terapi | Fizyoterapist Enes Arıca',
    metaDescription:
      'GTOS terapi ile iğnesiz, ilaçsız uygulama. Bel fıtığı, boyun fıtığı, spor yaralanmaları ve kronik ağrı şikayetlerinde fizyoterapi yaklaşımı.',
    keywords: ['GTOS terapi', 'GTOS uygulaması', 'iğnesiz uygulama', 'ilaçsız yaklaşım'],
    relatedTreatments: ['bel-fitigi', 'boyun-fitigi', 'spor-yaralanmalari'],
  },
  {
    slug: 'skolyoz-schroth',
    title: 'Skolyoz / Schroth Yöntemi',
    description:
      'Schroth metodu ile skolyozda fizyoterapi. Omurga eğriliğinde kişiye özel, egzersiz temelli fizyoterapi yaklaşımı.',
    shortDescription:
      'Schroth metodu ile skolyozda fizyoterapi. Omurga eğriliğinde kişiye özel, egzersiz temelli fizyoterapi yaklaşımı.',
    metaTitle: 'Skolyozda Fizyoterapi - Schroth Metodu | Fizyoterapist Enes Arıca',
    metaDescription:
      'Schroth metodu ile skolyozda fizyoterapi. Omurga eğriliğinde ameliyatsız yaklaşım ve kişiye özel egzersiz programları.',
    keywords: ['skolyoz fizyoterapi', 'schroth metodu', 'omurga eğriliği', 'skolyoz egzersizleri'],
    relatedTreatments: ['klinik-pilates', 'manuel-terapi', 'reformer-pilates'],
  },
  {
    slug: 'manuel-terapi',
    title: 'Manuel Terapi',
    description:
      'Manuel terapi ile eklem ve kas şikayetlerinde fizyoterapi yaklaşımı. Ağrı yönetimi ve hareket açıklığına yönelik uygulamalar.',
    shortDescription:
      'Manuel terapi ile eklem ve kas şikayetlerinde fizyoterapi yaklaşımı. Ağrı yönetimi ve hareket açıklığına yönelik uygulamalar.',
    metaTitle: 'Manuel Terapi | Fizyoterapist Enes Arıca',
    metaDescription:
      'Manuel terapi ile eklem ve kas şikayetlerinde fizyoterapi. Bel ağrısı, boyun ağrısı ve eklem kısıtlılıklarında konservatif yaklaşım.',
    keywords: ['manuel terapi', 'eklem mobilizasyonu', 'manipülasyon'],
    relatedTreatments: ['bel-fitigi', 'boyun-fitigi', 'gtos-terapi'],
  },
  {
    slug: 'spor-yaralanmalari',
    title: 'Spor Yaralanmaları',
    description:
      'Spor yaralanmalarında rehabilitasyon programları. Sporculara yönelik kişiye özel fizyoterapi ve egzersiz planlaması.',
    shortDescription:
      'Spor yaralanmalarında rehabilitasyon programları. Sporculara yönelik kişiye özel fizyoterapi ve egzersiz planlaması.',
    metaTitle: 'Spor Yaralanmaları Rehabilitasyonu | Fizyoterapist Enes Arıca',
    metaDescription:
      'Spor yaralanmalarında fizyoterapi. Diz, omuz ve ayak bileği yaralanmalarında rehabilitasyon ve spora dönüş programları.',
    keywords: ['spor yaralanmaları', 'spor rehabilitasyonu', 'sporcu fizyoterapisi', 'diz yaralanması'],
    relatedTreatments: ['gtos-terapi', 'manuel-terapi', 'klinik-pilates'],
  },
  {
    slug: 'klinik-pilates',
    title: 'Klinik Pilates',
    description:
      'Fizyoterapist eşliğinde rehabilitasyon odaklı klinik pilates. Ağrı yönetimi ve fonksiyonel egzersiz çalışmaları.',
    shortDescription:
      'Fizyoterapist eşliğinde rehabilitasyon odaklı klinik pilates. Ağrı yönetimi ve fonksiyonel egzersiz çalışmaları.',
    metaTitle: 'Klinik Pilates | Fizyoterapist Enes Arıca',
    metaDescription:
      'Fizyoterapist eşliğinde klinik pilates. Bel ağrısı, boyun ağrısı, skolyoz ve postür şikayetlerinde egzersiz temelli program.',
    keywords: ['klinik pilates', 'rehabilitasyon amaçlı pilates', 'fizyoterapist eşliğinde pilates', 'rehabilitasyon pilates'],
    relatedTreatments: ['reformer-pilates', 'skolyoz-schroth', 'bel-fitigi'],
  },
  {
    slug: 'reformer-pilates',
    title: 'Reformer Pilates',
    description:
      'Reformer ekipmanları ile güçlendirme ve esneklik çalışmaları. Postüre yönelik kişiye özel egzersiz programları.',
    shortDescription:
      'Reformer ekipmanları ile güçlendirme ve esneklik çalışmaları. Postüre yönelik kişiye özel egzersiz programları.',
    metaTitle: 'Reformer Pilates | Fizyoterapist Enes Arıca',
    metaDescription:
      'Reformer pilates ile güçlendirme ve esneklik çalışmaları. Fizyoterapist eşliğinde kişiye özel reformer pilates programları.',
    keywords: ['reformer pilates', 'pilates reformer', 'reformer egzersiz', 'pilates yalova'],
    relatedTreatments: ['klinik-pilates', 'skolyoz-schroth', 'spor-yaralanmalari'],
  },
  {
    slug: 'evde-fizyoterapi',
    title: 'Evde Fizyoterapi',
    description:
      'Hareket kısıtlılığı olan hastalar için evde fizyoterapi hizmeti. Ameliyat sonrası ve yaşlı hastalar için özel rehabilitasyon programları.',
    shortDescription:
      'Hareket kısıtlılığı olan hastalar için evde fizyoterapi hizmeti. Ameliyat sonrası ve yaşlı hastalar için özel rehabilitasyon programları.',
    metaTitle: 'Evde Fizyoterapi | Fizyoterapist Enes Arıca',
    metaDescription:
      'Evde fizyoterapi hizmeti ile ameliyat sonrası, nörolojik ve ortopedik rehabilitasyon. Fizyoterapist eşliğinde ev ortamında uygulama.',
    keywords: ['evde fizyoterapi', 'evde rehabilitasyon', 'mobil fizyoterapi'],
    relatedTreatments: ['ameliyat-sonrasi-rehabilitasyon', 'norolojik-rehabilitasyon', 'manuel-terapi'],
  },
  {
    slug: 'norolojik-rehabilitasyon',
    title: 'Nörolojik Rehabilitasyon',
    description:
      'İnme, felç, MS ve Parkinson gibi nörolojik hastalıklarda fizyoterapi ve rehabilitasyon programları.',
    shortDescription:
      'İnme, felç, MS ve Parkinson gibi nörolojik hastalıklarda fizyoterapi ve rehabilitasyon programları.',
    metaTitle: 'Nörolojik Rehabilitasyon | Fizyoterapist Enes Arıca',
    metaDescription:
      'Nörolojik rehabilitasyon ile inme ve felç sonrası fizyoterapi süreci. Bobath ve PNF yaklaşımları çerçevesinde programlar.',
    keywords: ['nörolojik rehabilitasyon', 'felç rehabilitasyonu', 'inme sonrası fizyoterapi', 'nörorehabilitasyon'],
    relatedTreatments: ['evde-fizyoterapi', 'manuel-terapi', 'klinik-pilates'],
  },
  {
    slug: 'ameliyat-sonrasi-rehabilitasyon',
    title: 'Ameliyat Sonrası Rehabilitasyon',
    description:
      'Ortopedik cerrahi sonrası kişiye özel rehabilitasyon programları. Hekim yönlendirmesi doğrultusunda planlanır.',
    shortDescription:
      'Ortopedik cerrahi sonrası kişiye özel rehabilitasyon programları. Hekim yönlendirmesi doğrultusunda planlanır.',
    metaTitle: 'Ameliyat Sonrası Rehabilitasyon | Fizyoterapist Enes Arıca',
    metaDescription:
      'Ameliyat sonrası rehabilitasyon programları. Diz protezi, omuz ve bel ameliyatı sonrası fizyoterapi süreci.',
    keywords: ['ameliyat sonrası rehabilitasyon', 'postoperatif fizyoterapi', 'cerrahi sonrası iyileşme'],
    relatedTreatments: ['diz-protezi-rehabilitasyon', 'spor-yaralanmalari', 'manuel-terapi'],
  },
  {
    slug: 'bel-kaymasi',
    title: 'Bel Kayması (Spondilolistezis) Fizyoterapisi',
    description:
      'Spondilolisteziste stabilizasyon egzersizleri ve manuel terapi ile konservatif yaklaşım.',
    shortDescription:
      'Spondilolisteziste stabilizasyon egzersizleri ve manuel terapi ile konservatif yaklaşım.',
    metaTitle: 'Bel Kaymasında Fizyoterapi | Fizyoterapist Enes Arıca',
    metaDescription:
      'Bel kaymasında (spondilolistezis) konservatif yaklaşım. Stabilizasyon egzersizleri ve manuel terapi uygulamaları.',
    keywords: ['bel kayması fizyoterapi', 'spondilolistezis', 'omurga kayması', 'lomber instabilite'],
    relatedTreatments: ['bel-fitigi', 'manuel-terapi', 'klinik-pilates'],
  },
  {
    slug: 'fibromiyalji',
    title: 'Fibromiyaljide Fizyoterapi',
    description:
      'Fibromiyalji hastalarına yönelik multidisipliner fizyoterapi yaklaşımı. Egzersiz, GTOS terapi ve ağrı yönetimi.',
    shortDescription:
      'Fibromiyalji hastalarına yönelik multidisipliner fizyoterapi yaklaşımı. Egzersiz, GTOS terapi ve ağrı yönetimi.',
    metaTitle: 'Fibromiyaljide Fizyoterapi | Fizyoterapist Enes Arıca',
    metaDescription:
      'Fibromiyaljide fizyoterapi yaklaşımı. Egzersiz planlaması, GTOS terapi ve kronik ağrı yönetimine yönelik uygulamalar.',
    keywords: ['fibromiyalji fizyoterapi', 'fibromiyalji egzersizleri', 'kronik ağrı yönetimi', 'yaygın ağrı'],
    relatedTreatments: ['gtos-terapi', 'manuel-terapi', 'klinik-pilates'],
  },
  {
    slug: 'diz-protezi-rehabilitasyon',
    title: 'Diz Protezi Sonrası Rehabilitasyon',
    description:
      'Total diz protezi sonrası kapsamlı rehabilitasyon programı. Ameliyat öncesi hazırlık ve sonrası egzersiz süreci.',
    shortDescription:
      'Total diz protezi sonrası kapsamlı rehabilitasyon programı. Ameliyat öncesi hazırlık ve sonrası egzersiz süreci.',
    metaTitle: 'Diz Protezi Rehabilitasyonu | Fizyoterapist Enes Arıca',
    metaDescription:
      'Diz protezi sonrası rehabilitasyon programı. Ameliyat öncesi hazırlık ve sonrası egzersiz progresyonu.',
    keywords: ['diz protezi rehabilitasyonu', 'total diz protezi', 'diz ameliyatı sonrası', 'diz rehabilitasyonu'],
    relatedTreatments: ['ameliyat-sonrasi-rehabilitasyon', 'spor-yaralanmalari', 'klinik-pilates'],
  },
  {
    slug: 'onkolojik-rehabilitasyon',
    title: 'Onkolojik Rehabilitasyon',
    description:
      'Onkolojik süreçte ve sonrasında yaşam kalitesine yönelik fizyoterapi ve rehabilitasyon programları.',
    shortDescription:
      'Onkolojik süreçte ve sonrasında yaşam kalitesine yönelik fizyoterapi ve rehabilitasyon programları.',
    metaTitle: 'Onkolojik Rehabilitasyon | Fizyoterapist Enes Arıca',
    metaDescription:
      'Kanser rehabilitasyonunda fizyoterapi. Egzersiz planlaması, lenfödem yönetimi ve yorgunluğa yönelik uygulamalar.',
    keywords: ['onkolojik rehabilitasyon', 'kanser rehabilitasyonu', 'kanser sonrası fizyoterapi', 'onkoloji fizyoterapi'],
    relatedTreatments: ['evde-fizyoterapi', 'manuel-terapi', 'klinik-pilates'],
  },
  {
    slug: 'pediatrik-rehabilitasyon',
    title: 'Pediatrik Rehabilitasyon',
    description:
      'Çocuklarda gelişimsel gecikme, serebral palsi ve kas hastalıklarında fizyoterapi yaklaşımı.',
    shortDescription:
      'Çocuklarda gelişimsel gecikme, serebral palsi ve kas hastalıklarında fizyoterapi yaklaşımı.',
    metaTitle: 'Pediatrik Rehabilitasyon | Fizyoterapist Enes Arıca',
    metaDescription:
      'Çocuk fizyoterapisi ile serebral palsi, gelişimsel gecikme ve kas hastalıklarında rehabilitasyon. Oyun bazlı yaklaşım.',
    keywords: ['pediatrik rehabilitasyon', 'çocuk fizyoterapisi', 'serebral palsi fizyoterapi', 'çocuk gelişimi'],
    relatedTreatments: ['norolojik-rehabilitasyon', 'klinik-pilates', 'evde-fizyoterapi'],
  },
  {
    slug: 'yogun-bakim-rehabilitasyonu',
    title: 'Yoğun Bakım Rehabilitasyonu',
    description:
      'Yoğun bakım ünitesinde erken mobilizasyon ve solunum fizyoterapisi ile kritik hasta rehabilitasyonu.',
    shortDescription:
      'Yoğun bakım ünitesinde erken mobilizasyon ve solunum fizyoterapisi ile kritik hasta rehabilitasyonu.',
    metaTitle: 'Yoğun Bakım Rehabilitasyonu | Fizyoterapist Enes Arıca',
    metaDescription:
      'Yoğun bakımda erken mobilizasyon ve solunum fizyoterapisi. ICU-acquired weakness açısından kritik hasta rehabilitasyonu.',
    keywords: ['yoğun bakım rehabilitasyonu', 'ICU fizyoterapi', 'erken mobilizasyon', 'solunum fizyoterapisi'],
    relatedTreatments: ['norolojik-rehabilitasyon', 'evde-fizyoterapi', 'ameliyat-sonrasi-rehabilitasyon'],
  },
];

export { treatments };
export default treatments;
