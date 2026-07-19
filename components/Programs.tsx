'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const programs = [
  {
    number: '01',
    title: 'ELITE GROUP\nTRAINING',
    tag: 'Coached Every Rep',
    body: 'High end personal training in a group. Individual programs, small group energy, coached every rep. 7 clients per coach.',
    detail: 'Small Groups',
    accent: 'gold',
    href: '/training-programs',
    photos: ['/Trent2.webp', '/Trent3.webp', '/Gym+photos4.webp'] as string[],
  },
  {
    number: '02',
    title: 'PERSONAL\nTRAINING',
    tag: 'Private Sessions',
    body: 'One on one coaching from $185/hr. Built entirely around your goals, your body, and your sport.',
    detail: '1-on-1',
    accent: 'green',
    href: '/personal-training',
    photos: ['/Trent4.webp', '/Trent5.webp'] as string[],
  },
  {
    number: '03',
    title: 'DISTANCE\nCOACHING',
    tag: 'Remote Coaching',
    body: 'Remote coaching and fully customized programming, wherever you are in the world.',
    detail: 'Remote',
    accent: 'gold',
    href: '/distance-coaching',
    photos: null,
  },
  {
    number: '04',
    title: 'VERSACLIMBER\nFUBAR',
    tag: '30 Minutes',
    body: "30 minutes. Maximum output. The world's best cardio machine coached.",
    detail: '30 Minutes',
    accent: 'green',
    href: '/versaclimber-fubar',
    photos: ['/Gym+photos2.webp'] as string[],
  },
]

export default function Programs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="programs" ref={ref} className="bg-bg-secondary py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-8 h-px bg-gold" />
              <span className="font-body text-[10px] font-medium tracking-[0.3em] text-gold uppercase">
                Training Programs
              </span>
            </motion.div>

            <div className="overflow-hidden">
              {['OUR', 'PROGRAMS.'].map((line, i) => (
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-base font-light text-text-secondary leading-relaxed max-w-xs tracking-wide"
          >
            Four ways to train with S&T. Every program is science-based, coach-led, and built around results.
          </motion.p>
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-subtle">
          {programs.map((program, i) => (
            <motion.div
              key={program.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2 + i * 0.1 }}
              className="bg-bg-card group flex flex-col relative overflow-hidden"
            >
              {/* Action photo strip — Elite Group Training & Personal Training */}
              {program.photos && (
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <div className="flex h-full">
                    {program.photos.map((src) => (
                      <div key={src} className="relative flex-1 overflow-hidden">
                        <Image
                          src={src}
                          alt=""
                          fill
                          loading="lazy"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#141414] to-transparent" />
                </div>
              )}

              {/* Card content */}
              <div className="p-8 md:p-10 flex flex-col justify-between flex-1 min-h-[280px] relative">
                {/* Hover accent bar */}
                <div
                  className={`absolute top-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                    program.accent === 'gold' ? 'bg-gold' : 'bg-accent-green-light'
                  }`}
                />

                <div>
                  {/* Number + tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`font-display text-[11px] tracking-[0.4em] ${
                        program.accent === 'gold' ? 'text-gold/50' : 'text-accent-green-light/70'
                      }`}
                    >
                      {program.number}
                    </span>
                    <span className="font-body text-[9px] font-medium tracking-[0.3em] text-text-secondary/50 uppercase border border-border-subtle px-2.5 py-1">
                      {program.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-display leading-[0.9] tracking-[0.05em] mb-5 whitespace-pre-line transition-colors duration-300 ${
                      program.accent === 'gold'
                        ? 'text-text-primary group-hover:text-gold'
                        : 'text-text-primary group-hover:text-accent-green-light'
                    }`}
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                  >
                    {program.title}
                  </h3>

                  {/* Body */}
                  <p className="font-body text-sm font-light text-text-secondary leading-relaxed tracking-wide">
                    {program.body}
                  </p>
                </div>

                {/* Bottom row */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border-subtle">
                  <span className="font-body text-[10px] font-medium tracking-[0.2em] text-text-secondary/60 uppercase">
                    {program.detail}
                  </span>
                  <Link
                    href={program.href}
                    className={`font-body text-[10px] font-medium tracking-[0.2em] uppercase flex items-center gap-2 transition-colors duration-300 ${
                      program.accent === 'gold'
                        ? 'text-gold/60 group-hover:text-gold'
                        : 'text-accent-green-light/60 group-hover:text-accent-green-light'
                    }`}
                  >
                    Learn More
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
