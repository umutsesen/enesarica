import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getAllBlogPosts, compileContent } from "@/lib/mdx";

function formatDate(date) {
  return new Date(date).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return { title: "Yazı Bulunamadı | Fzt. Enes Arıca" };
  }
  return {
    title: `${post.title} | Fzt. Enes Arıca Blog`,
    description: post.description,
    alternates: {
      canonical: `https://www.enesarica.com/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | Fzt. Enes Arıca Blog`,
      description: post.description,
      url: `https://www.enesarica.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const html = await compileContent(post.content);

  const allPosts = getAllBlogPosts();
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div>
      <div className="bg-forest-900 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {post.category && (
            <span className="text-sage-500 text-sm font-medium tracking-widest uppercase">
              {post.category}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-400">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>&middot;</span>
            <span>{post.readingTime} dk okuma</span>
            {post.author && (
              <>
                <span>&middot;</span>
                <span>{post.author}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article
            className="prose prose-lg max-w-none text-gray-600"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-12 rounded-2xl p-8 border border-gray-100">
            <h3 className="font-semibold text-forest-900">Fzt. Enes Arıca</h3>
            <p className="text-gray-600 text-sm mt-2">
              Fizyones kurucusu, uzman fizyoterapist. GTOS terapi, Schroth
              metodu ve manuel terapi alanlarında uzmanlaşmıştır.
            </p>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-forest-900 mb-8">
                Diğer Yazılar
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group rounded-2xl p-8 border border-gray-100 hover:border-sage-600/30 transition-colors"
                  >
                    <h3 className="font-semibold text-forest-900 group-hover:text-sage-600 transition-colors">
                      {r.title}
                    </h3>
                    <time className="text-sm text-gray-400 mt-2 block">
                      {formatDate(r.date)}
                    </time>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
