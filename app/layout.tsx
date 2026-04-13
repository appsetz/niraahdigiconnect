import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Plus_Jakarta_Sans, Instrument_Serif } from 'next/font/google'
import './globals.css'
import SplashCursor from './components/ui/splash-cursor'
import { ThemeProvider } from './context/ThemeContext'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Niraah Digi Connect — Where Strategy Meets Measurable Growth',
  description: 'We build predictable systems that turn attention into revenue. Social media, Meta Ads, SEO, web development, branding, and more — growth-first digital marketing.',
  keywords: 'digital marketing agency, social media management, meta ads, SEO, website development, branding, Niraah Digi Connect',
  authors: [{ name: 'Niraah Digi Connect' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://niraahdigiconnect.com',
    siteName: 'Niraah Digi Connect',
    title: 'Niraah Digi Connect — Growth-First Digital Marketing',
    description: 'We don\'t sell random digital services. We build predictable systems that turn attention into revenue.',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${instrumentSerif.variable}`}>
      <body>
        <ThemeProvider>
          <SplashCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
