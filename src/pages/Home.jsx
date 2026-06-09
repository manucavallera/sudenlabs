import { usePageTitle } from '../hooks/usePageTitle'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Process from '../components/Process'
import Verticals from '../components/Verticals'
import FAQ from '../components/FAQ'
import HomeCTA from '../components/HomeCTA'

export default function Home() {
  usePageTitle(null)
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Verticals />
      <FAQ />
      <HomeCTA />
    </>
  )
}
