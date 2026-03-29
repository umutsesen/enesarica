'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const certifications = [
  { name: 'Manuel Terapi Sertifikası' },
  { name: 'GTOS Terapi Sertifikası' },
  { name: 'Klinik Pilates Eğitmenliği' },
]

export default function AboutPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-24 md:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
            <Image
              src="/imgs/enes-arica-tv.jpeg"
              alt="Fizyoterapist Enes Arıca TV yayını"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Uzman Fizyoterapist</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900 mb-8">
              Hakkımda
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              10 yılı aşkın klinik deneyimimle bel fıtığı, boyun fıtığı, skolyoz ve GTOS terapi alanlarında binlerce hastaya hizmet verdim. Tedavi yaklaşımımda manuel terapi teknikleri ile kişiye özel egzersiz programlarını bir arada kullanarak kalıcı sonuçlar elde etmeyi hedefliyorum.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yalova, İstanbul ve İzmir&apos;deki 4 şubemizde modern ekipmanlar ve güncel tedavi protokolleri ile hastalarımıza en iyi hizmeti sunuyoruz.
            </p>
            <ul className="space-y-2 mb-10">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-600 shrink-0" />
                  {cert.name}
                </li>
              ))}
            </ul>
            <Link
              href="/hakkimda"
              className="inline-flex items-center px-8 py-4 border border-gray-200 bg-white rounded-lg text-sm font-medium text-forest-900 transition-colors hover:border-gray-300"
            >
              Devamını Oku →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
