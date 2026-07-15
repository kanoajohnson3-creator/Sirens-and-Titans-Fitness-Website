'use client'

import { useEffect } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wl-lead-capture-widget': {
        k_business: string
        k_skin: string
        k_location: string
      }
    }
  }
}

export default function WellnessLivingLeadCapture() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://widgets.wellnessliving.com/lead-capture/widget.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="w-full">
      <wl-lead-capture-widget
        k_business="355996"
        k_skin="363811"
        k_location=""
      />
    </div>
  )
}
