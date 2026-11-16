import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata({
  title: 'KVKK Aydınlatma Metni | Fzt. Enes Arıca',
  description: 'Kişisel veriler ve ilgili kişilerin hakları hakkında aydınlatma metni.',
  path: '/kvkk',
});

export default function KVKKPage() {
  return (
    <section className="bg-sand-50 py-24">
      <div className="max-w-3xl mx-auto px-6 prose">
        <h1 className="text-3xl md:text-4xl font-semibold text-forest-900 mb-8 tracking-tight">
          KVKK Aydinlatma Metni
        </h1>

        <p>
          Bu aydinlatma metni, 6698 sayili Kisisel Verilerin Korunmasi Kanunu
          (&ldquo;KVKK&rdquo;) kapsaminda veri sorumlusu sifatiyla Fizyoterapist
          Enes Arica tarafindan hazirlanmistir.
        </p>

        <h2>1. Veri Sorumlusu</h2>
        <p>
          <strong>Ad Soyad:</strong> Enes Arica
          <br />
          <strong>E-posta:</strong> fizyones77@gmail.com
          <br />
          <strong>Telefon:</strong> +90 554 662 12 45
          <br />
          <strong>Adres:</strong> Yalova Merkez / Yalova
        </p>

        <h2>2. Islenen Kisisel Veriler</h2>
        <p>
          Web sitemiz ve iletişim noktamız araciligiyla asagidaki kisisel veriler
          islenmektedir:
        </p>
        <ul>
          <li>
            <strong>Kimlik bilgileri:</strong> Ad, soyad
          </li>
          <li>
            <strong>Iletisim bilgileri:</strong> Telefon numarasi, e-posta
            adresi
          </li>
          <li>
            <strong>Mesaj içeriği:</strong> İletişim talebinize ilişkin isteğe bağlı açıklama.
          </li>
          <li>
            <strong>Dijital veriler:</strong> IP adresi, tarayici bilgileri,
            cerez verileri
          </li>
        </ul>

        <h2>3. Kisisel Verilerin Islenme Amaclari</h2>
        <p>Kisisel verileriniz asagidaki amaclarla islenmektedir:</p>
        <ul>
          <li>Randevu olusturma ve yonetimi</li>

          <li>Iletisim taleplerinizin cevaplanmasi</li>
          <li>Yasal yukumluluklerin yerine getirilmesi</li>

        </ul>

        <h2>4. Kisisel Verilerin Aktarilmasi</h2>
        <p>
          Kisisel verileriniz, KVKK&apos;nin 8. ve 9. maddelerinde belirtilen
          sartlar cercevesinde asagidaki taraflara aktarilabilir:
        </p>
        <ul>
          <li>Yasal zorunluluk halinde yetkili kamu kurum ve kuruluslari</li>
          <li>
            Web sitesi altyapisi icin kullanilan hosting hizmet saglayicilari
            (Vercel)
          </li>
        </ul>
        <p>
          Web sitesinde şu anda iletişim formu bulunmamaktadır. Önceki form gönderimleri Web3Forms aracılığıyla iletilmiştir.
          Daha önce gönderilmiş form bilgilerine ilişkin sorularınızı veri sorumlusuna yöneltebilirsiniz.
        </p>

        <h2>5. Kisisel Verilerin Toplanma Yontemleri ve Hukuki Sebepleri</h2>
        <p>Kisisel verileriniz asagidaki yontemlerle toplanmaktadir:</p>
        <ul>
          <li>WhatsApp ve telefon araciligiyla iletisim</li>
          <li>Klinige yuz yuze basvuru</li>
          <li>Sitenin calismasi icin gerekli zorunlu cerezler</li>
        </ul>
        <p>
          Hukuki sebepler: Acik riza (KVKK m.5/1), sozlesmenin ifasi (KVKK
          m.5/2-c), hukuki yukumluluk (KVKK m.5/2-ç), meşru menfaat (KVKK
          m.5/2-f).
        </p>

        <h2>6. Ilgili Kisinin Haklari (KVKK Madde 11)</h2>
        <p>
          KVKK&apos;nin 11. maddesi uyarinca asagidaki haklara sahipsiniz:
        </p>
        <ul>
          <li>Kisisel verilerinizin islenip islenmedigini ogrenme</li>
          <li>
            Kisisel verileriniz islenmisse buna iliskin bilgi talep etme
          </li>
          <li>
            Kisisel verilerinizin islenme amacini ve bunlarin amacina uygun
            kullanilip kullanilmadigini ogrenme
          </li>
          <li>
            Yurt icinde veya yurt disinda kisisel verilerinizin aktarildigi
            ucuncu kisileri bilme
          </li>
          <li>
            Kisisel verilerinizin eksik veya yanlis islenmis olmasi halinde
            bunlarin duzeltilmesini isteme
          </li>
          <li>
            KVKK&apos;nin 7. maddesinde ongorulen sartlar cercevesinde kisisel
            verilerinizin silinmesini veya yok edilmesini isteme
          </li>
          <li>
            Duzeltme ve silme islemlerinin, kisisel verilerinizin aktarildigi
            ucuncu kisilere bildirilmesini isteme
          </li>
          <li>
            Islenen verilerinizin munhasiran otomatik sistemler vasitasiyla
            analiz edilmesi suretiyle aleyhinize bir sonucun ortaya cikmasina
            itiraz etme
          </li>
          <li>
            Kisisel verilerinizin kanuna aykiri olarak islenmesi sebebiyle
            zarara ugramaniz halinde zararin giderilmesini talep etme
          </li>
        </ul>

        <h2>7. Iletisim</h2>
        <p>
          Yukaridaki haklarinizi kullanmak icin asagidaki iletisim bilgileri
          uzerinden bize ulasabilirsiniz:
        </p>
        <p>
          <strong>E-posta:</strong> fizyones77@gmail.com
          <br />
          <strong>Telefon:</strong> +90 554 662 12 45
        </p>
        <p>
          Basvurulariniz, talebin niteligi ve icerigine gore en gec 30 gun
          icinde ucretsiz olarak sonuclandirilacaktir.
        </p>

        <p className="text-sm text-gray-400 mt-12">
          Son güncelleme: 3 Kasım 2026
        </p>
      </div>
    </section>
  );
}
