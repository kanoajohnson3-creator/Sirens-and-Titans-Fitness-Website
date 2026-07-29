import type { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Testimonials | Sirens & Titans Fitness',
  description:
    'Real results from real athletes and clients of Sirens & Titans Fitness in West Los Angeles.',
}

type Testimonial = {
  name: string
  detail: string
  quote: string
  badge?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'David W.',
    detail: 'USATF Masters Runner',
    quote:
      'I am 62 and an active participant in the USATF Masters Division normally running middle distance events. Jacques and his team understand my objectives and have developed a program designed to achieve them. S&TF does not promote a cookie cutter one size fits all approach. Individual attention is a hallmark of the S&TF approach and method. Jacques has state of the art knowledge of the physiology of exercise and fitness and understands the difference between speed and power and the importance of both.',
  },
  {
    name: 'Ariel W.',
    detail: 'Client',
    badge: 'BODY RECOMPOSITION · DIABETES PREVENTION',
    quote:
      'About four months ago my doctor told me if I did not make changes in my lifestyle I would become diabetic. I lost almost 3% body fat in my first two weeks. Three months later I have lost about a pound a week improved my health reduced my risk for diabetes gained more confidence and look great. I am so happy for the help S&TF has given me to get my health on track teaching me how to eat properly and to rely on my own strength.',
  },
  {
    name: 'Marni P.',
    detail: 'Outrigger Paddler',
    badge: 'OUTRIGGER PADDLING · ENDURANCE',
    quote:
      'I joined Sirens and Titans Fitness for their very first focus group in Los Angeles in September 2013. Throughout this time my endurance increased and I got stronger on and off the water. I became much fitter and stronger than I thought I would ever be at this age. The VersaClimber workouts which I do just once per week have increased my endurance immensely. If you are considering the VersaClimber but afraid of it I want to encourage you to step up strap yourself in and remember you can do anything for 30 minutes.',
  },
  {
    name: 'Randy P.',
    detail: 'Competitive Cyclist',
    quote:
      'The Sirens and Titans Fitness program has enabled me to recover power and endurance I thought I had lost ten years ago. I have gained a higher level of sustainable power than I can ever remember having in the past. Their practical application of current scientific principles and one on one coaching are elevating my PRs and improving my body composition. I am making these gains with two intense thirty minute workouts a week. This is a no BS program that has net tangible and sustainable results. I honestly feel like I have rolled the clock back.',
  },
  {
    name: 'SpaceInc',
    detail: 'FUBAR VersaClimber Class',
    badge: 'GENERAL FITNESS · FUBAR CLASS',
    quote:
      'Fantastic workout at Sirens and Titans Fitness. The owner Jacques Devore put me through the paces in his signature FUBAR VersaClimber class. One of the hardest workouts that I have done ever. Felt an amazing endorphin rush afterwards and gratitude for the possibility to experience this training first hand.',
  },
  {
    name: 'Kailes B.',
    detail: 'Client',
    badge: 'GENERAL FITNESS',
    quote:
      'One of the best private gyms I have been to as far as some of the best performance exercise equipment friendly and knowledgeable staff and a modern decor. Jacques is the owner and head trainer here and is one of the most passionate and knowledgeable people I have ever met in the fitness industry.',
  },
  {
    name: 'Alison B.',
    detail: 'FUBAR VersaClimber Class',
    badge: 'GENERAL FITNESS · FUBAR CLASS',
    quote:
      'I took the FUBAR VersaClimber class with Jacques this morning and boy is the class aptly named. Jacques did a great job of encouraging my best performance. He set realistic baselines and goals that I was able to meet and to my amazement exceed throughout the class. I absolutely loved my experience today and feel so accomplished. I definitely will be back again soon.',
  },
  {
    name: 'Rosie O.',
    detail: 'Client',
    badge: 'GENERAL FITNESS · FUBAR CLASS',
    quote:
      'Fabulous workout. Jacques is incredibly knowledgeable and patient. The FUBAR workout is not easy but the trainers are very encouraging as it takes time to see results. You may be sore after the first few classes but I guarantee your body and mind will adapt and as you continue to attend you will feel better than ever before. By far one of my favorite workouts.',
  },
  {
    name: 'Lisa Yens',
    detail: 'Client',
    badge: 'GENERAL FITNESS · BODY TRANSFORMATION',
    quote:
      'I must preface this review with explaining that I am not an athlete. Whether you are an athlete or a couch potato this is the place for you if you are ready to get serious about your fitness. The trainers get really excited about helping their clients reach their fitness goals. I have been amazed as I have seen people\'s bodies change before my very eyes. If you value your health and time as much as I do check this place out.',
  },
  {
    name: 'Denise Mueller',
    detail: 'Distance Coaching',
    quote:
      'I have been working with Jacques DeVore for about 3 months now. He is very skilled and knows what it takes to reach whatever goal you have. I have a world speed record on a bike as my goal and my training in the gym is focused on exactly how to achieve my goal. He keeps in contact with me when I am not in the gym to see how my training and recovery is going. A true skilled professional trainer that will help you achieve whatever your goal is.',
  },
  {
    name: 'Sam M.',
    detail: 'Distance Coaching Cyclist',
    quote:
      'I have now been working remotely on coaching with Jacques for just shy of three months weekly. It has been fantastic. My average speed for this kind of ride went up by 1.7 MPH. There is no other program I have ever come across that is as real to build speed coupled with endurance at max power. If you are so inclined after you read the book I would suggest calling the author and getting some coaching to bring the magic up even another level. It has been fun and the results do not lie.',
  },
  {
    name: 'Matt L.',
    detail: 'Client',
    badge: 'U.S. MILITARY · STRENGTH & CONDITIONING',
    quote:
      'Over the past 5 years that I have been working at Sirens and Titans I can confidently say that without the help of Jacques and Alfonso I would not be where I am today. They are extremely knowledgeable and are both very patient but also make sure to push you just enough to help you get better every day. Over only three months I gained 15 lbs of muscle my max deadlift has gone up 100 lbs and my max bench press up 60 lbs. I feel stronger and faster than I have ever been and it is only going to get better.',
  },
  {
    name: 'Shelley T.',
    detail: 'Outrigger Canoe Racing',
    badge: 'OUTRIGGER CANOE · PERFORMANCE',
    quote:
      'As a competitive athlete I am constantly seeking ways to elevate my performance strength and endurance for my sport of Hawaiian style outrigger canoe racing. Jacques is a master at body mechanics and he custom built a program that elevated my output. I am notably stronger faster and more effective in the canoe and that has translated into our team earning medals and competing at the highest level. My gains resulted from training just once a week for 2 months.',
  },
  {
    name: 'Dan K.',
    detail: 'Cyclist',
    badge: 'PAIN ELIMINATION · CYCLING',
    quote:
      'I am in my mid 40s and am an active cyclist runner and like to ski. Most importantly my knee pain started to go away. I was able to ski free of pain for the first time in 2 years. Towards the end of 3 months I noticed I was climbing stronger spinning with more power and running faster.',
  },
  {
    name: 'Tara E.',
    detail: 'Personal Trainer',
    badge: 'PERSONAL TRAINER · PERFORMANCE',
    quote:
      'I am a personal trainer and spinning instructor in LA. A trainer does not look for another trainer they look for a master. I wanted to learn and grow from the best of the best. My hips and abs have gotten substantially stronger plus I am more powerful on the spin bike. The equipment at Sirens and Titans is top tier and like nothing you will find at an Equinox. If you are a serious athlete or trainer you should be training with Jacques at Sirens and Titans. No question.',
  },
  {
    name: 'Maggie O.',
    detail: 'Busy Mom',
    badge: 'BODY RECOMPOSITION · BUSY MOM',
    quote:
      'Sirens and Titans Fitness has been amazing for me as a busy mom. The beauty of S&TF is that my kick ass core building muscle toning heart pumping workout is done in just half an hour and I achieve better results in that half hour than I do running stairs or doing yoga for an hour. Thank you S&TF for keeping this busy mama fit and happy.',
  },
  {
    name: 'Patrick M.',
    detail: 'ClassPass',
    badge: 'GENERAL FITNESS · FUBAR CLASS',
    quote:
      'The 30 minute FUBAR VersaClimber class is my most dreaded 30 minutes of the week. It is not fun but it is effective. The proprietor Jacques trains elite athletes and that mentality is reflected in the workout. First and foremost he is about results. Efficient friendly and encouraging he pushes you to break through what you believe your best is. If you are someone who is about results I highly recommend Sirens and Titans Fitness.',
  },
  {
    name: 'Wendy W.',
    detail: 'Client',
    badge: 'BODY RECOMPOSITION · WEIGHT LOSS',
    quote:
      'S&TF is truly amazing. I started S&TF to prepare for my wedding. I wanted to lose weight and tone and I did exactly that. I ended up looking 30 lbs lighter just in time for my wedding. I have also drastically changed my diet due to these guys. I am eating clean now and it is a lifestyle change. I highly recommend them.',
  },
  {
    name: 'Laura C.',
    detail: 'Elite Runner and Triathlete',
    quote:
      'As an elite runner for many years I think of myself as a highly conditioned athlete. Well after my first workout on the VersaClimber at S&TF I was humbled. The entire experience at S&TF has pushed me outside of what I ever thought was possible. Jacques has taught me so much about nutrition and training which has only catapulted me into a new level of fitness. This fitness center has seriously changed the way I train and look at fitness.',
  },
  {
    name: 'Noel O.',
    detail: 'Client',
    badge: 'BODY RECOMPOSITION',
    quote:
      'A comprehensive ass kicking without getting hurt. The best most reductive not a cult longest and shortest 30 minute workout you can do with nice people. Just twice a week and after two months the fat ass I was becoming is no longer there.',
  },
  {
    name: 'Nancy K.',
    detail: 'Client',
    badge: 'BODY RECOMPOSITION · CYCLING',
    quote:
      'This is an outstanding gem for anyone looking to reach their next level of fitness. They are incredibly knowledgeable and have not only pinned down the science behind weight loss and achieving fitness goals but they are also experts in the field of achieving maximum sustainable power in a variety of sports. Incredible value and very effective for leaning down and getting fitter.',
  },
  {
    name: 'Peter S.',
    detail: 'Client',
    badge: 'GENERAL FITNESS',
    quote:
      'I have worked out at many gyms over the last 20 years but I have to say Sirens and Titans is by far the best I have ever been to. What really makes Sirens and Titans stand head and shoulders above the crowd is the way they train you. Before I joined I had been working out for years but I had not been training. There is a difference and the difference in results are significant.',
  },
  {
    name: 'Lynn K.',
    detail: 'Client',
    badge: 'GENERAL FITNESS',
    quote:
      'Working out at S and T is so rewarding. I feel tired when I arrive and fantastic when I leave. The encouragement from my coach is positive and educational. He explains how each exercise works the targeted body part. I highly recommend S and T to anyone who is interested in staying healthy and having fun.',
  },
  {
    name: 'Tom S.',
    detail: 'Client',
    badge: 'GENERAL FITNESS',
    quote:
      'Jacques the owner has a passion and knowledge like no other trainer. He is an incredible teacher with limitless energy. Patient and motivating he cares about every person that walks through the door. Most importantly Jacques focuses on nutrition and eating real food. The environment is inclusive and never intimidating unlike most other gyms. If you are an average person who wants Olympic calibre training and facilities choose S&TF.',
  },
  {
    name: 'Gabriel M.',
    detail: 'Client',
    badge: 'GENERAL FITNESS · RUNNING',
    quote:
      'These guys are great I have been looking for an efficient way to get in shape and this nails it. I go twice a week for 30 to 45 minutes and am in better shape after a month than I have been in a long time.',
  },
  {
    name: 'Marla H.',
    detail: 'Outrigger Canoe',
    quote:
      'My training with Jacques at Sirens and Titans has been invaluable. Training at S&TF with Jacques has given me the confidence to lift heavier weight beyond what I thought was possible. With proper form and encouragement I push myself harder and I surprise myself at every turn. The VersaClimber is the fastest and most effective cardio in training.',
  },
  {
    name: 'Toyo S.',
    detail: 'Golf',
    badge: 'GOLF PERFORMANCE',
    quote:
      'I have been working with Jacques at Sirens and Titans Fitness for over three years now and the improvement in my golf game has been substantial. At first the obvious gains were in driving distance from 240 to 265. As time has gone on I can say that there have been many more gains in many areas. Iron shot distances have improved ball striking consistency short game accuracy have all come around. And my ability to play more golf has been a welcome bonus.',
  },
  {
    name: 'Ben A.',
    detail: 'Golf',
    badge: 'GOLF PERFORMANCE',
    quote:
      'I am extremely grateful that I found Jacques and Alfonso at Sirens and Titans. They have tailored a specific regimen to my body and my goals that have greatly increased my performance stamina and overall fitness. After just a few months I have noticed considerable improvements in balance and rotational mobility that have led to an easier feeling controlled swing and a 15 to 20 yard increase in distance. I have never been through a fitness program that has produced these kinds of results in my body.',
  },
  {
    name: 'Larry J.',
    detail: 'Golf',
    badge: 'GOLF · PAIN ELIMINATION',
    quote:
      'I am an avid golfer playing 2 to 3 times per week. Prior to coming to Sirens and Titans in 2017 I suffered from frequent low back soreness when playing golf. Since I started working with Sirens and Titans I am able to play pain free often multiple days in a row. While my wife is not a golfer she works out with me at Sirens and Titans and has commented this is the only gym where she never wants to miss a workout. If you are a golfer you owe it to yourself to check it out.',
  },
  {
    name: 'Paul H.',
    detail: 'Cyclist · Age 73',
    badge: 'CYCLING · AGE 73',
    quote:
      'I want to let you know that I won the 65 plus age group in my annual 20 mile race in Troy Ohio. I finally beat the cyclist who has won the classification the last four years and he is 69 and I am 73. I came in second to him the last two years. I beat him by 52 seconds. I came 6th place overall out of 333 cyclists. I firmly believe in incorporating your Maximum Overload principles I was able to achieve a 17.1 mph pace throughout the race.',
  },
]

function getInitials(name: string) {
  const parts = name.split(' ').filter(Boolean)
  if (parts.length === 0) return 'ST'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
}

export default function TestimonialsPage() {
  return (
    <>
      <div style={{height: '80px'}} />
      <Navigation />
      <main className="min-h-screen bg-[#080808] text-white">
        <div className="h-64 bg-[#111111] flex items-end pt-32 pb-12 border-b border-[#1E1E1E]">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <SectionLabel>Client Results</SectionLabel>
            <h1
              className="font-display leading-none tracking-[0.03em] text-white"
              style={{ fontSize: 'clamp(3rem, 9vw, 6rem)' }}
            >
              WHAT THEY SAY
            </h1>
            <p className="mt-3 max-w-2xl font-body text-sm uppercase tracking-[0.25em] text-white">
              Real stories from athletes, runners, golfers, parents and everyday clients.
            </p>
          </div>
        </div>

        <p className="font-body text-lg text-white text-center max-w-3xl mx-auto py-16 px-6">
          We train world class athletes. We also train busy parents, weekend warriors, golfers, and
          anyone serious about changing their body. The methodology is the same.
        </p>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <article
                  key={`${testimonial.name}-${testimonial.detail}`}
                  className="flex flex-col gap-5 border border-[#1E1E1E] bg-[#141414] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#4A7C26]/40 bg-[#4A7C26]/10 text-sm font-semibold text-[#4A7C26]">
                      {getInitials(testimonial.name)}
                    </div>
                    <div>
                      {testimonial.badge && (
                        <span className="bg-[#4A7C26]/20 text-[#4A7C26] text-xs px-3 py-1 rounded-full font-medium inline-block mb-3">
                          {testimonial.badge}
                        </span>
                      )}
                      <h2 className="font-body text-base font-semibold text-white">
                        {testimonial.name}
                      </h2>
                      <p className="mt-1 font-body text-sm text-white">{testimonial.detail}</p>
                    </div>
                  </div>

                  <p className="flex-1 font-body text-base leading-relaxed text-white whitespace-pre-line">
                    “{testimonial.quote}”
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[#1E1E1E] pt-10 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className="text-lg text-[#4A7C26]">
                    ★
                  </span>
                ))}
                <span className="ml-2 font-body text-sm tracking-wide text-white">
                  5.0 · Google &amp; Yelp
                </span>
              </div>
              <p className="font-body text-sm tracking-wide text-white">
                2242 S Sepulveda Blvd · Los Angeles, CA 90064
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
