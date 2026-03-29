import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'

const quickLabels = ['Editör seçimi', 'Yeni yazı', 'Hızlı okuma']

function formatDate(date) {
  return new Date(date).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default function LatestArticles() {
  const posts = getAllPosts('blog').slice(0, 4)

  if (posts.length === 0) return null

  const [featured, ...rest] = posts

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-x-0 top-12 -z-10 mx-auto h-72 max-w-6xl rounded-full bg-sage-200/30 blur-3xl" />
      <div className="absolute right-0 top-24 -z-10 h-64 w-64 rounded-full bg-sand-200/70 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-sage-200/80 bg-gradient-to-br from-white via-sand-50 to-sage-50/80 p-8 shadow-[0_30px_100px_rgba(21,44,31,0.08)] md:p-10 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(107,143,113,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(213,224,215,0.7),_transparent_26%)]" />
          <div className="absolute right-8 top-8 hidden h-28 w-28 rounded-full border border-white/70 bg-white/30 lg:block" />

          <div className="relative mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-sage-200 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sage-700 backdrop-blur">
                <span>Blog</span>
                <span className="h-1.5 w-1.5 rounded-full bg-sage-500" />
                <span>Yeni İçerikler</span>
              </div>

              <div className="flex flex-wrap items-end gap-x-6 gap-y-3">
                <h2 className="text-3xl font-semibold tracking-tight text-forest-900 md:text-5xl">
                  Son Yazılar
                </h2>
                <p className="max-w-md text-sm leading-6 text-gray-500 md:text-base">
                  Uzun bloklar yerine hızlı taranan, dikkat çeken son içerikler.
                </p>
              </div>
            </div>

            <Link
              href="/blog"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-forest-900/10 bg-forest-900 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage-700"
            >
              Tümünü Gör
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </Link>
          </div>

          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] lg:items-stretch">
            <Link
              href={`/blog/${featured.slug}`}
              className="group relative overflow-hidden rounded-[2rem] bg-forest-900 p-8 text-white shadow-[0_24px_80px_rgba(21,44,31,0.28)] transition-transform duration-300 hover:-translate-y-1 md:p-10"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),_transparent_26%),linear-gradient(135deg,_rgba(107,143,113,0.18),_transparent_45%)]" />
              <div className="absolute -right-10 top-10 h-32 w-32 rounded-full border border-white/10" />
              <div className="absolute bottom-6 right-6 text-7xl font-semibold leading-none text-white/5 md:text-8xl">
                01
              </div>

              <div className="relative flex h-full flex-col">
                <div className="mb-8 flex flex-wrap items-center gap-3">
                  {featured.category && (
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-sage-100">
                      {featured.category}
                    </span>
                  )}
                  <span className="text-xs uppercase tracking-[0.28em] text-white/50">
                    Öne Çıkan
                  </span>
                </div>

                <h3 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-[2.5rem]">
                  {featured.title}
                </h3>

                {featured.description && (
                  <p className="mt-5 max-w-lg text-base leading-7 text-white/72 md:text-lg">
                    {featured.description}
                  </p>
                )}

                {featured.tags?.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {featured.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-black/10 px-3 py-1 text-xs text-white/72"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex flex-wrap gap-3 text-sm text-white/70">
                    {featured.date && (
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                        {formatDate(featured.date)}
                      </span>
                    )}
                    {featured.readingTime && (
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                        {featured.readingTime} dk okuma
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-medium text-sage-100 transition-transform duration-300 group-hover:translate-x-1">
                    Yazıyı oku
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            <div className="grid gap-4">
              {rest.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/90 p-6 shadow-[0_18px_60px_rgba(21,44,31,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-sage-200 hover:shadow-[0_22px_70px_rgba(21,44,31,0.12)]"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-sage-300 via-sage-500 to-forest-800 opacity-80" />

                  <div className="relative flex h-full flex-col">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-semibold tracking-tight text-forest-900/18">
                          0{index + 2}
                        </span>
                        {post.category && (
                          <span className="rounded-full bg-sand-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sage-700">
                            {post.category}
                          </span>
                        )}
                      </div>

                      <span className="rounded-full border border-sage-100 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-gray-400">
                        {quickLabels[index] || 'Okumalık'}
                      </span>
                    </div>

                    <h3 className="max-w-md text-xl font-semibold leading-snug text-forest-900 transition-colors duration-300 group-hover:text-sage-700">
                      {post.title}
                    </h3>

                    <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-400">
                      {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
                      {post.readingTime && (
                        <>
                          <span className="h-1 w-1 rounded-full bg-gray-300" />
                          <span>{post.readingTime} dk</span>
                        </>
                      )}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-sand-200 pt-4 text-sm">
                      <span className="text-gray-500">Kısa rehber ve net cevaplar</span>
                      <span className="inline-flex items-center gap-2 font-medium text-forest-900 transition-transform duration-300 group-hover:translate-x-1">
                        İncele
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
