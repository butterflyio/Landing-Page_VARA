import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Problem from './Problem';
import Features from './Features';
import HowItWorks from './HowItWorks';
import WebinarCTA from './WebinarCTA';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <ShieldCheck className="text-emerald-600" size={28} />
            <span className="font-serif text-2xl font-bold text-gray-900">Sanad</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#problem"
              onClick={scrollToSection('problem')}
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Challenge
            </a>
            <a
              href="#features"
              onClick={scrollToSection('features')}
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Solution
            </a>
            <a
              href="#how-it-works"
              onClick={scrollToSection('how-it-works')}
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Process
            </a>
            <button className="px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
              Book Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              <a
                href="#problem"
                onClick={scrollToSection('problem')}
                className="text-sm font-medium text-gray-600 hover:text-emerald-600"
              >
                Challenge
              </a>
              <a
                href="#features"
                onClick={scrollToSection('features')}
                className="text-sm font-medium text-gray-600 hover:text-emerald-600"
              >
                Solution
              </a>
              <a
                href="#how-it-works"
                onClick={scrollToSection('how-it-works')}
                className="text-sm font-medium text-gray-600 hover:text-emerald-600"
              >
                Process
              </a>
              <button className="px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-medium">
                Book Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Page Sections */}
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <WebinarCTA />
    </div>
  );
};

export default App;
