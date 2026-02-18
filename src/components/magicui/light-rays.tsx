import React from 'react';

interface LightRaysProps {
  className?: string;
  quantity?: number;
  opacity?: number;
}

export function LightRays({
  className = '',
  quantity = 20,
  opacity = 0.3,
}: LightRaysProps) {
  const rays = React.useMemo(() => {
    return Array.from({ length: quantity }, (_, i) => {
      const angle = (360 / quantity) * i;
      const width = Math.random() * 2 + 1;
      const height = Math.random() * 30 + 50;
      const delay = Math.random() * 3;
      const duration = Math.random() * 2 + 3;
      
      return {
        id: i,
        angle,
        width,
        height,
        delay,
        duration,
      };
    });
  }, [quantity]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Central glow point */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
          opacity: opacity * 1.2,
        }}
      />
      
      {/* Light rays */}
      {rays.map((ray) => (
        <div
          key={ray.id}
          className="absolute top-0 left-1/2 origin-top"
          style={{
            width: `${ray.width}px`,
            height: `${ray.height}%`,
            transform: `translateX(-50%) rotate(${ray.angle}deg)`,
            animation: `lightRayPulse ${ray.duration}s ease-in-out infinite`,
            animationDelay: `${ray.delay}s`,
            background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2), transparent)',
            opacity: opacity,
            filter: 'blur(1px)',
            willChange: 'opacity, transform',
          }}
        />
      ))}
    </div>
  );
}
