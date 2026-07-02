import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Animated Monogram */}
          <div className="relative w-24 h-24 mb-6">
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                className="draw-logo-path"
                d="M20 20 L50 80 L80 20" 
                stroke="#1A1A1A" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              <motion.path 
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 0.2, pathLength: 1 }}
                transition={{ delay: 1, duration: 1 }}
                d="M50 80 L50 20" 
                stroke="#B08D55" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
            
            {/* Pulsing glow */}
            <motion.div 
              className="absolute inset-0 bg-gold/10 rounded-full blur-xl -z-10"
              animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <motion.div 
            className="flex flex-col items-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="font-display font-black tracking-widest text-dark text-2xl leading-none">
              VORTEX
            </div>
            <div className="font-sans font-medium text-gold text-xs tracking-[0.3em] uppercase mt-2 leading-none">
              Solution
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
