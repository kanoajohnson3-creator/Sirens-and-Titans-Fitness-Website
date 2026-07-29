import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Jacques DeVore | Sirens & Titans Fitness',
  description:
    'CSCS certified strength coach with 20+ years experience. Founder of Sirens & Titans Fitness, West Los Angeles.',
}

const credentials = [
  'CSCS',
  'Precision Nutrition Coach',
  'Primal Health Coach',
  'USA Cycling Coach',
  'MBA Pepperdine',
  'BA Economics UC Davis',
]

type Podcast = {
  show: string
  host?: string
  topic: string
  label: string
  href: string
  image?: string
}

const podcasts: Podcast[] = [
  {
    show: 'LA Sober Podcast',
    host: 'Bill Raymond',
    topic: 'Health longevity and feeling your best as you age',
    label: 'LISTEN',
    href: 'https://www.youtube.com/watch?v=Ox59mhZtMUI',
    image: '/BILL+JACQUES+PODCAST.webp',
  },
  {
    show: 'TriLinc Global Podcast',
    host: 'TriLinc Global',
    topic: 'Balance and Beyond: From Wall Street to Wellness',
    label: 'LISTEN',
    href: 'https://lnkd.in/gedeifCx',
    image: '/Jacques%20Podcast%20photo.webp',
  },
  {
    show: 'Simon Ward Cycling Podcast',
    host: 'Simon Ward',
    topic: 'Why MSP matters more than FTP for cyclists',
    label: 'LISTEN',
    href: 'https://simonward.podbean.com/e/to-be-a-faster-cyclist-forget-ftp-msp-is-more-important-jacques-devore/',
  },
  {
    show: 'Dr. Emily Kiberd Podcast',
    host: 'Dr. Emily Kiberd',
    topic: 'How to use microdosing fitness to increase longevity',
    label: 'LISTEN',
    href: 'https://podcasts.apple.com/ca/podcast/65-how-to-use-micro-dosing-fitness-to-increase-longevity/id1425627401',
  },
  {
    show: 'Strength Coach TV',
    host: 'Anthony Renna',
    topic: 'Interview and gym tour',
    label: 'WATCH',
    href: 'https://www.youtube.com/watch?v=yYcGqFYGzkw',
  },
  {
    show: 'Primal Blueprint Podcast',
    host: 'Mark Sisson',
    topic: 'Maximum Overload for Cyclists',
    label: 'LISTEN',
    href: 'http://blog.primalblueprint.com/episode-197-jacques-devore/',
  },
  {
    show: 'Strength Coach Podcast',
    host: 'strengthcoach.com',
    topic: 'Maximum Overload for Cyclists deep dive',
    label: 'LISTEN',
    href: 'https://www.acast.com/thestrengthcoachpodcast/212--maximum-overload-for-cyclists-with-jacques-devore',
  },
  {
    show: 'Ron McKeefery Chalk Talk',
    host: 'Ron McKeefery',
    topic: 'The concept of power and sustainable power in athletes',
    label: 'LISTEN',
    href: 'https://ronmckeefery.podbean.com/e/igct-episode-196-jacques-devore-look-at-it-with-fresh-eyes/',
  },
  {
    show: 'End of Three Fitness',
    topic: 'Power and power training levels',
    label: 'LISTEN',
    href: 'http://www.endofthreefitness.com/power-power-training-levels-jacques-devore/',
  },
  {
    show: 'ContinueFit / Strength Coach TV',
    topic: 'A gym ahead of its time',
    label: 'LISTEN',
    href: 'https://continuefit.com/a-gym-ahead-of-its-time-episode-59-sirens-titans-fitness-strength-coach-tv/',
  },
  {
    show: 'Endurance Ladies Podcast',
    topic: 'Why you need to lift weights now',
    label: 'LISTEN',
    href: 'http://enduranceladies.com/27-why-you-need-to-lift-weights-now-with-coach-jacques-devore/',
  },
  {
    show: 'Consummate Athlete Podcast',
    topic: 'Strength for cyclists',
    label: 'LISTEN',
    href: 'https://consummateathlete.wordpress.com/2017/08/16/strength-for-cyclists-jacques-devore/',
  },
  {
    show: '40+ Fitness Podcast',
    topic: 'Weightlifting and training for power for athletes 40 and above',
    label: 'LISTEN',
    href: 'https://www.stitcher.com/podcast/40-fitness-podcast/e/50731127',
  },
  {
    show: 'The Mystery Tin Podcast',
    topic: 'The state of fitness today',
    label: 'LISTEN',
    href: 'https://themtpn.com/2015/11/09/202-jacques-devore/',
  },
  {
    show: 'Red Kite Prayer - The Paceline Podcast',
    topic: 'All things competitive cycling',
    label: 'LISTEN',
    href: 'http://redkiteprayer.com/2017/06/the-paceline-podcast-73/',
  },
  {
    show: 'Scientific Triathlon Podcast',
    topic: 'Fitness and training for triathletes',
    label: 'LISTEN',
    href: 'https://scientifictriathlon.com/podcast/',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#080808]">
        {/* Hero */}
        <div className="h-96 bg-[#111111] flex items-end pt-24 pb-16 border-b border-[#1E1E1E]">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <SectionLabel>Founder and Head Coach</SectionLabel>
            <h1
              className="font-display text-white leading-none tracking-[0.03em]"
              style={{ fontSize: 'clamp(3.5rem, 11vw, 8rem)' }}
            >
              JACQUES DeVORE
            </h1>
          </div>
        </div>

        {/* Main bio section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Photo */}
              <div className="min-h-[600px] relative overflow-hidden">
                <Image
                  src="/Jacques%20headshot.webp"
                  alt="Jacques DeVore"
                  fill
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />
              </div>

              {/* Bio */}
              <div className="pl-0 lg:pl-12 flex flex-col justify-center">
                <SectionLabel>Credentials</SectionLabel>
                <div className="flex flex-wrap gap-2 mb-8">
                  {credentials.map((c) => (
                    <span
                      key={c}
                      className="font-body text-[10px] font-medium uppercase border border-[#1E1E1E] text-white px-3 py-1.5 hover:border-[#4A7C26]/40 hover:text-[#4A7C26]/80 transition-colors duration-200"
                      style={{ letterSpacing: '0.15em' }}
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <div className="space-y-4 text-base font-body text-white leading-relaxed tracking-wide">
                  <p>
                    Jacques DeVore is a Certified Strength and Conditioning Specialist with over 20
                    years of experience training athletes from high school to Olympic and
                    professional level. He founded Titan Sports Performance Center in Santa Barbara
                    over 20 years ago before opening Sirens and Titans Fitness in West Los Angeles.
                  </p>
                  <p>
                    Jacques coauthored <em>Bicycling Maximum Overload for Cyclists</em> published
                    by Rodale Press, a book about strength and power training for cyclists that
                    challenges conventional endurance training wisdom. He currently holds the
                    unofficial world record for a mile on the Versaclimber.
                  </p>
                  <p>
                    Jacques has been a competitive athlete his entire life, competing in wrestling
                    in high school and at UC Davis. He has also competed in track, cross country,
                    lacrosse, martial arts, and full contact kickboxing. In bicycle racing Jacques
                    competes at an expert level on the mountain bike and as a Category 3 road
                    racer.
                  </p>
                  <p>
                    Before dedicating himself full time to fitness Jacques had a long career in
                    finance. He was also CEO of Vert Centers of Santa Monica, a sports performance
                    rehabilitation center. He holds a Masters in Business Administration from
                    Pepperdine University and a BA in Economics from UC Davis.
                  </p>
                </div>

                {/* Pull quote */}
                <blockquote className="border-l-4 border-[#2D5016] pl-6 mt-8">
                  <p
                    className="font-display text-[#4A7C26] leading-tight tracking-[0.04em]"
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}
                  >
                    WE ARE COACHES NOT TRAINERS. A COACH&rsquo;S JOB IS TO WIN.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Media section */}
        <section className="bg-[#0D0D0D] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <SectionLabel>Media</SectionLabel>
            <h2
              className="font-display text-white leading-none tracking-[0.03em] mb-16"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              FEATURED APPEARANCES
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Book callout — two-column with cover image */}
              <div className="bg-[#141414] p-8">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <Image
                      src="/MaximumOverloadBook.webp"
                      alt="Maximum Overload for Cyclists book cover"
                      width={200}
                      height={280}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <span
                      className="inline-block rounded-full bg-[#4A7C26]/20 text-[#4A7C26] text-sm px-3 py-1 font-medium w-fit"
                      style={{ letterSpacing: '0.1em' }}
                    >
                      PUBLISHED BY RODALE PRESS
                    </span>
                    <h3
                      className="font-display text-white leading-none tracking-[0.04em] mt-4"
                      style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)' }}
                    >
                      MAXIMUM OVERLOAD FOR CYCLISTS
                    </h3>
                    <p className="font-body text-base text-white leading-relaxed tracking-wide mt-3">
                      A radical strength-based training program for increasing cycling speed,
                      athletic longevity, and overall health in half the training time.
                    </p>
                    <a
                      href="https://www.amazon.com/search?q=maximum+overload+cyclists+devore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-5 font-body text-sm font-medium uppercase bg-[#4A7C26] hover:bg-[#3D6B1E] text-white px-6 py-2.5 transition-colors duration-200 w-fit"
                      style={{ letterSpacing: '0.15em' }}
                    >
                      Get the Book →
                    </a>
                  </div>
                </div>
              </div>

              {/* Video */}
              <div>
                <span
                  className="inline-block rounded-full bg-[#4A7C26]/20 text-[#4A7C26] text-sm px-3 py-1 font-medium mb-4"
                  style={{ letterSpacing: '0.1em' }}
                >
                  WEBINAR
                </span>
                <h3
                  className="font-display text-white leading-none tracking-[0.04em] mt-4"
                  style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}
                >
                  HOW TO LOSE THE WEIGHT AND KEEP IT OFF
                </h3>
                <p className="font-body text-sm text-white mt-2 mb-4">
                  Planibble Webinar featuring Jacques DeVore
                </p>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/iVqB1B1rAX0"
                  title="How to Lose the Weight and Keep it Off"
                  frameBorder="0"
                  allowFullScreen
                  className="mt-4 rounded-sm"
                />
              </div>
            </div>

            {/* Voyage LA photo feature */}
            <div className="mt-12 relative h-64 overflow-hidden">
              <Image
                src="/Jacques%20Voyage%20LA%20photo.webp"
                alt="Jacques DeVore — Voyage LA Feature"
                fill
                loading="lazy"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="px-8">
                  <span
                    className="font-body text-[10px] font-medium uppercase text-[#4A7C26]"
                    style={{ letterSpacing: '0.2em' }}
                  >
                    As Seen In
                  </span>
                  <h3
                    className="font-display text-white leading-none tracking-[0.04em] mt-2"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                  >
                    VOYAGE LA
                  </h3>
                  <a
                    href="https://voyagela.com/interview/meet-jacques-devore-of-sirens-titans-fitness-in-west-los-angeles/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 font-body text-sm font-medium uppercase text-[#4A7C26] border border-[#4A7C26] px-6 py-2 hover:bg-[#4A7C26] hover:text-white transition-colors duration-200"
                    style={{ letterSpacing: '0.15em' }}
                  >
                    Read Feature →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Podcasts */}
        <section className="bg-[#111111] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <SectionLabel>Podcast Appearances</SectionLabel>
            <h2
              className="font-display text-white leading-none tracking-[0.03em] mb-16"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              JACQUES ON THE MIC
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {podcasts.map((pod) => (
                <div
                  key={pod.show}
                  className="bg-[#141414] border-l-2 border-[#2D5016] overflow-hidden flex flex-col"
                >
                  {pod.image && (
                    <div className="relative h-40 overflow-hidden flex-shrink-0">
                      <Image
                        src={pod.image}
                        alt={pod.show}
                        fill
                        loading="lazy"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/55" />
                    </div>
                  )}
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <div>
                      <p
                        className="font-body text-[10px] font-medium uppercase text-[#4A7C26]"
                        style={{ letterSpacing: '0.2em' }}
                      >
                        {pod.show}
                      </p>
                      {pod.host && (
                        <p className="font-body text-[10px] text-white mt-0.5">
                          Host: {pod.host}
                        </p>
                      )}
                    </div>
                    <p className="font-body text-base text-white leading-snug">{pod.topic}</p>
                    <a
                      href={pod.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-[10px] font-medium uppercase text-[#4A7C26] flex items-center gap-2 hover:gap-3 transition-all duration-200 mt-auto w-fit"
                      style={{ letterSpacing: '0.2em' }}
                    >
                      {pod.label} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
