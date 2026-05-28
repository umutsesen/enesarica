export const metadata = {
  title: "Deneyiminizi Paylaşın | Fzt. Enes Arıca",
  description:
    "Tedavi sürecinizle ilgili görüşlerinizi Google üzerinden değerlendirerek paylaşabilirsiniz.",
  alternates: {
    canonical: "https://www.fizyoterapistenesarica.com/hasta-deneyimleri",
  },
  openGraph: {
    title: "Deneyiminizi Paylaşın | Fzt. Enes Arıca",
    description:
      "Tedavi sürecinizle ilgili görüşlerinizi Google üzerinden değerlendirebilirsiniz.",
    url: "https://www.fizyoterapistenesarica.com/hasta-deneyimleri",
    images: [{ url: "https://www.fizyoterapistenesarica.com/imgs/enes-arica.webp", width: 2048, height: 1368, alt: "Fzt. Enes Arıca" }],
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
