import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'VersaClimber FUBAR | Sirens & Titans Fitness',
  description:
    '30 minutes. Maximum output. The world\'s best cardio machine, coached in a group of 7. Jacques DeVore holds the unofficial VersaClimber world mile record.',
}

const features = [
  'Maximum 7 athletes per class',
  'Coached the entire session',
  '30 minutes total',
  'Zero impact on joints',
  'Full body cardiovascular training',
  'Tracked and progressed every class',
]

export default function VersaclimberFubarPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#080808]">
        {/* Hero */}
        <div className="h-64 bg-[#111111] flex items-end pb-12 border-b border-[#1E1E1E]">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <SectionLabel>Signature Class</SectionLabel>
            <h1
              className="font-display text-white leading-none tracking-[0.03em]"
              style={{ fontSize: 'clamp(3rem, 9vw, 6rem)' }}
            >
              VERSACLIMBER FUBAR
            </h1>
          </div>
        </div>

        {/* Subheadline */}
        <div className="bg-[#0D0D0D] py-12 text-center border-b border-[#1E1E1E]">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="font-display text-white leading-none tracking-[0.03em]"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
            >
              30 MINUTES. MAXIMUM OUTPUT.
            </h2>
            <p className="font-body text-sm text-[#888888] mt-4 max-w-2xl mx-auto leading-relaxed tracking-wide">
              The world&apos;s best cardio machine, coached in a group of 7. Jacques DeVore holds
              the unofficial VersaClimber world mile record.
            </p>
          </div>
        </div>

        {/* Main content */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left — content */}
              <div className="flex flex-col justify-center">
                <SectionLabel>What Is FUBAR</SectionLabel>
                <h2
                  className="font-display text-white leading-none tracking-[0.03em] mb-8"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                  THE HARDEST 30 MINUTES IN FITNESS
                </h2>
                <div className="space-y-4 font-body text-sm text-[#888888] leading-relaxed tracking-wide">
                  <p>
                    FUBAR is Sirens and Titans&apos; signature VersaClimber class. 30 minutes of
                    coached, high intensity interval training on the VersaClimber — widely regarded
                    as the most effective cardio machine ever built. No impact. Total body. Maximum
                    output.
                  </p>
                  <p>
                    The class is capped at 7 athletes and coached the entire session. You will be
                    pushed to your actual limit, tracked, and progressed every class.
                  </p>
                  <p>
                    Jacques DeVore holds the unofficial world record for a mile on the
                    VersaClimber. He built FUBAR around the same principles that got him there.
                  </p>
                </div>

                {/* Feature list */}
                <ul className="space-y-3 mt-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="text-[#4A7C26] font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span className="font-body text-sm text-white">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-block mt-10 font-body text-xs font-medium uppercase bg-[#4A7C26] hover:bg-[#3D6B1E] text-white px-8 py-3 transition-colors duration-200"
                  style={{ letterSpacing: '0.15em' }}
                >
                  Try Your First Class →
                </Link>
              </div>

              {/* Right — photo */}
              <div className="relative min-h-[500px] overflow-hidden">
                <Image
                  src="/Gym+photos2.webp"
                  alt="VersaClimber FUBAR training room at Sirens & Titans Fitness"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <div className="bg-[#0D0D0D] py-16 text-center">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="font-display text-white leading-none tracking-[0.03em]"
              style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
            >
              READY TO CLIMB?
            </h2>
            <p className="font-body text-sm text-[#888888] mt-4">
              30 minutes. Maximum effort. Real results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
              <Link
                href="/contact"
                className="font-body text-xs font-medium uppercase bg-[#4A7C26] hover:bg-[#3D6B1E] text-white px-10 py-4 transition-colors duration-200"
                style={{ letterSpacing: '0.15em' }}
              >
                Try Your First Class →
              </Link>
              <div className="flex flex-col items-center gap-1">
                <span className="font-body text-xs text-[#888888] uppercase" style={{ letterSpacing: '0.2em' }}>
                  Or call us directly
                </span>
                <a
                  href="tel:3103070200"
                  className="font-display text-3xl text-white hover:text-[#4A7C26] transition-colors duration-200 leading-none tracking-[0.04em]"
                >
                  310-307-0200
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
