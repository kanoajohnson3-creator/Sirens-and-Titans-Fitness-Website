import Navigation from '@/components/layout/Navigation'
import Hero from '@/components/Hero'
import PressBar from '@/components/sections/PressBar'
import StatsBar from '@/components/sections/StatsBar'
import FeaturedAthletes from '@/components/sections/FeaturedAthletes'
import Testimonials from '@/components/sections/Testimonials'
import Programs from '@/components/Programs'
import About from '@/components/About'
import Trainers from '@/components/Trainers'
import Studio from '@/components/Studio'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-bg-primary overflow-x-hidden">
        <Hero />
        <PressBar />
        <StatsBar />
        <FeaturedAthletes />
        <Testimonials />
        <Programs />
        <About />
        <Trainers />
        <Studio />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
