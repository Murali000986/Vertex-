import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin } from 'lucide-react'
import CTASection from '../components/sections/CTASection'

const filters = ['All', 'Home Theater', 'Residential', 'Commercial', 'Boardroom', 'Acoustic']

const projects = [
  { title: 'Dolby Atmos Private Cinema', location: 'Jubilee Hills, Hyderabad', type: 'Home Theater', img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=85' },
  { title: 'Luxury Living Room Theater', location: 'Banjara Hills, Hyderabad', type: 'Home Theater', img: 'https://images.unsplash.com/photo-1600607687983-ce476b7bd062?w=800&q=85' },
  { title: 'Corporate Boardroom AV', location: 'HITEC City, Hyderabad', type: 'Boardroom', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85' },
  { title: 'Studio Acoustic Treatment', location: 'Indiranagar, Bangalore', type: 'Acoustic', img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=85' },
  { title: 'Smart Home Integration', location: 'Whitefield, Bangalore', type: 'Residential', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=85' },
  { title: 'Hotel Conference Rooms', location: 'Hyderabad', type: 'Commercial', img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=85' },
  { title: '4K Laser Cinema Room', location: 'Gachibowli, Hyderabad', type: 'Home Theater', img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=85' },
  { title: 'Premium Villa AV Setup', location: 'Koramangala, Bangalore', type: 'Residential', img: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=85' },
  { title: 'Executive Boardroom', location: 'MG Road, Bangalore', type: 'Boardroom', img: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=85' },
  { title: 'Recording Studio Acoustics', location: 'Secunderabad', type: 'Acoustic', img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=85' },
  { title: 'Restaurant Ambient AV', location: 'Banjara Hills, Hyderabad', type: 'Commercial', img: 'https://images.unsplash.com/photo-1558618047-f4e70e885a7d?w=800&q=85' },
  { title: 'Private Screening Room', location: 'Madhapur, Hyderabad', type: 'Home Theater', img: 'https://images.unsplash.com/photo-1478462951936-8a3e07ed2958?w=800&q=85' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.type === activeFilter)

  return (
    <main className="pt-20 bg-white">
      {/* Hero */}
      <section className="relative h-72 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1600&q=85)' }} />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="gold-label mb-4"><div className="w-8 h-px bg-gold" />Portfolio</div>
            <h1 className="section-title">Our <span className="text-gradient-gold">Work</span></h1>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white sticky top-20 z-30 border-b border-light-200 shadow-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)} className={`filter-pill ${activeFilter === f ? 'active' : ''}`}>{f}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-light-100">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div key={activeFilter} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              {filtered.map((project, i) => (
                <motion.div key={`${project.title}-${i}`} className="group bg-white rounded-xl overflow-hidden border border-light-200 shadow-soft hover:shadow-soft-hover hover:-translate-y-1 transition-all duration-500" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.07, duration: 0.5 }}>
                  <div className="h-60 overflow-hidden relative">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-all duration-500 flex items-end p-5 opacity-0 group-hover:opacity-100">
                      <div>
                        <div className="text-xs font-semibold tracking-widest uppercase text-gold mb-1">{project.type}</div>
                        <h3 className="font-display font-bold text-white text-base">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold bg-gold/5 border border-gold/20 px-3 py-1 rounded mb-3">{project.type}</span>
                    <h3 className="font-display font-bold text-dark text-base mb-2">{project.title}</h3>
                    <div className="flex items-center gap-1.5 text-gray-muted text-xs">
                      <MapPin size={11} className="text-gold" />
                      {project.location}
                    </div>
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
