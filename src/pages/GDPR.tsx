import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const GDPR = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection-brand">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 text-sm">
          <ArrowLeft className="w-4 h-4" /> Înapoi la pagina principală
        </Link>

        <h1 className="font-display text-3xl md:text-5xl uppercase mb-10">GDPR - Protecția Datelor</h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed text-[15px]">
          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">1. Conformitate GDPR</h2>
            <p>SEO Doctor SRL respectă Regulamentul General privind Protecția Datelor (GDPR) al Uniunii Europene, care a intrat în vigoare la 25 mai 2018. Această secțiune GDPR face parte din Politica noastră de Confidențialitate și explică drepturile dumneavoastră în ceea ce privește datele dumneavoastră personale și modul în care ne conformăm acestor reglementări.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">2. Operatorul de date</h2>
            <p>SEO Doctor SRL acționează în calitate de "operator de date" pentru orice date personale colectate prin Serviciul nostru.</p>
            <div className="mt-3 bg-card border border-border p-4 space-y-1">
              <p><strong className="text-foreground">Nume:</strong> SEO Doctor SRL</p>
              <p><strong className="text-foreground">CUI:</strong> 49345207</p>
              <p><strong className="text-foreground">Adresă:</strong> Str. Campia Libertății 33, sector 3, București</p>
              <p><strong className="text-foreground">Telefon:</strong> <a href="https://wa.me/40742702982" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">+40 742 702 982</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">3. Temeiurile juridice pentru prelucrare</h2>
            <p>Prelucrăm datele dumneavoastră personale numai atunci când avem un temei juridic valid pentru a face acest lucru:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong className="text-foreground">Consimțământul</strong> – Când ne-ați dat permisiunea explicită.</li>
              <li><strong className="text-foreground">Executarea unui contract</strong> – Când prelucrarea este necesară pentru îndeplinirea unui contract.</li>
              <li><strong className="text-foreground">Obligație legală</strong> – Când prelucrarea este necesară pentru a respecta o obligație legală.</li>
              <li><strong className="text-foreground">Interese legitime</strong> – Când prelucrarea este necesară pentru interesele noastre legitime.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">4. Drepturile dumneavoastră GDPR</h2>
            <p>Conform GDPR, aveți următoarele drepturi:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong className="text-foreground">Dreptul de a fi informat</strong> – informații clare despre utilizarea datelor.</li>
              <li><strong className="text-foreground">Dreptul de acces</strong> – confirmarea și accesul la datele personale.</li>
              <li><strong className="text-foreground">Dreptul la rectificare</strong> – corectarea datelor inexacte.</li>
              <li><strong className="text-foreground">Dreptul la ștergere</strong> – ștergerea datelor în anumite circumstanțe.</li>
              <li><strong className="text-foreground">Dreptul la restricționarea prelucrării</strong></li>
              <li><strong className="text-foreground">Dreptul la portabilitatea datelor</strong></li>
              <li><strong className="text-foreground">Dreptul la opoziție</strong></li>
              <li><strong className="text-foreground">Drepturi legate de luarea deciziilor automatizate</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">5. Exercitarea drepturilor dumneavoastră</h2>
            <p>Pentru a vă exercita drepturile GDPR, vă rugăm să ne contactați. Vom răspunde în termen de o lună de la primirea solicitării. Acest termen poate fi prelungit cu două luni suplimentare dacă este necesar.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">6. Transfer de date în afara UE/SEE</h2>
            <p>Dacă transferăm datele dumneavoastră personale în afara Uniunii Europene sau Spațiului Economic European, ne asigurăm că transferul este efectuat în conformitate cu GDPR, inclusiv utilizarea clauzelor contractuale standard aprobate de Comisia Europeană.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">7. Încălcări ale securității datelor</h2>
            <p>În cazul unei încălcări a securității datelor care prezintă un risc pentru drepturile și libertățile dumneavoastră, vom notifica autoritatea competentă în termen de 72 de ore. Dacă riscul este ridicat, vă vom notifica direct și fără întârzieri nejustificate.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">8. Autoritatea de supraveghere</h2>
            <p>Dacă considerați că prelucrarea datelor încalcă prevederile GDPR, aveți dreptul de a depune o plângere la:</p>
            <p className="mt-2"><strong className="text-foreground">ANSPDCP</strong> – B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București – <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">www.dataprotection.ro</a></p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">10. Datele personale pe care le colectăm</h2>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Nume și prenume</li>
              <li>Adresă de e-mail</li>
              <li>Număr de telefon</li>
              <li>Adresa IP</li>
              <li>Date de navigare (pagini vizitate, durata vizitei, tipul browserului)</li>
              <li>Date de facturare (nume, adresă, CUI)</li>
              <li>Orice alte date furnizate voluntar prin formulare de contact</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">11. Scopurile prelucrării datelor</h2>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Furnizarea și îmbunătățirea serviciilor de SEO și marketing digital</li>
              <li>Comunicarea în legătură cu serviciile contractate</li>
              <li>Emiterea facturilor și gestionarea plăților</li>
              <li>Analiza traficului pe site (Google Analytics)</li>
              <li>Măsurarea eficienței campaniilor publicitare (Google Ads)</li>
              <li>Respectarea obligațiilor legale și fiscale</li>
              <li>Protecția împotriva fraudei (Stripe)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">12. Servicii terțe care prelucrează date</h2>
            <ul className="mt-2 space-y-3">
              <li><strong className="text-foreground">Google Analytics</strong> – date anonimizate despre trafic. Temeiul juridic: interes legitim.</li>
              <li><strong className="text-foreground">Google Ads</strong> – cookie-uri pentru conversii și remarketing. Temeiul juridic: consimțământ.</li>
              <li><strong className="text-foreground">Stripe</strong> – procesarea plăților. Temeiul juridic: executarea contractului.</li>
            </ul>
            <p className="mt-3">Nu vindem și nu partajăm datele dumneavoastră cu alte terțe părți.</p>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">13. Perioada de retenție a datelor</h2>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Date de cont și facturare: durata contractuală + 5 ani</li>
              <li>Date de navigare și analytics: maximum 26 de luni</li>
              <li>Date de marketing (Google Ads): până la retragerea consimțământului sau max. 540 de zile</li>
              <li>Date din formulare de contact: maximum 12 luni de la ultima comunicare</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">14. Legătura cu alte politici</h2>
            <p>Prezenta Politică de Confidențialitate trebuie citită împreună cu:</p>
            <ul className="mt-3 space-y-2">
              <li><Link to="/cookies" className="text-brand hover:underline">Politica de Cookies</Link></li>
              <li><Link to="/termeni" className="text-brand hover:underline">Termenii și Condițiile</Link></li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-bold text-lg mb-3">15. Contactați-ne</h2>
            <p>Dacă aveți întrebări sau doriți să vă exercitați drepturile GDPR:</p>
            <p className="mt-2">Telefon: <a href="https://wa.me/40742702982" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">+40 742 702 982</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GDPR;
