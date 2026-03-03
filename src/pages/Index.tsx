import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Navigation, Calendar, CheckCircle2, XCircle, AlertTriangle, ShieldCheck, Trophy, Target, ArrowRight, DollarSign, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import MapsScrollSection from '@/components/MapsScrollSection';
import StrokeRevealText from '@/components/StrokeRevealText';

const FadeIn: React.FC<{children: React.ReactNode;delay?: number;className?: string;}> = ({ children, delay = 0, className = "" }) =>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.5, delay }}
  className={className}>
  
    {children}
  </motion.div>;


const Section: React.FC<{children: React.ReactNode;className?: string;id?: string;}> = ({ children, className = "", id = "" }) =>
<section id={id} className={`py-16 md:py-24 lg:py-32 px-4 md:px-6 ${className}`}>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>;

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ nume: '', telefon: '', oras: '', website: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nume.trim() || !form.telefon.trim() || !form.oras.trim()) {
      toast.error('Completează câmpurile obligatorii.');
      return;
    }
    setLoading(true);
    try {
      const formData = new URLSearchParams();
      formData.append('form-name', 'contact');
      formData.append('nume', form.nume);
      formData.append('telefon', form.telefon);
      formData.append('oras', form.oras);
      formData.append('website', form.website);

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });
      toast.success('Mulțumim! Te contactăm în curând.');
      setForm({ nume: '', telefon: '', oras: '', website: '' });
    } catch {
      toast.error('Eroare la trimitere. Încearcă din nou.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
      <input type="hidden" name="form-name" value="contact" />
      <FadeIn delay={0.1}>
        <Input
          name="nume"
          placeholder="Nume *"
          value={form.nume}
          onChange={e => setForm(f => ({ ...f, nume: e.target.value }))}
          className="bg-card border-border text-foreground placeholder:text-muted-foreground h-14 text-lg"
        />
      </FadeIn>
      <FadeIn delay={0.15}>
        <Input
          name="telefon"
          placeholder="Telefon *"
          type="tel"
          value={form.telefon}
          onChange={e => setForm(f => ({ ...f, telefon: e.target.value }))}
          className="bg-card border-border text-foreground placeholder:text-muted-foreground h-14 text-lg"
        />
      </FadeIn>
      <FadeIn delay={0.2}>
        <Input
          name="oras"
          placeholder="Oraș *"
          value={form.oras}
          onChange={e => setForm(f => ({ ...f, oras: e.target.value }))}
          className="bg-card border-border text-foreground placeholder:text-muted-foreground h-14 text-lg"
        />
      </FadeIn>
      <FadeIn delay={0.25}>
        <Input
          name="website"
          placeholder="Website (opțional)"
          value={form.website}
          onChange={e => setForm(f => ({ ...f, website: e.target.value }))}
          className="bg-card border-border text-foreground placeholder:text-muted-foreground h-14 text-lg"
        />
      </FadeIn>
      <FadeIn delay={0.3}>
        <Button
          type="submit"
          disabled={loading}
          className="w-full h-14 text-lg font-bold uppercase bg-brand hover:bg-brand-hover text-primary-foreground tracking-wider"
        >
          {loading ? 'Se trimite...' : 'Trimite'}
          {!loading && <Send className="ml-2 w-5 h-5" />}
        </Button>
      </FadeIn>
    </form>
  );
};


const CtaButton: React.FC<{children: React.ReactNode;className?: string;}> = ({ children, className = "" }) =>
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className={`bg-brand hover:bg-brand-hover text-foreground font-bold uppercase tracking-wider py-5 px-8 md:px-12 text-lg md:text-xl transition-colors flex items-center justify-center gap-3 w-full sm:w-auto ${className}`}>
  
    {children}
    <ArrowRight className="w-6 h-6" />
  </motion.button>;


const HeroMapPack = () =>
<motion.div
  initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
  animate={{ opacity: 1, scale: 1, rotate: 0 }}
  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
  className="relative hidden lg:block">
  
    <div className="bg-card border border-border p-6 rounded-3xl shadow-2xl shadow-primary/20 transform -rotate-2">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
        <MapPin className="text-brand w-8 h-8" />
        <div className="h-4 w-32 bg-foreground/20 rounded-full"></div>
      </div>
      {[1, 2, 3].map((i) =>
    <div key={i} className={`p-4 mb-3 rounded-xl border ${i === 1 ? 'border-primary bg-primary/10' : 'border-border bg-foreground/5'} flex items-start gap-4`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${i === 1 ? 'bg-brand text-foreground' : 'bg-foreground/10 text-foreground/50'}`}>
            {i}
          </div>
          <div className="flex-1">
            <div className={`h-4 w-3/4 rounded-full mb-2 ${i === 1 ? 'bg-foreground' : 'bg-foreground/60'}`}></div>
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => <div key={star} className={`w-3 h-3 ${i === 1 ? 'bg-yellow-400' : 'bg-yellow-400/50'} rounded-sm`}></div>)}
            </div>
            <div className="h-3 w-1/2 bg-foreground/20 rounded-full"></div>
          </div>
        </div>
    )}
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
    className="absolute -bottom-6 -left-10 bg-background text-foreground font-display uppercase px-6 py-4 text-2xl rotate-3 shadow-xl border border-brand">
    
      Primii 3 iau 90% din trafic
    </motion.div>
  </motion.div>;


const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection-brand overflow-x-hidden">
      {/* 1. HERO */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center px-4 md:px-6 pt-16 md:pt-20 pb-10 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-background pointer-events-none"></div>
        <div className="max-w-6xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}>
            
            <h1 className="font-display text-[2.625rem] sm:text-[3.625rem] md:text-[5.75rem] leading-[1.3] uppercase mb-6 md:mb-8">
              dacă nu ești în <span className="text-brand">top 3</span> în google maps,<br />
              <StrokeRevealText text="nu exiști." />
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground font-medium mb-8 md:mb-10 max-w-xl leading-relaxed">
              Atât de simplu.<br className="md:hidden" />
              <span className="block h-4 md:hidden"></span>
              Când cineva caută serviciul tău în oraș, vede doar 3 rezultate.<br className="md:hidden" />{" "}
              <span className="text-foreground font-bold">Restul sunt ignorate.</span>
            </p>
            <CtaButton>vreau să fiu în top 3</CtaButton>
          </motion.div>
          <HeroMapPack />
        </div>
      </section>

      {/* 2. REALITATEA DURĂ */}
      <Section className="bg-secondary border-y border-border">
        <FadeIn>
          <h2 className="font-display text-3xl sm:text-5xl md:text-7xl uppercase mb-4 text-center" style={{ lineHeight: 1.6 }}>
            concurența ta nu e mai bună.<br />
            <span className="text-brand">e doar mai sus.</span>
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-12 md:mt-20 items-center">
          <div className="space-y-6">
            {[
            { icon: Phone, text: "ei primesc apelurile" },
            { icon: Calendar, text: "ei primesc programările" },
            { icon: DollarSign, text: "ei încasează" }].
            map((item, i) =>
            <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-center gap-6 p-6 bg-foreground/5 border border-border hover:bg-foreground/10 transition-colors">
                  <motion.div
                  className="text-brand"
                  initial={{ rotateY: 0 }}
                  whileInView={{ rotateY: 720 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 2, delay: i * 0.15, ease: "easeInOut" }}
                  style={{ perspective: 200 }}>
                  
                    <item.icon className="w-8 h-8" />
                  </motion.div>
                  <span className="font-display text-2xl md:text-4xl uppercase tracking-wide">{item.text}</span>
                </div>
              </FadeIn>
            )}
          </div>
          <FadeIn delay={0.4} className="flex flex-col items-center justify-center text-center">
            <div className="bg-brand inline-block px-8 py-4 mb-8">
              <span className="text-3xl md:text-6xl font-display uppercase text-foreground">în timp ce</span>
            </div>
            <p className="text-xl md:text-4xl font-bold text-muted-foreground">
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
            <h2 className="font-display text-3xl sm:text-5xl md:text-7xl uppercase mb-10 md:mb-16 text-center">
              ai deja site.
            </h2>
            <h2 className="font-display text-3xl sm:text-5xl md:text-7xl uppercase mb-10 md:mb-16 text-center mt-6 md:mt-8" style={{ lineHeight: 1.6 }}>
              dar site-ul tău <StrokeRevealText text="nu domină local." />
            </h2>
          </FadeIn>
          <div className="mt-10 md:mt-16 bg-card border border-border p-5 md:p-12">
            <h3 className="text-xl md:text-2xl font-bold text-brand mb-6 md:mb-8 uppercase tracking-widest">Fără următoarele, ești invizibil:</h3>
            <ul className="space-y-6">
              {[
              "date structurate locale corecte în site",
              "optimizare complexă profil google business",
              "strategie de autoritate geografică",
              "semnale comportamentale reale",
              "sistem predictibil de recenzii"].
              map((item, i) =>
              <FadeIn key={i} delay={i * 0.1} className="flex items-start gap-4">
                  <XCircle className="w-8 h-8 text-destructive shrink-0 mt-1" />
                  <span className="text-base md:text-2xl font-medium text-muted-foreground">{item}</span>
                </FadeIn>
              )}
            </ul>
            <FadeIn delay={0.6} className="mt-12 pt-8 border-t border-border text-center">
              <p className="font-display text-2xl md:text-4xl uppercase">
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
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl uppercase mb-8 md:mb-12 text-background">
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
            <div className="font-display text-5xl md:text-[8rem] leading-none uppercase mb-6 md:mb-8 text-brand">
              TOP 3.
            </div>
            <p className="text-2xl md:text-5xl font-bold uppercase tracking-tight text-background">
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
            <div className="inline-flex items-center justify-center gap-3 md:gap-4 p-4 md:p-6 bg-foreground/5 border border-border rounded-full mb-6 md:mb-8">
              <ShieldCheck className="w-10 h-10 md:w-16 md:h-16 text-brand" />
              <span className="font-display text-2xl md:text-5xl uppercase text-brand font-light md:font-normal">garanție</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-7xl uppercase mb-6 md:mb-8" style={{ lineHeight: 1.5 }}>
              dacă nu ajungi în top 3<br className="md:hidden" />{" "}
              în 90 de zile,<br />
              <span className="text-muted-foreground">continuăm optimizarea</span><br />
              <span className="text-brand">fără costuri suplimentare</span><br />
              <span className="text-muted-foreground">până ajungi.</span>
            </h2>
            <div className="h-1 w-32 bg-brand mx-auto mb-8"></div>
            <p className="text-xl md:text-4xl font-bold uppercase tracking-wide">
              nu plătești pentru promisiuni.<br />
              plătești pentru rezultat.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* 6. PREȚURI */}
      <Section className="bg-secondary border-t border-border">
        <FadeIn>
          <h2 className="font-display text-3xl sm:text-5xl md:text-7xl uppercase text-center mb-10 md:mb-20">
            alege nivelul de <span className="text-brand font-normal">dominare</span>
          </h2>
        </FadeIn>
        <div className="grid lg:grid-cols-3 gap-[150px] md:gap-[50px] max-w-6xl mx-auto items-center">
          {/* Elite */}
          <FadeIn delay={0.1} className="bg-card border border-border p-5 md:p-8 flex flex-col h-full">
            <div className="mb-8">
              <h3 className="font-display text-3xl uppercase text-brand mb-2 font-normal md:font-bold">Elite</h3>
              <p className="text-sm text-muted-foreground font-medium h-10">(pentru control absolut în oraș)</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-display">3500€</span>
              <div className="text-sm text-muted-foreground mt-1">implementare</div>
              <div className="text-sm text-foreground mt-3">+ 300€/lună mentenanță & protecție poziție</div>
              <div className="text-sm text-foreground opacity-70">(opțional · doar după atingere obiectiv: TOP 3)</div>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-brand shrink-0" /> creare website de la zero</li>
              <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-brand shrink-0" /> creare profil Google Business</li>
              <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-brand shrink-0" /> strategie completă map pack</li>
              <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-brand shrink-0" /> optimizare tehnică avansată</li>
              <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-brand shrink-0" /> exclusivitate pe nișă + oraș</li>
              <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-brand shrink-0" /> consultant dedicat 120 h/lună</li>
              <li className="flex items-start gap-3 mt-4 pt-4 border-t border-border font-bold"><Target className="w-5 h-5 text-brand shrink-0" /> <span className="font-normal">GARANȚIE</span> TOP 3 INCLUSĂ</li>
            </ul>
            <button className="w-full py-4 border border-border hover:bg-foreground/5 font-bold uppercase tracking-wider transition-colors">
              Aplică pentru Elite
            </button>
          </FadeIn>

          {/* Accelerator */}
          <FadeIn delay={0.2} className="bg-brand text-foreground p-6 md:p-10 transform lg:scale-110 shadow-2xl shadow-primary/20 relative z-10 flex flex-col h-full mt-4 lg:mt-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background text-foreground px-4 py-1 text-sm font-bold uppercase tracking-widest border border-primary">
              CEL MAI ALES
            </div>
            <div className="mb-8">
              <h3 className="font-display text-4xl uppercase mb-2">Accelerator</h3>
              <p className="text-sm font-bold opacity-80 h-10">(pentru majoritatea afacerilor)</p>
            </div>
            <div className="mb-8">
              <span className="text-6xl font-display">1900€</span>
              <div className="text-sm font-bold mt-1">implementare</div>
              <div className="text-sm mt-3">+ 300€/lună mentenanță & protecție poziție</div>
              <div className="text-sm opacity-90">(opțional · doar după atingere obiectiv: TOP 3)</div>
            </div>
            <ul className="space-y-4 mb-12 flex-1 font-medium">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 shrink-0" /> audit complet</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 shrink-0" /> optimizare site + google business</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 shrink-0" /> strategie autoritate locală</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 shrink-0" /> management recenzii</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 shrink-0" /> exclusivitate pe nișă + oraș</li>
              <li className="flex items-start gap-3 mt-4 pt-4 border-t border-foreground/20 font-bold text-lg"><Target className="w-6 h-6 shrink-0" /> <span className="font-normal">GARANȚIE</span> TOP 3 INCLUSĂ</li>
            </ul>
            <button className="w-full py-5 bg-background text-foreground hover:bg-background/90 font-bold uppercase tracking-wider transition-colors text-lg">
              Vreau Top 3
            </button>
          </FadeIn>

          {/* Starter */}
          <FadeIn delay={0.3} className="bg-card border border-border p-5 md:p-8 flex flex-col h-full">
            <div className="mb-8">
              <h3 className="font-display text-3xl uppercase text-muted-foreground mb-2">Starter</h3>
              <p className="text-sm text-muted-foreground font-medium h-10">(pentru un început strategic)</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-display">900€</span>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-muted-foreground shrink-0" /> audit website + profil google business</li>
              <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-muted-foreground shrink-0" /> optimizare profil google business</li>
              <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-muted-foreground shrink-0" /> roadmap personalizat (îți spunem exact ce trebuie să faci în continuare)</li>
              <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-muted-foreground shrink-0" /> fără abonament lunar</li>
              <li className="flex items-start gap-3 text-destructive/50 mt-4 pt-4 border-t border-border"><XCircle className="w-5 h-5 shrink-0" /> fără garanție top 3</li>
            </ul>
            <button className="w-full py-4 border border-border hover:bg-foreground/5 font-bold uppercase tracking-wider transition-colors">
              Alege Starter
            </button>
          </FadeIn>
        </div>
        <FadeIn delay={0.5} className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-4xl font-display text-muted-foreground uppercase" style={{ lineHeight: 1.5 }}>
            indiferent dacă un client îți aduce<br className="md:hidden" />{" "}
            100€ sau 4.000€,<br className="md:hidden" />
            <span className="block h-4 md:hidden"></span>
            nu valoarea unui client este problema.<br />
            <span className="block h-4"></span>
            <span className="text-foreground">problema este câți pleacă la concurență<br className="md:hidden" />{" "}… în fiecare lună.</span>
          </p>
        </FadeIn>
      </Section>

      {/* 7. FILTRU */}
      <Section className="bg-foreground text-background py-16">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <AlertTriangle className="w-12 h-12 md:w-16 md:h-16 text-brand mb-4 md:mb-6" />
          <h2 className="font-display text-3xl md:text-5xl uppercase mb-4 md:mb-6">
            nu lucrăm cu oricine.
          </h2>
          <p className="text-lg md:text-2xl font-bold max-w-2xl mx-auto mb-3 md:mb-4">
            Nu optimizăm 2 competitori direcți în același oraș.
          </p>
          <p className="text-base md:text-lg text-background/60 font-medium uppercase tracking-wider">
            verificăm eligibilitatea serviciului în orașul tău înainte de colaborare.
          </p>
        </div>
      </Section>

      {/* Contact Form */}
      <Section className="bg-background border-t border-border" id="contact">
        <FadeIn>
          <h2 className="font-display text-3xl sm:text-5xl md:text-7xl uppercase text-center mb-4">
            VREAU <span className="text-brand">ANALIZA</span> GRATUITĂ
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Completează formularul și te contactăm imediat.
          </p>
        </FadeIn>
        <ContactForm />
      </Section>

      {/* 8. FAQ */}
      <Section className="bg-secondary border-t border-border">
        <FadeIn>
          <h2 className="font-display text-3xl sm:text-5xl md:text-7xl uppercase text-center mb-10 md:mb-16">
            Întrebări <span className="text-brand">frecvente</span> ale clienților sceptici
          </h2>
        </FadeIn>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: "În cât timp ajung în top 3?", a: "Depinde de competiție, de obicei în 60 de zile, dar dacă depășim 90 de zile - lucrăm gratis până la rezultat, conform garanției." },
            { q: "Cum puteți garanta top 3?", a: "Garantăm atingerea poziției top 3 în piețele pe care le validăm ca eligibile.\n\nLucrăm doar în orașe și nișe unde analiza inițială arată că există spațiu real de creștere.\n\nNu acceptăm colaborări unde competiția sau istoricul profilului fac obiectivul nerealist.\n\nÎnainte de a începe, facem o analiză completă a:\n• competiției locale\n• autorității actuale\n• istoricului profilului\n• volumului de căutări\n• nivelului de optimizare existent.\n\nDacă analiza arată că obiectivul este realist, acceptăm colaborarea și oferim garanția." },
            { q: "Am mai lucrat cu o agenție și nu a funcționat. Care este diferența?", a: "Majoritatea agențiilor fac SEO la modul general.\n\nNoi lucrăm exclusiv pentru harta Google și poziționare locală strategică, cu obiectiv unic: top 3." },
            { q: "Ce se întâmplă dacă Google schimbă algoritmul?", a: "Monitorizăm constant pozițiile și ajustăm strategia.\n\nMentenanța există tocmai pentru adaptare continuă la schimbările algoritmice sau ale concurenței." },
            { q: "Dacă ajung în top 3, primesc garantat clienți?", a: "Top 3 îți oferă vizibilitate maximă.\n\nNumărul exact de clienți depinde de cererea din piață și de rata ta de conversie.\n\nÎnainte de a începe colaborarea, îți vom spune câți oameni din orașul tău caută lunar serviciul prestat de tine." },
            { q: "Cât trebuie să mă implic?", a: "Minim.\n\nVom avea o conversație telefonică de 30 min în care îți spunem ce avem nevoie de la tine - acces, poze, echipă, adresă etc. și anumite validări punctuale.\n\nRestul implementării este gestionat integral de noi." },
            { q: "Există obligații pe termen lung?", a: "Implementarea va avea un termen clar și scurt, stabilit la primul telefon.\n\nMentenanța este lunară și poate fi ajustată în funcție de rezultate." },
            { q: "Ce se întâmplă dacă deja sunt pe locul 4 sau 5?", a: "Cu atât mai bine.\n\nIntervenția este mai rapidă și necesită mai puține ajustări strategice.\n\nÎn harta Google sunt vizibili doar primii 3 - aproape nimeni nu dă click pe 'vezi mai multe locații', deci probabil că nu ai multe telefoane dacă ești pe locul 4.\n\nVei simți impact pozitiv!" },
            { q: "Lucrați cu concurența mea?", a: "Nu optimizăm 2 competitori direcți în același oraș.\n\nExclusivitatea locală este parte din strategia și din garanția noastră." },
            { q: "Pot pierde poziția dacă opresc mentenanța?", a: "Da, în piețe competitive poziția poate fluctua fără protecție și fără ajustări continue." },
            { q: "De ce nu este mai ieftin?", a: "Pentru că nu vindem trafic sau promisiuni.\n\nVindem poziționare strategică într-un spațiu limitat la doar 3 locuri." },
            { q: "De ce să plătesc atât când pot face singur?", a: "Nu credem că poți face și singur.\n\nOferta din această pagină este, probabil, unică în România.\n\nÎntrebarea este cât te costă timpul de testare, greșelile și anii pierduți până la rezultat.\n\nPoziționarea în top 3 nu ține doar de setări vizibile, ci de structură tehnică, corelări strategice și semnale comportamentale care necesită experiență și execuție precisă." },
            { q: "Aveți rezultate dovedite? Studii de caz?", a: "Da.\n\nÎnainte de colaborare prezentăm exemple relevante din piețe similare.\n\nÎnsă mai important decât un studiu de caz este analiza orașului tău - fiecare piață este diferită, iar decizia se bazează pe datele concrete din zona ta." },
            { q: "Funcționează și pentru nișa mea?", a: "Mecanismul map pack este același indiferent de industrie.\n\nDiferența este nivelul de competiție și structura pieței locale.\n\nÎnainte de a accepta colaborarea, analizăm exact nișa și orașul tău pentru a valida eligibilitatea." },
            { q: "Recenziile negative mă pot afecta chiar și în top 3?", a: "Da, recenziile influențează conversia și poziționarea.\n\nDe aceea, strategia include structurarea și optimizarea reputației online.\n\nNu doar numărul de recenzii contează, ci distribuția, frecvența și răspunsurile.\n\nTop 3 îți aduce vizibilitate - reputația îți aduce conversie." },
            { q: "Am deja clienți suficienți. De ce aș mai investi?", a: "Dacă ai deja clienți, întrebarea este: vrei stabilitate sau vrei control?\n\nPoziția în top 3 nu înseamnă doar mai mulți clienți, ci protecție împotriva concurenței și predictibilitate pe termen lung.\n\nPiețele locale devin mai competitive în fiecare an." },
          ].map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <details className="group bg-card border border-border p-6 cursor-pointer">
                <summary className="text-lg md:text-2xl font-medium list-none flex items-center justify-between gap-3 md:gap-4">
                  <h3 className="text-left font-medium text-lg md:text-2xl">{faq.q}</h3>
                  <span className="text-brand text-3xl font-bold transition-transform group-open:rotate-45 shrink-0">+</span>
                </summary>
                <div className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed space-y-3 md:space-y-4">
                  {faq.a.split('\n\n').map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>
              </details>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* 9. CTA FINAL */}
      <Section className="bg-background min-h-[70vh] flex flex-col justify-center items-center text-center">
        <FadeIn>
           <h2 className="font-display text-4xl sm:text-6xl md:text-[8rem] uppercase mb-8 md:mb-12" style={{ lineHeight: 1.9 }}>
             există doar <span className="text-brand">3 locuri.</span><br />
             <StrokeRevealText text="unul poate fi al tău." />
           </h2>
          <div className="flex justify-center">
            <CtaButton className="text-xl md:text-2xl py-6 px-10">
              verifică dacă orașul tău este disponibil
            </CtaButton>
          </div>
        </FadeIn>
      </Section>
    </div>);

};

export default Index;