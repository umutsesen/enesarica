import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/mdx'

const featuredPosts = [
  {
    slug: 'bel-fitigi-egzersizleri',
    title: 'Bel Fıtığında Egzersizler: Evde Yapılabilecek 10 Hareket',
    category: 'Egzersiz',
    image: '/imgs/blog/bel-fitigi.webp',
  },
  {
    slug: 'boyun-duzlesmesi',
    title: 'Boyun Düzleşmesi Nedir? Belirtileri ve Tedavi Yöntemleri',
    category: 'Tedavi',
    image: '/imgs/blog/boyun-fitigi.webp',
  },
  {
    slug: 'skolyoz-nedir-belirtileri-nelerdir',
    title: 'Skolyoz Nedir? Belirtileri ve Tedavi Seçenekleri',
    category: 'Tedavi',
    image: '/imgs/blog/skolyoz.webp',
  },
  {
    slug: 'siyatik-agrisi-evde-tedavi',
    title: 'Siyatik Ağrısı: Belirtileri ve Evde Tedavi Yöntemleri',
    category: 'Rehber',
    image: '/imgs/blog/diz-agrilari.webp',
  },
]

export default function LatestArticles() {
  const featuredSlugs = new Set(featuredPosts.map((p) => p.slug))
  const allPosts = getAllPosts('blog')
  const remainingPosts = allPosts.filter((p) => !featuredSlugs.has(p.slug))

  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm uppercase tracking-wider text-sage-600 font-medium mb-2">Blog</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-forest-900">
              Tedavi Rehberleri
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-forest-900 hover:text-sage-600 transition-colors"
          >
            Tümünü gör
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-sand-200 bg-white overflow-hidden transition-all duration-300 hover:border-sage-300 hover:shadow-lg"
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <p className="text-xs uppercase tracking-wider text-sage-600 font-medium mb-1.5">
                  {post.category}
                </p>
                <h3 className="text-sm font-semibold text-forest-900 leading-snug group-hover:text-sage-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {remainingPosts.length > 0 && (
          <div className="mt-12 pt-10 border-t border-sand-200">
            <p className="text-xs uppercase tracking-wider text-sage-600 font-medium mb-5 text-center">
              Tüm Rehberler
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2.5">
              {remainingPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm text-forest-700 hover:text-sage-600 transition-colors line-clamp-1"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-forest-900 hover:text-sage-600 transition-colors"
          >
            Tüm yazıları gör →
          </Link>
        </div>
      </div>
    </section>
  )
}
