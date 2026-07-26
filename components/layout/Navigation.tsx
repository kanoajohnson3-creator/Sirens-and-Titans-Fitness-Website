'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

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

export default function Navigation() {
  const [visible, setVisible] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      if (current < 10) {
        setVisible(true)
      } else if (current > lastScroll) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      setLastScroll(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScroll])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] bg-[#080808] transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-4">

        <Link href="/" className="text-white font-bold whitespace-nowrap shrink-0" style={{ fontSize: '11px' }}>
          S&T
        </Link>

        <div className="flex items-center gap-0 bg-[#4A7C26] px-2 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white font-medium px-1.5 hover:opacity-70 whitespace-nowrap"
              style={{ fontSize: '10px' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/contact"
            className="bg-[#4A7C26] text-white font-medium px-2 py-2 whitespace-nowrap"
            style={{ fontSize: '10px' }}
          >
            START TRAINING
          </Link>
        </div>

      </div>
    </nav>
  )
}
