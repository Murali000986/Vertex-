import HeroSection from '../components/sections/HeroSection'
import StatsSection from '../components/sections/StatsSection'
import ServicesPreview from '../components/sections/ServicesPreview'
import AboutPreview from '../components/sections/AboutPreview'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import TestimonialsPreview from '../components/sections/TestimonialsPreview'
import BrandsStrip from '../components/sections/BrandsStrip'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <AboutPreview />
      <FeaturedProjects />
      <WhyChooseUs />
      <BrandsStrip />
      <TestimonialsPreview />
      <CTASection />
    </main>
  )
}
