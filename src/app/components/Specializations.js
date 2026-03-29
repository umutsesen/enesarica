import Link from 'next/link'
import { treatments } from '@/data/treatments'

const featured = treatments.slice(0, 8)

export default function Specializations() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Uzmanlık Alanları</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900">
              Tedavi Alanlarım
            </h2>
          </div>
          <Link
            href="/tedavi-alanlari"
            className="hidden md:inline-flex text-sm font-medium text-forest-900 hover:text-sage-600 transition-colors"
          >
            Tümünü Gör →
          </Link>
        </div>

        {/* Stacked full-width rows */}
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {featured.map((treatment) => (
            <Link
              key={treatment.slug}
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
                <span className="text-sm text-gray-400 group-hover:text-sage-600 transition-colors">
                  Detay →
                </span>
              </div>
            </Link>
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
