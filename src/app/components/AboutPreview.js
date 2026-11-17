import Link from 'next/link';

const preparation = [
  { title: 'Hekim yönlendirmesi', text: 'Hastalık durumlarında uygulamalar, hekim tarafından konulan tanı ve yönlendirme doğrultusunda planlanır.' },
  { title: 'Mevcut belgeler', text: 'Varsa hekim raporunuzu ve mevcut görüntüleme sonuçlarınızı ilk görüşmeye getirebilirsiniz.' },
  { title: 'Bireysel değerlendirme', text: 'Hareket, kuvvet ve fonksiyon değerlendirilir. Programın içeriği ve izlem aralıkları kişiye göre belirlenir.' },
];

export default function AboutPreview() {
  return (
    <section className="bg-sand-50 py-16 md:py-24" aria-labelledby="yaklasim-baslik">
      <div className="editorial-shell">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-sm font-medium text-sage-700 mb-3">Çalışma yaklaşımım</p>
            <h2 id="yaklasim-baslik" className="text-3xl font-semibold tracking-tight text-forest-900">İlk görüşme öncesinde</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">Fizyoterapi süreci, sağlık geçmişiniz ve hekim yönlendirmeniz birlikte ele alınarak başlar. Süreç ve sonuçlar kişiden kişiye değişir.</p>
            <Link href="/hakkimda" className="mt-5 inline-block font-medium text-sage-700 underline underline-offset-4">Hakkımda ve çalışma yaklaşımım →</Link>
          </div>
          <ol className="lg:col-span-8 grid sm:grid-cols-3 gap-6">
            {preparation.map((item) => (
              <li key={item.title} className="border-t border-sage-300 pt-5">
                <h3 className="mt-3 font-semibold text-forest-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
