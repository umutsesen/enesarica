import branches from '@/data/branches';
import { OPENING_HOURS } from '@/lib/site';
import VisitInfo from '@/app/components/VisitInfo';

export default function IletisimPage() {
  const location = branches[0];
  const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=' + location.coordinates.lat + ',' + location.coordinates.lng;
  return (
    <div className="pt-20">
      <header className="bg-sand-50 py-14 md:py-20 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sage-700 text-sm font-medium mb-4">Fzt. Enes Arıca · Yalova Merkez</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-forest-900">İletişim ve randevu bilgileri</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">Adres, çalışma saatleri ve iletişim kanalları. Hastalık durumlarında fizyoterapi uygulamaları hekim tanısı ve yönlendirmesi doğrultusunda planlanır.</p>
        </div>
      </header>
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-2xl border border-sand-200 bg-sand-50 p-6 sm:p-8 self-start">
            <h2 className="text-2xl font-semibold tracking-tight text-forest-900">{location.name}</h2>
            <address className="mt-6 not-italic space-y-5 leading-relaxed text-gray-700">
              <p>{location.address}</p>
              <p>{OPENING_HOURS}</p>
              <p><a href={'tel:' + location.phone} className="text-forest-900 font-medium underline underline-offset-4">+90 554 662 12 45</a></p>
              <p><a href="mailto:fizyones77@gmail.com" className="underline underline-offset-4">fizyones77@gmail.com</a></p>
            </address>
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-block text-sage-700 font-medium underline underline-offset-4">Google Haritalar’da yol tarifi →</a>
          </div>
        </div>
      </section>
      <VisitInfo showDirectionsLink={false} />
    </div>
  );
}
