import Hero from './components/Hero'
import Specializations from './components/Specializations'
import AboutPreview from './components/AboutPreview'
import FeaturedTestimonials from './components/FeaturedTestimonials'
import LatestArticles from './components/LatestArticles'
import TreatmentProcess from './components/TreatmentProcess'
import YouTubeShorts from './components/YouTubeShorts'
import HomeContact from './components/HomeContact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Specializations />
      <TreatmentProcess />
      <FeaturedTestimonials />
      <YouTubeShorts />
      <LatestArticles />
      <HomeContact />
    </>
  )
}
