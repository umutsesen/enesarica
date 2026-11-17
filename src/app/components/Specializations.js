import Link from 'next/link';
import { treatments } from '@/data/treatments';

export default function Specializations() {
  return (
    <section className="editorial-section" aria-labelledby="alanlar-baslik">
      <div className="editorial-shell">
        <div className="editorial-heading"><div><p className="eyebrow">Çalışma alanları</p><h2 id="alanlar-baslik">Fizyoterapiye dair<br />konu başlıkları.</h2></div><Link href="/calisma-alanlari" className="editorial-link">Tüm çalışma alanları <span aria-hidden="true">↗</span></Link></div>
        <div className="clinical-list">{treatments.slice(0, 8).map((item) => <Link key={item.slug} href={`/calisma-alanlari/${item.slug}`}><h3>{item.title}</h3><span aria-hidden="true">↗</span></Link>)}</div>
      </div>
    </section>
  );
}
