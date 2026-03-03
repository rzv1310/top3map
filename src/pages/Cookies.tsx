import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection-brand">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 text-sm">
          <ArrowLeft className="w-4 h-4" /> Înapoi la pagina principală
        </Link>

        <h1 className="font-display text-3xl md:text-5xl uppercase mb-10">Politica de Cookies</h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed text-[15px]">
          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">1. Ce sunt cookie-urile?</h2>
            <p>Cookie-urile sunt fișiere text mici care sunt plasate pe computerul sau dispozitivul dumneavoastră mobil atunci când vizitați un site web. Cookie-urile sunt utilizate pe scară largă pentru a face site-urile web să funcționeze mai eficient și pentru a furniza informații proprietarilor site-ului.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">2. Cookie-urile pe care le utilizăm</h2>
            <p>Site-ul nostru utilizează următoarele tipuri de cookie-uri:</p>
            
            <h3 className="text-foreground font-semibold mt-4 mb-2">Cookie-uri esențiale</h3>
            <p>Aceste cookie-uri sunt necesare pentru funcționarea site-ului nostru. Includ cookie-uri care vă permit să vă conectați în zonele securizate ale site-ului nostru sau să utilizați coșul de cumpărături.</p>

            <h3 className="text-foreground font-semibold mt-4 mb-2">Cookie-uri de la terți</h3>
            <ul className="mt-2 space-y-3">
              <li><strong className="text-foreground">Stripe</strong> – pentru procesarea securizată a plăților. Stripe utilizează cookie-uri pentru a preveni fraudele și pentru a asigura securitatea tranzacțiilor.</li>
              <li><strong className="text-foreground">Google Analytics</strong> – pentru a înțelege cum utilizatorii interacționează cu site-ul nostru. Aceste cookie-uri colectează informații în mod anonim.</li>
              <li><strong className="text-foreground">Google Ads</strong> – pentru măsurarea conversiilor din campaniile publicitare și remarketing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">3. Utilizarea cookie-urilor de publicitate</h2>
            <p>Utilizăm Google Ads ca unic serviciu de publicitate pentru a măsura eficiența campaniilor noastre și pentru remarketing. Nu vindem și nu partajăm datele dumneavoastră cu alte companii. În afara serviciilor menționate mai sus, nu utilizăm niciun alt cookie de la terți.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">4. Gestionarea cookie-urilor</h2>
            <p>Majoritatea browser-elor web vă permit să controlați cookie-urile prin setările lor. Rețineți că:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Dacă dezactivați cookie-urile esențiale, este posibil să nu puteți utiliza anumite funcții ale site-ului.</li>
              <li>Dacă dezactivați cookie-urile Stripe, nu veți putea efectua plăți pe site.</li>
              <li>Dacă dezactivați cookie-urile Google Analytics, nu vom putea îmbunătăți experiența dumneavoastră.</li>
              <li>Dacă dezactivați cookie-urile Google Ads, reclamele nu vor fi personalizate.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">5. Mai multe informații</h2>
            <p>Pentru mai multe informații despre cookie-uri: <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">www.allaboutcookies.org</a></p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">6. Contactați-ne</h2>
            <p>Dacă aveți întrebări despre utilizarea cookie-urilor pe site-ul nostru:</p>
            <p className="mt-2">Telefon: <a href="https://wa.me/40742702982" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">+40 742 702 982</a></p>
          </section>

          <section className="pt-4 border-t border-border">
            <p>Vezi și:</p>
            <ul className="mt-2 space-y-2">
              <li><Link to="/termeni" className="text-brand hover:underline">Termeni și Condiții</Link></li>
              <li><Link to="/gdpr" className="text-brand hover:underline">GDPR - Protecția Datelor</Link></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
