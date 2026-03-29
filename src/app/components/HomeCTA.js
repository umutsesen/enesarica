import Link from 'next/link'

export default function HomeCTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 p-12 md:p-16 text-center">
          <p className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            İlk Adım
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900 mb-4">
            Ağrısız Bir Yaşam İçin
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
            Durumunuza özel bir değerlendirme yapmak ve size en uygun tedavi planını oluşturmak için iletişime geçin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center px-8 py-4 bg-sage-600 text-white rounded-lg text-base font-medium transition-colors hover:bg-sage-700"
            >
              Randevu Al
            </Link>
            <a
              href="tel:+905446621245"
              className="inline-flex items-center px-8 py-4 border border-gray-200 text-forest-900 rounded-lg text-base font-medium transition-colors hover:bg-gray-50"
            >
              +90 544 662 12 45
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
