import Link from 'next/link';
import branches from '@/data/branches';
import { OPENING_HOURS } from '@/lib/site';

export default function HomeContact() {
  const location = branches[0];
  return (
    <section className="py-16 md:py-24 bg-sand-50" aria-labelledby="iletisim-baslik">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div>
          <p className="text-sm font-medium text-sage-700 mb-3">Yalova Merkez</p>
          <h2 id="iletisim-baslik" className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900">İletişim bilgileri</h2>
          <p className="mt-5 text-gray-600 leading-relaxed max-w-lg">Çalışma saatleri, ulaşım ve randevu süreciyle ilgili sorularınız için aşağıdaki kanalları kullanabilirsiniz.</p>
          <address className="mt-7 not-italic text-gray-700 leading-relaxed space-y-4">
            <p>{location.address}</p>
            <p>{OPENING_HOURS}</p>
            <p><a href={'tel:' + location.phone} className="text-forest-900 font-medium underline underline-offset-4">+90 554 662 12 45</a></p>
            <p><a href="mailto:fizyones77@gmail.com" className="underline underline-offset-4">fizyones77@gmail.com</a></p>
          </address>
          <Link href="/iletisim" className="mt-7 inline-block text-sage-700 font-medium underline underline-offset-4">Ulaşım ve iletişim sayfası →</Link>
        </div>
      </div>
    </section>
  );
}
