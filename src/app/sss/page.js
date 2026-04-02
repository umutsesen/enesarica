import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'Sık Sorulan Sorular | Fzt. Enes Arıca',
  description:
    'Fizyoterapi tedavileri, randevu süreci, fiyatlandırma ve tedavi süreleri hakkında sık sorulan sorular.',
  alternates: { canonical: 'https://www.fizyoterapistenesarica.com/sss' },
};

const faqData = [
  {
    category: 'Genel',
    questions: [
      {
        q: 'Fizyoterapi nedir?',
        a: 'Fizyoterapi, kas-iskelet sistemi, sinir sistemi ve kardiyopulmoner sistem rahatsızlıklarının ilaç ve cerrahi dışı yöntemlerle tedavi edilmesini sağlayan bir sağlık disiplinidir. Manuel terapi, egzersiz programları, elektroterapi ve özel tedavi teknikleri kullanılarak ağrının azaltılması, hareket kabiliyetinin artırılması ve fonksiyonel iyileşme hedeflenir.',
      },
      {
        q: 'Fizyoterapiste ne zaman başvurmalıyım?',
        a: 'Bel, boyun, sırt ağrısı, eklem sertliği, hareket kısıtlılığı, spor yaralanması, ameliyat sonrası rehabilitasyon ihtiyacı, duruş bozukluğu veya kronik ağrı durumlarında fizyoterapiste başvurmanız önerilir. Erken başvuru, tedavi süresini kısaltır ve sonuçları olumlu etkiler.',
      },
      {
        q: 'Fizyoterapi ile fizik tedavi arasındaki fark nedir?',
        a: 'Fizik tedavi genellikle elektroterapi cihazları (ultrason, TENS, lazer vb.) ile yapılan tedavileri ifade eder. Fizyoterapi ise bunlara ek olarak manuel terapi, terapötik egzersiz, GTOS terapi gibi aktif tedavi yöntemlerini de kapsayan daha geniş bir kavramdır. Tedavilerimde her iki yaklaşımı hastanın ihtiyacına göre birleştiriyorum.',
      },
      {
        q: 'Klinik Pilates ile Reformer Pilates arasındaki fark nedir?',
        a: 'Klinik Pilates, fizyoterapist eşliğinde rehabilitasyon odaklı uygulanan tedavi amaçlı pilatestir. Mat üzerinde vücut ağırlığı ve hafif ekipmanlarla çalışılır. Reformer Pilates ise yay dirençli özel cihazla yapılan, güçlendirme ve vücut şekillendirmeye yönelik pilatestir. Tedavi sürecinde genellikle klinik pilates ile başlar, yeterli stabilizasyon kazanıldıktan sonra reformer pilatese geçiş yaparım.',
      },
      {
        q: 'GTOS terapi nedir ve kimlere uygulanır?',
        a: 'GTOS terapi, kas-iskelet sistemi rahatsızlıklarında kullanılan iğnesiz, ilaçsız ve risksiz bir tedavi yöntemidir. Golgi tendon organları üzerinden kas tonusunu düzenler. Bel fıtığı, boyun fıtığı, siyatik, kas spazmları, spor yaralanmaları ve kronik ağrılarda etkili sonuçlar verir. Akut ve kronik birçok durumda güvenle uygulanabilir.',
      },
    ],
  },
  {
    category: 'Tedavi Süreci',
    questions: [
      {
        q: 'Fizyoterapi seansları ne kadar sürer?',
        a: 'Seanslar genellikle 45-60 dakika sürmektedir. Süre, tedavi yöntemine ve hastanın durumuna göre değişebilir. İlk değerlendirme seansı biraz daha uzun tutulur çünkü detaylı muayene ve tedavi planı oluşturma süreci dahildir.',
      },
      {
        q: 'Tedavi kaç seans sürer?',
        a: 'Tedavi süresi hastanın durumuna, şikayetin akut veya kronik oluşuna göre değişir. Akut sorunlarda genellikle 4-6 seans, kronik problemlerde 8-12 seans arasında değişmektedir. Bel ve boyun fıtığı gibi durumlarda tedavi süreci 8-12 haftayı kapsayabilir. Her 4-6 haftada yeniden değerlendirme yapılarak program güncellenir.',
      },
      {
        q: 'Manuel terapi ağrılı mıdır?',
        a: 'Manuel terapi uygulamaları genellikle ağrısız veya minimal rahatsızlık verecek şekilde uygulanır. Bazı teknikler sırasında hafif bir baskı hissi olabilir ancak bu tolere edilebilir düzeydedir. Tedavi sırasında rahatsızlık hissederseniz fizyoterapistinize bildirmeniz önemlidir; uygulama yoğunluğu buna göre ayarlanır.',
      },
      {
        q: 'Tedavi sırasında egzersiz yapmam gerekir mi?',
        a: 'Evet, tedavinin en önemli bileşenlerinden biri ev egzersiz programıdır. Klinik seanslarda uygulanan tedavinin etkisinin kalıcı olması için verilen egzersizlerin düzenli yapılması gerekir. Egzersiz programı her hastaya özel olarak tasarlanır ve tedavi ilerledikçe güncellenir.',
      },
      {
        q: 'Bel fıtığında ameliyat şart mı?',
        a: 'Bel fıtığı vakalarının büyük çoğunluğu ameliyatsız tedavi edilebilir. Manuel terapi, GTOS terapi, McKenzie yöntemleri ve bireyselleştirilmiş egzersiz programlarıyla hastaların önemli bir bölümünde başarılı sonuçlar elde edilir. Ameliyat ancak ilerleyici kas güç kaybı, cauda equina sendromu veya yoğun konservatif tedaviye rağmen yanıt alınamayan durumlarda değerlendirilir.',
      },
      {
        q: 'Skolyoz tedavisinde sonuç almak ne kadar sürer?',
        a: 'Skolyoz tedavisi uzun soluklu bir süreçtir. İlk 3 ay yoğun faz olarak haftada 2-3 seans klinik çalışma yapılır. 3-6 ay arasında geliştirme fazına geçilir. 6 ay sonrasında sürdürme fazında periyodik kontrol ve düzenli ev programı ile devam edilir. Büyüme çağındaki çocuklarda erken başlangıç sonuçları doğrudan etkiler.',
      },
    ],
  },
  {
    category: 'Randevu',
    questions: [
      {
        q: 'Nasıl randevu alabilirim?',
        a: 'Web sitemizdeki iletişim formunu doldurarak, +90 544 662 12 45 numarasını arayarak veya WhatsApp üzerinden mesaj göndererek randevu alabilirsiniz.',
      },
      {
        q: 'Hangi şehirlerde hizmet veriyorsunuz?',
        a: 'Yalova Merkez, Yalova Çiftlikköy, İzmir Alsancak ve İstanbul Bahçelievler olmak üzere 4 şubede fizyoterapi ve rehabilitasyon hizmeti sunuyoruz.',
      },
      {
        q: 'Çalışma saatleriniz nedir?',
        a: 'Kliniklerimiz Pazartesi-Cumartesi günleri 09:00-22:00 saatleri arasında hizmet vermektedir. Randevu saatleri şubeye göre değişiklik gösterebilir; iletişime geçerek uygun saatleri öğrenebilirsiniz.',
      },
      {
        q: 'İlk seansta ne yapılır?',
        a: 'İlk seansta detaylı bir değerlendirme yapılır. Şikayetleriniz, tıbbi geçmişiniz ve varsa görüntüleme sonuçlarınız incelenir. Fiziksel muayene ile hareket açıklığı, kas kuvveti, postür ve özel testler değerlendirilir. Bulgulara göre bireyselleştirilmiş tedavi planı oluşturulur ve ilk tedavi uygulamalarına başlanır.',
      },
    ],
  },
  {
    category: 'Fiyatlandırma',
    questions: [
      {
        q: 'Fizyoterapi seansları SGK kapsamında mı?',
        a: 'Kliniğimizde özel sağlık sigortası ve bireysel ödeme ile hizmet verilmektedir. SGK anlaşmamız bulunmamaktadır. Detaylı fiyat bilgisi için bizimle iletişime geçebilirsiniz.',
      },
      {
        q: 'Özel sağlık sigortası geçerli mi?',
        a: 'Bazı özel sağlık sigortalarıyla anlaşmamız bulunmaktadır. Sigortanızın fizyoterapi kapsamını öğrenmek için bizi aramanızı öneriyoruz. Sigorta dışı bireysel ödeme seçenekleri de mevcuttur.',
      },
      {
        q: 'Seans ücretleri ne kadar?',
        a: 'Seans ücretleri tedavi yöntemine, seans süresine ve şubeye göre değişiklik göstermektedir. Güncel fiyat bilgisi için +90 544 662 12 45 numarasından veya iletişim sayfamızdan bize ulaşabilirsiniz.',
      },
    ],
  },
];

const allQuestions = faqData.flatMap((cat) => cat.questions);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allQuestions.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

export default function SSSPage() {
  return (
    <>
      <Script
        id="faq-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="pt-20">
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-forest-900 mb-4">
              Sık Sorulan Sorular
            </h1>
            <p className="text-lg text-gray-500 mb-20">
              Fizyoterapi tedavileri, randevu süreci ve fiyatlandırma hakkında
              merak edilenler.
            </p>

            <div className="space-y-20">
              {faqData.map((category) => (
                <div key={category.category}>
                  <h2 className="text-2xl font-semibold text-forest-900 mb-10 pb-4 border-b border-gray-200">
                    {category.category}
                  </h2>

                  <div className="space-y-10">
                    {category.questions.map((item) => (
                      <div key={item.q}>
                        <h3 className="text-lg font-medium text-forest-900 mb-2">
                          {item.q}
                        </h3>
                        <p className="text-gray-500 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 rounded-2xl border border-gray-200 p-8 md:p-12 text-center">
              <h2 className="text-2xl font-semibold text-forest-900 mb-3">
                Sorunuzun cevabını bulamadınız mı?
              </h2>
              <p className="text-gray-500 mb-8">
                Size yardımcı olmaktan memnuniyet duyarım. Doğrudan iletişime
                geçebilirsiniz.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/iletisim"
                  className="px-8 py-4 bg-sage-600 text-white rounded-lg font-medium hover:bg-sage-700 transition-colors"
                >
                  İletişime Geç
                </Link>
                <a
                  href="https://wa.me/905446621245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-gray-200 text-forest-900 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  WhatsApp ile Yaz
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
