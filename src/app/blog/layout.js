import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata({
  title: 'Fizyoterapi Rehberleri | Fzt. Enes Arıca',
  description: 'Fizyoterapi, hareket sağlığı ve egzersiz hakkında genel bilgilendirme yazıları. Konulara göre rehberleri inceleyin.',
  path: '/blog',
});

export default function BlogLayout({ children }) {
  return children;
}
