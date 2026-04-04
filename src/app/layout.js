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
  title: 'Uzman Fizyoterapist Enes Arıca | Yalova, İstanbul, İzmir',
  description:
    'Uzman Fizyoterapist Enes Arıca ile bel fıtığı, boyun fıtığı, skolyoz, GTOS terapi, manuel terapi, klinik pilates ve reformer pilates tedavisi. Yalova, İstanbul ve İzmir\'de hizmetinizdeyiz.',
  keywords: [
    'fizyoterapist',
    'enes arıca',
    'bel fıtığı tedavisi',
    'boyun fıtığı tedavisi',
    'skolyoz tedavisi',
    'GTOS terapi',
    'manuel terapi',
    'klinik pilates',
    'reformer pilates',
    'fizyoterapi yalova',
    'fizyoterapi istanbul',
    'fizyoterapi izmir',
  ],
  openGraph: {
    title: 'Uzman Fizyoterapist Enes Arıca | Yalova, İstanbul, İzmir',
    description:
      'Bel fıtığı, boyun fıtığı, skolyoz, GTOS terapi, manuel terapi, klinik ve reformer pilates tedavisi.',
    url: 'https://www.fizyoterapistenesarica.com',
    siteName: 'Uzman Fizyoterapist Enes Arıca',
    images: [
      {
        url: 'https://www.fizyoterapistenesarica.com/imgs/enes-arica.jpeg',
        width: 1200,
        height: 630,
        alt: 'Uzman Fizyoterapist Enes Arıca',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uzman Fizyoterapist Enes Arıca',
    description:
      'Bel fıtığı, boyun fıtığı, skolyoz, GTOS terapi, manuel terapi, klinik ve reformer pilates tedavisi.',
    images: ['https://www.fizyoterapistenesarica.com/imgs/enes-arica.jpeg'],
  },
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
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
