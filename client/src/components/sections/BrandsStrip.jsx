import { motion } from 'framer-motion'

const brands = [
  'Sony', 'Bose', 'Harman', 'JBL', 'Denon', 'Yamaha', 'Marantz',
  'Klipsch', 'SVS', 'Epson', 'Optoma', 'Samsung', 'LG', 'Control4',
  'Crestron', 'Sonos', 'Focal', 'Polk Audio', 'Lutron', 'Stewart',
]

export default function BrandsStrip() {
  return (
    <section className="py-16 bg-light-100 border-y border-light-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.25em] uppercase font-semibold text-gray-muted">
            Authorized Dealer of 50+ Premium Global Brands
          </p>
        </motion.div>

        {/* Infinite scroll marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-16 w-max">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 font-display font-bold text-base tracking-widest text-gray-300 hover:text-gold transition-colors duration-300 cursor-default whitespace-nowrap"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
