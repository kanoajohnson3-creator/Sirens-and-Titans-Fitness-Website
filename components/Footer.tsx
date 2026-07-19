'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const WELLNESS_LIVING_URL = 'https://www.wellnessliving.com/login/sirens_and_titans_fitness'

const footerLinks = {
  Training: [
    { label: 'Elite Group Training', href: '/training-programs' },
    { label: 'Personal Training', href: '/personal-training' },
    { label: 'Distance Coaching', href: '/distance-coaching' },
    { label: 'VersaClimber FUBAR', href: '/versaclimber-fubar' },
  ],
  Company: [
    { label: 'About Jacques', href: '/#about' },
    { label: 'Our Coaches', href: '/#team' },
    { label: 'Featured Athletes', href: '/#athletes' },
    { label: 'In The Press', href: '/#press' },
  ],
  Connect: [
    { label: 'Instagram', href: '#' },
    { label: 'YouTube', href: '#' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Client Portal', href: WELLNESS_LIVING_URL, external: true },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex flex-col gap-1 mb-2 group">
              <span className="font-display text-3xl tracking-[0.1em] text-text-primary group-hover:text-gold transition-colors duration-300 leading-none">
                SIRENS &amp; TITANS
              </span>
            </Link>
            <p className="font-body text-sm font-light text-gold/70 tracking-[0.2em] uppercase mb-6">
              Truth in Fitness
            </p>
            <p className="font-body text-sm font-light text-text-secondary/50 leading-relaxed tracking-wide max-w-[200px] mb-6">
              Science-based strength and conditioning for athletes and competitors at every level.
            </p>
            <div className="flex flex-col gap-2 mb-4">
              <a
                href="tel:+13103070200"
                className="font-body text-sm font-light text-text-secondary/60 hover:text-text-secondary tracking-wide transition-colors duration-200"
              >
                310-307-0200
              </a>
              <p className="font-body text-[10px] font-light text-text-secondary/40 tracking-wide">
                2242 S Sepulveda Blvd
              </p>
              <p className="font-body text-[10px] font-light text-text-secondary/40 tracking-wide">
                Los Angeles, CA 90064
              </p>
            </div>
            {/* Hours */}
            <div className="flex flex-col gap-1.5 mb-6">
              {[
                { days: 'Mon – Thu', time: '5:50 am – 6:45 pm' },
                { days: 'Friday', time: '6:00 am – 3:00 pm' },
                { days: 'Saturday', time: '8:00 am – 12:00 pm' },
                { days: 'Sunday', time: 'Closed' },
              ].map((h) => (
                <div key={h.days} className="flex items-center justify-between gap-3 max-w-[200px]">
                  <span className="font-body text-[10px] font-medium text-text-secondary/60 tracking-wide">{h.days}</span>
                  <span className="font-body text-[10px] font-light text-text-secondary/40 tracking-wide">{h.time}</span>
                </div>
              ))}
            </div>
            {/* Client portal CTA */}
            <a
              href={WELLNESS_LIVING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body text-[10px] font-medium tracking-[0.25em] text-bg-primary bg-gold hover:bg-gold-light px-4 py-2 uppercase transition-colors duration-200"
            >
              Client Portal →
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-body text-[10px] font-medium tracking-[0.3em] text-text-secondary/50 uppercase mb-6">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm font-light text-text-secondary/60 hover:text-gold tracking-wide transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="font-body text-sm font-light text-text-secondary/60 hover:text-text-primary tracking-wide transition-colors duration-200 relative group"
                      >
                        {link.label}
                        <span className="absolute -bottom-px left-0 w-0 h-px bg-gold/40 group-hover:w-full transition-all duration-300" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gold divider */}
        <div
          className="h-px mb-8"
          style={{ background: 'linear-gradient(to right, rgba(74,124,38,0.2), transparent)' }}
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="font-body text-[10px] font-light text-text-secondary/30 tracking-[0.15em]">
              © 2025 Sirens &amp; Titans Fitness. All rights reserved.
            </p>
            <p className="font-body text-[10px] font-light text-text-secondary/20 tracking-[0.15em]">
              Powered by Science. Driven by Results.
            </p>
          </div>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-body text-[9px] font-light text-text-secondary/25 hover:text-text-secondary/50 tracking-[0.15em] uppercase transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
