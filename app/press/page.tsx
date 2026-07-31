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

type Entry = {
  publication: string
  name?: string
  badge?: string
  date?: string
  host?: string
  headline: string
  description?: string
  href?: string
  image?: string
  linkLabel?: string
  links?: { label: string; href: string }[]
}

const pressArticles: Entry[] = [
  {
    publication: 'LA Hotlist',
    headline: 'Best Gym in Los Angeles',
    href: 'http://la.cityvoter.com/best/gym/fitness/los-angeles',
    linkLabel: 'READ ARTICLE →',
  },
  {
    publication: 'Daily Mail',
    headline: 'Jennifer Lopez and Alex Rodriguez Spotted Outside LA Fitness Center',
    description: 'J-Lo and A-Rod spotted working out at Sirens and Titans Fitness.',
    href: 'https://www.dailymail.co.uk/tvshowbiz/article-4953934/J-Lo-Rod-spotted-outside-LA-fitness-center.html',
    image: '/A%20Rod%20and%20J%20Lo%20photo.webp',
    linkLabel: 'READ ARTICLE →',
  },
  {
    publication: 'BICYCLING MAGAZINE',
    name: 'DENISE MUELLER-KORENEK',
    badge: 'CLIENT SUCCESS STORY',
    headline:
      'Client Denise Mueller-Korenek Breaks the World Record as the Fastest Person Ever on a Bicycle at 183.9 MPH',
    description:
      'Congratulations to our client Denise Mueller-Korenek who broke the world record as the fastest person ever on a bicycle. Denise trained with Jacques and the Sirens and Titans team as part of her preparation for this historic achievement.',
    image: '/Denise.webp',
    links: [
      {
        label: 'READ ARTICLE →',
        href: 'https://www.bicycling.com/news/a23281242/denise-mueller-korenek-breaks-bicycle-speed-record/',
      },
      {
        label: 'WATCH VIDEO →',
        href: 'https://www.youtube.com/watch?v=CkyGSyjNHP0',
      },
    ],
  },
  {
    publication: 'Bicycling Magazine',
    headline: 'Smash Your Limits With This New Strength Training Plan For Cyclists',
    href: 'https://www.bicycling.com/training/a20043102/smash-your-limits-with-this-new-strength-training-plan-for-cyclists/',
    linkLabel: 'READ ARTICLE →',
  },
  {
    publication: 'Los Angeles Times',
    headline: 'VersaClimber Workout - Westwood',
    href: 'http://www.latimes.com/health/la-he-gymrat-versaclimber-westwood-20140809-story.html',
    linkLabel: 'READ ARTICLE →',
  },
  {
    publication: "Men's Journal",
    headline: "Paleo's Latest Converts",
    href: 'http://www.mensjournal.com/health-fitness/nutrition/paleos-latest-converts-20130618',
    linkLabel: 'READ ARTICLE →',
  },
  {
    publication: 'Outside Magazine',
    headline: 'Los Angeles VersaClimber Workout War',
    href: 'http://www.outsideonline.com/fitness/bodywork/the-fit-list/Los-Angeles-VersaClimber-Workout-War.html',
    linkLabel: 'READ ARTICLE →',
  },
  {
    publication: 'Daily Buzz',
    headline: 'Sirens and Titans Featured on Daily Buzz TV',
    href: 'https://www.youtube.com/watch?v=CkyGSyjNHP0&feature=youtu.be',
    linkLabel: 'READ ARTICLE →',
  },
  {
    publication: 'VoyageLA',
    date: 'October 2021',
    headline: 'Exploring Life and Business with Jacques DeVore of Sirens and Titans Fitness',
    href: 'http://voyagela.com/interview/exploring-life-business-with-jacques-devore-of-sirens-and-titans-fitness/',
    linkLabel: 'READ ARTICLE →',
  },
  {
    publication: 'Shoutout LA',
    date: 'April 2021',
    headline: 'Meet Jacques DeVore, Strength and Conditioning Coach CSCS',
    href: 'https://shoutoutla.com/meet-jacques-devore-strength-and-conditioning-coach-cscs-health-and-wellness-coach/',
    linkLabel: 'READ ARTICLE →',
  },
  {
    publication: 'VoyageLA',
    date: '2025',
    headline: 'Life Values and Legacy, Our Chat with Jacques DeVore of West LA',
    href: 'https://voyagela.com/interview/life-values-legacy-our-chat-with-jacques-devore-of-west-la-highlight',
    linkLabel: 'READ ARTICLE →',
  },
  {
    publication: 'SIMPLIFASTER',
    headline: 'Jacques DeVore — Expert Contributor on Sports Performance and Strength Training',
    description:
      'Published expert contributor writing on sports performance power training and strength and conditioning methodology.',
    href: 'https://simplifaster.com/articles/author/jacquesdevore/',
    linkLabel: 'READ ARTICLE →',
  },
]

const podcasts: Entry[] = [
  {
    publication: 'Strength Coach TV',
    headline: 'Interview and Gym Tour',
    href: 'https://www.youtube.com/watch?v=yYcGqFYGzkw',
    linkLabel: 'WATCH →',
  },
  {
    publication: 'LA Sober Sessions Podcast',
    host: 'Bill Raymond',
    headline: 'Health Longevity and Feeling Your Best As You Age',
    href: 'https://www.youtube.com/watch?v=Ox59mhZtMUI',
    image: '/BILL+JACQUES+PODCAST.webp',
    linkLabel: 'LISTEN →',
  },
  {
    publication: 'TriLinc Global Podcast',
    host: 'TriLinc Global',
    headline: 'Balance and Beyond: From Wall Street to Wellness',
    href: 'https://lnkd.in/gedeifCx',
    image: '/Jacques%20Podcast%20photo.webp',
    linkLabel: 'LISTEN →',
  },
  {
    publication: 'Simon Ward Cycling Podcast',
    headline: 'Why MSP Matters More Than FTP',
    href: 'https://simonward.podbean.com/e/to-be-a-faster-cyclist-forget-ftp-msp-is-more-important-jacques-devore/',
    linkLabel: 'LISTEN →',
  },
  {
    publication: 'Dr Emily Kiberd Podcast',
    headline: 'How to Use Microdosing Fitness to Increase Longevity',
    href: 'https://podcasts.apple.com/ca/podcast/65-how-to-use-micro-dosing-fitness-to-increase-longevity/id1425627401',
    linkLabel: 'LISTEN →',
  },
  {
    publication: 'Primal Blueprint Podcast',
    host: 'Mark Sisson',
    headline: 'Maximum Overload for Cyclists',
    href: 'http://blog.primalblueprint.com/episode-197-jacques-devore/',
    linkLabel: 'LISTEN →',
  },
  {
    publication: 'Strength Coach Podcast',
    headline: 'Maximum Overload for Cyclists Deep Dive',
    href: 'https://www.acast.com/thestrengthcoachpodcast/212--maximum-overload-for-cyclists-with-jacques-devore',
    linkLabel: 'LISTEN →',
  },
  {
    publication: 'Ron McKeefery Chalk Talk',
    headline: 'The Concept of Power and Sustainable Power in Athletes',
    href: 'https://ronmckeefery.podbean.com/e/igct-episode-196-jacques-devore-look-at-it-with-fresh-eyes/',
    linkLabel: 'LISTEN →',
  },
  {
    publication: 'That Triathlon Show — EP#62',
    host: 'Mikael Eriksson',
    headline:
      'Maximum Overload — A Strength Based Cycling Program for Improved Speed and Endurance in Less Time. How pro cyclist David Zabriskie used the program to increase cycling power by 15% while losing body weight.',
    href: 'https://scientifictriathlon.com/tts62/',
    linkLabel: 'LISTEN →',
  },
  {
    publication: 'Primal Blueprint Podcast — EP#197',
    host: 'Mark Sisson',
    headline:
      'Maximum Overload for Cyclists — a radical strength based training program for increased cycling speed athletic longevity and overall health in half the training time.',
    href: 'https://iheart.com/podcast/263-primal-blueprint-po-29747240/episode/197-jacques-devore-51529249/',
    linkLabel: 'LISTEN →',
  },
  {
    publication: 'Go Solo — Entrepreneurship Interview',
    host: 'Go Solo / Collabs.io',
    headline:
      'Delivers Results in Fitness — Jacques discusses building Sirens and Titans and his philosophy on training with purpose versus just exercising.',
    href: 'https://gosolo.subkit.com/sirens-and-titans-fitness/',
    linkLabel: 'LISTEN →',
  },
  {
    publication: 'SportsEdTV — Senior Contributor Feature',
    host: 'SportsEdTV',
    headline:
      'Jacques DeVore on elite athlete training methodology and Maximum Sustainable Power development.',
    href: 'https://sportsedtv.com/coach/jacques-devore',
    linkLabel: 'READ →',
  },
  {
    publication: 'Strength Coach Podcast — EP#212',
    host: 'Anthony Renna / CONTINUEfit',
    headline: 'Maximum Overload for Cyclists — deep dive on book methodology and application to athlete programming.',
    href: 'https://www.youtube.com/watch?v=x8DWYpR8E_c',
    linkLabel: 'WATCH →',
  },
  {
    publication: 'End of Three Fitness — YouTube',
    host: 'End of Three Fitness',
    headline: 'The Power of POWER in Training at ALL Levels — why training power over strength benefits every sport.',
    href: 'https://www.youtube.com/watch?v=a21CsGKNkKo',
    linkLabel: 'WATCH →',
  },
  {
    publication: '40+ Fitness Podcast — EP#265',
    host: 'Allan Misner',
    headline: 'Using Maximum Overload for Superior Performance — applying the methodology to athletes over 40.',
    href: 'https://www.youtube.com/watch?v=oR28pjniMrE',
    linkLabel: 'WATCH →',
  },
  {
    publication: 'VersaPulley — Training Demo Video',
    host: 'VersaPulley Channel',
    headline: 'Jacques DeVore demonstrates leg squat variations on the VersaPulley for explosive power training.',
    href: 'https://www.youtube.com/watch?v=Cu2T5eWI5So',
    linkLabel: 'WATCH →',
  },
]

function MediaEntry({ entry }: { entry: Entry }) {
  const body = (
    <div className="flex flex-col sm:flex-row sm:items-center gap-6">
      {/* Thumbnail — only when an image is provided */}
      {entry.image && (
        <div className="relative w-full sm:w-32 h-32 flex-shrink-0 overflow-hidden">
          <Image
            src={entry.image}
            alt={entry.headline}
            fill
            loading="lazy"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Publication — left */}
      <div className="sm:w-56 flex-shrink-0">
        <span className="font-display text-3xl text-[#4A7C26] leading-none block">
          {entry.publication}
        </span>
        {entry.name && (
          <span className="font-body text-sm font-medium text-white mt-2 block">
            {entry.name}
          </span>
        )}
        {(entry.date || entry.host) && (
          <span className="font-body text-sm text-white mt-2 block">
            {entry.date ?? `Host: ${entry.host}`}
          </span>
        )}
      </div>

      {/* Headline + description — center */}
      <div className="flex-1 text-center sm:text-left">
        {entry.badge && (
          <span
            className="inline-block rounded-full bg-[#4A7C26]/20 text-[#4A7C26] text-xs px-3 py-1 font-medium font-body mb-2"
            style={{ letterSpacing: '0.1em' }}
          >
            {entry.badge}
          </span>
        )}
        <h3 className="font-body text-lg font-medium text-white group-hover:text-[#4A7C26] transition-colors duration-200 block sm:mt-0">
          {entry.headline}
        </h3>
        {entry.description && (
          <p className="font-body text-base text-white mt-2">{entry.description}</p>
        )}
      </div>

      {/* Link(s) — right */}
      {entry.links ? (
        <div className="flex flex-col gap-3 mt-4 sm:mt-0 flex-shrink-0">
          {entry.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-medium text-[#4A7C26]/70 hover:text-[#4A7C26] flex items-center gap-2 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : (
        <span className="font-body text-sm font-medium text-[#4A7C26]/70 group-hover:text-[#4A7C26] flex items-center gap-2 transition-all duration-200 mt-4 sm:mt-0 flex-shrink-0">
          {entry.linkLabel}
        </span>
      )}
    </div>
  )

  if (entry.links) {
    return (
      <div className="block max-w-4xl mx-auto px-6 py-12 border-b border-[#1E1E1E]">{body}</div>
    )
  }

  return (
    <a
      href={entry.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block max-w-4xl mx-auto px-6 py-12 border-b border-[#1E1E1E]"
    >
      {body}
    </a>
  )
}

export default function PressPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#080808]">
        {/* Hero */}
        <div className="h-64 bg-[#111111] flex items-end pt-24 pb-12 border-b border-[#1E1E1E]">
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
          </div>

          <div className="flex flex-col">
            {pressArticles.map((entry) => (
              <MediaEntry key={entry.headline} entry={entry} />
            ))}
          </div>
        </section>

        {/* Podcast appearances */}
        <section className="bg-[#0D0D0D] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <SectionLabel>Podcast Appearances</SectionLabel>
            <h2
              className="font-display text-white leading-none tracking-[0.03em] mb-16"
              style={{ fontSize: 'clamp(2.25rem, 6vw, 3.75rem)' }}
            >
              ON THE MIC
            </h2>
          </div>

          <div className="flex flex-col">
            {podcasts.map((entry) => (
              <MediaEntry key={entry.headline} entry={entry} />
            ))}
          </div>
        </section>

        {/* Substack CTA */}
        <section className="bg-[#141414] py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <SectionLabel>Newsletter</SectionLabel>
            <h2
              className="font-display text-white leading-none tracking-[0.03em] mt-2"
              style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
            >
              JOIN THE COMMUNITY
            </h2>
            <p className="font-body text-base text-white leading-relaxed mt-4 max-w-lg mx-auto tracking-wide">
              In-depth training philosophy, health insights, and coaching content direct from
              Jacques. Never miss out.
            </p>
            <a
              href="https://sirensandtitansfitness.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 font-body text-sm font-medium uppercase bg-[#4A7C26] hover:bg-[#3D6B1E] text-white px-10 py-4 transition-colors duration-200"
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
