'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const amenities = [
  'Olympic lifting platforms',
  'Recovery & contrast therapy',
  'Turf performance zone',
  'Private changing suites',
  'Cardio performance lab',
  'Physiotherapy on-site',
]

const hours = [
  { days: 'Monday — Thursday', time: '5:50 am — 6:45 pm' },
  { days: 'Friday', time: '6:00 am — 3:00 pm' },
  { days: 'Saturday', time: '8:00 am — 12:00 pm' },
  { days: 'Sunday', time: 'Closed' },
]

export default function Studio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="studio" ref={ref} className="bg-bg-secondary py-24 md:py-36 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(45,80,22,0.08) 0%, transparent 70%)',
        }}
      />

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
              West Los Angeles
            </span>
          </motion.div>

          <div className="overflow-hidden">
            {['THE', 'STUDIO.'].map((line, i) => (
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

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border-subtle">
          {/* Location + map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="lg:col-span-2 bg-bg-card p-8 md:p-12"
          >
            <span className="font-body text-[10px] font-medium tracking-[0.3em] text-text-secondary/60 uppercase block mb-6">
              Location
            </span>
            <address className="not-italic">
              <p className="font-display text-text-primary leading-tight tracking-[0.03em] mb-1"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                2242 S Sepulveda Blvd
              </p>
              <p className="font-display text-text-secondary leading-tight tracking-[0.03em]"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                Los Angeles, CA 90064
              </p>
            </address>

            {/* Facility photos */}
            <div className="mt-8 grid grid-cols-2 gap-2 h-48 md:h-56">
              <div className="relative overflow-hidden">
                <Image
                  src="/Gym+photos5.webp"
                  alt="Sirens & Titans Fitness facility"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="/Gym+photos6.webp"
                  alt="Sirens & Titans Fitness facility"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="font-body text-[10px] font-medium tracking-[0.25em] text-text-secondary/60 uppercase border border-border-subtle px-3 py-1.5">
                Parking Available
              </span>
              <span className="font-body text-[10px] font-medium tracking-[0.25em] text-text-secondary/60 uppercase border border-border-subtle px-3 py-1.5">
                Metro Accessible
              </span>
              <span className="font-body text-[10px] font-medium tracking-[0.25em] text-text-secondary/60 uppercase border border-border-subtle px-3 py-1.5">
                Private Entrance
              </span>
            </div>
          </motion.div>

          {/* Hours + amenities */}
          <div className="flex flex-col gap-px bg-border-subtle">
            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="bg-bg-card p-8 flex-1"
            >
              <span className="font-body text-[10px] font-medium tracking-[0.3em] text-text-secondary/60 uppercase block mb-6">
                Hours
              </span>
              <div className="flex flex-col gap-4">
                {hours.map((h) => (
                  <div key={h.days}>
                    <p className="font-body text-[10px] font-medium tracking-[0.2em] text-text-secondary/50 uppercase mb-1">
                      {h.days}
                    </p>
                    <p className="font-body text-base font-light text-text-primary tracking-wide">
                      {h.time}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.4 }}
              className="bg-bg-card p-8 flex-1"
            >
              <span className="font-body text-[10px] font-medium tracking-[0.3em] text-text-secondary/60 uppercase block mb-6">
                Amenities
              </span>
              <ul className="flex flex-col gap-2.5">
                {amenities.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1 h-1 bg-gold/60 flex-shrink-0" />
                    <span className="font-body text-sm font-light text-text-secondary tracking-wide">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
