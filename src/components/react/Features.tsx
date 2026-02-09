import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Users, Zap, Briefcase, FileText, HeartHandshake } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description }: any) => (
  <div className="flex gap-6 items-start p-6 rounded-xl hover:bg-white transition-colors">
    <div className="w-12 h-12 bg-emerald-50 rounded-lg flex-shrink-0 flex items-center justify-center text-emerald-600">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
        {title}
      </h4>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Technical Features */}
          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-emerald-600/10 text-emerald-600 text-[10px] tracking-[0.2em] font-bold uppercase rounded-md">
              Technical Infrastructure
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-12 text-gray-900">Deep-Tech Governance.</h2>
            <div className="grid grid-cols-1 gap-4">
              <FeatureItem
                icon={Zap}
                title="Dual-Engine Validation"
                description="Simultaneous scanning against VARA Administrative Orders (Content) and UAE Media Council Federal Laws (Medium)."
              />
              <FeatureItem
                icon={Server}
                title="Sovereign AI Infrastructure"
                description="On-premise technology that ensures your data stays within your institutional perimeter and UAE federal borders."
              />
              <FeatureItem
                icon={Users}
                title="Augmented Human Workflow"
                description="A seamless hand-off between AI speed and human expert judgment, designed for CMOs and Compliance Teams."
              />
              <FeatureItem
                icon={Cpu}
                title="Context-Aware Analysis"
                description="Recognizes if you are publishing on social media, OOH, or digital PR, adjusting UAE Media Council checks automatically."
              />
            </div>
          </div>

          {/* Workflow Features */}
          <div className="bg-gray-900 rounded-[40px] p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 blur-[100px] rounded-full -mr-32 -mt-32" />
            <div className="relative z-10">
              <div className="inline-block mb-4 px-3 py-1 bg-white/10 text-amber-600 text-[10px] tracking-[0.2em] font-bold uppercase rounded-md border border-white/10">
                Institutional Workflow
              </div>
              <h2 className="font-serif text-4xl md:text-5xl mb-12 text-white">Focus on Growth.</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-10 h-10 bg-amber-600/10 rounded-full flex-shrink-0 flex items-center justify-center text-amber-600 border border-amber-600/20">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-widest">
                      Core-Business Enablement
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Automate 90% of the vetting process so your team can focus on growth and high-level strategy.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-10 h-10 bg-amber-600/10 rounded-full flex-shrink-0 flex items-center justify-center text-amber-600 border border-amber-600/20">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-widest">
                      Evidence-Based Audit Trail
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Every approval is timestamped and documented, ensuring regulatory readiness at all times.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-10 h-10 bg-amber-600/10 rounded-full flex-shrink-0 flex items-center justify-center text-amber-600 border border-amber-600/20">
                    <HeartHandshake size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-widest">
                      Collaborative Governance
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Bridge the gap between marketing creativity and compliance rigor with unified tooling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
