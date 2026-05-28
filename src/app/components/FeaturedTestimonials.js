'use client'

import { motion } from 'framer-motion'

const ease = [0.25, 0.4, 0.25, 1]

export default function FeaturedTestimonials() {
  return (
    <section className="py-24 md:py-32 bg-sand-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
        >
          Geri Bildirim
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900"
        >
          Deneyiminizi Paylaşın
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-5 text-gray-600 leading-relaxed"
        >
          Tedavi sürecinizle ilgili görüşleriniz bizim için değerli. Deneyiminizi
          Google üzerinden değerlendirerek diğer danışanlara yol gösterebilirsiniz.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <a
            href="https://maps.app.goo.gl/rokMonQkByb8ritx9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3.5 bg-sage-600 text-white rounded-lg text-sm font-medium transition-all hover:bg-sage-700 hover:-translate-y-0.5"
          >
            Google&apos;da Değerlendirin
          </a>
        </motion.div>
      </div>
    </section>
  )
}
