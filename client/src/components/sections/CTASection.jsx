import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Subtle watermark */}
      <div
        className="vortex-watermark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]"
        aria-hidden="true"
      >
        VORTEX
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="gold-label mb-5 justify-center">
            <div className="w-8 h-px bg-gold" />
            Let's Build Together
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl text-white leading-tight tracking-tight mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-12 max-w-xl mx-auto">
            Get a free, no-obligation consultation from our expert team. We'll visit your
            space, understand your vision, and design the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-dark font-semibold rounded hover:bg-light-100 transition-all duration-300 shadow-soft"
            >
              Book Free Consultation <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+919849067007"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded hover:border-gold hover:text-gold transition-all duration-300"
            >
              <Phone size={16} /> +91 98490 67007
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
