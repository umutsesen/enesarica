'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ease = [0.25, 0.4, 0.25, 1]

const certifications = [
  { name: 'Manuel Terapi Sertifikası' },
  { name: 'GTOS Terapi Sertifikası' },
  { name: 'Klinik Pilates Eğitmenliği' },
]

export default function AboutPreview() {
  return (
    <section className="py-24 md:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="aspect-[4/5] relative rounded-2xl overflow-hidden"
          >
            <Image
              src="/imgs/enes-arica-tv.jpeg"
              alt="Fizyoterapist Enes Arıca TV yayını"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              Uzman Fizyoterapist
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900 mb-8"
            >
              Hakkımda
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-gray-600 leading-relaxed mb-6"
            >
              10 yılı aşkın klinik deneyimimle bel fıtığı, boyun fıtığı, skolyoz ve GTOS terapi alanlarında binlerce hastaya hizmet verdim. Tedavi yaklaşımımda manuel terapi teknikleri ile kişiye özel egzersiz programlarını bir arada kullanarak kalıcı sonuçlar elde etmeyi hedefliyorum.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-gray-600 leading-relaxed mb-8"
            >
              Yalova, İstanbul ve İzmir&apos;deki 4 şubemizde modern ekipmanlar ve güncel tedavi protokolleri ile hastalarımıza en iyi hizmeti sunuyoruz.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-2 mb-10"
            >
              {certifications.map((cert, i) => (
                <motion.li
                  key={cert.name}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 + i * 0.08, ease }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-sm text-gray-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-600 shrink-0" />
                  {cert.name}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link
                href="/hakkimda"
                className="inline-flex items-center px-8 py-4 border border-gray-200 bg-white rounded-lg text-sm font-medium text-forest-900 transition-all hover:border-gray-300 hover:-translate-y-0.5"
              >
                Devamını Oku →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
