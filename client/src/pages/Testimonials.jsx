import { motion } from 'framer-motion'
import TestimonialsPreview from '../components/sections/TestimonialsPreview'
import CTASection from '../components/sections/CTASection'

export default function Testimonials() {
  return (
    <main className="pt-20 bg-white">
      <section className="relative h-64 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600607687983-ce476b7bd062?w=1600&q=85)' }} />
        <div className="absolute inset-0 bg-white/82 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="gold-label mb-4"><div className="w-8 h-px bg-gold" />Client Stories</div>
            <h1 className="section-title">What Clients <span className="text-gradient-gold">Say</span></h1>
          </motion.div>
        </div>
      </section>
      <TestimonialsPreview />
      <CTASection />
    </main>
  )
}
