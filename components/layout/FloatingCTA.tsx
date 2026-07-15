'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (dismissed) return null

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex shadow-2xl transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Link
        href="/contact"
        className="bg-[#4A7C26] hover:bg-[#3D6B1E] text-white font-body font-medium text-sm px-6 py-3 transition-colors duration-200"
        style={{ letterSpacing: '0.08em' }}
      >
        Book a Session
      </Link>
      <button
        onClick={() => setDismissed(true)}
        className="bg-[#2D5016] hover:bg-[#3D6B1E] text-white/60 hover:text-white w-8 flex items-center justify-center text-base transition-colors duration-200"
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  )
}
