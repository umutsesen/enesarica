import Link from 'next/link'

export const metadata = {
  title: 'Sayfa Bulunamadı | Fzt. Enes Arıca',
  description: 'Aradığınız sayfa bulunamadı. Ana sayfaya dönebilir veya diğer sayfalara göz atabilirsiniz.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section className="bg-sand-50 min-h-[70vh] flex items-center">
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="text-sage-600 text-sm font-semibold tracking-[0.2em] uppercase mb-5">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-forest-900 tracking-tight mb-5">
          Aradığınız sayfa bulunamadı
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Aşağıdaki bağlantılardan
          devam edebilirsiniz.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-7 py-3.5 bg-sage-600 text-white rounded-lg text-sm font-medium transition-all hover:bg-sage-700 hover:-translate-y-0.5"
          >
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center px-7 py-3.5 border border-sage-300 text-forest-900 rounded-lg text-sm font-medium transition-colors hover:bg-sage-50"
          >
            Blog
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex items-center px-7 py-3.5 border border-sage-300 text-forest-900 rounded-lg text-sm font-medium transition-colors hover:bg-sage-50"
          >
            İletişim
          </Link>
        </div>
      </div>
    </section>
  )
}
