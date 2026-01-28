import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Niraah Digi Connect - Performance Marketing & Strategic Growth',
  description: 'Helping brands, personal brands, and institutes grow through Meta Ads, social media, and data-driven strategy.',
  keywords: 'Meta Ads, Facebook Ads, Instagram Marketing, Digital Marketing, Social Media Growth, Performance Marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.variable}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}

