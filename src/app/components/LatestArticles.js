import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'

function formatDate(date) {
  return new Date(date).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function LatestArticles() {
  const posts = getAllPosts('blog').slice(0, 4)

  if (posts.length === 0) return null

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-sand-200 bg-white p-6 transition-all duration-300 hover:border-sage-300 hover:shadow-lg"
            >
              {post.category && (
                <p className="text-xs uppercase tracking-wider text-sage-600 font-medium mb-3">
                  {post.category}
                </p>
              )}
              <h3 className="text-lg font-semibold text-forest-900 leading-snug mb-3 group-hover:text-sage-700 transition-colors line-clamp-2">
                {post.title}
              </h3>
              {post.description && (
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                  {post.description}
                </p>
              )}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-sand-100">
                <time className="text-xs text-gray-400" dateTime={post.date}>
                  {post.date && formatDate(post.date)}
                </time>
                <span className="text-sm font-medium text-forest-900 group-hover:text-sage-600 transition-colors">
                  Oku →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
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
