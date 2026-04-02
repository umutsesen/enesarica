'use client'

import { motion } from 'framer-motion'

const ease = [0.25, 0.4, 0.25, 1]

const steps = [
  {
    num: '1',
    title: 'Değerlendirme ve Tanı',
    desc: 'Detaylı fiziksel muayene ve anamnez ile durumunuzu değerlendiriyoruz. Gerekli testler ve ölçümlerle doğru tanıya ulaşıyoruz.',
  },
  {
    num: '2',
    title: 'Kişiye Özel Tedavi Planı',
    desc: 'Durumunuza özel manuel terapi, egzersiz ve GTOS terapi kombinasyonlarından oluşan bir tedavi programı hazırlıyoruz.',
  },
  {
    num: '3',
    title: 'Tedavi ve Takip',
    desc: 'Her seansta ilerlemenizi takip ediyor, tedavi planını ihtiyaca göre güncelliyoruz.',
  },
  {
    num: '4',
    title: 'Kalıcı İyileşme',
    desc: 'Ev egzersiz programı ve yaşam tarzı önerileri ile tedavi sonuçlarının kalıcı olmasını sağlıyoruz.',
  },
]

export default function TreatmentProcess() {
  return (
    <section className="bg-forest-900 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-forest-800"
          >
            <img
              src="/imgs/enes-arica-tv.jpeg"
              alt="Fizyoterapist Enes Arıca tedavi uygulaması"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Steps */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-sage-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              Nasıl Çalışıyoruz
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-12"
            >
              Değerlendirmeden İyileşmeye Her Adımda Yanınızdayız
            </motion.h2>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex gap-4 p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-sage-600/20 flex items-center justify-center shrink-0">
                    <span className="text-sage-400 text-sm font-semibold">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
