import type { Metadata } from 'next'
import '../styles/globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Harmony Engineering — The New Standard for Home Management',
  description:
    'Industrial engineering principles applied to household management. SOPs, systems thinking, and operational flow for modern families.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Harmony Engineering',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
