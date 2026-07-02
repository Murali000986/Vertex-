import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const projects = [
  { title: 'Dolby Atmos Private Cinema', location: 'Jubilee Hills, Hyderabad', type: 'Home Theater', img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=900&q=90' },
  { title: 'Corporate Boardroom AV', location: 'HITEC City, Hyderabad', type: 'Commercial', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=90' },
  { title: 'Luxury Living Room Theater', location: 'Banjara Hills, Hyderabad', type: 'Residential', img: 'https://images.unsplash.com/photo-1600607687983-ce476b7bd062?w=900&q=90' },
  { title: 'Recording Studio Acoustics', location: 'Indiranagar, Bangalore', type: 'Acoustic', img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=900&q=90' },
  { title: 'Smart Villa Integration', location: 'Whitefield, Bangalore', type: 'Smart Home', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=90' },
  { title: 'Hotel Conference AV', location: 'Hyderabad', type: 'Commercial', img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=90' },
]

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <div className="gold-label mb-4">
              <div className="w-8 h-px bg-gold" />
              Portfolio
            </div>
            <h2 className="section-title">
              Featured <span className="text-gradient-gold">Projects</span>
            </h2>
          </div>
          <Link to="/projects" className="btn-outline-gold text-xs px-6 py-3 flex items-center gap-2 self-start md:self-auto">
            All Projects <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <div className="group relative h-80 rounded-xl overflow-hidden border border-light-200 shadow-soft">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Info overlay on hover */}
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/60 transition-all duration-500 flex flex-col justify-end p-6">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold bg-white/10 border border-gold/30 px-3 py-1 rounded mb-3">
                      {project.type}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white mb-1">{project.title}</h3>
                    <div className="flex items-center gap-1.5 text-white/70 text-xs">
                      <MapPin size={11} />
                      {project.location}
                    </div>
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
