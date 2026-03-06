// /app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import 'leaflet/dist/leaflet.css'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://veginn.rw'),
  title: {
    default: 'VegInn - Agricultural Value Chain Solutions in Rwanda',
    template: '%s | VegInn'
  },
  description: 'VegInn strengthens Rwanda\'s vegetable value chain through professional post-harvest handling and structured market access for smallholder farmers.',
  keywords: [
    'VegInn',
    'Rwanda agriculture',
    'vegetable value chain',
    'smallholder farmers',
    'agricultural aggregation',
    'Rwanda vegetables',
    'post-harvest handling',
    'market access',
    'fresh produce Rwanda',
    'agricultural innovation'
  ],
  authors: [{ name: 'VegInn' }],
  creator: 'VegInn',
  publisher: 'VegInn',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_RW',
    url: 'https://veginn.rw',
    siteName: 'VegInn',
    title: 'VegInn - Agricultural Value Chain Solutions in Rwanda',
    description: 'VegInn strengthens Rwanda\'s vegetable value chain through professional post-harvest handling and structured market access for smallholder farmers.',
    images: [
      {
        url: '/vegetables-1.png',
        width: 1200,
        height: 630,
        alt: 'VegInn - Fresh Vegetables from Rwanda',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VegInn - Agricultural Value Chain Solutions in Rwanda',
    description: 'VegInn strengthens Rwanda\'s vegetable value chain through professional post-harvest handling and structured market access.',
    images: ['/vegetables-1.png'],
    creator: '@veginn',
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
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VegInn',
    url: 'https://veginn.rw',
    logo: 'https://veginn.rw/icon.svg',
    description: 'VegInn strengthens Rwanda\'s vegetable value chain through professional post-harvest handling and structured market access for smallholder farmers.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'RW',
      addressLocality: 'Kigali',
    },
    sameAs: [
      'https://twitter.com/veginn',
      'https://linkedin.com/company/veginn',
    ],
  }

  return (
    <html lang="en">
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
