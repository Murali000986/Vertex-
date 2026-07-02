import { motion } from 'framer-motion'
import CTASection from '../components/sections/CTASection'

const brandList = [
  { name: 'Sony', category: 'Projectors & TVs', country: 'Japan' },
  { name: 'Bose', category: 'Speakers & Soundbars', country: 'USA' },
  { name: 'Harman', category: 'Professional Audio', country: 'USA' },
  { name: 'JBL', category: 'Speakers & Headphones', country: 'USA' },
  { name: 'Denon', category: 'AV Receivers', country: 'Japan' },
  { name: 'Yamaha', category: 'AV Receivers & Speakers', country: 'Japan' },
  { name: 'Marantz', category: 'Premium AV Receivers', country: 'Japan' },
  { name: 'Klipsch', category: 'Heritage Speakers', country: 'USA' },
  { name: 'Polk Audio', category: 'Speaker Systems', country: 'USA' },
  { name: 'SVS', category: 'Subwoofers', country: 'USA' },
  { name: 'Epson', category: 'Projectors', country: 'Japan' },
  { name: 'Optoma', category: 'Projectors', country: 'Taiwan' },
  { name: 'Samsung', category: 'QLED & Frame TVs', country: 'Korea' },
  { name: 'LG OLED', category: 'OLED Displays', country: 'Korea' },
  { name: 'Control4', category: 'Smart Home Control', country: 'USA' },
  { name: 'Crestron', category: 'AV Control Systems', country: 'USA' },
  { name: 'Sonos', category: 'Multi-Room Audio', country: 'USA' },
  { name: 'Focal', category: 'High-End Speakers', country: 'France' },
  { name: 'Stewart Filmscreen', category: 'Projection Screens', country: 'USA' },
  { name: 'Lutron', category: 'Smart Lighting', country: 'USA' },
]

export default function Brands() {
  return (
    <main className="pt-20 bg-white">
      <section className="relative h-64 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=1600&q=85)' }} />
        <div className="absolute inset-0 bg-white/82 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="gold-label mb-4"><div className="w-8 h-px bg-gold" />Our Partners</div>
            <h1 className="section-title">Premium <span className="text-gradient-gold">Brands</span></h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-light-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-gray-muted text-base max-w-2xl mx-auto">Authorized dealers of 50+ world-class audio, video, and control brands. Every product we supply is genuine, backed by manufacturer warranty, and professionally installed.</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {brandList.map((brand, i) => (
              <motion.div
                key={brand.name}
                className="bg-white rounded-xl p-6 border border-light-200 shadow-soft hover:shadow-soft-hover hover:-translate-y-1 transition-all duration-400 text-center group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
              >
                <div className="font-display font-black text-lg text-dark mb-1 group-hover:text-gold transition-colors">{brand.name}</div>
                <div className="text-gold text-xs font-semibold tracking-widest uppercase mb-1">{brand.category}</div>
                <div className="text-gray-muted text-xs">{brand.country}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  )
}
