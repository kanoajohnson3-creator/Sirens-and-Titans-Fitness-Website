'use client'

import { useState, useEffect } from 'react'

interface Props {
  widgetUrl: string
  height: string
  title: string
}

export default function WellnessLivingWidget({ widgetUrl, height, title }: Props) {
  const [loading, setLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])

  if (isMobile) {
    return (
      <div className="space-y-3">
        <a
          href={widgetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-[#4A7C26] hover:bg-[#3D6B1E] text-white font-body font-medium text-base uppercase py-4 transition-colors duration-200"
          style={{ letterSpacing: '0.15em' }}
        >
          Book Your Session →
        </a>
        <p className="font-body text-sm text-white text-center">
          Opens the booking portal in a new tab
        </p>
      </div>
    )
  }

  return (
    <div className="relative w-full" style={{ height }}>
      {/* Loading skeleton */}
      {loading && (
        <div
          className="absolute inset-0 bg-[#1a1a1a] animate-pulse"
          style={{ height }}
          aria-hidden="true"
        />
      )}
      <iframe
        src={widgetUrl}
        width="100%"
        height={height}
        frameBorder="0"
        scrolling="auto"
        title={title}
        className="w-full"
        onLoad={() => setLoading(false)}
      />
    </div>
  )
}
