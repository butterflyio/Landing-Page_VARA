import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Fingerprint, Activity } from 'lucide-react';

const PainPointCard = ({ icon: Icon, title, description, delay }: any) => (
  <motion.div
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:border-emerald-500/20 transition-all group"
  >
    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-amber-600 mb-8 group-hover:scale-110 transition-transform border border-gray-100">
      <Icon size={24} />
    </div>
    <h3 className="font-serif text-xl text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <span className="text-[10px] font-bold tracking-[0.3em] text-emerald-600 uppercase block mb-6">
            The Governance Challenge
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8 leading-tight">
            Compliance in the UAE is a <br />
            <span className="italic text-amber-600">two-front challenge.</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            While <strong>VARA</strong> dictates <strong>what</strong> you can say, the <strong>UAE Media Council</strong> regulates <strong>how</strong> and <strong>where</strong> you say it. Managing both manually creates high-stakes operational risk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PainPointCard
            icon={AlertTriangle}
            title="The Content Gap"
            description="Failing to meet VARA's strict Market Conduct Guidelines results in immediate administrative penalties."
            delay={0.1}
          />
          <PainPointCard
            icon={Fingerprint}
            title="The Medium Risk"
            description="Violating UAE Media Council laws regarding social media permits and licensing triggers distribution shutdowns."
            delay={0.2}
          />
          <PainPointCard
            icon={Activity}
            title="Operational Strain"
            description="Teams are often overwhelmed by cross-referencing two distinct sets of federal and authority-level laws."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Problem;
