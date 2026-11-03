import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata({
  title: 'Gizlilik Politikası | Fzt. Enes Arıca',
  description: 'Web sitesi, iletişim formu ve üçüncü taraf hizmetlerde veri işleme hakkında bilgiler. Gizlilik ve iletişim başvuruları.',
  path: '/gizlilik-politikasi',
});

export default function GizlilikPolitikasiPage() {
  return (
    <section className="bg-sand-50 py-24">
      <div className="max-w-3xl mx-auto px-6 prose">
        <h1 className="text-3xl md:text-4xl font-semibold text-forest-900 mb-8 tracking-tight">
          Gizlilik Politikasi
        </h1>

        <p>
          Bu gizlilik politikasi, fizyoterapistenesarica.com web sitesini ziyaret ettiginizde
          kisisel verilerinizin nasil toplandigi, kullanildigi ve korundugu
          hakkinda sizi bilgilendirmek amaciyla hazirlanmistir.
        </p>

        <h2>1. Cerez Politikasi</h2>
        <p>
          Web sitemizde yalnizca sitenin teknik olarak duzgun calismasi icin
          gerekli olan zorunlu cerezler kullanilmaktadir. Pazarlama veya analiz
          amacli onaya tabi cerezler kullanilmamaktadir. Kullanilan cerez turleri:
        </p>
        <ul>
          <li>
            <strong>Zorunlu cerezler:</strong> Web sitesinin duzgun calismasi
            icin gerekli olan cerezlerdir.
          </li>
        </ul>
        <p>
          Tarayici ayarlariniz uzerinden cerezleri devre disi birakabilirsiniz.
          Ancak bu durumda web sitesinin bazi ozellikleri duzenli calismayabilir.
          Detayli bilgi icin <a href="/cerez-politikasi">Cerez Politikasi</a>{' '}
          sayfamizi inceleyebilirsiniz.
        </p>

        <h2>2. Form Verileri</h2>
        <p>
          Web sitemizdeki iletisim formu araciligiyla asagidaki bilgiler
          toplanmaktadir:
        </p>
        <ul>
          <li>Ad ve soyad</li>
          <li>Telefon numarasi</li>
          <li>E-posta adresi</li>
          <li>İsteğe bağlı mesaj içeriği</li>
          <li>Sabit iletişim noktası: Yalova Merkez</li>
        </ul>
        <p>
          Bu bilgiler iletişim talebinizi yanıtlamak ve randevuya ilişkin iletişimi yürütmek amacıyla kullanılır.
          Form sağlık bilgileri için tasarlanmamıştır; lütfen tanı, rapor, görüntüleme sonucu veya sağlık geçmişi paylaşmayın.
        </p>

        <h2>3. Ucuncu Taraf Hizmetler</h2>
        <p>
          Web sitemizde asagidaki ucuncu taraf hizmetler kullanilmaktadir:
        </p>
        <ul>
          <li>
            <strong>Vercel:</strong> Web sitesi barindirma hizmeti
          </li>
          <li>
            <strong>Web3Forms:</strong> Mesaj formunu gönderdiğinizde formdaki bilgiler tarayıcınızdan
            bu hizmetin API’sine iletilir.
          </li>
          <li>
            <strong>Yazı tipleri:</strong> Sitenin alan adından sunulur; sayfa görüntülenirken
            Google Fonts’a ayrıca istek gönderilmez.
          </li>
        </ul>
        <p>
          Hizmet sağlayıcılar teknik altyapılarında veri işleyebilir. Veri işleme ve aktarım koşullarıyla ilgili
          ayrıntılar için veri sorumlusuna ulaşabilirsiniz. İletişim kanallarına ilişkin bilgi KVKK aydınlatma metninde yer alır.
        </p>

        <h2>5. Veri Saklama Sureleri</h2>
        <p>Kisisel verileriniz asagidaki sureler boyunca saklanmaktadir:</p>
        <ul>
          <li>
            <strong>Form verileri:</strong> Talebin yanıtlanması ve uygulanabilir yasal yükümlülükler için gerekli süreyle sınırlı olarak saklanır.
            Saklama ve silme koşulları hakkında veri sorumlusundan bilgi isteyebilirsiniz.
          </li>
          <li>
            <strong>Çerezler:</strong> Saklama süresi kullanılan teknik çerezin işlevine göre değişebilir.
            Tarayıcınızın site verileri bölümünden mevcut çerezleri görüntüleyebilir ve silebilirsiniz.
          </li>
        </ul>

        <h2>6. Guncelleme Politikasi</h2>
        <p>
          Bu gizlilik politikasi, yasal duzenlemeler veya hizmet degisiklikleri
          dogrultusunda guncellenebilir. Guncellemeler bu sayfada
          yayimlanacaktir. Onemli degisiklikler icin web sitemiz uzerinden
          bilgilendirme yapilacaktir.
        </p>

        <h2>7. Iletisim</h2>
        <p>
          Gizlilik politikamiz hakkinda sorulariniz icin bize ulasabilirsiniz:
        </p>
        <p>
          <strong>Veri Sorumlusu:</strong> Enes Arica
          <br />
          <strong>E-posta:</strong> fizyones77@gmail.com
          <br />
          <strong>Telefon:</strong> +90 554 662 12 45
        </p>

        <p className="text-sm text-gray-400 mt-12">
          Son güncelleme: 3 Kasım 2026
        </p>
      </div>
    </section>
  );
}
