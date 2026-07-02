import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const highlights = [
  '30+ Years of Industry Expertise',
  'Authorized Dealer of 50+ Premium Brands',
  'Head Office in Hyderabad, Serving Bangalore',
  'End-to-End Project Management',
  'Annual Maintenance & After-Sales Support',
]

export default function AboutPreview() {
  return (
    <section className="py-24 bg-light-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image Collage */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            {/* Main image */}
            <div className="rounded-xl overflow-hidden shadow-soft-hover">
              <img
                src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=85"
                alt="Expert AV consultation"
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-soft-hover p-6 w-44 z-10">
              <div className="font-display font-black text-4xl text-dark leading-none mb-1">30+</div>
              <div className="text-xs font-semibold tracking-widest text-gold uppercase">Years<br />of Excellence</div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="gold-label mb-5">
              <div className="w-8 h-px bg-gold" />
              Who We Are
            </div>
            <h2 className="section-title mb-6">
              India's Most Trusted <span className="text-gradient-gold">AV Experts</span>
            </h2>
            <p className="text-gray-muted text-base leading-relaxed mb-5">
              Vortex Solutions was founded with one mission — to bring studio-grade audio and cinematic
              visual experiences into people's homes and workplaces. With over 30 years in the
              industry, we've built a reputation on quality, precision, and unmatched after-sales care.
            </p>
            <p className="text-gray-muted text-base leading-relaxed mb-8">
              Headquartered in Hyderabad with freelance services spanning Bangalore, our team of
              certified engineers, acoustic specialists, and AV designers delivers projects of every
              scale — from private home cinemas to large commercial installations.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm text-dark font-medium">
                  <CheckCircle size={16} className="text-gold flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <Link to="/about" className="btn-gold flex items-center gap-2 w-fit">
              Our Story <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
