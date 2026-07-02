import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tv2, Volume2, AudioWaveform, Layers, Lightbulb, Wind, Building2, CheckCircle, ArrowRight } from 'lucide-react'
import CTASection from '../components/sections/CTASection'
import { Link } from 'react-router-dom'

const allServices = [
  {
    id: 'home-theater',
    icon: Tv2,
    category: 'Home Theater',
    services: [
      { title: 'Home Theater Design', desc: 'We begin with an in-depth consultation to understand your space, lifestyle, and budget. Our designers create a detailed room layout, acoustic plan, equipment selection, and 3D visualization.', features: ['Room Analysis & Acoustics Planning', '3D Design & Visualization', 'Equipment Selection & Specification', 'Budget Planning', 'Customized Seating Layout'], img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=85' },
      { title: 'Home Theater Installation', desc: 'Professional installation by certified technicians. We handle everything — structured wiring, speaker placement, display calibration, projector alignment, and smart control integration.', features: ['Structured Cabling & Cable Management', 'Speaker Mounting & Calibration', 'Projector & Screen Installation', 'AV Receiver Setup', 'Smart Control Integration'], img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=85' },
      { title: 'Home Theater Maintenance', desc: 'Keep your system performing at its peak. Annual maintenance contracts, firmware updates, system calibration, and rapid response to any technical issues.', features: ['Annual Maintenance Contracts', 'System Calibration', 'Firmware Updates', 'Component Repair & Replacement', '24/7 Support'], img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=85' },
    ],
  },
  {
    id: 'acoustic',
    icon: Volume2,
    category: 'Acoustic & Soundproofing',
    services: [
      { title: 'Residential Soundproofing', desc: 'Block external noise and prevent sound leakage with our premium soundproofing solutions for home theaters, music rooms, and bedrooms.', features: ['Mass Loaded Vinyl Installation', 'Decoupled Wall Systems', 'Door & Window Sealing', 'Floor Isolation', 'HVAC Noise Control'], img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&q=85' },
      { title: 'Commercial Soundproofing', desc: 'Professional-grade soundproofing for offices, recording studios, conference rooms, restaurants, and entertainment venues.', features: ['Office Acoustic Partitions', 'Studio Grade Isolation', 'Conference Room Privacy', 'Mechanical Room Treatment', 'STC Rating Guarantee'], img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=85' },
      { title: 'Acoustic Treatment', desc: 'Optimize room acoustics for perfect sound reproduction. Precision-placed absorption panels, diffusers, and bass traps.', features: ['Bass Trap Installation', 'Absorption Panel Placement', 'Diffuser Design', 'Flutter Echo Control', 'RT60 Measurement & Tuning'], img: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500&q=85' },
    ],
  },
  {
    id: 'av',
    icon: Layers,
    category: 'Audio & Video',
    services: [
      { title: 'Audio System Installation', desc: 'From stereo setups to full Dolby Atmos surround sound — we design and install audio systems that deliver emotional, immersive listening experiences.', features: ['2.0 to 11.4.6 Surround Systems', 'In-Wall & In-Ceiling Speakers', 'Subwoofer Placement', 'Multi-Room Audio', 'Outdoor Audio'], img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=85' },
      { title: 'Video System Installation', desc: 'Ultra-high-definition display solutions — 4K/8K TVs, laser projectors, LED video walls, and automated screens for the ultimate visual experience.', features: ['4K/8K TV Installation', 'Laser Projector Setup', 'Motorized Screen Installation', 'LED Video Wall', 'Display Calibration'], img: 'https://images.unsplash.com/photo-1478462951936-8a3e07ed2958?w=500&q=85' },
      { title: 'AV Integration', desc: 'Seamless integration of all your AV equipment into a unified, easy-to-use system. One app to control your entire home or office.', features: ['Control4 & Crestron Integration', 'AMX Systems', 'Custom Programming', 'App-Based Control', 'Voice Control Integration'], img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=85' },
    ],
  },
  {
    id: 'lighting',
    icon: Lightbulb,
    category: 'Lighting',
    services: [
      { title: 'Smart Lighting Design', desc: 'Transform your space with intelligent lighting. Create the perfect ambience for every moment — movie nights, dinner parties, or working from home.', features: ['Scene-Based Control', 'Circadian Rhythm Lighting', 'Dimmer Integration', 'Color Temperature Control', 'Motion Sensing'], img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=85' },
    ],
  },
  {
    id: 'vrv',
    icon: Wind,
    category: 'VRV / AC',
    services: [
      { title: 'VRV Air Conditioning', desc: 'Advanced variable refrigerant flow systems for precise climate control across multiple zones. Energy efficient, whisper quiet, perfectly suited for home theaters.', features: ['Multi-Zone VRV Systems', 'Ducted & Ductless Options', 'Energy Efficiency Rating', 'Smart Thermostat Integration', 'Annual Maintenance'], img: 'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=500&q=85' },
    ],
  },
  {
    id: 'commercial',
    icon: Building2,
    category: 'Commercial AV',
    services: [
      { title: 'Boardroom AV Setup', desc: 'Make every meeting impactful. Professional boardroom AV solutions with 4K displays, video conferencing, wireless presentation, and digital signage.', features: ['4K Display Walls', 'Video Conferencing Integration', 'Wireless Presentation', 'Digital Signage', 'Microphone Arrays'], img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=85' },
      { title: 'Meeting Room AV', desc: 'Equipped meeting rooms for seamless collaboration. Microsoft Teams, Zoom Rooms, and Cisco Webex certified solutions.', features: ['Teams & Zoom Certified Rooms', 'Touch Panel Control', 'Camera & Audio Solutions', 'Booking Panel', 'Remote Management'], img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&q=85' },
    ],
  },
]

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('home-theater')
  const current = allServices.find((s) => s.id === activeCategory)

  return (
    <main className="pt-20 bg-white">
      {/* Hero */}
      <section className="relative h-72 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1600&q=85)' }} />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="gold-label mb-4"><div className="w-8 h-px bg-gold" />What We Offer</div>
            <h1 className="section-title">Our <span className="text-gradient-gold">Services</span></h1>
          </motion.div>
        </div>
      </section>

      {/* Category Nav */}
      <section className="py-6 bg-white sticky top-20 z-30 border-b border-light-200 shadow-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {allServices.map((cat) => {
              const Icon = cat.icon
              return (
                <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`filter-pill flex items-center gap-2 ${activeCategory === cat.id ? 'active' : ''}`}>
                  <Icon size={13} /> {cat.category}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-light-100">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              {current && (
                <>
                  <div className="gold-label mb-8"><div className="w-8 h-px bg-gold" />{current.category}</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                    {current.services.map((service, i) => (
                      <motion.div key={service.title} className="bg-white rounded-xl overflow-hidden border border-light-200 shadow-soft hover:shadow-soft-hover hover:-translate-y-1 transition-all duration-500" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                        <div className="h-44 overflow-hidden">
                          <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-7">
                          <h3 className="font-display font-bold text-lg text-dark mb-3">{service.title}</h3>
                          <p className="text-gray-muted text-sm leading-relaxed mb-5">{service.desc}</p>
                          <ul className="space-y-2 mb-7">
                            {service.features.map((f) => (
                              <li key={f} className="flex items-center gap-2 text-sm text-dark/80">
                                <CheckCircle size={13} className="text-gold flex-shrink-0" />
                                {f}
                              </li>
                            ))}
                          </ul>
                          <Link to="/contact" className="btn-gold text-xs flex items-center gap-2 w-fit py-2.5 px-6">
                            Get a Quote <ArrowRight size={12} />
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
