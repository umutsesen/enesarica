import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-forest-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text + Stats */}
          <div className="relative z-10">
            <p className="text-sage-400 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Uzman Fizyoterapist
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Kronik Ağrı ve Spor Yaralanmalarında Uzman Tedavi
            </h1>
            <p className="text-gray-400 text-lg max-w-md mb-8 leading-relaxed">
              Bel fıtığı, boyun fıtığı, skolyoz ve GTOS terapi tedavilerinde ameliyatsız, kişiye özel çözümler. Yalova, İstanbul ve İzmir&apos;de 4 şubede hizmetinizdeyiz.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center px-7 py-3.5 bg-sage-600 text-white rounded-lg text-sm font-medium transition-colors hover:bg-sage-700"
            >
              Randevu Al
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>

            {/* Stats */}
            <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-3 gap-6">
              <div>
                <span className="text-3xl md:text-4xl font-bold text-white">5.000+</span>
                <p className="text-sm text-gray-500 mt-1">Tedavi Edilen Hasta</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-bold text-white">10+</span>
                <p className="text-sm text-gray-500 mt-1">Yıl Deneyim</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-bold text-white">4</span>
                <p className="text-sm text-gray-500 mt-1">Şube</p>
              </div>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="aspect-[3/4] relative rounded-3xl overflow-hidden">
                <Image
                  src="/imgs/enes-arica.jpeg"
                  alt="Uzman Fizyoterapist Enes Arıca"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              {/* Decorative circle accent */}
              <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full border-4 border-sage-600/30 hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
