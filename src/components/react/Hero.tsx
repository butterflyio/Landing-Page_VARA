import React, { useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Shield } from 'lucide-react';

const RotatingWords = () => {
  const words = ["VARA Aligned", "UAE Media Council Ready", "Audit-Proof"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[1.2em] overflow-hidden inline-block align-bottom ml-3">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'circOut' }}
          className="text-amber-600 italic block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const Hero: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-white"
    >
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0 opacity-30"
      />
      <motion.div
        style={{ y: yBg, scale: 1.1 }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] -mr-32 -mt-32"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          style={{ opacity, y: yText }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-emerald-500/10 bg-emerald-500/5 text-emerald-600 text-[10px] font-bold tracking-[0.2em] uppercase"
          >
            <Shield size={12} className="text-amber-600" />
            The UAE Standard for Digital Asset Governance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-8xl leading-[1.05] mb-8 text-gray-900"
          >
            Integrated <br />
            <span className="flex items-center justify-center flex-wrap">
              Marketing Solution <RotatingWords />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Secure your marketing perimeter. Sanad bridges the gap between VARA's content requirements and UAE Media Council distribution laws with AI-augmented oversight.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="px-12 py-6 bg-gray-900 text-white rounded-full font-bold text-xs tracking-[0.2em] hover:bg-emerald-600 hover:shadow-2xl transition-all flex items-center gap-3 group">
              REQUEST ACCESS
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform text-amber-600" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-3 border-t border-gray-100 pt-12 gap-8"
          >
            {[
              { label: "Dual-Layer", sub: "VARA + UAE Media Council" },
              { label: "Sovereign", sub: "UAE On-Premise" },
              { label: "Zero-Leakage", sub: "End-to-End Privacy" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <h3 className="font-serif text-2xl text-gray-900 mb-1">{stat.label}</h3>
                <p className="text-[10px] font-bold text-amber-600 tracking-widest uppercase">{stat.sub}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
