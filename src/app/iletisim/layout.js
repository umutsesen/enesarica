import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata({
  title: 'İletişim ve Randevu Bilgileri | Fzt. Enes Arıca',
  description: 'Fizyoterapist Enes Arıca’nın Yalova Merkez adresi, çalışma saatleri, telefon ve e-posta bilgileri. Ulaşım bilgileri.',
  path: '/iletisim',
});

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
