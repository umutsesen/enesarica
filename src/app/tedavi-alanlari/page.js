import Link from "next/link";
import { treatments } from "@/data/treatments";

const categories = [
  {
    label: "Omurga ve Ağrı Tedavileri",
    slugs: ["bel-fitigi-tedavisi", "boyun-fitigi-tedavisi", "bel-kaymasi-tedavisi", "gtos-terapi", "manuel-terapi", "fibromiyalji-tedavisi"],
  },
  {
    label: "Hareket ve Performans",
    slugs: ["klinik-pilates", "reformer-pilates", "spor-yaralanmalari"],
  },
  {
    label: "Rehabilitasyon",
    slugs: ["skolyoz-schroth-tedavisi", "norolojik-rehabilitasyon", "ameliyat-sonrasi-rehabilitasyon", "diz-protezi-rehabilitasyon", "evde-fizik-tedavi", "onkolojik-rehabilitasyon", "pediatrik-rehabilitasyon", "yogun-bakim-rehabilitasyonu"],
  },
];

const featured = ["bel-fitigi-tedavisi", "boyun-fitigi-tedavisi", "gtos-terapi", "skolyoz-schroth-tedavisi", "manuel-terapi", "spor-yaralanmalari", "klinik-pilates", "reformer-pilates"];

export default function TedaviAlanlariPage() {
  const featuredTreatments = featured.map((s) => treatments.find((t) => t.slug === s)).filter(Boolean);

  return (
    <main className="pt-20">
      {/* Hero — Light, distinctive */}
      <section className="bg-sand-50 py-24 md:py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Uzman Fizyoterapist Enes Arica
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-forest-900 mb-6">
              Tedavi Alanlarim
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              Kanita dayali fizyoterapi ile bel fitigi, boyun fitigi, skolyoz ve spor yaralanmalarindan ameliyatsiz iyilesme. Her hasta icin bireysel tedavi plani.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-12 mt-14 pt-10 border-t border-gray-200">
            <div>
              <span className="text-4xl font-bold text-forest-900">17</span>
              <p className="text-sm text-gray-500 mt-1">Tedavi Alani</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-forest-900">5.000+</span>
              <p className="text-sm text-gray-500 mt-1">Tedavi Edilen Hasta</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-forest-900">%90</span>
              <p className="text-sm text-gray-500 mt-1">Ameliyatsiz Basari</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured — Horizontal scroll slider */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
          <p className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            One Cikan Tedaviler
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-forest-900 tracking-tight">
            En Sik Uyguladigim Tedaviler
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pb-6 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
            {featuredTreatments.map((t, i) => (
              <Link
                key={t.slug}
                href={`/tedavi-alanlari/${t.slug}`}
                className="group flex-none w-[320px] md:w-[380px] snap-start"
              >
                <div className="h-full rounded-2xl border border-gray-100 bg-white p-8 hover:border-sage-500/40 hover:shadow-lg transition-all duration-300 flex flex-col">
                  <span className="text-sage-500/60 text-6xl font-bold leading-none mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold text-forest-900 group-hover:text-sage-600 transition-colors mb-3">
                    {t.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {t.shortDescription}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-sage-600 group-hover:gap-3 transition-all">
                    Detayli Bilgi
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All treatments by category */}
      <section className="py-20 md:py-28 bg-sand-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Tum Uzmanlik Alanlarim
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-forest-900 tracking-tight mb-16">
            Kategorilere Gore Tedaviler
          </h2>

          <div className="space-y-16">
            {categories.map((cat) => {
              const items = cat.slugs.map((s) => treatments.find((t) => t.slug === s)).filter(Boolean);
              return (
                <div key={cat.label}>
                  <h3 className="text-lg font-semibold text-forest-900 mb-6 pb-3 border-b border-gray-200">
                    {cat.label}
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((t) => (
                      <Link
                        key={t.slug}
                        href={`/tedavi-alanlari/${t.slug}`}
                        className="group flex items-start gap-4 p-5 rounded-xl hover:bg-white transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-sage-500 mt-2 flex-none" />
                        <div>
                          <h4 className="font-medium text-forest-900 group-hover:text-sage-600 transition-colors">
                            {t.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                            {t.shortDescription}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-forest-900 tracking-tight mb-4">
              Tedavi Sürecini Birlikte Planlayalım
            </h2>
            <p className="text-gray-500 mb-10 max-w-xl mx-auto">
              Durumunuza özel bir değerlendirme yapmak ve size en uygun tedavi planını oluşturmak için iletişime geçin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/iletisim"
                className="px-8 py-4 bg-sage-600 text-white rounded-lg font-medium hover:bg-sage-700 transition-colors"
              >
                Randevu Al
              </Link>
              <Link
                href="/blog"
                className="px-8 py-4 border border-gray-200 text-forest-900 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Blog Yazılarımı Oku
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
