import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export function FadeIn({ children, delay = 0, className = '', direction = 'up' }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 20 };
      case 'down': return { opacity: 0, y: -20 };
      case 'left': return { opacity: 0, x: 20 };
      case 'right': return { opacity: 0, x: -20 };
      default: return { opacity: 0 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case 'up': 
      case 'down': return { opacity: 1, y: 0 };
      case 'left': 
      case 'right': return { opacity: 1, x: 0 };
      default: return { opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? getAnimate() : getInitial()}
      transition={{ duration: 0.6, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
