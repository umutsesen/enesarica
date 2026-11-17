const steps = [
  {
    title: 'Fonksiyonel Değerlendirme',
    desc: 'Öykü alma ve fonksiyonel analiz ile mevcut durumunuzu değerlendiriyoruz. Tıbbi tanı hekim tarafından konulur; fizyoterapi programı bu yönlendirme doğrultusunda planlanır.',
  },
  {
    title: 'Kişiye Özel Fizyoterapi Planı',
    desc: 'Durumunuza özel manuel terapi, egzersiz ve GTOS terapi kombinasyonlarından oluşan bir fizyoterapi programı hazırlıyoruz.',
  },
  {
    title: 'Uygulama ve Takip',
    desc: 'Her seansta ilerlemenizi takip ediyor, programı ihtiyaca göre güncelliyoruz.',
  },
  {
    title: 'Ev Programı ve Sürdürülebilirlik',
    desc: 'Ev egzersiz programı ve günlük yaşam önerileri ile sürecin devamlılığını destekliyoruz. Sonuçlar kişiden kişiye değişir.',
  },
]

export default function TreatmentProcess() {
  return (
    <section className="process-section" aria-labelledby="surec-baslik">
      <div className="editorial-shell process-layout">
        <div><p className="eyebrow">Nasıl çalışıyoruz?</p><h2 id="surec-baslik">Değerlendirmeden<br />ev programına.</h2></div>
        <ol className="process-list">{steps.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.desc}</p></li>)}</ol>
      </div>
    </section>
  );
}
