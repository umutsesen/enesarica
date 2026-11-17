const steps = [
  {
    title: 'Bireysel değerlendirme',
    desc: 'Sağlık öyküsü ve günlük hareket ihtiyaçları değerlendirilir. Hekimin tanısı ve yönlendirmesi fizyoterapi planına temel oluşturur.',
  },
  {
    title: 'Programın planlanması',
    desc: 'Programın amacı, içeriği ve izlem aralıkları, hekim yönlendirmesi ve bireysel değerlendirme doğrultusunda ele alınır.',
  },
  {
    title: 'Uygulama ve izlem',
    desc: 'Programın uygunluğu ve değişen ihtiyaçlar izlem görüşmelerinde yeniden değerlendirilir.',
  },
  {
    title: 'Günlük yaşam',
    desc: 'Günlük yaşam ihtiyaçları ve varsa ev programına ilişkin sorular birlikte konuşulur. Süreç ve sonuçlar kişiden kişiye değişir.',
  },
]

export default function TreatmentProcess() {
  return (
    <section className="process-section" aria-labelledby="surec-baslik">
      <div className="editorial-shell process-layout">
        <div><p className="eyebrow">Çalışma süreci</p><h2 id="surec-baslik">Değerlendirme<br />ve izlem.</h2></div>
        <ol className="process-list">{steps.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.desc}</p></li>)}</ol>
      </div>
    </section>
  );
}
