"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const treatments = [
  { name: "Bel Fıtığı Tedavisi", href: "/tedavi-alanlari/bel-fitigi-tedavisi" },
  { name: "Boyun Fıtığı Tedavisi", href: "/tedavi-alanlari/boyun-fitigi-tedavisi" },
  { name: "GTOS Terapi", href: "/tedavi-alanlari/gtos-terapi" },
  { name: "Skolyoz & Schroth", href: "/tedavi-alanlari/skolyoz-schroth-tedavisi" },
  { name: "Manuel Terapi", href: "/tedavi-alanlari/manuel-terapi" },
  { name: "Spor Yaralanmaları", href: "/tedavi-alanlari/spor-yaralanmalari" },
  { name: "Klinik Pilates", href: "/tedavi-alanlari/klinik-pilates" },
  { name: "Reformer Pilates", href: "/tedavi-alanlari/reformer-pilates" },
];

const navLinks = [
  { name: "Hakkımda", href: "/hakkimda" },
  { name: "Tedavi Alanları", href: "/tedavi-alanlari", hasDropdown: true },
  { name: "Blog", href: "/blog" },
  { name: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Only use transparent/white-text style on homepage before scroll
  const isDark = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileOpen
          ? "bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
          : isDark
            ? "bg-transparent"
            : "bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="relative h-8 w-32 block">
          <Image
            src="/enesaricalogo.png"
            alt="Enes Arıca"
            fill
            className={`object-contain object-left transition-all duration-300 ${
              isDark ? "brightness-0 invert" : ""
            }`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2 text-sm transition-colors rounded-lg flex items-center gap-1 ${
                    isDark
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-gray-600 hover:text-forest-900 hover:bg-black/[0.03]"
                  }`}
                >
                  {link.name}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 pt-1">
                    <div className="bg-white/90 backdrop-blur-xl rounded-xl shadow-lg border border-gray-100/80 py-1.5 w-52">
                      {treatments.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-forest-900 hover:bg-black/[0.03] transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm transition-colors rounded-lg ${
                  isDark
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-forest-900 hover:bg-black/[0.03]"
                }`}
              >
                {link.name}
              </Link>
            )
          )}

          <Link
            href="/iletisim"
            className={`ml-2 text-sm px-5 py-2 rounded-lg transition-colors ${
              isDark
                ? "bg-sage-600 text-white hover:bg-sage-700"
                : "bg-forest-900 text-white hover:bg-forest-800"
            }`}
          >
            Randevu Al
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          <svg
            className={`w-5 h-5 transition-colors duration-300 ${
              isDark && !mobileOpen ? "text-white" : "text-gray-900"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-white z-40 transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-1 h-full overflow-y-auto">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.name}>
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="w-full flex items-center justify-between py-3.5 text-forest-900 font-medium text-lg"
                >
                  {link.name}
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      mobileDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4 pb-2 flex flex-col gap-0.5 border-l-2 border-sage-200 ml-1">
                    {treatments.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="py-2.5 text-sm text-gray-500 hover:text-sage-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="py-3.5 text-forest-900 font-medium text-lg hover:text-sage-600 transition-colors"
              >
                {link.name}
              </Link>
            )
          )}

          <div className="mt-auto pt-6 border-t border-gray-100">
            <Link
              href="/iletisim"
              className="block bg-forest-900 text-white text-center font-medium px-5 py-3.5 rounded-lg hover:bg-forest-800 transition-colors"
            >
              Randevu Al
            </Link>
            <a
              href="tel:+905446621245"
              className="block mt-3 text-center text-sm text-gray-500"
            >
              +90 544 662 12 45
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
