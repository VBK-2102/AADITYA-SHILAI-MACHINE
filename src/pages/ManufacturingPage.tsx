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
      <div className="bg-[#FAF0E0] border-b border-[#E8D4BE] py-12 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Manufacturing Capabilities' }]} />

          <div className="max-w-3xl space-y-3 mt-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4621A] font-bold block">
                In-House Precision Tooling & Assembly
              </span>
              <span className="font-caveat text-base text-[#D4621A] font-bold -rotate-1 select-none">
                ~ Micron-tolerance timing sync
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#2A1A0E] font-heading">
              Manufacturing Capabilities & <span className="font-serif italic font-normal text-[#D4621A]">Precision</span> Engineering
            </h1>
            <p className="text-base text-[#5C4533] leading-relaxed font-sans">
              From vacuum induction gear hardening and pure copper servo armature winding to micron-tolerance timing synchronization and 72-hour continuous burn-in load diagnostics.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Core Philosophy Banner */}
        <ScrollReveal>
          <div className="bg-white border border-[#E8D4BE] rounded-[28px] p-8 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-xs font-sora text-[#D4621A] uppercase font-bold block">&plusmn; 0.005 mm</span>
              <h3 className="font-bold text-[#2A1A0E] text-lg font-heading">Micron Shaft Runout</h3>
              <p className="text-xs text-[#5C4533] leading-relaxed font-sans">
                Main crankshafts and oscillating shafts ground with mirror finish for zero bearing friction.
              </p>
            </div>

            <div className="space-y-2 border-t md:border-t-0 md:border-l border-[#E8D4BE] pt-4 md:pt-0 md:pl-6">
              <span className="text-xs font-sora text-[#D4621A] uppercase font-bold block">HRC 60 &plusmn; 2</span>
              <h3 className="font-bold text-[#2A1A0E] text-lg font-heading">Vacuum Induction Hardening</h3>
              <p className="text-xs text-[#5C4533] leading-relaxed font-sans">
                Rotary hooks and cams undergo thermal case-hardening to prevent notch wear during high-speed operation.
              </p>
            </div>

            <div className="space-y-2 border-t md:border-t-0 md:border-l border-[#E8D4BE] pt-4 md:pt-0 md:pl-6">
              <span className="text-xs font-sora text-[#D4621A] uppercase font-bold block">72 Hours</span>
              <h3 className="font-bold text-[#2A1A0E] text-lg font-heading">Continuous Burn-In Test</h3>
              <p className="text-xs text-[#5C4533] leading-relaxed font-sans">
                Simulated multishift stitching at elevated speeds ensures factory thermal stabilization.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Detailed 6-Phase Engineering Pipeline */}
        <ScrollReveal>
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4621A] font-bold block">
                Step-by-Step Production Protocol
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2A1A0E] font-heading">
                Our 6-Phase <span className="font-serif italic font-normal text-[#D4621A]">Manufacturing</span> Pipeline
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {manufacturingCapabilities.map((cap) => (
                <div
                  key={cap.id}
                  className="bg-white border border-[#E8D4BE] rounded-[28px] p-6 space-y-5 flex flex-col justify-between shadow-sm hover:border-[#D4621A] hover:shadow-md transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#D4621A] px-3.5 py-1 rounded-full bg-[#FAF0E0] border border-[#E8D4BE]">
                        {cap.phase}
                      </span>
                      <span className="text-[11px] font-mono text-[#D4621A] font-semibold">{cap.qualityTolerance}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#2A1A0E] font-display">
                      {cap.title}
                    </h3>

                    <p className="text-xs text-[#5C4533] leading-relaxed">
                      {cap.description}
                    </p>

                    <div className="pt-2 space-y-2 text-xs">
                      <span className="text-[10px] font-mono uppercase text-[#D4621A] block font-bold">
                        Process Specifications:
                      </span>
                      <ul className="space-y-1.5 text-[#5C4533]">
                        {cap.specifications.map((spec, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4621A] shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E8D4BE] text-xs font-mono text-[#5C4533]">
                    <span className="text-[10px] uppercase text-[#D4621A] block font-semibold">Equipment Deployed:</span>
                    <span className="text-[#2A1A0E]">{cap.equipmentUsed}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Custom Engineering & OEM Modifications */}
        <ScrollReveal>
          <div className="bg-[#FAFBF7] border border-[#E8D4BE] rounded-[28px] p-8 space-y-6 shadow-sm">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono text-[#D4621A] uppercase font-bold block">
                Bespoke Factory Tooling
              </span>
              <h3 className="text-2xl font-bold text-[#2A1A0E] font-display">
                Custom Machinery Modification & Attachment Fabrication
              </h3>
              <p className="text-xs text-[#5C4533] leading-relaxed">
                Have non-standard fabric handling needs? We engineer custom puller rollers, pneumatic presser feet, specialized binding brackets, and multi-needle gauges for unique manufacturing requirements.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/request-quote" className="btn-metallic text-xs font-bold text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all">
                Submit Custom Engineering Requisition &rarr;
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};
