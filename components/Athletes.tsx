'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const athletes = [
  {
    badge: 'HYROX WORLD CHAMPION',
    name: 'HUNTER McINTYRE',
    sport: 'Two-Time HYROX World Champion',
    quote:
      'We have had the privilege of training Hunter to excel as a world class obstacle course and endurance athlete.',
    gradient: 'from-[#1c1a10] via-[#14120a] to-[#0c0b06]',
    badgeColor: 'gold',
  },
  {
    badge: '6X USA TIME TRIAL CHAMPION',
    name: 'DAVID ZABRISKIE',
    sport: 'Professional Cyclist · 7x Tour de France',
    quote:
      'Jacques presented a unique method with an impressive understanding of the underlying physiology at play.',
    gradient: 'from-[#0e1a0a] via-[#0a1408] to-[#070d05]',
    badgeColor: 'green',
  },
  {
    badge: 'PRO MTB CYCLIST',
    name: 'KATHERINE WOOD',
    sport: 'UCI Pro Mountain Bike Racer',
    quote:
      '16% threshold power increase in 6 months. The work Jacques puts in has translated to higher steadier output.',
    gradient: 'from-[#141418] via-[#101012] to-[#0c0c0e]',
    badgeColor: 'gold',
  },
]

export default function Athletes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="athletes" ref={ref} className="bg-bg-primary py-24 md:py-36">
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
              Elite Athletes
            </span>
          </motion.div>

          <div className="overflow-hidden">
            {['OUR', 'ATHLETES.'].map((line, i) => (
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

        {/* Athletes grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-subtle">
          {athletes.map((athlete, i) => (
            <motion.div
              key={athlete.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2 + i * 0.12 }}
              className="bg-bg-card group overflow-hidden"
            >
              {/* Visual area */}
              <div
                className={`relative h-64 md:h-72 bg-gradient-to-b ${athlete.gradient} overflow-hidden`}
              >
                {/* Subtle grid texture */}
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.3) 39px, rgba(255,255,255,0.3) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.3) 39px, rgba(255,255,255,0.3) 40px)`,
                  }}
                />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`font-body text-[9px] font-medium tracking-[0.3em] uppercase px-3 py-1.5 ${
                      athlete.badgeColor === 'gold'
                        ? 'bg-gold text-bg-primary'
                        : 'bg-accent-green-light text-text-primary'
                    }`}
                  >
                    {athlete.badge}
                  </span>
                </div>

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-bg-card to-transparent">
                  <div
                    className={`w-8 h-0.5 mb-3 transition-all duration-500 group-hover:w-14 ${
                      athlete.badgeColor === 'gold' ? 'bg-gold' : 'bg-accent-green-light'
                    }`}
                  />
                  <h3
                    className="font-display text-text-primary leading-none tracking-[0.05em]"
                    style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)' }}
                  >
                    {athlete.name}
                  </h3>
                  <p className="font-body text-[10px] font-medium tracking-[0.2em] text-text-secondary/60 uppercase mt-1.5">
                    {athlete.sport}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="p-6 md:p-8 border-t border-border-subtle">
                <span
                  className={`font-display text-4xl leading-none block mb-3 ${
                    athlete.badgeColor === 'gold' ? 'text-gold/20' : 'text-accent-green-light/20'
                  } group-hover:opacity-60 transition-opacity duration-500`}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="font-body text-sm font-light text-text-secondary/80 leading-relaxed tracking-wide italic">
                  {athlete.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
