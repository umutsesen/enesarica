import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata({
  title: 'Çalışma Alanları | Fzt. Enes Arıca',
  description: 'Fizyoterapi ve rehabilitasyon çalışma alanları hakkında genel bilgiler. Hekim yönlendirmesi, değerlendirme ve uygulama süreçlerine ilişkin konu rehberleri.',
  path: '/calisma-alanlari',
});

export default function CalismaAlanlariLayout({ children }) {
  return children;
}
