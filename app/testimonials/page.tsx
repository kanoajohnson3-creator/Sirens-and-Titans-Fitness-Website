import type { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Testimonials | Sirens & Titans Fitness',
  description:
    'Real results from real athletes and clients of Sirens & Titans Fitness in West Los Angeles.',
}

type Testimonial = {
  name: string
  detail: string
  quote: string
  image?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Jason D.',
    detail: 'Tennis · Rafa Nadal Academy',
    quote:
      'Jacques spent months personalizing my workouts for an injury free trip to the Rafa Nadal Academy in Spain. His ability to listen and share his wealth of knowledge is remarkable. There is no substitute for a great fitness and strength coach.',
    image: '/JasonRafa.webp',
  },
  {
    name: 'Patrick Murphy',
    detail: 'Dartmouth Soccer',
    quote:
      'After working with Jacques for 2 to 3 months I am the healthiest I have been in over 3 years. He is a genius who has a knowledge of the body unlike anybody I have ever worked with. He truly cares about his clients.',
    image: '/Patrick_Murphy.webp',
  },
  {
    name: 'Katherine Wood',
    detail: 'UCI Pro Mountain Bike Racer',
    quote:
      'I walked away from the US National Championship with a new threshold power 16% higher than where I was when we first began just six months earlier. I am proud to say the team at Sirens and Titans will continue to help me find and push new limits.',
    image: '/Katherine3.webp',
  },
  {
    name: 'Owen G.',
    detail: 'Harvard Lacrosse',
    quote:
      'During my Freshman season I was able to start in every game. I felt stronger quicker and more balanced than ever before. Jacques works tirelessly to help his clients improve.',
    image: '/Owen_G_Collage.webp',
  },
  {
    name: 'Luca Russo',
    detail: 'Pro Soccer · Italy',
    quote:
      'I went from a 235 pound hex bar deadlift to a 405 pound hex bar deadlift in one month. I also improved my 40 yard sprint from 4.65 to a low 4.5. Jacques brutal honesty has given me the confidence to achieve my goals.',
    image: '/Luca+Picture+1.webp',
  },
  {
    name: 'Toyo S.',
    detail: 'Golf',
    quote:
      'After three years the improvement in my golf game has been substantial. Driving distance improved from 240 to 265 yards. Iron distances, ball striking consistency and short game accuracy have all come around significantly.',
  },
  {
    name: 'Larry J.',
    detail: 'Golf',
    quote:
      'Since I started working with Sirens and Titans I am able to play pain free often multiple days in a row. This is the only gym where my wife never wants to miss a workout. If you are a golfer you owe it to yourself to check it out.',
  },
]

export default function TestimonialsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#080808]">
        {/* Hero */}
        <div className="h-64 bg-[#111111] flex items-end pb-12 border-b border-[#1E1E1E]">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <SectionLabel>Client Results</SectionLabel>
            <h1
              className="font-display text-white leading-none tracking-[0.03em]"
              style={{ fontSize: 'clamp(3rem, 9vw, 6rem)' }}
            >
              WHAT THEY SAY
            </h1>
          </div>
        </div>

        {/* Full testimonials grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-[#141414] p-8 border-t-2 border-[#4A7C26] flex flex-col"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4" aria-label="5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-[#4A7C26] text-sm" aria-hidden="true">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Full quote — no line-clamp */}
                  <p className="font-body italic text-sm text-white/80 leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Attribution */}
                  <div className="border-t border-[#1E1E1E] mt-6 pt-6 flex items-center gap-3">
                    {t.image && (
                      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={t.image}
                          alt={t.name}
                          fill
                          loading="lazy"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-body font-semibold text-white text-sm">{t.name}</p>
                      <p className="font-body text-[#888888] text-xs mt-1">{t.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Rating summary */}
            <div className="mt-16 pt-10 border-t border-[#1E1E1E] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-[#4A7C26] text-lg">★</span>
                ))}
                <span className="font-body text-xs text-[#888888] ml-2 tracking-wide">
                  5.0 · Google &amp; Yelp
                </span>
              </div>
              <p className="font-body text-xs text-[#888888]/50 tracking-wide">
                2242 S Sepulveda Blvd · Los Angeles, CA 90064
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
