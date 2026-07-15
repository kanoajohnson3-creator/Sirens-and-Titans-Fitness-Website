'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { label: 'Training', href: '/#programs' },
  { label: 'Programs', href: '/#programs' },
  { label: 'Athletes', href: '/#athletes' },
  { label: 'About', href: '/#about' },
  { label: 'Press', href: '/#press' },
]

const WELLNESS_LIVING_URL = 'https://www.wellnessliving.com/login/sirens_and_titans_fitness'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-bg-primary/95 backdrop-blur-xl border-b border-border-subtle'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <span className="font-display text-3xl tracking-[0.12em] text-text-primary group-hover:text-gold transition-colors duration-300 leading-none">
              S&T
            </span>
            <div className="h-7 w-px bg-border-subtle hidden sm:block" />
            <div className="hidden sm:flex flex-col gap-0.5">
              <span className="font-body text-[10px] font-medium tracking-[0.28em] text-text-secondary uppercase leading-none">
                Sirens &amp; Titans
              </span>
              <span className="font-body text-[9px] font-light tracking-[0.2em] text-text-secondary/50 uppercase leading-none">
                Los Angeles, CA
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-xs font-medium tracking-[0.25em] text-text-secondary hover:text-text-primary uppercase transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right: Sign In + CTA */}
          <div className="flex items-center gap-4">
            <a
              href={WELLNESS_LIVING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block font-body text-xs font-medium tracking-[0.25em] text-text-secondary hover:text-text-primary uppercase transition-colors duration-200"
            >
              Sign In
            </a>
            <Link
              href="/contact"
              className="font-body text-xs font-medium tracking-[0.25em] text-bg-primary bg-gold hover:bg-gold-light px-5 py-2.5 uppercase transition-colors duration-200"
            >
              Start Training
            </Link>
            {/* Mobile menu toggle */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-1 ml-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-text-primary origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-4 h-px bg-text-primary"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-text-primary origin-center"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-x-0 top-[73px] z-40 bg-bg-primary/98 backdrop-blur-xl border-b border-border-subtle lg:hidden ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-5">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.label}
              initial={false}
              animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl tracking-[0.12em] text-text-primary hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <div className="h-px bg-border-subtle mt-2" />
          <a
            href={WELLNESS_LIVING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs font-medium tracking-[0.25em] text-text-secondary uppercase"
          >
            Sign In → Client Portal
          </a>
        </div>
      </motion.div>
    </>
  )
}
