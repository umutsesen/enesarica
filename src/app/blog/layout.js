import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata({
  title: 'Fizyoterapi Rehberleri | Fzt. Enes Arıca',
  description: 'Fzt. Enes Arıca’nın fizyoterapi görüşmesine hazırlık, seans süreci ve hareket sağlığı üzerine bilgilendirme yazıları.',
  path: '/blog',
});

export default function BlogLayout({ children }) {
  return children;
}
