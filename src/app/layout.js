import { createPageMetadata } from '@/lib/metadata';
import { SITE_URL } from '@/lib/site';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { StructuredData } from './components/StructuredData';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  ...createPageMetadata({
    title: 'Fizyoterapist Enes Arıca | Profil ve İletişim',
    description: 'Fizyoterapist Enes Arıca’nın çalışma yaklaşımı, hareket sağlığı rehberleri ve Yalova Merkez’de ilk görüşme için iletişim ve ziyaret bilgileri.',
  }),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://www.fizyoterapistenesarica.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <meta name="designed-by" content="DenkLabs — Made in Deutschland" />
        <meta name="msvalidate.01" content="81AA098D4DAEA88D728AB2657C015DCE" />
      </head>
      <body className={inter.className}>
        <StructuredData />
        <a href="#icerik" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-forest-900">
          İçeriğe geç
        </a>
        <Navbar />
        <main id="icerik" tabIndex={-1} className="focus:outline-none">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
