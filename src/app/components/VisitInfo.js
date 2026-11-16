import Link from 'next/link';
import branches from '@/data/branches';

export default function VisitInfo({ showDirectionsLink = true }) {
  return (
    <section id="ziyaret-bilgileri" className="scroll-mt-24 py-14 md:py-20 bg-sand-50" aria-labelledby="ziyaret-baslik">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-sm font-medium text-sage-700 mb-3">Fzt. Enes Arıca · Yalova Merkez</p>
        <h2 id="ziyaret-baslik" className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900">İlk görüşmeye hazırlık</h2>
        <div className="mt-6 max-w-2xl space-y-4 text-gray-600 leading-relaxed">
          <p>Görüşme saatini ve ulaşım bilgilerini önceden telefonla teyit edebilirsiniz. Randevu günü ve saati görüşülerek belirlenir.</p>
          <p>Varsa ilgili belgelerinizi ve sormak istediğiniz soruları hazırlayabilirsiniz. İlk iletişimde sağlık belgesi veya ayrıntılı sağlık bilgisi göndermeyin; belgelerle ilgili sorularınızı telefonla iletebilirsiniz.</p>
        </div>
        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4 font-medium">
          <a href={'tel:' + branches[0].phone} className="text-forest-900 underline underline-offset-4">+90 554 662 12 45</a>
          {showDirectionsLink && <Link href="/iletisim" className="text-sage-700 underline underline-offset-4">İletişim ve yol tarifi</Link>}
          <Link href="/sss" className="text-sage-700 underline underline-offset-4">Sık sorulan sorular</Link>
          <Link href="/blog/yalova-fizyoterapi-rehberi" className="text-sage-700 underline underline-offset-4">Enes Arıca’nın hazırlık rehberi</Link>
        </div>
      </div>
    </section>
  );
}
