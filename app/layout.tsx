import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import FloatingCTA from '@/components/layout/FloatingCTA'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sirens & Titans Fitness | West Los Angeles',
  description:
    "West LA's premier private training facility. Science-based strength and conditioning for athletes and competitors at every level.",
  keywords: [
    'personal training West Los Angeles',
    'strength and conditioning West LA',
    'elite fitness training',
    'Sirens Titans Fitness',
    'Jacques DeVore',
  ],
  openGraph: {
    title: 'Sirens & Titans Fitness | West Los Angeles',
    description: 'Truth in Fitness. Premium training in West Los Angeles.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="bg-bg-primary font-body antialiased">
        {children}
        <FloatingCTA />
      </body>
    </html>
  )
}
