import Image from 'next/image';
import Link from 'next/link';
import { OPENING_HOURS } from '@/lib/site';

export default function Hero() {
  return (
    <section className="bg-forest-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="text-sage-300 text-sm font-medium mb-5">Yalova Merkez · Fizyoterapi ve rehabilitasyon</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
              Fizyoterapist<br />Enes Arıca
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-sage-100 max-w-xl">
              Hekim yönlendirmesi ve fizyoterapist değerlendirmesi doğrultusunda planlanan fizyoterapi ve rehabilitasyon programları.
              Bu sitede çalışma yaklaşımımı ve hareket sağlığına ilişkin genel bilgileri bulabilirsiniz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/iletisim" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-forest-900 font-medium hover:bg-sage-100 transition-colors">
                İletişim ve yol tarifi
              </Link>
              <Link href="/calisma-alanlari" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-sage-400 text-white font-medium hover:bg-white/10 transition-colors">
                Çalışma alanlarını inceleyin
              </Link>
            </div>
            <dl className="mt-10 pt-6 border-t border-white/20 grid sm:grid-cols-2 gap-5 text-sm">
              <div>
                <dt className="text-sage-300">İletişim noktası</dt>
                <dd className="mt-1 text-white">Yalova Merkez</dd>
              </div>
              <div>
                <dt className="text-sage-300">Çalışma saatleri</dt>
                <dd className="mt-1 text-white">{OPENING_HOURS}</dd>
              </div>
            </dl>
          </div>
          <figure className="lg:col-span-5 mx-auto w-full max-w-sm lg:max-w-md">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image src="/imgs/enes-arica.webp" alt="Fizyoterapist Enes Arıca" fill priority sizes="(max-width: 640px) 85vw, (max-width: 1024px) 384px, 40vw" className="object-cover object-top" />
            </div>
            <figcaption className="mt-3 text-sm text-sage-200">Fzt. Enes Arıca · Yalova</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
