/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Classic Champagne Gold for subtle, elegant accents
        gold: {
          DEFAULT: '#B08D55',
          dark: '#8C6C3A',
          light: '#D4B889',
          muted: '#C4A87C',
        },
        // Clean white and grays for the classic look
        light: {
          DEFAULT: '#FFFFFF',
          100: '#F8F9FA',
          200: '#F1F3F5',
          300: '#E9ECEF',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          100: '#2C2C2C',
          200: '#3D3D3D',
        },
        gray: {
          muted: '#6C757D',
          light: '#DEE2E6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        accent: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #B08D55 0%, #8C6C3A 100%)',
        'light-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%)',
        'hero-gradient': 'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.2) 100%)',
        'card-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.03)',
        'soft-hover': '0 10px 40px rgba(0,0,0,0.08)',
        'gold': '0 4px 15px rgba(176,141,85,0.15)',
        'glass': '0 8px 32px rgba(0,0,0,0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'marquee-rev': 'marqueeRev 40s linear infinite',
        'drift': 'drift 30s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'counter': 'counter 2s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRev: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        drift: {
          '0%': { transform: 'translateX(-5%)' },
          '100%': { transform: 'translateX(5%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '4px',
        md: '12px',
      },
    },
  },
  plugins: [],
}
