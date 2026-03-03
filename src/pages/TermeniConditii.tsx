import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermeniConditii = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection-brand">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 text-sm">
          <ArrowLeft className="w-4 h-4" /> Înapoi la pagina principală
        </Link>

        <h1 className="font-display text-3xl md:text-5xl uppercase mb-10">Termeni și Condiții</h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed text-[15px]">
          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">1. Introducere</h2>
            <p>Bine ați venit la SEO Doctor. Acești Termeni și Condiții guvernează utilizarea de către dumneavoastră a serviciului nostru, operat de SEO Doctor SRL, Cod Unic de Înregistrare 49345207, cu sediul în Str. Campia Libertății 33, sector 3, București.</p>
            <p className="mt-2">Prin accesarea sau utilizarea Serviciului, sunteți de acord să respectați acești Termeni. Dacă nu sunteți de acord cu vreo parte a termenilor, atunci nu aveți permisiunea de a accesa Serviciul.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">2. Definiții</h2>
            <p><strong className="text-foreground">Serviciu</strong> se referă la site-ul web și serviciile oferite de SEO Doctor.</p>
            <p className="mt-2"><strong className="text-foreground">Termeni și Condiții</strong> (denumiți și "Termeni") reprezintă aceste Termeni și Condiții care formează întregul acord între dumneavoastră și SEO Doctor SRL cu privire la utilizarea Serviciului.</p>
            <p className="mt-2"><strong className="text-foreground">Conținut</strong> se referă la conținutul cum ar fi text, imagini sau alte informații care pot fi postate, încărcate, legate de sau puse la dispoziție prin Serviciu.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">3. Conturile</h2>
            <p>Când creați un cont la noi, trebuie să ne furnizați informații care sunt corecte, complete și actuale în orice moment. Nerespectarea acestui lucru constituie o încălcare a Termenilor, care poate duce la încetarea imediată a contului dumneavoastră pe Serviciul nostru.</p>
            <p className="mt-2">Sunteți responsabil pentru protejarea parolei pe care o utilizați pentru a accesa Serviciul și pentru orice activități sau acțiuni sub parola dumneavoastră, indiferent dacă parola dumneavoastră este cu Serviciul nostru sau un serviciu terț.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">4. Proprietate intelectuală</h2>
            <p>Serviciul și conținutul său original, caracteristicile și funcționalitatea sunt și vor rămâne proprietatea exclusivă a SEO Doctor SRL și a licențiatorilor săi. Serviciul este protejat de drepturi de autor, mărci comerciale și alte legi atât din România, cât și din străinătate.</p>
            <p className="mt-2">Mărcile noastre comerciale și aspectul comercial nu pot fi utilizate în legătură cu niciun produs sau serviciu fără acordul prealabil scris al SEO Doctor SRL.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">5. Limitarea răspunderii</h2>
            <p>În niciun caz SEO Doctor SRL, directorii, angajații, partenerii, agenții, furnizorii sau afiliații săi nu vor fi răspunzători pentru orice daune indirecte, incidentale, speciale, exemplare sau de consecință, inclusiv fără limitare, pierderea de profit, date, utilizare, bunăvoință sau alte pierderi intangibile, rezultate din: (i) accesul dumneavoastră la sau utilizarea sau imposibilitatea de a accesa sau utiliza Serviciul; (ii) orice conduită sau conținut al oricărei terțe părți pe Serviciu; (iii) orice conținut obținut de la Serviciu; și (iv) acces neautorizat, utilizare sau modificare a transmisiilor sau conținutului dumneavoastră.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">6. Reziliere</h2>
            <p>Putem rezilia sau suspenda contul dumneavoastră imediat, fără notificare prealabilă sau răspundere, din orice motiv, inclusiv, fără limitare, dacă încălcați Termenii.</p>
            <p className="mt-2">La reziliere, dreptul dumneavoastră de a utiliza Serviciul va înceta imediat. Dacă doriți să vă reziliați contul, puteți pur și simplu să întrerupeți utilizarea Serviciului.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">7. Modificări ale Serviciului</h2>
            <p>Ne rezervăm dreptul de a retrage sau modifica Serviciul nostru, și orice serviciu sau material pe care îl furnizăm prin Serviciu, la discreția noastră fără notificare. Nu vom fi răspunzători dacă, din orice motiv, toate sau oricare dintre părțile Serviciului sunt indisponibile în orice moment sau pentru orice perioadă.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">8. Modificări ale Termenilor</h2>
            <p>Ne rezervăm dreptul, la discreția noastră, de a modifica sau înlocui acești Termeni în orice moment. Dacă o revizuire este materială, vom încerca să oferim cel puțin o notificare de 30 de zile înainte ca orice termeni noi să intre în vigoare.</p>
            <p className="mt-2">Continuând să accesați sau utilizați Serviciul nostru după ce aceste revizuiri devin efective, sunteți de acord să fiți legat de termenii revizuiți. Dacă nu sunteți de acord cu noii termeni, vă rugăm să încetați utilizarea Serviciului.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">9. Politica de rambursare</h2>
            <p>SEO Doctor SRL oferă servicii digitale care implică alocarea imediată de resurse și începerea muncii după procesarea plății. În consecință, toate plățile efectuate pentru serviciile noastre sunt nerambursabile.</p>
            <p className="mt-2">După achiziționarea unui serviciu și confirmarea plății, echipa noastră începe să lucreze la implementarea soluțiilor personalizate pentru afacerea dumneavoastră. Datorită naturii acestor servicii și a resurselor dedicate, nu putem oferi rambursări pentru serviciile deja achiziționate, indiferent de stadiul implementării sau de rezultate.</p>
            <p className="mt-2">Vă recomandăm să analizați cu atenție descrierile serviciilor și să ne contactați pentru orice întrebări înainte de a face o achiziție. Suntem dedicați să oferim valoare reală pentru investiția dumneavoastră și vom lucra pentru a asigura satisfacția dumneavoastră în limitele serviciului achiziționat.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">10. Legea aplicabilă</h2>
            <p>Acești Termeni vor fi guvernați și interpretați în conformitate cu legile României, fără a ține cont de prevederile sale privind conflictul de legi.</p>
            <p className="mt-2">Incapacitatea noastră de a aplica orice drept sau prevedere a acestor Termeni nu va fi considerată o renunțare la aceste drepturi. Dacă orice prevedere a acestor Termeni este considerată a fi invalidă sau inaplicabilă de către o instanță, prevederile rămase ale acestor Termeni vor rămâne în vigoare.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">11. Contactați-ne</h2>
            <p>Dacă aveți întrebări despre acești Termeni, vă rugăm să ne contactați:</p>
            <p className="mt-2">Telefon: <a href="https://wa.me/40742702982" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">+40 742 702 982</a></p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">12. Descrierea serviciilor și obligațiile clientului</h2>
            <p>SEO Doctor SRL oferă servicii de optimizare pentru motoare de căutare (SEO), marketing digital, audit tehnic al site-urilor web și consultanță strategică online. Serviciile sunt prestate conform specificațiilor agreate la momentul achiziției și pot include, fără a se limita la: cercetare de cuvinte cheie, optimizare on-page și off-page, creare de conținut optimizat, link building și raportare periodică.</p>
            <p className="mt-2">Clientul se obligă să furnizeze accesul necesar la site-ul web, conturile de analytics, Search Console și orice alte platforme relevante pentru prestarea serviciilor. Întârzierile în furnizarea accesului sau a materialelor solicitate pot afecta termenele de livrare, fără ca SEO Doctor SRL să fie responsabil pentru aceste întârzieri.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">13. Condiții de plată</h2>
            <p>Plățile pentru serviciile SEO Doctor se efectuează conform facturii emise, prin transfer bancar sau prin intermediul platformei de plăți online Stripe. Moneda de plată este RON sau EUR, conform ofertei acceptate.</p>
            <p className="mt-2">Facturile sunt scadente în termen de 5 zile lucrătoare de la emitere, cu excepția cazului în care se convine altfel în scris. Neplata la termen poate duce la suspendarea temporară a serviciilor până la regularizarea situației financiare, fără ca aceasta să constituie o reziliere a contractului.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">14. Forță majoră</h2>
            <p>Niciuna dintre părți nu va fi răspunzătoare pentru neexecutarea sau executarea cu întârziere a obligațiilor sale dacă aceasta este cauzată de un eveniment de forță majoră. Prin forță majoră se înțelege orice eveniment imprevizibil și insurmontabil, inclusiv, dar fără a se limita la: dezastre naturale, pandemii, modificări legislative majore, întreruperi ale serviciilor de internet sau hosting, atacuri cibernetice sau orice alt eveniment în afara controlului rezonabil al părților.</p>
            <p className="mt-2">Partea afectată de forța majoră va notifica cealaltă parte în termen de 5 zile lucrătoare de la apariția evenimentului și va depune toate eforturile rezonabile pentru a minimiza impactul asupra serviciilor contractate.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">15. Confidențialitate</h2>
            <p>Ambele părți se obligă să păstreze confidențialitatea tuturor informațiilor sensibile obținute în cadrul colaborării, inclusiv, dar fără a se limita la: date de acces, strategii de marketing, date financiare, informații despre clienți și orice alte informații desemnate ca fiind confidențiale.</p>
            <p className="mt-2">Obligația de confidențialitate se menține pe toată durata colaborării și pentru o perioadă de 2 ani după încetarea acesteia, indiferent de motivul încetării. Încălcarea acestei obligații poate atrage răspunderea civilă conform legislației române în vigoare.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">16. Legătura cu alte politici</h2>
            <p>Acești Termeni și Condiții trebuie citiți împreună cu următoarele politici ale SEO Doctor, care fac parte integrantă din prezentul acord:</p>
            <ul className="mt-3 space-y-2">
              <li><Link to="/cookies" className="text-brand hover:underline">Politica de Cookies</Link> – descrie modul în care utilizăm cookie-urile și tehnologiile similare pe site-ul nostru.</li>
              <li><Link to="/gdpr" className="text-brand hover:underline">Politica de Confidențialitate (GDPR)</Link> – detaliază modul în care colectăm, utilizăm și protejăm datele dumneavoastră personale, în conformitate cu Regulamentul General privind Protecția Datelor.</li>
            </ul>
            <p className="mt-3">Prin acceptarea acestor Termeni și Condiții, confirmați că ați citit și înțeles toate politicile menționate mai sus.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermeniConditii;
