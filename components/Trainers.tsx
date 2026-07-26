'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const coaches = [
  {
    name: 'JACQUES DeVORE',
    role: 'FOUNDER & HEAD COACH',
    credential: 'CSCS',
    detail: '20+ years coaching elite and professional athletes. Founder of Sirens & Titans Fitness.',
    gradient: 'from-[#1c1a10] via-[#14120a] to-[#0c0b06]',
    accent: 'gold',
    image: '/Jacques%20headshot.webp',
  },
  {
    name: 'CARLOS PEREZ',
    role: 'Strength Coach',
    credential: 'MS · CSCS · TSAC-F',
    detail: '7 Years D1 Experience at CSUN and USC',
    gradient: 'from-[#0e1a0a] via-[#0a1208] to-[#070d05]',
    accent: 'green',
    image: '/Carlos+Headshot.webp',
  },
  {
    name: 'CARSON CRAWFORD',
    role: 'Strength Coach',
    credential: 'NASM CPT',
    detail: 'Competitive Boxer · 2nd Place National Golden Gloves 2023',
    gradient: 'from-[#1a1010] via-[#120a0a] to-[#0c0606]',
    accent: 'gold',
    image: '/Carson+Headshot.webp',
  },
  {
    name: 'JULIAN LOVE',
    role: 'Strength Coach',
    credential: 'BA Exercise Science',
    detail: 'D1 Football · Palisades Charter Defensive Line Coach',
    gradient: 'from-[#101418] via-[#0a1012] to-[#06090c]',
    accent: 'green',
    image: '/Julian+Photo.webp',
    imageClass: 'object-cover object-[center_15%]',
  },
  {
    name: 'KANOA JOHNSON',
    role: 'Strength Coach',
    credential: 'ISSA CPT',
    detail: 'D1 Basketball & Football · Magna Cum Laude 2024',
    gradient: 'from-[#141018] via-[#0e0c12] to-[#09080d]',
    accent: 'gold',
    image: '/Kanoa%20Headshot.webp',
  },
]

export default function Trainers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="team" ref={ref} className="bg-bg-secondary py-24 md:py-36">
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
              The Coaching Staff
            </span>
          </motion.div>

          <div className="overflow-hidden">
            {['OUR', 'COACHES.'].map((line, i) => (
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

          <p className="font-body text-base text-white text-center max-w-2xl mx-auto mt-4">
            All of our coaches are highly trained and educated with a passion and commitment for
            excellence with our clients.
          </p>
        </div>

        {/* Row 1: first 3 coaches */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border-subtle mb-px">
          {coaches.slice(0, 3).map((coach, i) => (
            <CoachCard key={coach.name} coach={coach} i={i} isInView={isInView} />
          ))}
        </div>

        {/* Row 2: last 2 coaches */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border-subtle">
          {coaches.slice(3).map((coach, i) => (
            <CoachCard key={coach.name} coach={coach} i={i + 3} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CoachCard({
  coach,
  i,
  isInView,
}: {
  coach: (typeof coaches)[0]
  i: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
      className="bg-bg-card group overflow-hidden"
    >
      {/* Visual area */}
      <div className={`relative h-52 bg-gradient-to-b ${coach.gradient} overflow-hidden`}>
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 29px, rgba(255,255,255,0.4) 29px, rgba(255,255,255,0.4) 30px), repeating-linear-gradient(90deg, transparent, transparent 29px, rgba(255,255,255,0.4) 29px, rgba(255,255,255,0.4) 30px)`,
          }}
        />

        {/* Circular headshot — centered in upper portion */}
        <div className="absolute inset-0 flex items-center justify-center pb-10">
          <div
            className={`relative w-24 h-24 rounded-full overflow-hidden ring-2 ${
              coach.accent === 'gold' ? 'ring-gold/30' : 'ring-accent-green-light/30'
            } group-hover:ring-4 transition-all duration-500`}
          >
            <Image
              src={coach.image}
              alt={coach.name}
              fill
              loading="lazy"
              className={coach.imageClass ?? 'object-cover'}
            />
          </div>
        </div>

        {/* Name + accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-bg-card via-bg-card/60 to-transparent">
          <div
            className={`w-6 h-0.5 mb-3 transition-all duration-500 group-hover:w-10 ${
              coach.accent === 'gold' ? 'bg-gold' : 'bg-accent-green-light'
            }`}
          />
          <h3
            className="font-display text-text-primary leading-none tracking-[0.05em]"
            style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)' }}
          >
            {coach.name}
          </h3>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="font-body text-[10px] font-medium tracking-[0.2em] text-white uppercase">
            {coach.role}
          </span>
          <span
            className={`font-body text-[9px] font-medium tracking-[0.2em] uppercase border px-2 py-1 flex-shrink-0 ${
              coach.accent === 'gold'
                ? 'border-gold/25 text-gold/60'
                : 'border-accent-green-light/25 text-accent-green-light/60'
            }`}
          >
            {coach.credential}
          </span>
        </div>
        <p className="font-body text-[11px] font-light text-white leading-relaxed tracking-wide">
          {coach.detail}
        </p>
      </div>
    </motion.div>
  )
}
