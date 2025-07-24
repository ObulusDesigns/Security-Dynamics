import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RecaptchaBadge } from '@/components/ui/RecaptchaBadge';
import { SITE_CONFIG, TRACKING } from '@/lib/utils/constants';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://securitydynamicsinc.com'),
  title: SITE_CONFIG.defaultTitle,
  description: SITE_CONFIG.defaultDescription,
  keywords: SITE_CONFIG.defaultKeywords,
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon.ico' }
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'android-chrome', url: '/favicon_io/android-chrome-192x192.png' }
    ]
  },
  openGraph: {
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.defaultDescription,
    url: SITE_CONFIG.url,
    siteName: 'Security Dynamics Inc.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Security Dynamics Inc. - Advanced Security Solutions'},
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: SITE_CONFIG.url},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1}}};

export default function RootLayout({
  children}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} pb-16 lg:pb-0`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <RecaptchaBadge />
        
        {/* Google Analytics */}
        {TRACKING.googleAnalytics && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING.googleAnalytics}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${TRACKING.googleAnalytics}');
                `}}
            />
          </>
        )}
      </body>
    </html>
  );
}