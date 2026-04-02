'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { testimonials } from '@/data/testimonials'

const ease = [0.25, 0.4, 0.25, 1]
const featured = testimonials.filter(t => t.featured).slice(0, 6)

export default function FeaturedTestimonials() {
  return (
    <section className="py-24 md:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Gerçek Hasta Deneyimleri
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900"
          >
            Hasta Deneyimleri
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              viewport={{ once: true, margin: "-50px" }}
              className="rounded-2xl border border-gray-100 bg-white p-6 flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-gray-600 leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                <div>
                  <p className="font-medium text-forest-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.treatmentArea} &middot; {t.branch}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} className="w-3 h-3 text-sage-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/hasta-deneyimleri"
            className="text-sm font-medium text-forest-900 hover:text-sage-600 transition-colors"
          >
            Tüm Hasta Deneyimleri →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
