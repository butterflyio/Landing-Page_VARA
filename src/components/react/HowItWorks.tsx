import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronRight, Layout, Boxes, ShieldCheck, Database, Search, Target, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: 'license',
    title: 'License Mapping',
    description: 'Deep integration of your unique VASP license parameters into our dual-layer validation engine.',
    icon: Layout,
    content: {
      headline: 'Map your Regulatory Footprint',
      sub: 'Customize the scanning engine based on your specific VASP tier and operational distribution channels.',
      cta: 'Configure License'
    }
  },
  {
    id: 'bilateral',
    title: 'Bilateral Vetting',
    description: 'Instantaneous parallel scanning against VARA Content Standards and UAE Media Council decrees.',
    icon: Boxes,
    content: {
      headline: 'Dual-Engine Validation',
      sub: 'Simultaneously assess content compliance and distribution legality across all digital mediums.',
      cta: 'Run Scan'
    }
  },
  {
    id: 'verify',
    title: 'Expert Verification',
    description: 'A collaborative sign-off interface for Compliance Officers to provide final evidence-based seals.',
    icon: ShieldCheck,
    content: {
      headline: 'Human-Led Governance',
      sub: 'Empower your compliance team with AI-augmented oversight to accelerate the approval workflow.',
      cta: 'View Workflow'
    }
  },
  {
    id: 'audit',
    title: 'Audit Dossier',
    description: 'Automatic generation of 8-year compliant records, secured within UAE sovereign infrastructure.',
    icon: Database,
    content: {
      headline: 'Immutable Audit Trail',
      sub: 'Secure, permanent records of all marketing approvals, auditable at a moment\'s notice.',
      cta: 'Access Archive'
    }
  }
];

const PerspectiveCard = ({ activeStep }: { activeStep: typeof steps[0] }) => {
  return (
    <motion.div
      key={activeStep.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -mr-32 -mt-32" />
      <div className="relative z-10">
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
          <activeStep.icon size={32} className="text-white" />
        </div>
        <h3 className="font-serif text-3xl md:text-4xl mb-4">{activeStep.content.headline}</h3>
        <p className="text-emerald-100 text-lg mb-8 leading-relaxed">{activeStep.content.sub}</p>
        <button className="px-8 py-4 bg-white text-emerald-700 rounded-full font-bold text-sm hover:bg-emerald-50 transition-colors flex items-center gap-2">
          {activeStep.content.cta}
          <ChevronRight size={16} />
        </button>
      </div>
    </motion.div>
  );
};

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(steps[0]);

  return (
    <section id="how-it-works" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <span className="text-[10px] font-bold tracking-[0.3em] text-emerald-600 uppercase block mb-6">
            The Process
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8 leading-tight">
            Four Steps to <span className="italic text-amber-600">Full Compliance.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Steps Navigation */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step)}
                className={`w-full text-left p-8 rounded-2xl border-2 transition-all ${
                  activeStep.id === step.id
                    ? 'border-emerald-600 bg-emerald-50'
                    : 'border-gray-100 hover:border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${
                      activeStep.id === step.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    <step.icon size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-gray-400">STEP {index + 1}</span>
                      {activeStep.id === step.id && (
                        <CheckCircle2 size={16} className="text-emerald-600" />
                      )}
                    </div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Detail */}
          <div className="lg:sticky lg:top-32 h-fit">
            <AnimatePresence mode="wait">
              <PerspectiveCard activeStep={activeStep} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
