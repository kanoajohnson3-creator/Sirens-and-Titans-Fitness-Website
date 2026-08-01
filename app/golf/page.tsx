import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Golf Performance | Sirens & Titans Fitness',
  description:
    'Golf-specific strength, mobility, and stability training from Sirens & Titans Fitness in West Los Angeles.',
}

const swingComponents = [
  {
    number: '01',
    title: 'DRIVING & FULL SWING',
    body: 'As we age we see a diminishment in strength, power, mobility, and balance. This impacts your driving dramatically. You need lower body strength to have great body control and produce power. The core and upper body connect your lower body to the club so that it can be in the exact place needed while moving at high speed. Loss of mobility means your swing is going to shorten over time which delivers less power to the clubhead. We have developed methods of developing power without the landing impact which is a big benefit as we age.',
  },
  {
    number: '02',
    title: 'CHIPPING',
    body: 'Lower body stability is at a premium in chipping. Exceedingly small changes can result in skulls and chili dips, ruining your short game. More overall muscle strength and balance mean more exact control of required force and power, bringing more consistency in ball flight distance. Great stability is a big component of control and balance.',
  },
  {
    number: '03',
    title: 'PUTTING',
    body: 'Stability of the whole body is paramount to putting accuracy. The chain of muscles from head to foot and how these muscles stabilize controls the body. Tiny sways side to side or front to back will affect speed control and the tiniest rotational movements will affect your putting line. Even on a five foot putt four degrees off the line is enough to miss.',
  },
]

const processSteps = [
  {
    title: 'EVALUATION',
    body: 'We start with an extensive evaluation of strengths and weaknesses in all areas of your physical game.',
  },
  {
    title: 'TIPPING POINTS',
    body: 'We identify what we call tipping point fitness — areas that can be improved quickly and will have a great impact on your game immediately.',
  },
  {
    title: 'LONG TERM STRATEGY',
    body: 'We simultaneously develop a longer term strategy to level up all areas of your fitness and athletic performance.',
  },
  {
    title: 'HOLISTIC APPROACH',
    body: 'We look at your body holistically addressing nutrition, sleep, stress, and recovery modalities to improve your overall performance and speed of improvement.',
  },
]

const testimonials = [
  {
    name: 'Toyo S.',
    detail: 'Golf Performance',
    quote:
      "I've been working with Jacques at Sirens and Titans Fitness for over three years now and the improvement in my golf game has been substantial. At first the obvious gains were in driving distance from 240-250 to 250-265. As time has gone on I can say that there have been many more gains in many areas. Iron shot distances have improved, ball striking consistency, short game accuracy have all come around. And my ability to play more golf has been a welcome bonus. Just two weeks ago I was able to play 27 holes a day for four days. And recently I have been fitted for heavier clubs which tap into my improved strength for more distance and accuracy. Overall my ability to get into the proper positions, hold the proper positions at speed, and deliver more power into the ball have made me a better golfer than ever.",
  },
  {
    name: 'Ben A.',
    detail: 'Golf Performance',
    quote:
      'I am extremely grateful that I found Jacques and Alfonso at Sirens and Titans. They have tailored a specific regimen to my body and my goals that have greatly increased my performance, stamina, and overall fitness. After just a few months I have noticed considerable improvements in both balance and rotational mobility that has led to an easier feeling controlled swing and a 15 to 20 yard increase in distance. Strengthening my core and back has virtually eliminated the lower back pain I used to experience after long range sessions. I have never been through a fitness program that has produced these kinds of results in my body.',
  },
  {
    name: 'Larry J.',
    detail: 'Golf · Pain Elimination',
    quote:
      'I am an avid golfer playing two to three times per week. Prior to coming to Sirens and Titans in 2017 I suffered from frequent low back soreness which I experienced only when playing golf. I had seen leading back specialists, worked extensively with Titleist Performance Institute trainers and other golf specific workout specialists and tried acupuncture. Nothing I tried made a difference until I began working with Jacques and Alfonso. The diverse workouts are tailored to the needs of a golfer and they are never boring. Since I started working with Sirens and Titans I am able to play pain free often multiple days in a row. While my wife is not a golfer she works out with me at Sirens and Titans and has commented this is the only gym where she never wants to miss a workout.',
  },
]

export default function GolfPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#080808]">
        {/* Hero */}
        <div className="relative h-[500px] bg-[#080808] flex items-end pb-12 pt-24 border-b border-[#1E1E1E] overflow-hidden">
          <Image
            src="/golfphoto.webp"
            alt="Golf performance training at Sirens & Titans Fitness"
            width={492}
            height={512}
            className="absolute inset-0 w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative max-w-7xl mx-auto px-6 w-full">
            <SectionLabel>Specialty Program</SectionLabel>
            <h1 className="font-display text-white leading-none tracking-[0.03em] text-7xl">
              GOLF PERFORMANCE
            </h1>
          </div>
        </div>

        {/* Subhead */}
        <section className="bg-[#0D0D0D] py-12 text-center">
          <h2 className="font-display text-3xl text-white max-w-4xl mx-auto px-6">
            AT SIRENS AND TITANS WE HAVE WORKED WITH WORLD CLASS ATHLETES IN EVERY DIFFERENT SPORT.
            THE WAY YOU BECOME A BETTER GOLFER IS TO BECOME A BETTER OVERALL ATHLETE.
          </h2>
        </section>

        {/* Main content */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <p className="font-body text-base text-white leading-relaxed mb-12">
            Golf is a unique sport that requires several different athletic capabilities in order
            to perform well. Much of the critical thinking used to develop individual athletes in
            other sports is utilized for our golfers.
          </p>

          <SectionLabel>The Science Behind the Swing</SectionLabel>
          <h2 className="font-display text-white leading-none tracking-[0.03em] text-5xl mb-8">
            WHAT MAKES A GREAT GOLFER
          </h2>
          <p className="font-body text-base text-white leading-relaxed mb-8">
            Golf is a game where the individual is transferring force from the ground into the
            club at different velocities through a kinetic chain of muscles. Each of the three
            primary components of the game have both physical and metabolic performance needs.
            This starts at the foot and goes all the way through the body to the head and neck.
            It is not as simple as just strengthening your core or adding some golf exercises.
            Evaluating the weak links in the kinetic chain is what is most important when
            prescribing the appropriate exercises for improvement.
          </p>

          {/* Three components */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {swingComponents.map((component) => (
              <div
                key={component.number}
                className="bg-[#141414] p-8 border-t-2 border-[#4A7C26]"
              >
                <span className="font-display text-5xl text-[#4A7C26] block">
                  {component.number}
                </span>
                <h3 className="font-display text-3xl text-white mt-2">{component.title}</h3>
                <p className="font-body text-base text-white leading-relaxed mt-4">
                  {component.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How we do it */}
        <section className="bg-[#111111] py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="font-display text-white leading-none tracking-[0.03em] text-5xl mb-12">
              HOW WE HELP YOU IMPROVE
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processSteps.map((step, i) => (
                <div key={step.title} className="bg-[#141414] p-8 border-t-2 border-[#4A7C26]">
                  <span className="font-display text-5xl text-[#4A7C26] block">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-3xl text-white mt-2">{step.title}</h3>
                  <p className="font-body text-base text-white leading-relaxed mt-4">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Golf testimonials */}
        <section className="bg-[#0D0D0D] py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionLabel>What Our Golfers Say</SectionLabel>
            <h2 className="font-display text-white leading-none tracking-[0.03em] text-5xl mb-12">
              RESULTS ON THE COURSE
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="border-t-2 border-[#4A7C26] bg-[#141414] p-8 flex flex-col gap-4"
                >
                  <p className="font-body text-base leading-relaxed text-white">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <h3 className="font-body text-base font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="font-semibold text-white text-sm mt-1">{testimonial.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <div className="bg-[#141414] py-16 text-center">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-white leading-none tracking-[0.03em] text-4xl">
              READY TO TAKE YOUR GAME TO THE NEXT LEVEL?
            </h2>
            <p className="font-body text-white mt-4">
              Every client begins with a full evaluation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
              <Link
                href="/contact"
                className="font-body text-sm font-medium uppercase bg-[#4A7C26] hover:bg-[#3D6B1E] text-white px-10 py-4 transition-colors duration-200"
                style={{ letterSpacing: '0.15em' }}
              >
                Book Your Evaluation →
              </Link>
              <a
                href="tel:3103070200"
                className="font-display text-3xl text-[#4A7C26] hover:text-white transition-colors duration-200 leading-none tracking-[0.04em]"
              >
                310-307-0200
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
