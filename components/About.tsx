'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const credentials = [
  'CSCS',
  'Precision Nutrition',
  'Primal Health Coach',
  'USA Cycling Coach',
  'MBA Pepperdine',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="about" ref={ref} className="bg-bg-primary py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Pull quote — full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-gold" />
            <span className="font-body text-[10px] font-medium tracking-[0.3em] text-gold uppercase">
              Our Philosophy
            </span>
          </div>

          <blockquote>
            <p
              className="font-display text-text-primary leading-[0.88] tracking-[0.03em]"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)' }}
            >
              WE ARE COACHES
            </p>
            <p
              className="font-display text-gold leading-[0.88] tracking-[0.03em]"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)' }}
            >
              NOT TRAINERS.
            </p>
            <p
              className="font-display text-white leading-[0.9] tracking-[0.04em] mt-2"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 4rem)' }}
            >
              A COACH&rsquo;S JOB IS TO WIN.
            </p>
          </blockquote>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="h-px bg-border-subtle origin-left mb-20 md:mb-28"
        />

        {/* Bio + credentials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: founder info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="font-body text-[10px] font-medium tracking-[0.3em] text-white uppercase mb-2">
              Founder &amp; CEO
            </p>
            <h3
              className="font-display text-text-primary leading-none tracking-[0.05em] mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              JACQUES DeVORE
            </h3>
            <p className="font-body text-base font-light text-white leading-relaxed tracking-wide">
              20+ years as a Certified Strength and Conditioning Specialist. Jacques founded Titan Sports
              Performance in Santa Barbara before opening Sirens and Titans in Los Angeles. He coauthored{' '}
              <em>Maximum Overload for Cyclists</em> published by Rodale Press, holds the unofficial
              VersaClimber world mile record, and has trained athletes from D1 programs to professional
              and Olympic level.
            </p>
          </motion.div>

          {/* Right: credentials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="flex flex-col justify-start"
          >
            <p className="font-body text-[10px] font-medium tracking-[0.3em] text-white uppercase mb-6">
              Credentials
            </p>
            <div className="flex flex-wrap gap-2.5">
              {credentials.map((cred, i) => (
                <motion.span
                  key={cred}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                  className="font-body text-[10px] font-medium tracking-[0.25em] text-white uppercase border border-border-subtle px-4 py-2 hover:border-gold/40 hover:text-gold/80 transition-colors duration-300"
                >
                  {cred}
                </motion.span>
              ))}
            </div>

            {/* Book mention */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 pt-8 border-t border-border-subtle"
            >
              <p className="font-body text-[10px] font-medium tracking-[0.25em] text-white uppercase mb-2">
                Co-Author
              </p>
              <p className="font-body text-base font-light text-white italic tracking-wide">
                Maximum Overload for Cyclists
              </p>
              <p className="font-body text-[10px] font-light text-white tracking-wide mt-1">
                Published by Rodale Press
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
