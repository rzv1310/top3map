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
    const scrollPerCard = 700;
    const totalScroll = totalCards * scrollPerCard;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${totalScroll}`,
          pin: true,
          pinSpacing: true,
          pinReparent: false,
          scrub: 0.3,
        },
      });

      cards.forEach((card, i) => {
        if (i === totalCards - 1) return;

        // Dead zone hold, then dramatic exit
        tl.to(card, { duration: 0.3 }, i * 1);
        tl.to(card, {
          yPercent: -150,
          rotation: (i % 2 === 0 ? -1 : 1) * 15,
          opacity: 0,
          scale: 0.7,
          duration: 0.7,
          ease: 'power3.inOut',
        }, i * 1 + 0.3);
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // Fan offsets: each card peeks out below + rotated like held cards
  const getCardStyle = (i: number) => {
    const rotation = (i - 3) * 3; // spread from -9 to +9 degrees
    const offsetY = i * 12; // each card 12px lower
    const offsetX = (i - 3) * 8; // slight horizontal spread
    return {
      zIndex: images.length - i,
      transform: `translateY(${offsetY}px) translateX(${offsetX}px) rotate(${rotation}deg)`,
      transformOrigin: 'bottom center',
    };
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-background overflow-hidden"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="font-display text-3xl md:text-5xl uppercase text-muted-foreground mb-12 text-center px-6 relative z-0">
          asta văd clienții tăi <span className="text-brand">acum.</span>
        </h2>
        <div className="relative w-[240px] sm:w-[280px] md:w-[320px] aspect-[9/19]">
          {images.map((src, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="absolute inset-0 rounded-2xl overflow-hidden border border-border will-change-transform"
              style={{
                ...getCardStyle(i),
                boxShadow: `0 ${4 + i * 2}px ${20 + i * 5}px rgba(255, 30, 0, ${0.05 + i * 0.02})`,
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
