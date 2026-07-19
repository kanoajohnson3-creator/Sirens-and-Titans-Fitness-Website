'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const stats = [
  {
    display: '20+',
    numeric: 20,
    prefix: '',
    suffix: '+',
    label: 'Years Coaching',
    isText: false,
  },
  {
    display: '1000+',
    numeric: 1000,
    prefix: '',
    suffix: '+',
    label: 'Individuals Trained',
    isText: false,
  },
  {
    display: 'PRO · OLYMPIC\nD1',
    numeric: null,
    prefix: '',
    suffix: '',
    label: 'Athlete Levels Trained',
    isText: true,
  },
  {
    display: '#1',
    numeric: 1,
    prefix: '#',
    suffix: '',
    label: 'VersaClimber World Record',
    isText: false,
  },
]

// Border logic for a 2-col mobile / 4-col desktop grid:
//   Mobile (2 cols): right border on col 1 (i=0,2), bottom border on row 1 (i=0,1)
//   Desktop (4 cols): right border on cols 1-3 (i=0,1,2), no border on col 4 (i=3)
function getBorderClasses(i: number): string {
  const classes: string[] = []

  // Mobile right border (left column)
  if (i % 2 === 0) classes.push('border-r border-[#1E1E1E]')

  // Mobile bottom border (top row) — cancelled on desktop
  if (i < 2) classes.push('border-b border-[#1E1E1E] lg:border-b-0')

  // Desktop col-2 needs a right border (i=1 has none from the mobile rule above)
  if (i === 1) classes.push('lg:border-r lg:border-[#1E1E1E]')

  // Desktop col-4 must NOT have a right border (i=2 got one from the mobile even rule)
  if (i === 3) classes.push('lg:border-r-0')

  return classes.join(' ')
}

function CountUp({
  stat,
  isInView,
}: {
  stat: (typeof stats)[0]
  isInView: boolean
}) {
  const nodeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!isInView || stat.isText || stat.numeric === null) return
    const node = nodeRef.current
    if (!node) return

    const controls = animate(0, stat.numeric, {
      duration: 2,
      ease: 'easeOut',
      onUpdate(latest) {
        if (node) node.textContent = `${stat.prefix}${Math.round(latest)}${stat.suffix}`
      },
    })

    return () => controls.stop()
  }, [isInView, stat])

  if (stat.isText) {
    return (
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="font-display text-[#4A7C26] leading-[0.9] tracking-[0.04em] whitespace-pre-line text-center"
        style={{ fontSize: 'clamp(1.6rem, 3vw, 2.75rem)' }}
      >
        {stat.display}
      </motion.span>
    )
  }

  return (
    <span
      ref={nodeRef}
      className="font-display text-6xl text-[#4A7C26] leading-none tabular-nums"
    >
      {stat.prefix}0{stat.suffix}
    </span>
  )
}

export default function StatsBar() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="bg-[#0D0D0D] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
              className={`flex flex-col items-center justify-center text-center px-4 py-10 lg:py-4 ${getBorderClasses(i)}`}
            >
              <CountUp stat={stat} isInView={isInView} />
              <p
                className="font-body text-sm text-[#888888] uppercase mt-3 leading-snug"
                style={{ letterSpacing: '0.15em' }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
