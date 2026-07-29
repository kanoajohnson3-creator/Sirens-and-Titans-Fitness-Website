'use client'

import Image from 'next/image'

type Testimonial = {
  name: string
  detail: string
  quote: string
  image?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Toyo S.',
    detail: 'Golf Performance',
    quote:
      'After three years the improvement in my golf game has been substantial. Driving distance improved from 240 to 265 yards. Iron distances ball striking consistency and short game accuracy have all come around significantly.',
  },
  {
    name: 'Larry J.',
    detail: 'Golf · Pain Elimination',
    quote:
      'Since I started working with Sirens and Titans I am able to play pain free often multiple days in a row. This is the only gym where my wife never wants to miss a workout.',
  },
  {
    name: 'Randy P.',
    detail: 'Competitive Cyclist',
    quote:
      'The Sirens and Titans program has enabled me to recover power and endurance I thought I had lost ten years ago. I am making these gains with two intense thirty minute workouts a week. I honestly feel like I have rolled the clock back.',
  },
  {
    name: 'Maggie O.',
    detail: 'Body Recomposition · Busy Mom',
    quote:
      'The beauty of S&TF is that my kick ass core building muscle toning heart pumping workout is done in just half an hour and I achieve better results than running stairs or doing yoga for an hour.',
  },
  {
    name: 'Paul H.',
    detail: 'Cycling · Age 73',
    quote:
      'I won the 65 plus age group in my annual 20 mile race. I beat the cyclist who has won the last four years and he is 69 and I am 73. I came 6th overall out of 333 cyclists.',
  },
  {
    name: 'Laura C.',
    detail: 'Elite Runner · Triathlete',
    quote:
      'As an elite runner I think of myself as a highly conditioned athlete. After my first workout on the VersaClimber at S&TF I was humbled. This fitness center has seriously changed the way I train and look at fitness.',
  },
  {
    name: 'Dan K.',
    detail: 'Cycling · Pain Elimination',
    quote:
      'I was able to ski free of pain for the first time in 2 years. Towards the end of 3 months I noticed I was climbing stronger spinning with more power and running faster.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-[#0D0D0D] py-36">
      {/* ── Section header ── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-px bg-[#4A7C26]" />
          <span
            className="font-body text-sm font-medium uppercase text-[#4A7C26]"
            style={{ letterSpacing: '0.2em' }}
          >
            What They Say
          </span>
        </div>

        <h2
          className="font-display text-white leading-none tracking-[0.03em]"
          style={{ fontSize: 'clamp(2.25rem, 6vw, 3.75rem)' }}
        >
          IN THEIR OWN WORDS
        </h2>
      </div>

      {/* ── Horizontal scroll row ── */}
      <div className="mt-16 overflow-x-auto scrollbar-none snap-x snap-mandatory">
        <div className="flex gap-6 pb-4 px-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="snap-start shrink-0 w-[380px] bg-[#141414] p-8 border-t-2 border-[#4A7C26] flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-[#4A7C26] text-base" aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-body italic text-base text-white leading-relaxed line-clamp-5 flex-1">
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
                  <p className="font-body font-semibold text-white text-base">{t.name}</p>
                  <p className="font-body text-white text-sm mt-1">{t.detail}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Trailing spacer so last card doesn't flush against viewport edge */}
          <div className="shrink-0 w-6" aria-hidden="true" />
        </div>
      </div>

      {/* ── View all link ── */}
      <div className="flex justify-end mt-6">
        <a
          href="/testimonials"
          className="text-[#4A7C26] text-base font-medium mr-6 inline-flex items-center gap-2 hover:gap-3 transition-all duration-200 group"
        >
          View All Testimonials
          <span
            className="transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            →
          </span>
        </a>
      </div>
    </section>
  )
}
