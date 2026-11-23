import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { manufacturingCapabilities } from '../data/manufacturing';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const ManufacturingPage: React.FC = () => {
  return (
    <div className="bg-transparent min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-12 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Manufacturing Capabilities' }]} />
          
          <div className="max-w-3xl space-y-3 mt-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
                In-House Precision Tooling & Assembly
              </span>
              <span className="font-caveat text-base text-brand-700 font-bold -rotate-1 select-none">
                ~ Micron-tolerance timing sync
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 font-heading">
              Manufacturing Capabilities & <span className="font-serif italic font-normal text-brand-600">Precision</span> Engineering
            </h1>
            <p className="text-base text-slate-600 leading-relaxed font-sans">
              From vacuum induction gear hardening and pure copper servo armature winding to micron-tolerance timing synchronization and 72-hour continuous burn-in load diagnostics.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 space-y-16">
        
        {/* Core Philosophy Banner */}
        <ScrollReveal>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-xs font-sora text-brand-700 uppercase font-bold block">&plusmn; 0.005 mm</span>
              <h3 className="font-bold text-slate-900 text-base font-heading">Micron Shaft Runout</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Main crankshafts and oscillating shafts ground with mirror finish for zero bearing friction.
              </p>
            </div>

            <div className="space-y-2 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
              <span className="text-xs font-sora text-brand-700 uppercase font-bold block">HRC 60 &plusmn; 2</span>
              <h3 className="font-bold text-slate-900 text-base font-heading">Vacuum Induction Hardening</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Rotary hooks and cams undergo thermal case-hardening to prevent notch wear during high-speed operation.
              </p>
            </div>

            <div className="space-y-2 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
              <span className="text-xs font-sora text-brand-700 uppercase font-bold block">72 Hours</span>
              <h3 className="font-bold text-slate-900 text-base font-heading">Continuous Burn-In Test</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Simulated multishift stitching at elevated speeds ensures factory thermal stabilization.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Detailed 6-Phase Engineering Pipeline */}
        <ScrollReveal>
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
                Step-by-Step Production Protocol
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Our 6-Phase <span className="font-serif italic font-normal text-brand-600">Manufacturing</span> Pipeline
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {manufacturingCapabilities.map((cap) => (
                <div
                  key={cap.id}
                  className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5 flex flex-col justify-between shadow-sm hover:border-brand-500 hover:shadow-md transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-brand-700 px-3 py-1 rounded bg-purple-50 border border-purple-200">
                        {cap.phase}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-700 font-semibold">{cap.qualityTolerance}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 font-display">
                      {cap.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cap.description}
                    </p>

                    <div className="pt-2 space-y-2 text-xs">
                      <span className="text-[10px] font-mono uppercase text-brand-700 block font-bold">
                        Process Specifications:
                      </span>
                      <ul className="space-y-1.5 text-slate-600">
                        {cap.specifications.map((spec, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-700 shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 text-xs font-mono text-slate-500">
                    <span className="text-[10px] uppercase text-brand-700 block font-semibold">Equipment Deployed:</span>
                    <span className="text-slate-800">{cap.equipmentUsed}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Custom Engineering & OEM Modifications */}
        <ScrollReveal>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-6 shadow-sm">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono text-brand-700 uppercase font-bold block">
                Bespoke Factory Tooling
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Custom Machinery Modification & Attachment Fabrication
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Have non-standard fabric handling needs? We engineer custom puller rollers, pneumatic presser feet, specialized binding brackets, and multi-needle gauges for unique manufacturing requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-slate-900 font-bold block">Custom Needle Gauges</span>
                <span className="text-slate-600 mt-1 block">Double-needle spacing engineered from 3.2 mm to 38.1 mm</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-slate-900 font-bold block">Synchronized Pullers</span>
                <span className="text-slate-600 mt-1 block">Top & bottom mechanical pullers for heavy canvas and sails</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-slate-900 font-bold block">Pneumatic Auto-Lifters</span>
                <span className="text-slate-600 mt-1 block">Retrofit air cylinder presser lifters reducing operator strain</span>
              </div>
            </div>

            <div className="pt-2">
              <Link to="/request-quote" className="btn-metallic text-xs font-bold text-white px-6 py-3 rounded-xl inline-flex items-center space-x-2">
                <span>Discuss Custom OEM Modification &rarr;</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};
