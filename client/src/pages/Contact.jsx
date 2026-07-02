import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitted(true)
    reset()
  }

  return (
    <main className="pt-20 bg-white">
      {/* Hero */}
      <section className="relative h-64 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=85)' }} />
        <div className="absolute inset-0 bg-white/82 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="gold-label mb-4"><div className="w-8 h-px bg-gold" />Get In Touch</div>
            <h1 className="section-title">Contact <span className="text-gradient-gold">Us</span></h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-light-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="gold-label mb-5"><div className="w-8 h-px bg-gold" />Reach Us</div>
              <h2 className="section-title mb-8">Let's Start a <span className="text-gradient-gold">Conversation</span></h2>
              <p className="text-gray-muted text-base leading-relaxed mb-10">
                Get in touch with our team for a free consultation, site visit, or product enquiry.
                We are available Monday to Saturday, 9 AM to 7 PM.
              </p>
              <div className="space-y-5">
                {[
                  { icon: MapPin, title: 'Head Office — Hyderabad', text: 'Hyderabad, Telangana, India', sub: 'Mon – Sat: 9:00 AM – 7:00 PM' },
                  { icon: MapPin, title: 'Freelance Services — Bangalore', text: 'Bangalore, Karnataka, India', sub: 'Available on appointment' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex gap-4 bg-white rounded-xl p-5 border border-light-200 shadow-soft">
                      <div className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-gold" />
                      </div>
                      <div>
                        <div className="font-display font-bold text-dark text-sm mb-0.5">{item.title}</div>
                        <div className="text-gray-muted text-sm">{item.text}</div>
                        <div className="text-gray-muted text-xs mt-0.5">{item.sub}</div>
                      </div>
                    </div>
                  )
                })}
                <div className="flex gap-4 bg-white rounded-xl p-5 border border-light-200 shadow-soft">
                  <div className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-dark text-sm mb-0.5">Phone</div>
                    <a href="tel:+919849067007" className="text-gold text-sm hover:text-gold-dark transition-colors">+91 98490 67007</a>
                  </div>
                </div>
                <div className="flex gap-4 bg-white rounded-xl p-5 border border-light-200 shadow-soft">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} style={{ color: '#25D366' }} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-dark text-sm mb-0.5">WhatsApp</div>
                    <a href="https://wa.me/919849067007" target="_blank" rel="noreferrer" className="text-sm font-semibold" style={{ color: '#25D366' }}>Chat with us instantly →</a>
                  </div>
                </div>
                <div className="flex gap-4 bg-white rounded-xl p-5 border border-light-200 shadow-soft">
                  <div className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-dark text-sm mb-0.5">Email</div>
                    <a href="mailto:info@vortexsolution.in" className="text-gold text-sm hover:text-gold-dark transition-colors">info@vortexsolution.in</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="bg-white rounded-2xl p-10 border border-light-200 shadow-soft">
                {submitted ? (
                  <div className="text-center py-16">
                    <CheckCircle size={52} className="text-gold mx-auto mb-5" />
                    <h3 className="font-display font-bold text-2xl text-dark mb-3">Message Sent!</h3>
                    <p className="text-gray-muted mb-8">Our team will contact you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="btn-outline-gold text-xs">Send Another</button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display font-bold text-xl text-dark mb-2">Send Us a Message</h3>
                    <p className="text-gray-muted text-sm mb-8">We'll get back to you within 24 hours.</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-dark mb-2 uppercase tracking-widest">Your Name</label>
                          <input {...register('name', { required: 'Required' })} className="input-light" placeholder="Rajesh Sharma" />
                          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-dark mb-2 uppercase tracking-widest">Phone</label>
                          <input {...register('phone', { required: 'Required' })} className="input-light" placeholder="+91 98XXX XXXXX" />
                          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-dark mb-2 uppercase tracking-widest">Email Address</label>
                        <input {...register('email', { required: 'Required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email' } })} className="input-light" placeholder="your@email.com" />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-dark mb-2 uppercase tracking-widest">City</label>
                        <select {...register('city')} className="input-light bg-light-100">
                          <option value="">Select City</option>
                          <option value="Hyderabad">Hyderabad</option>
                          <option value="Bangalore">Bangalore</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-dark mb-2 uppercase tracking-widest">Your Requirement</label>
                        <textarea {...register('requirement', { required: 'Required' })} className="input-light resize-none" rows={5} placeholder="Tell us about your project — home theater, acoustic treatment, commercial AV, etc." />
                        {errors.requirement && <p className="text-red-400 text-xs mt-1">{errors.requirement.message}</p>}
                      </div>
                      <button type="submit" disabled={isSubmitting} className="btn-gold w-full justify-center flex items-center gap-2 text-sm py-4">
                        {isSubmitting ? 'Sending...' : (<><Send size={15} /> Send Message</>)}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
