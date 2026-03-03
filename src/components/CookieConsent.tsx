import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    setVisible(false);
  };

  const acceptAll = () => {
    saveConsent({ essential: true, analytics: true, marketing: true });
  };

  const rejectOptional = () => {
    saveConsent({ essential: true, analytics: false, marketing: false });
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          >
            <div className="bg-card border border-border w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-10 rounded-2xl shadow-2xl">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <ShieldCheck className="w-8 h-8 text-brand shrink-0 mt-1" />
                <h2 className="font-display text-xl md:text-2xl uppercase leading-tight">
                  Respectăm confidențialitatea dumneavoastră
                </h2>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                Utilizăm cookie-uri esențiale pentru funcționarea site-ului și, cu acordul dumneavoastră, cookie-uri de analiză și marketing. Puteți accepta toate, le puteți refuza sau personaliza preferințele.{' '}
                <Link to="/cookies" className="text-brand hover:underline">Politica de Cookies</Link>
                {' | '}
                <Link to="/gdpr" className="text-brand hover:underline">GDPR</Link>
              </p>

              {/* Toggle details */}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-2 text-brand text-sm font-semibold mb-6 hover:opacity-80 transition-opacity"
              >
                {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                {showDetails ? 'Ascunde detalii' : 'Arată detalii'}
              </button>

              {/* Details */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mb-6"
                  >
                    <div className="space-y-4">
                      {/* Essential */}
                      <div className="bg-background border border-border rounded-xl p-4 md:p-5 flex items-center justify-between gap-4">
                        <div>
                          <h3 className="font-bold text-sm md:text-base">Cookie-uri esențiale</h3>
                          <p className="text-muted-foreground text-xs md:text-sm mt-1">
                            Necesare pentru funcționarea site-ului. Nu pot fi dezactivate.
                          </p>
                        </div>
                        <div className="w-12 h-7 bg-brand rounded-full relative shrink-0 cursor-not-allowed">
                          <div className="absolute right-1 top-1 w-5 h-5 bg-foreground rounded-full" />
                        </div>
                      </div>

                      {/* Analytics */}
                      <div className="bg-background border border-border rounded-xl p-4 md:p-5 flex items-center justify-between gap-4">
                        <div>
                          <h3 className="font-bold text-sm md:text-base">Cookie-uri de analiză</h3>
                          <p className="text-muted-foreground text-xs md:text-sm mt-1">
                            Google Analytics - ne ajută să înțelegem cum este utilizat site-ul.
                          </p>
                        </div>
                        <button
                          onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                          className={`w-12 h-7 rounded-full relative shrink-0 transition-colors ${
                            preferences.analytics ? 'bg-brand' : 'bg-muted'
                          }`}
                        >
                          <div className={`absolute top-1 w-5 h-5 bg-foreground rounded-full transition-all ${
                            preferences.analytics ? 'right-1' : 'left-1'
                          }`} />
                        </button>
                      </div>

                      {/* Marketing */}
                      <div className="bg-background border border-border rounded-xl p-4 md:p-5 flex items-center justify-between gap-4">
                        <div>
                          <h3 className="font-bold text-sm md:text-base">Cookie-uri de marketing</h3>
                          <p className="text-muted-foreground text-xs md:text-sm mt-1">
                            Google Ads - măsurarea conversiilor și remarketing. Se încarcă doar cu acordul dumneavoastră.
                          </p>
                        </div>
                        <button
                          onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                          className={`w-12 h-7 rounded-full relative shrink-0 transition-colors ${
                            preferences.marketing ? 'bg-brand' : 'bg-muted'
                          }`}
                        >
                          <div className={`absolute top-1 w-5 h-5 bg-foreground rounded-full transition-all ${
                            preferences.marketing ? 'right-1' : 'left-1'
                          }`} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={rejectOptional}
                  className="py-3.5 px-6 border border-border text-foreground font-semibold text-sm uppercase tracking-wider hover:bg-foreground/5 transition-colors rounded-lg"
                >
                  Refuză opționalele
                </button>
                <button
                  onClick={savePreferences}
                  className="py-3.5 px-6 border border-border text-foreground font-semibold text-sm uppercase tracking-wider hover:bg-foreground/5 transition-colors rounded-lg"
                >
                  Salvează preferințele
                </button>
                <button
                  onClick={acceptAll}
                  className="py-3.5 px-6 bg-brand hover:bg-brand-hover text-foreground font-bold text-sm uppercase tracking-wider transition-colors rounded-lg"
                >
                  Acceptă toate
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
