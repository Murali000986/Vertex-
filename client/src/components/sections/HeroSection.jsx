import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

const heroImages = [
  '/images/cinema_dark.png',
  '/images/cinema_modern.png',
  '/images/boardroom_av.png',
  '/images/living_room_av.png'
]

export default function HeroSection() {
  const container = useRef(null)

  return (
    <section ref={container} className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-dark">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          allowTouchMove={false}
          className="w-full h-full"
        >
          {heroImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${img})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-px bg-gold" />
            <span className="font-sans font-semibold tracking-[0.2em] uppercase text-xs text-gold">
              Premium AV Solutions
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight mb-8"
          >
            Design Your <br />
            <span className="text-gradient-gold">Perfect Space</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-sans text-white/80 text-base md:text-lg max-w-xl leading-relaxed mb-10"
          >
            30+ years of expertise in crafting bespoke home theaters, architectural acoustics, 
            and smart commercial environments.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Link to="/contact" className="btn-gold">
              Book Consultation
            </Link>
            
            <a href="#projects" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                <Play size={14} className="text-white group-hover:text-gold transition-colors ml-1" />
              </div>
              <span className="font-sans font-semibold text-sm tracking-wide text-white group-hover:text-gold transition-colors">
                View Projects
              </span>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] tracking-widest uppercase text-white/50 font-semibold">Scroll</span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
