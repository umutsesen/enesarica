import Image from 'next/image';
import Link from 'next/link';
import { OPENING_HOURS } from '@/lib/site';

export default function Hero() {
  return (
    <section className="home-hero" aria-labelledby="hero-heading">
      <div className="editorial-shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Yalova Merkez · Çalışma yaklaşımı</p>
          <h1 id="hero-heading"><span>Fizyoterapist</span>{' '}Enes Arıca</h1>
        </div>
        <figure className="hero-portrait">
          <div className="portrait-frame"><Image src="/imgs/enes-arica.webp" alt="Fizyoterapist Enes Arıca" fill priority sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 899px) 340px, (max-width: 1239px) 38vw, 440px" className="object-cover object-top" /></div>
          <figcaption><span>Fzt. Enes Arıca</span><span>Yalova</span></figcaption>
        </figure>
        <div className="hero-information">
          <p className="hero-intro">Çalışma yaklaşımım, ilk görüşmeye hazırlık ve hareket sağlığı üzerine rehberler.</p>
          <p className="hero-note">Fizyoterapi uygulamaları, hekim tanısı ve yönlendirmesi doğrultusunda bireysel değerlendirmeyle planlanır.</p>
          <div className="hero-actions">
            <Link href="/iletisim" className="editorial-button">İletişim ve yol tarifi <span aria-hidden="true">↗</span></Link>
            <Link href="/hakkimda" className="editorial-link">Enes Arıca hakkında <span aria-hidden="true">→</span></Link>
            <a href="#ziyaret-bilgileri" className="editorial-link">İlk görüşmeye hazırlık <span aria-hidden="true">↓</span></a>
          </div>
          <dl className="hero-details">
            <div><dt>Telefon</dt><dd><a href="tel:+905546621245">+90 554 662 12 45</a></dd></div>
            <div><dt>Çalışma saatleri</dt><dd>{OPENING_HOURS}</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
