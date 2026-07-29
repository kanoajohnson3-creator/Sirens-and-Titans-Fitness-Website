'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-bg-primary">
      {/* Atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/Jacques%20Misc%20Photo.webp"
          alt=""
          fill
          priority
          className="object-contain"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div
          className="absolute -left-48 top-1/4 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(45,80,22,0.18) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -right-32 bottom-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(74,124,38,0.10) 0%, transparent 70%)' }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-[40%]"
          style={{ background: 'linear-gradient(to top, rgba(45,80,22,0.06) 0%, transparent 100%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border-subtle/40 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-border-subtle/20 to-transparent" />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(74,124,38,0.25), transparent)' }}
        />
      </div>

      {/* Ghost background type */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[25vw] leading-none tracking-widest select-none pointer-events-none"
        style={{ color: 'rgba(74,124,38,0.025)' }}
        aria-hidden="true"
      >
        S&T
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 md:pb-36 pt-36 w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-10 h-px bg-gold" />
          <span className="font-body text-[10px] font-medium tracking-[0.35em] text-white uppercase">
            Los Angeles, CA &nbsp;·&nbsp; Appointment Only
          </span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden">
          {[
            { text: 'TRUTH IN', color: 'text-text-primary' },
            { text: 'FITNESS', color: 'text-gold' },
          ].map(({ text, color }, i) => (
            <motion.div
              key={text}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.25 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <h1
                className={`font-display leading-[0.88] tracking-[0.04em] ${color}`}
                style={{ fontSize: 'clamp(4.5rem, 12vw, 12rem)' }}
              >
                {text}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.5, ease: 'easeOut' }}
          className="font-body text-base md:text-lg font-light text-white max-w-xl mt-6 leading-relaxed tracking-wide"
        >
          High end athletes sports performance and personal training in a group. Results-driven, science-based strength and conditioning for athletes and competitors at every level.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: 'easeOut' }}
          className="flex items-center gap-4 mt-10"
        >
          <Link
            href="/contact"
            className="font-body text-sm font-medium tracking-[0.25em] text-bg-primary bg-gold hover:bg-gold-light px-8 py-3.5 uppercase transition-colors duration-200"
          >
            Start Training
          </Link>
          <Link
            href="/athletes"
            className="font-body text-sm font-medium tracking-[0.25em] text-text-primary border border-border-subtle hover:border-text-secondary px-8 py-3.5 uppercase transition-colors duration-200"
          >
            Our Athletes
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-8 flex items-center gap-4"
      >
        <motion.div
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent origin-top"
        />
        <span className="font-body text-[9px] font-medium tracking-[0.35em] text-white uppercase">
          Scroll
        </span>
      </motion.div>

      {/* EST badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute top-32 right-6 flex flex-col items-end gap-1"
      >
        <span className="font-display text-[11px] tracking-[0.3em] text-white">EST</span>
        <span className="font-display text-[22px] tracking-[0.15em] text-white">2012</span>
      </motion.div>
    </section>
  )
}
