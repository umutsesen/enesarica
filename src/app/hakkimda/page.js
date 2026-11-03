"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.25, 0.4, 0.25, 1];

const discussionSteps = [
  { label: '01', title: 'İhtiyaçlarınızı anlatın', desc: 'Günlük yaşamda zorlandığınız hareketleri, sorularınızı ve önceliklerinizi ilk görüşmede paylaşabilirsiniz.' },
  { label: '02', title: 'Mevcut belgeleri birlikte ele alın', desc: 'Hekim tanısı ve yönlendirmesi ile varsa ilgili raporlar, fizyoterapi değerlendirmesinin çerçevesini oluşturur.' },
  { label: '03', title: 'Planı ve izlem zamanını konuşun', desc: 'Önerilen çalışmanın amacı, size uygunluğu ve ne zaman yeniden değerlendirileceği görüşülür.' },
];

const practiceAreas = [
  {
    title: "GTOS Terapi",
    subtitle: "Golgi Tendon Organ Stimülasyonu",
    desc: "GTOS adıyla ilgili açıklamalar, yönteme özgü kanıtın sınırları ve uygulama öncesinde sorulabilecek sorular.",
    href: "/calisma-alanlari/gtos-terapi",
  },
  {
    title: "Schroth Metodu",
    subtitle: "Skolyoz Spesifik Egzersiz",
    desc: "Skolyozda egzersiz yaklaşımı, bireysel planlama ve hekim takibi hakkında genel bilgiler.",
    href: "/calisma-alanlari/skolyoz-schroth",
  },
  {
    title: "Manuel Terapi",
    subtitle: "Ortopedik Manuel Terapi",
    desc: "Manuel terapi yöntemleri, değerlendirme süreci ve kişiye göre planlama hakkında genel bilgiler.",
    href: "/calisma-alanlari/manuel-terapi",
  },
];

export default function HakkimdaPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-sand-50 py-24 md:py-32 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
            className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Fizyoterapist
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
                  src="/imgs/enes-arica.webp"
                  alt="Fzt. Enes Arıca - Fizyoterapist"
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
                  Ben Fizyoterapist Enes Arıca. Yalova Merkez’deki iletişim noktam üzerinden fizyoterapi süreci hakkında bilgi alabilirsiniz. Bu kişisel sitede hareket, egzersiz ve fizyoterapiye ilişkin açıklamaları bir araya getiriyorum.
                </p>
                <p>
                  Çalışma yaklaşımımda açık iletişime ve kişinin günlük yaşam ihtiyaçlarının anlaşılmasına önem veriyorum. Fizyoterapi uygulamaları, hekim tarafından konulan tanı ve yönlendirme doğrultusunda kişiye göre planlanır.
                </p>
                <p>
                  Bir görüşmede hangi hareketlerde zorlandığınızı, neyi yapmak istediğinizi ve size önerilen plan hakkında merak ettiklerinizi paylaşabilirsiniz. Hedeflerin ve izlem zamanının anlaşılır biçimde konuşulması, sürece katılımınız açısından önemlidir.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Discussion steps */}
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
                İlk Görüşme
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900 mb-4"
              >
                Birlikte konuşacağımız başlıklar
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease }}
                viewport={{ once: true }}
                className="text-gray-500 leading-relaxed"
              >
                Belgeleriniz, günlük yaşam hedefleriniz ve aklınızdaki sorular, görüşmenin başlangıç noktasıdır.
              </motion.p>
            </div>

            <div className="lg:col-span-3">
              <div className="relative">
                <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gray-200" />
                <div className="space-y-10">
                  {discussionSteps.map((item, i) => (
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

                      <span className="text-sage-600 text-sm font-semibold">{item.label}</span>
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

      {/* Topic guides */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
            viewport={{ once: true }}
            className="text-sage-600 text-sm font-medium tracking-widest uppercase mb-4"
          >
            Bilgi Rehberleri
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900 mb-16"
          >
            Sitedeki konu başlıkları
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {practiceAreas.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                viewport={{ once: true, margin: "-50px" }}
                className="rounded-2xl p-8 border border-gray-100 hover:border-sage-600/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-forest-900">
                  <Link href={cert.href} className="hover:text-sage-700 underline underline-offset-4">{cert.title}</Link>
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
              Fizyoterapi Felsefem
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Fizyoterapiyle ilgili soruların, hekim değerlendirmesi ve kişinin ihtiyaçları birlikte ele alınarak konuşulmasını önemsiyorum. Yöntem adları kadar önerilen çalışmanın amacı, dayanağı ve belirsizliklerinin de anlaşılır olması gerekir.
              </p>
              <p>
                Sorularınızı paylaşmanız, anlamadığınız bir açıklamanın yeniden ele alınması ve planın izlem görüşmelerinde gözden geçirilmesi bu yaklaşımın parçasıdır. Süreç ve yanıt kişiden kişiye değişir.
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
            Fizyoterapi Sürecini Birlikte Planlayalım
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
    </div>
  );
}
