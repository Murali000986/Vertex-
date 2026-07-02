import { Phone, MessageCircle, Mail } from 'lucide-react'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a 
        href="https://wa.me/919849067007" 
        target="_blank" 
        rel="noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-soft-hover hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
      </a>
      
      {/* Phone */}
      <a 
        href="tel:+919849067007" 
        className="w-12 h-12 rounded-full flex items-center justify-center bg-dark text-white shadow-soft-hover hover:-translate-y-1 hover:shadow-lg hover:bg-gold transition-all duration-300 group"
        aria-label="Call Us"
      >
        <Phone size={20} className="group-hover:scale-110 transition-transform" />
      </a>
      
      {/* Email */}
      <a 
        href="mailto:info@vertexsolution.in" 
        className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-light-200 text-dark shadow-soft-hover hover:-translate-y-1 hover:shadow-lg hover:border-gold hover:text-gold transition-all duration-300 group hidden md:flex"
        aria-label="Email Us"
      >
        <Mail size={20} className="group-hover:scale-110 transition-transform" />
      </a>
    </div>
  )
}
