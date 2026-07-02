import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, Home, ArrowRight } from 'lucide-react'

export default function ThankYou() {
  return (
    <main className="min-h-screen pt-20 flex items-center justify-center bg-light-100">
      <div className="max-w-lg mx-auto px-6 w-full">
        <motion.div
          className="bg-white rounded-2xl p-14 border border-light-200 shadow-soft-hover text-center"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          >
            <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-gold" />
            </div>
          </motion.div>

          <h1 className="font-display font-black text-4xl text-dark mb-3">
            Thank <span className="text-gradient-gold">You!</span>
          </h1>

          <p className="text-gray-muted text-base leading-relaxed mb-10">
            Your message has been received. One of our AV experts will contact you within 24 hours to discuss your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="btn-gold text-sm flex items-center justify-center gap-2">
              <Home size={14} /> Back to Home
            </Link>
            <Link to="/projects" className="btn-outline-gold text-sm flex items-center justify-center gap-2">
              View Our Work <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
