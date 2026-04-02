'use client';

import { FaWhatsapp, FaPhone } from 'react-icons/fa';

export function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/905446621245"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
      <a
        href="tel:+905446621245"
        aria-label="Telefon ile ara"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-forest-900 text-white shadow-lg hover:scale-105 transition-transform"
      >
        <FaPhone className="w-6 h-6" />
      </a>
    </div>
  );
}
