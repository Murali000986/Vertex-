import { motion } from 'framer-motion'
import CTASection from '../components/sections/CTASection'

const steps = [
  { step: '01', title: 'Free Consultation', desc: 'We begin with a detailed consultation to understand your vision, space, lifestyle, and budget. No obligation — just expert advice.', img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=85' },
  { step: '02', title: 'Site Survey & Analysis', desc: 'Our acoustic engineers and AV designers visit your space for a thorough measurement, analysis, and room assessment.', img: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600&q=85' },
  { step: '03', title: 'Custom Design', desc: 'We create a bespoke design — room layout, acoustic plan, equipment selection, 3D visualization, and a detailed project proposal.', img: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&q=85' },
  { step: '04', title: 'Proposal & Approval', desc: 'We present the design, product specifications, timeline, and cost — all transparent. You approve before we begin.', img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=85' },
  { step: '05', title: 'Professional Installation', desc: 'Our certified technicians execute the project with precision — structured cabling, speaker installation, display calibration, and integration.', img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=85' },
  { step: '06', title: 'Commissioning & Handover', desc: 'Full system calibration, final tuning, client training, and handover documentation. We ensure everything is perfect.', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=85' },
  { step: '07', title: 'After-Sales Support', desc: 'Dedicated maintenance contracts, firmware updates, and responsive support — we stand behind every project we deliver.', img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=85' },
]

export default function Process() {
  return (
    <main className="pt-20 bg-white">
      {/* Hero */}
      <section className="relative h-64 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85)' }} />
        <div className="absolute inset-0 bg-white/82 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="gold-label mb-4"><div className="w-8 h-px bg-gold" />How We Work</div>
            <h1 className="section-title">Our <span className="text-gradient-gold">Process</span></h1>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-light-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="gold-label justify-center mb-4"><div className="w-8 h-px bg-gold" />7 Steps to Your Dream Setup<div className="w-8 h-px bg-gold" /></div>
            <p className="text-gray-muted text-base max-w-xl mx-auto">From first call to final handover — a seamless, transparent, and professional experience at every step.</p>
          </motion.div>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                className="bg-white rounded-xl overflow-hidden border border-light-200 shadow-soft hover:shadow-soft-hover transition-all duration-500 flex flex-col md:flex-row"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <div className="md:w-48 h-40 md:h-auto overflow-hidden flex-shrink-0">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-7 flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gold/5 border border-gold/20 flex items-center justify-center">
                    <span className="font-display font-black text-gold text-lg">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-dark mb-3">{step.title}</h3>
                    <p className="text-gray-muted text-sm leading-relaxed">{step.desc}</p>
                  </div>
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
