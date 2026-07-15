'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="join" ref={ref} className="bg-bg-secondary py-24 md:py-36 relative overflow-hidden">
      {/* Background glows */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(74,124,38,0.3), transparent)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(74,124,38,0.3), transparent)',
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(74,124,38,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-8 h-px bg-gold" />
            <span className="font-body text-[10px] font-medium tracking-[0.3em] text-gold uppercase">
              Begin Your Journey
            </span>
          </motion.div>

          <div className="overflow-hidden">
            {['READY TO', 'TRANSFORM?'].map((line, i) => (
              <motion.div
                key={line}
                initial={{ y: '110%' }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <h2
                  className={`font-display leading-[0.9] tracking-[0.03em] ${
                    i === 1 ? 'text-gold' : 'text-text-primary'
                  }`}
                  style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
                >
                  {line}
                </h2>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-sm font-light text-text-secondary leading-relaxed max-w-md mt-8 tracking-wide"
          >
            Book a free 30-minute consultation with one of our head coaches. We&apos;ll assess your goals, your history, and your timeline — and show you exactly what a S&T program looks like for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10"
          >
            <Link
              href="/contact"
              className="font-body text-sm font-medium tracking-[0.25em] text-bg-primary bg-gold hover:bg-gold-light px-10 py-4 uppercase transition-colors duration-200"
            >
              Book Your Evaluation →
            </Link>
            <div className="flex flex-col items-start gap-1">
              <span className="font-body text-xs text-text-secondary/50 uppercase" style={{ letterSpacing: '0.2em' }}>
                Or call us directly
              </span>
              <a
                href="tel:3103070200"
                className="font-display text-3xl text-text-primary hover:text-gold transition-colors duration-200 leading-none tracking-[0.04em]"
              >
                310-307-0200
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
