import { notFound } from "next/navigation";
import Link from "next/link";
import { getTreatmentPost, getAllTreatmentPosts, compileContent } from "@/lib/mdx";
import treatments from "@/data/treatments";

export async function generateStaticParams() {
  return getAllTreatmentPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getTreatmentPost(slug);
  if (!post) {
    return { title: "Tedavi Bulunamadı | Fzt. Enes Arıca" };
  }
  return {
    title: `${post.title} | Fzt. Enes Arıca`,
    description: post.description,
    alternates: {
      canonical: `https://www.enesarica.com/tedavi-alanlari/${slug}`,
    },
    openGraph: {
      title: `${post.title} | Fzt. Enes Arıca`,
      description: post.description,
      url: `https://www.enesarica.com/tedavi-alanlari/${slug}`,
    },
  };
}

export default async function TreatmentPage({ params }) {
  const { slug } = await params;
  const post = getTreatmentPost(slug);

  if (!post) {
    notFound();
  }

  const htmlContent = await compileContent(post.content);
  const currentTreatment = treatments.find((t) => t.slug === slug);
  const relatedSlugs = currentTreatment?.relatedTreatments || [];
  const related = relatedSlugs.length > 0
    ? relatedSlugs.map((s) => treatments.find((t) => t.slug === s)).filter(Boolean)
    : treatments.filter((t) => t.slug !== slug).slice(0, 3);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.enesarica.com" },
      { "@type": "ListItem", "position": 2, "name": "Tedavi Alanları", "item": "https://www.enesarica.com/tedavi-alanlari" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.enesarica.com/tedavi-alanlari/${slug}` },
    ],
  };

  const faqSchema = post.faqItems && post.faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqItems.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  } : null;

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <div className="bg-forest-900 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sage-500 text-sm font-medium tracking-widest uppercase mb-4">
            Tedavi Alanları
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex items-center text-sm text-gray-500 gap-2">
          <li><Link href="/" className="hover:text-sage-600 transition-colors">Ana Sayfa</Link></li>
          <li>/</li>
          <li><Link href="/tedavi-alanlari" className="hover:text-sage-600 transition-colors">Tedavi Alanları</Link></li>
          <li>/</li>
          <li className="text-forest-900 font-medium truncate">{post.title}</li>
        </ol>
      </nav>

      <div className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose prose-lg max-w-none text-gray-600">
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

              {post.faqItems && post.faqItems.length > 0 && (
                <div className="mt-16 not-prose">
                  <h2 className="text-2xl font-semibold text-forest-900 mb-8">
                    Sık Sorulan Sorular
                  </h2>
                  <div className="space-y-4">
                    {post.faqItems.map((faq, i) => (
                      <div
                        key={i}
                        className="rounded-2xl p-8 border border-gray-100"
                      >
                        <h3 className="font-semibold text-forest-900">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 mt-2">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>

            <aside className="space-y-8">
              <div className="rounded-2xl p-8 border border-gray-100 bg-forest-900 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Randevu Alın
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  Uzman fizyoterapist ile tedavi sürecinizi başlatın.
                </p>
                <Link
                  href="/iletisim"
                  className="inline-block w-full bg-sage-600 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-sage-700 transition-colors"
                >
                  Randevu Al
                </Link>
              </div>

              <div className="rounded-2xl p-8 border border-gray-100">
                <h3 className="text-lg font-semibold text-forest-900 mb-6">
                  Diğer Tedaviler
                </h3>
                <div className="space-y-3">
                  {related.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/tedavi-alanlari/${t.slug}`}
                      className="block text-sm text-gray-600 hover:text-sage-600 transition-colors py-1"
                    >
                      {t.title}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
