const treatments = [
  {
    slug: 'bel-fitigi-tedavisi',
    title: 'Bel Fıtığı Tedavisi',
    description:
      'Ameliyatsız bel fıtığı tedavisi ile ağrılarınızdan kurtulun. GTOS terapi, manuel terapi ve egzersiz programları ile etkili sonuçlar.',
    shortDescription:
      'Ameliyatsız bel fıtığı tedavisi ile ağrılarınızdan kurtulun. GTOS terapi, manuel terapi ve egzersiz programları ile etkili sonuçlar.',
    metaTitle: 'Bel Fıtığı Tedavisi | Uzman Fizyoterapist Enes Arıca',
    metaDescription:
      'Ameliyatsız bel fıtığı tedavisi. GTOS terapi, manuel terapi ve kişiye özel egzersiz programları ile bel fıtığı ağrılarından kurtulun.',
    keywords: ['bel fıtığı tedavisi', 'ameliyatsız bel fıtığı', 'bel ağrısı tedavisi', 'bel fıtığı fizyoterapi'],
    relatedTreatments: ['boyun-fitigi-tedavisi', 'gtos-terapi', 'manuel-terapi'],
  },
  {
    slug: 'boyun-fitigi-tedavisi',
    title: 'Boyun Fıtığı Tedavisi',
    description:
      'Boyun fıtığı ve boyun ağrılarında ameliyatsız tedavi. Manuel terapi ve GTOS terapi ile etkili iyileşme süreci.',
    shortDescription:
      'Boyun fıtığı ve boyun ağrılarında ameliyatsız tedavi. Manuel terapi ve GTOS terapi ile etkili iyileşme süreci.',
    metaTitle: 'Boyun Fıtığı Tedavisi | Uzman Fizyoterapist Enes Arıca',
    metaDescription:
      'Ameliyatsız boyun fıtığı tedavisi. Manuel terapi, GTOS terapi ve kişiye özel rehabilitasyon programları ile boyun ağrılarından kurtulun.',
    keywords: ['boyun fıtığı tedavisi', 'ameliyatsız boyun fıtığı', 'boyun ağrısı', 'servikal disk hernisi'],
    relatedTreatments: ['bel-fitigi-tedavisi', 'gtos-terapi', 'manuel-terapi'],
  },
  {
    slug: 'gtos-terapi',
    title: 'GTOS Terapi',
    description:
      'İğnesiz, ilaçsız ve risksiz GTOS terapi yöntemi ile kas-iskelet sistemi rahatsızlıklarında etkili tedavi.',
    shortDescription:
      'İğnesiz, ilaçsız ve risksiz GTOS terapi yöntemi ile kas-iskelet sistemi rahatsızlıklarında etkili tedavi.',
    metaTitle: 'GTOS Terapi | Uzman Fizyoterapist Enes Arıca',
    metaDescription:
      'GTOS terapi ile iğnesiz, ilaçsız tedavi. Bel fıtığı, boyun fıtığı, spor yaralanmaları ve kronik ağrılarda etkili sonuçlar.',
    keywords: ['GTOS terapi', 'GTOS tedavisi', 'iğnesiz tedavi', 'ilaçsız tedavi'],
    relatedTreatments: ['bel-fitigi-tedavisi', 'boyun-fitigi-tedavisi', 'spor-yaralanmalari'],
  },
  {
    slug: 'skolyoz-schroth-tedavisi',
    title: 'Skolyoz / Schroth Tedavisi',
    description:
      'Schroth metodu ile skolyoz tedavisi. Omurga eğriliğinin ilerlemesini durduran ve düzelten uzman yaklaşım.',
    shortDescription:
      'Schroth metodu ile skolyoz tedavisi. Omurga eğriliğinin ilerlemesini durduran ve düzelten uzman yaklaşım.',
    metaTitle: 'Skolyoz Tedavisi - Schroth Metodu | Uzman Fizyoterapist Enes Arıca',
    metaDescription:
      'Schroth metodu ile skolyoz tedavisi. Omurga eğriliğinde ameliyatsız tedavi ve kişiye özel egzersiz programları.',
    keywords: ['skolyoz tedavisi', 'schroth metodu', 'omurga eğriliği', 'skolyoz egzersizleri'],
    relatedTreatments: ['klinik-pilates', 'manuel-terapi', 'reformer-pilates'],
  },
  {
    slug: 'manuel-terapi',
    title: 'Manuel Terapi',
    description:
      'Uzman ellerde manuel terapi ile eklem ve kas problemlerinde etkili tedavi. Ağrı giderme ve hareket açıklığını artırma.',
    shortDescription:
      'Uzman ellerde manuel terapi ile eklem ve kas problemlerinde etkili tedavi. Ağrı giderme ve hareket açıklığını artırma.',
    metaTitle: 'Manuel Terapi | Uzman Fizyoterapist Enes Arıca',
    metaDescription:
      'Manuel terapi ile eklem ve kas problemlerinde etkili tedavi. Bel ağrısı, boyun ağrısı ve eklem kısıtlılıklarında uzman yaklaşım.',
    keywords: ['manuel terapi', 'manuel tedavi', 'eklem mobilizasyonu', 'manipülasyon'],
    relatedTreatments: ['bel-fitigi-tedavisi', 'boyun-fitigi-tedavisi', 'gtos-terapi'],
  },
  {
    slug: 'spor-yaralanmalari',
    title: 'Spor Yaralanmaları',
    description:
      'Spor yaralanmalarında hızlı ve etkili rehabilitasyon. Sporculara özel tedavi ve performans programları.',
    shortDescription:
      'Spor yaralanmalarında hızlı ve etkili rehabilitasyon. Sporculara özel tedavi ve performans programları.',
    metaTitle: 'Spor Yaralanmaları Rehabilitasyonu | Uzman Fizyoterapist Enes Arıca',
    metaDescription:
      'Spor yaralanmalarında uzman fizyoterapi. Diz, omuz, ayak bileği yaralanmalarında hızlı iyileşme ve spora dönüş programları.',
    keywords: ['spor yaralanmaları', 'spor rehabilitasyonu', 'sporcu fizyoterapisi', 'diz yaralanması'],
    relatedTreatments: ['gtos-terapi', 'manuel-terapi', 'klinik-pilates'],
  },
  {
    slug: 'klinik-pilates',
    title: 'Klinik Pilates',
    description:
      'Fizyoterapist eşliğinde rehabilitasyon odaklı klinik pilates. Ağrı tedavisi ve fonksiyonel iyileşme.',
    shortDescription:
      'Fizyoterapist eşliğinde rehabilitasyon odaklı klinik pilates. Ağrı tedavisi ve fonksiyonel iyileşme.',
    metaTitle: 'Klinik Pilates | Uzman Fizyoterapist Enes Arıca',
    metaDescription:
      'Fizyoterapist eşliğinde klinik pilates. Bel ağrısı, boyun ağrısı, skolyoz ve postür bozukluklarında tedavi amaçlı pilates.',
    keywords: ['klinik pilates', 'tedavi amaçlı pilates', 'fizyoterapist eşliğinde pilates', 'rehabilitasyon pilates'],
    relatedTreatments: ['reformer-pilates', 'skolyoz-schroth-tedavisi', 'bel-fitigi-tedavisi'],
  },
  {
    slug: 'reformer-pilates',
    title: 'Reformer Pilates',
    description:
      'Özel reformer ekipmanları ile güçlendirme ve esneklik. Vücut şekillendirme ve postür düzeltme.',
    shortDescription:
      'Özel reformer ekipmanları ile güçlendirme ve esneklik. Vücut şekillendirme ve postür düzeltme.',
    metaTitle: 'Reformer Pilates | Uzman Fizyoterapist Enes Arıca',
    metaDescription:
      'Reformer pilates ile vücut güçlendirme ve şekillendirme. Uzman fizyoterapist eşliğinde kişiye özel reformer pilates programları.',
    keywords: ['reformer pilates', 'pilates reformer', 'vücut şekillendirme', 'pilates yalova'],
    relatedTreatments: ['klinik-pilates', 'skolyoz-schroth-tedavisi', 'spor-yaralanmalari'],
  },
  {
    slug: 'evde-fizik-tedavi',
    title: 'Evde Fizik Tedavi',
    description:
      'Hareket kısıtlılığı olan hastalar için evde fizyoterapi hizmeti. Ameliyat sonrası ve yaşlı hastalar için özel rehabilitasyon programları.',
    shortDescription:
      'Hareket kısıtlılığı olan hastalar için evde fizyoterapi hizmeti. Ameliyat sonrası ve yaşlı hastalar için özel rehabilitasyon programları.',
    metaTitle: 'Evde Fizik Tedavi | Uzman Fizyoterapist Enes Arıca',
    metaDescription:
      'Evde fizik tedavi hizmeti ile ameliyat sonrası, nörolojik ve ortopedik rehabilitasyon. Uzman fizyoterapist eşliğinde ev ortamında tedavi.',
    keywords: ['evde fizik tedavi', 'evde fizyoterapi', 'evde rehabilitasyon', 'mobil fizyoterapi'],
    relatedTreatments: ['ameliyat-sonrasi-rehabilitasyon', 'norolojik-rehabilitasyon', 'manuel-terapi'],
  },
  {
    slug: 'norolojik-rehabilitasyon',
    title: 'Nörolojik Rehabilitasyon',
    description:
      'İnme, felç, MS ve Parkinson gibi nörolojik hastalıklarda uzman fizyoterapi ve rehabilitasyon programları.',
    shortDescription:
      'İnme, felç, MS ve Parkinson gibi nörolojik hastalıklarda uzman fizyoterapi ve rehabilitasyon programları.',
    metaTitle: 'Nörolojik Rehabilitasyon | Uzman Fizyoterapist Enes Arıca',
    metaDescription:
      'Nörolojik rehabilitasyon ile inme, felç sonrası iyileşme. Bobath ve PNF yöntemleri ile uzman fizyoterapi.',
    keywords: ['nörolojik rehabilitasyon', 'felç rehabilitasyonu', 'inme sonrası tedavi', 'nörorehabilitasyon'],
    relatedTreatments: ['evde-fizik-tedavi', 'manuel-terapi', 'klinik-pilates'],
  },
  {
    slug: 'ameliyat-sonrasi-rehabilitasyon',
    title: 'Ameliyat Sonrası Rehabilitasyon',
    description:
      'Ortopedik cerrahi sonrası hızlı ve güvenli iyileşme için kişiye özel rehabilitasyon programları.',
    shortDescription:
      'Ortopedik cerrahi sonrası hızlı ve güvenli iyileşme için kişiye özel rehabilitasyon programları.',
    metaTitle: 'Ameliyat Sonrası Rehabilitasyon | Uzman Fizyoterapist Enes Arıca',
    metaDescription:
      'Ameliyat sonrası rehabilitasyon programları. Diz protezi, omuz ve bel ameliyatı sonrası uzman fizyoterapi ile hızlı iyileşme.',
    keywords: ['ameliyat sonrası rehabilitasyon', 'postoperatif fizyoterapi', 'cerrahi sonrası iyileşme'],
    relatedTreatments: ['diz-protezi-rehabilitasyon', 'spor-yaralanmalari', 'manuel-terapi'],
  },
  {
    slug: 'bel-kaymasi-tedavisi',
    title: 'Bel Kayması (Spondilolistezis) Tedavisi',
    description:
      'Spondilolistezis tedavisinde stabilizasyon egzersizleri ve manuel terapi ile ameliyatsız iyileşme.',
    shortDescription:
      'Spondilolistezis tedavisinde stabilizasyon egzersizleri ve manuel terapi ile ameliyatsız iyileşme.',
    metaTitle: 'Bel Kayması Tedavisi | Uzman Fizyoterapist Enes Arıca',
    metaDescription:
      'Bel kayması (spondilolistezis) tedavisinde konservatif yaklaşım. Stabilizasyon egzersizleri ve manuel terapi ile etkili sonuçlar.',
    keywords: ['bel kayması tedavisi', 'spondilolistezis', 'omurga kayması', 'lomber instabilite'],
    relatedTreatments: ['bel-fitigi-tedavisi', 'manuel-terapi', 'klinik-pilates'],
  },
  {
    slug: 'fibromiyalji-tedavisi',
    title: 'Fibromiyalji Tedavisi',
    description:
      'Fibromiyalji hastalarına yönelik multidisipliner fizyoterapi yaklaşımı. Egzersiz, GTOS terapi ve ağrı yönetimi.',
    shortDescription:
      'Fibromiyalji hastalarına yönelik multidisipliner fizyoterapi yaklaşımı. Egzersiz, GTOS terapi ve ağrı yönetimi.',
    metaTitle: 'Fibromiyalji Tedavisi | Uzman Fizyoterapist Enes Arıca',
    metaDescription:
      'Fibromiyalji tedavisinde uzman fizyoterapi. Egzersiz reçeteleme, GTOS terapi ve kronik ağrı yönetimi ile yaşam kalitesini artırma.',
    keywords: ['fibromiyalji tedavisi', 'fibromiyalji fizyoterapi', 'kronik ağrı tedavisi', 'yaygın ağrı'],
    relatedTreatments: ['gtos-terapi', 'manuel-terapi', 'klinik-pilates'],
  },
  {
    slug: 'diz-protezi-rehabilitasyon',
    title: 'Diz Protezi Sonrası Rehabilitasyon',
    description:
      'Total diz protezi sonrası kapsamlı rehabilitasyon programı. Ameliyat öncesi hazırlık ve sonrası iyileşme.',
    shortDescription:
      'Total diz protezi sonrası kapsamlı rehabilitasyon programı. Ameliyat öncesi hazırlık ve sonrası iyileşme.',
    metaTitle: 'Diz Protezi Rehabilitasyonu | Uzman Fizyoterapist Enes Arıca',
    metaDescription:
      'Diz protezi sonrası rehabilitasyon programı. Ameliyat öncesi hazırlık, sonrası egzersiz progresyonu ve tam iyileşme süreci.',
    keywords: ['diz protezi rehabilitasyonu', 'total diz protezi', 'diz ameliyatı sonrası', 'diz rehabilitasyonu'],
    relatedTreatments: ['ameliyat-sonrasi-rehabilitasyon', 'spor-yaralanmalari', 'klinik-pilates'],
  },
  {
    slug: 'onkolojik-rehabilitasyon',
    title: 'Onkolojik Rehabilitasyon',
    description:
      'Kanser tedavisi sürecinde ve sonrasında yaşam kalitesini artıran fizyoterapi ve rehabilitasyon programları.',
    shortDescription:
      'Kanser tedavisi sürecinde ve sonrasında yaşam kalitesini artıran fizyoterapi ve rehabilitasyon programları.',
    metaTitle: 'Onkolojik Rehabilitasyon | Uzman Fizyoterapist Enes Arıca',
    metaDescription:
      'Kanser rehabilitasyonu ile tedavi sürecinde ve sonrasında yaşam kalitesini artırma. Egzersiz, lenfödem tedavisi ve yorgunluk yönetimi.',
    keywords: ['onkolojik rehabilitasyon', 'kanser rehabilitasyonu', 'kanser sonrası fizyoterapi', 'onkoloji fizyoterapi'],
    relatedTreatments: ['evde-fizik-tedavi', 'manuel-terapi', 'klinik-pilates'],
  },
  {
    slug: 'pediatrik-rehabilitasyon',
    title: 'Pediatrik Rehabilitasyon',
    description:
      'Çocuklarda gelişimsel gecikme, serebral palsi ve kas hastalıklarında uzman fizyoterapi yaklaşımı.',
    shortDescription:
      'Çocuklarda gelişimsel gecikme, serebral palsi ve kas hastalıklarında uzman fizyoterapi yaklaşımı.',
    metaTitle: 'Pediatrik Rehabilitasyon | Uzman Fizyoterapist Enes Arıca',
    metaDescription:
      'Çocuk fizyoterapisi ile serebral palsi, gelişimsel gecikme ve kas hastalıklarında uzman tedavi. Oyun bazlı rehabilitasyon.',
    keywords: ['pediatrik rehabilitasyon', 'çocuk fizyoterapisi', 'serebral palsi tedavisi', 'çocuk gelişimi'],
    relatedTreatments: ['norolojik-rehabilitasyon', 'klinik-pilates', 'evde-fizik-tedavi'],
  },
  {
    slug: 'yogun-bakim-rehabilitasyonu',
    title: 'Yoğun Bakım Rehabilitasyonu',
    description:
      'Yoğun bakım ünitesinde erken mobilizasyon ve solunum fizyoterapisi ile kritik hasta rehabilitasyonu.',
    shortDescription:
      'Yoğun bakım ünitesinde erken mobilizasyon ve solunum fizyoterapisi ile kritik hasta rehabilitasyonu.',
    metaTitle: 'Yoğun Bakım Rehabilitasyonu | Uzman Fizyoterapist Enes Arıca',
    metaDescription:
      'Yoğun bakımda erken mobilizasyon ve solunum fizyoterapisi. ICU-acquired weakness önleme ve kritik hasta rehabilitasyonu.',
    keywords: ['yoğun bakım rehabilitasyonu', 'ICU fizyoterapi', 'erken mobilizasyon', 'solunum fizyoterapisi'],
    relatedTreatments: ['norolojik-rehabilitasyon', 'evde-fizik-tedavi', 'ameliyat-sonrasi-rehabilitasyon'],
  },
];

export { treatments };
export default treatments;
