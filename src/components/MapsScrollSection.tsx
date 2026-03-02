import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import maps1 from '@/assets/maps-1.jpeg';
import maps2 from '@/assets/maps-2.jpeg';
import maps3 from '@/assets/maps-3.jpeg';
import maps4 from '@/assets/maps-4.jpeg';
import maps5 from '@/assets/maps-5.jpeg';
import maps6 from '@/assets/maps-6.jpeg';
import maps7 from '@/assets/maps-7.jpeg';

gsap.registerPlugin(ScrollTrigger);

const images = [maps1, maps2, maps3, maps4, maps5, maps6, maps7];

const MapsScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = stackRef.current?.children;
      if (!cards) return;

      const cardArray = Array.from(cards) as HTMLElement[];
      const totalCards = cardArray.length;

      // Pin the entire stack container
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${totalCards * 600}`,
        pin: true,
        pinSpacing: true,
      });

      // Each card (except last) fades/slides up on scroll
      cardArray.forEach((card, i) => {
        if (i === totalCards - 1) return; // last card stays

        gsap.to(card, {
          yPercent: -120,
          opacity: 0,
          scale: 0.9,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `${i * 600} top`,
            end: `${i * 600 + 500} top`,
            scrub: 0.5,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-background overflow-hidden"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="font-display text-3xl md:text-5xl uppercase text-muted-foreground mb-8 text-center px-6 relative z-0">
          asta văd clienții tăi <span className="text-brand">acum.</span>
        </h2>
        <div ref={stackRef} className="relative w-[300px] sm:w-[340px] md:w-[380px] aspect-[9/19]">
          {/* Render in reverse so first image is on top */}
          {[...images].reverse().map((src, reverseIdx) => {
            const i = images.length - 1 - reverseIdx;
            return (
              <div
                key={i}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border"
                style={{
                  zIndex: images.length - i,
                  transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (0.5 + i * 0.3)}deg)`,
                }}
              >
                <img
                  src={src}
                  alt={`Google Maps rezultat ${i + 1}`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MapsScrollSection;
