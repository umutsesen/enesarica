import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

function formatDate(date) {
  return new Date(date).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts('blog');
  const [featured, ...rest] = posts;

  return (
    <main className="pt-20">
      {/* Hero — Light */}
      <div className="bg-sand-50 py-24 md:py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Yazılar
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-forest-900">
            Blog
          </h1>
        </div>
      </div>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500">
              Henüz blog yazısı bulunmamaktadır.
            </p>
          ) : (
            <>
              {/* Featured post */}
              {featured && (
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group block mb-16 pb-16 border-b border-gray-100"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      {featured.category && (
                        <span className="text-sage-600 text-xs font-medium tracking-widest uppercase">
                          {featured.category}
                        </span>
                      )}
                      <h2 className="text-3xl md:text-4xl font-semibold text-forest-900 group-hover:text-sage-600 transition-colors mt-3 mb-4">
                        {featured.title}
                      </h2>
                      {featured.description && (
                        <p className="text-gray-600 leading-relaxed line-clamp-3 mb-6">
                          {featured.description}
                        </p>
                      )}
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                        <span>&middot;</span>
                        <span>{featured.readingTime} dk okuma</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Rest as compact list */}
              {rest.length > 0 && (
                <div className="space-y-0 divide-y divide-gray-100">
                  {rest.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col md:flex-row md:items-center justify-between gap-3 py-6"
                    >
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-medium text-forest-900 group-hover:text-sage-600 transition-colors truncate">
                          {post.title}
                        </h3>
                        {post.category && (
                          <span className="text-xs text-gray-400 uppercase tracking-wider">
                            {post.category}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-400 shrink-0">
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        <span>&middot;</span>
                        <span>{post.readingTime} dk</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
