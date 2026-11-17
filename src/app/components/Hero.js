import Image from 'next/image';
import Link from 'next/link';
import { OPENING_HOURS } from '@/lib/site';

export default function Hero() {
  return (
    <section className="home-hero" aria-labelledby="hero-heading">
      <div className="editorial-shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Yalova Merkez · Fizyoterapi ve rehabilitasyon</p>
          <h1 id="hero-heading"><span>Fizyoterapist</span>Enes Arıca</h1>
          <p className="hero-intro">Hekim yönlendirmesi ve fizyoterapist değerlendirmesi doğrultusunda planlanan fizyoterapi ve rehabilitasyon programları.</p>
          <p className="hero-note">Bu sitede çalışma yaklaşımımı ve hareket sağlığına ilişkin genel bilgileri bulabilirsiniz.</p>
          <div className="hero-actions">
            <Link href="/iletisim" className="editorial-button">İletişim ve yol tarifi <span aria-hidden="true">↗</span></Link>
            <Link href="/hakkimda" className="editorial-link">Beni tanıyın <span aria-hidden="true">→</span></Link>
          </div>
          <dl className="hero-details">
            <div><dt>Telefon</dt><dd><a href="tel:+905546621245">+90 554 662 12 45</a></dd></div>
            <div><dt>Çalışma saatleri</dt><dd>{OPENING_HOURS}</dd></div>
          </dl>
        </div>
        <figure className="hero-portrait">
          <div className="portrait-frame"><Image src="/imgs/enes-arica.webp" alt="Fizyoterapist Enes Arıca" fill priority sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 899px) 340px, (max-width: 1239px) 38vw, 440px" className="object-cover object-top" /></div>
          <figcaption><span>Fzt. Enes Arıca</span><span>Yalova</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
