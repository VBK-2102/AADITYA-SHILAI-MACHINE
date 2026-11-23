import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { infrastructureFacilities } from '../data/infrastructure';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const InfrastructurePage: React.FC = () => {
  return (
    <div className="bg-transparent min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-12 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Infrastructure' }]} />
          
          <div className="max-w-3xl space-y-3 mt-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
                Factory Layout & Equipment Inventory
              </span>
              <span className="font-caveat text-base text-brand-700 font-bold -rotate-1 select-none">
                ~ 15,000+ sq. ft. engineering facility
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 font-heading">
              Plant Infrastructure & <span className="font-serif italic font-normal text-brand-600">Capabilities</span>
            </h1>
            <p className="text-base text-slate-600 leading-relaxed font-sans">
              Located on Kalamba Road, Kolhapur. Spanning over 15,000 sq. ft. of specialized machinery staging, automated 72-hour burn-in testing bays, and a cataloged spare parts warehouse.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 space-y-16">
        
        {/* Plant Overview Metrics */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono">
            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
              <span className="text-3xl font-black text-slate-900 block font-sora">15,000+</span>
              <span className="text-xs text-brand-700 font-semibold font-heading">Total Sq. Ft. Facility</span>
            </div>

            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
              <span className="text-3xl font-black text-slate-900 block font-sora">12,000+</span>
              <span className="text-xs text-brand-700 font-semibold font-heading">Precision Spares In Stock</span>
            </div>

            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
              <span className="text-3xl font-black text-slate-900 block font-sora">72 Hours</span>
              <span className="text-xs text-brand-700 font-semibold font-heading">Testing Bay Duration</span>
            </div>

            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
              <span className="text-3xl font-black text-slate-900 block font-sora">24 Hours</span>
              <span className="text-xs text-brand-700 font-semibold font-heading">Emergency Dispatch</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Facilities Breakdown */}
        <div className="space-y-12">
          {infrastructureFacilities.map((fac, idx) => (
            <ScrollReveal key={fac.id} delay={idx * 0.1}>
              <div
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className={`lg:col-span-5 h-full ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative h-64 lg:h-full min-h-[280px] bg-slate-100">
                    <img
                      src={fac.imageUrl}
                      alt={fac.name}
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-white/95 text-slate-900 border border-slate-200 shadow-sm">
                        {fac.area}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-7 p-6 sm:p-8 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-2xl font-bold text-slate-900 font-display">
                    {fac.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {fac.purpose}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-brand-700 font-bold">
                      Key Equipment & Tooling Deployed:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
                      {fac.keyEquipment.map((eq, eIdx) => (
                        <li key={eIdx} className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-700 shrink-0 mt-0.5" />
                          <span>{eq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Location & Facility Visit CTA */}
        <ScrollReveal>
          <div className="bg-purple-50/70 border border-purple-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 font-display">Schedule an In-Person Plant Tour or Test Stitching</h3>
              <p className="text-xs text-slate-600">
                Bring your specific material samples to our Kolhapur Demonstration Center for live trial stitching on our machines.
              </p>
            </div>
            <Link to="/contact" className="btn-metallic text-xs font-bold text-white px-6 py-3 rounded-xl shrink-0">
              Book Demonstration Appointment &rarr;
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};
