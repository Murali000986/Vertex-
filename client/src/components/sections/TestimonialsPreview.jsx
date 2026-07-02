import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Homeowner, Jubilee Hills',
    review: 'Vortex Solutions transformed our living room into a world-class home theater. The attention to detail, from acoustic treatment to calibration, was extraordinary. We are absolutely blown away.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'CEO, TechStart Hyderabad',
    review: 'Our boardroom AV setup is now the envy of every client who visits. Vortex Solutions delivered on time, within budget, and with zero compromise on quality. Highly professional team.',
    rating: 5,
  },
  {
    name: 'Arjun Mehta',
    role: 'Homeowner, Whitefield, Bangalore',
    review: 'Outstanding work! They designed our smart home AV system from scratch — multi-room audio, lighting automation, and a dedicated Dolby Atmos theater. Perfect in every way.',
    rating: 5,
  },
  {
    name: 'Suresh Reddy',
    role: 'Director, Skyline Hotels',
    review: 'We engaged Vortex Solutions for our hotel conference rooms. Their expertise in commercial AV is second to none. Installation was clean, professional, and the results are exceptional.',
    rating: 5,
  },
  {
    name: 'Ananya Krishnan',
    role: 'Interior Designer, Bangalore',
    review: 'As a designer, I recommend Vortex Solutions to all my premium clients. They understand aesthetics as well as acoustics. The acoustic panels they designed actually enhanced the room decor.',
    rating: 5,
  },
]

export default function TestimonialsPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="gold-label mb-4 justify-center">
            <div className="w-8 h-px bg-gold" />
            Client Stories
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="section-title">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-light-100 rounded-xl p-8 border border-light-200 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-8">"{t.review}"</p>
                <div className="flex items-center gap-4 pt-5 border-t border-light-200">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="font-display font-bold text-gold text-sm">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-dark">{t.name}</div>
                    <div className="text-gray-muted text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
