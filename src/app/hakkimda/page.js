"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Section({ children, className = "" }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.section
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.section>
  );
}

const timeline = [
  { year: "2014", title: "Lisans Mezuniyeti", desc: "Marmara Üniversitesi Fizyoterapi ve Rehabilitasyon Bölümü" },
  { year: "2015", title: "Fizyones Kuruluşu", desc: "Yalova'da ilk Fizyones şubesinin açılışı" },
  { year: "2016", title: "Manuel Terapi Sertifikası", desc: "Ortopedik manuel terapi eğitim programı" },
  { year: "2017", title: "GTOS Terapi Sertifikası", desc: "Golgi Tendon Organ Stimülasyonu uzmanlık eğitimi" },
  { year: "2019", title: "Schroth Metodu Sertifikası", desc: "Skolyoz tedavisinde Schroth metodu ileri düzey eğitimi" },
  { year: "2020", title: "İstanbul Şubesi", desc: "İstanbul Bahçelievler şubesinin açılışı" },
  { year: "2022", title: "İzmir Şubesi", desc: "İzmir Alsancak şubesinin açılışı" },
  { year: "2023", title: "Çiftlikköy Şubesi", desc: "Yalova Çiftlikköy şubesinin açılışı" },
];

const certifications = [
  {
    title: "GTOS Terapi",
    subtitle: "Golgi Tendon Organ Stimülasyonu",
    desc: "Kas-iskelet sistemi sorunlarında ileri düzey GTOS terapi uygulamaları. Kronik ağrı ve fonksiyonel bozukluklarda etkili tedavi yaklaşımı.",
  },
  {
    title: "Schroth Metodu",
    subtitle: "Skolyoz Spesifik Egzersiz",
    desc: "Almanya kökenli Schroth metodunda uzmanlık. Skolyoz hastalarına özel üç boyutlu düzeltici egzersiz programları.",
  },
  {
    title: "Manuel Terapi",
    subtitle: "Ortopedik Manuel Terapi",
    desc: "Eklem mobilizasyonu, manipülasyon ve yumuşak doku teknikleri. Ağrı kontrolü ve hareket açıklığını artırmaya yönelik uygulamalar.",
  },
];

export default function HakkimdaPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <div className="bg-sand-50 py-24 md:py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Uzman Fizyoterapist
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-forest-900">
            Hakkımda
          </h1>
        </div>
      </div>

      {/* Biography */}
      <Section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                <Image
                  src="/imgs/enes-arica.jpeg"
                  alt="Fzt. Enes Arıca - Uzman Fizyoterapist"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
            <p className="text-sage-600 text-sm font-medium tracking-widest uppercase mb-4">
              Biyografi
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900 mb-8">
              Fzt. Enes Arıca
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Marmara Üniversitesi Fizyoterapi ve Rehabilitasyon Bölümü mezunuyum. Mezuniyetimin ardından fizyoterapi alanındaki tutkumu kendi kliniğime taşıyarak Fizyones markasını kurdum. Bugün Yalova Merkez, Yalova Çiftlikköy, İstanbul Bahçelievler ve İzmir Alsancak olmak üzere 4 şubede hastalarıma hizmet vermenin gururunu yaşıyorum.
              </p>
              <p>
                Kariyer yolculuğumda GTOS (Golgi Tendon Organ Stimülasyonu) terapi, skolyoz tedavisinde Schroth metodu ve ortopedik manuel terapi alanlarında ileri düzey eğitimler aldım. Bu uzmanlık alanları sayesinde özellikle bel fıtığı, boyun fıtığı, skolyoz ve kronik ağrı sendromlarında ameliyatsız, iğnesiz ve ilaçsız tedavi yöntemleri sunabiliyorum.
              </p>
              <p>
                Her hastamın kendine özgü olduğuna inanıyor ve tedavi programlarını kişiye özel olarak tasarlıyorum. Kanıta dayalı tıp prensiplerini modern fizyoterapi teknikleriyle birleştirerek hastalarımın en kısa sürede günlük hayatlarına ve sevdikleri aktivitelere dönmelerini sağlıyorum.
              </p>
            </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="py-24 md:py-32 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sage-600 text-sm font-medium tracking-widest uppercase mb-4">
              Kariyer Yolculuğu
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900 mb-16">
              Eğitim ve Deneyim
            </h2>
            <div className="relative">
              <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gray-200" />
              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <div key={i} className="relative pl-12 md:pl-16">
                    <div className="absolute left-2 md:left-4 top-1 w-5 h-5 rounded-full border-2 border-sage-600 bg-white" />
                    <span className="text-sage-600 text-sm font-semibold">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-forest-900 mt-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sage-600 text-sm font-medium tracking-widest uppercase mb-4">
            Uzmanlık Alanları
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900 mb-16">
            Sertifikalar
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 border border-gray-100 hover:border-sage-600/30 transition-colors"
              >
                <h3 className="text-xl font-semibold text-forest-900">
                  {cert.title}
                </h3>
                <p className="text-sage-600 text-sm font-medium mt-1">
                  {cert.subtitle}
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section className="py-24 md:py-32 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Yaklaşımım
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900 mb-8">
              Tedavi Felsefem
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Tedavide kanıta dayalı yaklaşımı benimsiyor, her hastamı bütüncül bir bakış açısıyla değerlendiriyorum. Ağrının sadece bir semptom olduğuna, asıl nedenin altında yatan fonksiyonel bozukluğun tedavi edilmesi gerektiğine inanıyorum.
              </p>
              <p>
                Hastalarımla açık iletişim kurarak tedavi sürecini birlikte yönetiyoruz. Her seansta yapılan uygulamaların nedenini açıklıyor, hastalarımın kendi vücutlarını daha iyi anlamalarını sağlıyorum. Bu hasta merkezli yaklaşım, tedavi sürecini hızlandırıyor ve kalıcı sonuçlar elde etmemizi sağlıyor.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-sand-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900 mb-4">
            Tedavi Surecini Birlikte Planlayalim
          </h2>
          <p className="text-gray-500 mb-10">
            Durumunuza ozel bir degerlendirme yapmak icin iletisime gecin.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center px-8 py-4 bg-sage-600 text-white rounded-lg font-medium hover:bg-sage-700 transition-colors"
          >
            Randevu Al
          </Link>
        </div>
      </section>
    </main>
  );
}
