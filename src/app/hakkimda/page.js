"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.25, 0.4, 0.25, 1];

const timeline = [
  { year: "2014", title: "Lisans Mezuniyeti", desc: "Marmara Üniversitesi Fizyoterapi ve Rehabilitasyon Bölümü" },
  { year: "2015", title: "Klinik Kuruluşu", desc: "Yalova'da ilk kliniğin açılışı" },
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
      <div className="bg-sand-50 py-24 md:py-32 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
            className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Uzman Fizyoterapist
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-forest-900"
          >
            Hakkımda
          </motion.h1>
        </div>
      </div>

      {/* Biography */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-2"
            >
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                <Image
                  src="/imgs/enes-arica.jpeg"
                  alt="Fzt. Enes Arıca - Uzman Fizyoterapist"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </motion.div>
            <div className="lg:col-span-3">
              <motion.p
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease }}
                viewport={{ once: true }}
                className="text-sage-600 text-sm font-medium tracking-widest uppercase mb-4"
              >
                Biyografi
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900 mb-8"
              >
                Fzt. Enes Arıca
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease }}
                viewport={{ once: true }}
                className="space-y-6 text-gray-600 leading-relaxed"
              >
                <p>
                  Marmara Üniversitesi Fizyoterapi ve Rehabilitasyon Bölümü mezunuyum. Mezuniyetimin ardından fizyoterapi alanındaki tutkumu kendi kliniğime taşıyarak Yalova Fizyoterapi'yi kurdum. Bugün Yalova Merkez, Yalova Çiftlikköy, İstanbul Bahçelievler ve İzmir Alsancak olmak üzere 4 şubede hastalarıma hizmet vermenin gururunu yaşıyorum.
                </p>
                <p>
                  Kariyer yolculuğumda GTOS (Golgi Tendon Organ Stimülasyonu) terapi, skolyoz tedavisinde Schroth metodu ve ortopedik manuel terapi alanlarında ileri düzey eğitimler aldım. Bu uzmanlık alanları sayesinde özellikle bel fıtığı, boyun fıtığı, skolyoz ve kronik ağrı sendromlarında ameliyatsız, iğnesiz ve ilaçsız tedavi yöntemleri sunabiliyorum.
                </p>
                <p>
                  Her hastamın kendine özgü olduğuna inanıyor ve tedavi programlarını kişiye özel olarak tasarlıyorum. Kanıta dayalı tıp prensiplerini modern fizyoterapi teknikleriyle birleştirerek hastalarımın en kısa sürede günlük hayatlarına ve sevdikleri aktivitelere dönmelerini sağlıyorum.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
              <motion.p
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease }}
                viewport={{ once: true }}
                className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
              >
                Kariyer Yolculuğu
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900 mb-4"
              >
                Eğitim ve Deneyim
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease }}
                viewport={{ once: true }}
                className="text-gray-500 leading-relaxed"
              >
                2014&apos;ten bugüne fizyoterapi alanındaki gelişim sürecim ve kazanımlarım.
              </motion.p>
            </div>

            <div className="lg:col-span-3">
              <div className="relative">
                <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gray-200" />
                <div className="space-y-10">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease }}
                      viewport={{ once: true, margin: "-50px" }}
                      className="relative pl-12 md:pl-16 group"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.08 + 0.1, ease }}
                        viewport={{ once: true }}
                        className="absolute left-2 md:left-4 top-1 w-5 h-5 rounded-full border-2 border-sage-600 bg-sage-600"
                      >
                        <div className="absolute inset-0 rounded-full bg-sage-600/20 scale-[2]" />
                      </motion.div>

                      <span className="text-sage-600 text-sm font-semibold">{item.year}</span>
                      <h3 className="text-lg font-semibold text-forest-900 mt-1">{item.title}</h3>
                      <p className="text-gray-600 mt-1">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
            viewport={{ once: true }}
            className="text-sage-600 text-sm font-medium tracking-widest uppercase mb-4"
          >
            Uzmanlık Alanları
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900 mb-16"
          >
            Sertifikalar
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                viewport={{ once: true, margin: "-50px" }}
                className="rounded-2xl p-8 border border-gray-100 hover:border-sage-600/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto text-center"
          >
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
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        viewport={{ once: true, margin: "-80px" }}
        className="py-20 md:py-28 bg-sand-50"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900 mb-4">
            Tedavi Sürecini Birlikte Planlayalım
          </h2>
          <p className="text-gray-500 mb-10">
            Durumunuza özel bir değerlendirme yapmak için iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center px-8 py-4 bg-sage-600 text-white rounded-lg font-medium hover:bg-sage-700 transition-all hover:-translate-y-0.5"
          >
            Randevu Al
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
