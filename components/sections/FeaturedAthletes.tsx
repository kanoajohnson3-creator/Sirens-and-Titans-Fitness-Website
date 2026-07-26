'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const athletes = [
  {
    slug: 'hunter-mcintyre',
    badge: 'HYROX WORLD CHAMPION',
    name: 'HUNTER McINTYRE',
    sport: 'Two-Time HYROX World Champion',
    quote:
      'We have had the privilege of training Hunter to excel as a world class obstacle course and endurance athlete. Congratulations on his second place finish at the 2025 HYROX World Championships.',
    image: '/Hunter-McIntyre-HYROX-World-Championships-Run-2.webp',
  },
  {
    slug: 'david-zabriskie',
    badge: '6X USA TIME TRIAL CHAMPION',
    name: 'DAVID ZABRISKIE',
    sport: 'Professional Cyclist · 7x Tour de France',
    quote:
      'Jacques presented a unique method with an impressive understanding of the underlying physiology. I saw an improvement almost immediately. My power improved dramatically.',
    image: '/David%20Z.webp',
  },
  {
    slug: 'katherine-wood',
    badge: 'PRO MTB CYCLIST',
    name: 'KATHERINE WOOD',
    sport: 'UCI Pro Mountain Bike Racer',
    quote:
      '16% threshold power increase in 6 months. The work Jacques and his team put in has translated to higher steadier output and an overall improvement in my ability to trust my strength.',
    image: '/Katherine3.webp',
  },
  {
    slug: 'trent',
    badge: 'D1 LACROSSE',
    name: 'TRENT',
    sport: 'Loyola University Maryland · D1 Lacrosse',
    quote:
      'Jacques and his team built a program that enhanced my agility, strength, and mental capacities. I feel more than ready to suit up this season with the Loyola Maryland Greyhounds.',
    image: '/Trent2.webp',
  },
  {
    slug: 'luca-russo',
    badge: 'PRO SOCCER · ITALY',
    name: 'LUCA RUSSO',
    sport: 'Professional Soccer Player · Italy',
    quote:
      'At 18 I play for a professional soccer team in Italy fighting for a starting spot. Every day Jacques pushed my boundaries. I went from a 235 pound hex bar deadlift for 5 reps to a 405 pound hex bar deadlift for 3 reps. My dumbbell rows improved from 45 pounds to almost 100 pounds for 5 reps. I also improved my 40 yard sprint time from around 4.65 seconds to a low 4.5. Beyond the gym I developed a stronger mindset. I am incredibly grateful to Jacques. His sometimes brutal honesty has given me the confidence to achieve my goals.',
    image: '/Luca+Picture+1.webp',
  },
  {
    slug: 'owen-gaffney',
    badge: 'HARVARD LACROSSE',
    name: 'OWEN GAFFNEY',
    sport: 'Harvard University · D1 Lacrosse',
    quote:
      'Every workout is uniquely tailored to the individual. During my Freshman season I felt stronger, quicker, and more balanced than ever before, and I started in every game.',
    image: '/Owen_G_Collage.webp',
  },
  {
    slug: 'patrick-murphy',
    badge: 'DARTMOUTH SOCCER',
    name: 'PATRICK MURPHY',
    sport: 'Dartmouth College · D1 Soccer',
    quote:
      'After years of knee pain and surgery I had run out of options. After working with Jacques for two to three months I am the healthiest I have been in over three years.',
    image: '/Patrick_Murphy.webp',
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
                <p className="font-body text-base text-white mt-1 tracking-wide">
                  {athlete.sport}
                </p>

                {/* Pull quote */}
                <p className="font-body italic text-base text-white mt-3 leading-relaxed line-clamp-3">
                  &ldquo;{athlete.quote}&rdquo;
                </p>

                {/* Read Story link */}
                <Link
                  href={`/athletes#${athlete.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-base font-medium text-[#4A7C26] transition-all duration-200 hover:gap-3 group/link"
                >
                  Read Story
                  <span
                    className="transition-transform duration-200 group-hover/link:translate-x-0.5"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
