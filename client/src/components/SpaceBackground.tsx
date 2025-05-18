import React from 'react';

interface SpaceBackgroundProps {
  starCount?: number;
  className?: string;
}

export const SpaceBackground: React.FC<SpaceBackgroundProps> = ({ 
  starCount = 400,
  className = '' 
}) => {
  // Generate random stars
  const stars = React.useMemo(() => {
    return Array.from({ length: starCount }).map((_, i) => {
      const size = Math.random() * 2 + 1; // 1-3px
      const x = Math.random() * 100; // 0-100%
      const y = Math.random() * 100; // 0-100%
      const duration = 3 + Math.random() * 7; // 3-10s for twinkling
      const delay = Math.random() * 5; // 0-5s delay
      const opacity = Math.random() * 0.7 + 0.3; // 0.3-1 opacity
      const isPurple = Math.random() > 0.9; // 10% chance for purple star
      
      return {
        id: i,
        size,
        x,
        y,
        duration,
        delay,
        opacity,
        color: isPurple ? '#9050dc' : '#ffffff'
      };
    });
  }, [starCount]);

  return (
    <div className={`fixed inset-0 w-full h-full overflow-hidden bg-black z-0 ${className}`}>
      {/* Space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#06021a] to-[#0e0538] opacity-90" />
      
      {/* Nebula effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[10%] right-[15%] w-[50%] h-[50%] rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[15%] w-[40%] h-[30%] rounded-full bg-indigo-600/20 blur-[100px]" />
        <div className="absolute top-[30%] left-[20%] w-[30%] h-[40%] rounded-full bg-violet-900/30 blur-[80px]" />
      </div>
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      
      {/* Create separate keyframes style */}
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.8; }
          }
        `}
      </style>
    </div>
  );
};

export default SpaceBackground;