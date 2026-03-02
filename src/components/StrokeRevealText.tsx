import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

interface StrokeRevealTextProps {
  text: string;
  className?: string;
}

const StrokeRevealText: React.FC<StrokeRevealTextProps> = ({ text, className = "" }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const letters = text.split('');

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {letters.map((letter, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-500 ease-out"
          style={{
            WebkitTextStroke: isInView ? '2px rgba(255, 255, 255, 0.85)' : '1px rgba(255, 255, 255, 0.08)',
            color: 'transparent',
            opacity: isInView ? 1 : 0.2,
            transitionDelay: `${i * 60}ms`,
            filter: isInView ? 'none' : 'blur(2px)',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  );
};

export default StrokeRevealText;
