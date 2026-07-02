import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const timelineEvents = [
  { year: '1993', title: 'Company Founded', desc: 'Vertex Solution began as a small audio equipment shop in Hyderabad, driven by a passion for sound.' },
  { year: '1998', title: 'First Major Installation', desc: 'Completed our first premium home theater installation for a luxury residence in Banjara Hills.' },
  { year: '2005', title: 'Commercial AV Expansion', desc: 'Expanded into corporate and commercial AV — boardrooms, auditoriums, and hospitality spaces.' },
  { year: '2010', title: 'Acoustic Division Launched', desc: 'Launched a dedicated architectural acoustics and soundproofing division.' },
  { year: '2015', title: 'Smart Home Integration', desc: 'Added smart home and smart lighting automation to our portfolio.' },
  { year: '2020', title: 'Expanded to Bangalore', desc: 'Launched freelance AV services covering major residential and commercial projects in Bangalore.' },
  { year: '2024', title: '500+ Projects Milestone', desc: 'Celebrated our 500th completed project — a Dolby Atmos theater in Jubilee Hills, Hyderabad.' },
]

const team = [
  { name: 'M. Srinivas', role: 'Founder & Chief AV Architect', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=85' },
  { name: 'Rajiv Nair', role: 'Head of Acoustic Engineering', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=85' },
  { name: 'Deepika Reddy', role: 'AV Integration Specialist', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=85' },
]

export default function About() {
  return (
    <main className="pt-20 bg-white">
      {/* Hero */}
      <section className="relative h-96 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1600&q=85)' }}
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="gold-label mb-4">
              <div className="w-8 h-px bg-gold" />
              About Us
            </div>
            <h1 className="section-title">
              Our <span className="text-gradient-gold">Story</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-light-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="gold-label mb-5">
                <div className="w-8 h-px bg-gold" />
                Our Foundation
              </div>
              <h2 className="section-title mb-8">
                30 Years of <span className="text-gradient-gold">Passion</span>
              </h2>
              <p className="text-gray-muted text-base leading-relaxed mb-6">
                Founded in 1993, Vertex Solution started with a simple belief: that extraordinary
                sound and vision have the power to transform spaces and create lasting memories.
                From a modest showroom in Hyderabad, we grew into one of India's most respected
                names in home theater and commercial AV design.
              </p>
              <p className="text-gray-muted text-base leading-relaxed mb-8">
                Today, our team of certified engineers, acoustic designers, and AV specialists
                work across Hyderabad and Bangalore — bringing premium studio-grade experiences
                to homes, boardrooms, hotels, and studios.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[['500+', 'Projects'], ['30+', 'Years'], ['50+', 'Brands'], ['2', 'Cities']].map(([val, lbl]) => (
                  <div key={lbl} className="bg-white rounded-xl p-6 border border-light-200 text-center shadow-soft">
                    <div className="font-display font-black text-3xl text-dark mb-1">{val}</div>
                    <div className="text-xs font-semibold tracking-widest uppercase text-gold">{lbl}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="rounded-xl overflow-hidden shadow-soft-hover">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85"
                  alt="Our team at work"
                  className="w-full h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="gold-label mb-4 justify-center">
              <div className="w-8 h-px bg-gold" />
              Our Journey
              <div className="w-8 h-px bg-gold" />
            </div>
            <h2 className="section-title">3 Decades of <span className="text-gradient-gold">Excellence</span></h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-light-200 hidden md:block" />
            <div className="space-y-8">
              {timelineEvents.map((event, i) => (
                <motion.div
                  key={event.year}
                  className="flex gap-8 items-start"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="font-display font-black text-gold text-lg">{event.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-white border-2 border-gold mt-1.5 z-10" />
                  <div className="bg-white border border-light-200 rounded-xl p-6 flex-1 shadow-soft hover:shadow-soft-hover transition-shadow">
                    <h3 className="font-display font-bold text-dark mb-2">{event.title}</h3>
                    <p className="text-gray-muted text-sm leading-relaxed">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-24 bg-light-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="gold-label mb-4 justify-center">
              <div className="w-8 h-px bg-gold" />
              Where We Are
              <div className="w-8 h-px bg-gold" />
            </div>
            <h2 className="section-title">Our <span className="text-gradient-gold">Locations</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { city: 'Hyderabad', type: 'Head Office', img: 'https://images.unsplash.com/photo-1599030179827-89e3bfbb9b7f?w=700&q=85', desc: 'Our main operations center — showroom, warehouse, and engineering office.' },
              { city: 'Bangalore', type: 'Freelance Services', img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=700&q=85', desc: 'Dedicated installation team serving premium residential and commercial clients in Bangalore.' },
            ].map((loc, i) => (
              <motion.div key={loc.city} className="bg-white rounded-xl overflow-hidden border border-light-200 shadow-soft" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.7 }}>
                <div className="h-52 overflow-hidden">
                  <img src={loc.img} alt={loc.city} className="w-full h-full object-cover" />
                </div>
                <div className="p-7">
                  <span className="text-xs font-semibold tracking-widest uppercase text-gold">{loc.type}</span>
                  <h3 className="font-display font-black text-2xl text-dark mt-2 mb-3">{loc.city}</h3>
                  <p className="text-gray-muted text-sm leading-relaxed">{loc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="gold-label mb-4 justify-center">
              <div className="w-8 h-px bg-gold" />
              Our People
              <div className="w-8 h-px bg-gold" />
            </div>
            <h2 className="section-title">The <span className="text-gradient-gold">Expert Team</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div key={member.name} className="text-center group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}>
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-5 border-4 border-light-200 group-hover:border-gold transition-colors duration-300 shadow-soft">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display font-bold text-dark mb-1">{member.name}</h3>
                <p className="text-gold text-xs font-semibold tracking-widest uppercase">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-100 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title mb-6">Ready to Start Your Project?</h2>
          <Link to="/contact" className="btn-gold inline-flex items-center gap-2">
            Get Free Consultation <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
