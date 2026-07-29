export const metadata = {
  title: 'Çerez Politikası | Fzt. Enes Arıca',
  description:
    'fizyoterapistenesarica.com çerez politikası. Sitemizde yalnızca zorunlu çerezler kullanılmaktadır.',
  alternates: { canonical: 'https://www.fizyoterapistenesarica.com/cerez-politikasi' },
};

export default function CerezPolitikasiPage() {
  return (
    <section className="bg-sand-50 py-24">
      <div className="max-w-3xl mx-auto px-6 prose">
        <h1 className="text-3xl md:text-4xl font-semibold text-forest-900 mb-8 tracking-tight">
          Çerez Politikası
        </h1>

        <p>
          Bu çerez politikası, fizyoterapistenesarica.com web sitesini ziyaret
          ettiğinizde kullanılan çerezler hakkında sizi bilgilendirmek amacıyla
          hazırlanmıştır. Çerezler, ziyaret ettiğiniz web siteleri tarafından
          tarayıcınıza kaydedilen küçük metin dosyalarıdır.
        </p>

        <h2>1. Kullanılan Çerez Türleri</h2>
        <p>
          Web sitemizde yalnızca sitenin teknik olarak düzgün çalışması için
          gerekli olan <strong>zorunlu çerezler</strong> kullanılmaktadır.
          Pazarlama, profilleme veya analiz amacıyla onaya tabi çerezler
          kullanılmamaktadır.
        </p>
        <ul>
          <li>
            <strong>Zorunlu çerezler:</strong> Sayfa gezinimi, güvenlik ve temel
            site işlevleri için gerekli olan çerezlerdir. Bu çerezler kişisel
            kimlik tespiti amacıyla kullanılmaz ve yasal olarak onay gerektirmez.
          </li>
        </ul>

        <h2>2. Üçüncü Taraf Hizmetler</h2>
        <p>
          Web sitemiz barındırma için Vercel ve yazı tipi hizmeti için Google
          Fonts altyapısını kullanır. Bu hizmetler, teknik gereklilikler
          kapsamında sınırlı veri işleyebilir. Sitemizde Google Analytics,
          Microsoft Clarity gibi reklam veya davranışsal izleme amaçlı analitik
          araçlar kullanılmamaktadır.
        </p>

        <h2>3. Çerezleri Yönetme</h2>
        <p>
          Tarayıcı ayarlarınız üzerinden çerezleri silebilir veya
          engelleyebilirsiniz. Zorunlu çerezlerin devre dışı bırakılması, sitenin
          bazı bölümlerinin düzgün çalışmamasına neden olabilir.
        </p>

        <h2>4. İletişim</h2>
        <p>
          Çerez politikamız hakkında sorularınız için bize ulaşabilirsiniz:
        </p>
        <p>
          <strong>Veri Sorumlusu:</strong> Enes Arıca
          <br />
          <strong>E-posta:</strong> fizyones77@gmail.com
          <br />
          <strong>Telefon:</strong> +90 554 662 12 45
        </p>

        <p className="text-sm text-gray-400 mt-12">
          Son güncelleme: 29 Mayıs 2026
        </p>
      </div>
    </section>
  );
}
