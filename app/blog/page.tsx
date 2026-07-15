import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Jacques Blog | Sirens & Titans Fitness',
  description:
    'In-depth training insights, health philosophy, and coaching content from Jacques DeVore.',
}

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#080808] min-h-screen">
        {/* Hero */}
        <div className="h-64 bg-[#111111] flex items-end pb-12 border-b border-[#1E1E1E]">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <SectionLabel>Jacques DeVore</SectionLabel>
            <h1
              className="font-display text-white leading-none tracking-[0.03em]"
              style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}
            >
              JACQUES BLOG
            </h1>
          </div>
        </div>

        {/* Coming soon */}
        <div className="max-w-2xl mx-auto px-6 mt-24 mb-24">
          <div className="bg-[#141414] p-12 text-center border-t-2 border-[#4A7C26]">
            <h2 className="font-display text-3xl text-white tracking-[0.06em]">COMING SOON</h2>
            <p className="font-body text-sm text-[#888888] mt-4 leading-relaxed">
              Jacques will be sharing in-depth training insights, health philosophy, and coaching
              content here soon. In the meantime follow along on Substack.
            </p>
            <a
              href="https://sirensandtitansfitness.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 font-body text-xs font-medium uppercase bg-[#4A7C26] hover:bg-[#3D6B1E] text-white px-8 py-3 transition-colors duration-200"
              style={{ letterSpacing: '0.15em' }}
            >
              Follow on Substack →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
