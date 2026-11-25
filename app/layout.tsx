import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteTitle = 'Lírio dos Vales | Instituição de Ensino'
const siteDescription = 'Conheça o website institucional do Lírio dos Vales. Informações oficiais sobre a instituição, oferta educativa e matrículas serão publicadas após validação.'

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  applicationName: 'Lírio dos Vales',
  generator: 'Next.js',
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
    locale: 'pt_PT',
    siteName: 'Lírio dos Vales',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#f8f7f1',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
