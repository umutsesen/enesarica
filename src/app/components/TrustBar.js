'use client'

import { useInView } from 'react-intersection-observer'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

function AnimatedNumber({ value, suffix = '', inView }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, v => Math.round(v))

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 1.5, ease: 'easeOut' })
    }
  }, [inView, count, value])

  return (
    <motion.span>{rounded}</motion.span>
  )
}

const stats = [
  { value: 10, suffix: '+', label: 'Yıl Deneyim' },
  { value: 5000, suffix: '+', label: 'Hasta' },
  { value: 4, suffix: '', label: 'Şube' },
  { value: 3, suffix: '', label: 'Uzmanlık Sertifikası' },
]

export default function TrustBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section ref={ref} className="bg-white border-y border-gray-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-forest-900">
                <AnimatedNumber value={stat.value} inView={inView} />
                {stat.suffix}
              </p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
