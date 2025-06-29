import React from 'react';

// A decorative, abstract illustration for the hero section.
const HeroIllustration: React.FC = () => {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgb(34 211 238)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgb(8 145 178)', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Background Grid */}
      <g opacity="0.1" stroke="#4B5563">
        {[...Array(20)].map((_, i) => (
          <React.Fragment key={`grid-${i}`}>
            <line x1={i * 20} y1="0" x2={i * 20} y2="400" strokeWidth="0.5" />
            <line x1="0" y1={i * 20} x2="400" y2={i * 20} strokeWidth="0.5" />
          </React.Fragment>
        ))}
      </g>

      {/* Main floating shapes */}
      <g className="animate-float" style={{ animationDelay: '0s' }}>
        <path d="M 100,100 Q 200,50 300,100 T 100,100" fill="url(#grad-cyan)" opacity="0.3" filter="url(#glow)" />
        <circle cx="200" cy="200" r="100" fill="none" stroke="url(#grad-cyan)" strokeWidth="2" opacity="0.6" />
      </g>

      {/* Orbiting elements */}
      <g className="animate-float" style={{ animationDelay: '1s' }}>
        <text x="80" y="180" fill="#6EE7B7" fontSize="24" fontFamily="monospace" className="opacity-80 animate-float" style={{ animationDuration: '6s' }}>
          &lt;/&gt;
        </text>
      </g>

      <g className="animate-float" style={{ animationDelay: '2.5s' }}>
        <circle cx="320" cy="250" r="8" fill="#93C5FD" className="opacity-70 animate-float" style={{ animationDuration: '7s' }} />
        <circle cx="330" cy="150" r="4" fill="#F9A8D4" className="opacity-70 animate-float" style={{ animationDuration: '4s' }} />
      </g>
      
      <path d="M 50,350 C 150,300 250,380 350,320" stroke="#4B5563" strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="5,5" />
    </svg>
  );
};

export default HeroIllustration;