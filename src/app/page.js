import Hero from './components/Hero'
import VisitInfo from './components/VisitInfo'
import Specializations from './components/Specializations'
import AboutPreview from './components/AboutPreview'
import LatestArticles from './components/LatestArticles'
import TreatmentProcess from './components/TreatmentProcess'
import HomeContact from './components/HomeContact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <VisitInfo />
      <LatestArticles />
      <Specializations />
      <TreatmentProcess />
      <HomeContact />
    </>
  )
}
