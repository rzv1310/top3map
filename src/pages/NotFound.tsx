import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050505] px-6 text-white overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FF1E00]/5 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 text-center max-w-lg"
      >
        {/* 404 number */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[10rem] sm:text-[14rem] font-bold leading-none tracking-tighter"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          <span className="text-[#FF1E00]">4</span>
          <span className="text-white/10">0</span>
          <span className="text-[#FF1E00]">4</span>
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl text-white/50 mb-2 -mt-4"
        >
          Pagina <span className="text-white/80 font-medium">„{location.pathname}"</span> nu există.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="text-white/30 text-sm mb-10"
        >
          S-ar putea să fi fost mutată sau link-ul este greșit.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#FF1E00] hover:bg-[#FF1E00]/85 text-white font-semibold px-8 py-4 rounded-md text-base transition-all duration-200 hover:scale-105"
          >
            ← Înapoi acasă
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
