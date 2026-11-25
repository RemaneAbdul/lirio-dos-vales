import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteTitle = 'Escola Privada Lírio dos Vales | Educação em Matola'
const siteDescription = 'Educação nacional da pré-primária à 6.ª classe, num ambiente apropriado, seguro e acolhedor. Conheça a Escola Privada Lírio dos Vales, em Tchumene II, Matola.'

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  applicationName: 'Lírio dos Vales',
  generator: 'Next.js',
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
    locale: 'pt_MZ',
    siteName: 'Lírio dos Vales',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: '/icon.svg',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#f3c92f',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-MZ">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
