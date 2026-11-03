import { createPageMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = createPageMetadata({
  title: 'Sık Sorulan Sorular | Fzt. Enes Arıca',
  description: 'Fizyoterapi süreci, hekim yönlendirmesi, başvuru belgeleri ve seans süreleri hakkında sık sorulan sorulara genel yanıtlar.',
  path: '/sss',
});

const faqData = [
  {
    category: 'Başvuru Öncesi',
    questions: [
      {
        q: 'Başvuru öncesinde hekim değerlendirmesi gerekir mi?',
        a: 'Fizyoterapi uygulamaları, hekim tarafından konulan tanı ve yönlendirme doğrultusunda planlanır. Başvuru öncesinde hekim değerlendirmesi yapılmış olması gerekir. Mevcut rapor ve yönlendirme belgelerinizi ilk görüşmeye getirmeniz önerilir.',
      },
      {
        q: 'İlk görüşmeye gelirken neleri hazırlamalıyım?',
        a: 'Varsa hekim raporunuzu, yönlendirme belgenizi ve ilgili tetkik sonuçlarınızı yanınızda bulundurabilirsiniz. Günlük hareketinizi etkileyen durumları ve görüşmede sormak istediğiniz soruları önceden not almanız yararlı olabilir.',
      },
      {
        q: 'Sağlık belgelerimi iletişim formundan göndermeli miyim?',
        a: 'İletişim formuna sağlık raporu, tetkik sonucu veya ayrıntılı sağlık bilgisi eklemeyin. Formu iletişim ve randevu talebi için kullanın. Belgelerin görüşmede nasıl değerlendirileceğine ilişkin bilgiyi doğrudan iletişime geçerek alabilirsiniz.',
      },
    ],
  },
  {
    category: 'Görüşme ve Program',
    questions: [
      {
        q: 'İlk görüşmede neler değerlendirilir?',
        a: 'Hekim tanısı ve yönlendirmesi, mevcut belgeler, günlük hareket ihtiyaçları ve fonksiyonel durum birlikte ele alınır. Uygun fizyoterapi planı bu değerlendirme doğrultusunda kişiye göre belirlenir.',
      },
      {
        q: 'Seans süresi ve toplam seans sayısı önceden belli midir?',
        a: 'Herkes için geçerli bir seans süresi veya toplam seans sayısı yoktur. Plan; hekim yönlendirmesi, kişinin durumu, hareket ihtiyaçları ve değerlendirme bulgularına göre belirlenir. Süreçteki değişiklikler doğrultusunda yeniden değerlendirilir.',
      },
      {
        q: 'Ev egzersiz programı herkese aynı şekilde mi verilir?',
        a: 'Egzersizlerin uygunluğu, sıklığı ve yoğunluğu kişiye göre değerlendirilir. İnternetteki genel bilgiler kişisel egzersiz planının yerine geçmez. Size önerilen programla ilgili sorularınızı fizyoterapistinize iletebilirsiniz.',
      },
    ],
  },
  {
    category: 'Randevu ve İletişim',
    questions: [
      {
        q: 'Nasıl randevu talebi oluşturabilirim?',
        a: 'İletişim formunu doldurarak, +90 554 662 12 45 numarasını arayarak veya WhatsApp üzerinden mesaj göndererek randevu talebinizi iletebilirsiniz. Talep göndermek randevunun kesinleştiği anlamına gelmez; gün ve saat karşılıklı görüşülerek belirlenir.',
      },
      {
        q: 'Görüşmeler nerede yapılır?',
        a: "İletişim noktası Yalova Merkez’dedir. Güncel adres ve harita bağlantısına iletişim sayfasından ulaşabilirsiniz.",
      },
      {
        q: 'Çalışma saatleriniz nedir?',
        a: 'İletişim saatleri Pazartesi-Cumartesi 10:00-22:00 arasındadır. Randevu uygunluğunu ve görüşme saatini önceden iletişime geçerek teyit edebilirsiniz.',
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
      <script
        id="faq-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.fizyoterapistenesarica.com" },
              { "@type": "ListItem", "position": 2, "name": "Sık Sorulan Sorular", "item": "https://www.fizyoterapistenesarica.com/sss" },
            ],
          }),
        }}
      />

      <div className="pt-20">
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-forest-900 mb-4">
              Sık Sorulan Sorular
            </h1>
            <p className="text-lg text-gray-500 mb-20">
              Başvuru belgeleri, ilk görüşme, kişiye göre planlama ve randevu
              talepleri hakkında pratik bilgiler.
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
                Size yardımcı olmaktan memnuniyet duyarım. Benimle iletişime
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
                  href="https://wa.me/905546621245?text=Merhaba%2C%20fizyoterapistenesarica.com%20%C3%BCzerinden%20yaz%C4%B1yorum.%20Bilgi%20almak%20istiyorum."
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
      </div>
    </>
  );
}
