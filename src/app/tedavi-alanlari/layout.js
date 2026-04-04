export const metadata = {
  title: "Tedavi Alanları | Fzt. Enes Arıca",
  description:
    "Bel fıtığı, boyun fıtığı, skolyoz, GTOS terapi, manuel terapi ve daha fazlası. Uzman fizyoterapist Enes Arıca ile tedavi alanlarını keşfedin.",
  alternates: {
    canonical: "https://www.fizyoterapistenesarica.com/tedavi-alanlari",
  },
  openGraph: {
    title: "Tedavi Alanları | Fzt. Enes Arıca",
    description:
      "Bel fıtığı, boyun fıtığı, skolyoz, GTOS terapi, manuel terapi ve daha fazlası.",
    url: "https://www.fizyoterapistenesarica.com/tedavi-alanlari",
    images: [{ url: "https://www.fizyoterapistenesarica.com/imgs/enes-arica.jpeg", width: 2048, height: 1368, alt: "Fzt. Enes Arıca - Tedavi Alanları" }],
  },
};

export default function TedaviAlanlariLayout({ children }) {
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
              { "@type": "ListItem", "position": 2, "name": "Tedavi Alanları", "item": "https://www.fizyoterapistenesarica.com/tedavi-alanlari" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
