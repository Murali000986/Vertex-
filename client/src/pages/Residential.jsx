import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'
import CTASection from '../components/sections/CTASection'

const solutions = [
  { title: 'Private Home Cinema', desc: 'Dedicated home theater rooms with acoustic treatment, tiered seating, 4K laser projection, and Dolby Atmos surround sound.', img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=85' },
  { title: 'Multi-Room Audio', desc: 'Seamless whole-home audio distribution. Enjoy your music in every room with one unified control system.', img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=85' },
  { title: 'Smart Lighting', desc: 'Automated lighting scenes that adapt to your mood and time of day. Movie, dinner, party, and sleep modes.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85' },
  { title: 'Living Room Theater', desc: 'Transform your living room into a cinematic experience without a dedicated space. Discreet, premium, and powerful.', img: 'https://images.unsplash.com/photo-1600607687983-ce476b7bd062?w=600&q=85' },
  { title: 'Smart Home Integration', desc: 'Unified control of AV, lighting, climate, security, and more through a single touchscreen or voice command.', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=85' },
  { title: 'Acoustic Treatment', desc: "Make every room sound perfect. Custom acoustic panels, diffusers, and bass traps tailored to your room's dimensions.", img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=85' },
]

export default function Residential() {
  return (
    <main className="pt-20 bg-white">
      <section className="relative h-72 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600607687983-ce476b7bd062?w=1600&q=85)' }} />
        <div className="absolute inset-0 bg-white/82 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="gold-label mb-4"><div className="w-8 h-px bg-gold" />For Your Home</div>
            <h1 className="section-title">Residential <span className="text-gradient-gold">Solutions</span></h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-light-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-gray-muted text-base max-w-xl mx-auto">Premium home theater, multi-room audio, smart lighting, and acoustic solutions for luxury residences across Hyderabad and Bangalore.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {solutions.map((s, i) => (
              <motion.div key={s.title} className="bg-white rounded-xl overflow-hidden border border-light-200 shadow-soft hover:shadow-soft-hover hover:-translate-y-1 transition-all duration-500" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}>
                <div className="h-44 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-7">
                  <h3 className="font-display font-bold text-dark text-lg mb-3">{s.title}</h3>
                  <p className="text-gray-muted text-sm leading-relaxed mb-5">{s.desc}</p>
                  <Link to="/contact" className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider hover:gap-3 transition-all">Get Quote <ArrowRight size={12} /></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  )
}
