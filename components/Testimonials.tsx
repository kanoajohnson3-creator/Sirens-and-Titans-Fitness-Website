'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Jacques spent months personalizing my workouts for an injury free trip to the Rafa Nadal Academy in Spain. His ability to listen and share his knowledge is remarkable.',
    name: 'Jason D.',
    sport: 'Tennis',
  },
  {
    quote:
      'After working with Jacques for 2-3 months I am the healthiest I have been in over 3 years. He is a genius who has a knowledge of the body unlike anybody I have ever worked with.',
    name: 'Patrick Murphy',
    sport: 'Dartmouth Soccer',
  },
  {
    quote:
      'I walked away from the US National Championship with a new threshold power 16% higher than where I was when we first began just six months earlier.',
    name: 'Katherine Wood',
    sport: 'Pro Cyclist',
  },
  {
    quote:
      'During my Freshman season I was able to start in every game. I felt stronger quicker and more balanced than ever before.',
    name: 'Owen G.',
    sport: 'Harvard Lacrosse',
  },
  {
    quote:
      'I went from a 235 pound hex bar deadlift to a 405 pound hex bar deadlift in one month. I also improved my 40 yard sprint from 4.65 to a low 4.5.',
    name: 'Luca Russo',
    sport: 'Pro Soccer · Italy',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="bg-bg-secondary py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-px bg-gold" />
            <span className="font-body text-[10px] font-medium tracking-[0.3em] text-gold uppercase">
              Member Results
            </span>
          </motion.div>

          <div className="overflow-hidden">
            {['WHAT THEY', 'SAY.'].map((line, i) => (
              <motion.div
                key={line}
                initial={{ y: '110%' }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.05 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <h2
                  className="font-display text-text-primary leading-[0.9] tracking-[0.03em]"
                  style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
                >
                  {line}
                </h2>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-subtle mb-px">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} isInView={isInView} />
          ))}
        </div>

        {/* Bottom row: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-subtle">
          {testimonials.slice(3).map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i + 3} isInView={isInView} />
          ))}
        </div>

        {/* Rating bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 pt-10 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-gold text-lg leading-none">★</span>
            ))}
            <span className="font-body text-xs font-medium text-text-secondary ml-2 tracking-wide">
              5.0 · Google &amp; Yelp
            </span>
          </div>
          <p className="font-body text-xs font-light text-text-secondary/50 tracking-wide">
            Appointment Only · West Los Angeles
          </p>
        </motion.div>
      </div>
    </section>
  )
}

type Testimonial = { quote: string; name: string; sport: string }

function TestimonialCard({
  t,
  i,
  isInView,
}: {
  t: Testimonial
  i: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.2 + i * 0.1 }}
      className="bg-bg-card p-8 md:p-10 flex flex-col justify-between group"
    >
      <div>
        <span
          className="font-display text-5xl text-gold/15 leading-none block mb-4 group-hover:text-gold/35 transition-colors duration-500"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <p className="font-body text-sm font-light text-text-primary/80 leading-relaxed tracking-wide">
          {t.quote}
        </p>
      </div>
      <div className="mt-8 pt-5 border-t border-border-subtle flex items-end justify-between">
        <div>
          <p className="font-body text-sm font-medium text-text-primary tracking-wide">{t.name}</p>
          <p className="font-body text-[10px] font-light text-text-secondary/50 tracking-[0.2em] uppercase mt-1">
            {t.sport}
          </p>
        </div>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, j) => (
            <span key={j} className="text-gold/40 text-sm">★</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
