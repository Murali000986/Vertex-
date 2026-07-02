import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const stats = [
  { value: '30+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '50+', label: 'Global Brands' },
  { value: '100%', label: 'Client Satisfaction' },
]

export default function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false)

  return (
    <section className="py-20 bg-light-100 border-b border-light-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-light-200">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onViewportEnter={() => setHasAnimated(true)}
              className="text-center px-4"
            >
              <div className="font-display font-black text-4xl lg:text-5xl text-dark mb-2">
                {hasAnimated ? stat.value : '0'}
              </div>
              <div className="font-sans text-xs font-semibold tracking-widest text-gray-muted uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
