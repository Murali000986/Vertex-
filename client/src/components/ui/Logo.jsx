// Vertex Solution Logo SVG component
export default function Logo({ size = "md", showText = true, color = "dark" }) {
  const sizes = {
    sm: { svg: 24, text: "text-lg" },
    md: { svg: 32, text: "text-xl md:text-2xl" },
    lg: { svg: 48, text: "text-3xl md:text-4xl" },
    xl: { svg: 80, text: "text-5xl md:text-7xl" }
  };

  const current = sizes[size] || sizes.md;
  const textColorClass = color === 'white' ? 'text-white' : 'text-dark';

  return (
    <div className="flex items-center gap-3">
      {/* Abstract V monogram */}
      <svg 
        width={current.svg} 
        height={current.svg} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path 
          d="M20 20 L50 80 L80 20" 
          stroke="url(#goldGradient)" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M50 80 L50 20" 
          stroke="url(#goldGradient)" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          opacity="0.5"
        />
        <defs>
          <linearGradient id="goldGradient" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B08D55" />
            <stop offset="1" stopColor="#8C6C3A" />
          </linearGradient>
        </defs>
      </svg>
      
      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-black tracking-widest leading-none ${current.text} ${textColorClass}`}>
            VERTEX
          </span>
          <span className="font-sans font-semibold text-gold text-[0.35em] tracking-[0.3em] uppercase mt-1 leading-none pl-1">
            Solution
          </span>
        </div>
      )}
    </div>
  );
}
