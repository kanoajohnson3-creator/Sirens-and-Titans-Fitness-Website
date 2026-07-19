import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Elite Athletes | Sirens & Titans Fitness',
  description:
    'From Olympians to D1 athletes. Jacques DeVore and the Sirens & Titans team have trained champions across every level of sport.',
}

type FeaturedAthlete = {
  slug: string
  badge: string
  name: string
  sport: string
  story: string
  attribution: string | null
  flipped: boolean
  image: string
  gallery?: string[]
}

const featuredAthletes: FeaturedAthlete[] = [
  {
    slug: 'hunter-mcintyre',
    badge: 'HYROX WORLD CHAMPION',
    name: 'HUNTER McINTYRE',
    sport: 'Two-Time HYROX World Champion',
    story:
      'We would like to congratulate Hunter McIntyre on his second place finish at the HYROX 2025 World Championships in Chicago. Hunter McIntyre is a Two Time HYROX World Championship athlete who we have had the privilege of training to help him excel as a prominent obstacle course racer and endurance World class athlete.',
    attribution: null,
    flipped: false,
    image: '/Hunter-McIntyre-HYROX-World-Championships-Run-2.webp',
  },
  {
    slug: 'david-zabriskie',
    badge: '6X USA TIME TRIAL CHAMPION',
    name: 'DAVID ZABRISKIE',
    sport: 'Professional Cyclist · 7x Tour de France',
    story:
      'I was so lucky to have found Jacques. I have seen a lot of coaches during my career as a professional cyclist for 15 years. I am a six time United States Time Trial Champion, have raced the Tour de France seven times and participated in 13 Grand Tours. Jacques presented me with a unique method for training and an impressive understanding of the underlying physiology at play for both on and off the bike. My power improved dramatically and my ability to hold power up a climb increased substantially. He is a strength and conditioning coach that has a tremendous understanding of what an endurance athlete needs to succeed.',
    attribution: 'David Zabriskie · Professional Cyclist · 6x USA TT Champion',
    flipped: true,
    image: '/David%20Z.webp',
  },
  {
    slug: 'katherine-wood',
    badge: 'PRO MTB CYCLIST',
    name: 'KATHERINE WOOD',
    sport: 'UCI Pro Mountain Bike Racer',
    story:
      'In January 2023 I came to Jacques after signing my first pro cycling contract. When Jacques first told me he could bring my power output up by 10% before the end of the first year, I was skeptical. I would go on to set multiple PRs across the entire range from 5 seconds to 90 minutes. I walked away from the US National Championship with a new threshold power that was 16% higher than where I was when we first began just six months earlier. The work that Jacques and his team put into my training has translated to higher steadier output, increased muscular endurance, and an overall improvement in my ability to trust my strength.',
    attribution: 'Katherine Wood · September 2023',
    flipped: false,
    image: '/Katherine3.webp',
    gallery: ['/Katherine1.webp', '/Katherine2.webp', '/Katherine4.webp'],
  },
  {
    slug: 'jason-d',
    badge: 'TENNIS',
    name: 'JASON D.',
    sport: 'Competitive Tennis · Rafa Nadal Academy',
    story:
      'I recently spent a week playing tennis several hours a day at the Rafa Nadal Academy in Spain. This was something I could not have done a year ago. Jacques spent months ahead of time personalizing my workouts to help me reach my goal of an injury free trip of a lifetime. His ability to listen and encourage while sharing his wealth of knowledge is remarkable. He and his coaches make a great team. There is no substitute for a great fitness and strength coach.',
    attribution: null,
    flipped: false,
    image: '/JasonRafa.webp',
  },
  {
    slug: 'luca-russo',
    badge: 'PRO SOCCER · ITALY',
    name: 'LUCA RUSSO',
    sport: 'Professional Soccer Player · Italy',
    story:
      'At 18 I play for a professional soccer team in Italy fighting for a starting spot. Every day Jacques pushed my boundaries. I went from a 235 pound hex bar deadlift for 5 reps to a 405 pound hex bar deadlift for 3 reps. My dumbbell rows improved from 45 pounds to almost 100 pounds for 5 reps. I also improved my 40 yard sprint time from around 4.65 seconds to a low 4.5. Beyond the gym I developed a stronger mindset. I am incredibly grateful to Jacques. His sometimes brutal honesty has given me the confidence to achieve my goals.',
    attribution: null,
    flipped: true,
    image: '/Luca+Picture+1.webp',
  },
]

const individualAthletes = [
  { name: 'Hunter McIntyre', credential: '2x HYROX World Champion' },
  { name: 'Cassius Marsh', credential: 'Defensive End, San Francisco 49ers' },
  { name: 'Felix Sanchez', credential: '2x Olympic Gold Medalist 400m Hurdles' },
  { name: 'David Zabriskie', credential: 'Professional Cyclist, 6x USA TT Champion' },
  { name: "Shaq O'Neal", credential: 'Los Angeles Lakers' },
  { name: 'Mark Madsen', credential: 'Los Angeles Lakers' },
  { name: 'Devean George', credential: 'Los Angeles Lakers' },
  { name: 'Rick Fox', credential: 'Los Angeles Lakers' },
  { name: 'Mitch Richmond', credential: 'Los Angeles Lakers' },
  { name: 'Giancarlo Stanton', credential: 'New York Yankees' },
  { name: 'Ricky Nolasco', credential: 'Los Angeles Angels' },
  { name: 'A.J. Ramos', credential: 'New York Mets' },
  { name: 'Regan Upshaw', credential: 'Oakland Raiders' },
  { name: 'Chris Cash', credential: 'Detroit Lions' },
  { name: 'Brian Williams', credential: 'Detroit Lions' },
  { name: 'Chris Mims', credential: 'San Diego Chargers' },
  { name: 'Frank Strong', credential: 'San Francisco 49ers' },
  { name: 'Dehani Jones', credential: 'New York Jets' },
  { name: 'Billy Knight', credential: 'UCLA Basketball' },
  { name: 'Sean Kemp', credential: 'Orlando Magic' },
  { name: 'Rasual Butler', credential: 'Miami Heat' },
  { name: 'Marcus Haislip', credential: 'Milwaukee Bucks' },
  { name: 'Tito Maddox', credential: 'Houston Rockets' },
  { name: 'Ernie Banks', credential: 'Chicago Baseball Legend' },
  { name: 'Ato Boldon', credential: 'Olympic 100m Sprinter' },
  { name: 'Inger Miller', credential: 'Olympic 100m Sprinter' },
  { name: 'Tori Edwards', credential: 'USA Olympic Track and Field' },
  { name: 'Dotsie Cowden', credential: "US National Women's Cycling" },
  { name: 'Krishna Curry', credential: 'Professional USA 800m Runner' },
  { name: 'Lisa Munoz', credential: 'Concept2 Rower World Record Holder' },
  { name: 'Gabriela Volekova', credential: "ATP Women's Professional Tennis" },
  { name: 'Jeff Miller', credential: 'Professional Tennis' },
  { name: 'Tra Holder', credential: 'Arizona State Basketball' },
  { name: 'Tahaan Goodman', credential: 'UCLA Football' },
  { name: 'Trent Turner', credential: 'Loyola University Maryland Lacrosse' },
  { name: 'Owen Gaffney', credential: 'Harvard University Lacrosse' },
  { name: 'Jack Shoemaker', credential: 'Villanova University Lacrosse' },
  { name: 'Patrick Murphy', credential: 'Dartmouth College Soccer' },
  { name: 'Pete Griffith', credential: 'Northwestern University Golf' },
  { name: 'Matt Lurie', credential: 'Johns Hopkins Tennis' },
  { name: 'Andrew Planting', credential: 'Swimming' },
]

const teams = [
  { name: 'Los Angeles Galaxy', credential: 'MLS Professional Soccer' },
  { name: 'Orange County Zodiac', credential: 'Professional Soccer' },
  { name: 'San Fernando Valley Eagles', credential: 'USL Professional Soccer' },
  { name: 'United States National Field Hockey', credential: "Men's Senior Team" },
  { name: 'LA Galaxy Academy', credential: 'Youth Development' },
  { name: "UCSB Women's Volleyball", credential: 'NCAA Division I' },
  { name: "UCSB Women's Basketball", credential: 'NCAA Division I' },
  { name: 'UCSB Rugby', credential: 'Collegiate' },
  { name: 'UCSB Crew', credential: 'Collegiate' },
  { name: "UCSB Women's Field Hockey", credential: 'NCAA Division I' },
  { name: "UCSB Men's Lacrosse", credential: 'NCAA Division I' },
  { name: "UCSB Men's Soccer", credential: 'NCAA Division I' },
  { name: "SBCC Men's Soccer", credential: 'Collegiate' },
  { name: "SBCC Men's Volleyball", credential: 'Collegiate' },
  { name: 'Westmont Baseball', credential: 'NAIA' },
  { name: "Westmont Men's and Women's Soccer", credential: 'NAIA' },
  { name: 'Santa Barbara Condors Ultimate Frisbee', credential: 'Club' },
  { name: 'Professional Polo Teams', credential: 'Elite Equestrian Sport' },
]

const capabilities = [
  'Increase Vertical Jump',
  'Improve Agility and Quickness',
  'Increase Strength and Power',
  'Increase Speed and First Step',
  'Improve Core Strength',
  'Increase Cardiovascular Performance',
  'Better Body Composition',
  'Increase Power Production',
  'Improve Dynamic Balance',
  'Increase Maximum Sustained Power',
]

export default function AthletesPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#080808]">
        {/* Hero */}
        <div className="h-64 bg-[#111111] flex items-end pb-12 border-b border-[#1E1E1E]">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <SectionLabel>Elite Athletes</SectionLabel>
            <h1
              className="font-display text-white leading-none tracking-[0.03em]"
              style={{ fontSize: 'clamp(3rem, 10vw, 6.5rem)' }}
            >
              ATHLETES WE HAVE BUILT
            </h1>
            <p className="font-body text-base text-white mt-3 tracking-wide">
              There is always a next level.
            </p>
          </div>
        </div>

        {/* Pull quote */}
        <div className="bg-[#0D0D0D] py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <blockquote>
              <p
                className="font-display text-[#4A7C26] italic leading-tight tracking-[0.03em]"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}
              >
                &ldquo;THE BEST ATHLETES OF THE FUTURE ARE DETERMINED BY THOSE WHO RECEIVE THE BEST
                OF THEMSELVES IN THE PRESENT. MOST ATHLETES DON&rsquo;T REALIZE HOW GOOD THEY
                COULD HAVE BEEN.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>

        {/* Featured editorial cards */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <SectionLabel>Featured Stories</SectionLabel>
            <h2
              className="font-display text-white leading-none tracking-[0.03em] mb-16"
              style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
            >
              IN DEPTH
            </h2>

            <div className="flex flex-col gap-px bg-[#1E1E1E]">
              {featuredAthletes.map((athlete) => (
                <div
                  key={athlete.name}
                  id={athlete.slug}
                  className="scroll-mt-24 grid grid-cols-1 md:grid-cols-2 min-h-[500px] bg-[#080808]"
                >
                  {/* Image area */}
                  <div
                    className={`relative overflow-hidden ${athlete.flipped ? 'md:order-2' : 'md:order-1'}`}
                    style={{ minHeight: '320px' }}
                  >
                    <Image
                      src={athlete.image}
                      alt={athlete.name}
                      fill
                      loading="lazy"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    {/* Badge */}
                    <div className="absolute top-6 left-6">
                      <span
                        className="rounded-full bg-[#4A7C26]/20 text-[#4A7C26] text-sm px-3 py-1 font-medium font-body backdrop-blur-sm"
                        style={{ letterSpacing: '0.1em' }}
                      >
                        {athlete.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content area */}
                  <div
                    className={`bg-[#141414] p-8 md:p-12 flex flex-col justify-center ${athlete.flipped ? 'md:order-1' : 'md:order-2'}`}
                  >
                    <h3
                      className="font-display text-white leading-none tracking-[0.04em] mb-2"
                      style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                    >
                      {athlete.name}
                    </h3>
                    <p
                      className="font-body text-[10px] font-medium uppercase text-[#888888] mb-6"
                      style={{ letterSpacing: '0.2em' }}
                    >
                      {athlete.sport}
                    </p>
                    <p className="font-body text-base text-white leading-relaxed tracking-wide">
                      {athlete.story}
                    </p>
                    {athlete.attribution && (
                      <p className="font-body text-sm text-[#4A7C26]/70 italic mt-6">
                        — {athlete.attribution}
                      </p>
                    )}

                    {/* Katherine Wood photo gallery */}
                    {athlete.gallery && (
                      <div className="flex gap-2 mt-6">
                        {athlete.gallery.map((src) => (
                          <div
                            key={src}
                            className="relative flex-1 h-20 rounded-sm overflow-hidden"
                          >
                            <Image
                              src={src}
                              alt=""
                              fill
                              loading="lazy"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full roster */}
        <section className="bg-[#0D0D0D] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Individual athletes */}
              <div>
                <SectionLabel>Individual Athletes</SectionLabel>
                <ul className="mt-6">
                  {individualAthletes.map((a) => (
                    <li
                      key={a.name}
                      className="flex items-start justify-between gap-4 border-b border-[#1E1E1E] py-3"
                    >
                      <span className="font-body font-medium text-base text-white">{a.name}</span>
                      <span className="font-body text-sm text-[#888888] text-right flex-shrink-0 max-w-[55%]">
                        {a.credential}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Teams */}
              <div>
                <SectionLabel>Teams Trained</SectionLabel>
                <ul className="mt-6">
                  {teams.map((t) => (
                    <li
                      key={t.name}
                      className="flex items-start justify-between gap-4 border-b border-[#1E1E1E] py-3"
                    >
                      <span className="font-body font-medium text-base text-white">{t.name}</span>
                      <span className="font-body text-sm text-[#888888] text-right flex-shrink-0 max-w-[45%]">
                        {t.credential}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities + CTA */}
        <section className="bg-[#141414] py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <SectionLabel>Our Impact</SectionLabel>
            <h2
              className="font-display text-white leading-none tracking-[0.03em] mt-2 mb-10"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}
            >
              WHAT OUR COACHING DELIVERS
            </h2>

            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {capabilities.map((cap) => (
                <span
                  key={cap}
                  className="font-body text-base text-[#888888] border border-[#4A7C26] px-4 py-2 rounded-full hover:text-[#4A7C26] transition-colors duration-200"
                >
                  {cap}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-10">
              <Link
                href="/contact"
                className="font-body text-sm font-medium uppercase bg-[#4A7C26] hover:bg-[#3D6B1E] text-white px-10 py-4 transition-colors duration-200"
                style={{ letterSpacing: '0.15em' }}
              >
                Start Your Evaluation →
              </Link>
              <div className="flex flex-col items-center gap-1">
                <span className="font-body text-sm text-[#888888] uppercase" style={{ letterSpacing: '0.2em' }}>
                  Or call us directly
                </span>
                <a
                  href="tel:3103070200"
                  className="font-display text-3xl text-white hover:text-[#4A7C26] transition-colors duration-200 leading-none tracking-[0.04em]"
                >
                  310-307-0200
                </a>
              </div>
            </div>

            <p className="font-body text-base text-white italic text-center mt-8 max-w-2xl mx-auto leading-relaxed">
              Jacques DeVore helped develop training programs utilizing isokinetic equipment with
              Jim Cotta, Former Strength and Conditioning Coach for the Los Angeles Lakers.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
