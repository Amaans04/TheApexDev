import { useEffect, useRef } from "react";
import { getRandomInt, getRandomFloat } from "@/lib/utils";

interface ParticlesBackgroundProps {
  count?: number;
}

export function ParticlesBackground({ count = 50 }: ParticlesBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const colors = ["#5e3f94", "#8a5cf7", "#f087b3"];
    const particles = [];

    // Clear container
    container.innerHTML = "";

    // Create particles
    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      
      // Random size between 2px and 6px
      const size = getRandomFloat(2, 6);
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Position randomly within the container
      particle.style.left = `${getRandomInt(0, 100)}%`;
      particle.style.top = `${getRandomInt(0, 100)}%`;
      
      // Random opacity
      const opacity = getRandomFloat(0.1, 0.5);
      
      // Use gradient colors
      const color = colors[getRandomInt(0, colors.length - 1)];
      
      particle.style.backgroundColor = color;
      particle.style.opacity = opacity.toString();
      
      // Animation properties
      const duration = getRandomFloat(10, 20); // seconds
      const delay = getRandomFloat(0, 5); // seconds
      
      // Random movement
      const randomX = getRandomInt(-30, 30);
      const randomY = getRandomInt(-30, 30);
      
      particle.style.setProperty('--random-x', randomX.toString());
      particle.style.setProperty('--random-y', randomY.toString());
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;
      
      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, [count]);

  return (
    <div 
      ref={containerRef} 
      className="absolute top-0 left-0 w-full h-full overflow-hidden z-0" 
      aria-hidden="true"
    />
  );
}

export default ParticlesBackground;
