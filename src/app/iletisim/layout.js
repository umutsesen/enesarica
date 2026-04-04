export const metadata = {
  title: "İletişim ve Randevu | Fzt. Enes Arıca",
  description:
    "Fzt. Enes Arıca ile iletişime geçin ve randevu alın. Yalova, İstanbul ve İzmir şubelerimizden size en uygun lokasyonu seçin.",
  alternates: {
    canonical: "https://www.fizyoterapistenesarica.com/iletisim",
  },
  openGraph: {
    title: "İletişim ve Randevu | Fzt. Enes Arıca",
    description:
      "Fzt. Enes Arıca ile iletişime geçin ve randevu alın.",
    url: "https://www.fizyoterapistenesarica.com/iletisim",
    images: [{ url: "https://www.fizyoterapistenesarica.com/imgs/enes-arica.jpeg", width: 2048, height: 1368, alt: "Fzt. Enes Arıca - İletişim" }],
  },
};

export default function IletisimLayout({ children }) {
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
              { "@type": "ListItem", "position": 2, "name": "İletişim", "item": "https://www.fizyoterapistenesarica.com/iletisim" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
