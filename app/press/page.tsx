import type { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Press | Sirens & Titans Fitness',
  description:
    'Sirens & Titans Fitness as featured in Bicycling Magazine, Los Angeles Times, Outside Magazine, and more.',
}

type PressCard = {
  publication: string
  date: string | null
  headline: string
  note: string | null
  href: string
  image?: string
}

const pressCards: PressCard[] = [
  {
    publication: 'VoyageLA',
    date: 'October 2021',
    headline: 'Exploring Life and Business with Jacques DeVore of Sirens and Titans Fitness',
    note: null,
    href: 'http://voyagela.com/interview/exploring-life-business-with-jacques-devore-of-sirens-and-titans-fitness/',
  },
  {
    publication: 'Shoutout LA',
    date: 'April 2021',
    headline: 'Meet Jacques DeVore, Strength and Conditioning Coach CSCS Health and Wellness Coach',
    note: null,
    href: 'https://shoutoutla.com/meet-jacques-devore-strength-and-conditioning-coach-cscs-health-and-wellness-coach/',
  },
  {
    publication: 'VoyageLA',
    date: '2025',
    headline: 'Life Values and Legacy, Our Chat with Jacques DeVore of West LA',
    note: null,
    href: 'https://voyagela.com/interview/life-values-legacy-our-chat-with-jacques-devore-of-west-la-highlight',
  },
  {
    publication: 'Bicycling Magazine',
    date: null,
    headline: 'Denise Mueller Korenek Breaks Bicycle Speed Record',
    note: 'S&T client Denise broke the world record as the fastest person ever on a bicycle.',
    href: 'https://www.bicycling.com/news/a23281242/denise-mueller-korenek-breaks-bicycle-speed-record/',
  },
  {
    publication: 'Daily Mail',
    date: null,
    headline: 'Jennifer Lopez and Alex Rodriguez Spotted Outside LA Fitness Center',
    note: 'J-Lo and A-Rod working out at Sirens and Titans Fitness.',
    href: 'https://www.dailymail.co.uk/tvshowbiz/article-4953934/J-Lo-Rod-spotted-outside-LA-fitness-center.html',
    image: '/A%20Rod%20and%20J%20Lo%20photo.webp',
  },
]

export default function PressPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#080808]">
        {/* Hero */}
        <div className="h-64 bg-[#111111] flex items-end pb-12 border-b border-[#1E1E1E]">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <SectionLabel>Press</SectionLabel>
            <h1
              className="font-display text-white leading-none tracking-[0.03em]"
              style={{ fontSize: 'clamp(3rem, 9vw, 6rem)' }}
            >
              IN THE MEDIA
            </h1>
          </div>
        </div>

        {/* Press features */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <SectionLabel>Press Features</SectionLabel>
            <h2
              className="font-display text-white leading-none tracking-[0.03em] mb-16"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              FEATURED COVERAGE
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressCards.map((card) => (
                <a
                  key={card.headline}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#141414] hover:bg-[#1a1a1a] border-t-2 border-[#4A7C26] flex flex-col cursor-pointer transition-colors duration-200 group overflow-hidden"
                >
                  {/* Photo header — only for cards with an image */}
                  {card.image && (
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <Image
                        src={card.image}
                        alt={card.headline}
                        fill
                        loading="lazy"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                    </div>
                  )}

                  {/* Card content */}
                  <div className="p-8 flex flex-col gap-4 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className="font-body text-[10px] font-medium uppercase text-[#4A7C26]"
                        style={{ letterSpacing: '0.2em' }}
                      >
                        {card.publication}
                      </span>
                      {card.date && (
                        <span className="font-body text-[10px] text-[#888888] flex-shrink-0">
                          {card.date}
                        </span>
                      )}
                    </div>

                    <h3 className="font-body font-medium text-sm text-white leading-snug group-hover:text-[#4A7C26] transition-colors duration-200">
                      {card.headline}
                    </h3>

                    {card.note && (
                      <p className="font-body text-xs text-[#888888] italic leading-relaxed">
                        {card.note}
                      </p>
                    )}

                    <span
                      className="font-body text-[10px] font-medium uppercase text-[#4A7C26]/60 group-hover:text-[#4A7C26] flex items-center gap-2 transition-all duration-200 mt-auto"
                      style={{ letterSpacing: '0.15em' }}
                    >
                      Read Article
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Substack CTA */}
        <section className="bg-[#0D0D0D] py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <SectionLabel>Newsletter</SectionLabel>
            <h2
              className="font-display text-white leading-none tracking-[0.03em] mt-2"
              style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
            >
              JOIN THE COMMUNITY
            </h2>
            <p className="font-body text-sm text-[#888888] leading-relaxed mt-4 max-w-lg mx-auto tracking-wide">
              In-depth training philosophy, health insights, and coaching content direct from
              Jacques. Never miss out.
            </p>
            <a
              href="https://sirensandtitansfitness.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 font-body text-xs font-medium uppercase bg-[#4A7C26] hover:bg-[#3D6B1E] text-white px-10 py-4 transition-colors duration-200"
              style={{ letterSpacing: '0.15em' }}
            >
              Follow on Substack →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
