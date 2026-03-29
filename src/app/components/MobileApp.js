'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  'Kisisel egzersiz programiniz her zaman yaninizda',
  'Agri skorunuzu gunluk takip edin',
  'Seans takviminizi gorun ve hatirlatma alin',
  'Ilerleme fotograflarinizi karsilastirin',
]

export default function MobileApp() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Mobil Uygulama
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900 mb-4">
              Tedavi Surecini Dijitalde Takip Edin
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Hastalarim icin gelistirdigim uygulama ile tedavi surecinizi
              yakindan takip edin. Egzersiz programiniz, agri takibiniz ve
              terapistinizle iletisim tek bir yerde.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <svg
                    className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-500 rounded-lg text-sm font-medium cursor-not-allowed">
                App Store — Yakinda
              </span>
              <span className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-500 rounded-lg text-sm font-medium cursor-not-allowed">
                Google Play — Yakinda
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="w-[280px] h-[560px] bg-sand-50 rounded-[2.5rem] border border-gray-200 flex items-center justify-center">
              <p className="text-gray-400 text-sm text-center px-8">
                Uygulama ekran goruntusu
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
