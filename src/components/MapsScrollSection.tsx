import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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

const MobileSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.offsetWidth * 0.75 + 16; // card width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, images.length - 1));
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-background py-14 px-0 overflow-hidden">
      <div className="px-4 mb-6">
        <h2 className="font-display text-3xl sm:text-4xl uppercase text-foreground mb-4 text-center">
          asta văd clienții tăi <span className="text-brand">acum.</span>
        </h2>
        <motion.p
          className="text-base text-muted-foreground max-w-2xl mx-auto px-2 text-center"
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.2 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          în fiecare oraș, în fiecare nișă - numai{" "}
          <span className="text-brand font-bold">3 rezultate</span> contează.
        </motion.p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 py-8 pb-10 scrollbar-hide"
        style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((src, i) => {
          // Map index to size index: 4th card (i=3) same as 1st (i=0), 5th (i=4) same as 3rd (i=2)
          const sizeIndex = (i === 0 || i === 3 || i === 6) ? 0 : (i >= 3 ? i - 3 : i);
          const scale = 1 - sizeIndex * 0.04;
          const rotation = (i % 2 === 0 ? 1 : -1) * (i * 2);
          return (
            <motion.div
              key={i}
              className="snap-center shrink-0 rounded-2xl overflow-hidden border border-border"
              style={{
                width: `${75 - sizeIndex * 3}vw`,
                maxWidth: `${300 - sizeIndex * 15}px`,
              }}
              initial={{ opacity: 0, scale: 0.7, rotate: rotation * 2 }}
              whileInView={{ opacity: 1, scale, rotate: rotation }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            >
              <img
                src={src}
                alt={`Google Maps rezultat ${i + 1}`}
                className="w-full aspect-[9/17] object-cover object-top"
                loading="lazy"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'bg-brand w-6' : 'bg-foreground/20'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

const DesktopCarousel: React.FC = () => {
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

  const getCardStyle = (i: number) => {
    const rotation = (i - 3) * 3;
    const offsetY = i * 12;
    const offsetX = (i - 3) * 8;
    return {
      zIndex: images.length - i,
      transform: `translateY(${offsetY}px) translateX(${offsetX}px) rotate(${rotation}deg)`,
      transformOrigin: 'bottom center',
    };
  };

  return (
    <>
      <section className="bg-background py-28 text-center px-6">
        <h2 className="font-display text-4xl md:text-6xl uppercase text-foreground mb-4">
          asta văd clienții tăi <span className="text-brand">acum.</span>
        </h2>
        <motion.p
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.2 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          în fiecare oraș, în fiecare nișă - numai{" "}
          <span className="text-brand font-bold">3 rezultate</span> contează.
        </motion.p>
      </section>
      <section
        ref={sectionRef}
        className="relative h-screen w-full bg-background overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[280px] md:w-[320px] aspect-[9/19]">
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
    </>
  );
};

const MapsScrollSection: React.FC = () => {
  return (
    <>
      <div className="block md:hidden">
        <MobileSlider />
      </div>
      <div className="hidden md:block">
        <DesktopCarousel />
      </div>
    </>
  );
};

export default MapsScrollSection;
