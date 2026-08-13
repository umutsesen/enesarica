"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ease = [0.25, 0.4, 0.25, 1]

export default function Hero() {
  return (
    <section className="bg-forest-900 relative overflow-hidden">
      {/* Subtle animated bg element */}
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-sage-600/5 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text + Stats */}
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease }}
              className="text-sage-400 text-xs font-semibold tracking-[0.2em] uppercase mb-5"
            >
              Fizyoterapist
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            >
              Kronik Ağrı ve Spor Yaralanmalarında Fizyoterapi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="text-gray-400 text-lg max-w-md mb-8 leading-relaxed"
            >
              Bel fıtığı, boyun fıtığı, skolyoz ve GTOS terapi alanlarında kişiye özel fizyoterapi programları. Yalova&apos;daki iletişim noktam üzerinden bilgi alabilirsiniz.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease }}
            >
              <Link
                href="/iletisim"
                className="inline-flex items-center px-7 py-3.5 bg-sage-600 text-white rounded-lg text-sm font-medium transition-all hover:bg-sage-700 hover:-translate-y-0.5"
              >
                Randevu Al
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm lg:max-w-md">
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                className="aspect-[3/4] relative rounded-3xl overflow-hidden"
              >
                <Image
                  src="/imgs/enes-arica.webp"
                  alt="Fizyoterapist Enes Arıca"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </motion.div>
              {/* Decorative circle accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0, ease }}
                className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full border-4 border-sage-600/30 hidden lg:block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
