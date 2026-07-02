import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import CTASection from '../components/sections/CTASection'

const categories = ['All', 'Projectors', 'Speakers', 'Receivers', 'Amplifiers', 'Subwoofers', 'Screens', 'Acoustic Panels', 'Smart Lighting']

const products = [
  { name: 'Sony VPL-XW7000ES Laser Projector', category: 'Projectors', brand: 'Sony', desc: 'True 4K native resolution, 3200 lumens, laser light source. The benchmark for home cinema.', img: 'https://images.unsplash.com/photo-1478462951936-8a3e07ed2958?w=500&q=85' },
  { name: 'Bose Lifestyle 650 System', category: 'Speakers', brand: 'Bose', desc: 'Flagship 5.1 surround sound. Jewel Cube satellites and an Acoustimass module.', img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=85' },
  { name: 'Marantz AV10 Processor', category: 'Receivers', brand: 'Marantz', desc: '15.4-channel pre-amplifier processor. The reference standard for AV processors.', img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=85' },
  { name: 'Klipsch Reference Premiere RP-8000F', category: 'Speakers', brand: 'Klipsch', desc: 'Dual 8" Cerametallic woofers, Tractrix horn tweeter. Floor-standing excellence.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=85' },
  { name: 'SVS SB-3000 Subwoofer', category: 'Subwoofers', brand: 'SVS', desc: '13" driver, 800W RMS amplifier. Deep, accurate, room-filling bass.', img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=85' },
  { name: 'Stewart Filmscreen Cima', category: 'Screens', brand: 'Stewart', desc: 'Motorized 4K Ultra HD gain 1.1 screen. Industry standard for serious cinema rooms.', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=85' },
  { name: 'GIK Acoustics 242 Panel', category: 'Acoustic Panels', brand: 'GIK Acoustics', desc: 'Broadband absorption panel. Fabric-wrapped, available in custom sizes and fabrics.', img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&q=85' },
  { name: 'Lutron Caséta Smart Dimmer', category: 'Smart Lighting', brand: 'Lutron', desc: 'Industry-leading wireless smart dimmer. Works with Alexa, Google, and Apple HomeKit.', img: 'https://images.unsplash.com/photo-1558618047-f4e70e885a7d?w=500&q=85' },
  { name: 'Yamaha RX-A8A Receiver', category: 'Receivers', brand: 'Yamaha', desc: 'AVENTAGE 11.2ch AV Receiver with 8K HDMI and Dolby Atmos support.', img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=85' },
  { name: 'Epson LS12000 Projector', category: 'Projectors', brand: 'Epson', desc: 'Laser 4K PRO-UHD with 2700 lumens and 2,500,000:1 contrast ratio.', img: 'https://images.unsplash.com/photo-1478462951936-8a3e07ed2958?w=500&q=85' },
  { name: 'Polk Audio Reserve R700', category: 'Speakers', brand: 'Polk Audio', desc: 'Floor-standing speaker with Pinnacle Ring Radiator tweeter. 3-way design.', img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=85' },
  { name: 'Crown XLi 3500 Amplifier', category: 'Amplifiers', brand: 'Crown', desc: 'Professional 2-channel power amplifier. 1200W per channel into 4Ω.', img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=85' },
]

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filtered = activeFilter === 'All' ? products : products.filter((p) => p.category === activeFilter)

  return (
    <main className="pt-20 bg-white">
      {/* Hero */}
      <section className="relative h-72 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=1600&q=85)' }} />
        <div className="absolute inset-0 bg-white/82 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="gold-label mb-4"><div className="w-8 h-px bg-gold" />Premium Products</div>
            <h1 className="section-title">World-Class <span className="text-gradient-gold">AV Products</span></h1>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white sticky top-20 z-30 border-b border-light-200 shadow-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveFilter(cat)} className={`filter-pill ${activeFilter === cat ? 'active' : ''}`}>{cat}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-light-100">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div key={activeFilter} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              {filtered.map((product, i) => (
                <motion.div key={product.name} className="bg-white rounded-xl overflow-hidden border border-light-200 shadow-soft hover:shadow-soft-hover hover:-translate-y-1 transition-all duration-500 group" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06, duration: 0.5 }}>
                  <div className="h-48 overflow-hidden relative">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white text-gold border border-gold/30 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded">{product.category}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-gold text-xs font-bold tracking-widest uppercase mb-1">{product.brand}</div>
                    <h3 className="font-display font-bold text-dark text-sm mb-2 leading-snug">{product.name}</h3>
                    <p className="text-gray-muted text-xs leading-relaxed mb-5">{product.desc}</p>
                    <a
                      href={`https://wa.me/919849067007?text=Hi%20Vertex%20Solution%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-gold text-xs w-full justify-center flex items-center gap-2 py-2.5"
                    >
                      <MessageCircle size={12} /> Enquire Now
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
