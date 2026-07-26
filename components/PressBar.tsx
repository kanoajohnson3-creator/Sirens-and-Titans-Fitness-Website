'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const publications = [
  'Bicycling Magazine',
  'Los Angeles Times',
  "Men's Journal",
  'Outside Magazine',
  'VoyageLA',
  'Shoutout LA',
  'Daily Buzz',
  'LA Hotlist',
  'ClassPass',
]

export default function PressBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section id="press" ref={ref} className="bg-bg-primary border-t border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 flex-shrink-0"
          >
            <div className="w-6 h-px bg-gold/40" />
            <span className="font-body text-[9px] font-medium tracking-[0.35em] text-white uppercase whitespace-nowrap">
              As Featured In
            </span>
          </motion.div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-5 bg-border-subtle flex-shrink-0" />

          {/* Publication names */}
          <div className="flex flex-wrap gap-x-5 gap-y-3 items-center">
            {publications.map((pub, i) => (
              <motion.span
                key={pub}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className="font-body text-[10px] font-medium tracking-[0.25em] text-white uppercase hover:text-white transition-colors duration-200 cursor-default"
              >
                {pub}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
