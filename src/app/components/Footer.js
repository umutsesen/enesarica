import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaFacebookF, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { getAllPosts } from "@/lib/mdx";
import { treatments } from "@/data/treatments";

const socialLinks = [
  { icon: FaInstagram, href: "https://www.instagram.com/yalovafizyoterapist/", label: "Instagram" },
  { icon: FaYoutube, href: "https://www.youtube.com/@fizyones", label: "YouTube" },
  { icon: FaFacebookF, href: "https://www.facebook.com/fizyones/", label: "Facebook" },
];

const quickLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımda", href: "/hakkimda" },
  { name: "Tedavi Alanları", href: "/tedavi-alanlari" },
  { name: "Blog", href: "/blog" },
  { name: "Hasta Deneyimleri", href: "/hasta-deneyimleri" },
  { name: "İletişim", href: "/iletisim" },
];

export default function Footer() {
  const blogPosts = getAllPosts('blog').slice(0, 8);

  return (
    <footer className="bg-forest-900 text-gray-400">
      {/* Top section: Brand description + CTA */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <Link href="/" className="relative h-8 w-36 block">
                <Image
                  src="/enesaricalogo.png"
                  alt="Enes Arıca"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </Link>
              <p className="mt-4 text-gray-400 leading-relaxed max-w-lg">
                Uzman fizyoterapist Enes Arıca, bel fıtığı, boyun fıtığı, skolyoz, GTOS terapi, manuel terapi, klinik pilates ve reformer pilates alanlarında 10 yılı aşkın deneyimle ameliyatsız tedavi hizmeti sunmaktadır. Yalova Merkez, Yalova Çiftlikköy, İstanbul Bahçelievler ve İzmir Alsancak şubelerinde hastalarına kişiye özel tedavi programları uygulayarak kalıcı çözümler sağlamaktadır.
              </p>
            </div>
            <div className="lg:text-right">
              <div className="inline-flex flex-col sm:flex-row gap-3">
                <Link
                  href="/iletisim"
                  className="px-7 py-3.5 bg-sage-600 text-white rounded-lg font-medium hover:bg-sage-700 transition-colors text-center"
                >
                  Randevu Al
                </Link>
                <a
                  href="tel:+905446621245"
                  className="px-7 py-3.5 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-colors text-center"
                >
                  +90 544 662 12 45
                </a>
              </div>
              <div className="mt-5 flex gap-3 lg:justify-end">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:text-sage-400 hover:bg-white/15 transition-colors"
                  >
                    <social.icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Link grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {/* Sayfalar */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Sayfalar</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-sage-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tedavi Alanları */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Tedavi Alanları</h3>
            <ul className="space-y-2.5">
              {treatments.slice(0, 8).map((t) => (
                <li key={t.slug}>
                  <Link href={`/tedavi-alanlari/${t.slug}`} className="text-sm hover:text-sage-400 transition-colors">
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Son Yazılar */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Son Yazılar</h3>
            <ul className="space-y-2.5">
              {blogPosts.slice(0, 8).map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="text-sm hover:text-sage-400 transition-colors line-clamp-1">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="tel:+905446621245" className="flex items-center gap-2 hover:text-sage-400 transition-colors">
                  <FaPhone className="w-3 h-3 shrink-0" />
                  +90 544 662 12 45
                </a>
              </li>
              <li>
                <a href="mailto:fizyones77@gmail.com" className="flex items-center gap-2 hover:text-sage-400 transition-colors">
                  <FaEnvelope className="w-3 h-3 shrink-0" />
                  fizyones77@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/905446621245" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sage-400 transition-colors">
                  <FaWhatsapp className="w-3 h-3 shrink-0" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Şubeler */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Şubeler</h3>
            <ul className="space-y-2.5 text-sm">
              <li>Yalova Merkez</li>
              <li>Yalova Çiftlikköy</li>
              <li>İstanbul Bahçelievler</li>
              <li>İzmir Alsancak</li>
            </ul>
            <a
              href="https://www.yalovafizyoterapist.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-sage-400 hover:text-sage-300 transition-colors"
            >
              Yalova Fizyoterapi &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Fzt. Enes Arıca. Tüm hakları saklıdır.
            <span className="mx-2 opacity-30">|</span>
            <a href="https://denklabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-sage-400 transition-colors">Made by DenkLabs</a>
          </p>
          <div className="flex items-center gap-4">
            <Link href="/kvkk" className="hover:text-sage-400 transition-colors">KVKK Aydınlatma</Link>
            <span>&middot;</span>
            <Link href="/gizlilik-politikasi" className="hover:text-sage-400 transition-colors">Gizlilik Politikası</Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-5">
          <p className="text-[11px] text-gray-600 text-center">
            Bu web sitesindeki bilgiler genel bilgilendirme amaçlıdır ve tıbbi teşhis veya tedavi yerine geçmez. Tedavi kararları için mutlaka uzman fizyoterapiste danışınız.
          </p>
        </div>
      </div>
    </footer>
  );
}
