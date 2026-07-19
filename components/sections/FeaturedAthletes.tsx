'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const athletes = [
  {
    badge: 'HYROX WORLD CHAMPION',
    name: 'HUNTER McINTYRE',
    sport: 'Two-Time HYROX World Champion',
    quote:
      'We have had the privilege of training Hunter to excel as a world class obstacle course and endurance athlete. Congratulations on his second place finish at the 2025 HYROX World Championships.',
    image: '/Hunter-McIntyre-HYROX-World-Championships-Run-2.webp',
  },
  {
    badge: '6X USA TIME TRIAL CHAMPION',
    name: 'DAVID ZABRISKIE',
    sport: 'Professional Cyclist · 7x Tour de France',
    quote:
      'Jacques presented a unique method with an impressive understanding of the underlying physiology. I saw an improvement almost immediately. My power improved dramatically.',
    image: '/David%20Z.webp',
  },
  {
    badge: 'PRO MTB CYCLIST',
    name: 'KATHERINE WOOD',
    sport: 'UCI Pro Mountain Bike Racer',
    quote:
      '16% threshold power increase in 6 months. The work Jacques and his team put in has translated to higher steadier output and an overall improvement in my ability to trust my strength.',
    image: '/Katherine3.webp',
  },
]

export default function FeaturedAthletes() {
  return (
    <section id="athletes" className="bg-[#080808] py-36">
      {/* ── Section header ── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-px bg-[#4A7C26]" />
          <span
            className="font-body text-sm font-medium uppercase text-[#4A7C26]"
            style={{ letterSpacing: '0.2em' }}
          >
            Client Results
          </span>
        </div>

        <h2
          className="font-display text-white leading-none tracking-[0.03em]"
          style={{ fontSize: 'clamp(2.25rem, 6vw, 3.75rem)' }}
        >
          ATHLETES AND INDIVIDUALS WE HAVE HELPED BUILD
        </h2>
      </div>

      {/* ── Card grid ── */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {athletes.map((athlete, i) => (
            <motion.div
              key={athlete.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-[#141414] overflow-hidden group cursor-pointer"
            >
              {/* ── Image area ── */}
              <div className="aspect-[3/2] relative overflow-hidden">
                <Image
                  src={athlete.image}
                  alt={athlete.name}
                  fill
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* ── Card body ── */}
              <div className="p-6">
                {/* Badge pill */}
                <span className="rounded-full bg-[#4A7C26]/20 text-[#4A7C26] text-sm px-3 py-1 font-medium inline-block tracking-wide">
                  {athlete.badge}
                </span>

                {/* Name */}
                <h3 className="font-display text-3xl text-white mt-3 leading-none tracking-[0.04em]">
                  {athlete.name}
                </h3>

                {/* Sport credential */}
                <p className="font-body text-base text-[#888888] mt-1 tracking-wide">
                  {athlete.sport}
                </p>

                {/* Pull quote */}
                <p className="font-body italic text-base text-white/70 mt-3 leading-relaxed line-clamp-3">
                  &ldquo;{athlete.quote}&rdquo;
                </p>

                {/* Read Story link */}
                <span className="text-[#4A7C26] text-base font-medium mt-4 inline-flex items-center gap-2 hover:gap-3 transition-all duration-200 group/link">
                  Read Story
                  <span
                    className="transition-transform duration-200 group-hover/link:translate-x-0.5"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
