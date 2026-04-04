export const metadata = {
  title: "Hasta Deneyimleri | Fzt. Enes Arıca",
  description:
    "Hastalarımızın tedavi deneyimleri ve geri bildirimleri. Tedavi süreçleriyle hayat kalitelerini artıran hastaların hikayeleri.",
  alternates: {
    canonical: "https://www.fizyoterapistenesarica.com/hasta-deneyimleri",
  },
  openGraph: {
    title: "Hasta Deneyimleri | Fzt. Enes Arıca",
    description:
      "Hastalarımızın tedavi deneyimleri ve geri bildirimleri.",
    url: "https://www.fizyoterapistenesarica.com/hasta-deneyimleri",
    images: [{ url: "https://www.fizyoterapistenesarica.com/imgs/enes-arica.jpeg", width: 2048, height: 1368, alt: "Fzt. Enes Arıca - Hasta Deneyimleri" }],
  },
};

export default function HastaDeneyimleriLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.fizyoterapistenesarica.com" },
              { "@type": "ListItem", "position": 2, "name": "Hasta Deneyimleri", "item": "https://www.fizyoterapistenesarica.com/hasta-deneyimleri" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
