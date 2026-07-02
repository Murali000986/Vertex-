import { motion } from 'framer-motion'

// Reusable section header with gold label + animated heading
export default function SectionHeader({ label, title, subtitle, center = false, className = '' }) {
  return (
    <motion.div
      className={`mb-16 ${center ? 'text-center' : ''} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {label && (
        <div className={`gold-label mb-4 ${center ? 'justify-center' : ''}`}>
          {center && <span className="w-8 h-px bg-gold" />}
          {label}
          {center && <span className="w-8 h-px bg-gold" />}
        </div>
      )}
      <h2
        className="section-title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="text-muted text-base leading-relaxed mt-5 max-w-2xl" style={center ? { margin: '20px auto 0' } : {}}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
