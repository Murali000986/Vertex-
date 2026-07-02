import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../ui/Logo'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { 
    label: 'Services', 
    path: '/services',
    dropdown: [
      { label: 'Home Theater', path: '/services' },
      { label: 'Acoustic & Soundproofing', path: '/services' },
      { label: 'Audio & Video', path: '/services' },
      { label: 'Lighting & VRV', path: '/services' },
      { label: 'Commercial AV', path: '/services' },
    ]
  },
  { label: 'Products', path: '/products' },
  { 
    label: 'Segments', 
    path: '#',
    dropdown: [
      { label: 'Residential Solutions', path: '/residential' },
      { label: 'Commercial Solutions', path: '/commercial' },
    ]
  },
  { label: 'Our Work', path: '/projects' },
  { label: 'Process', path: '/process' },
  { label: 'Brands', path: '/brands' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHome = location.pathname === '/'
  const isDarkBg = isHome && !scrolled
  const textColor = isDarkBg ? 'text-white' : 'text-dark'
  const logoColor = isDarkBg ? 'white' : 'dark'

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm border-b border-light-200' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="relative z-50">
          <Logo size="sm" color={logoColor} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <Link 
                to={link.path}
                className={`flex items-center gap-1 text-sm font-sans font-medium ${textColor} hover:text-gold transition-colors py-2`}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-300" />}
              </Link>
              
              {/* Dropdown Menu */}
              {link.dropdown && (
                <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-white border border-light-200 shadow-soft rounded-md p-2 w-56 flex flex-col gap-1">
                    {link.dropdown.map((drop) => (
                      <Link 
                        key={drop.label}
                        to={drop.path}
                        className="px-4 py-2 text-sm text-gray-700 hover:text-gold hover:bg-light-100 rounded transition-colors"
                      >
                        {drop.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link to="/contact" className={`text-xs px-6 py-2.5 ${isDarkBg ? 'btn-gold' : 'btn-gold'}`}>
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden relative z-50 p-2 ${textColor}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} className="text-dark" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 overflow-y-auto pb-10"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link 
                    to={link.path}
                    className="font-display font-bold text-2xl text-dark"
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 mt-3 flex flex-col gap-3 border-l-2 border-light-200">
                      {link.dropdown.map((drop) => (
                        <Link 
                          key={drop.label} 
                          to={drop.path}
                          className="text-gray-600 font-sans text-sm"
                        >
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-8 pt-8 border-t border-light-200">
                <Link to="/contact" className="btn-gold w-full text-center">
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
