'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '30+', label: 'Years Coaching', small: false },
  { value: '100+', label: 'Athletes Trained', small: false },
  { value: 'D1 · PRO · OLYMPIC', label: 'Athlete Levels', small: true },
  { value: '#1', label: 'VersaClimber World Record', small: false },
]

export default function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="bg-bg-secondary border-b border-border-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-bg-secondary px-6 md:px-10 py-10 md:py-14 flex flex-col gap-3"
            >
              <span
                className={`font-display text-text-primary leading-none tracking-[0.03em] block ${
                  stat.small
                    ? 'text-[clamp(1.1rem,2.2vw,1.75rem)]'
                    : 'text-[clamp(2.75rem,5vw,4.5rem)]'
                }`}
              >
                {stat.value}
              </span>
              <span className="font-body text-[10px] font-medium tracking-[0.28em] text-white uppercase leading-snug">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
