export const metadata = {
  title: 'Gizlilik Politikasi | Fzt. Enes Arica',
  description:
    'fizyoterapistenesarica.com gizlilik politikasi. Cerez kullanimi, form verileri ve analytics bilgileri.',
  alternates: { canonical: 'https://www.fizyoterapistenesarica.com/gizlilik-politikasi' },
};

export default function GizlilikPolitikasiPage() {
  return (
    <section className="bg-warm-50 py-24">
      <div className="max-w-3xl mx-auto px-6 prose">
        <h1 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-8 tracking-tight">
          Gizlilik Politikasi
        </h1>

        <p>
          Bu gizlilik politikasi, fizyoterapistenesarica.com web sitesini ziyaret ettiginizde
          kisisel verilerinizin nasil toplandigi, kullanildigi ve korundugu
          hakkinda sizi bilgilendirmek amaciyla hazirlanmistir.
        </p>

        <h2>1. Cerez Politikasi</h2>
        <p>
          Web sitemizde kullanici deneyimini iyilestirmek ve site performansini
          analiz etmek amaciyla cerezler kullanilmaktadir. Kullanilan cerez
          turleri:
        </p>
        <ul>
          <li>
            <strong>Zorunlu cerezler:</strong> Web sitesinin duzgun calismasi
            icin gerekli olan cerezlerdir.
          </li>
          <li>
            <strong>Analitik cerezler:</strong> Microsoft Clarity araciligiyla
            ziyaretci davranislarini anonim olarak analiz etmek icin
            kullanilir.
          </li>
        </ul>
        <p>
          Tarayici ayarlariniz uzerinden cerezleri devre disi birakabilirsiniz.
          Ancak bu durumda web sitesinin bazi ozellikleri duzenli calismayabilir.
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
          <li>Mesaj icerigi</li>
        </ul>
        <p>
          Bu bilgiler yalnizca talebinizi degerlendirmek ve size geri donus
          yapmak amaciyla kullanilir. Pazarlama amacli ucuncu taraflarla
          paylasilmaz.
        </p>

        <h2>3. Microsoft Clarity</h2>
        <p>
          Web sitemizde kullanici deneyimini anlamak ve iyilestirmek amaciyla
          Microsoft Clarity analitik araci kullanilmaktadir. Clarity, ziyaretci
          davranislarini anonim olarak kaydeder ve asagidaki verileri toplar:
        </p>
        <ul>
          <li>Sayfa goruntulenmeleri ve tiklamalar</li>
          <li>Fare hareketleri ve kaydirma davranislari</li>
          <li>Oturum suresi ve sayfa gecisleri</li>
          <li>Cihaz ve tarayici bilgileri</li>
        </ul>
        <p>
          Bu veriler anonim olarak islenir ve bireysel kimliklendirme amaciyla
          kullanilmaz. Daha fazla bilgi icin{' '}
          <a
            href="https://clarity.microsoft.com/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Clarity Kullanim Sartlari
          </a>
          &apos;ni inceleyebilirsiniz.
        </p>

        <h2>4. Ucuncu Taraf Hizmetler</h2>
        <p>
          Web sitemizde asagidaki ucuncu taraf hizmetler kullanilmaktadir:
        </p>
        <ul>
          <li>
            <strong>Microsoft Clarity:</strong> Web analitigi ve kullanici
            deneyimi analizi
          </li>
          <li>
            <strong>Vercel:</strong> Web sitesi barindirma hizmeti
          </li>
          <li>
            <strong>Google Fonts:</strong> Yazi tipi hizmeti
          </li>
        </ul>
        <p>
          Bu hizmet saglayicilar, kendi gizlilik politikalari cercevesinde veri
          islemektedir.
        </p>

        <h2>5. Veri Saklama Sureleri</h2>
        <p>Kisisel verileriniz asagidaki sureler boyunca saklanmaktadir:</p>
        <ul>
          <li>
            <strong>Form verileri:</strong> Talebinizin sonuclanmasindan
            itibaren 1 yil
          </li>
          <li>
            <strong>Analitik veriler:</strong> Microsoft Clarity politikasi
            geregi anonim olarak saklanir
          </li>
          <li>
            <strong>Cerezler:</strong> Oturum cerezleri tarayici kapatildiginda,
            kalici cerezler en fazla 13 ay boyunca saklanir
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
          Son guncelleme: Nisan 2026
        </p>
      </div>
    </section>
  );
}
