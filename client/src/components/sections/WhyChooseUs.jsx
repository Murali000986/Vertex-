import { motion } from 'framer-motion'
import { ShieldCheck, Clock, Award, Headphones, Star, Wrench } from 'lucide-react'

const reasons = [
  { icon: ShieldCheck, title: '30+ Years of Experience', desc: 'Three decades of specialized audio-visual and acoustic engineering expertise.' },
  { icon: Award, title: 'Authorized Premium Dealers', desc: 'Official partners of Sony, Bose, Harman, Marantz, and 50+ world-class brands.' },
  { icon: Wrench, title: 'End-to-End Execution', desc: 'We handle design, supply, installation, calibration, and maintenance under one roof.' },
  { icon: Headphones, title: '24/7 After-Sales Support', desc: 'Dedicated support team and annual maintenance contracts to keep your system optimal.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Meticulous project planning ensures every installation is completed on schedule.' },
  { icon: Star, title: '500+ Happy Clients', desc: 'A portfolio of satisfied homeowners, corporates, and hospitality brands across India.' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-light-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="gold-label mb-4 justify-center">
            <div className="w-8 h-px bg-gold" />
            Why Vertex Solution
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="section-title">
            The Vertex <span className="text-gradient-gold">Advantage</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl p-7 border border-light-200 hover:shadow-soft-hover hover:-translate-y-1 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-lg bg-light-100 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-display font-bold text-base text-dark mb-3">{r.title}</h3>
                <p className="text-gray-muted text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
