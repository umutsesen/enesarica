'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { treatments } from '@/data/treatments'

const ease = [0.25, 0.4, 0.25, 1]
const featured = treatments.slice(0, 8)

export default function Specializations() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              Uzmanlık Alanları
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900"
            >
              Tedavi Alanlarım
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            viewport={{ once: true }}
          >
            <Link
              href="/tedavi-alanlari"
              className="hidden md:inline-flex text-sm font-medium text-forest-900 hover:text-sage-600 transition-colors"
            >
              Tümünü Gör →
            </Link>
          </motion.div>
        </div>

        {/* Stacked full-width rows */}
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {featured.map((treatment, i) => (
            <motion.div
              key={treatment.slug}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Link
                href={`/tedavi-alanlari/${treatment.slug}`}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 items-baseline"
              >
                <h3 className="md:col-span-4 text-xl md:text-2xl font-medium text-forest-900 group-hover:text-sage-600 transition-colors">
                  {treatment.title}
                </h3>
                <p className="md:col-span-6 text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {treatment.shortDescription}
                </p>
                <div className="md:col-span-2 flex justify-end">
                  <span className="text-sm text-gray-400 group-hover:text-sage-600 group-hover:translate-x-1 transition-all">
                    Detay →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/tedavi-alanlari"
            className="text-sm font-medium text-forest-900 hover:text-sage-600 transition-colors"
          >
            Tümünü Gör →
          </Link>
        </div>
      </div>
    </section>
  )
}
