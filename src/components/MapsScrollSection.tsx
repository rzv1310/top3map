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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    const totalCards = cards.length;
    const scrollPerCard = 600;
    const totalScroll = totalCards * scrollPerCard;

    const ctx = gsap.context(() => {
      // Create one big timeline scrubbed by scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${totalScroll}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.3,
        },
      });

      // Each card (except last) slides up and fades out
      cards.forEach((card, i) => {
        if (i === totalCards - 1) return;

        // Dead zone: hold for a bit, then animate out
        tl.to(card, { duration: 0.3 }, i * 1); // dead zone placeholder
        tl.to(card, {
          yPercent: -120,
          opacity: 0,
          scale: 0.95,
          duration: 0.7,
          ease: 'power2.inOut',
        }, i * 1 + 0.3);
      });
    }, section);

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
        <div className="relative w-[300px] sm:w-[340px] md:w-[380px] aspect-[9/19]">
          {images.map((src, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border will-change-transform"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapsScrollSection;
