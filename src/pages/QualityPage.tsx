import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { qualitySteps, certificationsList } from '../data/qualityStandards';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const QualityPage: React.FC = () => {
  return (
    <div className="bg-transparent min-h-screen pb-20">

      {/* Header */}
      <div className="bg-[#FAF0E0] border-b border-[#E8D4BE] py-12 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Quality Assurance' }]} />

          <div className="max-w-3xl space-y-3 mt-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4621A] font-bold block">
                Zero-Defect Dispatch Standard
              </span>
              <span className="font-caveat text-base text-[#D4621A] font-bold -rotate-1 select-none">
                ~ 100% bench-tested protocols
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#2A1A0E] font-heading">
              Quality Assurance & <span className="font-serif italic font-normal text-[#D4621A]">Calibration</span> Protocol
            </h1>
            <p className="text-base text-[#5C4533] leading-relaxed font-sans">
              Every industrial sewing machine assembled or serviced by NOVEL SEWING MACHINE CO. is audited against strict metallurgical, dimensional, and continuous 72-hour load criteria.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Quality Certifications Grid */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificationsList.map((cert) => (
              <div key={cert.code} className="bg-white border border-[#E8D4BE] rounded-[28px] p-6 space-y-3 shadow-sm hover:border-[#D4621A] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF0E0] border border-[#E8D4BE] flex items-center justify-center text-[#D4621A]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-[#D4621A] block">{cert.code}</span>
                  <h3 className="font-bold text-[#2A1A0E] text-lg font-heading">{cert.title}</h3>
                  <span className="text-[11px] font-mono text-[#D4621A] font-semibold block mt-0.5">{cert.authority}</span>
                </div>
                <p className="text-xs text-[#5C4533] leading-relaxed font-sans">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* 7-Stage Quality Protocol Breakdown */}
        <ScrollReveal>
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4621A] font-bold block">
                Comprehensive 7-Stage Inspection
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2A1A0E] font-heading">
                The 7-Stage <span className="font-serif italic font-normal text-[#D4621A]">Quality Assurance</span> Procedure
              </h2>
            </div>

            <div className="space-y-4">
              {qualitySteps.map((qs) => (
                <div
                  key={qs.step}
                  className="bg-white border border-[#E8D4BE] rounded-[28px] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#D4621A] hover:shadow-md transition-all shadow-sm"
                >
                  <div className="flex items-start space-x-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF0E0] border border-[#E8D4BE] text-[#D4621A] font-sora font-black text-lg flex items-center justify-center shrink-0">
                      0{qs.step}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-[#2A1A0E] font-heading">{qs.title}</h3>
                      <p className="text-xs text-[#5C4533] leading-relaxed max-w-2xl font-sans">
                        {qs.description}
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#FAFBF7] border border-[#E8D4BE] px-4 py-2.5 rounded-xl shrink-0 w-full md:w-auto text-left md:text-right">
                    <span className="text-[10px] font-mono uppercase text-[#5C4533] block font-bold">Standard Met:</span>
                    <span className="text-xs font-mono text-[#D4621A] font-semibold">{qs.standard}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Dispatch QA Certificate Stamp Box */}
        <ScrollReveal>
          <div className="bg-[#2A1A0E] border border-[#4D3420] rounded-[28px] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-white">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[#F4AE52]">
                <FileCheck className="w-5 h-5" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">Individual Machine Serial QA Passport</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Every dispatched machine includes a signed Inspection Certificate & Test Swatch
              </h3>
              <p className="text-xs text-white/70 max-w-2xl leading-relaxed">
                Stamped with calibrated RPM, oil pump flow rate, and needle-to-hook clearance verified by our lead technician.
              </p>
            </div>

            <Link to="/request-quote" className="btn-neon text-xs font-bold px-6 py-3.5 rounded-full shrink-0 shadow-lg transition-all">
              Request Certified Quotation &rarr;
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};
