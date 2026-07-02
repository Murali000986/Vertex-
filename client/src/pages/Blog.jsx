import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, User } from 'lucide-react'
import CTASection from '../components/sections/CTASection'

const posts = [
  { title: 'How to Design the Perfect Home Theater Room', category: 'Home Theater', date: 'June 2025', read: '8 min', img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=700&q=85', excerpt: 'A step-by-step guide to planning your home theater — from room dimensions and acoustic treatment to screen size selection and seating arrangement.' },
  { title: 'Dolby Atmos vs DTS:X — Which is Better?', category: 'Audio', date: 'May 2025', read: '6 min', img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=700&q=85', excerpt: 'Understanding the differences between the two leading immersive audio formats and which one is right for your home theater.' },
  { title: 'Top 5 Home Theater Mistakes to Avoid', category: 'Tips', date: 'April 2025', read: '5 min', img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=700&q=85', excerpt: 'Common mistakes homeowners make when planning a home theater and how to avoid them for the best possible result.' },
  { title: 'Acoustic Treatment: The Secret to Perfect Sound', category: 'Acoustics', date: 'March 2025', read: '7 min', img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=700&q=85', excerpt: 'Why acoustic treatment is as important as the audio equipment itself — and how to get it right in your home theater.' },
  { title: 'Best Projectors of 2025 for Home Theaters', category: 'Products', date: 'February 2025', read: '10 min', img: 'https://images.unsplash.com/photo-1478462951936-8a3e07ed2958?w=700&q=85', excerpt: 'Our experts review the top 4K laser projectors for home theaters in 2025 — from budget to premium options.' },
  { title: 'Modern Office AV Solutions', category: 'Commercial', date: 'January 2025', read: '6 min', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=85', excerpt: 'How modern businesses are transforming their offices with advanced AV solutions for better collaboration and productivity.' },
]

export default function Blog() {
  return (
    <main className="pt-20 bg-white">
      <section className="relative h-64 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1600&q=85)' }} />
        <div className="absolute inset-0 bg-white/82 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="gold-label mb-4"><div className="w-8 h-px bg-gold" />Expert Insights</div>
            <h1 className="section-title">The Vortex <span className="text-gradient-gold">Blog</span></h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-light-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.map((post, i) => (
              <motion.div key={post.title} className="bg-white rounded-xl overflow-hidden border border-light-200 shadow-soft hover:shadow-soft-hover hover:-translate-y-1 transition-all duration-500 group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}>
                <div className="h-48 overflow-hidden relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-gold border border-gold/20 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded">{post.category}</span>
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-4 text-gray-muted text-xs mb-4">
                    <span className="flex items-center gap-1"><User size={10} /> Vortex Team</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {post.read} read</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-dark text-base leading-snug mb-3 group-hover:text-gold transition-colors">{post.title}</h3>
                  <p className="text-gray-muted text-sm leading-relaxed mb-5">{post.excerpt}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-wider uppercase hover:gap-3 transition-all">
                    Read More <ArrowRight size={12} />
                  </a>
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
