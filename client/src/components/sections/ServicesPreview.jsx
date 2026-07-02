import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Tv2, Volume2, Layers, Lightbulb, Wind, Building2, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Tv2,
    title: 'Home Theater Design',
    desc: 'Bespoke home cinema rooms designed for your space — from intimate 5.1 setups to full Dolby Atmos private theaters.',
    img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=700&q=85',
  },
  {
    icon: Volume2,
    title: 'Acoustic Treatment',
    desc: 'Expert acoustic design and treatment to achieve perfect sound — no flutter echo, balanced frequency, pristine clarity.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=85',
  },
  {
    icon: Layers,
    title: 'AV Integration',
    desc: 'All your devices seamlessly unified — one touch to control projector, speakers, lights, and climate.',
    img: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=700&q=85',
  },
  {
    icon: Lightbulb,
    title: 'Smart Lighting',
    desc: 'Scene-based automated lighting that sets the perfect mood for every moment, from movie nights to working from home.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85',
  },
  {
    icon: Wind,
    title: 'VRV / Air Conditioning',
    desc: 'Energy-efficient multi-zone VRV systems with smart thermostat integration, whisper-quiet and perfectly calibrated.',
    img: 'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=700&q=85',
  },
  {
    icon: Building2,
    title: 'Commercial AV',
    desc: 'Corporate boardrooms, conference rooms, auditoriums and retail spaces — professional AV solutions at any scale.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=85',
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <div className="gold-label mb-4">
              <div className="w-8 h-px bg-gold" />
              What We Do
            </div>
            <h2 className="section-title">
              Our Core <span className="text-gradient-gold">Services</span>
            </h2>
          </div>
          <Link to="/services" className="btn-outline-gold text-xs px-6 py-3 flex items-center gap-2 self-start md:self-auto">
            All Services <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                className="group bg-white border border-light-200 rounded-xl overflow-hidden hover:shadow-soft-hover hover:-translate-y-1 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="w-10 h-10 rounded-lg bg-light-100 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-dark mb-3">{service.title}</h3>
                  <p className="text-gray-muted text-sm leading-relaxed mb-5">{service.desc}</p>
                  <Link to="/services" className="flex items-center gap-2 text-gold text-xs font-semibold tracking-wider uppercase hover:gap-3 transition-all">
                    Learn More <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
