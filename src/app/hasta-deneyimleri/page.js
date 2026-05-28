"use client";

import { motion } from "framer-motion";

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
            Geri Bildirim
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-forest-900"
          >
            Deneyiminizi Paylaşın
          </motion.h1>
        </div>
      </div>

      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-gray-600 leading-relaxed text-lg"
          >
            Sağlık alanındaki tanıtım düzenlemeleri gereği hastalarımıza ait
            yorumları bu sayfada yayımlamıyoruz. Tedavi sürecinizle ilgili
            görüşlerinizi paylaşmak isterseniz, deneyiminizi Google üzerinden
            değerlendirebilirsiniz. Geri bildirimleriniz hem bizim için hem de
            doğru bilgiye ulaşmak isteyen diğer danışanlar için değerlidir.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <a
              href="https://maps.app.goo.gl/rokMonQkByb8ritx9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-sage-600 text-white rounded-lg font-medium transition-all hover:bg-sage-700 hover:-translate-y-0.5"
            >
              Google&apos;da Değerlendirin
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
