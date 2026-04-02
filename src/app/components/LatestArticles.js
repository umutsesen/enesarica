import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/mdx'

const blogImages = {
  'evde-bel-egzersizleri': '/imgs/blog/bel-fitigi.webp',
  'bel-fitigi': '/imgs/blog/bel-fitigi.webp',
  'boyun-duztesmesi': '/imgs/blog/boyun-fitigi.webp',
  'boyun-fitigi': '/imgs/blog/boyun-fitigi.webp',
  'skolyoz': '/imgs/blog/skolyoz.webp',
  'gtos-terapi': '/imgs/blog/gtos-terapi.webp',
  'klinik-pilates': '/imgs/blog/klinik-pilates.webp',
  'kuru-igneleme': '/imgs/blog/gtos-terapi.webp',
  'reformer-pilates': '/imgs/blog/klinik-pilates.webp',
  'diz-agrilari': '/imgs/blog/diz-agrilari.webp',
}

export default function LatestArticles() {
  const posts = getAllPosts('blog').slice(0, 4)

  if (posts.length === 0) return null

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm uppercase tracking-wider text-sage-600 font-medium mb-3">Blog</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-forest-900">
              Son Yazılar
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
          {posts.map((post) => {
            const image = blogImages[post.slug]
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-sand-200 bg-white overflow-hidden transition-all duration-300 hover:border-sage-300 hover:shadow-lg"
              >
                {image && (
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                )}
                <div className="p-5">
                  {post.category && (
                    <p className="text-xs uppercase tracking-wider text-sage-600 font-medium mb-2">
                      {post.category}
                    </p>
                  )}
                  <h3 className="text-base font-semibold text-forest-900 leading-snug group-hover:text-sage-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </Link>
            )
          })}
        </div>

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
