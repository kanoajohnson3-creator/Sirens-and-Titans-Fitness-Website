import type { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import WellnessLivingLeadCapture from '@/components/ui/WellnessLivingLeadCapture'

export const metadata: Metadata = {
  title: 'Book Your Evaluation | Sirens & Titans Fitness',
  description:
    'Every new client begins with a full evaluation. No exceptions. Book yours at Sirens & Titans Fitness, West Los Angeles.',
}

const WELLNESS_URL = 'https://www.wellnessliving.com/login/sirens_and_titans_fitness'

const expectations = [
  'Full movement and fitness evaluation',
  'Discussion of your specific goals',
  'Personalized program design',
  'No generic workouts. Ever.',
]

const facilityPhotos = [
  { src: '/Gym+photos1.webp', alt: 'Main weight room' },
  { src: '/Gym+photos2.webp', alt: 'VersaClimber FUBAR training room' },
  { src: '/Gym+photos3.webp', alt: 'Reformer and Pilates equipment room' },
  { src: '/Gym+photos4.webp', alt: 'Turf performance training area' },
]

export default function ContactPage() {
  return (
    <>
      <div style={{height: '80px'}} />
      <Navigation />
      <main className="bg-[#080808]">
        {/* Hero */}
        <div className="h-64 bg-[#111111] flex items-end pt-32 pb-12 border-b border-[#1E1E1E]">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <SectionLabel>Get Started</SectionLabel>
            <h1
              className="font-display text-white leading-none tracking-[0.03em]"
              style={{ fontSize: 'clamp(3rem, 9vw, 5.5rem)' }}
            >
              BOOK YOUR EVALUATION
            </h1>
            <p className="font-body text-base text-white mt-3 tracking-wide">
              Every new client begins with a full evaluation. No exceptions.
            </p>
          </div>
        </div>

        {/* Two-column section */}
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left — lead capture widget (spans 2 cols) */}
            <div className="lg:col-span-2">
              <div className="w-full">
                <SectionLabel>Start Your Journey</SectionLabel>
                <p className="font-body text-base text-white mt-2 mb-8 leading-relaxed tracking-wide">
                  Fill out the form below and we will be in touch within 24 hours to schedule your
                  evaluation.
                </p>
                <WellnessLivingLeadCapture />
              </div>

              <p className="font-body text-sm text-white mt-4">
                Prefer to sign up directly?{' '}
                <a
                  href="https://www.wellnessliving.com/rs/lead-add.html?k_business=355996&k_skin=363811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4A7C26] hover:underline"
                >
                  Click here to submit your information →
                </a>
              </p>
            </div>

            {/* Right — contact info */}
            <div className="lg:col-span-1">
              <div className="bg-[#141414] p-8 sticky top-28">
                <SectionLabel>Contact</SectionLabel>

                <div className="mt-6 space-y-6">
                  {/* Phone */}
                  <div>
                    <p
                      className="font-body text-[10px] font-medium uppercase text-white mb-1"
                      style={{ letterSpacing: '0.2em' }}
                    >
                      Phone
                    </p>
                    <a
                      href="tel:+13103070200"
                      className="font-display text-white leading-none tracking-[0.04em] hover:text-[#4A7C26] transition-colors duration-200"
                      style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
                    >
                      310-307-0200
                    </a>
                  </div>

                  {/* Location */}
                  <div>
                    <p
                      className="font-body text-[10px] font-medium uppercase text-white mb-1"
                      style={{ letterSpacing: '0.2em' }}
                    >
                      Location
                    </p>
                    <p className="font-body text-base text-white">2242 S Sepulveda Blvd</p>
                    <p className="font-body text-base text-white">Los Angeles, CA 90064</p>
                    <p className="font-body text-sm text-white mt-0.5">By appointment only</p>
                  </div>

                  {/* Hours */}
                  <div>
                    <p
                      className="font-body text-[10px] font-medium uppercase text-white mb-3"
                      style={{ letterSpacing: '0.2em' }}
                    >
                      Hours
                    </p>
                    <div className="flex flex-col gap-2">
                      {[
                        { days: 'Mon – Thu', time: '5:50 am – 6:45 pm' },
                        { days: 'Friday', time: '6:00 am – 3:00 pm' },
                        { days: 'Saturday', time: '8:00 am – 12:00 pm' },
                        { days: 'Sunday', time: 'Closed' },
                      ].map((h) => (
                        <div key={h.days} className="flex items-center justify-between gap-2">
                          <span className="font-body text-base font-medium text-white">{h.days}</span>
                          <span className="font-body text-base text-white">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#1E1E1E] my-6" />

                <SectionLabel>What to Expect</SectionLabel>
                <ul className="mt-3 space-y-3">
                  {expectations.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-[#4A7C26] flex-shrink-0 mt-2" />
                      <span className="font-body text-base text-white">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-[#1E1E1E] my-6" />

                {/* Facility photo gallery */}
                <SectionLabel>The Facility</SectionLabel>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {facilityPhotos.map(({ src, alt }) => (
                    <div key={src} className="relative aspect-[4/3] rounded-sm overflow-hidden">
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        loading="lazy"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#1E1E1E] my-6" />

                <a
                  href={WELLNESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center font-body text-sm font-medium uppercase border border-[#1E1E1E] hover:border-[#4A7C26] text-white hover:text-white py-3 transition-colors duration-200"
                  style={{ letterSpacing: '0.15em' }}
                >
                  Sign In to WellnessLiving →
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
