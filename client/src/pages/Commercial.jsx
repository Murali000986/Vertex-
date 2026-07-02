import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CTASection from '../components/sections/CTASection'

const solutions = [
  { title: 'Boardroom AV Systems', desc: 'Premium boardroom AV with 4K displays, integrated video conferencing, wireless presentation, and one-touch control.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=85' },
  { title: 'Conference Rooms', desc: 'Microsoft Teams, Zoom & Cisco Webex certified conference room solutions for seamless remote collaboration.', img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=85' },
  { title: 'Auditorium & Event Spaces', desc: 'Large-scale AV for auditoriums, event halls, and multi-purpose spaces. Line arrays, LED walls, and staging.', img: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&q=85' },
  { title: 'Training Rooms', desc: 'Interactive training room setups with displays, audio, interactive whiteboards, and recording capability.', img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=85' },
  { title: 'Digital Signage', desc: 'Dynamic content management and display systems for lobbies, retail, hospitality, and corporate environments.', img: 'https://images.unsplash.com/photo-1558618047-f4e70e885a7d?w=600&q=85' },
  { title: 'Background Music Systems', desc: 'Zoned background music for offices, restaurants, hotels, and retail spaces. Easy management, great sound.', img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=85' },
]

export default function Commercial() {
  return (
    <main className="pt-20 bg-white">
      <section className="relative h-72 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85)' }} />
        <div className="absolute inset-0 bg-white/82 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="gold-label mb-4"><div className="w-8 h-px bg-gold" />For Your Business</div>
            <h1 className="section-title">Commercial <span className="text-gradient-gold">Solutions</span></h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-light-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-gray-muted text-base max-w-xl mx-auto">Professional AV solutions for corporate offices, boardrooms, auditoriums, hotels, and retail spaces across Hyderabad and Bangalore.</p>
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
