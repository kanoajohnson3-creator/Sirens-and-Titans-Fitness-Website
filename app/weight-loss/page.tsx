import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Weight Loss | Sirens & Titans Fitness',
  description:
    'A sustainable, science-based approach to weight loss and optimal health from Sirens & Titans Fitness in West Los Angeles.',
}

const pillars = [
  {
    number: '01',
    title: 'UNDERSTAND YOUR METABOLISM',
    body: 'Clients learn how they individually metabolize food — a key component to successful weight loss and long term sustainability. No two people are the same and our program reflects that.',
  },
  {
    number: '02',
    title: 'THE SCIENCE OF WEIGHT LOSS',
    body: 'The S&T Fitness weight loss program is not a diet. Weight loss is addressed from the most recent research on the science of weight loss and eating. We educate clients on how weight is gained and lost rather than simply prescribing restrictions.',
  },
  {
    number: '03',
    title: 'AVOID THE STARVATION TRAP',
    body: 'Clients are exposed to the problems that semi-starvation and restrictive diets present. Understanding why these approaches fail in the long run is critical to building a sustainable relationship with food.',
  },
  {
    number: '04',
    title: 'WEEKLY COACHING',
    body: 'Clients are coached weekly on the specific changes they need to make to reach optimal body weight and energy levels. This accountability is the difference between short term results and permanent change.',
  },
  {
    number: '05',
    title: 'SUSTAINABLE RESULTS',
    body: 'Armed with this understanding you will be able to make rapid changes in your body and health. It will surprise you that there is a sustainable way to eat healthy, not be hungry, and lose or easily maintain your weight.',
  },
]

export default function WeightLossPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#080808]">
        {/* Hero */}
        <div className="h-64 bg-[#111111] flex items-end pt-24 pb-12 border-b border-[#1E1E1E]">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <SectionLabel>Specialty Program</SectionLabel>
            <h1 className="font-display text-white leading-none tracking-[0.03em] text-7xl">
              WEIGHT LOSS
            </h1>
          </div>
        </div>

        {/* Subhead */}
        <section className="bg-[#0D0D0D] py-12 text-center">
          <h2 className="font-display text-3xl text-white max-w-4xl mx-auto px-6">
            NOT A DIET. A SUSTAINABLE SCIENCE-BASED APPROACH TO WEIGHT LOSS AND OPTIMAL HEALTH.
          </h2>
        </section>

        {/* Video */}
        <section className="bg-[#0D0D0D] py-20 max-w-7xl mx-auto px-6">
          <SectionLabel>Featured Video</SectionLabel>
          <h2 className="font-display text-4xl text-white leading-none tracking-[0.03em]">
            HOW TO LOSE THE WEIGHT AND KEEP IT OFF
          </h2>
          <p className="font-body text-base text-white mt-4 mb-8 max-w-2xl">
            Watch Jacques DeVore discuss his approach to sustainable weight loss, nutrition, and
            how to permanently change your relationship with food.
          </p>
          <div className="relative w-full aspect-video max-w-3xl mx-auto rounded-sm overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/iVqB1B1rAX0"
              title="How to Lose the Weight and Keep it Off - Jacques DeVore"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </section>

        {/* Main content */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <p className="font-body text-base text-white leading-relaxed mb-12 max-w-3xl">
            The Sirens and Titans Fitness Weight Loss Program addresses weight loss by educating
            clients on how weight is gained and lost, and then coaching the participant weekly on
            the changes they need to make to reach optimal body weight and energy levels.
          </p>

          <SectionLabel>What Makes Us Different</SectionLabel>
          <h2 className="font-display text-white leading-none tracking-[0.03em] text-5xl mb-8">
            HOW THE PROGRAM WORKS
          </h2>

          <div className="mt-12">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-[#141414] p-8 mb-4 border-l-4 border-[#4A7C26] flex items-start gap-6"
              >
                <span className="font-display text-5xl text-[#4A7C26] shrink-0 w-16">
                  {pillar.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-white">{pillar.title}</h3>
                  <p className="font-body text-base text-white leading-relaxed mt-2">
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy callout */}
        <section className="bg-[#111111] py-20 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <SectionLabel>Our Philosophy</SectionLabel>
              <h2 className="font-display text-white leading-none tracking-[0.03em] text-5xl">
                FOOD IS MEDICINE
              </h2>
              <div className="font-body text-base text-white leading-relaxed space-y-4 mt-6">
                <p>
                  At Sirens and Titans we believe that proper nutrition is not about restriction —
                  it is about understanding. When you understand how your body processes food,
                  making the right choices becomes natural rather than forced.
                </p>
                <p>
                  Our approach combines the latest nutritional science with individualized coaching
                  to create a plan that works specifically for your body, your lifestyle, and your
                  goals. We do not believe in one size fits all diets.
                </p>
                <p>
                  Jacques DeVore is a Certified Precision Nutrition Coach with over 10 years of
                  nutrition coaching experience. He has written over one million words of food
                  journal comments coaching hundreds of clients to sustainable weight loss and
                  optimal health.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center">
              <div className="bg-[#141414] p-10 border-l-4 border-[#4A7C26]">
                <p className="font-display text-3xl text-white italic leading-snug">
                  &ldquo;THERE IS A SUSTAINABLE WAY TO EAT HEALTHY, NOT BE HUNGRY, AND LOSE OR
                  EASILY MAINTAIN YOUR WEIGHT.&rdquo;
                </p>
                <p className="font-body text-sm text-[#4A7C26] mt-6">
                  — Jacques DeVore, CSCS · Certified Precision Nutrition Coach
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <div className="bg-[#141414] py-16 text-center">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-white leading-none tracking-[0.03em] text-4xl">
              READY TO CHANGE YOUR RELATIONSHIP WITH FOOD?
            </h2>
            <p className="font-body text-base text-white mt-4">
              Every client begins with a full evaluation and nutrition assessment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
              <a
                href="tel:3103070200"
                className="font-display text-3xl text-[#4A7C26] hover:text-white transition-colors duration-200 leading-none tracking-[0.04em]"
              >
                310-307-0200
              </a>
              <Link
                href="/contact"
                className="font-body text-sm font-medium uppercase bg-[#4A7C26] hover:bg-[#3D6B1E] text-white px-10 py-4 transition-colors duration-200"
                style={{ letterSpacing: '0.15em' }}
              >
                Start Your Program →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
