import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import CTASection from '../components/sections/CTASection'

const faqs = [
  { q: 'How much does a home theater installation cost?', a: 'Costs vary based on room size, equipment selection, and acoustic requirements. Entry-level setups start from ₹2–5 lakhs, while premium custom theaters range from ₹10–50+ lakhs. We provide detailed quotes after a free site visit.' },
  { q: 'Do you offer a free consultation?', a: 'Yes! We offer a completely free, no-obligation consultation. Our experts will visit your space, understand your requirements, and provide a detailed design proposal and budget estimate.' },
  { q: 'Which brands do you work with?', a: 'We are authorized dealers of 50+ premium brands including Sony, Bose, Harman, JBL, Denon, Yamaha, Marantz, Klipsch, SVS, Epson, Optoma, Control4, Crestron, and many more.' },
  { q: 'Do you serve Bangalore as well?', a: 'Yes! While our head office is in Hyderabad, we provide premium home theater and AV installation services across Bangalore through our dedicated freelance services team.' },
  { q: 'How long does installation take?', a: 'A typical home theater installation takes 3–7 days depending on complexity. We provide a detailed project timeline before starting and keep you updated throughout.' },
  { q: 'Do you provide after-sales support and maintenance?', a: 'Absolutely. We offer comprehensive Annual Maintenance Contracts (AMC), warranty support, firmware updates, system recalibration, and rapid response to any technical issues.' },
  { q: 'What is the difference between soundproofing and acoustic treatment?', a: 'Soundproofing prevents sound from entering or leaving a room (isolation). Acoustic treatment controls how sound behaves within the room (absorption, diffusion, reflection). Both are often needed for a perfect home theater.' },
  { q: 'Can I upgrade my existing system?', a: "Yes, we specialize in system upgrades and integrations. Whether it's adding Dolby Atmos to an existing setup or upgrading to a 4K laser projector, our team can seamlessly enhance your current system." },
  { q: 'Do you handle commercial AV projects?', a: 'Yes, we handle commercial projects of all scales — boardrooms, conference rooms, auditoriums, hotels, restaurants, and retail spaces across Hyderabad and Bangalore.' },
  { q: 'Is Vertex Solution authorized to install Dolby Atmos systems?', a: 'Yes. Our team is certified and experienced in Dolby Atmos and DTS:X installations. We have completed numerous Dolby Atmos home theater projects across Hyderabad and Bangalore.' },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      className="border-b border-light-200 last:border-0"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <button onClick={() => setOpen(!open)} className="w-full py-6 flex items-start justify-between gap-6 text-left">
        <span className="font-display font-semibold text-dark text-base leading-snug">{faq.q}</span>
        <span className="flex-shrink-0 w-7 h-7 rounded-full border border-light-200 flex items-center justify-center bg-light-100">
          {open ? <Minus size={14} className="text-gold" /> : <Plus size={14} className="text-dark" />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-muted text-sm leading-relaxed pb-6 pr-12">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <main className="pt-20 bg-white">
      <section className="relative h-64 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=85)' }} />
        <div className="absolute inset-0 bg-white/82 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="gold-label mb-4"><div className="w-8 h-px bg-gold" />FAQs</div>
            <h1 className="section-title">Frequently Asked <span className="text-gradient-gold">Questions</span></h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-light-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-light-200 shadow-soft px-8">
            {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  )
}
