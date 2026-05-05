export const metadata = {
  title: "Hakkımda | Fizyoterapist Enes Arıca",
  description:
    "Yalova Fizyoterapi kurucusu Fzt. Enes Arıca hakkında. GTOS terapi, Schroth metodu ve manuel terapi alanlarında fizyoterapist.",
  alternates: {
    canonical: "https://www.fizyoterapistenesarica.com/hakkimda",
  },
  openGraph: {
    title: "Hakkımda | Fizyoterapist Enes Arıca",
    description:
      "Yalova Fizyoterapi kurucusu Fzt. Enes Arıca hakkında. GTOS terapi, Schroth metodu ve manuel terapi alanlarında fizyoterapist.",
    url: "https://www.fizyoterapistenesarica.com/hakkimda",
    images: [{ url: "https://www.fizyoterapistenesarica.com/imgs/enes-arica.webp", width: 2048, height: 1368, alt: "Fizyoterapist Enes Arıca" }],
  },
};

export default function HakkimdaLayout({ children }) {
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
              { "@type": "ListItem", "position": 2, "name": "Hakkımda", "item": "https://www.fizyoterapistenesarica.com/hakkimda" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
