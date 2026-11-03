import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata({
  title: 'Hakkımda | Fizyoterapist Enes Arıca',
  description: 'Fizyoterapist Enes Arıca hakkında: eğitim, çalışma yaklaşımı ve Yalova Merkez’deki fizyoterapi ve rehabilitasyon sürecine ilişkin bilgiler.',
  path: '/hakkimda',
});

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
