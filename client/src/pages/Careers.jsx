import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Briefcase, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import CTASection from '../components/sections/CTASection'

const openings = [
  { role: 'AV Installation Engineer', location: 'Hyderabad', type: 'Full-time', exp: '3+ Years' },
  { role: 'Acoustic Design Specialist', location: 'Hyderabad', type: 'Full-time', exp: '5+ Years' },
  { role: 'Home Theater Designer', location: 'Hyderabad / Bangalore', type: 'Full-time', exp: '2+ Years' },
  { role: 'Project Manager — AV', location: 'Hyderabad', type: 'Full-time', exp: '4+ Years' },
  { role: 'AV Technician', location: 'Bangalore', type: 'Freelance', exp: '2+ Years' },
]

export default function Careers() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async () => {
    await new Promise(r => setTimeout(r, 1500))
    setSubmitted(true)
    reset()
  }

  return (
    <main className="pt-20 bg-white">
      <section className="relative h-64 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=85)' }} />
        <div className="absolute inset-0 bg-white/82 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="gold-label mb-4"><div className="w-8 h-px bg-gold" />Join Our Team</div>
            <h1 className="section-title">Careers at <span className="text-gradient-gold">Vortex</span></h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-light-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="gold-label mb-6"><div className="w-8 h-px bg-gold" />Current Openings</div>
            <div className="space-y-4">
              {openings.map((job, i) => (
                <motion.div key={job.role} className="bg-white rounded-xl p-6 border border-light-200 shadow-soft hover:shadow-soft-hover flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                  <div>
                    <h3 className="font-display font-bold text-dark text-lg mb-2">{job.role}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-muted text-xs">
                      <span className="flex items-center gap-1"><MapPin size={11} className="text-gold" />{job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase size={11} className="text-gold" />{job.type}</span>
                      <span className="flex items-center gap-1"><Clock size={11} className="text-gold" />{job.exp}</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-gold bg-gold/5 border border-gold/20 px-4 py-2 rounded self-start md:self-auto">Apply Now</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="gold-label mb-6"><div className="w-8 h-px bg-gold" />Apply Now</div>
            <div className="bg-white rounded-2xl p-10 border border-light-200 shadow-soft">
              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle size={48} className="text-gold mx-auto mb-4" />
                  <h3 className="font-display font-bold text-xl text-dark mb-2">Application Received!</h3>
                  <p className="text-gray-muted">Our HR team will review and contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-dark mb-2 uppercase tracking-widest">Full Name</label>
                      <input {...register('name', { required: true })} className="input-light" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-dark mb-2 uppercase tracking-widest">Phone</label>
                      <input {...register('phone', { required: true })} className="input-light" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-dark mb-2 uppercase tracking-widest">Email</label>
                    <input {...register('email', { required: true })} className="input-light" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-dark mb-2 uppercase tracking-widest">Position</label>
                    <select {...register('position')} className="input-light bg-light-100">
                      {openings.map((j) => <option key={j.role} value={j.role}>{j.role}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-dark mb-2 uppercase tracking-widest">Experience & Message</label>
                    <textarea {...register('message', { required: true })} className="input-light resize-none" rows={4} placeholder="Tell us about your experience..." />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="btn-gold w-full justify-center flex items-center gap-2 text-sm py-4">
                    <Send size={14} /> {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  )
}
