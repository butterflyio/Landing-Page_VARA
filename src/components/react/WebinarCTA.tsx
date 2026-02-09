import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, CheckCircle2, Building2 } from 'lucide-react';

const WebinarCTA: React.FC = () => {
  return (
    <section className="py-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-emerald-600/10 border border-emerald-600/20">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-emerald-400 text-xs font-bold tracking-wider uppercase">
                  Exclusive Webinar
                </span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                See Sanad in Action
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Join us for a live demonstration of how leading VASPs are streamlining their dual-layer compliance workflows and reducing regulatory risk by 90%.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-gray-300">
                  <Calendar size={20} className="text-amber-500" />
                  <span>Next Session: February 15, 2026 | 3:00 PM GST</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <MapPin size={20} className="text-amber-500" />
                  <span>Virtual Event (Dubai Time Zone)</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <Building2 size={20} className="text-amber-500" />
                  <span>Designed for VASPs & Compliance Officers</span>
                </div>
              </div>

              <button className="px-10 py-5 bg-emerald-600 text-white rounded-full font-bold text-sm hover:bg-emerald-500 transition-all shadow-lg hover:shadow-2xl flex items-center gap-3 group">
                RESERVE YOUR SPOT
                <CheckCircle2 size={18} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Right Content - Features */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="font-serif text-2xl text-white mb-6">What You'll Learn</h3>
              <div className="space-y-4">
                {[
                  'Live walkthrough of VARA + UAE Media Council validation',
                  'Real-world case studies from regulated VASPs',
                  'Q&A with compliance and technical experts',
                  'Demo of the collaborative approval workflow'
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarCTA;
