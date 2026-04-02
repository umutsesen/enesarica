"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { testimonials } from "@/data/testimonials";

const ease = [0.25, 0.4, 0.25, 1];

export default function HastaDeneyimleriPage() {
  return (
    <main className="pt-20">
      <div className="bg-sand-50 py-24 md:py-32 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
            className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Geri Bildirimler
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-forest-900"
          >
            Hasta Deneyimleri
          </motion.h1>
        </div>
      </div>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease }}
                viewport={{ once: true, margin: "-50px" }}
                className="rounded-2xl p-8 border border-gray-100 flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <FaStar key={j} className="w-4 h-4 text-sage-600" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="font-semibold text-forest-900">{t.name}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {t.treatment} &middot; {t.branch}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
