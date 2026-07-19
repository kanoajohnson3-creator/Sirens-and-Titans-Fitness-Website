'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Training Programs', href: '/training-programs' },
  { label: 'Personal Training', href: '/personal-training' },
  { label: 'Distance Coaching', href: '/distance-coaching' },
  { label: 'Contact', href: '/contact' },
  { label: 'Elite Athletes', href: '/athletes' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Jacques Substack', href: '/blog' },
  { label: 'Press', href: '/press' },
]

const WELLNESS_URL = 'https://www.wellnessliving.com/login/sirens_and_titans_fitness'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#080808]/95 backdrop-blur-xl border-b border-[#1E1E1E]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <span className="font-display text-2xl tracking-[0.12em] text-white group-hover:text-[#4A7C26] transition-colors duration-300 leading-none">
              S&T
            </span>
            <div className="h-5 w-px bg-[#1E1E1E] hidden lg:block" />
            <span className="hidden lg:block font-body text-[9px] font-medium tracking-[0.18em] text-[#888888] uppercase whitespace-nowrap">
              Sirens &amp; Titans
            </span>
          </Link>

          {/* Desktop nav — shown at xl (1280px+) where all 8 fit */}
          <div className="hidden xl:flex items-center gap-5 flex-1 justify-center">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-[9px] font-medium uppercase whitespace-nowrap transition-colors duration-200 relative group ${
                    active ? 'text-[#4A7C26]' : 'text-[#888888] hover:text-white'
                  }`}
                  style={{ letterSpacing: '0.1em' }}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#4A7C26] transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={WELLNESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block font-body text-[9px] font-medium uppercase border border-[#1E1E1E] hover:border-[#4A7C26] text-[#888888] hover:text-white px-4 py-2 transition-colors duration-200"
              style={{ letterSpacing: '0.12em' }}
            >
              Sign In
            </a>
            <Link
              href="/contact"
              className="font-body text-[9px] font-medium uppercase bg-[#4A7C26] hover:bg-[#3D6B1E] text-white px-4 py-2 transition-colors duration-200 whitespace-nowrap"
              style={{ letterSpacing: '0.12em' }}
            >
              Start Training
            </Link>
            {/* Hamburger — shown below xl */}
            <button
              className="xl:hidden flex flex-col gap-1.5 p-1 ml-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className={`block w-5 h-px bg-white origin-center transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                }`}
              />
              <span
                className={`block w-3 h-px bg-white transition-opacity duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-px bg-white origin-center transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile / tablet menu */}
      <div
        className={`fixed inset-x-0 top-[65px] z-40 bg-[#080808]/98 backdrop-blur-xl border-b border-[#1E1E1E] xl:hidden transition-all duration-300 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-2xl tracking-[0.08em] transition-colors duration-200 ${
                  active ? 'text-[#4A7C26]' : 'text-white hover:text-[#4A7C26]'
                }`}
              >
                {link.label.toUpperCase()}
              </Link>
            )
          })}
          <div className="h-px bg-[#1E1E1E] my-1" />
          <a
            href={WELLNESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-medium tracking-[0.2em] text-[#888888] uppercase"
          >
            Sign In → Client Portal
          </a>
        </div>
      </div>
    </>
  )
}
