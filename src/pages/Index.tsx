import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Navigation, Calendar, CheckCircle2, XCircle, AlertTriangle, ShieldCheck, Trophy, Target, ArrowRight, DollarSign } from 'lucide-react';
import MapsScrollSection from '@/components/MapsScrollSection';
import StrokeRevealText from '@/components/StrokeRevealText';

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id = "" }) => (
  <section id={id} className={`py-24 md:py-32 px-6 ${className}`}>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

const CtaButton: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`bg-brand hover:bg-brand-hover text-foreground font-bold uppercase tracking-wider py-5 px-8 md:px-12 text-lg md:text-xl transition-colors flex items-center justify-center gap-3 w-full sm:w-auto ${className}`}
  >
    {children}
    <ArrowRight className="w-6 h-6" />
  </motion.button>
);

const HeroMapPack = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    className="relative hidden lg:block"
  >
    <div className="bg-card border border-border p-6 rounded-3xl shadow-2xl shadow-primary/20 transform -rotate-2">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
        <MapPin className="text-brand w-8 h-8" />
        <div className="h-4 w-32 bg-foreground/20 rounded-full"></div>
      </div>
      {[1, 2, 3].map((i) => (
        <div key={i} className={`p-4 mb-3 rounded-xl border ${i === 1 ? 'border-primary bg-primary/10' : 'border-border bg-foreground/5'} flex items-start gap-4`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${i === 1 ? 'bg-brand text-foreground' : 'bg-foreground/10 text-foreground/50'}`}>
            {i}
          </div>
          <div className="flex-1">
            <div className={`h-4 w-3/4 rounded-full mb-2 ${i === 1 ? 'bg-foreground' : 'bg-foreground/60'}`}></div>
            <div className="flex gap-1 mb-2">
              {[1,2,3,4,5].map(star => <div key={star} className={`w-3 h-3 ${i===1 ? 'bg-yellow-400' : 'bg-yellow-400/50'} rounded-sm`}></div>)}
            </div>
            <div className="h-3 w-1/2 bg-foreground/20 rounded-full"></div>
          </div>
        </div>
      ))}
      <div className="mt-4 pt-4 border-t border-border opacity-30 blur-[2px]">
        <div className="p-4 rounded-xl border border-border bg-foreground/5 flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center">4</div>
          <div className="flex-1">
            <div className="h-4 w-2/3 bg-foreground/40 rounded-full mb-2"></div>
            <div className="h-3 w-1/3 bg-foreground/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      className="absolute -bottom-6 -left-10 bg-brand text-foreground font-display uppercase px-6 py-4 text-2xl rotate-3 shadow-xl"
    >
      Primii 3 iau 90% din trafic
    </motion.div>
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection-brand overflow-x-hidden">
      {/* 1. HERO */}
      <section className="relative min-h-[90vh] flex items-center px-6 pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-background pointer-events-none"></div>
        <div className="max-w-6xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="font-display text-6xl sm:text-7xl md:text-[6rem] leading-[1.1] uppercase mb-8">
              dacă nu ești în <span className="text-brand">top 3</span> în google maps,<br/>
              <StrokeRevealText text="nu exiști." />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-10 max-w-xl leading-relaxed">
              atât de simplu.<br/>
              când cineva caută serviciul tău în oraș, vede doar 3 rezultate.<br/>
              <span className="text-foreground font-bold">restul sunt ignorate.</span>
            </p>
            <CtaButton>vreau să fiu în top 3</CtaButton>
          </motion.div>
          <HeroMapPack />
        </div>
      </section>

      {/* 2. REALITATEA DURĂ */}
      <Section className="bg-secondary border-y border-border">
        <FadeIn>
          <h2 className="font-display text-5xl md:text-7xl uppercase mb-4 text-center">
            concurența ta nu e mai bună.<br/>
            <span className="text-brand">e doar mai sus.</span>
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-16 mt-20 items-center">
          <div className="space-y-6">
            {[
              { icon: Phone, text: "ei primesc apelurile" },
              { icon: Calendar, text: "ei primesc programările" },
              { icon: DollarSign, text: "ei încasează" }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-center gap-6 p-6 bg-foreground/5 border border-border hover:bg-foreground/10 transition-colors">
                  <motion.div
                    className="text-brand"
                    initial={{ rotateY: 0 }}
                    whileInView={{ rotateY: 720 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 2, delay: i * 0.15, ease: "easeInOut" }}
                    style={{ perspective: 200 }}
                  >
                    <item.icon className="w-8 h-8" />
                  </motion.div>
                  <span className="font-display text-3xl md:text-4xl uppercase tracking-wide">{item.text}</span>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4} className="flex flex-col items-center justify-center text-center">
            <div className="bg-brand inline-block px-8 py-4 mb-8">
              <span className="text-4xl md:text-6xl font-display uppercase text-foreground">în timp ce</span>
            </div>
            <p className="text-2xl md:text-4xl font-bold text-muted-foreground">
              tu finanțezi poziția lor prin <span className="text-foreground underline decoration-primary decoration-4 underline-offset-8">inacțiune.</span>
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* MAPS SCROLL SECTION */}
      <MapsScrollSection />

      {/* 3. PROBLEMA TA NU ESTE SITE-UL */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-5xl md:text-7xl uppercase mb-16 text-center">
              ai deja site.
            </h2>
            <h2 className="font-display text-5xl md:text-7xl uppercase mb-16 text-center mt-8">
              dar site-ul tău <StrokeRevealText text="nu domină local." />
            </h2>
          </FadeIn>
          <div className="mt-16 bg-card border border-border p-8 md:p-12">
            <h3 className="text-2xl font-bold text-brand mb-8 uppercase tracking-widest">Fără următoarele, ești invizibil:</h3>
            <ul className="space-y-6">
              {[
                "structură locală corectă pe site",
                "optimizare tehnică map pack",
                "strategie de autoritate geografică",
                "semnale comportamentale reale",
                "sistem predictibil de recenzii"
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} className="flex items-start gap-4">
                  <XCircle className="w-8 h-8 text-destructive shrink-0 mt-1" />
                  <span className="text-xl md:text-2xl font-medium text-muted-foreground">{item}</span>
                </FadeIn>
              ))}
            </ul>
            <FadeIn delay={0.6} className="mt-12 pt-8 border-t border-border text-center">
              <p className="font-display text-4xl uppercase">
                fără ele, <span className="text-muted-foreground">nu vei intra în top 3.</span>
              </p>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* 4. NOI FACEM UN SINGUR LUCRU */}
      <Section className="bg-foreground">
        <div className="text-center max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-6xl md:text-8xl uppercase mb-12 text-background">
              noi facem un singur lucru.
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            <FadeIn delay={0.1} className="p-6 border-2 border-background/20 font-bold text-xl uppercase line-through opacity-50 text-background/50">
              nu branding.
            </FadeIn>
            <FadeIn delay={0.2} className="p-6 border-2 border-background/20 font-bold text-xl uppercase line-through opacity-50 text-background/50">
              nu "vizibilitate".
            </FadeIn>
            <FadeIn delay={0.3} className="p-6 border-2 border-background/20 font-bold text-xl uppercase line-through opacity-50 text-background/50">
              nu trafic general.
            </FadeIn>
          </div>
          <FadeIn delay={0.5}>
            <div className="font-display text-7xl md:text-[8rem] leading-none uppercase mb-8 text-brand">
              TOP 3.
            </div>
            <p className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-background">
              și garantăm asta.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* 5. GARANȚIA */}
      <Section className="bg-background relative overflow-hidden">
        <ShieldCheck className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-foreground/[0.02] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center justify-center gap-4 p-6 bg-foreground/5 border border-border rounded-full mb-8">
              <ShieldCheck className="w-16 h-16 text-brand" />
              <span className="font-display text-4xl md:text-5xl uppercase text-brand">garanție</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl uppercase mb-8">
              dacă nu ajungi în top 3 în 90 de zile,<br/>
              <span className="text-muted-foreground">continuăm optimizarea</span><br/>
              <span className="text-brand">fără costuri suplimentare</span><br/>
              <span className="text-muted-foreground">până ajungi.</span>
            </h2>
            <div className="h-1 w-32 bg-brand mx-auto mb-8"></div>
            <p className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
              nu plătești pentru promisiuni.<br/>
              plătești pentru rezultat.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* 6. PREȚURI */}
      <Section className="bg-secondary border-t border-border">
        <FadeIn>
          <h2 className="font-display text-5xl md:text-7xl uppercase text-center mb-20">
            alege nivelul de <span className="text-brand">dominare</span>
          </h2>
        </FadeIn>
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {/* Elite */}
          <FadeIn delay={0.1} className="bg-card border border-border p-8 flex flex-col h-full">
            <div className="mb-8">
              <h3 className="font-display text-3xl uppercase text-brand mb-2">Elite</h3>
              <p className="text-sm text-muted-foreground font-medium h-10">(pentru control absolut în oraș)</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-display">3500€</span>
              <div className="text-sm text-muted-foreground mt-1">+ 300€/lună mentenanță & protecție poziție</div>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-brand shrink-0" /> creare website de la zero</li>
              <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-brand shrink-0" /> creare profil Google Business</li>
              <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-brand shrink-0" /> strategie completă map pack</li>
              <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-brand shrink-0" /> optimizare tehnică avansată</li>
              <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-brand shrink-0" /> exclusivitate pe oraș</li>
              <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-brand shrink-0" /> consultant dedicat 120 h/lună</li>
              <li className="flex items-start gap-3 mt-4 pt-4 border-t border-border font-bold"><Target className="w-5 h-5 text-brand shrink-0" /> GARANȚIE TOP 3 INCLUSĂ</li>
            </ul>
            <button className="w-full py-4 border border-border hover:bg-foreground/5 font-bold uppercase tracking-wider transition-colors">
              Aplică pentru Elite
            </button>
          </FadeIn>

          {/* Accelerator */}
          <FadeIn delay={0.2} className="bg-brand text-foreground p-10 transform lg:scale-110 shadow-2xl shadow-primary/20 relative z-10 flex flex-col h-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background text-foreground px-4 py-1 text-sm font-bold uppercase tracking-widest border border-primary">
              CEL MAI ALES
            </div>
            <div className="mb-8">
              <h3 className="font-display text-4xl uppercase mb-2">Accelerator</h3>
              <p className="text-sm font-bold opacity-80 h-10">(pentru majoritatea afacerilor)</p>
            </div>
            <div className="mb-8">
              <span className="text-6xl font-display">1900€</span>
              <div className="text-sm font-bold mt-1">+ 300€/lună mentenanță & protecție poziție</div>
            </div>
            <ul className="space-y-4 mb-12 flex-1 font-medium">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 shrink-0" /> audit complet</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 shrink-0" /> optimizare site + google business</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 shrink-0" /> strategie autoritate locală</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 shrink-0" /> monitorizare poziții</li>
              <li className="flex items-start gap-3 mt-4 pt-4 border-t border-foreground/20 font-bold text-lg"><Target className="w-6 h-6 shrink-0" /> GARANȚIE TOP 3 INCLUSĂ</li>
            </ul>
            <button className="w-full py-5 bg-background text-foreground hover:bg-background/90 font-bold uppercase tracking-wider transition-colors text-lg">
              Vreau Top 3
            </button>
          </FadeIn>

          {/* Starter */}
          <FadeIn delay={0.3} className="bg-card border border-border p-8 flex flex-col h-full">
            <div className="mb-8">
              <h3 className="font-display text-3xl uppercase text-muted-foreground mb-2">Starter</h3>
              <p className="text-sm text-muted-foreground font-medium h-10">(pentru un început strategic)</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-display">900€</span>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-muted-foreground shrink-0" /> audit complet</li>
              <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-muted-foreground shrink-0" /> optimizări esențiale google business</li>
              <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-muted-foreground shrink-0" /> roadmap personalizat (îți spunem ce ai de făcut în continuare și faci singur)</li>
              <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-muted-foreground shrink-0" /> fără abonament lunar</li>
              <li className="flex items-start gap-3 text-destructive/50 mt-4 pt-4 border-t border-border"><XCircle className="w-5 h-5 shrink-0" /> fără garanție top 3</li>
            </ul>
            <button className="w-full py-4 border border-border hover:bg-foreground/5 font-bold uppercase tracking-wider transition-colors">
              Alege Starter
            </button>
          </FadeIn>
        </div>
        <FadeIn delay={0.5} className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-2xl md:text-4xl font-display text-muted-foreground uppercase leading-tight">
            indiferent dacă un client îți aduce 100€ sau 4.000€,<br/>
            nu valoarea unui client este problema.<br/>
            <span className="text-foreground mt-[5px] inline-block">problema este câți pleacă la concurență… în fiecare lună.</span>
          </p>
        </FadeIn>
      </Section>

      {/* 7. FILTRU */}
      <Section className="bg-foreground text-background py-16">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <AlertTriangle className="w-16 h-16 text-brand mb-6" />
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">
            nu lucrăm cu oricine.
          </h2>
          <p className="text-xl md:text-2xl font-bold max-w-2xl mx-auto mb-4">
            Nu optimizăm 2 competitori direcți în același oraș.
          </p>
          <p className="text-lg text-background/60 font-medium uppercase tracking-wider">
            verificăm eligibilitatea serviciului în orașul tău înainte de colaborare.
          </p>
        </div>
      </Section>

      {/* 8. CTA FINAL */}
      <Section className="bg-background min-h-[70vh] flex flex-col justify-center items-center text-center">
        <FadeIn>
           <h2 className="font-display text-6xl md:text-[8rem] uppercase mb-12" style={{ lineHeight: 1.3 }}>
             există doar <span className="text-brand">3 locuri.</span><br/>
             <StrokeRevealText text="unul poate fi al tău." />
           </h2>
          <div className="flex justify-center">
            <CtaButton className="text-xl md:text-2xl py-6 px-10">
              verifică dacă orașul tău este disponibil
            </CtaButton>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
};

export default Index;
