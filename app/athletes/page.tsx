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
  imagePosition?: string
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
  {
    slug: 'trent',
    badge: 'D1 LACROSSE',
    name: 'TRENT',
    sport: 'Loyola University Maryland · D1 Lacrosse',
    story:
      'As I watched my teammates I previously played against just a year or so ago, I began to think about what I needed to do to get ahead of my class as I approached my college career. I realized I could not step up my game doing the same workouts as I did in high school. I saw two of my former teammates play at Harvard University and Villanova University excelling on the field as college lacrosse players. So I reached out during the offseason to find out what they were doing to train, get ahead of their peers, and transform their bodies to withstand the next level. Ironically they both were training locally with Jacques and the Sirens and Titans team. I immediately reached out to Jacques to inquire and schedule a personal assessment to see if this was the fit I was looking for. I was surprised by how tailored the workouts were to my personal position on the field. It was important that I trained with someone who knew the specifics of the body movements necessary for a D1 college Lacrosse player. It was also important that the trainer fed me the right mental food to get that extra rep. Jacques, Julian, and his team checked off all the boxes. Jacques and his team built a program that enhanced my agility, strength, and mental capacities. I feel more than ready and cannot wait to suit up this season with the Loyola University of Maryland Greyhounds.\n\nThank you Jacques, Julian and the team for the hard work and preparation.',
    attribution: null,
    flipped: false,
    image: '/Trent2.webp',
    imagePosition: '40% center',
    gallery: ['/Trent2.webp', '/Trent3.webp', '/Trent4.webp', '/Trent5.webp'],
  },
  {
    slug: 'owen-gaffney',
    badge: 'HARVARD LACROSSE',
    name: 'OWEN GAFFNEY',
    sport: 'Harvard University · D1 Lacrosse',
    story:
      'After completing my senior year of high school I knew the summer going into my Freshman year was crucial for a successful Freshman season. My good friend Patrick Murphy who played soccer at Dartmouth recommended Jacques having nothing but great things to say about him and his program. Patrick told me that Sirens and Titans would push me and help me achieve my goals and he was right. During the first session I laid out my goals with Jacques and he formulated a unique plan to help me attain those goals. Every workout is uniquely tailored to the individual and calculated to help attain results.\n\nI started training in the Summer of 2021 and I have not looked back. I trained with Jacques and Alfonso for three quarters of the summer and I arrived on campus in late August with a noticeable difference in my fitness level. I worked out in the morning two to three times a week and sprinkled in some VersaClimber sessions which improved my mental strength and aerobic capacity significantly.\n\nThe greatest part about the program in my opinion is the constant strive for improvement. Whether it is the daily quote on the white board or the reminders from Jacques mid-set Sirens and Titans is an extremely motivating space. Jacques works tirelessly to help his clients improve. Also after a couple of weeks I started to build relationships with the other athletes and I could feel the sense of community that Sirens and Titans offer. Everyone pushes each other to be better and we all support each other a testament to Jacques leadership.\n\nDuring my Freshman season I was able to start in every game. I felt stronger quicker and more balanced than ever before and it greatly helped my confidence when stepping on the field with guys four years older than myself. I knew that Jacques prepared me for the season and I felt my overall athleticism increase.',
    attribution: null,
    flipped: true,
    image: '/Owen_G_Collage.webp',
  },
  {
    slug: 'patrick-murphy',
    badge: 'DARTMOUTH SOCCER',
    name: 'PATRICK MURPHY',
    sport: 'Dartmouth College · D1 Soccer',
    story:
      'I am a collegiate soccer player at Dartmouth with the goal of playing professionally once I graduate. I have suffered with some nagging Patella Tendonitis for the last few years. I had worked with some top physical therapy people across the country received three to four PRP injections and even had surgery on the area. In spite of this I saw little to no relief. I contacted Jacques as I was familiar with his training methodology when I was in high school and playing at the Galaxy Academy. I came to Jacques because I had simply run out of options and had spent the better part of two years either on the sidelines or in serious knee pain when playing. When I first came in to see Jacques I could barely squat and had trouble putting any sort of weight on my right leg without severe pain in my knee. After working with Jacques for two to three months I am confident and thankful to say that I am the healthiest I have been in over three years and have very minimal pain in the same area. Unlike traditional doctors and physical therapy personnel Jacques was able to take a more holistic view of my body and realize that my knee pain was a result of muscular imbalances and improper techniques that I had developed from playing through injuries. We were able to work together to find a solution and develop a plan to get healthy and the results speak for themselves.\n\nI would recommend Jacques to any high level athlete because he is a genius who has a knowledge of the body and the way that it operates unlike anybody I have ever worked with before. On top of that he truly cares about his clients and their wellbeing and is willing to do anything to help them achieve their personal goals.',
    attribution: null,
    flipped: false,
    image: '/Patrick_Murphy.webp',
  },
  {
    slug: 'david-baar',
    badge: 'PROFESSIONAL CYCLIST',
    name: 'DAVID BAAR',
    sport: 'Professional Cyclist · Tour de Bintan',
    story:
      'One week ago I completed the 2018 edition of the Tour de Bintan. Jacques and I specifically targeted this race weekend as my first-half season highlight. Preparation began in October of last year. Without as much on-bike training as I planned I can only credit my performance to the efficiency and effectiveness of Jacques Maximum Overload training. With only two hours a week in the gym I was able to consistently work out with him which is key if you want to consistently improve.',
    attribution: 'David Baar · Professional Cyclist',
    flipped: false,
    image: '/DavidBaar.webp',
  },
  {
    slug: 'brad-williams',
    badge: 'COMPETITIVE CYCLIST · JIU JITSU',
    name: 'BRAD WILLIAMS',
    sport: 'Competitive Cyclist · Brazilian Jiu Jitsu',
    story:
      'Sirens and Titans Fitness combine a focused and educated approach to fitness and training. Jacques explained the difference between strength and power and how he was going to build my strength turn that into power and then increase duration and intensity to allow me to hold it as long as possible. He takes meticulous notes of each workout which allows us to go back and see where I have made the biggest gains and how far I have come. All you weekend warriors this is the gym that is going to give you an edge on your competition.',
    attribution: 'Brad Williams · Competitive Cyclist',
    flipped: true,
    image: '/BradWilliams.webp',
  },
  {
    slug: 'david-iglewicz',
    badge: 'COMPETITIVE CYCLIST · TRACK RACING',
    name: 'DAVID IGLEWICZ',
    sport: 'Competitive Cyclist · National Champion',
    story:
      'About two years ago I was reading a book on primal health written by Mark Sisson. There was a mention of a performance trainer that believed in these methods and trained elite athletes. I did an internet search and reached out to him. His name is Jacques Devore and I was in absolute shock that he responded to the email I sent.\n\nAfter talking to him I thought this could advance my cycling ability and increase my health and longevity. We started working on force production. Then we integrated the force and worked on power by doing explosive walking lunges. I noticed a huge improvement in being able to sustain a sprint. I always had a good jump but now I was able to hold that top end speed longer.\n\nIn October 2017 we switched from walking lunges to an inertial based machine that basically allows you to do a measured plyometric movement. This thing ate up my legs and totally depleted my neuromuscular system. Now I was able to hold my sustained power even longer and able to sprint again and again as needed in a points race on the track.\n\nHere I am writing this just winning at nationals in the points race and getting 2nd in the Scratch and second in the pursuit. I cannot thank you enough Jacques Devore.',
    attribution: 'David Iglewicz DMD',
    flipped: false,
    image: '/David%20Igle.webp',
  },
  {
    slug: 'cassius-marsh',
    badge: 'NFL DEFENSIVE END',
    name: 'CASSIUS MARSH',
    sport: 'NFL Defensive End · San Francisco 49ers',
    story:
      'Cassius Marsh is a former NFL Defensive End who played for the San Francisco 49ers, Seattle Seahawks, New England Patriots, Chicago Bears, and Arizona Cardinals over his professional career. Cassius trained with Jacques and the Sirens and Titans team to maintain and elevate his performance at the highest level of professional football.',
    attribution: null,
    flipped: false,
    image: '/Cassius%201.webp',
    gallery: ['/Cassius%202.webp', '/Cassius%203.webp', '/Cassius%204.webp', '/Cassius%205.webp'],
  },
]

const individualAthletes = [
  { name: 'Giancarlo Stanton', credential: 'New York Yankees' },
  { name: 'Felix Sanchez', credential: '2x Olympic Gold Medalist 400m Hurdles' },
  { name: "Shaq O'Neal", credential: 'Los Angeles Lakers' },
  { name: 'Mark Madsen', credential: 'Los Angeles Lakers' },
  { name: 'Devean George', credential: 'Los Angeles Lakers' },
  { name: 'Rick Fox', credential: 'Los Angeles Lakers' },
  { name: 'Mitch Richmond', credential: 'Los Angeles Lakers' },
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
  { name: 'Jack Shoemaker', credential: 'Villanova University Lacrosse' },
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
      <div style={{height: '80px'}} />
      <Navigation />
      <main className="bg-[#080808]">
        {/* Hero */}
        <div className="relative z-0 h-64 bg-[#111111] flex items-end pt-32 pb-12 border-b border-[#1E1E1E]">
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
              <p className="font-body text-base text-[#4A7C26] font-medium mt-4">
                — Jacques DeVore
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
                      style={{ objectPosition: athlete.imagePosition ?? 'center center' }}
                    />
                    <div className="absolute inset-0 bg-black/50" />
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
                      className="font-body text-[10px] font-medium uppercase text-white mb-6"
                      style={{ letterSpacing: '0.2em' }}
                    >
                      {athlete.sport}
                    </p>
                    <p className="font-body text-base text-white leading-relaxed tracking-wide whitespace-pre-line">
                      {athlete.story}
                    </p>
                    {athlete.attribution && (
                      <p className="font-body text-sm text-[#4A7C26]/70 italic mt-6">
                        — {athlete.attribution}
                      </p>
                    )}

                    {/* Photo gallery */}
                    {athlete.gallery && (
                      <div
                        className="grid gap-2 mt-6"
                        style={{
                          gridTemplateColumns: `repeat(${athlete.gallery.length}, minmax(0, 1fr))`,
                        }}
                      >
                        {athlete.gallery.map((src, i) => (
                          <div
                            key={`${src}-${i}`}
                            className="relative aspect-square rounded-sm overflow-hidden"
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
            <h2 className="font-display text-5xl text-white mb-12 text-center">
              OTHER WORLD CLASS ATHLETES AND TEAMS WE HAVE TRAINED
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Individual athletes */}
              <div>
                <ul className="mt-6">
                  {individualAthletes.map((a) => (
                    <li
                      key={a.name}
                      className="flex items-start justify-between gap-4 border-b border-[#1E1E1E] py-3"
                    >
                      <span className="font-body font-medium text-base text-white">{a.name}</span>
                      <span className="font-body text-sm text-white text-right flex-shrink-0 max-w-[55%]">
                        {a.credential}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Teams */}
              <div>
                <ul className="mt-6">
                  {teams.map((t) => (
                    <li
                      key={t.name}
                      className="flex items-start justify-between gap-4 border-b border-[#1E1E1E] py-3"
                    >
                      <span className="font-body font-medium text-base text-white">{t.name}</span>
                      <span className="font-body text-sm text-white text-right flex-shrink-0 max-w-[45%]">
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
                  className="font-body text-base text-white border border-[#4A7C26] px-4 py-2 rounded-full hover:text-[#4A7C26] transition-colors duration-200"
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
                <span className="font-body text-sm text-white uppercase" style={{ letterSpacing: '0.2em' }}>
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
