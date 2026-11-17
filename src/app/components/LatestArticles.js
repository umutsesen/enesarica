import Image from 'next/image';
import Link from 'next/link';

const topics = [
  { label: 'Pilates', title: 'Klinik pilates ve reformer pilates farkı', text: 'Klinik yaklaşımın mat ve reformer egzersizleriyle nasıl ilişkilendirildiği.', href: '/blog/reformer-klinik-pilates-farklari' },
  { label: 'Boyun ağrısı', title: 'Masa başında hareket', text: 'Ofiste boyun ağrısı, ergonomi ve hareket molaları üzerine.', href: '/blog/ofiste-boyun-agrisi' },
  { label: 'Spor ve aktiviteye dönüş', title: 'Spora dönüşü anlamak', text: 'Spor yaralanmalarında değerlendirme ve spora dönüş kriterleri.', href: '/calisma-alanlari/spor-yaralanmalari' },
];

export default function LatestArticles() {
  return (
    <section className="topic-section" aria-labelledby="rehberler-baslik">
      <div className="editorial-shell">
        <div className="editorial-heading"><div><p className="eyebrow">Hareket üzerine okumalar</p><h2 id="rehberler-baslik">Gündelik hayattan<br className="hidden sm:block" /> hareketin içine.</h2></div><Link href="/blog" className="editorial-link">Tüm rehberler <span aria-hidden="true">↗</span></Link></div>
        <div className="topic-layout">
          <figure className="equipment-figure">
            <div className="equipment-frame"><Image src="/editorial/sports-equipment.webp" alt="Dambıllar ve köpük rulo ile hazırlanmış temsili egzersiz ekipmanı kompozisyonu" fill sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1239px) 42vw, 500px" className="object-cover" /></div>
            <figcaption>Yapay zekâ ile üretilmiş temsili ekipman görseli.</figcaption>
          </figure>
          <div className="topic-list">{topics.map((topic) => <article key={topic.href}><Link href={topic.href} className="topic-link"><div><p className="eyebrow">{topic.label}</p><h3>{topic.title}</h3><p className="topic-description">{topic.text}</p></div><span className="topic-arrow" aria-hidden="true">↗</span></Link></article>)}</div>
        </div>
        <p className="editorial-disclaimer">Bu içerikler genel bilgilendirme amaçlıdır; hekim değerlendirmesinin yerine geçmez.</p>
      </div>
    </section>
  );
}
