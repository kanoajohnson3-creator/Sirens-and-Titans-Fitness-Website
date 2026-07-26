'use client'

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

// Duplicate for seamless infinite loop: at translateX(-50%) the visual
// content is identical to the start, so the loop is undetectable.
const doubled = [...publications, ...publications]

export default function PressBar() {
  return (
    <section
      className="bg-[#111111] flex items-center overflow-hidden"
      style={{ height: '120px' }}
    >
      {/* Left label — sits outside the overflow container so it is never clipped */}
      <div className="flex-shrink-0 flex items-center gap-5 pl-8 md:pl-12 pr-6 z-20">
        <span
          className="font-body text-sm uppercase tracking-widest text-[#4A7C26] whitespace-nowrap"
          style={{ letterSpacing: '0.2em' }}
        >
          As Featured In
        </span>
        <div className="w-px h-5 bg-[#1E1E1E]" />
      </div>

      {/* Marquee track wrapper — overflow hidden so nothing bleeds out */}
      <div className="relative flex-1 overflow-hidden">
        {/* Fade gradient — sits over the track, covers both edges */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, #111111 0%, transparent 10%, transparent 90%, #111111 100%)',
          }}
        />

        {/* Scrolling track */}
        <div className="flex items-center animate-marquee hover:[animation-play-state:paused] w-max">
          {doubled.map((pub, i) => (
            <span key={i} className="flex items-center">
              <span
                className="font-body font-medium text-base text-white hover:text-[#4A7C26] transition-colors duration-200 uppercase whitespace-nowrap px-7 cursor-default"
                style={{ letterSpacing: '0.15em' }}
              >
                {pub}
              </span>
              {/* Separator dot — kept subtle so text is the focus */}
              <span
                className="text-[#2A2A2A] font-medium select-none"
                aria-hidden="true"
              >
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
