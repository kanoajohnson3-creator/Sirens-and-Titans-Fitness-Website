import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Personal Training | Sirens & Titans Fitness',
  description:
    'Private 1-on-1 training sessions built entirely around your body and your goals. West Los Angeles.',
}

export default function PersonalTrainingPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#080808]">
        {/* Hero */}
        <div className="h-64 bg-[#111111] flex items-end pt-24 pb-12 border-b border-[#1E1E1E]">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <SectionLabel>One on One</SectionLabel>
            <h1
              className="font-display text-white leading-none tracking-[0.03em]"
              style={{ fontSize: 'clamp(3rem, 9vw, 6rem)' }}
            >
              PERSONAL TRAINING
            </h1>
          </div>
        </div>

        {/* Main content */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left — photo */}
              <div className="relative min-h-[500px] overflow-hidden">
                <Image
                  src="/Clear%20Personal%20training%20Photo.webp"
                  alt="Personal training at Sirens & Titans Fitness"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Right — content */}
              <div className="flex flex-col justify-center">
                <SectionLabel>The Experience</SectionLabel>
                <h2
                  className="font-display text-white leading-none tracking-[0.03em] mb-8"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                  COACHED EVERY REP. EVERY SET. EVERY SESSION.
                </h2>
                <div className="space-y-4 font-body text-base text-white leading-relaxed tracking-wide">
                  <p>
                    One-on-one personal training at Sirens and Titans is built entirely around you.
                    Your goals, your body, your sport, your schedule. Nothing is generic. Nothing is
                    recycled from the last client.
                  </p>
                  <p>
                    Every session is written specifically for you by a certified strength and
                    conditioning specialist. You are coached through every rep, every set, and every
                    movement with precision and intent.
                  </p>
                </div>

                {/* Pricing */}
                <div className="bg-[#141414] p-8 mt-8 border-l-4 border-[#4A7C26]">
                  <SectionLabel>Investment</SectionLabel>
                  <h3
                    className="font-display text-white leading-none tracking-[0.03em] mt-4"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
                  >
                    PRICING
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    {/* Card 1 */}
                    <div className="bg-[#1a1a1a] p-6">
                      <SectionLabel>Strength &amp; Conditioning</SectionLabel>
                      <div className="mt-4">
                        <span
                          className="font-display text-[#4A7C26] leading-none"
                          style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)' }}
                        >
                          $185
                        </span>
                        <span className="font-body text-base text-white ml-2">per hour</span>
                      </div>
                      <p className="font-body text-base text-white leading-relaxed mt-3">
                        One on one personal training with one of our certified strength and
                        conditioning coaches.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#1a1a1a] p-6 border border-[#4A7C26]">
                      <SectionLabel>With Jacques DeVore</SectionLabel>
                      <span className="inline-block mt-2 rounded-full bg-[#4A7C26]/20 text-[#4A7C26] text-[10px] px-3 py-1 font-medium" style={{ letterSpacing: '0.1em' }}>
                        FOUNDER &amp; HEAD COACH
                      </span>
                      <div className="mt-4">
                        <span
                          className="font-display text-[#4A7C26] leading-none"
                          style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)' }}
                        >
                          $250
                        </span>
                        <span className="font-body text-base text-white ml-2">per hour</span>
                      </div>
                      <p className="font-body text-base text-white leading-relaxed mt-3">
                        One on one personal training and nutritional coaching directly with Jacques
                        DeVore, CSCS. The complete coaching experience.
                      </p>
                    </div>
                  </div>

                  <p className="font-body text-sm text-white italic mt-4">
                    All new clients begin with a full evaluation before their first session. No
                    exceptions.
                  </p>
                </div>
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
              Every client begins with a full evaluation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
              <Link
                href="/contact"
                className="font-body text-sm font-medium uppercase bg-[#4A7C26] hover:bg-[#3D6B1E] text-white px-10 py-4 transition-colors duration-200"
                style={{ letterSpacing: '0.15em' }}
              >
                Book Your Evaluation →
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
