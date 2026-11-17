'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const topics = [
  { name: 'Bel Fıtığında Fizyoterapi', href: '/calisma-alanlari/bel-fitigi' },
  { name: 'Boyun Fıtığında Fizyoterapi', href: '/calisma-alanlari/boyun-fitigi' },
  { name: 'GTOS Terapi', href: '/calisma-alanlari/gtos-terapi' },
  { name: 'Skolyoz ve Schroth', href: '/calisma-alanlari/skolyoz-schroth' },
  { name: 'Manuel Terapi', href: '/calisma-alanlari/manuel-terapi' },
  { name: 'Spor Yaralanmaları', href: '/calisma-alanlari/spor-yaralanmalari' },
  { name: 'Klinik Pilates', href: '/calisma-alanlari/klinik-pilates' },
  { name: 'Reformer Pilates', href: '/calisma-alanlari/reformer-pilates' },
];
const links = [
  { name: 'Hakkımda', href: '/hakkimda' },
  { name: 'Çalışma Alanları', href: '/calisma-alanlari', disclosure: true },
  { name: 'Rehberler', href: '/blog' },
  { name: 'İletişim', href: '/iletisim' },
];

function Chevron({ open }) {
  return (
    <svg className={'h-4 w-4 transition-transform ' + (open ? 'rotate-180' : '')} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileTopicsOpen, setMobileTopicsOpen] = useState(false);
  const navRef = useRef(null);
  const desktopGroup = useRef(null);
  const desktopTrigger = useRef(null);
  const mobileTrigger = useRef(null);
  const tone = 'text-forest-900 hover:bg-sand-100';

  useEffect(() => {
    setMobileOpen(false);
    setDesktopOpen(false);
    setMobileTopicsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [mobileOpen]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    function handleResize(event) {
      if (event.matches) {
        setMobileOpen(false);
        setMobileTopicsOpen(false);
      } else {
        setDesktopOpen(false);
      }
    }
    desktop.addEventListener('change', handleResize);
    return () => desktop.removeEventListener('change', handleResize);
  }, []);

  useEffect(() => {
    if (!desktopOpen) return;
    function handleOutsidePointer(event) {
      if (!desktopGroup.current?.contains(event.target)) setDesktopOpen(false);
    }
    document.addEventListener('pointerdown', handleOutsidePointer);
    return () => document.removeEventListener('pointerdown', handleOutsidePointer);
  }, [desktopOpen]);

  function handleNavigationKey(event) {
    if (mobileOpen && event.key === 'Tab' && !event.ctrlKey && !event.metaKey) {
      const focusable = [...navRef.current.querySelectorAll('a[href], button:not([disabled])')]
        .filter((element) => element.getClientRects().length > 0);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
    if (event.key !== 'Escape') return;
    if (mobileOpen) {
      setMobileOpen(false);
      setMobileTopicsOpen(false);
      mobileTrigger.current?.focus();
    } else if (desktopOpen) {
      setDesktopOpen(false);
      desktopTrigger.current?.focus();
    }
  }

  return (
    <nav ref={navRef} aria-label="Ana menü" onKeyDown={handleNavigationKey} className="fixed top-0 left-0 right-0 z-50 border-b bg-white border-sand-200">
      <div className="editorial-shell h-16 flex items-center justify-between gap-4">
        <Link href="/" aria-label="Fzt. Enes Arıca ana sayfa" className="text-lg font-semibold tracking-tight text-forest-900">Fzt. Enes Arıca</Link>
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href} ref={link.disclosure ? desktopGroup : null} className="relative" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setDesktopOpen(false); }}>
              <div className="flex items-center">
                <Link href={link.href} aria-current={pathname === link.href ? 'page' : undefined} className={'px-3 py-2 text-sm rounded-lg ' + tone}>{link.name}</Link>
                {link.disclosure && (
                  <button ref={desktopTrigger} type="button" aria-label="Çalışma alanları alt menüsü" aria-expanded={desktopOpen} aria-controls="desktop-topics" onClick={() => setDesktopOpen((open) => !open)} className={'p-2 rounded-lg ' + tone}>
                    <Chevron open={desktopOpen} />
                  </button>
                )}
              </div>
              {link.disclosure && (
                <div id="desktop-topics" hidden={!desktopOpen} className="absolute top-full left-0 pt-2">
                  <ul className="w-64 rounded-xl border border-sand-200 bg-white p-2 shadow-lg">
                    {topics.map((topic) => (
                      <li key={topic.href}><Link href={topic.href} onClick={() => setDesktopOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-forest-900 hover:bg-sand-100">{topic.name}</Link></li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
          <li><a href="tel:+905546621245" className="ml-3 inline-block px-4 py-2 rounded text-sm font-medium bg-forest-900 text-white hover:bg-forest-800">+90 554 662 12 45</a></li>
        </ul>
        <button ref={mobileTrigger} type="button" aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen((open) => !open)} className={'lg:hidden rounded-lg p-2 ' + tone}>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" d={mobileOpen ? 'm6 6 12 12M6 18 18 6' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      <div id="mobile-navigation" hidden={!mobileOpen} className="lg:hidden fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-white border-t border-sand-200">
        <ul className="px-6 py-5 space-y-1">
          {links.map((link) => (
            <li key={link.href}>
              <div className="flex items-center justify-between gap-4">
                <Link href={link.href} onClick={() => setMobileOpen(false)} aria-current={pathname === link.href ? 'page' : undefined} className="flex-1 py-3 text-lg font-medium text-forest-900">{link.name}</Link>
                {link.disclosure && <button type="button" aria-label="Çalışma alanları alt başlıkları" aria-expanded={mobileTopicsOpen} aria-controls="mobile-topics" onClick={() => setMobileTopicsOpen((open) => !open)} className="p-3 rounded-lg text-forest-900 hover:bg-sand-100"><Chevron open={mobileTopicsOpen} /></button>}
              </div>
              {link.disclosure && (
                <ul id="mobile-topics" hidden={!mobileTopicsOpen} className="border-l border-sage-300 ml-1 pl-4 py-2">
                  {topics.map((topic) => <li key={topic.href}><Link href={topic.href} onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm text-gray-700">{topic.name}</Link></li>)}
                </ul>
              )}
            </li>
          ))}
          <li className="pt-5"><a href="tel:+905546621245" className="block px-4 py-3 rounded-lg bg-forest-900 text-white text-center font-medium">+90 554 662 12 45</a></li>
          <li><Link href="/iletisim" onClick={() => setMobileOpen(false)} className="block py-3 text-center text-sm text-sage-700 underline underline-offset-4">Adres ve iletişim bilgileri</Link></li>
        </ul>
      </div>
    </nav>
  );
}
