import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Distance Coaching | Sirens & Titans Fitness',
  description:
    'Remote one-on-one coaching from Jacques DeVore and the S&T staff. The same individualized, evidence-based programming — wherever you are in the world.',
}

const features = [
  'Fully individualized remote program',
  'Continuous program updates and adjustments',
  'Direct communication with your coach',
  'Available for all sports and fitness goals',
  'Same methodology as in-person training',
]

export default function DistanceCoachingPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#080808]">
        {/* Hero */}
        <div className="h-64 bg-[#111111] flex items-end pt-24 pb-12 border-b border-[#1E1E1E]">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <SectionLabel>Remote Coaching</SectionLabel>
            <h1
              className="font-display text-white leading-none tracking-[0.03em]"
              style={{ fontSize: 'clamp(3rem, 9vw, 6rem)' }}
            >
              DISTANCE COACHING
            </h1>
          </div>
        </div>

        {/* Main content */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left — content */}
              <div className="flex flex-col justify-center">
                <SectionLabel>Train With Us Anywhere</SectionLabel>
                <h2
                  className="font-display text-white leading-none tracking-[0.03em] mb-8"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                  WORLD CLASS COACHING. WHEREVER YOU ARE.
                </h2>
                <div className="space-y-4 font-body text-base text-white leading-relaxed tracking-wide">
                  <p>
                    For athletes and clients outside the West Los Angeles area, Jacques and the
                    Sirens and Titans coaching staff deliver the same individualized, evidence-based
                    programming remotely. The distance between us does not change the quality of
                    your program.
                  </p>
                  <p>
                    Every distance coaching client receives a fully customized program built around
                    their specific goals, their available equipment, and their schedule. Programs are
                    updated and adjusted continuously based on your progress and feedback — the same
                    process as our in-person clients.
                  </p>
                  <p>
                    Jacques has coached world record holders, professional athletes, and competitive
                    amateurs remotely. Distance is not a barrier to elite coaching.
                  </p>
                </div>

                {/* Feature list */}
                <ul className="space-y-3 mt-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="text-[#4A7C26] font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span className="font-body text-base text-white">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-block mt-10 font-body text-sm font-medium uppercase bg-[#4A7C26] hover:bg-[#3D6B1E] text-white px-8 py-3 transition-colors duration-200"
                  style={{ letterSpacing: '0.15em' }}
                >
                  Start Distance Coaching →
                </Link>
              </div>

              {/* Right — photo */}
              <div className="relative min-h-[500px] overflow-hidden">
                <Image
                  src="/Jacques%20Misc%20Photo.webp"
                  alt="Jacques DeVore coaching"
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
              READY TO START?
            </h2>
            <p className="font-body text-base text-white mt-4">
              Book a consultation and we&apos;ll build your program from anywhere in the world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
              <Link
                href="/contact"
                className="font-body text-sm font-medium uppercase bg-[#4A7C26] hover:bg-[#3D6B1E] text-white px-10 py-4 transition-colors duration-200"
                style={{ letterSpacing: '0.15em' }}
              >
                Book a Consultation →
              </Link>
              <div className="flex flex-col items-center gap-1">
                <span className="font-body text-sm text-white uppercase" style={{ letterSpacing: '0.2em' }}>
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
