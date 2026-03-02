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
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      if (!cards.length) return;

      // Each card pins and then slides up to reveal next
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return; // last card doesn't need animation

        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          end: '+=400',
          pin: true,
          pinSpacing: true,
          scrub: true,
        });

        gsap.to(card, {
          yPercent: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top top',
            end: '+=400',
            scrub: true,
          },
        });
      });

      // Pin the last card briefly
      ScrollTrigger.create({
        trigger: cards[cards.length - 1],
        start: 'top top',
        end: '+=300',
        pin: true,
        pinSpacing: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-background">
      <div className="text-center py-16 px-6">
        <h2 className="font-display text-4xl md:text-6xl uppercase text-muted-foreground">
          asta văd clienții tăi <span className="text-brand">acum.</span>
        </h2>
      </div>
      {images.map((src, i) => (
        <div
          key={i}
          ref={(el) => { if (el) cardsRef.current[i] = el; }}
          className="h-screen w-full flex items-center justify-center bg-background relative z-10"
          style={{ zIndex: images.length - i }}
        >
          <div
            className="relative w-[320px] sm:w-[360px] md:w-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-border"
            style={{
              transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (1 + i * 0.5)}deg)`,
            }}
          >
            <img
              src={src}
              alt={`Google Maps rezultat ${i + 1}`}
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default MapsScrollSection;
