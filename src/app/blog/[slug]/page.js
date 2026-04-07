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
      canonical: `https://www.fizyoterapistenesarica.com/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | Fzt. Enes Arıca Blog`,
      description: post.description,
      url: `https://www.fizyoterapistenesarica.com/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updatedDate || post.date,
      authors: ['https://www.fizyoterapistenesarica.com/hakkimda'],
      images: [{
        url: 'https://www.fizyoterapistenesarica.com/imgs/enes-arica.jpeg',
        width: 1200,
        height: 630,
        alt: post.title,
      }],
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
  const currentTags = new Set((post.tags || []).map((t) => t.toLowerCase()));
  const related = allPosts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const tagOverlap = (p.tags || [])
        .map((t) => t.toLowerCase())
        .filter((t) => currentTags.has(t)).length;
      const categoryMatch = p.category && p.category === post.category ? 1 : 0;
      return { ...p, _score: tagOverlap * 2 + categoryMatch };
    })
    .sort((a, b) => {
      if (b._score !== a._score) return b._score - a._score;
      return new Date(b.date) - new Date(a.date);
    })
    .slice(0, 4);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Person",
      "name": "Fzt. Enes Arıca",
      "jobTitle": "Uzman Fizyoterapist",
      "url": "https://www.fizyoterapistenesarica.com/hakkimda",
      "image": "https://www.fizyoterapistenesarica.com/imgs/enes-arica.jpeg",
      "sameAs": [
        "https://www.fizyoterapistenesarica.com",
        "https://www.instagram.com/yalovafizyoterapist"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Yalova Fizyoterapi",
        "url": "https://www.yalovafizyoterapist.com"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Yalova Fizyoterapi",
      "url": "https://www.yalovafizyoterapist.com",
    },
    "datePublished": post.date,
    "dateModified": post.updatedDate || post.date,
    "mainEntityOfPage": `https://www.fizyoterapistenesarica.com/blog/${slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.fizyoterapistenesarica.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.fizyoterapistenesarica.com/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.fizyoterapistenesarica.com/blog/${slug}` },
    ],
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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

          <div className="mt-12 rounded-2xl p-8 bg-forest-900 text-center">
            <h3 className="text-xl font-semibold text-white mb-2">
              Bu konuda detaylı değerlendirme ister misiniz?
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Uzman fizyoterapist Enes Arıca ile ücretsiz ön değerlendirme için randevu alın.
            </p>
            <Link
              href="/iletisim"
              className="inline-block bg-sage-600 text-white text-sm font-medium px-8 py-3 rounded-lg hover:bg-sage-700 transition-colors"
            >
              Randevu Al
            </Link>
          </div>

          <div className="mt-8 rounded-2xl p-8 border border-gray-100">
            <h3 className="font-semibold text-forest-900">Fzt. Enes Arıca</h3>
            <p className="text-gray-600 text-sm mt-2">
              Yalova Fizyoterapi kurucusu, uzman fizyoterapist. GTOS terapi, Schroth
              metodu ve manuel terapi alanlarında uzmanlaşmıştır.
            </p>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <span className="text-sage-600 text-xs font-medium tracking-widest uppercase">
                Devamını Oku
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-forest-900 mt-2 mb-8">
                İlgili Yazılar
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group rounded-2xl p-6 border border-gray-100 hover:border-sage-600/30 hover:shadow-sm transition-all"
                  >
                    {r.category && (
                      <span className="text-xs font-medium text-sage-600 uppercase tracking-wider">
                        {r.category}
                      </span>
                    )}
                    <h3 className="font-semibold text-forest-900 group-hover:text-sage-600 transition-colors mt-2 leading-snug">
                      {r.title}
                    </h3>
                    {r.description && (
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {r.description}
                      </p>
                    )}
                    <time className="text-xs text-gray-400 mt-3 block">
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
