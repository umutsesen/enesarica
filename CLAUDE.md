# Enes Arıca Kişisel Site — Agent Context

> Fizyoterapist Enes Arıca kişisel marka web sitesi.
> Domain: www.fizyoterapistenesarica.com

## Mevzuat — Unvan ve Tanıtım Kırmızı Çizgileri

Dayanak: **Serbest Meslek İcrası Yön. (RG 29.03.2025 / 32856)** ve **Tanıtım ve
Bilgilendirme Faaliyetleri Yön. (RG 12.11.2025 / 33075)**.
02.07.2026 denetiminde tespit edilen ve 10.08.2026 tarihli savunma yazısına konu olan
ihlaller aşağıdadır — bu ifadeler hiçbir public dosyada (`src/`, `content/`, `public/`)
yeniden kullanılamaz.

**Yasak unvanlar** (denetimde tespit edildi):
- `baş fizyoterapist` / `başfizyoterapist` — 02.07.2026 denetiminde sitede tespit edildi
- `uzman` / `uzmanlık` / `Uzm.` unvan veya iddia olarak — yalnızca gerçek YL/doktora varsa
- `şef`, `koordinatör fizyoterapist` gibi hiyerarşi ima eden türevleri
- hekim unvanları (`Dr.`, `Op. Dr.`) fizyoterapist için

**Yasak tanıtım dili:**
- Diğer **kuruluşların** aleyhine kendi hizmetini öne çıkaran karşılaştırma
  (ör. "hastane/klinik ortamına kıyasla ... daha düşük/iyi")
- Üstünlük: `en iyi`, `en etkili`, `en başarılı`, `lider`, `bir numara`
- Mutlak güvenlik: `risksiz`, `yan etkisiz`, `zararsız`, `tamamen ağrısız`,
  `enfeksiyon riski yoktur`
- Sonuç/kür taahhüdü, başarı istatistiği, hasta görseli, hasta yorumu/memnuniyet ifadesi
- Teşhis/muayene dili — fizyoterapist için yalnızca `değerlendirme`; tanı hekime aittir

**Tarama (her PR öncesi çalıştır):**
```bash
grep -rinE "\\b(baş ?fizyoterapist|uzman[a-zçğıöşü]*|Uzm\\.|en (iyi|etkili|başarılı)|risksiz|yan etkisiz|zararsız|tamamen ağrısız|enfeksiyon riski yoktur)\\b" src/ content/ public/
```
**Çıktı boş olmalıdır — istisna yoktur.** Klinik bağlamda masum görünen kullanımlar da
(bir görüntüleme yönteminin "en iyi" olması, bir belirtinin "zararsız" olması, literatür
alıntısındaki superlatif) tarandığında gürültü yaratır ve kuralı işlevsizleştirir; bu
yüzden hepsi nötr karşılıklarıyla değiştirilmiştir ("ayrıntılı gösteren", "kendiliğinden
geçici", "etkili bir strateji"). Yeni içerik de bu dile uyar. Kelime bazlı toplu değiştirme yaparken Türkçe dilbilgisini kontrol et:
2026-05-06 sweep'i `Uzmanlık İçeriği` → `Deneyimli İçeriği` bozuk çevirisi bıraktı ve
2026-07-29'da bu "dilbilgisi düzeltmesi" yasak kelimeyi geri getirdi.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion (whileInView + animate, clip-path reveals, counter) |
| Blog/Content | MDX (remark + remark-html) |
| Sitemap | next-sitemap (postbuild) |
| Font | Inter (next/font/google) |
| Hosting | Vercel |

## Project Structure

```
enesarica/
├── src/app/
│   ├── layout.js              # Root: Inter font, metadata, StructuredData
│   ├── page.js                # Homepage: Hero → AboutPreview → Specializations → TreatmentProcess → FeaturedTestimonials → YouTubeShorts → LatestArticles → HomeContact
│   ├── components/            # All components
│   ├── hakkimda/              # Biography, timeline, certifications, philosophy
│   ├── tedavi-alanlari/       # Treatment listing + [slug] MDX detail
│   ├── blog/                  # Blog listing + [slug] MDX detail
│   ├── hasta-deneyimleri/     # Testimonial grid
│   ├── iletisim/              # Contact form + branch cards
│   ├── sss/                   # FAQ page
│   ├── kvkk/                  # KVKK legal
│   └── gizlilik-politikasi/   # Privacy policy
├── src/data/                  # treatments.js, testimonials.js, branches.js, certifications.js
├── content/
│   ├── blog/                  # 27 MDX blog posts
│   └── tedaviler/             # 17 MDX treatment detail pages
└── public/
    ├── enesaricalogo.png      # Site logo (Navbar + Footer)
    └── imgs/                  # Photos (jpeg/webp), basin images
```

## Color System (Tailwind custom)

| Token | Hex | Usage |
|-------|-----|-------|
| forest-900 | `#152C1F` | Primary dark (Hero bg, buttons, headings) |
| forest-800 | `#1E3A2B` | Hover states |
| sage-600 | `#557259` | Accent (CTA buttons, kickers, links) |
| sage-400 | `#8AAF90` | Light accent (dark bg text) |
| sand-50 | `#FAFAF6` | Background (body, alternating sections) |
| sand-100/200 | `#F5F3EE` / `#EBE7E0` | Card backgrounds, borders |

## Design System

- **Logo:** `/enesaricalogo.png` — Navbar (h-8 w-32), Footer (h-8 w-36). Dark bg: `brightness-0 invert`
- **Hero:** Dark (bg-forest-900), sage-400 kicker text, white heading
- **Section kickers:** `text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase`
- **Cards:** rounded-2xl p-6/p-8 border border-gray-100
- **Buttons:** bg-sage-600 hover:bg-sage-700 rounded-lg (primary), bg-forest-900 hover:bg-forest-800 (secondary)
- **Section padding:** py-24 md:py-32
- **YouTube:** Sekmeli yapı (Videolar / Egzersizler), shorts grid + video grid
- **NO:** pill badges, gradient text, glow effects

## Animasyon Kuralları

- Custom easing: `[0.25, 0.4, 0.25, 1]`
- Hero: `animate` (sayfa yüklenince), staggered cascade, clip-path image reveal, counter animasyonu
- Sections: `whileInView` + `viewport: { once: true, margin: "-100px" }`
- Image reveals: `clipPath: "inset(100% 0 0 0)"` → `"inset(0% 0 0 0)"` (curtain effect)
- Cards: `opacity: 0, y: 30, scale: 0.97` → `1, 0, 1` (staggered)
- Hover effects: `hover:-translate-y-1 hover:shadow-md`
- **KULLANMA:** `filter: blur()` → non-composited, PageSpeed düşürür

## Hard Rules

- All domain refs: `https://www.fizyoterapistenesarica.com`
- Social links: instagram.com/yalovafizyoterapist, youtube.com/@fizyones, facebook.com/fizyones
- Author: "Fzt. Enes Arıca" (not "Fizyones")
- Floating buttons: right side (WhatsApp + Phone), `bottom-4 right-4 sm:bottom-6 sm:right-6`
- Phone: +90 554 662 12 45
- Email: fizyones77@gmail.com
- Copyright year: dynamic `new Date().getFullYear()`
- Prose styling in globals.css for MDX content
- Images: webp preferred, Next.js Image component

## SEO & Performance

- Google Search Console: Domain property (fizyoterapistenesarica.com)
- Sitemap: www.fizyoterapistenesarica.com/sitemap.xml (next-sitemap postbuild)
- robots.txt: generated by next-sitemap
- OpenGraph + Twitter Card metadata in layout.js
- Structured Data: PhysicalTherapist JSON-LD
- **Structured Data @type kuralları:**
  - Sadece Google'ın rich results olarak desteklediği tipleri kullan (Article, BlogPosting, BreadcrumbList, FAQPage, HowTo, LocalBusiness/PhysicalTherapist, Person, Organization)
  - `@type` array KULLANMA — Google farklı hiyerarşileri birleştiremez → "Invalid object type for field '<parent_node>'" hatası
  - `Offer` + `OfferCatalog` + `Service` iç içe geçirme KULLANMA — Google Offer'ı Product kontextinde validate eder. Hizmet listesi için `knowsAbout` string array kullan
  - `MedicalTherapy`, `MedicalWebPage` gibi Google'ın desteklemediği tipleri schema'ya ekleme
  - `location` array (Place nesneleri) KULLANMA — Google LocalBusiness için `address` ve `geo`'yu doğrudan entity üzerinde bekler
  - `aggregateRating` ve `review[]` self-serving KULLANMA — Google 2019'dan beri `LocalBusiness`/`Organization` (ve `PhysicalTherapist` gibi alt tipleri) için sitenin kendi hakkındaki review/rating'ini rich result olarak desteklemiyor (`ineligible for star review feature`). GSC'de "Review snippets — Invalid object type for field '<parent_node>'" olarak patlar. Review'ları sadece Google Business Profile / üçüncü taraf sitelerde bırak

## Verification

```bash
npx next build   # Must succeed with 0 errors
```

## SEO Targets

fizyoterapist enes arıca, bel fıtığı tedavisi, boyun fıtığı tedavisi, GTOS terapi, skolyoz tedavisi, manuel terapi, klinik pilates, reformer pilates, Yalova fizyoterapi
