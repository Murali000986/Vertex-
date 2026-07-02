import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, MessageCircle, ChevronRight } from 'lucide-react'
import Logo from '../ui/Logo'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Our Work', path: '/projects' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

const services = [
  { label: 'Home Theater Design', path: '/services' },
  { label: 'Home Theater Installation', path: '/services' },
  { label: 'Acoustic Treatment', path: '/services' },
  { label: 'Soundproofing', path: '/services' },
  { label: 'AV Integration', path: '/services' },
  { label: 'Smart Lighting', path: '/services' },
  { label: 'VRV / AC Solutions', path: '/services' },
  { label: 'Commercial AV', path: '/services' },
]

// Simple SVG social icons
const InstaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)
const FbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
)
const YtIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-light-100 overflow-hidden border-t border-light-200">
      {/* Large watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(80px, 18vw, 220px)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(0,0,0,0.03)',
            letterSpacing: '0.12em',
            userSelect: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          VERTEX SOLUTION
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo size="md" />
            <p className="text-gray-muted text-sm leading-relaxed mt-6 mb-8">
              30+ years of crafting immersive audio-visual experiences. From luxury home theaters to
              enterprise AV solutions — we build your perfect sound environment.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {[
                { Icon: InstaIcon, href: '#' },
                { Icon: FbIcon, href: '#' },
                { Icon: YtIcon, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded flex items-center justify-center border border-light-200 bg-white transition-all duration-300 hover:border-gold hover:text-gold shadow-soft"
                  style={{ color: '#6C757D' }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-dark mb-6">
              Quick Links
            </h4>
            <div className="w-12 h-px bg-gold mb-6" />
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-muted text-sm hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight
                      size={12}
                      className="text-gold opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 duration-300"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-dark mb-6">
              Our Services
            </h4>
            <div className="w-12 h-px bg-gold mb-6" />
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.path}
                    className="text-gray-muted text-sm hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight
                      size={12}
                      className="text-gold opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 duration-300"
                    />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-dark mb-6">
              Contact Us
            </h4>
            <div className="w-12 h-px bg-gold mb-6" />
            <ul className="space-y-5">
              <li>
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-2">Head Office</p>
                <div className="flex gap-3 text-gray-muted text-sm">
                  <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                  <span>Hyderabad, Telangana, India</span>
                </div>
              </li>
              <li>
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-2">
                  Freelance Services
                </p>
                <div className="flex gap-3 text-gray-muted text-sm">
                  <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                  <span>Bangalore, Karnataka, India</span>
                </div>
              </li>
              <li>
                <a
                  href="tel:+919849067007"
                  className="flex gap-3 text-gray-muted text-sm hover:text-gold transition-colors"
                >
                  <Phone size={14} className="text-gold mt-0.5 flex-shrink-0" />
                  +91 98490 67007
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@vertexsolution.in"
                  className="flex gap-3 text-gray-muted text-sm hover:text-gold transition-colors"
                >
                  <Mail size={14} className="text-gold mt-0.5 flex-shrink-0" />
                  info@vertexsolution.in
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919849067007"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
                >
                  <MessageCircle size={14} />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="w-full h-px bg-light-200 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-muted text-xs tracking-wide">
            © {year} <span className="text-dark font-semibold">Vertex Solution</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((t) => (
              <a key={t} href="#" className="text-gray-muted text-xs hover:text-gold transition-colors">
                {t}
              </a>
            ))}
          </div>
          <p className="text-gray-muted text-xs">
            Premium AV Solutions · Hyderabad · Bangalore
          </p>
        </div>
      </div>
    </footer>
  )
}
