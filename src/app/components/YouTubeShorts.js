"use client"

import { motion } from 'framer-motion'
import { FaYoutube, FaPlay } from 'react-icons/fa'

const shorts = [
  {
    id: "tyAMit19y_M",
    title: "Boyun ağrın geçmiyor mu? Doğru yastıkla rahat uyu!",
    url: "https://www.youtube.com/shorts/tyAMit19y_M",
  },
  {
    id: "lGgUpnG-5Bg",
    title: "Omurganı özgür bırak! Fizyoterapist dokunuşuyla güç ve nefes",
    url: "https://www.youtube.com/shorts/lGgUpnG-5Bg",
  },
  {
    id: "HRB_wt01NQY",
    title: "Pilates: Omurga sağlığı, güç ve ruhsal huzur!",
    url: "https://www.youtube.com/shorts/HRB_wt01NQY",
  },
  {
    id: "Ku0EzqJ2kD8",
    title: "Sırt ağrın varsa bu pilates combo'yu dene!",
    url: "https://www.youtube.com/shorts/Ku0EzqJ2kD8",
  },
  {
    id: "JkpgdTpCDwo",
    title: "Bel fıtığı tedavisi mümkün mü? Uzman Fizyoterapist anlatıyor",
    url: "https://www.youtube.com/shorts/JkpgdTpCDwo",
  },
  {
    id: "l5CHOeIzgD4",
    title: "Bel fıtığında ameliyat olmak zorunda mıyız?",
    url: "https://www.youtube.com/shorts/l5CHOeIzgD4",
  },
]

export default function YouTubeShorts() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              YouTube
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900">
              Kısa Videolarımız
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@fizyones/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest-900 text-white rounded-lg font-medium hover:bg-forest-800 transition-colors text-sm w-fit"
          >
            <FaYoutube className="w-4 h-4" />
            Tümünü İzle
          </a>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {shorts.map((short, index) => (
            <motion.a
              key={short.id}
              href={short.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://i.ytimg.com/vi/${short.id}/oar2.jpg`}
                  alt={short.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-11 h-11 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaPlay className="w-3.5 h-3.5 text-forest-900 ml-0.5" />
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-sm font-medium text-forest-900 line-clamp-2 group-hover:text-sage-600 transition-colors">
                {short.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
