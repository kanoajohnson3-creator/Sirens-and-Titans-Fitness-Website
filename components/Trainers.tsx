'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const coaches = [
  {
    name: 'JACQUES DeVORE',
    role: 'CEO & Owner',
    image: '/Jacques%20headshot.webp',
    credentials: [
      'CSCS',
      'Certified Primal Health Coach',
      'Certified Precision Nutrition Coach',
      'Expert USA Cycling Coach',
      'MBA Pepperdine University',
      'BA Economics UC Davis',
    ],
    bio: [
      'Jacques is a Certified Strength and Conditioning Specialist (CSCS), Certified Primal Health Coach, Certified Precision Nutrition Coach, and licensed as an Expert USA Cycling Coach. He received a Masters in Business Administration from Pepperdine University and a BA in Economics from UC Davis.',
      'Prior to starting Sirens and Titans Fitness of Los Angeles he founded Titan Sports Performance Center in Santa Barbara over 15 years ago. Jacques was also CEO of Vert Centers of Santa Monica, a sports performance rehabilitation center, where he developed strength and conditioning programs and trained many elite athletes before founding Titan Sports.',
      'He has been a competitive athlete his entire life, competing in wrestling in high school and at the University of California Davis. Jacques has also competed in track, cross-country, lacrosse, martial arts tournaments, and full contact kickboxing. In bicycle racing Jacques competes at an expert level on the mountain bike and as a Category 3 road racer.',
      "Jacques coauthored Bicycling's Maximum Overload for Cyclists, a book about the ins and outs of strength and power training for cyclists. He currently holds the unofficial world record for a mile on the Versaclimber.",
    ],
  },
  {
    name: 'CARLOS PEREZ',
    role: 'Strength Coach',
    image: '/Carlos+Headshot.webp',
    credentials: ['MS Applied Exercise Science', 'CSCS', 'TSAC-F'],
    bio: [
      "Carlos has over seven years of experience working with a wide range of individuals including D1 Athletes at both CSUN and USC. During his time at CSUN and USC he was able to create and lead training sessions with various team sports such as Men and Women's Golf, Women's Tennis, Men and Women's Soccer, Baseball, and more. In 2021, Carlos earned his Master's degree in Applied Exercise Science with a concentration in strength and conditioning. Carlos is both CSCS and TSAC-F certified. Growing up Carlos has played various sports including soccer, basketball, and baseball. Carlos likes to focus his training on both powerlifting and weightlifting.",
    ],
  },
  {
    name: 'CARSON CRAWFORD',
    role: 'Strength Coach',
    image: '/Carson+Headshot.webp',
    credentials: ['NASM CPT', 'Yoga Alliance Certified', 'Breathwork Coach'],
    bio: [
      'Carson is a full-time competitive fighter and personal trainer with a background in yoga, teaching yoga since his certification through Yoga Alliance in 2014. He began his boxing career in 2017 and in May of 2023 came in 2nd Place at National Golden Gloves, which qualified him to compete at the US Olympic Trials for Boxing. He has been a personal trainer and boxing coach since 2019 and also has a background as a breathwork coach.',
    ],
  },
  {
    name: 'JULIAN LOVE',
    role: 'Strength Coach',
    image: '/Julian+Photo.webp',
    imageClass: 'object-cover object-[center_15%]',
    credentials: ['BA Exercise Science', 'Pursuing CSCS'],
    bio: [
      'Born and raised in Pasadena California. Julian attended Glendale Community College for two years and played on the Vaqueros football team. After Glendale he transferred to the University of Saint Mary in Leavenworth Kansas where he played on their football team and earned his Bachelor\'s degree in Exercise Science. Julian is currently the defensive line coach at Palisades Charter High School while pursuing his Certified Strength and Conditioning certification.',
    ],
  },
  {
    name: 'KANOA JOHNSON',
    role: 'Strength Coach',
    image: '/Kanoa%20Headshot.webp',
    credentials: ['ISSA CPT', 'Pursuing CSCS'],
    bio: [
      "Kanoa began his collegiate career playing Men's Basketball for Whitman College, competing on two Conference Championship teams. After navigating the challenges of the Covid season in 2021, he took a gap year dedicated to retraining his body and mind to pursue college football. This journey led him to Graceland University where he earned a scholarship as a Safety and was honored as the Freeman Student Athlete of the Year in 2023. He graduated Magna Cum Laude in 2024 with a degree in Graphic Design and a minor in Business Management.",
      'Kanoa is certified as a Personal Trainer and is currently working toward his CSCS certification. He has spent countless hours training alongside exceptional strength coaches throughout his basketball and football career.',
    ],
  },
]

export default function Trainers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="team" ref={ref} className="bg-bg-secondary py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-px bg-gold" />
            <span className="font-body text-[10px] font-medium tracking-[0.3em] text-gold uppercase">
              The Coaching Staff
            </span>
          </motion.div>

          <div className="overflow-hidden">
            {['OUR', 'COACHES.'].map((line, i) => (
              <motion.div
                key={line}
                initial={{ y: '110%' }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.05 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <h2
                  className="font-display text-text-primary leading-[0.9] tracking-[0.03em]"
                  style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
                >
                  {line}
                </h2>
              </motion.div>
            ))}
          </div>

          <p className="font-body text-base text-white text-center max-w-3xl mx-auto mt-4 mb-12">
            All of our coaches are highly trained and educated with a passion and commitment for
            excellence with our clients.
          </p>
        </div>

        {/* Stacked coach bios */}
        <div className="flex flex-col">
          {coaches.map((coach, i) => (
            <CoachCard key={coach.name} coach={coach} i={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CoachCard({
  coach,
  i,
  isInView,
}: {
  coach: (typeof coaches)[0]
  i: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
      className="w-full bg-[#141414] p-8 mb-6 grid grid-cols-1 md:grid-cols-[minmax(0,320px)_1fr] gap-8"
    >
      {/* Left — headshot */}
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={coach.image}
          alt={coach.name}
          fill
          loading="lazy"
          className={coach.imageClass ?? 'object-cover'}
        />
      </div>

      {/* Right — bio content */}
      <div>
        <h3
          className="font-display text-text-primary leading-none tracking-[0.05em]"
          style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)' }}
        >
          {coach.name}
        </h3>
        <span className="font-body text-sm font-medium tracking-[0.2em] text-gold uppercase mt-2 block">
          {coach.role}
        </span>

        <div className="flex flex-wrap gap-2 mt-4">
          {coach.credentials.map((credential) => (
            <span
              key={credential}
              className="inline-block rounded-full bg-[#4A7C26]/20 text-[#4A7C26] text-xs px-3 py-1 font-medium font-body"
              style={{ letterSpacing: '0.05em' }}
            >
              {credential}
            </span>
          ))}
        </div>

        <div className="space-y-4 mt-6">
          {coach.bio.map((paragraph, idx) => (
            <p key={idx} className="font-body text-base text-white leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
