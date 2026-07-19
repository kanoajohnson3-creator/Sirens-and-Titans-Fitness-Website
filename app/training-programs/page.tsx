import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Elite Group Training | Sirens & Titans Fitness',
  description:
    'High end personal training in a group setting. Individual programs, 7 clients per coach, coached every rep. West Los Angeles.',
}

const features = [
  '7 clients per coach',
  'Individual program for every individual',
  'Coached and corrected every rep',
  'Programs updated and progressed continuously',
  'Sport specific training available',
  'All fitness levels welcome',
]

const steps = [
  {
    number: '01',
    title: 'EVALUATION',
    body: 'Every new individual begins with a full movement and fitness evaluation before their first group session.',
  },
  {
    number: '02',
    title: 'PROGRAM DESIGN',
    body: 'Your individual program is built based on your evaluation results, goals, and sport demands — whether you are an athlete or not.',
  },
  {
    number: '03',
    title: 'COACHED TRAINING',
    body: 'Train in a group of 7 or fewer individuals, each on their own program, coached the entire session.',
  },
]

export default function TrainingProgramsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#080808]">
        {/* Hero */}
        <div className="h-64 bg-[#111111] flex items-end pb-12 border-b border-[#1E1E1E]">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <SectionLabel>Small Group · Big Results</SectionLabel>
            <h1
              className="font-display text-white leading-none tracking-[0.03em]"
              style={{ fontSize: 'clamp(3rem, 9vw, 6rem)' }}
            >
              ELITE GROUP TRAINING
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
              HIGH END PERSONAL TRAINING IN A GROUP
            </h2>
            <p className="font-body text-base text-white mt-4 max-w-2xl mx-auto leading-relaxed tracking-wide">
              All the precision of one on one coaching at a fraction of the cost. 7 clients per
              coach.
            </p>
          </div>
        </div>

        {/* Main content */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left — content */}
              <div className="flex flex-col justify-center">
                <SectionLabel>How It Works</SectionLabel>
                <h2
                  className="font-display text-white leading-none tracking-[0.03em] mb-8"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                  INDIVIDUAL PROGRAMS. GROUP ENERGY.
                </h2>
                <div className="space-y-4 font-body text-base text-white leading-relaxed tracking-wide">
                  <p>
                    Elite Group Training at Sirens and Titans is not a group class. Every individual in
                    the session trains on their own individually designed program, built specifically
                    for their goals, their sport, and their body. You train alongside others but
                    never do the same workout as the person next to you.
                  </p>
                  <p>
                    7 clients per coach. This keeps the coaching quality high
                    and ensures every individual receives real attention, real corrections, and real
                    results every single session.
                  </p>
                  <p>
                    This is the closest thing to private training available in a group setting. If
                    you are serious about your performance and want elite coaching without the one on
                    one price tag, this is your program.
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
                  Book Your Evaluation →
                </Link>
              </div>

              {/* Right — photo */}
              <div className="relative min-h-[500px] overflow-hidden">
                <Image
                  src="/Gym+photos1.webp"
                  alt="Elite Group Training at Sirens & Titans Fitness"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </div>
          </div>
        </section>

        {/* What to expect */}
        <section className="bg-[#141414] py-20">
          <div className="max-w-7xl mx-auto px-6">
            <SectionLabel>What to Expect</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
              {steps.map((step) => (
                <div key={step.number}>
                  <span
                    className="font-display text-[#4A7C26] leading-none block"
                    style={{ fontSize: 'clamp(3rem, 6vw, 4rem)' }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="font-display text-white leading-none tracking-[0.04em] mt-3"
                    style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="font-body text-base text-white leading-relaxed tracking-wide mt-3">
                    {step.body}
                  </p>
                </div>
              ))}
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
                <span className="font-body text-sm text-[#888888] uppercase" style={{ letterSpacing: '0.2em' }}>
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
